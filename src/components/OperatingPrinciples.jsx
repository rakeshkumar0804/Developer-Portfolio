import React from 'react';
import { motion } from 'framer-motion';
import { operatingPrinciples } from '../data/portfolioData';
import { FiCode, FiShield, FiCpu, FiCheckSquare } from 'react-icons/fi';

const iconList = [FiCode, FiShield, FiCpu, FiCheckSquare];

export default function OperatingPrinciples() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="principles" className="py-20 relative border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs text-xs font-mono font-bold tracking-widest uppercase text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/25 mb-3">
            <span>01 / OPERATING_PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Operating <span className="text-[#38bdf8]">Principles</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            The foundational engineering rules guiding how I design data models, implement APIs, structure component hierarchies, and ship reliable software.
          </p>
        </motion.div>

        {/* 2x2 Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operatingPrinciples.map((principle, idx) => {
            const Icon = iconList[idx] || FiCode;
            return (
              <motion.div
                key={principle.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="blueprint-panel p-7 sm:p-8 rounded-xs relative border border-sky-500/20 bg-[#060e1c]/80 group hover:border-sky-500/50 transition-all duration-200"
              >
                <div className="corner-amber-tl" />
                <div className="corner-amber-tr" />
                <div className="corner-bracket-bl" />
                <div className="corner-bracket-br" />

                {/* Top Meta Line */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-sky-500/15 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#fbbf24]">
                      {principle.num}
                    </span>
                    <span className="text-[0.65rem] text-[#38bdf8] px-2 py-0.5 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                      {principle.highlight}
                    </span>
                  </div>
                  <Icon className="text-lg text-sky-400 group-hover:text-[#38bdf8] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-sans text-[#f8fafc] mb-3 group-hover:text-[#38bdf8] transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#94a3b8] font-sans">
                  {principle.description}
                </p>

                {/* Blueprint Sub-rail */}
                <div className="mt-5 pt-3.5 border-t border-sky-500/10 flex items-center justify-between font-mono text-[0.65rem] text-[#64748b]">
                  <span>DOCTRINE_INDEX_{principle.num}</span>
                  <span className="text-[#38bdf8]">SYS_VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
