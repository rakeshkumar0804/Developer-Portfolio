import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiExternalLink, FiBriefcase, FiAward } from 'react-icons/fi';

const matrixCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5/CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Monaco Editor', 'Zustand'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'RBAC', 'OAuth 2.0'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Render', 'Vercel', 'Docker', 'GitHub Actions / CI-CD', 'Linux'],
  },
  {
    title: 'Data & Caching',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'SQLite', 'Prisma'],
  },
  {
    title: 'Systems & Realtime',
    skills: ['CRDT (Yjs)', 'Web Workers', 'Pyodide (WASM)', 'Puppeteer'],
  },
];

const recognitions = [
  {
    type: 'COMPETITION',
    date: 'APR 2026',
    title: 'CodeKshetra Hackathon',
    organization: 'National Coding League',
    badgeColor: 'text-amber-400',
  },
  {
    type: 'CERTIFICATION',
    date: 'VERIFIED',
    title: 'SQL Certification',
    organization: 'Database Management & Querying',
    badgeColor: 'text-emerald-400',
  },
  {
    type: 'ACADEMIC',
    date: 'MAY 2026',
    title: 'B.Tech CSE Graduate',
    organization: 'Parul University',
    badgeColor: 'text-cyan-400',
  },
];

export default function Architect() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="font-mono">
      {/* =========================================================================
          SLIDE 1: Operator Spec Sheet & Service History (#architect / #experience)
          ========================================================================= */}
      <section id="architect" className="py-20 relative border-t border-slate-800/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12 pt-4"
          >
            <div className="flex items-center">
              <span className="text-[#f59e0b] font-mono font-bold text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                04
              </span>
              <span className="text-[#38bdf8] font-mono text-2xl mx-2">/</span>
              <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
                THE ARCHITECT
              </h2>
            </div>

            <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
              Operator spec sheet & service history.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Operator Spec Sheet Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              className="lg:col-span-6 border border-slate-800/80 rounded-xl bg-[#0B101B]/60 p-6 flex flex-col justify-between backdrop-blur-sm shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 pb-3 border-b border-slate-800/80">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>OPERATOR SPEC • RAKESH-CORE</span>
                </div>

                {/* Spec Table */}
                <div className="divide-y divide-slate-800/60 text-xs font-mono mb-6">
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">DESIGNATION</span>
                    <span className="text-slate-200 text-right font-medium">Full-Stack Developer & Systems Builder</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">BASE</span>
                    <span className="text-slate-200 text-right font-medium">Gurugram, HR, India</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">EXPERIENCE</span>
                    <span className="text-slate-200 text-right font-medium">Production-Grade MERN & Distributed Web</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">FOCUS</span>
                    <span className="text-cyan-400 text-right font-medium">Real-Time Systems • CRDTs • Deterministic Architectures</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">EDUCATION</span>
                    <span className="text-slate-200 text-right font-medium">B.Tech CSE — Parul University (2026)</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">STATUS</span>
                    <span className="text-emerald-400 text-right font-bold">Open to Full Stack / Backend Roles</span>
                  </div>
                </div>
              </div>

              {/* Bio Summary Box */}
              <div className="p-4 rounded-lg border border-slate-800/80 bg-slate-950/60 text-xs text-slate-300 font-sans leading-relaxed">
                Full-Stack MERN developer focused on deterministic systems, CRDT synchronization, and real-time architectures. Proven track record building production-style applications—from collaborative WASM code studios to multi-tenant incident response platforms.
              </div>
            </motion.div>

            {/* Right Column: Service History Log */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              custom={1}
              className="lg:col-span-6 flex flex-col justify-between space-y-6 pl-0 lg:pl-4"
            >
              {/* Role 1: Web Development Intern */}
              <div className="p-6 rounded-xl border border-slate-800/80 bg-[#0B101B]/60 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-slate-800/70">
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-cyan-400">○</span>
                    <span>Web Development Intern</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    APR 2026 - PRESENT
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-4">
                  Codetech IT Solution • Remote
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span>Architected internal web management systems with role-based auth and REST API pipelines.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span>Handled database schema design, end-to-end routing, and performance optimization.</span>
                  </div>
                </div>
              </div>

              {/* Role 2: Independent Systems Builder */}
              <div className="p-6 rounded-xl border border-slate-800/80 bg-[#0B101B]/60 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-slate-800/70">
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-amber-400">○</span>
                    <span>Independent Systems Builder</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    2025 - 2026
                  </span>
                </div>

                <div className="text-xs font-mono text-amber-400 mb-4">
                  Open Source & Product Architecture
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Engineered SyncPad: Real-time collaborative IDE with CRDT sync (Yjs) and sandboxed WASM runtime.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Built IncidentHub AI: Multi-tenant triage intelligence platform with Redis locks and OAuth pipelines.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Deployed 9+ open-source systems with automated CI/CD and deterministic test suites.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SLIDE 2: Subsystems Capability Matrix & Recognition (#matrix)
          ========================================================================= */}
      <section id="matrix" className="py-20 relative border-t border-slate-800/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pt-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 tracking-wider uppercase">
              <span className="text-cyan-400 font-bold">//</span>
              <span className="text-slate-100 font-bold">SUBSYSTEMS CAPABILITY MATRIX</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">PRODUCTION TECH STACK & RUNTIMES</span>
          </motion.div>

          {/* 1. Subsystems Capability Matrix (2x3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {matrixCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeInUp}
                custom={idx}
                className="p-5 rounded-xl border border-slate-800/80 bg-[#0B101B]/50 hover:border-cyan-500/40 transition-all backdrop-blur-sm shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-3 pb-2 border-b border-slate-800/70 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{cat.title}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded bg-[#0d1424] border border-slate-700/60 text-xs text-slate-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Field Recognition & Certifications (Bottom 3-Card Row) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="border border-slate-800/80 rounded-xl bg-[#0B101B]/60 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 p-6 backdrop-blur-sm shadow-xl"
          >
            {recognitions.map((rec, idx) => (
              <div
                key={rec.title}
                className={`flex flex-col justify-between ${
                  idx === 0 ? 'pb-4 md:pb-0 md:pr-6' : idx === 1 ? 'py-4 md:py-0 md:px-6' : 'pt-4 md:pt-0 md:pl-6'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-500 text-[10px] tracking-widest uppercase">
                      {rec.type}
                    </span>
                    <span className={`text-xs font-mono font-bold ${rec.badgeColor}`}>
                      {rec.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 font-mono mb-1">
                    {rec.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-mono">
                    {rec.organization}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
