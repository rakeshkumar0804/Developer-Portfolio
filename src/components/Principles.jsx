import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const principlesList = [
  {
    id: 'P-01',
    num: '01',
    title: 'Own the whole stack',
    description:
      'From schema design and RESTful endpoints to responsive UI state and deployment — architecture, security, and performance are one continuous workflow.',
    borderClasses: 'md:border-b md:border-r border-slate-800',
    projectId: 'project-trace',
    projectLinkText: '→ See it in TRACE',
    askQuery: 'How does TRACE own the whole stack end-to-end?',
    isFeatured: false,
  },
  {
    id: 'P-02',
    num: '02',
    title: 'Ship to real users',
    description:
      'Every system here is live, tested, and shipped end-to-end — handling real OAuth integrations, authentication boundaries, and WebSocket events.',
    borderClasses: 'md:border-b border-slate-800',
    projectId: 'project-incidenthub',
    projectLinkText: '→ See it in IncidentHub AI',
    askQuery: 'How does IncidentHub AI handle real OAuth and production users?',
    isFeatured: false,
  },
  {
    id: 'P-03',
    num: '03',
    title: 'Deterministic architecture',
    description:
      'Prioritizing explainable rule-based validation, multi-tenant RBAC boundaries, and strict data consistency over black-box assumptions.',
    borderClasses: 'md:border-r border-slate-800',
    projectId: 'project-trace',
    projectLinkText: '→ See it in TRACE',
    askQuery: "How is TRACE's architecture deterministic?",
    isFeatured: true,
    badgeText: 'CORE PHILOSOPHY',
  },
  {
    id: 'P-04',
    num: '04',
    title: 'Engineer for scale',
    description:
      'Stateless JWT middleware, Redis concurrency control, and real-time CRDT sync built to hold state and load reliably.',
    borderClasses: '',
    projectId: 'project-syncpad',
    projectLinkText: '→ See it in SyncPad',
    askQuery: 'How is SyncPad engineered for scale with CRDTs and WASM?',
    isFeatured: false,
  },
];

export default function Principles() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrollToProject = (projectId) => {
    const target = document.getElementById(projectId);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -80 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAskAbout = (query) => {
    const terminalEl = document.getElementById('operations') || document.getElementById('about');
    if (terminalEl) {
      if (window.lenis) {
        window.lenis.scrollTo(terminalEl, { offset: -40 });
      } else {
        terminalEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    window.dispatchEvent(new CustomEvent('terminal-query', { detail: { query } }));
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
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ease-out border-l-2 ${
                p.isFeatured
                  ? 'bg-[#0B1222]/80 border-l-cyan-400 shadow-[inset_0_0_25px_rgba(34,211,238,0.04)]'
                  : 'border-l-transparent hover:border-l-cyan-400/80 hover:bg-[#0E1526]/80'
              } hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(34,211,238,0.06)] ${p.borderClasses}`}
            >
              <div>
                {/* Header Row: Identifier and Large Faint Index */}
                <div className="flex items-center justify-between pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-slate-500 font-mono text-xs font-bold tracking-wider">
                      {p.id}
                    </span>
                    {p.isFeatured && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 flex items-center gap-1.5 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {p.badgeText}
                      </span>
                    )}
                  </div>

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

              {/* Interactive Footer Row: Supporting Project Link + Ask About This Button */}
              <div className="pt-5 mt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                {/* Concrete Supporting Project Anchor Link */}
                <button
                  type="button"
                  onClick={() => scrollToProject(p.projectId)}
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] sm:text-xs tracking-wider transition-colors cursor-pointer group/link flex items-center gap-1"
                  title={`Jump to ${p.projectLinkText.replace('→ ', '')}`}
                >
                  <span className="group-hover/link:underline">{p.projectLinkText}</span>
                </button>

                {/* Direct Query to AI Terminal */}
                <button
                  type="button"
                  onClick={() => handleAskAbout(p.askQuery)}
                  className="text-slate-400 hover:text-amber-300 text-[11px] sm:text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded border border-slate-800 hover:border-amber-500/40 hover:bg-amber-950/20 active:scale-95"
                  title={`Ask in AI Terminal: "${p.askQuery}"`}
                >
                  <FiMessageSquare className="text-[11px] text-amber-400/80" />
                  <span>Ask about this →</span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
