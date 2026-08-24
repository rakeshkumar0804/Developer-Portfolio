import React from 'react';
import { motion } from 'framer-motion';
import { skillsMatrix } from '../data/portfolioData';

export default function SkillsMatrix() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="subsystems" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
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
            <span>05 / SUBSYSTEMS_CAPABILITY_MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            Subsystems Capability Matrix
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            Categorized technical capabilities across languages, frontend frameworks, backend runtimes, databases, and core CS fundamentals.
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
              className="blueprint-card p-6 rounded-xs flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-white/[0.05] font-mono text-xs">
                  <span className="text-slate-200 font-semibold font-sans text-sm">
                    {matrix.category}
                  </span>
                  <span className="text-[0.65rem] text-[#fbbf24] opacity-80">
                    {matrix.code}
                  </span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {matrix.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2 py-1 rounded-xs bg-[#030712] border border-white/[0.06] text-xs font-mono text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2.5 border-t border-white/[0.04] flex items-center justify-between font-mono text-[0.6rem] text-slate-500">
                <span>{matrix.items.length} MODULES</span>
                <span className="text-[#38bdf8]">COMPILED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
