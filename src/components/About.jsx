import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCode, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
            Background & Engineering Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
          >
            {personalInfo.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Right Column: 4 Clean Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5"
          >
            <div className="card p-4 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] text-base shrink-0 mt-0.5">
                <FiAward />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">B.Tech CSE Graduate</h4>
                <p className="text-xs text-slate-400 mt-0.5">Parul University (Class of 2026)</p>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-base shrink-0 mt-0.5">
                <FiBriefcase />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Software Development Intern</h4>
                <p className="text-xs text-slate-400 mt-0.5">Codetech IT Solutions (MERN & RBAC)</p>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base shrink-0 mt-0.5">
                <FiCode />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Full-Stack MERN Stack</h4>
                <p className="text-xs text-slate-400 mt-0.5">React, Node.js, Express, MongoDB, REST APIs</p>
              </div>
            </div>

            <div className="card p-4 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex items-start gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-base shrink-0 mt-0.5">
                <FiCheckCircle />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Problem Solving</h4>
                <p className="text-xs text-slate-400 mt-0.5">165+ LeetCode DSA Problems Solved</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
