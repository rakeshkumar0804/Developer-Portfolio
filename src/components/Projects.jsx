import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiArrowRight, FiActivity, FiLayers, FiShield, FiCpu, FiTrendingUp, FiCheckSquare } from 'react-icons/fi';
import { featuredProject, gridProjects, creativeExperiments } from '../data/portfolioData';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // Case Studies & Systems
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Featured Full-Stack Products
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Production web platforms, role-based workflows, and developer tools engineered with real-world architecture, secure APIs, and responsive interfaces.
          </p>
        </motion.div>

        {/* 1. FEATURED CASE STUDY: IncidentHub AI */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="premium-card p-7 sm:p-9 rounded-2xl border border-white/[0.1] bg-[#131622]/90 shadow-xl mb-10 relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                {/* Header Tagline */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#f59e0b] px-2 py-0.5 rounded bg-[#f59e0b]/10">
                      FEATURED SYSTEM · {featuredProject.projectNum}
                    </span>
                    <span className="text-xs font-mono text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/10">
                      {featuredProject.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-[#090a0f] text-xs font-medium text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FiGithub className="text-xs" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs transition-all shadow-sm"
                        aria-label="Live Demo"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans group-hover:text-[#38bdf8] transition-colors">
                  {featuredProject.title}
                </h3>
                <div className="text-sm font-semibold text-[#38bdf8] mt-1 mb-3 font-sans">
                  {featuredProject.subtitle}
                </div>

                {/* Problem Statement Box */}
                <div className="p-3 rounded-lg bg-[#090a0f] border border-amber-500/20 text-xs text-amber-200/90 mb-4 font-sans flex items-start gap-2">
                  <span className="font-bold text-[#f59e0b] shrink-0 font-mono">PROBLEM:</span>
                  <span>{featuredProject.problem}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {featuredProject.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {featuredProject.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <FiCheck className="text-[#38bdf8] text-sm mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Metrics Row */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#090a0f] border border-white/[0.06] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[0.7rem] text-slate-400 shrink-0">
                  {featuredProject.metrics}
                </span>
              </div>
            </div>

            {/* Right Visual Panel: Incident Correlation & Triage Diagram */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full">
              <div className="rounded-xl border border-white/[0.08] bg-[#090a0f] p-5 shadow-inner">
                <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-white/[0.06] font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                    <FiActivity className="text-[#38bdf8]" />
                    <span>SIGNAL CORRELATION FLOW</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[0.68rem]">AUTOMATED</span>
                </div>

                {/* Visual Pipeline Nodes */}
                <div className="space-y-2.5 font-mono text-xs">
                  {/* Step 1 */}
                  <div className="p-2.5 rounded-lg border border-white/[0.06] bg-[#131622] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                      <span className="text-slate-200 font-semibold">1. Webhook Ingestion</span>
                    </div>
                    <span className="text-[0.65rem] text-slate-400">GitHub & Sentry Logs</span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>

                  {/* Step 2 */}
                  <div className="p-2.5 rounded-lg border border-[#f59e0b]/30 bg-[#f59e0b]/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                      <span className="text-amber-300 font-semibold">2. Multi-Tenant RBAC</span>
                    </div>
                    <span className="text-[0.65rem] text-amber-400">Team Isolation Guard</span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>

                  {/* Step 3 */}
                  <div className="p-2.5 rounded-lg border border-sky-500/30 bg-sky-500/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      <span className="text-sky-300 font-semibold">3. Real-Time Triage Room</span>
                    </div>
                    <span className="text-[0.65rem] text-sky-400">WebSocket Broadcast</span>
                  </div>

                  <div className="flex justify-center -my-1 text-slate-600 text-xs">↓</div>

                  {/* Step 4 */}
                  <div className="p-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-emerald-300 font-semibold">4. AI Postmortem Engine</span>
                    </div>
                    <span className="text-[0.65rem] text-emerald-400">Root-Cause Summary</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[0.68rem] font-mono text-slate-400 flex items-center justify-between">
                  <span>Stack: React + Node + Postgres + Redis</span>
                  <span className="text-emerald-400">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. CORE PROJECTS 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {gridProjects.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: pIdx * 0.08 }}
              className="premium-card p-7 sm:p-8 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-[#f59e0b] font-bold">{project.projectNum}</span>
                    <span className="text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/10 font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/[0.1] bg-[#090a0f] text-xs font-medium text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors"
                        aria-label={`Source for ${project.title}`}
                      >
                        <FiGithub className="text-xs" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs transition-all"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <span>Demo</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-sans group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-semibold text-[#38bdf8] mt-1 mb-3 font-sans">
                  {project.subtitle}
                </div>

                {/* Problem Statement */}
                <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] text-xs text-slate-300 mb-3 font-sans">
                  <span className="font-bold text-[#f59e0b] font-mono mr-1.5">PROBLEM:</span>
                  <span>{project.problem}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-sans mb-4">
                  {project.description}
                </p>

                {/* Unique Project Visual Strip */}
                {project.id === 'leaveflow-hr' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#090a0f] border border-white/[0.04] font-mono text-[0.68rem] text-slate-300">
                    <div className="text-[0.62rem] text-[#38bdf8] font-bold uppercase mb-2 flex items-center gap-1">
                      <FiShield /> 3-ROLE APPROVAL WORKFLOW
                    </div>
                    <div className="flex items-center justify-between text-center gap-1 flex-wrap">
                      <span className="px-2 py-1 rounded bg-[#131622] border border-white/[0.06] text-slate-200">
                        Employee Request
                      </span>
                      <span className="text-slate-600">→</span>
                      <span className="px-2 py-1 rounded bg-[#131622] border border-amber-500/30 text-amber-300">
                        Manager Review
                      </span>
                      <span className="text-slate-600">→</span>
                      <span className="px-2 py-1 rounded bg-[#131622] border border-emerald-500/30 text-emerald-300">
                        Admin Approval
                      </span>
                    </div>
                  </div>
                )}

                {project.id === 'portfoliopulse' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#090a0f] border border-white/[0.04] font-mono text-[0.68rem] text-slate-300">
                    <div className="text-[0.62rem] text-[#38bdf8] font-bold uppercase mb-2 flex items-center gap-1">
                      <FiActivity /> HIRING READINESS SIGNALS
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-1.5 rounded bg-[#131622] border border-white/[0.06]">
                        <div className="text-[0.6rem] text-slate-400">GitHub Score</div>
                        <div className="text-xs font-bold text-emerald-400 font-mono">92/100</div>
                      </div>
                      <div className="p-1.5 rounded bg-[#131622] border border-white/[0.06]">
                        <div className="text-[0.6rem] text-slate-400">Portfolio SPA</div>
                        <div className="text-xs font-bold text-[#38bdf8] font-mono">88/100</div>
                      </div>
                      <div className="p-1.5 rounded bg-[#131622] border border-white/[0.06]">
                        <div className="text-[0.6rem] text-slate-400">ATS Readiness</div>
                        <div className="text-xs font-bold text-amber-400 font-mono">95/100</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'kohli-analytics' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#090a0f] border border-white/[0.04] font-mono text-[0.68rem] text-slate-300">
                    <div className="text-[0.62rem] text-[#38bdf8] font-bold uppercase mb-2 flex items-center gap-1">
                      <FiTrendingUp /> D3.JS VECTOR VISUALIZATION ENGINE
                    </div>
                    <div className="flex items-center justify-between text-slate-300 text-[0.68rem]">
                      <span>Ball-by-Ball Stream</span>
                      <span className="text-slate-600">→</span>
                      <span>D3.js Charts</span>
                      <span className="text-slate-600">→</span>
                      <span className="text-emerald-400">GSAP Motion</span>
                    </div>
                  </div>
                )}

                {project.id === 'taskflow-pro' && (
                  <div className="mb-4 p-3 rounded-lg bg-[#090a0f] border border-white/[0.04] font-mono text-[0.68rem] text-slate-300">
                    <div className="text-[0.62rem] text-[#38bdf8] font-bold uppercase mb-2 flex items-center gap-1">
                      <FiCheckSquare /> REAL-TIME KANBAN LANES
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[0.65rem]">
                      <div className="p-1 rounded bg-[#131622] text-slate-400">To Do (3)</div>
                      <div className="p-1 rounded bg-[#131622] border border-sky-500/30 text-sky-300">In Prog (2)</div>
                      <div className="p-1 rounded bg-[#131622] border border-amber-500/30 text-amber-300">Review (1)</div>
                      <div className="p-1 rounded bg-[#131622] border border-emerald-500/30 text-emerald-300">Done (8)</div>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                      <FiCheck className="text-[#38bdf8] text-sm mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Chips & Metrics */}
              <div className="pt-3.5 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-xs">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#090a0f] border border-white/[0.06] text-[0.7rem] text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[0.68rem] text-slate-400 shrink-0">
                  {project.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. INTERACTIVE EXPERIMENTS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="p-6 rounded-xl border border-white/[0.06] bg-[#090a0f]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <div className="text-[0.68rem] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
              Creative & Interactive Experiments
            </div>
            <h4 className="text-base font-bold text-white font-sans">
              Solar System Explorer (Three.js / WebGL)
            </h4>
            <p className="text-xs text-slate-400 font-sans mt-0.5 max-w-xl">
              3D interactive celestial orbital mechanics visualizer built with WebGL and Three.js featuring real astronomical physics and planetary textures.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-400">5 stars · WebGL</span>
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-[#131622] text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <FiGithub className="text-xs" />
              <span>Source</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
