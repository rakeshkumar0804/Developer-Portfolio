import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRefreshCw } from 'react-icons/fi';

// FIG.1: IncidentHub AI Interactive Schematic
function IncidentHubSchematic() {
  return (
    <div className="border border-slate-800/80 rounded-xl bg-[#0B101B]/80 backdrop-blur-md p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Schematic Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.1 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      {/* Interactive Blueprint Diagram */}
      <div className="relative py-4 flex flex-col gap-4">
        {/* Row 1: Client & Gateway */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 rounded-lg border border-cyan-500/40 bg-[#0d1527] shadow-[0_0_12px_rgba(34,211,238,0.1)]">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              CLIENT
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">React + TypeScript</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">SPA + Zustand</div>
          </div>

          <div className="p-3 rounded-lg border border-cyan-500/40 bg-[#0d1527] shadow-[0_0_12px_rgba(34,211,238,0.1)]">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              API GATEWAY
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Express / Node.js</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">RBAC & HMAC Verify</div>
          </div>
        </div>

        {/* Protocol Connectors Bar */}
        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2">
          <span>↕ HTTPS REST</span>
          <span>↕ WSS TRIAGE</span>
          <span>↕ OAUTH 2.0</span>
        </div>

        {/* Row 2: OAuth & Real-Time Rooms */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 rounded-lg border border-amber-500/30 bg-[#16130b]">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              OAUTH PROVIDERS
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">GitHub · Sentry</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Slack · Jira Ingestion</div>
          </div>

          <div className="p-3 rounded-lg border border-cyan-500/40 bg-[#0d1527]">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              WEBSOCKET ROOMS
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Live Triage Hub</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Sub-50ms Incident Sync</div>
          </div>
        </div>

        {/* Row 3: Data Tier (Redis + PostgreSQL) */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 rounded-lg border border-rose-500/30 bg-[#180d14]">
            <div className="flex items-center gap-1.5 text-[10px] text-rose-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              REDIS CLUSTER
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Distributed Locking</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Pub/Sub & Rate Limits</div>
          </div>

          <div className="p-3 rounded-lg border border-amber-500/30 bg-[#16130b]">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              POSTGRESQL DB
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Multi-Tenant Store</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Row-Level Security (RLS)</div>
          </div>
        </div>
      </div>

      {/* Schematic Footer */}
      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1 hover:text-cyan-300 cursor-pointer transition-colors">
          <FiRefreshCw className="text-cyan-400" />
          RECONSTRUCT BUILD HISTORY
        </span>
        <span className="text-slate-500">SCRUB THE TIMELINE →</span>
      </div>
    </div>
  );
}

// FIG.2: SyncPad Interactive Schematic
function SyncPadSchematic() {
  return (
    <div className="border border-slate-800/80 rounded-xl bg-[#0B101B]/80 backdrop-blur-md p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Schematic Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.2 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      {/* Interactive Blueprint Diagram */}
      <div className="relative py-4 flex flex-col gap-4">
        {/* Row 1: Monaco Client & Yjs CRDT */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 rounded-lg border border-cyan-500/40 bg-[#0d1527] shadow-[0_0_12px_rgba(34,211,238,0.1)]">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              MONACO EDITOR
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Multi-Tab Client</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Multi-Cursor Awareness</div>
          </div>

          <div className="p-3 rounded-lg border border-cyan-500/40 bg-[#0d1527] shadow-[0_0_12px_rgba(34,211,238,0.1)]">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              YJS CRDT ENGINE
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Conflict-Free Merge</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Deterministic 0ms Sync</div>
          </div>
        </div>

        {/* Protocol Connectors Bar */}
        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2">
          <span>↕ BINARY CRDT STREAM</span>
          <span>↕ WSS ROOM SYNC</span>
          <span>↕ WORKER IPC</span>
        </div>

        {/* Row 2: y-websocket Server & Runtime Engine */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="p-3 rounded-lg border border-amber-500/30 bg-[#16130b]">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Y-WEBSOCKET SERVER
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">Render Cloud Node</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Room Awareness State</div>
          </div>

          <div className="p-3 rounded-lg border border-purple-500/30 bg-[#140d21]">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              WASM / PYODIDE SANDBOX
            </div>
            <div className="text-xs font-sans font-bold text-slate-100 mt-1">In-Browser Python</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">WebAssembly Runtime</div>
          </div>
        </div>

        {/* Row 3: Web Workers Sandbox */}
        <div className="p-3 rounded-lg border border-slate-700/60 bg-[#0c1220]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              WEB WORKER RUNTIME SANDBOX (JS / TS)
            </div>
            <span className="text-[9px] font-mono text-emerald-400">100% ISOLATED MEMORY</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-1">
            Zero server compute cost · Safe client-side loop termination & memory caps
          </div>
        </div>
      </div>

      {/* Schematic Footer */}
      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1 hover:text-cyan-300 cursor-pointer transition-colors">
          <FiRefreshCw className="text-cyan-400" />
          RECONSTRUCT BUILD HISTORY
        </span>
        <span className="text-slate-500">SCRUB THE TIMELINE →</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/40 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12 pt-4"
        >
          <div className="flex items-center">
            <span className="text-[#f59e0b] font-mono font-bold text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              02
            </span>
            <span className="text-[#38bdf8] font-mono text-2xl md:text-3xl mx-2">/</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
              DEPLOYED SYSTEMS
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
            Self-assembling architecture schematics - drawn as you read.
          </p>
        </motion.div>

        {/* ================= SLIDE 1: IncidentHub AI (SYS-01) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-[#0B101B]/40 shadow-2xl"
        >
          {/* Left Column: System Specification */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Header Metadata */}
              <div className="flex items-center gap-3 text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">SYS-01</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  ONLINE 2026
                </span>
              </div>

              {/* Title & Subheading */}
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                IncidentHub AI — Root-Cause Intelligence
              </h3>
              <p className="text-[11px] font-mono font-bold text-cyan-400 tracking-widest uppercase mt-1 mb-4">
                MULTI-TENANT SRE PLATFORM • INCIDENT TRIAGE ENGINE
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-6">
                A multi-tenant engineering incident intelligence platform that correlates signals across GitHub, Sentry, Slack, and Jira to automate outage triage and generate evidence-grounded postmortems.
              </p>

              {/* 3 Metric Telemetry Boxes */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-white">236/236</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    TESTS PASSING
                  </div>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-cyan-400">4</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    OAUTH FLOWS
                  </div>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-emerald-400">100%</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    TENANT ISOLATION
                  </div>
                </div>
              </div>

              {/* Key Architecture Highlights */}
              <div className="space-y-2 mb-6 text-xs text-slate-300 font-sans">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Real OAuth 2.0 integrations with GitHub, Sentry, Slack, and Jira</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Multi-tenant RBAC with granular role permissions and team isolation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Redis-backed distributed locking and idempotent HMAC-verified webhooks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Real-time WebSocket triage rooms for live incident coordination</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#131b2e] border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
              <a
                href="https://incidenthub-ai-web.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/incidenthub-ai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-[#131b2e] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Right Column: FIG.1 Schematic */}
          <div className="lg:col-span-6">
            <IncidentHubSchematic />
          </div>
        </motion.div>

        {/* ================= SLIDE 2: SyncPad (SYS-02) (Alternating Layout) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-[#0B101B]/40 shadow-2xl"
        >
          {/* Left Column: FIG.2 Schematic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SyncPadSchematic />
          </div>

          {/* Right Column: System Specification */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              {/* Header Metadata */}
              <div className="flex items-center gap-3 text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">SYS-02</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold tracking-wider">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  ONLINE 2026
                </span>
              </div>

              {/* Title & Subheading */}
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                SyncPad — Collaborative Code Studio
              </h3>
              <p className="text-[11px] font-mono font-bold text-cyan-400 tracking-widest uppercase mt-1 mb-4">
                CRDT REAL-TIME ENGINE • IN-BROWSER WASM RUNTIME
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-6">
                A real-time collaborative code editor enabling concurrent document editing with conflict-free CRDT synchronization, live multi-cursor awareness, and fully sandboxed in-browser code execution.
              </p>

              {/* 3 Metric Telemetry Boxes */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-emerald-400">0ms</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    CONFLICT RES (CRDT)
                  </div>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-cyan-400">100%</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    WASM EXECUTION
                  </div>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-[#111726] text-center">
                  <div className="text-sm font-mono font-bold text-white">3+</div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                    RUNTIMES (JS/TS/PY)
                  </div>
                </div>
              </div>

              {/* Key Architecture Highlights */}
              <div className="space-y-2 mb-6 text-xs text-slate-300 font-sans">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Yjs CRDTs for deterministic peer synchronization and presence awareness</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>In-browser code execution via Web Workers (JS/TS) and Pyodide WebAssembly (Python)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Standalone y-websocket synchronization server deployed on Render</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono text-xs">▪</span>
                  <span>Monaco Editor integration with multi-language syntax highlighting</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'TypeScript', 'Yjs (CRDT)', 'Monaco Editor', 'Node.js', 'WebSocket', 'Pyodide (WASM)'].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-[#131b2e] border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
              <a
                href="https://sync-pad-client.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/SyncPad"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-[#131b2e] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= SECONDARY & AUXILIARY DEPLOYMENTS ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 tracking-wider mb-4 uppercase">
            <span>//</span>
            <span>SECONDARY & AUXILIARY DEPLOYMENTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PortfolioPulse */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/60 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">SYS-03</span>
                <h4 className="text-sm font-sans font-bold text-white mt-1 mb-1">
                  PortfolioPulse
                </h4>
                <p className="text-xs font-sans text-slate-400 leading-relaxed mb-3">
                  Developer portfolio & GitHub hiring-readiness auditor with 20-point rule engine and Puppeteer crawling.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'Puppeteer', 'GitHub API'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-[#131b2e] border border-slate-800 text-[10px] text-slate-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <a href="https://dev-portfolio-checker.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 text-[11px]">
                  <span>Live Demo</span>
                  <FiExternalLink className="text-[10px]" />
                </a>
                <a href="https://github.com/rakeshkumar0804/dev-portfolio-checker" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white font-mono flex items-center gap-1 text-[11px]">
                  <FiGithub className="text-[10px]" />
                  <span>Source</span>
                </a>
              </div>
            </div>

            {/* Kohli Analytics */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/60 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">SYS-04</span>
                <h4 className="text-sm font-sans font-bold text-white mt-1 mb-1">
                  Kohli Analytics
                </h4>
                <p className="text-xs font-sans text-slate-400 leading-relaxed mb-3">
                  Interactive cricket vector analytics dashboard computing Clutch Index with D3.js and GSAP transitions.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-[#131b2e] border border-slate-800 text-[10px] text-slate-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <a href="https://kohli-analytics.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 text-[11px]">
                  <span>Live Demo</span>
                  <FiExternalLink className="text-[10px]" />
                </a>
                <a href="https://github.com/rakeshkumar0804/kohli-analytics" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white font-mono flex items-center gap-1 text-[11px]">
                  <FiGithub className="text-[10px]" />
                  <span>Source</span>
                </a>
              </div>
            </div>

            {/* Solar-System-Explorer */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/60 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">AUX-01</span>
                <h4 className="text-sm font-sans font-bold text-white mt-1 mb-1">
                  Solar-System-Explorer
                </h4>
                <p className="text-xs font-sans text-slate-400 leading-relaxed mb-3">
                  3D interactive celestial orbital visualizer with astronomical telemetry and orbital simulation.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {['React', 'Three.js', 'TypeScript', 'Zustand'].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded bg-[#131b2e] border border-slate-800 text-[10px] text-slate-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <a href="https://solar-system-explorer-ten-phi.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 text-[11px]">
                  <span>Live Demo</span>
                  <FiExternalLink className="text-[10px]" />
                </a>
                <a href="https://github.com/rakeshkumar0804/Solar-System-Explorer" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white font-mono flex items-center gap-1 text-[11px]">
                  <FiGithub className="text-[10px]" />
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
