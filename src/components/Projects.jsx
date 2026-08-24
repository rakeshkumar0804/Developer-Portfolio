import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiCheck } from 'react-icons/fi';
import { deployedSystems } from '../data/portfolioData';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="systems" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-mono text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-3 tracking-widest uppercase">
            <span>02 / DEPLOYED_SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            Deployed Systems
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            Production web platforms, role-based workflows, and data-driven dashboards built with clean architectures and end-to-end type safety.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {deployedSystems.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: pIdx * 0.07 }}
              className={`blueprint-card p-7 sm:p-8 rounded-xs relative flex flex-col justify-between group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="micro-corner-tl" />
              <div className="micro-corner-br" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 mb-4 border-b border-white/[0.05] font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#fbbf24] font-bold text-xs">
                      {project.sysNum}
                    </span>
                    <span className="text-[#38bdf8] text-[0.65rem] px-2 py-0.5 rounded-xs bg-[#38bdf8]/10">
                      {project.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-xs border border-white/[0.1] bg-[#030712] text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <FiGithub className="text-xs" />
                        <span className="text-[0.62rem]">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-semibold text-xs transition-all"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span className="text-[0.62rem]">Live Demo</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-400 font-sans mb-4">
                  {project.description}
                </p>

                {/* Mini Architecture Flow Line */}
                {project.architecture && (
                  <div className="mb-4 p-2.5 rounded-xs bg-[#02050c] border border-white/[0.04] font-mono text-[0.62rem] text-slate-400">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.architecture.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="text-slate-300">
                            {step}
                          </span>
                          {sIdx < project.architecture.length - 1 && (
                            <FiArrowRight className="text-[#38bdf8] shrink-0 opacity-70" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Highlights */}
                {project.highlights && (
                  <div className="space-y-1 mb-5">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                        <FiCheck className="text-[#38bdf8] text-xs mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3 border-t border-white/[0.05] flex items-center gap-1.5 flex-wrap font-mono text-[0.65rem] text-slate-400">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-xs bg-[#030712] border border-white/[0.06] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
