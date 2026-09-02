import React from 'react';
import { motion } from 'framer-motion';

const principlesList = [
  {
    id: 'P-01',
    num: '01',
    title: 'Own the whole stack',
    description:
      'From schema design and RESTful endpoints to responsive UI state and deployment — architecture, security, and performance are one continuous workflow.',
    borderClasses: 'md:border-b md:border-r border-slate-800',
  },
  {
    id: 'P-02',
    num: '02',
    title: 'Ship to real users',
    description:
      'Every system here is live, tested, and shipped end-to-end — handling real OAuth integrations, authentication boundaries, and WebSocket events.',
    borderClasses: 'md:border-b border-slate-800',
  },
  {
    id: 'P-03',
    num: '03',
    title: 'Deterministic architecture',
    description:
      'Prioritizing explainable rule-based validation, multi-tenant RBAC boundaries, and strict data consistency over black-box assumptions.',
    borderClasses: 'md:border-r border-slate-800',
  },
  {
    id: 'P-04',
    num: '04',
    title: 'Engineer for scale',
    description:
      'Stateless JWT middleware, Redis concurrency control, and real-time CRDT sync built to hold state and load reliably.',
    borderClasses: '',
  },
];

export default function Principles() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="principles" className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 py-16 md:py-24 relative font-mono border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#f59e0b] font-mono font-bold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
              01
            </span>
            <span className="text-cyan-400 font-mono font-bold text-2xl md:text-3xl">/</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-3xl">
              OPERATING PRINCIPLES
            </h2>
          </div>

          <p className="text-slate-400 font-mono text-xs md:text-sm tracking-wider">
            The design constraints behind every system below.
          </p>
        </motion.div>

        {/* 2x2 Technical Blueprint Grid Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={fadeInUp}
          className="border border-slate-800 rounded-lg bg-[#0B101B]/70 backdrop-blur-md grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-slate-800 overflow-hidden shadow-2xl"
        >
          {principlesList.map((p) => (
            <div
              key={p.id}
              className={`p-6 sm:p-8 hover:bg-slate-900/30 transition-colors flex flex-col justify-between ${p.borderClasses}`}
            >
              <div>
                {/* Header Row: Identifier and Large Faint Index */}
                <div className="flex items-center justify-between pb-3 mb-4">
                  <span className="text-slate-500 font-mono text-xs font-bold tracking-wider">
                    {p.id}
                  </span>
                  <span className="text-slate-700/60 font-mono text-xl md:text-2xl font-bold select-none">
                    {p.num}
                  </span>
                </div>

                {/* Principle Title */}
                <h3 className="text-slate-100 font-sans font-bold text-lg md:text-xl tracking-tight">
                  {p.title}
                </h3>

                {/* Technical Monospace Explanation */}
                <p className="text-slate-400 font-mono text-xs leading-relaxed mt-3">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
