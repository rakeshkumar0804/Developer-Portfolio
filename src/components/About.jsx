import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from './InteractiveTerminal';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="operations" className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 py-16 md:py-24 relative font-mono scroll-mt-20">
      <div id="philosophy" className="scroll-mt-20" />
      <div id="about" className="scroll-mt-20" />
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Header & Manifesto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          {/* Header Tag */}
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">
            <span>—</span>
            <span>OPERATING PHILOSOPHY</span>
          </div>

          {/* Statement Headline with Refined Medium Weight */}
          <div className="space-y-1.5 max-w-4xl">
            <h2 className="text-slate-200 font-medium text-2xl md:text-3xl leading-snug tracking-tight">
              Every system begins with clean architecture.
            </h2>
            <h2 className="text-slate-200 font-medium text-2xl md:text-3xl leading-snug tracking-tight">
              Every API demands deterministic security.
            </h2>
            <h2 className="text-[#38bdf8] font-medium text-2xl md:text-3xl leading-snug tracking-tight drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]">
              Every infrastructure becomes a living network.
            </h2>
          </div>
        </motion.div>

        {/* Interactive Grounded Terminal Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={fadeInUp}
        >
          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
}
