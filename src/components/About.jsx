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

const principlesList = [
  {
    id: 'P-01',
    num: '01',
    title: 'Own the whole stack',
    description:
      'From schema design and RESTful endpoints to responsive UI state and deployment — architecture, security, and performance are one continuous workflow.',
    borderClasses: 'md:border-b md:border-r border-slate-800/80',
  },
  {
    id: 'P-02',
    num: '02',
    title: 'Ship to real environments',
    description:
      'Every system here is live, tested, and shipped end-to-end — handling real OAuth integrations, authentication boundaries, and WebSocket events.',
    borderClasses: 'md:border-b border-slate-800/80',
  },
  {
    id: 'P-03',
    num: '03',
    title: 'Deterministic architecture',
    description:
      'Prioritizing explainable rule-based validation, multi-tenant RBAC boundaries, and strict data consistency over black-box assumptions.',
    borderClasses: 'md:border-r border-slate-800/80',
  },
  {
    id: 'P-04',
    num: '04',
    title: 'Engineer for scale & concurrency',
    description:
      'Stateless JWT middleware, Redis concurrency control, and real-time CRDT sync built to hold state and load reliably.',
    borderClasses: '',
  },
];

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-20 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* ================= SECTION 1: Operating Philosophy & Current Operations ================= */}
        <div>
          {/* Top Header & Manifesto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="mb-10"
          >
            {/* Category Tag */}
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
              <span>//</span>
              <span>OPERATING PHILOSOPHY</span>
            </div>

            {/* Statement Headline */}
            <div className="space-y-1.5 leading-snug">
              <h2 className="text-slate-100 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Every system begins with clean architecture.
              </h2>
              <h2 className="text-slate-100 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Every API demands deterministic security.
              </h2>
              <h2 className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]">
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

          {/* Operations Telemetry List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="border border-slate-800/80 rounded-xl overflow-hidden divide-y divide-slate-800/80 bg-[#0B101B]/60 shadow-lg backdrop-blur-sm"
          >
            {operationsList.map((op) => (
              <div
                key={op.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/30 transition-colors group"
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
                    {op.status}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= SECTION 2: 01 / OPERATING PRINCIPLES 2x2 Grid ================= */}
        <div>
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-amber-400 font-mono font-bold text-xl md:text-2xl drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
                01
              </span>
              <span className="text-cyan-400 font-mono font-bold text-xl md:text-2xl">/</span>
              <h3 className="text-slate-100 font-sans font-bold tracking-wider uppercase text-xl md:text-2xl">
                OPERATING PRINCIPLES
              </h3>
            </div>

            <p className="text-slate-400 font-mono text-xs md:text-sm">
              The design constraints behind every system below.
            </p>
          </motion.div>

          {/* 2x2 Blueprint Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="border border-slate-800/80 rounded-xl bg-[#0B101B]/60 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-slate-800/80 shadow-lg backdrop-blur-sm overflow-hidden"
          >
            {principlesList.map((p) => (
              <div
                key={p.id}
                className={`p-6 hover:bg-slate-900/30 transition-colors flex flex-col justify-between ${p.borderClasses}`}
              >
                <div>
                  {/* Top Row: Identifier and Ghost Number */}
                  <div className="flex items-center justify-between pb-2 mb-3">
                    <span className="text-slate-500 font-mono text-xs font-bold tracking-wider">
                      {p.id}
                    </span>
                    <span className="text-slate-700/60 font-mono text-lg font-bold select-none">
                      {p.num}
                    </span>
                  </div>

                  {/* Principle Title */}
                  <h4 className="text-slate-100 font-sans font-bold text-lg tracking-tight">
                    {p.title}
                  </h4>

                  {/* Principle Description */}
                  <p className="text-slate-400 font-mono text-xs leading-relaxed mt-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
