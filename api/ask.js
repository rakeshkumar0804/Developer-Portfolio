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

// Candidate models: gemini-2.5-flash (primary), followed by gemini-2.0-flash
const CANDIDATE_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash'];

function isComplete(text) {
  if (!text) return false;
  const trimmed = text.trim();
  return /[.!?)"'`\]}]$/.test(trimmed);
}

function sanitizeCompleteResponse(text) {
  if (!text) return text;
  let trimmed = text.trim();
  if (isComplete(trimmed)) return trimmed;

  // Try to find the last complete sentence boundary
  const lastPeriod = Math.max(
    trimmed.lastIndexOf('. '),
    trimmed.lastIndexOf('.\n'),
    trimmed.lastIndexOf('! '),
    trimmed.lastIndexOf('? ')
  );

  if (lastPeriod > 40) {
    return trimmed.slice(0, lastPeriod + 1).trim();
  }

  // Remove trailing comma, colon, semicolon, dash, or conjunction
  trimmed = trimmed.replace(/[,;:\-\s]+$/, '');
  return trimmed ? trimmed + '.' : text;
}

export default async function handler(req, res) {
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
4. Always complete your response as a full sentence or thought. If the topic is broad, briefly summarize rather than starting a long list you can't finish within the token budget. Never stop mid-sentence or end on a comma.
5. Use a direct, sharp, technical terminal tone without pleasantries or conversational filler. Keep the response to 2-4 complete, articulate sentences.

VERIFIED PROFILE CONTEXT:
${JSON.stringify(profileContext, null, 2)}`;

    let lastError = null;
    let successfulAnswer = null;

    for (const model of CANDIDATE_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const logEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=[REDACTED]`;

      console.log(`[API /ask] Invoking model: "${model}" | Target Endpoint: ${logEndpoint}`);

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
              maxOutputTokens: 600,
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0];

          if (candidate?.finishReason === 'MAX_TOKENS') {
            console.warn(`[API /ask] Warning: Model "${model}" hit MAX_TOKENS limit.`);
          }

          const parts = candidate?.content?.parts || [];
          const textContent = parts
            .filter((p) => p.text && !p.thought)
            .map((p) => p.text)
            .join('\n')
            .trim();

          let candidateAnswer =
            textContent ||
            parts[0]?.text?.trim() ||
            '[NOTICE] Query completed with no conclusive output. Try a quick command.';

          // Safety net check: verify the answer doesn't end abruptly (e.g. on a comma or unfinished sentence)
          if (!isComplete(candidateAnswer)) {
            console.log(`[API /ask] Incomplete ending detected on "${model}". Attempting targeted single-shot completion retry...`);
            try {
              const retryRes = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [
                    {
                      role: 'user',
                      parts: [
                        {
                          text: `${systemInstruction}\n\nUSER QUESTION: ${question}\n\nIMPORTANT: Summarize your answer in 2 to 3 complete sentences. You MUST conclude your final sentence cleanly with a period.`,
                        },
                      ],
                    },
                  ],
                  generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 600,
                  },
                }),
              });

              if (retryRes.ok) {
                const retryData = await retryRes.json();
                const retryParts = retryData.candidates?.[0]?.content?.parts || [];
                const retryText = retryParts
                  .filter((p) => p.text && !p.thought)
                  .map((p) => p.text)
                  .join('\n')
                  .trim();
                if (retryText) {
                  candidateAnswer = retryText;
                }
              }
            } catch (retryErr) {
              console.warn('[API /ask] Single-shot completion retry error:', retryErr);
            }

            candidateAnswer = sanitizeCompleteResponse(candidateAnswer);
          }

          successfulAnswer = candidateAnswer;
          console.log(`[API /ask] Model "${model}" responded successfully with 200 OK. Output length: ${successfulAnswer.length} chars.`);
          break;
        } else {
          const errText = await response.text();
          console.warn(`[API /ask] Gemini API HTTP ${response.status} on model "${model}":`, errText);
          lastError = { status: response.status, text: errText, model };
        }
      } catch (fetchErr) {
        console.error(`[API /ask] Network error calling model "${model}":`, fetchErr);
        lastError = { status: 500, text: String(fetchErr), model };
      }
    }

    if (successfulAnswer) {
      return res.status(200).json({ answer: successfulAnswer });
    }

    return res.status(lastError?.status || 500).json({
      error: 'agent_error',
      message: '[ERROR] agent unreachable — try a quick command instead.',
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
