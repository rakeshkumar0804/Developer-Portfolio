import React from 'react';
import { motion } from 'framer-motion';
import { operatingPrinciples } from '../data/portfolioData';

export default function OperatingPrinciples() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="principles" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
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
            <span>01 / OPERATING_PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            Operating Principles
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            The core engineering standards guiding how I structure data pipelines, implement secure APIs, and ship production applications.
          </p>
        </motion.div>

        {/* 2x2 Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operatingPrinciples.map((principle, idx) => (
            <motion.div
              key={principle.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.08 }}
              className="blueprint-card p-7 sm:p-8 rounded-xs relative group"
            >
              <div className="micro-amber-tl" />

              {/* Number & Highlight */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.05] font-mono text-xs">
                <span className="text-2xl font-bold text-[#fbbf24]">
                  {principle.num}
                </span>
                <span className="text-[0.65rem] text-[#38bdf8] px-2 py-0.5 rounded-xs bg-[#38bdf8]/10">
                  {principle.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#f8fafc] mb-2.5 group-hover:text-[#38bdf8] transition-colors">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400 font-sans">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
