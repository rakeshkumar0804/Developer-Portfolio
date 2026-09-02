import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRefreshCw } from 'react-icons/fi';
import ArchitectureReconstructModal from './ArchitectureReconstructModal';

const compactFlowPaths = [
  'M25 15 V43 H50 V61 H25 V83',
  'M75 15 V43 H50 V61 H75 V83',
  'M25 43 H75',
];

const extendedFlowPaths = [
  'M25 12 V37 H50 V52 H25 V68 H50 V86',
  'M75 12 V37 H50 V52 H75 V68 H50 V86',
  'M25 37 H75',
  'M25 68 H75',
];

function AnimatedFlowLines({ extended = false }) {
  const paths = extended ? extendedFlowPaths : compactFlowPaths;

  return (
    <svg
      className="architecture-flow-lines"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path, index) => (
        <g key={path}>
          <path d={path} pathLength="100" className="architecture-flow-track" />
          <path
            d={path}
            pathLength="100"
            className="architecture-flow-particle"
            style={{ animationDelay: `${index * -0.72}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

// FIG.1: TRACE Interactive Schematic
function TraceSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.1 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          ACTIVE PIPELINE
        </span>
      </div>

      <div className="architecture-stage relative py-3 flex flex-col gap-3">
        <AnimatedFlowLines />

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              SYNTHETIC SANDBOX
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Secret Injected Telemetry</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Logs & Metrics Stream</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              HYPOTHESIS COMPETITION
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Gemini API + pgvector</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Adversarial Falsifier</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ TELEMETRY STREAM</span>
          <span>↕ ADVERSARIAL FALSIFIER</span>
          <span>↕ CAUSAL DAG</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-rose-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              FASTAPI ENGINE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">PostgreSQL + pgvector</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Evidence Correlation Layer</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              CAUSAL DAG RENDER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">D3.js + GSAP</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Temporal Graph Projection</div>
          </div>
        </div>

        <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              DETERMINISTIC FALSIFICATION LOOP
            </div>
            <span className="text-[9px] font-mono text-emerald-400">89.5% ACCURACY</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            19 hidden-ground-truth incident scenarios evaluated against naive baseline
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('trace')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          RUN INVESTIGATION REPLAY
        </button>
        <button
          onClick={() => onReconstruct('trace')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          OPEN CAUSAL TRACE →
        </button>
      </div>
    </div>
  );
}

// FIG.2: CHRONOS Interactive Schematic
function ChronosSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.2 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          SOLVER ACTIVE
        </span>
      </div>

      <div className="architecture-stage relative py-3 flex flex-col gap-3">
        <AnimatedFlowLines />

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              CONSTRAINT SOLVER CORE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Backtracking + MRV/LCV</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Search-Space Pruning</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              NL PARSING LAYER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Gemini API</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Constraint Extraction</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ CSP SEARCH TREE</span>
          <span>↕ HEURISTIC EVAL</span>
          <span>↕ REAL-TIME D3 STATE</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              D3.JS VISUALIZER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Search-Tree Rendering</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Real-Time State Morphing</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              BOTTLENECK BENCHMARK
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Naive vs Smart Comp</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Zero Frame Drops</div>
          </div>
        </div>

        <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              DETERMINISTIC HEURISTIC PRUNING
            </div>
            <span className="text-[9px] font-mono text-emerald-400 font-bold">2,328 vs 46 NODES</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            MRV and LCV heuristics reduce backtrack space by 98% on identical scheduling instances
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('chronos')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          PLAY SOLVER SEARCH
        </button>
        <button
          onClick={() => onReconstruct('chronos')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          COMPARE 2,328 → 46 →
        </button>
      </div>
    </div>
  );
}

// FIG.3: SyncPad Interactive Schematic
function SyncPadSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.3 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      <div className="architecture-stage relative py-3 flex flex-col gap-3">
        <AnimatedFlowLines />

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              MONACO EDITOR
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Multi-Tab Interface</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Live Cursor State</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              YJS CRDT ENGINE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Deterministic Merge</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">0ms Conflict Res</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ BINARY CRDT STREAM</span>
          <span>↕ WSS ROOM SYNC</span>
          <span>↕ WORKER IPC</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Y-WEBSOCKET SERVER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Render Cloud Relay</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Room Awareness</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              WASM / PYODIDE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">In-Browser Python</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">WebAssembly</div>
          </div>
        </div>

        <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              WEB WORKER RUNTIME (JS / TS)
            </div>
            <span className="text-[9px] font-mono text-emerald-400">100% ISOLATED</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            Zero server compute cost · Safe client-side loop termination
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('syncpad')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          REPLAY CRDT SYNC
        </button>
        <button
          onClick={() => onReconstruct('syncpad')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          FOLLOW THE MERGE →
        </button>
      </div>
    </div>
  );
}

// FIG.4: IncidentHub AI Interactive Schematic
function IncidentHubSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.4 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      <div className="architecture-stage architecture-stage-extended relative py-3 flex flex-col gap-3">
        <AnimatedFlowLines extended />

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              CLIENT / REACT + TS
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">SPA + Zustand</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Optimistic state</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              API GATEWAY / EXPRESS
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">RBAC & HMAC Verify</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Stateless JWT</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ HTTPS REST</span>
          <span>↕ WSS TRIAGE</span>
          <span>↕ OAUTH 2.0</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              OAUTH PROVIDERS
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">GitHub · Sentry · Slack</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Webhook Ingestion</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              WEBSOCKET ROOMS
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Live Incident Rooms</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Sub-50ms Sync</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-rose-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              REDIS CLUSTER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Distributed Locking</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Pub/Sub Broker</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              POSTGRESQL DB
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Multi-Tenant Store</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Row-Level Security (RLS)</div>
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('incidenthub-ai')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          TRACE INCIDENT FLOW
        </button>
        <button
          onClick={() => onReconstruct('incidenthub-ai')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          OPEN TRIAGE REPLAY →
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [reconstructProjectId, setReconstructProjectId] = useState(null);

  useEffect(() => {
    const handleClose = () => setReconstructProjectId(null);
    window.addEventListener('close-modals', handleClose);
    return () => window.removeEventListener('close-modals', handleClose);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="systems" className="pt-24 md:pt-28 pb-20 relative border-t border-slate-800/40 font-mono scroll-mt-20">
      <div id="projects" className="scroll-mt-20" />
      {/* Interactive Architecture Reconstruction & Timeline Scrubber Modal */}
      {reconstructProjectId && (
        <ArchitectureReconstructModal
          projectId={reconstructProjectId}
          onClose={() => setReconstructProjectId(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-20 pt-4"
        >
          <div className="flex items-center">
            <span className="text-violet-400 font-mono font-bold text-2xl md:text-3xl drop-shadow-[0_0_10px_rgba(167,139,250,0.28)]">
              02
            </span>
            <span className="text-[#38bdf8] font-mono text-2xl md:text-3xl mx-2">//</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
              FEATURED ENGINEERING WORK
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
            Four builds. Four different hard problems. Each one includes the proof.
          </p>
        </motion.div>

        {/* ================= SLIDE 1: TRACE (SYS-01) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-32"
        >
          {/* Left Column: System Specification */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                CASE-01
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                TRACE — Temporal Root-cause Analysis & Causal Engine
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                AI-ASSISTED PRODUCTION INCIDENT INVESTIGATION ENGINE
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                TRACE investigates unfamiliar production incidents without seeing the answer. It competes multiple root-cause hypotheses, actively tries to disprove the leading theory, and concludes only when the evidence holds. Across 19 hidden-ground-truth incidents, it reached 89.5% accuracy versus 73.7% for a naive single-shot LLM baseline—including documented failure cases.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">89.5%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    ACCURACY (VS 73.7% NAIVE BASELINE)
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">19</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    SCENARIOS (HIDDEN GROUND TRUTH)
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">ZERO GUESSWORK</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    DETERMINISTIC FALSIFICATION
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Multi-hypothesis competition engine running real-time adversarial falsification loops</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Synthetic production sandbox evaluating 3 complex incident archetypes with hidden ground truth</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Vector similarity telemetry matching with pgvector, PostgreSQL, and FastAPI pipeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Interactive temporal DAG causal visualization built with D3.js and smooth GSAP morphing</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini API', 'Next.js', 'TypeScript', 'D3.js', 'GSAP', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className="border border-slate-700/60 bg-transparent text-slate-400 text-xs px-2.5 py-1 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://trace-rca-engine.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/trace-rca-engine"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Right Column: FIG.1 Schematic */}
          <div className="lg:col-span-6">
            <TraceSchematic onReconstruct={setReconstructProjectId} />
          </div>
        </motion.div>

        {/* ================= SLIDE 2: CHRONOS (SYS-02) (Alternated Layout) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-32"
        >
          {/* Left Column: FIG.2 Schematic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ChronosSchematic onReconstruct={setReconstructProjectId} />
          </div>

          {/* Right Column: System Specification */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                CASE-02
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                CHRONOS — Constraint-Based Timetable Scheduling Engine
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                CSP BACKTRACKING · LIVE CONSTRAINT VISUALIZATION
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                A timetable scheduling engine solving constraint satisfaction problems (CSP) via backtracking search with MRV (Minimum Remaining Values) and LCV (Least Constraining Value) heuristics, with a live D3.js visualization comparing naive vs. optimized search — the signature demo shows naive backtracking taking 2,328 backtracks vs. 46 nodes for the heuristic-guided search on the same problem.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-base sm:text-lg font-bold text-cyan-400 font-mono">2,328 vs 46</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    NAIVE VS SMART SEARCH
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">CSP + MRV/LCV</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    HEURISTIC GUIDED
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center flex flex-col justify-center">
                  <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">LIVE D3.JS</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    CONSTRAINT VISUALIZER
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Backtracking search with MRV and LCV heuristics for efficient constraint satisfaction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Natural language constraint parsing via Gemini API</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Live D3.js visualization of the search process, including a &quot;Naive vs Smart Bottleneck Demo&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>GSAP-powered smooth animation transitions</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'Node.js', 'PostgreSQL', 'Gemini API', 'D3.js', 'GSAP', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className="border border-slate-700/60 bg-transparent text-slate-400 text-xs px-2.5 py-1 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="https://chronos-web-kappa.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/chronos"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= SLIDE 3: SyncPad (SYS-03) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-32"
        >
          {/* Left Column: System Specification */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                CASE-03
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                SyncPad — Collaborative Code Studio
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                CRDT REAL-TIME ENGINE • IN-BROWSER WASM RUNTIME
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                A real-time collaborative code editor enabling concurrent document editing with conflict-free CRDT synchronization, live multi-cursor awareness, and fully sandboxed in-browser code execution.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">0ms</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    CONFLICT RES (CRDT)
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    IN-BROWSER
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">3+</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    RUNTIMES (JS/TS/PY)
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Yjs CRDTs for deterministic peer synchronization and presence awareness</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>In-browser code execution via Web Workers (JS/TS) and Pyodide WebAssembly (Python)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Standalone y-websocket synchronization server deployed on Render</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Monaco Editor integration with multi-language syntax highlighting</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'TypeScript', 'Yjs (CRDT)', 'Monaco Editor', 'Node.js', 'WebSocket', 'Pyodide (WASM)'].map((t) => (
                  <span
                    key={t}
                    className="border border-slate-700/60 bg-transparent text-slate-400 text-xs px-2.5 py-1 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
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
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Right Column: FIG.3 Schematic */}
          <div className="lg:col-span-6">
            <SyncPadSchematic onReconstruct={setReconstructProjectId} />
          </div>
        </motion.div>

        {/* ================= SLIDE 4: IncidentHub AI (SYS-04) (Alternated Layout) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-20"
        >
          {/* Left Column: FIG.4 Schematic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <IncidentHubSchematic onReconstruct={setReconstructProjectId} />
          </div>

          {/* Right Column: System Specification */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                CASE-04
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                IncidentHub AI — Root-Cause Intelligence
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                MULTI-TENANT SRE PLATFORM • INCIDENT TRIAGE ENGINE
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                A multi-tenant engineering incident intelligence platform that correlates signals across GitHub, Sentry, Slack, and Jira to automate outage triage and generate evidence-grounded postmortems.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">236/236</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    TESTS PASSING
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">4</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    OAUTH FLOWS
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    RBAC ISOLATION
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Real OAuth 2.0 integrations with GitHub, Sentry, Slack, and Jira</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Multi-tenant RBAC with granular role permissions and team isolation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Redis-backed distributed locking and idempotent HMAC-verified webhooks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Real-time WebSocket triage rooms for live incident coordination</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth'].map((t) => (
                  <span
                    key={t}
                    className="border border-slate-700/60 bg-transparent text-slate-400 text-xs px-2.5 py-1 rounded-md font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
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
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 bg-transparent text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
              >
                <FiGithub className="text-xs text-cyan-400" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
