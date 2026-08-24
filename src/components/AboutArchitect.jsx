import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiAward, FiBriefcase, FiCheck, FiTerminal, FiLayers } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function AboutArchitect() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="architect" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#ffb23f] bg-[#ffb23f]/10 border border-[#ffb23f]/30 mb-3">
            <span>05 // THE_ARCHITECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Operator Profile <span className="text-[#38cfff]">& Service History</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            Technical profile, core specializations, production internship track record, and academic credentials.
          </p>
        </motion.div>

        {/* Split Layout: Operator Spec vs Service History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Operator Spec */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 hud-panel p-7 sm:p-8 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 relative"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Panel Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#50aaff]/15 font-mono text-xs">
              <span className="text-[#38cfff] font-bold flex items-center gap-2">
                <FiTerminal /> OPERATOR_SPECIFICATION
              </span>
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>

            {/* Spec Matrix Table */}
            <div className="space-y-3.5 font-mono text-xs mb-8">
              <div className="grid grid-cols-3 gap-2 pb-2.5 border-b border-[#50aaff]/10">
                <span className="text-[#8aa4bf]">DESIGNATION</span>
                <span className="col-span-2 text-[#e6f1ff] font-semibold">{personalInfo.designation}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2.5 border-b border-[#50aaff]/10">
                <span className="text-[#8aa4bf]">BASE_STATION</span>
                <span className="col-span-2 text-[#e6f1ff] flex items-center gap-1.5">
                  <FiMapPin className="text-[#38cfff]" /> {personalInfo.location}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2.5 border-b border-[#50aaff]/10">
                <span className="text-[#8aa4bf]">EDUCATION</span>
                <span className="col-span-2 text-[#e6f1ff]">{personalInfo.education.degree}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2.5 border-b border-[#50aaff]/10">
                <span className="text-[#8aa4bf]">GRADUATION</span>
                <span className="col-span-2 text-[#ffb23f] font-bold">{personalInfo.education.graduation}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pb-2.5 border-b border-[#50aaff]/10">
                <span className="text-[#8aa4bf]">CORE_FOCUS</span>
                <span className="col-span-2 text-[#38cfff]">MERN, RBAC, REST APIs, React, Backend Systems</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <span className="text-[#8aa4bf]">AVAILABILITY</span>
                <span className="col-span-2 text-emerald-400 font-semibold">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="pt-6 border-t border-[#50aaff]/15">
              <h4 className="text-xs font-mono font-bold uppercase text-[#ffb23f] tracking-wider mb-2.5">
                // SYSTEM_NARRATIVE
              </h4>
              <p className="text-sm leading-relaxed text-[#8aa4bf] font-sans">
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
            className="lg:col-span-6 space-y-6"
          >
            {/* Internship Entry */}
            <div className="hud-panel p-7 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 relative">
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#50aaff]/15 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#ffb23f] font-bold">
                  <FiBriefcase /> PRODUCTION INTERNSHIP
                </div>
                <span className="text-[#38cfff] font-bold">{personalInfo.internship.period}</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-[#e6f1ff]">
                {personalInfo.internship.role}
              </h3>
              <h4 className="text-xs font-mono font-semibold text-[#5fa8ff] mt-0.5 mb-4">
                {personalInfo.internship.company} · {personalInfo.internship.type}
              </h4>

              <div className="space-y-2 mb-4">
                {personalInfo.internship.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 text-xs text-[#8aa4bf] font-sans">
                    <FiCheck className="text-[#38cfff] text-sm mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#50aaff]/10 flex flex-wrap gap-1.5 font-mono text-[0.65rem] text-[#8aa4bf]">
                {['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'REST APIs'].map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-0.5 rounded-sm bg-[#020712] border border-[#50aaff]/20 text-[#38cfff]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* University Education Entry */}
            <div className="hud-panel p-7 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 relative">
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#50aaff]/15 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#5fa8ff] font-bold">
                  <FiAward /> UNIVERSITY EDUCATION
                </div>
                <span className="text-[#ffb23f] font-bold">2022 – 2026</span>
              </div>

              <h3 className="text-xl font-bold font-sans text-[#e6f1ff]">
                {personalInfo.education.degree}
              </h3>
              <h4 className="text-xs font-mono font-semibold text-[#5fa8ff] mt-0.5 mb-3">
                {personalInfo.education.institution} · Graduated: {personalInfo.education.graduation}
              </h4>

              <p className="text-xs text-[#8aa4bf] font-sans leading-relaxed mb-4">
                Coursework in {personalInfo.education.coursework}. Active competitive problem solver with 165+ LeetCode problems solved.
              </p>

              <div className="pt-3 border-t border-[#50aaff]/10 flex items-center justify-between font-mono text-[0.68rem] text-[#8aa4bf]">
                <span>DEGREE_VERIFIED</span>
                <span className="text-[#38cfff] font-bold">165+ LEETCODE SOLVED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
