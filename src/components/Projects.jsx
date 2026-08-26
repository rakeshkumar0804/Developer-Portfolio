import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRefreshCw } from 'react-icons/fi';
import { secondaryDeployments } from '../data/portfolioData';
import ArchitectureReconstructModal from './ArchitectureReconstructModal';

// FIG.1: IncidentHub AI Interactive Schematic
function IncidentHubSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.1 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      <div className="relative py-3 flex flex-col gap-3">
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
          RECONSTRUCT BUILD HISTORY
        </button>
        <button
          onClick={() => onReconstruct('incidenthub-ai')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          SCRUB THE TIMELINE →
        </button>
      </div>
    </div>
  );
}

// FIG.2: SyncPad Interactive Schematic
function SyncPadSchematic({ onReconstruct }) {
  return (
    <div className="border border-slate-800/90 rounded-lg p-6 bg-slate-950/40 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/70 text-xs font-mono">
        <span className="text-slate-400 font-bold tracking-wider">
          FIG.2 — SYSTEM ARCHITECTURE
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          STREAMING
        </span>
      </div>

      <div className="relative py-3 flex flex-col gap-3">
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
          RECONSTRUCT BUILD HISTORY
        </button>
        <button
          onClick={() => onReconstruct('syncpad')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          SCRUB THE TIMELINE →
        </button>
      </div>
    </div>
  );
}

// FIG.3: PortfolioPulse Interactive Schematic
function PortfolioPulseSchematic({ onReconstruct }) {
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

      <div className="relative py-3 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              FRONTEND / REACT + VITE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Audit Score Dashboard</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Real-time report UI</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              EXPRESS API & AUTH
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Node.js Gateway</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Rate limiter & Cache</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ REST DATA INGESTION</span>
          <span>↕ HEADLESS DEVTOOLS PROTOCOL</span>
          <span>↕ AGGREGATION</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              GITHUB REST COLLECTOR
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Profile & Repo Data</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Commit cadence signals</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              PUPPETEER CRAWLER
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Headless Inspector</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Headless SPA DOM audit</div>
          </div>
        </div>

        <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              DETERMINISTIC 20-SIGNAL SCORING + MONGODB
            </div>
            <span className="text-[9px] font-mono text-emerald-400">100% REPRODUCIBLE</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            Rules engine evaluates codebase health, responsive markup & deployment integrity
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('portfoliopulse')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          RECONSTRUCT BUILD HISTORY
        </button>
        <button
          onClick={() => onReconstruct('portfoliopulse')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          SCRUB THE TIMELINE →
        </button>
      </div>
    </div>
  );
}

// FIG.4: Kohli Analytics Interactive Schematic
function KohliAnalyticsSchematic({ onReconstruct }) {
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

      <div className="relative py-3 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              RAW INNING DATASET
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Ball-by-Ball JSON</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">500+ match records</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              STAT NORMALIZATION
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">TypeScript Engine</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Clutch Index pipeline</div>
          </div>
        </div>

        <div className="flex items-center justify-around text-[9px] font-mono text-cyan-400/80 px-2 py-0.5">
          <span>↕ VECTOR MATH PIPELINE</span>
          <span>↕ TIMELINE SYNC</span>
          <span>↕ HW-ACCELERATED PIPELINE</span>
        </div>

        <div className="grid grid-cols-2 gap-3 relative z-10">
          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              D3.JS VECTOR ENGINE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Cartesian & Polar Maps</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Wagon Wheel & Pitch Maps</div>
          </div>

          <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              GSAP MOTION ENGINE
            </div>
            <div className="text-xs font-sans font-medium text-slate-200 mt-1">Hardware Accelerated</div>
            <div className="text-[10px] font-mono text-slate-500 mt-0.5">Fluid State Morphing</div>
          </div>
        </div>

        <div className="border border-slate-700/70 bg-slate-900/60 rounded px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-mono font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              RESPONSIVE SVG & CANVAS RENDER LAYER
            </div>
            <span className="text-[9px] font-mono text-cyan-400">ZERO FRAME DROPS</span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            Dynamic radar charts, dismissal distributions & multi-filter aggregate telemetry
          </div>
        </div>
      </div>

      <div className="pt-3.5 mt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <button
          onClick={() => onReconstruct('kohli-analytics')}
          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
        >
          <FiRefreshCw className="text-cyan-400" />
          RECONSTRUCT BUILD HISTORY
        </button>
        <button
          onClick={() => onReconstruct('kohli-analytics')}
          className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          SCRUB THE TIMELINE →
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [reconstructProjectId, setReconstructProjectId] = useState(null);

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-32"
        >
          {/* Left Column: System Specification (Clean & Unboxed) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                SYS-01
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

              {/* 3-Column Metrics (Clean & Standalone) */}
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

              {/* Bullets with generous vertical spacing */}
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

              {/* Tech Badges (Outline Pills) */}
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

          {/* Right Column: FIG.1 Schematic */}
          <div className="lg:col-span-6">
            <IncidentHubSchematic onReconstruct={setReconstructProjectId} />
          </div>
        </motion.div>

        {/* ================= SLIDE 2: SyncPad (SYS-02) (Alternated Layout) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-32"
        >
          {/* Left Column: FIG.2 Schematic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SyncPadSchematic onReconstruct={setReconstructProjectId} />
          </div>

          {/* Right Column: System Specification */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                SYS-02
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
                    WASM EXECUTION
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
        </motion.div>

        {/* ================= SLIDE 3: PortfolioPulse (SYS-03) ================= */}
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
                SYS-03
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                PortfolioPulse — Career Readiness Auditor
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                AUTOMATED CODEBASE AUDITING • 20-SIGNAL SCORING ENGINE
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                An automated engineering career intelligence platform that audits developer GitHub profiles, portfolio repositories, and web performance across ~20 hiring-readiness signals with headless SPA crawling.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">20</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    AUDIT SIGNALS
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    DETERMINISTIC
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">HEADLESS</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    SPA CRAWL
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Deterministic 20-point rule-based scoring engine integrating GitHub REST APIs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Headless SPA performance crawling and markup analysis with Puppeteer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Express API layer with in-memory caching and request deduplication</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>MongoDB database storing cached audit runs and historical score tracking</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Puppeteer', 'GitHub API'].map((t) => (
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
                href="https://dev-portfolio-checker.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/dev-portfolio-checker"
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
            <PortfolioPulseSchematic onReconstruct={setReconstructProjectId} />
          </div>
        </motion.div>

        {/* ================= SLIDE 4: Kohli Analytics (SYS-04) (Alternated Layout) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto mb-20"
        >
          {/* Left Column: FIG.4 Schematic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <KohliAnalyticsSchematic onReconstruct={setReconstructProjectId} />
          </div>

          {/* Right Column: System Specification */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <div className="text-slate-400 font-mono text-xs tracking-wider mb-2">
                SYS-04
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-100 font-sans">
                Kohli Analytics — Vector Sports Intelligence
              </h3>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase mt-1 mb-4">
                CUSTOM VECTOR ENGINE • D3.JS DATA VISUALIZATION
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
                An interactive sports statistics and vector data visualization dashboard analyzing international cricket records with custom original performance metrics (Clutch Index, Pressure Maps) using D3.js and Hardware-Accelerated Transitions.
              </p>

              {/* 3-Column Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">7</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    CUSTOM METRICS
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">60+ FPS</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    HARDWARE ACCELERATED
                  </div>
                </div>
                <div className="border border-slate-800/80 bg-slate-950/40 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-cyan-400 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                    VERIFIED DATA
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Interactive vector analytics computing custom metrics (Clutch Index, Pressure Maps)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>D3.js integration for polar coordinate wagon wheels and pitch maps</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Hardware-accelerated GSAP timeline animations for butter-smooth chart morphing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">▪</span>
                  <span>Type-safe dataset transformations and aggregation pipelines in TypeScript</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'].map((t) => (
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
                href="https://kohli-analytics.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]"
              >
                <span>Live Demo</span>
                <FiExternalLink className="text-xs" />
              </a>
              <a
                href="https://github.com/rakeshkumar0804/kohli-analytics"
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
