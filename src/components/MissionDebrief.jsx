import React from 'react';
import { motion } from 'framer-motion';
import { openEmailClient } from '../utils/emailHandler';

const reviewItems = [
  {
    id: '01',
    label: 'OPERATIONS',
    href: '#about',
  },
  {
    id: '02',
    label: 'GUIDING PRINCIPLES',
    href: '#principles',
  },
  {
    id: '03',
    label: 'DEPLOYED SYSTEMS',
    href: '#projects',
  },
  {
    id: '04',
    label: 'OPEN SIGNALS',
    href: '#opensource',
  },
  {
    id: '05',
    label: 'THE ARCHITECT',
    href: '#architect',
  },
  {
    id: '06',
    label: 'ESTABLISH COMMS',
    href: '#contact',
  },
];

export default function MissionDebrief() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="debrief" className="py-20 relative border-t border-slate-800/40 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= 1. Section Header & Sync Progress Bar ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800/70"
        >
          <div>
            <div className="text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase">
              — MISSION DEBRIEF
            </div>
            <h2 className="text-slate-100 font-sans font-semibold text-3xl md:text-4xl tracking-tight mt-2">
              System reviewed.
            </h2>
          </div>

          {/* Right-Side Sync Progress Indicator */}
          <div className="flex flex-col sm:items-end">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400">SYNC</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-bold">100%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full w-48 md:w-64 mt-2 overflow-hidden">
              <div className="w-full h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            </div>
          </div>
        </motion.div>

        {/* ================= 2. Section Review Matrix (2x3 Grid) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="border border-slate-800/80 rounded-xl bg-[#0B101B]/50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 my-8 backdrop-blur-sm shadow-xl overflow-hidden"
        >
          {reviewItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              className={`p-5 flex items-center justify-between hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-all group ${
                idx >= 3 ? 'sm:border-t sm:border-slate-800/80' : ''
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-slate-500 text-xs font-bold">{item.id}:</span>
                <span className="text-slate-200 text-xs font-bold tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
                  {item.label}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-semibold tracking-wider">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                <span>REVIEWED</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* ================= 3. Final Decision Actions ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          custom={1}
        >
          <div className="text-slate-500 font-mono text-xs tracking-widest uppercase mb-4">
            // ONE DECISION REMAINS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option 1: Primary Action Card */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => openEmailClient(e)}
              className="border border-cyan-500/50 bg-cyan-950/20 rounded-lg p-5 flex items-center justify-between hover:border-cyan-400 hover:bg-cyan-950/30 transition-all cursor-pointer group shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            >
              <div>
                <div className="text-cyan-400 font-mono font-bold text-sm tracking-wider group-hover:text-cyan-300 transition-colors">
                  INITIATE CONTACT
                </div>
                <div className="text-slate-400 text-xs font-mono mt-0.5">
                  OPEN THE CHANNEL
                </div>
              </div>

              <span className="text-cyan-400 font-bold text-lg group-hover:translate-x-1.5 transition-transform">
                →
              </span>
            </a>

            {/* Option 2: Secondary Rewind Action */}
            <button
              onClick={scrollToTop}
              className="border border-slate-800 rounded-lg p-5 flex items-center justify-between hover:border-slate-600 hover:bg-[#0B101B]/60 transition-all cursor-pointer group bg-[#0B101B]/40 text-left"
            >
              <div>
                <div className="text-slate-200 font-mono font-bold text-sm tracking-wider group-hover:text-white transition-colors">
                  REMAIN OBSERVER
                </div>
                <div className="text-slate-500 text-xs font-mono mt-0.5">
                  REWIND TO THE TOP
                </div>
              </div>

              <span className="text-slate-400 font-bold text-lg group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
