import React from 'react';
import { motion } from 'framer-motion';

const principlesList = [
  {
    id: 'P-01',
    num: '01',
    title: 'Model the failure first',
    description:
      'Before building the happy path, identify what can fail, what must remain consistent, and how the system should recover.',
    borderClasses: 'md:border-b md:border-r border-slate-800',
  },
  {
    id: 'P-02',
    num: '02',
    title: 'Make boundaries explicit',
    description:
      'Authentication, role permissions, tenant isolation, and state ownership belong in the architecture—not in last-minute patches.',
    borderClasses: 'md:border-b border-slate-800',
  },
  {
    id: 'P-03',
    num: '03',
    title: 'Prefer explainable systems',
    description:
      'Rules, scores, schedules, and AI-assisted decisions should expose enough evidence for another engineer to verify the outcome.',
    borderClasses: 'md:border-r border-slate-800',
  },
  {
    id: 'P-04',
    num: '04',
    title: 'Ship the proof',
    description:
      'A project is complete when the demo works, the edge cases are tested, and the result can be measured—not when the UI merely looks finished.',
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
            <span className="text-violet-400 font-mono font-bold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(167,139,250,0.28)]">
              01
            </span>
            <span className="text-cyan-400 font-mono font-bold text-2xl md:text-3xl">//</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-3xl">
              ENGINEERING RULES
            </h2>
          </div>

          <p className="text-slate-400 font-mono text-xs md:text-sm tracking-wider">
            Four checks I apply before calling a build complete.
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
