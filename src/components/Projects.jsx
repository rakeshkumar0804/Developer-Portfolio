import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiCheckCircle, FiCpu } from 'react-icons/fi';
import { deployedSystems } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  const filteredSystems =
    filter === 'all'
      ? deployedSystems
      : deployedSystems.filter((s) => s.id === filter);

  return (
    <section id="systems" className="py-20 relative border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs text-xs font-mono font-bold tracking-widest uppercase text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/25 mb-3">
            <span>02 / DEPLOYED_SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Deployed <span className="text-[#38bdf8]">Systems & Platforms</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            Production web platforms, role-based workflows, and real-time data pipelines engineered with clean separation of concerns and resilient architecture.
          </p>
        </motion.div>

        {/* Systems Schematics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {deployedSystems.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: pIdx * 0.07 }}
              className={`blueprint-panel p-7 sm:p-8 rounded-xs relative border border-sky-500/20 bg-[#060e1c]/85 flex flex-col justify-between group hover:border-sky-500/50 transition-all duration-200 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              <div>
                {/* Top Schematic Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3.5 mb-4 border-b border-sky-500/15 font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#fbbf24] font-black text-sm">
                      {project.sysNum}
                    </span>
                    <span className="text-[#38bdf8] font-bold text-[0.68rem] px-2 py-0.5 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/25">
                      {project.status}
                    </span>
                  </div>

                  {/* Action Triggers */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-2.5 py-1 rounded-xs border border-sky-500/30 bg-[#030712] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <FiGithub className="text-xs" />
                        <span className="text-[0.62rem]">SOURCE</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-bold transition-all"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span className="text-[0.62rem]">DEMO</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#38bdf8] mt-0.5 mb-3.5 font-medium">
                  // {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#94a3b8] font-sans mb-5">
                  {project.description}
                </p>

                {/* Mini Architecture Diagram Panel */}
                {project.architecture && (
                  <div className="mb-5 p-3 rounded-xs border border-sky-500/15 bg-[#030712]/90 font-mono text-[0.65rem] select-none">
                    <div className="flex items-center justify-between text-[0.58rem] text-[#38bdf8] font-bold uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1">
                        <FiCpu /> PIPELINE_FLOW
                      </span>
                      <span className="text-[#64748b]">VERIFIED</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap text-[#f8fafc]">
                      {project.architecture.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2 py-0.5 rounded-xs bg-[#060e1c] border border-sky-500/25 text-[#f8fafc] text-[0.65rem]">
                            {step}
                          </span>
                          {sIdx < project.architecture.length - 1 && (
                            <FiArrowRight className="text-[#38bdf8] shrink-0 text-xs" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Highlights */}
                {project.highlights && (
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#94a3b8] font-sans">
                        <FiCheckCircle className="text-[#38bdf8] text-xs mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3.5 border-t border-sky-500/15 flex items-center gap-1.5 flex-wrap">
                <span className="text-[0.62rem] font-mono text-[#fbbf24] font-bold mr-1">
                  TECH:
                </span>
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-xs border border-sky-500/15 bg-[#030712] text-[0.68rem] font-mono text-[#94a3b8]"
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
