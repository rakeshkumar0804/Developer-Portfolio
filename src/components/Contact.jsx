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
              className="border border-slate-800/80 rounded-xl bg-[#0B101B]/40 p-5 flex flex-col justify-between min-h-[300px] relative overflow-hidden backdrop-blur-sm shadow-md group cursor-pointer select-none hover:border-cyan-500/50 transition-all"
            >
              {/* Top Status Tag */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 font-bold tracking-widest text-[11px] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  NYX • PURR.SYS
                </span>
                <span className="text-slate-400 text-[10px]">
                  {isPurring ? 'STATUS: PURRING ♥' : 'STATUS: NOMINAL'}
                </span>
              </div>

              {/* Center: Full Glowing Cyber-Cat Mascot Vector Canvas */}
              <div className="relative w-full flex items-center justify-center select-none overflow-visible py-2 my-auto">
                <motion.div
                  animate={{
                    y: isPurring ? [-3, 3, -3] : [0, -6, 0],
                    scale: isPurring ? 1.06 : 1,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isPurring ? 0.3 : 3,
                    ease: 'easeInOut',
                  }}
                  className="relative flex flex-col items-center"
                >
                  <svg
                    viewBox="0 0 200 240"
                    className="w-40 h-48 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)] group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.7)] group-hover:scale-105 transition-all duration-300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Pointed Ears */}
                    <path
                      d="M 60 70 L 45 28 L 82 48"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 140 70 L 155 28 L 118 48"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Rounded Head Outline */}
                    <ellipse cx="100" cy="80" rx="46" ry="38" stroke="#38bdf8" strokeWidth="2.5" fill="#070b14" />

                    {/* Large Round Outer Eyes */}
                    <circle cx="82" cy="76" r="14" stroke="#38bdf8" strokeWidth="2.2" fill="#0b1726" />
                    <circle cx="118" cy="76" r="14" stroke="#38bdf8" strokeWidth="2.2" fill="#0b1726" />

                    {/* Eye Pupils */}
                    <circle cx="82" cy="76" r="5" fill="#38bdf8" className="animate-pulse" />
                    <circle cx="118" cy="76" r="5" fill="#38bdf8" className="animate-pulse" />

                    {/* Nose & Mouth / Muzzle */}
                    <path d="M 97 88 L 103 88 L 100 92 Z" fill="#38bdf8" />
                    <path
                      d="M 94 95 Q 100 99 100 93 Q 100 99 106 95"
                      stroke="#38bdf8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Whiskers */}
                    <line x1="52" y1="84" x2="28" y2="82" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="52" y1="92" x2="30" y2="95" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="148" y1="84" x2="172" y2="82" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="148" y1="92" x2="170" y2="95" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />

                    {/* Sitting Oval Body */}
                    <ellipse cx="100" cy="160" rx="48" ry="46" stroke="#38bdf8" strokeWidth="2.5" fill="#070b14" />

                    {/* Front Paws */}
                    <ellipse cx="86" cy="204" rx="11" ry="6" stroke="#38bdf8" strokeWidth="2" fill="#070b14" />
                    <ellipse cx="114" cy="204" rx="11" ry="6" stroke="#38bdf8" strokeWidth="2" fill="#070b14" />

                    {/* Curled Upright Tail */}
                    <path
                      d="M 144 175 C 168 185 180 150 162 125 C 158 120 152 122 153 128 C 156 142 150 165 138 168"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Purr Floating Hearts Particle */}
                  {isPurring && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -18 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-5 flex items-center gap-1 text-cyan-300 text-xs font-mono"
                    >
                      <FiHeart className="text-rose-400 fill-rose-400 text-xs animate-bounce" />
                      <span className="text-[10px] font-bold tracking-wider">PURR! ({petCount})</span>
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
