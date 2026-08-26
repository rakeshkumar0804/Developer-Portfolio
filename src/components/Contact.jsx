import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiCheck, FiHeart } from 'react-icons/fi';

export default function Contact() {
  const [petCount, setPetCount] = useState(0);
  const [isPurring, setIsPurring] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const handlePet = () => {
    setPetCount((p) => p + 1);
    setIsPurring(true);
    setTimeout(() => setIsPurring(false), 1500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/40 font-mono scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= 1. Section Header ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12 pt-4"
        >
          <div className="flex items-center">
            <span className="text-[#f59e0b] font-mono font-bold text-2xl drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              05
            </span>
            <span className="text-[#38bdf8] font-mono text-2xl mx-2">/</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
              ESTABLISH COMMS
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
            Channel open. Awaiting transmission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ================= 2. Left Column — Direct Call-To-Action ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Signal Tag */}
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.25em] uppercase mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>SIGNAL ACQUIRED</span>
              </div>

              {/* Headline Typography */}
              <h3 className="font-sans mb-6">
                <span className="text-slate-100 font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block">
                  Let's build
                </span>
                <span className="text-[#38bdf8] font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block drop-shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                  something
                </span>
                <span className="text-slate-100 font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block">
                  ambitious.
                </span>
              </h3>

              {/* Pitch Body */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans max-w-xl mb-6">
                Recruiters, founders, and engineering teams — if you need someone who can architect, build, and ship production-grade systems end-to-end, the channel is open.
              </p>

              {/* Transmission Action Button */}
              <div>
                <a
                  href="mailto:rakeshchauhan6651@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 mt-2 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-500/60 rounded bg-cyan-950/20 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all uppercase cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                >
                  <span>INITIATE TRANSMISSION</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= 3. Right Column — 2x2 Comms Matrix & Mascot ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            custom={1}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* 2x2 Comms Matrix Grid */}
            <div className="border border-slate-800/80 rounded-xl bg-[#0B101B]/50 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 p-5 backdrop-blur-sm shadow-xl">
              {/* Row 1 / Col 1: Email */}
              <div className="p-3 sm:p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">
                    EMAIL
                  </div>
                  <a
                    href="mailto:rakeshchauhan6651@gmail.com"
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors break-all"
                  >
                    rakeshchauhan6651@gmail.com
                  </a>
                </div>
              </div>

              {/* Row 1 / Col 2: GitHub */}
              <div className="p-3 sm:p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">
                    GITHUB
                  </div>
                  <a
                    href="https://github.com/rakeshkumar0804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    github.com/rakeshkumar0804
                  </a>
                </div>
              </div>

              {/* Row 2 / Col 1: LinkedIn */}
              <div className="p-3 sm:p-4 flex flex-col justify-between sm:border-t sm:border-slate-800/80">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">
                    LINKEDIN
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rakesh-kumar-520754246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/rakesh-kumar
                  </a>
                </div>
              </div>

              {/* Row 2 / Col 2: Phone / WhatsApp */}
              <div className="p-3 sm:p-4 flex flex-col justify-between sm:border-t sm:border-slate-800/80">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">
                    PHONE / WHATSAPP
                  </div>
                  <a
                    href="tel:+919306573459"
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    +91 93065 73459
                  </a>
                </div>
              </div>
            </div>

            {/* ================= 4. Interactive Cyber Mascot Widget ================= */}
            <div
              onClick={handlePet}
              className="border border-slate-800/80 rounded-xl bg-[#0B101B]/40 p-5 flex flex-col justify-between h-48 relative overflow-hidden backdrop-blur-sm shadow-md group cursor-pointer select-none hover:border-cyan-500/40 transition-all"
            >
              {/* Top Status Tag */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold tracking-widest text-[11px] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  NYX • PURR.SYS
                </span>
                <span className="text-slate-500 text-[10px]">
                  {isPurring ? 'STATUS: PURRING ♥' : 'STATUS: NOMINAL'}
                </span>
              </div>

              {/* Center: Glowing Cyan Cyber Cat Wireframe Mascot */}
              <div className="flex items-center justify-center relative my-auto">
                <motion.div
                  animate={{
                    y: isPurring ? [-2, 2, -2] : [0, -3, 0],
                    scale: isPurring ? 1.05 : 1,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isPurring ? 0.3 : 2.5,
                    ease: 'easeInOut',
                  }}
                  className="relative flex flex-col items-center"
                >
                  {/* Cyber Cat SVG Illustration */}
                  <svg
                    width="100"
                    height="64"
                    viewBox="0 0 100 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all group-hover:scale-105"
                  >
                    {/* Ears */}
                    <path
                      d="M28 28 L18 10 L38 20 Z"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                      fill="#0d1f2d"
                    />
                    <path
                      d="M72 28 L82 10 L62 20 Z"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                      fill="#0d1f2d"
                    />

                    {/* Head Outline */}
                    <polygon
                      points="25,24 75,24 85,42 75,56 25,56 15,42"
                      stroke="#22d3ee"
                      strokeWidth="1.5"
                      fill="#09131e"
                    />

                    {/* Visor / Eye Trackers */}
                    <ellipse cx="36" cy="38" rx="6" ry="7" fill="#082b38" stroke="#38bdf8" strokeWidth="1" />
                    <ellipse cx="64" cy="38" rx="6" ry="7" fill="#082b38" stroke="#38bdf8" strokeWidth="1" />

                    {/* Pupils (Glowing Cyan) */}
                    <circle cx="36" cy="38" r="2.5" fill="#22d3ee" className="animate-pulse" />
                    <circle cx="64" cy="38" r="2.5" fill="#22d3ee" className="animate-pulse" />

                    {/* Nose & Whiskers */}
                    <polygon points="50,46 47,43 53,43" fill="#38bdf8" />
                    <line x1="20" y1="44" x2="3" y2="40" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="20" y1="48" x2="2" y2="48" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="80" y1="44" x2="97" y2="40" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />
                    <line x1="80" y1="48" x2="98" y2="48" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.7" />

                    {/* Mouth Line */}
                    <path d="M47 48 Q50 51 53 48" stroke="#38bdf8" strokeWidth="1" fill="none" />
                  </svg>

                  {/* Purr Hearts Animation */}
                  {isPurring && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -15 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-4 flex items-center gap-1 text-cyan-300 text-xs font-mono"
                    >
                      <FiHeart className="text-rose-400 fill-rose-400 text-xs animate-bounce" />
                      <span className="text-[10px] font-bold">PURR! ({petCount})</span>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Bottom Hint */}
              <div className="text-slate-500 text-[10px] font-mono tracking-widest text-center pt-2 border-t border-slate-800/60">
                TAP TO PET • DRAG TO PLAY • HOLD / RIGHT-CLICK
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
