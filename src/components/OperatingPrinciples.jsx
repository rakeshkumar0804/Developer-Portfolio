import React from 'react';
import { motion } from 'framer-motion';
import { operatingPrinciples } from '../data/portfolioData';
import { FiCode, FiShield, FiCpu, FiCheckSquare } from 'react-icons/fi';

const iconList = [FiCode, FiShield, FiCpu, FiCheckSquare];

export default function OperatingPrinciples() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="principles" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#ffb23f] bg-[#ffb23f]/10 border border-[#ffb23f]/30 mb-3">
            <span>02 // CORE_DOCTRINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Operating <span className="text-[#38cfff]">Principles</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            The foundational engineering rules guiding how I design data models, implement APIs, structure component hierarchies, and ship reliable software.
          </p>
        </motion.div>

        {/* 2x2 Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {operatingPrinciples.map((principle, idx) => {
            const Icon = iconList[idx] || FiCode;
            return (
              <motion.div
                key={principle.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="hud-panel p-8 rounded-sm relative border border-[#50aaff]/25 bg-[#06101f]/80 group hover:border-[#38cfff]/60 hover:shadow-[0_0_25px_rgba(56,207,255,0.15)] transition-all duration-300"
              >
                <div className="hud-corner-amber-tl" />
                <div className="hud-corner-amber-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Top Meta Line */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#50aaff]/15 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#ffb23f]">
                      {principle.num}
                    </span>
                    <span className="text-[0.68rem] text-[#38cfff] px-2 py-0.5 rounded bg-[#38cfff]/10 border border-[#38cfff]/20">
                      {principle.highlight}
                    </span>
                  </div>
                  <Icon className="text-xl text-[#5fa8ff] group-hover:text-[#38cfff] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#e6f1ff] mb-3.5 group-hover:text-[#38cfff] transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#8aa4bf] font-sans">
                  {principle.description}
                </p>

                {/* Blueprint Sub-rail */}
                <div className="mt-6 pt-4 border-t border-[#50aaff]/10 flex items-center justify-between font-mono text-[0.65rem] text-[#536d88]">
                  <span>DOCTRINE_INDEX_{principle.num}</span>
                  <span className="text-[#38cfff]">SYS_VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
