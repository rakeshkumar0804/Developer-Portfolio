import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLayers, FiActivity, FiServer, FiDatabase, FiShield, FiCpu, FiCheck } from 'react-icons/fi';
import { deployedSystems } from '../data/portfolioData';

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-20"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase mb-2">
            <span className="text-[#f59e0b]">02 /</span>
            <span className="text-[#38bdf8]">DEPLOYED SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            Production-Grade Systems & Platforms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl font-sans leading-relaxed">
            Production-grade systems, dashboards, and workflow platforms built with real authentication, APIs, data models, and deployment.
          </p>
        </motion.div>

        {/* Full-Width Alternating Case-Study Rows */}
        <div className="space-y-24">
          {deployedSystems.map((system, idx) => {
            const isEven = idx % 2 === 1; // Project 2, 4 -> Diagram Left, Details Right

            return (
              <motion.div
                key={system.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeInUp}
                className="relative rounded-2xl border border-white/[0.08] bg-[#111422]/90 backdrop-blur-xl p-7 sm:p-10 shadow-2xl hover:border-[#38bdf8]/40 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* DETAILS COLUMN */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      {/* Top Header Line */}
                      <div className="flex items-center justify-between flex-wrap gap-2 pb-3.5 mb-4 border-b border-white/[0.06] font-mono text-xs">
                        <div className="flex items-center gap-2.5">
                          <span className="font-bold text-[#f59e0b] px-2 py-0.5 rounded bg-[#f59e0b]/10">
                            {system.systemId}
                          </span>
                          <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[0.68rem] flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {system.status}
                          </span>
                        </div>
                        <span className="text-[#38bdf8] text-[0.7rem] uppercase tracking-wider font-semibold">
                          {system.category}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans group-hover:text-[#38bdf8] transition-colors">
                        {system.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-1 mb-4 font-sans">
                        {system.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                        {system.description}
                      </p>

                      {/* Metrics Stat Boxes */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                        {system.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2.5 rounded-lg border border-white/[0.06] bg-[#090a0f] text-center"
                          >
                            <div className="text-xs font-bold text-white font-mono truncate">{m.value}</div>
                            <div className="text-[0.65rem] text-slate-400 font-sans mt-0.5 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Highlights with Amber Squares */}
                      <div className="space-y-2 mb-7">
                        {system.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                            <span className="text-[#f59e0b] text-[0.65rem] mt-1 shrink-0">■</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Chips & Action Buttons */}
                    <div>
                      {/* Tech Chips */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5 mb-5 font-mono text-xs">
                        {system.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-[#090a0f] border border-white/[0.06] text-slate-300 text-[0.72rem]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex items-center gap-3">
                        {system.githubUrl && (
                          <a
                            href={system.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.12] bg-[#090a0f] text-xs font-medium text-slate-200 hover:text-white hover:border-[#38bdf8]/50 transition-colors"
                          >
                            <FiGithub className="text-sm text-[#38bdf8]" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {system.liveUrl && (
                          <a
                            href={system.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] text-xs font-semibold transition-all shadow-md shadow-sky-500/10"
                          >
                            <span>Live Demo</span>
                            <FiExternalLink className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ARCHITECTURE DIAGRAM SCHEMATIC COLUMN */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-xl border border-white/[0.08] bg-[#090a0f] p-5 sm:p-6 shadow-inner relative">
                      {/* Titlebar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] font-mono text-xs">
                        <div className="flex items-center gap-2 text-slate-300 font-semibold">
                          <FiLayers className="text-[#38bdf8]" />
                          <span className="text-[0.7rem] tracking-wider">SYSTEM_SCHEMATIC</span>
                        </div>
                        <span className="text-[0.65rem] text-[#f59e0b] font-mono">FLOW // ACTIVE</span>
                      </div>

                      {/* Connected Schematic Rectangular Blocks */}
                      <div className="space-y-2 font-mono text-xs">
                        {system.architectureNodes.map((node, nIdx) => (
                          <React.Fragment key={nIdx}>
                            <div className="p-2.5 rounded-lg border border-white/[0.06] bg-[#131622] flex items-center justify-between hover:border-[#38bdf8]/40 transition-colors">
                              <div className="flex items-center gap-2.5">
                                <span className="text-[0.62rem] font-bold text-[#f59e0b] w-4">
                                  0{nIdx + 1}
                                </span>
                                <span className="text-slate-200 font-semibold text-xs">
                                  {node.label}
                                </span>
                              </div>
                              <span className="text-[0.6rem] px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400 uppercase">
                                {node.type}
                              </span>
                            </div>

                            {/* Downward Directional Dotted Line Connector */}
                            {nIdx < system.architectureNodes.length - 1 && (
                              <div className="flex justify-center -my-1 text-slate-600 font-mono text-[0.65rem] select-none">
                                <span className="text-[#38bdf8]/60 font-bold">↓</span>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Schematic Footer */}
                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[0.65rem] font-mono text-slate-500">
                        <span>PIPELINE: END-TO-END</span>
                        <span className="text-emerald-400 font-medium">100% VALIDATED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
