import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiAward, FiCheck } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function AboutArchitect() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="architect" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-mono text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-3 tracking-widest uppercase">
            <span>04 / THE_ARCHITECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            The Architect
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            Technical profile, production internship accomplishments, and formal computer science engineering education.
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
            className="lg:col-span-6 blueprint-card p-7 sm:p-8 rounded-xs"
          >
            <div className="micro-corner-tl" />

            <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.05] font-mono text-xs text-slate-400">
              <span>OPERATOR SPECIFICATION</span>
              <span className="text-emerald-400 font-medium">ACTIVE</span>
            </div>

            {/* Spec Matrix Table */}
            <div className="space-y-3 font-mono text-xs mb-6">
              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-500">Designation</span>
                <span className="col-span-2 text-slate-200 font-medium">{personalInfo.role}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-500">Base</span>
                <span className="col-span-2 text-slate-200 flex items-center gap-1.5">
                  <FiMapPin className="text-[#38bdf8]" /> {personalInfo.location}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-500">Education</span>
                <span className="col-span-2 text-slate-200">{personalInfo.education.degree}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-500">Graduation</span>
                <span className="col-span-2 text-[#fbbf24] font-medium">{personalInfo.education.graduation}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-white/[0.04]">
                <span className="text-slate-500">Focus</span>
                <span className="col-span-2 text-[#38bdf8]">MERN, RBAC, REST APIs, React, backend systems</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Status</span>
                <span className="col-span-2 text-emerald-400">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="pt-4 border-t border-white/[0.05]">
              <p className="text-sm leading-relaxed text-slate-400 font-sans">
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
            <div className="blueprint-card p-6 sm:p-7 rounded-xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.05] font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2 text-[#fbbf24]">
                  <FiBriefcase /> PRODUCTION INTERNSHIP
                </div>
                <span>{personalInfo.internship.period}</span>
              </div>

              <h3 className="text-lg font-bold text-[#f8fafc]">
                {personalInfo.internship.role}
              </h3>
              <h4 className="text-xs font-mono text-[#38bdf8] mt-0.5 mb-3">
                {personalInfo.internship.company} · {personalInfo.internship.type}
              </h4>

              <div className="space-y-1.5 mb-3">
                {personalInfo.internship.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                    <FiCheck className="text-[#38bdf8] text-xs mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 border-t border-white/[0.04] flex flex-wrap gap-1.5 font-mono text-[0.62rem] text-slate-400">
                {['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'REST APIs'].map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-xs bg-[#030712] border border-white/[0.06] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* University Education Entry */}
            <div className="blueprint-card p-6 sm:p-7 rounded-xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.05] font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2 text-[#60a5fa]">
                  <FiAward /> UNIVERSITY EDUCATION
                </div>
                <span className="text-[#fbbf24]">2022 – 2026</span>
              </div>

              <h3 className="text-lg font-bold text-[#f8fafc]">
                {personalInfo.education.degree}
              </h3>
              <h4 className="text-xs font-mono text-slate-400 mt-0.5 mb-2">
                {personalInfo.education.institution} · Graduated: {personalInfo.education.graduation}
              </h4>

              <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                Coursework: {personalInfo.education.coursework}. Active competitive problem solver with 165+ LeetCode problems solved.
              </p>

              <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between font-mono text-[0.62rem] text-slate-400">
                <span>DEGREE VERIFIED</span>
                <span className="text-[#38bdf8]">165+ LEETCODE SOLVED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
