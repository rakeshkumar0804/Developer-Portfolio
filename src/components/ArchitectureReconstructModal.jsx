import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight, FiPlus, FiMinus, FiRotateCcw, FiCheckCircle } from 'react-icons/fi';

const reconstructionData = {
  'trace': {
    fig: 'FIG.1',
    sysId: 'SYS-01',
    title: 'TRACE',
    subtitle: 'TEMPORAL ROOT-CAUSE ANALYSIS & CAUSAL ENGINE',
    milestones: [
      {
        step: 1,
        hash: 'f9a21b0',
        time: 'T-48:00',
        message: 'feat(sandbox): Synthetic production sandbox & hidden ground-truth telemetry injector',
        activeNodes: ['sandbox', 'fastapi'],
        activeLinks: ['telemetry'],
        resolvedTitle: 'Synthetic Outage Ground-Truth Isolation',
        resolvedDesc: 'Constructed isolated multi-service topology with 3 complex incident archetypes (cascading failures, connection pool exhaustion, memory leaks) with secret ground truth.',
      },
      {
        step: 2,
        hash: 'b14c82d',
        time: 'T-36:00',
        message: 'feat(vector): pgvector similarity indexing & temporal evidence correlation',
        activeNodes: ['sandbox', 'fastapi', 'postgres'],
        activeLinks: ['telemetry', 'vector'],
        resolvedTitle: 'High-Dimensional Trace Correlation',
        resolvedDesc: 'Indexed high-frequency metrics and stack traces into PostgreSQL using pgvector cosine embeddings to correlate distributed outage signatures.',
      },
      {
        step: 3,
        hash: 'a78d093',
        time: 'T-24:00',
        message: 'feat(engine): Multi-hypothesis generator & adversarial falsification loop',
        activeNodes: ['sandbox', 'fastapi', 'gemini', 'postgres'],
        activeLinks: ['telemetry', 'vector', 'gemini'],
        resolvedTitle: 'LLM Hallucination & Confirmation Bias Mitigation',
        resolvedDesc: 'Deployed competitive hypothesis framework where Gemini API actively generates disproving evidence to invalidate false leads before final conclusion.',
      },
      {
        step: 4,
        hash: 'c2094ef',
        time: 'T-12:00',
        message: 'feat(viz): Interactive temporal DAG graph visualizer with D3.js and GSAP',
        activeNodes: ['sandbox', 'fastapi', 'gemini', 'postgres', 'd3graph'],
        activeLinks: ['telemetry', 'vector', 'gemini', 'graph'],
        resolvedTitle: 'Causal Sequence Transparency',
        resolvedDesc: 'Rendered interactive Directed Acyclic Graph projecting root-cause propagation paths with live timeline scrubbing and confidence scoring.',
      },
      {
        step: 5,
        hash: 'e81a902',
        time: 'T-00:00 [PROD]',
        message: 'release: 89.5% accuracy benchmark across 19 hidden-ground-truth incidents',
        activeNodes: ['sandbox', 'fastapi', 'gemini', 'postgres', 'd3graph'],
        activeLinks: ['telemetry', 'vector', 'gemini', 'graph'],
        resolvedTitle: 'Production RCA Benchmark Verified',
        resolvedDesc: 'Outperformed naive single-shot LLM baseline (89.5% vs 73.7%) with zero guesswork and fully documented failure modes.',
      },
    ],
    nodes: [
      { id: 'sandbox', label: 'Synthetic Sandbox', sub: 'Injected Telemetry', x: 80, y: 70, type: 'cyan' },
      { id: 'fastapi', label: 'FastAPI Engine', sub: 'Evidence Correlation', x: 290, y: 70, type: 'cyan' },
      { id: 'gemini', label: 'Hypothesis Engine', sub: 'Adversarial Falsifier', x: 500, y: 70, type: 'amber' },
      { id: 'postgres', label: 'PostgreSQL + pgvector', sub: 'Vector Similarity', x: 80, y: 220, type: 'rose' },
      { id: 'd3graph', label: 'Causal DAG Render', sub: 'D3.js + GSAP', x: 290, y: 220, type: 'purple' },
    ],
  },
  'chronos': {
    fig: 'FIG.2',
    sysId: 'SYS-02',
    title: 'CHRONOS',
    subtitle: 'CSP BACKTRACKING · LIVE CONSTRAINT VISUALIZATION',
    milestones: [
      {
        step: 1,
        hash: 'a194f02',
        time: 'T-40:00',
        message: 'feat(csp): Constraint Satisfaction Problem engine & domain model representation',
        activeNodes: ['solver', 'heuristics'],
        activeLinks: ['csp'],
        resolvedTitle: 'Search Space Explosion Prevention',
        resolvedDesc: 'Modeled timetable slots, professors, and room capacities as formal CSP variables with unary and binary domain constraints.',
      },
      {
        step: 2,
        hash: 'b284e11',
        time: 'T-30:00',
        message: 'feat(heuristics): Minimum Remaining Values (MRV) & Least Constraining Value (LCV)',
        activeNodes: ['solver', 'heuristics'],
        activeLinks: ['csp', 'heuristics'],
        resolvedTitle: '98% Backtrack Reduction Achieved',
        resolvedDesc: 'Deployed MRV variable ordering and LCV value assignment, collapsing search steps from 2,328 backtracks down to 46 explored nodes.',
      },
      {
        step: 3,
        hash: 'c392d44',
        time: 'T-20:00',
        message: 'feat(nlp): Natural language constraint extraction with Gemini API',
        activeNodes: ['solver', 'heuristics', 'gemini'],
        activeLinks: ['csp', 'heuristics', 'gemini'],
        resolvedTitle: 'Unstructured Human Constraint Parsing',
        resolvedDesc: 'Structured arbitrary plain-text requests into deterministic mathematical predicates for dynamic scheduling adjustments.',
      },
      {
        step: 4,
        hash: 'd481b99',
        time: 'T-10:00',
        message: 'feat(viz): Real-time D3.js search-tree animation & naive vs smart comparison',
        activeNodes: ['solver', 'heuristics', 'gemini', 'd3viz', 'gsap'],
        activeLinks: ['csp', 'heuristics', 'gemini', 'd3viz', 'gsap'],
        resolvedTitle: 'Search Algorithm Transparency',
        resolvedDesc: 'Rendered live D3.js tree branch pruning showing real-time collision detection and branch-and-bound backtracking steps.',
      },
      {
        step: 5,
        hash: 'e590a01',
        time: 'T-00:00 [PROD]',
        message: 'release: Full deterministic timetable scheduler deployed to Vercel',
        activeNodes: ['solver', 'heuristics', 'gemini', 'd3viz', 'gsap'],
        activeLinks: ['csp', 'heuristics', 'gemini', 'd3viz', 'gsap'],
        resolvedTitle: 'Production Deployment Shipped',
        resolvedDesc: 'Complete constraint-satisfaction scheduling engine with live interactive visualization and zero scheduling conflicts.',
      },
    ],
    nodes: [
      { id: 'solver', label: 'CSP Backtracking Engine', sub: 'Domain Pruning', x: 80, y: 70, type: 'cyan' },
      { id: 'heuristics', label: 'MRV / LCV Heuristics', sub: 'Smart Search Tree', x: 290, y: 70, type: 'cyan' },
      { id: 'gemini', label: 'NL Constraint Parser', sub: 'Gemini API', x: 500, y: 70, type: 'amber' },
      { id: 'd3viz', label: 'D3.js Search Tree', sub: 'Real-Time State Morphing', x: 150, y: 220, type: 'purple' },
      { id: 'gsap', label: 'GSAP Bottleneck Demo', sub: '2,328 vs 46 Comparison', x: 390, y: 220, type: 'emerald' },
    ],
  },
  'syncpad': {
    fig: 'FIG.3',
    sysId: 'SYS-03',
    title: 'SyncPad',
    subtitle: 'CRDT REAL-TIME ENGINE • IN-BROWSER WASM RUNTIME',
    milestones: [
      {
        step: 1,
        hash: 'a31d904',
        time: 'T-40:00',
        message: 'feat(editor): Monaco Editor integration & multi-tab virtual model',
        activeNodes: ['monaco', 'worker'],
        activeLinks: ['ipc'],
        resolvedTitle: 'DOM Thread Blocking Avoided',
        resolvedDesc: 'Offloaded heavy syntax parsing and code compilation to background Web Workers to guarantee smooth typing responsiveness.',
      },
      {
        step: 2,
        hash: 'b88e102',
        time: 'T-30:00',
        message: 'feat(crdt): Yjs CRDT peer synchronization engine binding',
        activeNodes: ['monaco', 'yjs', 'worker'],
        activeLinks: ['ipc', 'crdt'],
        resolvedTitle: 'Zero-Conflict Convergence',
        resolvedDesc: 'Implemented Yjs state vector differential exchanges to resolve concurrent multi-user character insertions without server locks.',
      },
      {
        step: 3,
        hash: 'c9120ab',
        time: 'T-20:00',
        message: 'feat(relay): Standalone y-websocket synchronization server on Render',
        activeNodes: ['monaco', 'yjs', 'server', 'worker'],
        activeLinks: ['ipc', 'crdt', 'wss'],
        resolvedTitle: 'Peer Discovery & Room Routing',
        resolvedDesc: 'Constructed isolated binary WebSocket channels per document room with automatic peer presence and cursor tracking.',
      },
      {
        step: 4,
        hash: 'd401e99',
        time: 'T-10:00',
        message: 'feat(runtime): Pyodide WebAssembly in-browser Python execution',
        activeNodes: ['monaco', 'yjs', 'server', 'wasm', 'worker'],
        activeLinks: ['ipc', 'crdt', 'wss', 'wasm'],
        resolvedTitle: 'Serverless Code Sandboxing',
        resolvedDesc: 'Integrated Pyodide WASM runtime with in-browser virtual file systems, allowing secure Python execution with zero server compute bills.',
      },
      {
        step: 5,
        hash: 'e55a109',
        time: 'T-00:00 [PROD]',
        message: 'release: 0ms conflict convergence & full live production ship',
        activeNodes: ['monaco', 'yjs', 'server', 'wasm', 'worker'],
        activeLinks: ['ipc', 'crdt', 'wss', 'wasm'],
        resolvedTitle: 'Production Deployment Shipped',
        resolvedDesc: 'Deterministic collaborative studio supporting multi-language syntax highlighting, live cursors, and local sandboxed execution.',
      },
    ],
    nodes: [
      { id: 'monaco', label: 'Monaco Editor Client', sub: 'Multi-Cursor UI', x: 80, y: 70, type: 'cyan' },
      { id: 'yjs', label: 'Yjs CRDT Engine', sub: 'Conflict-Free Merge', x: 290, y: 70, type: 'cyan' },
      { id: 'server', label: 'y-websocket Relay', sub: 'Render Cloud Node', x: 500, y: 70, type: 'amber' },
      { id: 'worker', label: 'Web Worker (JS/TS)', sub: 'Isolated Sandbox', x: 80, y: 220, type: 'cyan' },
      { id: 'wasm', label: 'Pyodide WASM Runtime', sub: 'In-Browser Python', x: 290, y: 220, type: 'purple' },
    ],
  },
  'incidenthub-ai': {
    fig: 'FIG.4',
    sysId: 'SYS-04',
    title: 'IncidentHub AI',
    subtitle: 'MULTI-TENANT SRE PLATFORM • INCIDENT TRIAGE ENGINE',
    milestones: [
      {
        step: 1,
        hash: 'c1a8f90',
        time: 'T-48:00',
        message: 'feat(core): Initial schema definition & stateless JWT auth layer',
        activeNodes: ['client', 'gateway'],
        activeLinks: ['rest'],
        resolvedTitle: 'Authentication Boundary Lock',
        resolvedDesc: 'Eliminated session state bottlenecks by deploying stateless JWT middleware with cryptographic RS256 signature verification.',
      },
      {
        step: 2,
        hash: 'e74b21d',
        time: 'T-36:00',
        message: 'feat(db): Multi-tenant RBAC boundary isolation & PostgreSQL RLS',
        activeNodes: ['client', 'gateway', 'postgres'],
        activeLinks: ['rest', 'sql'],
        resolvedTitle: 'Cross-Tenant Leakage Resolution',
        resolvedDesc: 'Enforced PostgreSQL Row-Level Security (RLS) policies guaranteeing 100% strict data boundary isolation between client workspaces.',
      },
      {
        step: 3,
        hash: '82bf901',
        time: 'T-24:00',
        message: 'feat(queue): Redis distributed locks & HMAC webhook replay prevention',
        activeNodes: ['client', 'gateway', 'oauth', 'redis', 'postgres'],
        activeLinks: ['rest', 'oauth', 'redis', 'sql'],
        resolvedTitle: 'Webhook Race Condition Mitigation',
        resolvedDesc: 'Prevented duplicate incident storming from simultaneous GitHub/Sentry webhooks using Redis Redlock distributed locking.',
      },
      {
        step: 4,
        hash: '9d04c2b',
        time: 'T-12:00',
        message: 'feat(realtime): WebSocket triage rooms & live signal broker',
        activeNodes: ['client', 'gateway', 'oauth', 'redis', 'postgres', 'websocket'],
        activeLinks: ['rest', 'oauth', 'redis', 'sql', 'wss'],
        resolvedTitle: 'Incident Triage Latency Drop',
        resolvedDesc: 'Reduced war room state synchronization latency to sub-50ms using WebSocket pub/sub channels synchronized across Redis instances.',
      },
      {
        step: 5,
        hash: 'f61a004',
        time: 'T-00:00 [PROD]',
        message: 'release: 236/236 unit tests passing & production deployment',
        activeNodes: ['client', 'gateway', 'oauth', 'redis', 'postgres', 'websocket'],
        activeLinks: ['rest', 'oauth', 'redis', 'sql', 'wss'],
        resolvedTitle: 'Production Deployment Verified',
        resolvedDesc: 'Fully verified end-to-end telemetry pipeline correlating real OAuth signals with automated root-cause postmortem generation.',
      },
    ],
    nodes: [
      { id: 'client', label: 'Client (React + TS)', sub: 'SPA + Zustand', x: 80, y: 70, type: 'cyan' },
      { id: 'gateway', label: 'API Gateway (Express)', sub: 'RBAC & HMAC Verify', x: 290, y: 70, type: 'cyan' },
      { id: 'oauth', label: 'OAuth Providers', sub: 'GitHub · Sentry · Slack', x: 500, y: 70, type: 'amber' },
      { id: 'websocket', label: 'WebSocket Hub', sub: 'Live Triage Rooms', x: 80, y: 220, type: 'cyan' },
      { id: 'redis', label: 'Redis Cluster', sub: 'Redlock & Pub/Sub', x: 290, y: 220, type: 'rose' },
      { id: 'postgres', label: 'PostgreSQL DB', sub: 'Tenant Store (RLS)', x: 500, y: 220, type: 'amber' },
    ],
  },
};

export default function ArchitectureReconstructModal({ projectId, onClose }) {
  const data = reconstructionData[projectId] || reconstructionData['trace'] || reconstructionData['incidenthub-ai'];
  const [currentStep, setCurrentStep] = useState(data.milestones.length);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(1);
  const timerRef = useRef(null);

  const activeMilestone = data.milestones[currentStep - 1] || data.milestones[0];

  // Global Escape key & keyboard navigation listener
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        setCurrentStep((prev) => Math.max(1, prev - 1));
      } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        setCurrentStep((prev) => Math.min(data.milestones.length, prev + 1));
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    },
    [onClose, data.milestones.length]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Auto-play timeline step advancement
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= data.milestones.length) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2200);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, data.milestones.length]);

  const getColorClass = (type, isActive) => {
    if (!isActive) return 'border-slate-800/80 bg-[#080d1a]/50 text-slate-600 opacity-40';
    if (type === 'amber') return 'border-amber-500/50 bg-[#16130b] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]';
    if (type === 'rose') return 'border-rose-500/50 bg-[#180d14] text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.15)]';
    if (type === 'purple') return 'border-purple-500/50 bg-[#140d21] text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]';
    if (type === 'emerald') return 'border-emerald-500/50 bg-[#0d1c16] text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
    return 'border-cyan-500/50 bg-[#0d1527] text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]';
  };

  const getDotColor = (type, isActive) => {
    if (!isActive) return 'bg-slate-700';
    if (type === 'amber') return 'bg-amber-400';
    if (type === 'rose') return 'bg-rose-400';
    if (type === 'purple') return 'bg-purple-400';
    if (type === 'emerald') return 'bg-emerald-400';
    return 'bg-cyan-400';
  };

  // Render directly into document.body via React Portal to ensure true fullscreen overlay above all page elements
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[999999] w-screen h-screen bg-[#050811] flex flex-col justify-between p-6 overflow-hidden select-none font-mono text-slate-300"
      >
        {/* ================= 1. Top Header Bar ================= */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 shrink-0 w-full">
          {/* Left Title */}
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 text-xs tracking-[0.25em] font-semibold">
              — {data.fig} • {data.title.toUpperCase()} • INTERACTIVE REPLAY
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-xs tracking-widest hidden sm:inline">
              REPLAYING DESIGN DECISIONS
            </span>

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-300 border border-slate-700 rounded bg-slate-900/90 hover:border-rose-500 hover:text-rose-400 transition-colors cursor-pointer"
              title="Press ESC to close"
            >
              <span>ESC</span>
              <span className="font-bold text-sm leading-none">×</span>
            </button>
          </div>
        </div>

        {/* ================= 2. Central Layout (Canvas col-span-9 | Commit Log col-span-3) ================= */}
        <div className="flex-1 grid grid-cols-12 gap-6 my-4 min-h-0">
          {/* Left: Interactive Canvas (col-span-9) */}
          <div className="col-span-12 lg:col-span-9 h-full border border-slate-800/80 rounded-lg relative overflow-hidden bg-[#070b14]/70 p-6 flex flex-col justify-between shadow-2xl">
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-[#050811]/90 border border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setZoom((z) => Math.min(1.4, z + 0.1))}
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Zoom In"
              >
                <FiPlus className="text-xs" />
              </button>
              <button
                onClick={() => setZoom((z) => Math.max(0.7, z - 0.1))}
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <FiMinus className="text-xs" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Reset Zoom"
              >
                <FiRotateCcw className="text-xs" />
              </button>
            </div>

            {/* Dynamic Interactive SVG Canvas */}
            <div
              className="flex-1 flex items-center justify-center transition-transform duration-300 w-full"
              style={{ transform: `scale(${zoom})` }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl py-4">
                {data.nodes.map((node) => {
                  const isActive = activeMilestone.activeNodes.includes(node.id);
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: isActive ? 1 : 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-lg border transition-all duration-300 flex flex-col justify-between ${getColorClass(
                        node.type,
                        isActive
                      )}`}
                    >
                      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/[0.06]">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider font-mono">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${getDotColor(
                              node.type,
                              isActive
                            )} ${isActive ? 'animate-pulse' : ''}`}
                          />
                          {node.label}
                        </div>
                      </div>
                      <div className="text-xs font-sans text-slate-300 font-medium">
                        {node.sub}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Canvas Bottom Subtitle */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-800/70 shrink-0">
              <span>{zoom.toFixed(1)}x SCROLL TO ZOOM • DRAG TO PAN</span>
              <span className="text-cyan-400/80">STEP {activeMilestone.hash} ACTIVE</span>
            </div>
          </div>

          {/* Right: Commit Log & Insights (col-span-3) */}
          <div className="col-span-12 lg:col-span-3 h-full flex flex-col justify-between gap-4 min-h-0">
            {/* Top: Build Commit Log */}
            <div className="flex-1 border border-slate-800/80 rounded-lg bg-[#070b14]/70 p-4 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/70 text-xs font-mono">
                  <span className="text-cyan-400 font-bold tracking-wider uppercase">
                    // DECISION LOG
                  </span>
                  <span className="text-slate-500 text-[10px]">
                    {currentStep}/{data.milestones.length}
                  </span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {data.milestones.map((m) => {
                    const isSelected = m.step === currentStep;
                    const isPast = m.step < currentStep;
                    return (
                      <button
                        key={m.step}
                        onClick={() => setCurrentStep(m.step)}
                        className={`w-full text-left p-2 rounded text-xs font-mono transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/60 border border-cyan-500/50 text-slate-100 shadow-[0_0_10px_rgba(34,211,238,0.15)]'
                            : isPast
                            ? 'bg-[#0d1424]/40 border border-slate-800/50 text-slate-400 hover:text-slate-200'
                            : 'bg-transparent border border-transparent text-slate-600 opacity-50'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-cyan-400 font-bold">
                            {isSelected ? '█ ' : ''}stage {m.hash}
                          </span>
                          <span className="text-slate-500">{m.time}</span>
                        </div>
                        <p className="text-[11px] leading-tight truncate">{m.message}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom: Resolved Technical Insight */}
            <div className="border border-emerald-500/30 rounded-lg bg-[#0a1813]/70 p-4 shrink-0 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                <FiCheckCircle className="text-sm" />
                <span>RESOLVED AT STEP #{currentStep}</span>
              </div>
              <h4 className="text-xs font-sans font-bold text-white mb-1">
                {activeMilestone.resolvedTitle}
              </h4>
              <p className="text-[11px] font-sans text-slate-300 leading-relaxed">
                {activeMilestone.resolvedDesc}
              </p>
            </div>
          </div>
        </div>

        {/* ================= 3. Bottom Fullscreen Timeline Scrubber ================= */}
        <div className="border-t border-slate-800/80 pt-3 shrink-0 flex flex-col gap-3">
          {/* Tick Marks */}
          <div className="relative flex items-center gap-1.5 w-full">
            {data.milestones.map((m) => {
              const isFilled = m.step <= currentStep;
              const isCurrent = m.step === currentStep;
              return (
                <button
                  key={m.step}
                  onClick={() => setCurrentStep(m.step)}
                  className={`flex-1 h-3 rounded-sm transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee] scale-y-125'
                      : isFilled
                      ? 'bg-cyan-700/60 hover:bg-cyan-500'
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                  title={`Jump to Milestone #${m.step} (${m.hash})`}
                />
              );
            })}
          </div>

          {/* Scrubber Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-400 hover:text-black text-cyan-400 transition-all font-bold cursor-pointer"
              >
                {isPlaying ? <FiPause className="text-xs" /> : <FiPlay className="text-xs" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY DECISION REPLAY'}</span>
              </button>

              <button
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                className="p-1.5 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                title="Step Back (A)"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={() => setCurrentStep((prev) => Math.min(data.milestones.length, prev + 1))}
                disabled={currentStep === data.milestones.length}
                className="p-1.5 rounded border border-slate-700 hover:border-cyan-400 text-slate-300 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                title="Step Forward (D)"
              >
                <FiChevronRight />
              </button>

              <span className="text-[11px] text-slate-400 font-mono">
                DECISIONS SHOWN: <strong className="text-cyan-400">{currentStep}</strong> / {data.milestones.length}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 truncate">
              FINAL STATE: <span className="text-emerald-400 font-bold">SHIPPED AND VERIFIED</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
