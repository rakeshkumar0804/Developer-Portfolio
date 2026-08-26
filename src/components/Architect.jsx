import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const matrixCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux', 'React Router', 'Tailwind CSS', 'Monaco Editor', 'Axios', 'Bootstrap'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT Auth', 'RBAC', 'bcrypt', 'OAuth 2.0'],
  },
  {
    title: 'Databases & Cache',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    title: 'Systems & Execution',
    skills: ['Yjs (CRDT)', 'WebAssembly (Pyodide)', 'Web Workers', 'Puppeteer', 'D3.js', 'GSAP'],
  },
  {
    title: 'Cloud, Tools & Core CS',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'Docker', 'DSA', 'OOP', 'DBMS', 'OS', 'Networks'],
  },
];

const primaryRecognitions = [
  {
    header: 'MAY 2026 • VERIFIED ASSESSMENT',
    title: 'SQL (Advanced)',
    issuer: 'HackerRank Skill Certification • ID: EFB3EF1D1DAC',
    badgeColor: 'text-amber-400',
    pdfUrl: '/certificates/sql_advanced_certificate.pdf',
  },
  {
    header: 'JUL-OCT 2025 • ELITE HONOR (TOP TIER)',
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur (12-Week Proctored)',
    badgeColor: 'text-emerald-400',
    pdfUrl: '/certificates/Introduction_to_Internet_of_Things.pdf',
  },
  {
    header: 'FEB 2024 • STATEMENT OF ACHIEVEMENT',
    title: 'CPA: Programming Essentials in C++',
    issuer: 'OpenEDG C++ Institute & Cisco Networking Academy',
    badgeColor: 'text-cyan-400',
    pdfUrl: '/certificates/RakeshKumar-CPA_Programmin_certificate.pdf',
  },
];

const auxiliaryRecognitions = [
  {
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks / GD Goenka (Apr 2026)',
    type: 'COMPETITION',
    pdfUrl: '/certificates/CodeKshetra_certificate.pdf',
  },
  {
    title: 'AMENTIS: Chartering the Unknown',
    issuer: 'IEEE GTBIT Student Branch',
    type: 'HACKATHON',
    pdfUrl: '/certificates/AMENTIS_certificate.pdf',
  },
  {
    title: 'Python Programming Masterclass',
    issuer: 'Udemy (Feb 2025)',
    type: 'CERTIFICATION',
    pdfUrl: '/certificates/Python_Masterclass_Udemy.pdf',
  },
  {
    title: 'Learn Cyber Security Practical Guide',
    issuer: 'Udemy (Feb 2025)',
    type: 'CERTIFICATION',
    pdfUrl: '/certificates/Cyber_Security_Udemy.pdf',
  },
  {
    title: 'CSS, Bootstrap, JS, PHP Full Stack Crash Course',
    issuer: 'Udemy (Feb 2025)',
    type: 'CERTIFICATION',
    pdfUrl: '/certificates/Full_Stack_Crash_Course_Udemy.pdf',
  },
];

export default function Architect() {
  const [showAllCerts, setShowAllCerts] = useState(false);

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
          SLIDE 1: Operator Spec Sheet & Service History (#architect)
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
              className="lg:col-span-6 border border-slate-800/80 rounded-xl bg-[#0B101B]/50 p-6 flex flex-col justify-between h-full backdrop-blur-sm shadow-xl"
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] tracking-[0.2em] uppercase mb-4 pb-3 border-b border-slate-800/80">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>OPERATOR SPEC • RAKESH-CORE</span>
                </div>

                {/* Spec Table (Key-Value Grid with Hairline Dividers) */}
                <div className="divide-y divide-slate-800/60 text-xs font-mono">
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">DESIGNATION</span>
                    <span className="text-slate-200 text-right font-medium">Full-Stack Developer / MERN Stack Engineer</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">BASE</span>
                    <span className="text-slate-200 text-right font-medium">Gurugram, HR, India</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">EXPERIENCE</span>
                    <span className="text-slate-200 text-right font-medium">Production-Grade MERN & Distributed Systems</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-cyan-400 uppercase tracking-wider shrink-0">FOCUS</span>
                    <span className="text-cyan-400 text-right font-medium">Real-Time Sync • CRDTs • Deterministic Architectures</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">EDUCATION</span>
                    <span className="text-slate-200 text-right font-medium">B.Tech CSE — Parul University (Graduated May 2026)</span>
                  </div>
                  <div className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-slate-500 uppercase tracking-wider shrink-0">STATUS</span>
                    <span className="text-emerald-400 text-right font-bold">Open to Full Stack / Backend Roles</span>
                  </div>
                </div>

                {/* Expanded Bio (Seamless Text Block — NO nested inner card wrapper) */}
                <div className="border-t border-slate-800/80 pt-5 mt-4 text-xs md:text-sm font-mono text-slate-300 leading-relaxed">
                  Full-Stack Web Developer and B.Tech CSE graduate based in Gurugram, India, specializing in production-grade MERN architectures, deterministic backend systems, and real-time synchronization. Proven track record architecting and shipping complex full-stack web applications end-to-end—from collaborative in-browser WASM code studios (SyncPad) and multi-tenant incident intelligence platforms (IncidentHub AI) to automated career intelligence engines (PortfolioPulse). Strong foundation in data structures, RESTful API design, RBAC permission security, database modeling, and client-side performance optimization.
                </div>
              </div>
            </motion.div>

            {/* Right Column: Service History Log */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              custom={1}
              className="lg:col-span-6 flex flex-col justify-between space-y-6 pl-2 md:pl-4"
            >
              {/* Role 1: Software Development Intern */}
              <div className="p-6 rounded-xl border border-slate-800/80 bg-[#0B101B]/50 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-slate-800/70">
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-cyan-400">○</span>
                    <span>Software Development Intern</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    JAN 2026 – APR 2026
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-4">
                  Codetech IT Solutions • Remote
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span>Engineered an Internal Employee Management System (Node.js, Express.js, MongoDB) supporting 3 user roles, replacing manual tracking.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span>Secured platform with JWT authentication and layered access control across 3 permission tiers (employee, manager, admin) with locked role-restricted APIs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400">▪</span>
                    <span>Planned and validated RESTful CRUD endpoints across core employee, department, and role modules.</span>
                  </div>
                </div>
              </div>

              {/* Role 2: Independent Systems Architect */}
              <div className="p-6 rounded-xl border border-slate-800/80 bg-[#0B101B]/50 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 mb-2 border-b border-slate-800/70">
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-amber-400">○</span>
                    <span>Independent Systems Architect</span>
                  </h3>
                  <span className="text-xs text-slate-400 font-mono tracking-wider">
                    2025 – 2026
                  </span>
                </div>

                <div className="text-xs font-mono text-amber-400 mb-4">
                  Distributed Web & Developer Tooling
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Built IncidentHub AI: Multi-tenant incident intelligence platform with Redis-backed distributed locks, HMAC-verified webhooks, and 236/236 passing RBAC tests.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Built SyncPad: Real-time collaborative code editor with Yjs CRDT conflict-free synchronization and in-browser WASM/Pyodide execution.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400">▪</span>
                    <span>Engineered PortfolioPulse: Rule-based career auditor integrating GitHub REST API crawling and Puppeteer headless scoring engines.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SLIDE 2: Subsystems Capability Matrix & Field Recognition (#matrix)
          ========================================================================= */}
      <section id="matrix" className="py-20 relative border-t border-slate-800/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pt-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 tracking-wider uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold">RAKESH-CORE UPLINK ACTIVE</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-100 font-bold">SUBSYSTEMS • CAPABILITY MATRIX</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">PRODUCTION TECH STACK & RUNTIMES</span>
          </motion.div>

          {/* 2x3 Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

          {/* 3. Field Recognition & Primary Clickable 3-Card Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="border border-slate-800/80 rounded-xl bg-[#0B101B]/50 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 p-6 backdrop-blur-sm shadow-xl mb-4"
          >
            {primaryRecognitions.map((rec, idx) => (
              <a
                key={rec.title}
                href={rec.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group cursor-pointer hover:bg-[#0B101B]/80 transition-all duration-200 flex flex-col justify-between ${
                  idx === 0
                    ? 'pb-4 md:pb-0 md:pr-6'
                    : idx === 1
                    ? 'py-4 md:py-0 md:px-6'
                    : 'pt-4 md:pt-0 md:pl-6'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400 text-[10px] tracking-widest uppercase">
                      {rec.header}
                    </span>
                    <span className="font-mono text-[10px] text-cyan-400 group-hover:text-cyan-300 font-semibold transition-colors flex items-center gap-0.5">
                      <span>VIEW PDF</span>
                      <span>↗</span>
                    </span>
                  </div>

                  <h3 className="text-slate-100 text-base font-semibold font-mono mt-1 group-hover:text-cyan-300 transition-colors">
                    {rec.title}
                  </h3>

                  <p className="text-slate-400 font-mono text-xs mt-1 leading-relaxed">
                    {rec.issuer}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* 4. Expandable Auxiliary Credentials Trigger Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={fadeInUp}
          >
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-mono text-slate-400 border border-slate-800/80 rounded-lg bg-[#0B101B]/30 hover:border-cyan-500/40 hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
            >
              <span>// AUXILIARY CERTIFICATIONS & HACKATHONS ({showAllCerts ? 'COLLAPSE' : 'EXPAND +5'})</span>
              <span className="text-cyan-400">{showAllCerts ? '▲' : '▼'}</span>
            </button>
          </motion.div>

          {/* 5. Collapsible Auxiliary Sub-Grid (All Clickable Cards with Live PDFs) */}
          <AnimatePresence>
            {showAllCerts && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {auxiliaryRecognitions.map((aux) => (
                    <a
                      key={aux.title}
                      href={aux.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border border-slate-800/80 bg-[#0B101B]/40 hover:border-cyan-500/50 hover:bg-[#0B101B]/70 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase mb-1">
                        <span>{aux.type}</span>
                        <span className="text-cyan-400 group-hover:text-cyan-300 font-bold flex items-center gap-0.5 transition-colors">
                          <span>VERIFIED</span>
                          <span>↗</span>
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-100 font-mono group-hover:text-cyan-300 transition-colors">
                        {aux.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        {aux.issuer}
                      </p>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
