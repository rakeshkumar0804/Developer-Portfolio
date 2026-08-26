import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal, FiLayers } from 'react-icons/fi';
import { primarySystems, secondaryDeployments } from '../data/portfolioData';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="projects" className="py-20 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-mono font-bold text-2xl md:text-3xl drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]">
              02
            </span>
            <span className="text-cyan-400 font-mono font-bold text-2xl md:text-3xl">/</span>
            <h2 className="text-slate-100 font-sans font-bold tracking-wider uppercase text-xl md:text-2xl">
              DEPLOYED SYSTEMS
            </h2>
          </div>

          <p className="text-slate-400 font-mono text-xs md:text-sm tracking-wider">
            Production-ready distributed systems, developer tools, and data engines.
          </p>
        </motion.div>

        {/* 4 Major Architecture Systems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {primarySystems.map((sys, idx) => (
            <motion.div
              key={sys.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              custom={idx}
              variants={fadeInUp}
              className="p-6 rounded-xl border border-slate-800/80 bg-[#0B101B]/80 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 shadow-xl group backdrop-blur-md"
            >
              <div>
                {/* System Header Row */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/70">
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    {sys.sysId}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE PRODUCTION
                  </span>
                </div>

                {/* System Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {sys.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#38bdf8] mt-1 mb-3">
                  {sys.tagline}
                </p>

                {/* Architecture Highlights */}
                <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mb-5">
                  {sys.highlights}
                </p>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {sys.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-[#131b2e] border border-slate-700/60 text-[11px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo and Source */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {sys.liveUrl && (
                    <a
                      href={sys.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#050811] transition-all text-xs font-bold shadow-[0_0_10px_rgba(34,211,238,0.15)]"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="text-xs" />
                    </a>
                  )}

                  {sys.githubUrl && (
                    <a
                      href={sys.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-700/80 bg-[#131b2e] text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all text-xs font-semibold"
                    >
                      <FiGithub className="text-xs text-cyan-400" />
                      <span>Source</span>
                    </a>
                  )}
                </div>

                <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                  SHA-256 VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary & Auxiliary Deployments Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 tracking-wider mb-4 uppercase">
            <span>//</span>
            <span>SECONDARY & AUXILIARY DEPLOYMENTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryDeployments.map((sec) => (
              <div
                key={sec.id}
                className="p-4 rounded-lg border border-slate-800/80 bg-[#0B101B]/60 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-md"
              >
                <div>
                  <h4 className="text-sm font-sans font-bold text-white mb-1">
                    {sec.title}
                  </h4>
                  <p className="text-xs font-sans text-slate-400 leading-relaxed mb-3">
                    {sec.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {sec.tech.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded bg-[#131b2e] border border-slate-800 text-[10px] text-slate-400 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  {sec.liveUrl && (
                    <a
                      href={sec.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 text-[11px]"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="text-[10px]" />
                    </a>
                  )}

                  {sec.githubUrl && (
                    <a
                      href={sec.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white font-mono flex items-center gap-1 text-[11px]"
                    >
                      <FiGithub className="text-[10px]" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
