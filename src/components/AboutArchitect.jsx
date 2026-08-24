import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiAward, FiBriefcase, FiCheck, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function AboutArchitect() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="architect" className="py-20 relative border-t border-sky-500/15">
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
            <span>04 / THE_ARCHITECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Operator Spec <span className="text-[#38bdf8]">& Service History</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            Technical operator profile, production internship achievements, and verified computer science engineering background.
          </p>
        </motion.div>

        {/* Split Layout: Operator Spec vs Service History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Panel: Operator Spec */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 blueprint-panel p-6 sm:p-8 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 relative"
          >
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            {/* Panel Header */}
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-sky-500/15 font-mono text-xs">
              <span className="text-[#38bdf8] font-bold flex items-center gap-2">
                <FiTerminal /> OPERATOR_SPECIFICATION
              </span>
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded-xs bg-emerald-500/10 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            {/* Spec Matrix Table */}
            <div className="space-y-3 font-mono text-xs mb-7">
              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sky-500/10">
                <span className="text-[#94a3b8]">DESIGNATION</span>
                <span className="col-span-2 text-[#f8fafc] font-semibold">{personalInfo.role}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sky-500/10">
                <span className="text-[#94a3b8]">BASE_STATION</span>
                <span className="col-span-2 text-[#f8fafc] flex items-center gap-1.5">
                  <FiMapPin className="text-[#38bdf8]" /> {personalInfo.location}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sky-500/10">
                <span className="text-[#94a3b8]">EDUCATION</span>
                <span className="col-span-2 text-[#f8fafc]">{personalInfo.education.degree}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sky-500/10">
                <span className="text-[#94a3b8]">GRADUATION</span>
                <span className="col-span-2 text-[#fbbf24] font-bold">{personalInfo.education.graduation}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-sky-500/10">
                <span className="text-[#94a3b8]">CORE_FOCUS</span>
                <span className="col-span-2 text-[#38bdf8]">MERN, RBAC, REST APIs, React, backend systems</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#94a3b8]">STATUS</span>
                <span className="col-span-2 text-emerald-400 font-semibold">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="pt-5 border-t border-sky-500/15">
              <h4 className="text-xs font-mono font-bold uppercase text-[#fbbf24] tracking-wider mb-2">
                // SYSTEM_NARRATIVE
              </h4>
              <p className="text-sm leading-relaxed text-[#94a3b8] font-sans">
                Full-Stack Web Developer and MERN Stack Engineer with hands-on experience building role-based systems, secure REST APIs, responsive React interfaces, and database-backed applications. I enjoy turning complex workflows into clean, usable products with strong backend logic and polished frontend experiences.
              </p>
            </div>
          </motion.div>

          {/* Right Panel: Service History Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-5"
          >
            {/* Internship Entry */}
            <div className="blueprint-panel p-6 sm:p-7 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 relative">
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />

              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sky-500/15 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#fbbf24] font-bold">
                  <FiBriefcase /> PRODUCTION INTERNSHIP
                </div>
                <span className="text-[#38bdf8] font-bold">{personalInfo.internship.period}</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-[#f8fafc]">
                {personalInfo.internship.role}
              </h3>
              <h4 className="text-xs font-mono font-semibold text-[#60a5fa] mt-0.5 mb-3.5">
                {personalInfo.internship.company} · {personalInfo.internship.type}
              </h4>

              <div className="space-y-1.5 mb-3.5">
                {personalInfo.internship.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-[#94a3b8] font-sans">
                    <FiCheck className="text-[#38bdf8] text-xs mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-sky-500/10 flex flex-wrap gap-1.5 font-mono text-[0.65rem] text-[#94a3b8]">
                {['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'REST APIs'].map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-xs bg-[#030712] border border-sky-500/20 text-[#38bdf8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* University Education Entry */}
            <div className="blueprint-panel p-6 sm:p-7 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 relative">
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sky-500/15 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#60a5fa] font-bold">
                  <FiAward /> UNIVERSITY EDUCATION
                </div>
                <span className="text-[#fbbf24] font-bold">2022 – 2026</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-[#f8fafc]">
                {personalInfo.education.degree}
              </h3>
              <h4 className="text-xs font-mono font-semibold text-[#60a5fa] mt-0.5 mb-2.5">
                {personalInfo.education.institution} · Graduated: {personalInfo.education.graduation}
              </h4>

              <p className="text-xs text-[#94a3b8] font-sans leading-relaxed mb-3.5">
                Coursework: {personalInfo.education.coursework}. Active competitive problem solver with 165+ LeetCode problems solved.
              </p>

              <div className="pt-2.5 border-t border-sky-500/10 flex items-center justify-between font-mono text-[0.65rem] text-[#94a3b8]">
                <span>DEGREE_VERIFIED</span>
                <span className="text-[#38bdf8] font-bold">165+ LEETCODE SOLVED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
