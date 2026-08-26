import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiMapPin, FiCode, FiLayers } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-16 relative border-t border-white/[0.08] font-mono">
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
            <span>cat about.txt</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            A little about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-8 p-6 rounded-lg border border-white/[0.1] bg-[#0d1117] text-slate-300 text-xs sm:text-sm leading-relaxed font-sans shadow-md"
          >
            <p className="mb-4">
              I'm a B.Tech Computer Science graduate (2026) from Parul University, based in Gurugram, India. I specialize in building full-stack web applications using React, Node.js, Express, and MongoDB/PostgreSQL. During my internship at Codetech IT Solutions, I built an internal Employee Management System with JWT authentication, role-based access control (RBAC), and RESTful CRUD endpoints.
            </p>
            <p className="text-slate-400 text-xs font-mono">
              // Core focus: clean APIs, scalable backends, role-based workflows, and dependable frontend state.
            </p>
          </motion.div>

          {/* Stats & Metadata Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-4 space-y-3"
          >
            <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-sm shrink-0">
                <FiLayers />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-mono">6+ Projects Shipped</div>
                <div className="text-[0.7rem] text-slate-400 font-sans">Full-Stack Web Applications</div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm shrink-0">
                <FiCode />
              </div>
              <div>
                <div className="text-sm font-bold text-emerald-400 font-mono">165+ LeetCode Solved</div>
                <div className="text-[0.7rem] text-slate-400 font-sans">Data Structures & Algorithms</div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-200 font-mono">Gurugram, India</div>
                <div className="text-[0.7rem] text-slate-400 font-sans">Location (Open to Relocation)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
