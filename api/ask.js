import profileContext from '../src/data/profile-context.json' assert { type: 'json' };

export default async function handler(req, res) {
  // Allow CORS if needed
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
4. Keep the response to 2-4 lines maximum. Use a direct, sharp, technical terminal tone without pleasantries or filler.

VERIFIED PROFILE CONTEXT:
${JSON.stringify(profileContext, null, 2)}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
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
            maxOutputTokens: 250,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', response.status, errText);
      return res.status(response.status).json({
        error: 'agent_error',
        message: '[ERROR] agent unreachable — try a quick command instead.',
      });
    }

    const data = await response.json();
    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      '[NOTICE] Query completed with no conclusive output. Try a quick command.';

    return res.status(200).json({ answer });
  } catch (error) {
    console.error('API /ask execution error:', error);
    return res.status(500).json({
      error: 'server_error',
      message: '[ERROR] agent execution error — try a quick command instead.',
    });
  }
}
