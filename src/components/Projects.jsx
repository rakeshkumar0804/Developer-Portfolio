import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiLayers, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Featured </span>
            <span className="text-gradient-accent">Software Projects</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Production web applications, full-stack systems, and interactive platforms architected with clean design patterns and modern engineering practices.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full Stack Systems' },
            { id: 'frontend', label: 'Frontend & Data Viz' },
            { id: 'tools', label: 'Developer Tools' },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isDark
                    ? 'bg-slate-900/60 border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border backdrop-blur-xl flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-xl shadow-sm'
                } ${project.featured ? 'md:col-span-2' : ''}`}
              >
                {/* Project Card Header Area */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badges & Live Status */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {project.badge}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            ★ Primary System
                          </span>
                        )}
                      </div>

                      {/* External Action Links */}
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`p-2 rounded-lg border transition-colors ${
                              isDark
                                ? 'border-white/[0.08] bg-slate-800 text-slate-300 hover:text-white hover:border-indigo-400'
                                : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-indigo-600 hover:border-indigo-400'
                            }`}
                            aria-label={`GitHub Repository for ${project.title}`}
                          >
                            <FiGithub className="text-base" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
                            aria-label={`Live Demo for ${project.title}`}
                          >
                            <span>Live Demo</span>
                            <FiExternalLink className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      className={`text-xl sm:text-2xl font-bold font-sans group-hover:text-indigo-400 transition-colors ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400/90 mt-1 mb-4 font-semibold">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    {project.highlights && (
                      <div className="space-y-2 mb-6">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs">
                            <FiCheck className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div
                    className={`pt-5 mt-4 border-t flex items-center gap-2 flex-wrap ${
                      isDark ? 'border-white/[0.08]' : 'border-slate-200'
                    }`}
                  >
                    <span className={`text-[0.68rem] font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Stack:
                    </span>
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                          isDark
                            ? 'bg-slate-950/60 border border-white/[0.06] text-slate-300'
                            : 'bg-slate-100 border border-slate-200 text-slate-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
