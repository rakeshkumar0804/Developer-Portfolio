import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="experience" className="py-16 relative border-t border-white/[0.08] font-mono">
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
            <span>cat timeline.log</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience & Education
          </h2>
        </motion.div>

        {/* Timeline Cards Container */}
        <div className="space-y-6">
          {/* Internship Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            custom={1}
            variants={fadeInUp}
            className="p-6 rounded-lg border border-white/[0.1] bg-[#0d1117] shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
              <div>
                <span className="text-xs text-[#38bdf8] font-bold">[EXP-01] Professional Internship</span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {personalInfo.internship.role}
                </h3>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {personalInfo.internship.company} · <span className="text-emerald-400 font-normal">Remote</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <FiCalendar className="text-[#38bdf8]" />
                <span>{personalInfo.internship.period}</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
              {personalInfo.internship.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#38bdf8] font-mono shrink-0 mt-0.5">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            custom={2}
            variants={fadeInUp}
            className="p-6 rounded-lg border border-white/[0.1] bg-[#0d1117] shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-white/[0.06]">
              <div>
                <span className="text-xs text-emerald-400 font-bold">[EDU-01] Formal Education</span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {personalInfo.education.degree}
                </h3>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {personalInfo.education.institution} · <span className="text-emerald-400 font-normal">Graduated 2026</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <FiCalendar className="text-emerald-400" />
                <span>{personalInfo.education.period}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Graduated with coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Computer Networks, and Operating Systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
