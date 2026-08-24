import React from 'react';
import { motion } from 'framer-motion';
import { skillsMatrix } from '../data/portfolioData';
import { FiCpu } from 'react-icons/fi';

export default function SkillsMatrix() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="subsystems" className="py-20 relative border-t border-sky-500/15">
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
            <span>05 / SUBSYSTEMS_CAPABILITY_MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Subsystems <span className="text-[#38bdf8]">& Capability Matrix</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            Modular breakdown of language runtimes, frontend interfaces, backend frameworks, database persistence, and developer tooling.
          </p>
        </motion.div>

        {/* 6 Subsystem Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsMatrix.map((matrix, mIdx) => (
            <motion.div
              key={matrix.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: mIdx * 0.06 }}
              className="blueprint-panel p-5 sm:p-6 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex flex-col justify-between group hover:border-sky-500/50 transition-all duration-150"
            >
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              <div>
                {/* Header with Subsystem Code */}
                <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sky-500/15 font-mono text-xs">
                  <span className="text-[#f8fafc] font-bold font-sans text-sm flex items-center gap-2">
                    <FiCpu className="text-[#38bdf8]" />
                    {matrix.category}
                  </span>
                  <span className="text-[0.65rem] font-mono text-[#fbbf24] px-1.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/20 font-semibold">
                    {matrix.code}
                  </span>
                </div>

                {/* Subsystem Skill Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {matrix.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2 py-1 rounded-xs border border-sky-500/15 bg-[#030712] text-xs font-mono text-[#f8fafc] group-hover:border-sky-500/30 transition-colors flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#38bdf8]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2.5 border-t border-sky-500/10 flex items-center justify-between font-mono text-[0.62rem] text-[#64748b]">
                <span>TOTAL: {matrix.items.length} MODULES</span>
                <span className="text-[#38bdf8] font-bold">STATUS: COMPILED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
