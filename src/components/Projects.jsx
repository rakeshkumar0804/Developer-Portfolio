import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiCheckCircle, FiCpu, FiLayers } from 'react-icons/fi';
import { deployedSystems } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const filteredSystems =
    filter === 'all'
      ? deployedSystems
      : deployedSystems.filter((s) => s.category === filter || (filter === 'rbac-fullstack' && s.category === 'rbac-fullstack'));

  return (
    <section id="systems" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#38cfff] bg-[#38cfff]/10 border border-[#38cfff]/30 mb-3">
            <span>03 // DEPLOYED_SCHEMATICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Deployed <span className="text-[#38cfff]">Systems & Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            Production web systems, role-based application portals, and real-time data pipelines engineered with clean separation of concerns and resilient error boundaries.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10 font-mono text-xs">
          {[
            { id: 'all', label: '[ ALL_SYSTEMS ]' },
            { id: 'rbac-fullstack', label: '[ RBAC & FULL-STACK ]' },
            { id: 'ai-cloud', label: '[ AI & CLOUD ]' },
            { id: 'tools', label: '[ DEV_TOOLS & VIZ ]' },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#38cfff] text-[#020712] font-bold shadow-[0_0_15px_rgba(56,207,255,0.4)]'
                    : 'bg-[#06101f] border border-[#50aaff]/25 text-[#8aa4bf] hover:text-[#e6f1ff] hover:border-[#38cfff]/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Deployed Systems Schematics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSystems.map((project, pIdx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className={`hud-panel p-7 sm:p-8 rounded-sm relative border border-[#50aaff]/25 bg-[#06101f]/85 flex flex-col justify-between group transition-all duration-300 hover:border-[#38cfff]/60 hover:shadow-[0_0_30px_rgba(56,207,255,0.15)] ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                <div>
                  {/* Top Schematic Meta Header */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-4 mb-5 border-b border-[#50aaff]/15 font-mono text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#38cfff] font-bold text-[0.7rem] px-2 py-0.5 rounded-sm bg-[#38cfff]/10 border border-[#38cfff]/30">
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="text-[#ffb23f] font-bold text-[0.68rem] px-2 py-0.5 rounded-sm bg-[#ffb23f]/10 border border-[#ffb23f]/30">
                          ★ CORE ARCHITECTURE
                        </span>
                      )}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-2.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded-sm border border-[#50aaff]/30 bg-[#020712] text-[#8aa4bf] hover:text-[#38cfff] hover:border-[#38cfff] transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FiGithub />
                          <span className="text-[0.65rem]">SOURCE</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1 rounded-sm bg-[#38cfff] hover:bg-[#5fa8ff] text-[#020712] font-bold transition-all shadow-[0_0_10px_rgba(56,207,255,0.3)]"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <span className="text-[0.65rem]">DEMO</span>
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black font-sans text-[#e6f1ff] group-hover:text-[#38cfff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#5fa8ff] mt-1 mb-4 tracking-wide">
                    // {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#8aa4bf] font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Architecture Diagram Panel */}
                  {project.architecture && (
                    <div className="mb-6 p-3.5 rounded-sm border border-[#50aaff]/20 bg-[#020712]/90 font-mono text-[0.68rem] select-none">
                      <div className="flex items-center justify-between text-[0.6rem] text-[#38cfff] font-bold uppercase tracking-widest mb-2.5">
                        <span className="flex items-center gap-1.5">
                          <FiCpu /> PIPELINE_SCHEMATIC_FLOW
                        </span>
                        <span className="text-[#8aa4bf]">FLOW_VERIFIED</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap text-[#e6f1ff]">
                        {project.architecture.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2 py-1 rounded-sm bg-[#06101f] border border-[#50aaff]/30 text-[#e6f1ff] text-[0.68rem] font-semibold">
                              {step}
                            </span>
                            {sIdx < project.architecture.length - 1 && (
                              <FiArrowRight className="text-[#38cfff] shrink-0 text-xs" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  {project.highlights && (
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#8aa4bf] font-sans">
                          <FiCheckCircle className="text-[#38cfff] text-sm mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-[#50aaff]/15 flex items-center gap-2 flex-wrap">
                  <span className="text-[0.65rem] font-mono text-[#ffb23f] font-bold mr-1">
                    TECH:
                  </span>
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-sm border border-[#50aaff]/20 bg-[#020712] text-xs font-mono text-[#8aa4bf] group-hover:border-[#38cfff]/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
