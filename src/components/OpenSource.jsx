import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const openSourceRepos = [
  {
    id: 'trace',
    category: 'AI • INCIDENT INVESTIGATION',
    stars: '89.5% ACC',
    title: 'TRACE — Causal RCA Engine',
    description:
      'Temporal root-cause analysis & causal inference engine benchmarked across 19 hidden-ground-truth production incidents with adversarial falsification.',
    tech: 'Python / FastAPI',
    techColor: 'bg-cyan-400',
    url: 'https://github.com/rakeshkumar0804/trace-rca-engine',
  },
  {
    id: 'solar-system',
    category: 'WEBGL • 3D',
    stars: '5 ★',
    title: 'Solar-System-Explorer',
    description:
      '3D web experience exploring eight planets and asteroid belts with realistic orbits, time controls, and camera interactions.',
    tech: 'TypeScript',
    techColor: 'bg-cyan-400',
    url: 'https://github.com/rakeshkumar0804/Solar-System-Explorer',
  },
  {
    id: 'taskflow',
    category: 'FULL-STACK • WORKFLOW',
    stars: '5 ★',
    title: 'TaskFlow',
    description:
      'MERN-stack collaborative project and task management application with role-based access control and responsive tracking.',
    tech: 'JavaScript',
    techColor: 'bg-amber-400',
    url: 'https://github.com/rakeshkumar0804/taskflow',
  },
  {
    id: 'leaveflow',
    category: 'ENTERPRISE • REST API',
    stars: '6 ★',
    title: 'LeaveFlow HR',
    description:
      'Full-stack Employee Leave Management System with manager approval workflows, SQLite relational store, and REST APIs.',
    tech: 'Node.js',
    techColor: 'bg-emerald-400',
    url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
  },
  {
    id: 'incidenthub',
    category: 'SRE • INTELLIGENCE',
    stars: '5 ★',
    title: 'IncidentHub AI Engine',
    description:
      'Multi-tenant incident intelligence platform correlating GitHub, Sentry, Slack, and Jira signals for automated root-cause analysis.',
    tech: 'TypeScript',
    techColor: 'bg-cyan-400',
    url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    id: 'syncpad',
    category: 'CRDT • WEBASSEMBLY',
    stars: 'Active',
    title: 'SyncPad Engine',
    description:
      'Real-time collaborative code editor with Yjs CRDT conflict-free synchronization and in-browser WASM code execution.',
    tech: 'TypeScript',
    techColor: 'bg-cyan-400',
    url: 'https://github.com/rakeshkumar0804/SyncPad',
  },
  {
    id: 'portfoliopulse',
    category: 'AUTOMATION • CRAWLER',
    stars: '5 ★',
    title: 'PortfolioPulse',
    description:
      'Deterministic portfolio and GitHub readiness analyzer running ~20 audit rules and headless SPA performance crawling.',
    tech: 'JavaScript',
    techColor: 'bg-amber-400',
    url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
];

export default function OpenSource() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="opensource" className="py-20 relative border-t border-slate-800/40 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 1. Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pt-4"
        >
          <div className="flex items-center">
            <span className="text-[#f59e0b] font-mono font-bold text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              03
            </span>
            <span className="text-[#38bdf8] font-mono text-2xl mx-2">/</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
              OPEN-SOURCE SIGNALS
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
            Public work on GitHub - built in the open, validated by stars.
          </p>
        </motion.div>

        {/* 2. Top GitHub Telemetry Banner (3 Columns) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="border border-slate-800/80 rounded-xl bg-[#0B101B]/60 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 p-6 mb-6 backdrop-blur-sm shadow-xl"
        >
          {/* Column 1: Total Stars */}
          <div className="flex flex-col items-center md:items-start justify-center pb-4 md:pb-0 md:pr-6 text-center md:text-left">
            <div className="text-amber-400 font-mono font-bold text-2xl md:text-3xl">
              40+ ★
            </div>
            <div className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mt-1">
              TOTAL STARS
            </div>
          </div>

          {/* Column 2: Public Repos */}
          <div className="flex flex-col items-center md:items-start justify-center py-4 md:py-0 md:px-6 text-center md:text-left">
            <div className="text-cyan-400 font-mono font-bold text-2xl md:text-3xl">
              9
            </div>
            <div className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mt-1">
              PUBLIC REPOS
            </div>
          </div>

          {/* Column 3: GitHub Handle */}
          <div className="flex flex-col items-center md:items-start justify-center pt-4 md:pt-0 md:pl-6 text-center md:text-left">
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 font-mono font-bold text-lg md:text-xl hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <FiGithub className="text-base text-cyan-400" />
              <span>@rakeshkumar0804</span>
            </a>
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 font-mono text-xs tracking-wider mt-1 hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>VIEW PROFILE</span>
              <span>↗</span>
            </a>
          </div>
        </motion.div>

        {/* 3. 2x3 Grid of Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {openSourceRepos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeInUp}
              custom={idx}
              className="border border-slate-800/80 rounded-xl p-5 bg-[#0B101B]/50 hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full group backdrop-blur-sm shadow-md"
            >
              <div>
                {/* Category & Stars */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-slate-500 text-[10px] tracking-widest uppercase">
                    {repo.category}
                  </span>
                  <span className="text-amber-400 font-mono text-xs font-semibold">
                    {repo.stars}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-100 mt-2 font-mono group-hover:text-cyan-300 transition-colors">
                  {repo.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mt-1.5 font-mono">
                  {repo.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className={`h-2 w-2 rounded-full ${repo.techColor}`} />
                  <span>{repo.tech}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px] font-semibold"
                >
                  <span>OPEN</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
