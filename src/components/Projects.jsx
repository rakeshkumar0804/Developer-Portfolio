import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiCheck } from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

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
    <section id="projects" className="py-16 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Terminal Header Prompt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="text-emerald-400 font-bold">$</span>
            <span>ls -la ./projects/</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-sans">
                Full-stack applications built with production-ready architecture and real workflows.
              </p>
            </div>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              4 repositories listed
            </span>
          </div>
        </motion.div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              custom={idx}
              variants={fadeInUp}
              className="p-6 rounded-lg border border-white/[0.1] bg-[#0d1117] flex flex-col justify-between hover:border-[#38bdf8]/50 transition-all shadow-md group"
            >
              <div>
                {/* Project File Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs">
                  <div className="flex items-center gap-2">
                    <FiFolder className="text-[#38bdf8]" />
                    <span className="font-bold text-white tracking-wide">{project.title}</span>
                  </div>
                  <span className="text-[0.7rem] text-slate-500 font-mono">0{idx + 1}.spec</span>
                </div>

                {/* Subtitle / Tagline */}
                <div className="text-xs font-semibold text-[#38bdf8] mb-2 font-mono">
                  {project.tagline}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#161b22] border border-white/[0.06] text-[0.7rem] text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Code and Live Demo */}
              <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/[0.1] bg-[#161b22] text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-all text-xs font-medium"
                    >
                      <FiGithub className="text-xs text-[#38bdf8]" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#22d3ee]/40 bg-[#22d3ee]/10 hover:bg-[#22d3ee] text-[#22d3ee] hover:text-[#0a0e14] transition-all text-xs font-semibold"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="text-xs" />
                    </a>
                  )}
                </div>

                <span className="text-[0.7rem] text-emerald-400 flex items-center gap-1 font-mono">
                  <FiCheck className="text-xs" /> Ready
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
