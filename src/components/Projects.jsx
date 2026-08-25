import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiImage } from 'react-icons/fi';
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
            Featured Full-Stack Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Curated web applications showcasing full-stack architecture, REST APIs, OAuth/RBAC authentication, and data visualizations.
          </p>
        </motion.div>

        {/* 4 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.08 }}
              className="card p-6 sm:p-7 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Proof / Screenshot Slot */}
                <div className="mb-5 rounded-lg overflow-hidden border border-white/[0.08] bg-[#090a0f] aspect-video flex items-center justify-center relative group-hover:border-[#38bdf8]/30 transition-colors">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4 text-slate-500 font-mono text-xs">
                      <FiImage className="text-2xl text-slate-600 mb-2 group-hover:text-[#38bdf8] transition-colors" />
                      <span className="text-slate-400 font-medium">{project.title}</span>
                      <span className="text-[0.68rem] text-slate-600 mt-0.5">
                        Screenshot / GIF Preview Area
                      </span>
                    </div>
                  )}
                </div>

                {/* Header Meta */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-3 mb-3.5 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold text-[#38bdf8] uppercase tracking-wider">
                    {project.category}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-[#090a0f] text-xs font-medium text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <FiGithub className="text-xs" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs transition-all shadow-sm"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mt-1 mb-3 font-sans">
                  {project.tagline}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-sans mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans">
                        <FiCheck className="text-[#38bdf8] text-sm mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-3.5 border-t border-white/[0.06] flex items-center gap-1.5 flex-wrap font-mono text-xs">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md bg-[#090a0f] border border-white/[0.06] text-slate-300 text-[0.72rem]"
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
