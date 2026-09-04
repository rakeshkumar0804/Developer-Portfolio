import fs from 'fs';
import path from 'path';

function loadProfileContext() {
  const candidatePaths = [
    path.join(process.cwd(), 'api', 'profile-context.json'),
    path.join(process.cwd(), 'src', 'data', 'profile-context.json'),
  ];

  for (const candidate of candidatePaths) {
    try {
      if (fs.existsSync(candidate)) {
        return JSON.parse(fs.readFileSync(candidate, 'utf-8'));
      }
    } catch (e) {
      // try next candidate path
    }
  }

  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'api', 'profile-context.json'), 'utf-8'));
}

const profileContext = loadProfileContext();

// Ultra-fast, low-latency verified models (Gemini 2.5 Flash responds in 1.5-2.5s)
const CANDIDATE_MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];

// In-memory cache for common suggestion chips and repeated questions
const responseCache = new Map();

function normalizeQuery(q) {
  return (q || '').toLowerCase().trim().replace(/[^a-z0-9]/g, '');
}

function isComplete(text) {
  if (!text) return false;
  const trimmed = text.trim();
  return /[.!?)"'`\]}]$/.test(trimmed);
}

function sanitizeCompleteResponse(text) {
  if (!text) return text;
  const trimmed = text.trim();
  if (isComplete(trimmed)) return trimmed;

  // If response was cut mid-sentence, trim back to the last complete sentence
  const lastPeriod = Math.max(
    trimmed.lastIndexOf('. '),
    trimmed.lastIndexOf('.\n'),
    trimmed.lastIndexOf('! '),
    trimmed.lastIndexOf('? ')
  );

  if (lastPeriod > 30) {
    return trimmed.slice(0, lastPeriod + 1).trim();
  }

  return trimmed;
}

export default async function handler(req, res) {
  const reqStart = Date.now();

  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const question = (body.question || body.query || '').trim();

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (question.length > 500) {
      return res.status(400).json({ error: 'Query exceeds maximum allowed length (500 chars)' });
    }

    const normKey = normalizeQuery(question);

    // 1. Check in-memory cache for instant response (<2ms)
    if (responseCache.has(normKey)) {
      const cachedAnswer = responseCache.get(normKey);
      const latencyMs = Date.now() - reqStart;
      console.log(`[API /ask] CACHE HIT for "${question}" (${latencyMs}ms)`);
      return res.status(200).json({
        answer: cachedAnswer,
        cached: true,
        latencyMs,
      });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      console.error('[API /ask] GEMINI_API_KEY missing from environment.');
      return res.status(503).json({
        error: 'api_key_missing',
        message: '[ERROR] agent unreachable (API key unconfigured) — try quick commands like whoami, projects --list, skills --list.',
      });
    }

    const systemInstruction = `You are Rakesh Kumar's portfolio terminal assistant.
Answer the user's question ONLY using the provided profile context.

CRITICAL GUARDRAILS:
1. Never invent or hallucinate metrics, dates, companies, credentials, or projects not present in the context.
2. Never use the word "Fresher" or refer to Rakesh as a fresher.
3. If asked about something not in the context, state honestly: "[NOTICE] That information is outside my verified profile context." and suggest asking about TRACE, CHRONOS, SyncPad, IncidentHub AI, technical skills, or his internship at Codetech.
4. Keep your response concise, ideally under 80 words, but always finish your sentence completely — never stop mid-thought.
5. Use a direct, sharp, technical terminal tone without pleasantries or conversational filler.

VERIFIED PROFILE CONTEXT:
${JSON.stringify(profileContext, null, 2)}`;

    let lastError = null;
    let successfulAnswer = null;

    for (const model of CANDIDATE_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const logEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=[REDACTED]`;

      console.log(`[API /ask] Invoking model: "${model}" | Target Endpoint: ${logEndpoint}`);

      // 8-second circuit breaker to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const modelCallStart = Date.now();

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemInstruction}\n\nUSER QUESTION: ${question}` }],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 800,
            },
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const modelLatency = Date.now() - modelCallStart;

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0];
          const finishReason = candidate?.finishReason;

          console.log(`[API /ask] Model "${model}" responded in ${modelLatency}ms. finishReason: "${finishReason}"`);

          if (finishReason === 'MAX_TOKENS') {
            console.warn(`[API /ask] Warning: Model "${model}" hit MAX_TOKENS limit!`);
          }

          const parts = candidate?.content?.parts || [];
          const textContent = parts
            .filter((p) => p.text && !p.thought)
            .map((p) => p.text)
            .join('\n')
            .trim();

          const candidateAnswer =
            textContent ||
            parts[0]?.text?.trim() ||
            '[NOTICE] Query completed with no conclusive output. Try a quick command.';

          successfulAnswer = sanitizeCompleteResponse(candidateAnswer);

          // Store in cache for future instant responses
          responseCache.set(normKey, successfulAnswer);

          const totalElapsed = Date.now() - reqStart;
          console.log(`[API /ask] Total request latency: ${totalElapsed}ms (Model: ${modelLatency}ms)`);

          return res.status(200).json({
            answer: successfulAnswer,
            cached: false,
            latencyMs: totalElapsed,
          });
        } else {
          const errText = await response.text();
          console.warn(`[API /ask] Gemini API HTTP ${response.status} on model "${model}" (${modelLatency}ms):`, errText);
          lastError = { status: response.status, text: errText, model };
        }
      } catch (fetchErr) {
        clearTimeout(timeoutId);
        const isAbort = fetchErr.name === 'AbortError';
        console.error(`[API /ask] ${isAbort ? 'Timeout (>8s)' : 'Network error'} calling model "${model}":`, fetchErr);
        lastError = { status: 504, text: isAbort ? 'Gateway Timeout' : String(fetchErr), model };
      }
    }

    return res.status(lastError?.status || 500).json({
      error: 'agent_error',
      message: '[NOTICE] Agent response taking longer than usual — try quick commands like whoami, projects --list, skills --list.',
      details: lastError?.text || 'Model call failed',
    });
  } catch (error) {
    console.error('API /ask execution error:', error);
    return res.status(500).json({
      error: 'server_error',
      message: '[ERROR] agent execution error — try a quick command instead.',
    });
  }
}
