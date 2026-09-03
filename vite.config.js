import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

function devApiPlugin() {
  return {
    name: 'dev-api-ask',
    configureServer(server) {
      server.middlewares.use('/api/ask', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let bodyStr = '';
        req.on('data', (chunk) => {
          bodyStr += chunk;
        });

        req.on('end', async () => {
          try {
            const body = JSON.parse(bodyStr || '{}');
            const question = (body.question || body.query || '').trim();

            if (!question) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Question is required' }));
              return;
            }

            const env = loadEnv('', process.cwd(), '');
            const apiKey = env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || env.GOOGLE_API_KEY;

            if (!apiKey) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  error: 'api_key_missing',
                  message: '[ERROR] agent unreachable (API key unconfigured) — try quick commands like whoami, projects --list, skills --list.',
                })
              );
              return;
            }

            const contextPath = path.resolve(process.cwd(), 'src/data/profile-context.json');
            const profileContext = JSON.parse(fs.readFileSync(contextPath, 'utf-8'));

            const systemInstruction = `You are Rakesh Kumar's portfolio terminal assistant.
Answer the user's question ONLY using the provided profile context.

CRITICAL GUARDRAILS:
1. Never invent or hallucinate metrics, dates, companies, credentials, or projects not present in the context.
2. Never use the word "Fresher" or refer to Rakesh as a fresher.
3. If asked about something not in the context, state honestly: "[NOTICE] That information is outside my verified profile context." and suggest asking about TRACE, CHRONOS, SyncPad, IncidentHub AI, technical skills, or his internship at Codetech.
4. Keep the full response concise (under 90 words, 2-4 sentences). Always finish your thought and conclude your final sentence cleanly — never cut off mid-sentence. Use a direct, sharp, technical terminal tone without pleasantries or conversational filler.

VERIFIED PROFILE CONTEXT:
${JSON.stringify(profileContext, null, 2)}`;

            const CANDIDATE_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash'];
            let answer = null;
            let lastStatus = 500;

            for (const model of CANDIDATE_MODELS) {
              const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
              console.log(`[Dev API /ask] Invoking model: "${model}"`);

              const geminiRes = await fetch(endpoint, {
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
              });

              if (geminiRes.ok) {
                const data = await geminiRes.json();
                const candidate = data.candidates?.[0];
                const parts = candidate?.content?.parts || [];
                const textContent = parts
                  .filter((p) => p.text && !p.thought)
                  .map((p) => p.text)
                  .join('\n')
                  .trim();

                answer =
                  textContent ||
                  parts[0]?.text?.trim() ||
                  '[NOTICE] Query completed with no conclusive output. Try a quick command.';
                console.log(`[Dev API /ask] Model "${model}" succeeded with 200 OK.`);
                break;
              } else {
                const errText = await geminiRes.text();
                console.warn(`[Dev API /ask] Error from model "${model}" (${geminiRes.status}):`, errText);
                lastStatus = geminiRes.status;
              }
            }

            if (!answer) {
              res.statusCode = lastStatus;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'agent_error', message: '[ERROR] agent unreachable — try a quick command instead.' }));
              return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ answer }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'server_error', message: '[ERROR] agent execution error — try a quick command instead.' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    devApiPlugin(),
  ],
});
