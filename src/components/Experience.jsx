import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCheck, FiMapPin, FiCalendar } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.08]">
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
            // Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Work History & Education
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Professional software development internship experience building production internal tools and formal university computer science education.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Internship Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="premium-card p-7 sm:p-8 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-[#38bdf8] font-semibold text-xs font-mono">
                  <FiBriefcase />
                  <span>INTERNSHIP</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <FiCalendar className="text-xs" />
                  <span>{personalInfo.internship.period}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-sans">
                {personalInfo.internship.role}
              </h3>
              <div className="text-sm font-semibold text-[#38bdf8] mt-1 mb-3">
                {personalInfo.internship.company} · <span className="text-slate-400 font-normal">{personalInfo.internship.type}</span>
              </div>

              <div className="space-y-2 mb-6">
                {personalInfo.internship.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans">
                    <FiCheck className="text-[#38bdf8] text-sm mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5 font-mono text-xs">
              {['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'REST APIs'].map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-[#090a0f] border border-white/[0.06] text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="premium-card p-7 sm:p-8 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs font-mono">
                  <FiAward />
                  <span>UNIVERSITY DEGREE</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <FiCalendar className="text-xs" />
                  <span>2022 – 2026</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-sans">
                {personalInfo.education.degree}
              </h3>
              <div className="text-sm font-semibold text-indigo-400 mt-1 mb-3">
                {personalInfo.education.institution} · <span className="text-slate-400 font-normal">Graduated: {personalInfo.education.graduation}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                Completed comprehensive coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Object-Oriented Programming (OOP).
              </p>

              <div className="p-3 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between text-xs font-mono text-slate-300 mb-4">
                <span>Competitive Coding:</span>
                <span className="text-[#38bdf8] font-bold">165+ LeetCode Solved</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Location: Vadodara, Gujarat</span>
              <span className="text-emerald-400">Verified Degree</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
