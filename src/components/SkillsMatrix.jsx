import React from 'react';
import { motion } from 'framer-motion';
import { skillsMatrix } from '../data/portfolioData';
import { FiCpu, FiCheck } from 'react-icons/fi';

export default function SkillsMatrix() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="subsystems" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#38cfff] bg-[#38cfff]/10 border border-[#38cfff]/30 mb-3">
            <span>06 // SUBSYSTEMS_MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Capability <span className="text-[#38cfff]">& Technical Subsystems</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            Modular breakdown of language runtimes, frontend interfaces, backend frameworks, database persistence, and developer tooling.
          </p>
        </motion.div>

        {/* 6 Subsystem Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsMatrix.map((matrix, mIdx) => (
            <motion.div
              key={matrix.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: mIdx * 0.08 }}
              className="hud-panel p-6 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex flex-col justify-between group hover:border-[#38cfff]/60 hover:shadow-[0_0_20px_rgba(56,207,255,0.12)] transition-all duration-200"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                {/* Header with Subsystem Code */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#50aaff]/15 font-mono text-xs">
                  <span className="text-[#e6f1ff] font-bold font-sans text-sm flex items-center gap-2">
                    <FiCpu className="text-[#38cfff]" />
                    {matrix.category}
                  </span>
                  <span className="text-[0.65rem] font-mono text-[#ffb23f] px-2 py-0.5 rounded bg-[#ffb23f]/10 border border-[#ffb23f]/20 font-semibold">
                    {matrix.code}
                  </span>
                </div>

                {/* Subsystem Skill Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {matrix.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-sm border border-[#50aaff]/20 bg-[#020712] text-xs font-mono text-[#e6f1ff] group-hover:border-[#38cfff]/40 transition-colors flex items-center gap-1.5"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#38cfff]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Telemetry Footer */}
              <div className="pt-3 border-t border-[#50aaff]/10 flex items-center justify-between font-mono text-[0.65rem] text-[#536d88]">
                <span>TOTAL: {matrix.items.length} MODULES</span>
                <span className="text-[#38cfff] font-bold">STATUS: COMPILED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
