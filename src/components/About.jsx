import React from 'react';
import { motion } from 'framer-motion';

const operationsList = [
  {
    id: 'OP-01',
    title: 'SyncPad',
    description: 'Real-time collaborative code editor with Yjs CRDT synchronization and in-browser WASM runtime.',
    status: 'ACTIVE',
    statusColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    pulse: true,
  },
  {
    id: 'OP-02',
    title: 'IncidentHub AI',
    description: 'Multi-tenant incident intelligence platform with real OAuth correlation, RBAC, and triage rooms.',
    status: 'ACTIVE',
    statusColor: 'text-cyan-400',
    dotColor: 'bg-cyan-400',
    pulse: true,
  },
  {
    id: 'OP-03',
    title: 'Distributed Systems & Real-Time Sync',
    description: 'Deep dive into Redis concurrency control, WebSocket telemetry, and idempotent event architectures.',
    status: 'RESEARCH',
    statusColor: 'text-amber-400',
    dotColor: 'bg-amber-400',
    pulse: false,
  },
];

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 py-16 md:py-24 relative font-mono">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Header & Manifesto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-10"
        >
          {/* Header Tag */}
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <span>—</span>
            <span>OPERATING PHILOSOPHY</span>
          </div>

          {/* Statement Headline */}
          <div className="space-y-2 leading-tight">
            <h2 className="text-slate-100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Every system begins with clean architecture.
            </h2>
            <h2 className="text-slate-100 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
              Every API demands deterministic security.
            </h2>
            <h2 className="text-cyan-400 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Every infrastructure becomes a living network.
            </h2>
          </div>
        </motion.div>

        {/* Current Operations Log Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex items-center gap-2 text-slate-400 font-mono text-xs tracking-[0.2em] uppercase mt-12 mb-4"
        >
          <span>CURRENT OPERATIONS</span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            LIVE
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          </span>
        </motion.div>

        {/* Operations Telemetry List Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={fadeInUp}
          className="border border-slate-800/80 rounded-lg overflow-hidden divide-y divide-slate-800/80 bg-[#0B101B]/70 backdrop-blur-md shadow-2xl"
        >
          {operationsList.map((op) => (
            <div
              key={op.id}
              className="px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/30 transition-colors group"
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
                <span className="text-slate-500 font-mono text-xs w-14 shrink-0 font-bold">
                  {op.id}
                </span>

                <div className="min-w-0">
                  <h3 className="text-slate-100 font-mono font-bold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                    {op.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-sans mt-0.5 leading-relaxed">
                    {op.description}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0 pl-14 sm:pl-0">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${op.dotColor} ${
                    op.pulse ? 'animate-pulse' : ''
                  }`}
                />
                <span className={`text-xs font-mono font-semibold tracking-wider ${op.statusColor}`}>
                  • {op.status}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
