import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiArrowRight, FiLayers } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

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
            // Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Production & Full-Stack Projects
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Real-world web platforms featuring multi-role authentication, secure REST APIs, real-time WebSocket communication, and responsive user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: pIdx * 0.08 }}
              className={`premium-card p-7 sm:p-8 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 mb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold text-[#38bdf8] uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-[#090a0f] text-xs font-medium text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <FiGithub className="text-xs" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs transition-all shadow-sm"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-300 font-sans mb-4">
                  {project.description}
                </p>

                {/* Mini Architecture Flow Line */}
                {project.architecture && (
                  <div className="mb-4 p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] font-mono text-[0.7rem] text-slate-400">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-slate-500 font-semibold mr-1 flex items-center gap-1">
                        <FiLayers className="text-[#38bdf8]" /> Flow:
                      </span>
                      {project.architecture.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="text-slate-300 font-medium">
                            {step}
                          </span>
                          {sIdx < project.architecture.length - 1 && (
                            <FiArrowRight className="text-[#38bdf8] shrink-0 text-xs opacity-70" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 font-sans">
                        <FiCheck className="text-[#38bdf8] text-sm mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Pills */}
              <div className="pt-3.5 border-t border-white/[0.06] flex items-center gap-1.5 flex-wrap">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-[#090a0f] border border-white/[0.06] text-xs font-mono text-slate-300"
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
