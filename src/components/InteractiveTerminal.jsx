import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiCornerDownLeft, FiRefreshCw, FiZap } from 'react-icons/fi';
import profileContext from '../data/profile-context.json';

const QUICK_COMMANDS = [
  { cmd: 'whoami', label: 'whoami', desc: 'Identity & Bio' },
  { cmd: 'skills --list', label: 'skills --list', desc: 'Technical Stack' },
  { cmd: 'experience --show', label: 'experience --show', desc: 'Internship & History' },
  { cmd: 'projects --list', label: 'projects --list', desc: '4 Core Systems' },
  { cmd: 'contact', label: 'contact', desc: 'Comms & Socials' },
  { cmd: 'help', label: 'help', desc: 'Command Manual' },
  { cmd: 'clear', label: 'clear', desc: 'Reset Screen' },
];

const DETERMINISTIC_RESPONSES = {
  whoami: `NAME        : ${profileContext.profile.name}
ROLE        : ${profileContext.profile.role}
EDUCATION   : ${profileContext.profile.education.degree} (${profileContext.profile.education.institution}, ${profileContext.profile.education.graduationYear})
LOCATION    : ${profileContext.profile.location}
LEETCODE    : ${profileContext.profile.leetcode.solved} Solved (DSA)
AVAILABILITY: ${profileContext.profile.availability}`,

  'skills --list': `LANGUAGES : ${profileContext.skills.languages.join(' · ')}
FRONTEND  : ${profileContext.skills.frontend.join(' · ')}
BACKEND   : ${profileContext.skills.backend.join(' · ')}
DATABASES : ${profileContext.skills.databases.join(' · ')}
DEVOPS    : ${profileContext.skills.toolsAndDevops.join(' · ')}
CS CORE   : ${profileContext.skills.coreFundamentals.join(' · ')}`,

  skills: `LANGUAGES : ${profileContext.skills.languages.join(' · ')}
FRONTEND  : ${profileContext.skills.frontend.join(' · ')}
BACKEND   : ${profileContext.skills.backend.join(' · ')}
DATABASES : ${profileContext.skills.databases.join(' · ')}
DEVOPS    : ${profileContext.skills.toolsAndDevops.join(' · ')}
CS CORE   : ${profileContext.skills.coreFundamentals.join(' · ')}`,

  'experience --show': `ORGANIZATION : ${profileContext.internship.company}
DESIGNATION  : ${profileContext.internship.role}
DURATION     : ${profileContext.internship.period} (${profileContext.internship.workMode})
HIGHLIGHTS   :
  ▪ ${profileContext.internship.highlights[0]}
  ▪ ${profileContext.internship.highlights[1]}
  ▪ ${profileContext.internship.highlights[2]}`,

  experience: `ORGANIZATION : ${profileContext.internship.company}
DESIGNATION  : ${profileContext.internship.role}
DURATION     : ${profileContext.internship.period} (${profileContext.internship.workMode})
HIGHLIGHTS   :
  ▪ ${profileContext.internship.highlights[0]}
  ▪ ${profileContext.internship.highlights[1]}
  ▪ ${profileContext.internship.highlights[2]}`,

  'projects --list': `[SYS-01] TRACE — Temporal Root-cause Analysis & Causal Engine
         89.5% accuracy vs 73.7% naive baseline across 19 hidden-ground-truth incidents.
[SYS-02] CHRONOS — Constraint-Based Timetable Scheduling Engine
         2,328 backtracks vs 46 nodes (0 backtracks) using MRV + LCV CSP heuristics.
[SYS-03] SyncPad — Collaborative Code Studio
         0ms conflict resolution with Yjs CRDTs + in-browser sandboxed Pyodide WASM runtime.
[SYS-04] IncidentHub AI — Root-Cause Intelligence
         Multi-tenant SRE platform with 4 OAuth flows & 236/236 passing unit tests.`,

  projects: `[SYS-01] TRACE — Temporal Root-cause Analysis & Causal Engine
         89.5% accuracy vs 73.7% naive baseline across 19 hidden-ground-truth incidents.
[SYS-02] CHRONOS — Constraint-Based Timetable Scheduling Engine
         2,328 backtracks vs 46 nodes (0 backtracks) using MRV + LCV CSP heuristics.
[SYS-03] SyncPad — Collaborative Code Studio
         0ms conflict resolution with Yjs CRDTs + in-browser sandboxed Pyodide WASM runtime.
[SYS-04] IncidentHub AI — Root-Cause Intelligence
         Multi-tenant SRE platform with 4 OAuth flows & 236/236 passing unit tests.`,

  contact: `EMAIL    : ${profileContext.profile.email}
GITHUB   : ${profileContext.profile.github}
LINKEDIN : ${profileContext.profile.linkedin}
LOCATION : ${profileContext.profile.location}`,

  help: `COMMAND MANUAL:
  whoami            Print engineer overview & background
  skills --list     Display full technical capabilities & stack
  experience --show View software development internship details
  projects --list   Inspect 4 flagship systems & verified metrics
  contact           Open communication channels
  clear             Purge terminal session history
  <query>           Type any natural-language question for grounded AI evaluation`,
};

function getLocalGroundedFallback(query) {
  const q = query.toLowerCase();
  if (q.includes('trace')) {
    return `TRACE is Rakesh's flagship incident investigation engine. It tests multi-hypothesis falsification loops on 19 hidden-ground-truth production outages, achieving 89.5% root-cause accuracy vs 73.7% for a naive single-shot LLM baseline. Stack: Python, FastAPI, PostgreSQL, pgvector, Gemini API, Next.js, D3.js, GSAP.`;
  }
  if (q.includes('chronos') || q.includes('timetable') || q.includes('schedule') || q.includes('csp')) {
    return `CHRONOS is a constraint-based timetable scheduling engine solving CSPs with MRV and LCV heuristics. Its signature D3.js demo proves a 98% search-space reduction (2,328 naive backtracks vs 46 nodes with heuristic search). Stack: React, Node.js, PostgreSQL, Gemini API, D3.js.`;
  }
  if (q.includes('syncpad') || q.includes('crdt') || q.includes('editor') || q.includes('wasm')) {
    return `SyncPad is a real-time collaborative code editor with conflict-free Yjs CRDT synchronization and in-browser sandboxed execution using Web Workers (JS/TS) and Pyodide WebAssembly (Python). Stack: React, TypeScript, Yjs, Monaco Editor, Pyodide WASM.`;
  }
  if (q.includes('incidenthub') || q.includes('sre') || q.includes('triage') || q.includes('oauth')) {
    return `IncidentHub AI is a multi-tenant SRE incident platform featuring real OAuth 2.0 (GitHub, Sentry, Slack, Jira), Redis Redlock concurrency control, WebSocket triage rooms, and a 236/236 passing test suite. Stack: React, TypeScript, Node.js, PostgreSQL, Redis.`;
  }
  if (q.includes('intern') || q.includes('codetech') || q.includes('work') || q.includes('company')) {
    return `Rakesh completed a Software Development Internship at Codetech IT Solutions (Jan–Apr 2026), where he engineered an internal Employee Management System with Node.js, Express, MongoDB, and secured it with 3-tier RBAC and stateless JWT authentication.`;
  }
  if (q.includes('postgres') || q.includes('database') || q.includes('sql') || q.includes('mongo')) {
    return `Rakesh has deep hands-on expertise with PostgreSQL, pgvector (vector search in TRACE), MongoDB (IncidentHub/Codetech), Redis (distributed locking & pub/sub), SQLite, and holds HackerRank SQL (Advanced) Verified certification.`;
  }
  if (q.includes('strongest') || q.includes('best project') || q.includes('flagship')) {
    return `Rakesh's flagship system is TRACE (SYS-01) — a temporal root-cause analysis engine benchmarked at 89.5% accuracy across 19 hidden-ground-truth incident scenarios, utilizing adversarial falsification loops and pgvector similarity search.`;
  }
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree')) {
    return `Rakesh holds a B.Tech in Computer Science & Engineering (Class of 2026) from Parul University, Vadodara, with coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.`;
  }
  return null;
}

const INITIAL_GREETING = {
  id: 'init-1',
  type: 'system',
  text: `RAKESH-CORE GROUNDED AGENT [v2.4] — SECURE TERMINAL UPLINK ESTABLISHED
Type 'help' for command manual or ask any direct question about systems, stack, or experience.`,
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([INITIAL_GREETING]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll terminal on new history items
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isProcessing]);

  const executeCommand = async (rawInput) => {
    const trimmed = (rawInput || '').trim();
    if (!trimmed || isProcessing) return;

    setInput('');
    setHistoryIdx(-1);
    setCommandHistory((prev) => [trimmed, ...prev.filter((c) => c !== trimmed)]);

    const userEntryId = `cmd-${Date.now()}`;
    setHistory((prev) => [
      ...prev,
      {
        id: userEntryId,
        type: 'user',
        promptText: `rakesh@core:~$ ${trimmed}`,
      },
    ]);

    const normalizedCmd = trimmed.toLowerCase();

    // 1. Check for 'clear'
    if (normalizedCmd === 'clear') {
      setHistory([
        {
          id: `init-${Date.now()}`,
          type: 'system',
          text: `SESSION RESET • RAKESH-CORE v2.4 READY. Type 'help' or ask a question.`,
        },
      ]);
      return;
    }

    // 2. Check deterministic quick commands
    if (DETERMINISTIC_RESPONSES[normalizedCmd]) {
      setHistory((prev) => [
        ...prev,
        {
          id: `res-${Date.now()}`,
          type: 'response',
          text: DETERMINISTIC_RESPONSES[normalizedCmd],
        },
      ]);
      return;
    }

    // 3. Free-text Natural Language Query -> Call Serverless AI API (/api/ask)
    setIsProcessing(true);

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });

      if (response.ok) {
        const data = await response.json();
        const answerText = data.answer || '[NOTICE] No response content generated.';
        streamAnswer(answerText);
      } else {
        // Attempt local grounded fallback if API route is unavailable / rate-limited
        const localFallback = getLocalGroundedFallback(trimmed);
        if (localFallback) {
          streamAnswer(`[LOCAL EVIDENCE GROUNDING]\n${localFallback}`);
        } else {
          setHistory((prev) => [
            ...prev,
            {
              id: `err-${Date.now()}`,
              type: 'error',
              text: `[ERROR] agent unreachable — try quick commands: 'projects --list', 'skills --list', 'whoami', 'help'`,
            },
          ]);
          setIsProcessing(false);
        }
      }
    } catch (err) {
      // Network failure or offline mode -> check local fallback
      const localFallback = getLocalGroundedFallback(trimmed);
      if (localFallback) {
        streamAnswer(`[LOCAL EVIDENCE GROUNDING]\n${localFallback}`);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            type: 'error',
            text: `[ERROR] agent unreachable — try quick commands: 'projects --list', 'skills --list', 'whoami', 'help'`,
          },
        ]);
        setIsProcessing(false);
      }
    }
  };

  // Stream text character-by-character for realistic terminal telemetry
  const streamAnswer = (fullText) => {
    const entryId = `ai-${Date.now()}`;
    setHistory((prev) => [
      ...prev,
      {
        id: entryId,
        type: 'ai',
        text: '',
        isStreaming: true,
      },
    ]);

    let currIdx = 0;
    const chunkSize = Math.max(2, Math.floor(fullText.length / 40));
    const interval = setInterval(() => {
      currIdx += chunkSize;
      if (currIdx >= fullText.length) {
        currIdx = fullText.length;
        clearInterval(interval);
        setHistory((prev) =>
          prev.map((item) =>
            item.id === entryId ? { ...item, text: fullText, isStreaming: false } : item
          )
        );
        setIsProcessing(false);
      } else {
        const currentSlice = fullText.slice(0, currIdx);
        setHistory((prev) =>
          prev.map((item) =>
            item.id === entryId ? { ...item, text: currentSlice } : item
          )
        );
      }
    }, 20);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIdx + 1, commandHistory.length - 1);
        setHistoryIdx(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(commandHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full mt-10 font-mono">
      {/* Terminal Title Bar Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 text-slate-300 text-xs tracking-wider">
          <span className="text-cyan-400 font-bold">$</span>
          <span className="text-slate-100 font-bold">query</span>
          <span className="text-slate-500">--agent</span>
          <span className="text-cyan-300">rakesh-core</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 font-semibold">GROUNDED EVIDENCE STREAM</span>
        </div>
      </div>

      {/* Main Terminal Shell Window */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="border border-slate-800/90 rounded-xl bg-[#070B14]/90 backdrop-blur-md shadow-2xl overflow-hidden cursor-text transition-all focus-within:border-cyan-500/50 hover:border-slate-700/80"
      >
        {/* Top Shell Controls Bar */}
        <div className="px-4 py-2.5 bg-[#0B101B] border-b border-slate-800/80 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <FiTerminal className="text-cyan-400 text-xs" />
              <span>rakesh@core:~ (bash)</span>
            </span>
          </div>

          <div className="text-[10px] text-slate-500 tracking-widest uppercase flex items-center gap-1.5">
            <span>MODEL: GEMINI-1.5-FLASH</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-semibold">GROUNDED</span>
          </div>
        </div>

        {/* Terminal Output Area (Scrollable History) */}
        <div className="p-4 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3.5 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
          {history.map((item) => {
            if (item.type === 'user') {
              return (
                <div key={item.id} className="flex items-start gap-2 text-cyan-300 font-semibold">
                  <span className="text-slate-500 select-none">&gt;</span>
                  <span>{item.promptText}</span>
                </div>
              );
            }

            if (item.type === 'system') {
              return (
                <div
                  key={item.id}
                  className="text-slate-400 bg-slate-900/40 border-l-2 border-cyan-400 pl-3 py-1.5 text-xs whitespace-pre-wrap leading-relaxed"
                >
                  {item.text}
                </div>
              );
            }

            if (item.type === 'error') {
              return (
                <div
                  key={item.id}
                  className="text-rose-400 bg-rose-950/20 border-l-2 border-rose-500 pl-3 py-1.5 text-xs font-mono"
                >
                  {item.text}
                </div>
              );
            }

            // 'response' or 'ai'
            return (
              <div
                key={item.id}
                className="text-slate-200 bg-[#0B101B]/50 border-l-2 border-cyan-500/70 pl-3.5 py-2 whitespace-pre-wrap font-mono leading-relaxed"
              >
                {item.text}
                {item.isStreaming && (
                  <span className="inline-block w-2 h-3.5 ml-1 bg-cyan-400 animate-pulse align-middle" />
                )}
              </div>
            );
          })}

          {isProcessing && !history.some((h) => h.isStreaming) && (
            <div className="flex items-center gap-2 text-cyan-400 text-xs py-1">
              <FiZap className="animate-spin text-xs" />
              <span>[AI] evaluating grounded evidence against profile context...</span>
            </div>
          )}

          <div ref={terminalEndRef} />
        </div>

        {/* Input Prompt Bar */}
        <div className="px-4 py-3 bg-[#050811]/90 border-t border-slate-800/80 flex items-center gap-2.5">
          <span className="text-emerald-400 font-bold shrink-0 select-none text-xs sm:text-sm">
            rakesh@core:~$
          </span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            placeholder={
              isProcessing
                ? 'Processing grounded evaluation...'
                : "Type a command ('help', 'projects --list') or ask any question..."
            }
            className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono caret-cyan-400 disabled:opacity-50"
            maxLength={300}
            autoComplete="off"
            spellCheck="false"
          />

          <button
            type="button"
            onClick={() => executeCommand(input)}
            disabled={!input.trim() || isProcessing}
            className="p-1.5 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer shrink-0"
            title="Execute (Enter)"
          >
            <FiCornerDownLeft className="text-sm" />
          </button>
        </div>
      </div>

      {/* Quick Command Navigation Chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-500 tracking-wider uppercase mr-1 select-none">
          Quick Commands:
        </span>
        {QUICK_COMMANDS.map((qc) => (
          <button
            key={qc.cmd}
            type="button"
            onClick={() => executeCommand(qc.cmd)}
            disabled={isProcessing}
            className="px-2.5 py-1 rounded-md border border-slate-800/80 bg-[#0B101B]/60 hover:bg-cyan-950/30 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-all cursor-pointer disabled:opacity-40"
            title={qc.desc}
          >
            {qc.label}
          </button>
        ))}
      </div>
    </div>
  );
}
