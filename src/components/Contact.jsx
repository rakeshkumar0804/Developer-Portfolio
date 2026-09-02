import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiCheck, FiTerminal, FiSend } from 'react-icons/fi';
import { openEmailClient } from '../utils/emailHandler';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.06, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rakeshchauhan6651@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 pb-20 relative border-t border-slate-800/40 font-mono scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= 1. Section Header (With Clean Top Spacing) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12 pt-6"
        >
          <div className="flex items-center">
            <span className="text-violet-400 font-mono font-bold text-2xl drop-shadow-[0_0_10px_rgba(167,139,250,0.28)]">
              05
            </span>
            <span className="text-[#38bdf8] font-mono text-2xl mx-2">//</span>
            <h2 className="text-slate-100 font-mono font-bold tracking-wider uppercase text-xl md:text-2xl">
              START A CONVERSATION
            </h2>
          </div>

          <p className="font-mono text-xs md:text-sm text-slate-400 tracking-wider">
            Have a role or a hard engineering problem? I’m reachable.
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
                <span>AVAILABLE FOR SDE ROLES</span>
              </div>

              {/* Headline Typography */}
              <h3 className="font-sans mb-6">
                <span className="text-slate-100 font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block">
                  Let’s build
                </span>
                <span className="text-[#38bdf8] font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block drop-shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                  software that
                </span>
                <span className="text-slate-100 font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight block">
                  holds up.
                </span>
              </h3>

              {/* Pitch Body */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans max-w-xl mb-6">
                Recruiters and engineering teams: if you need someone who can turn a difficult requirement into a tested, working product, let’s talk.
              </p>

              {/* Transmission Action Button */}
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openEmailClient(e)}
                  className="inline-flex items-center gap-2 px-6 py-3 mt-2 text-xs font-mono tracking-widest text-cyan-400 border border-cyan-500/60 rounded bg-cyan-950/20 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all uppercase cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                >
                  <span>EMAIL ME</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ================= 3. Right Column — 2x2 Comms Matrix & Terminal ================= */}
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => openEmailClient(e)}
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors break-all cursor-pointer"
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

              {/* Row 2 / Col 2: Resume / Verified Profile */}
              <div className="p-3 sm:p-4 flex flex-col justify-between sm:border-t sm:border-slate-800/80">
                <div>
                  <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">
                    RESUME / VERIFIED PROFILE
                  </div>
                  <a
                    href="/Rakesh_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>View PDF / Credentials</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= 4. Availability terminal ================= */}
            <div className="border border-slate-800/80 rounded-xl bg-[#0B101B]/50 p-5 flex flex-col justify-between h-56 relative overflow-hidden backdrop-blur-sm shadow-xl">
              {/* Top Header */}
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800/70">
                <span className="text-cyan-400 font-mono text-[11px] tracking-[0.2em] font-semibold flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  TERMINAL • AVAILABILITY.JSON
                </span>
                <span className="text-slate-400 font-mono text-[10px] tracking-widest">
                  STATUS: OPEN TO OPPORTUNITIES
                </span>
              </div>

              {/* Inner Terminal Box & Live Telemetry */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-3.5 my-auto font-mono text-xs text-slate-300 space-y-1.5 shadow-inner select-text">
                <div className="text-slate-400 truncate">
                  &gt; candidate.name = &quot;Rakesh Kumar&quot;
                </div>
                <div className="text-emerald-400/90 truncate">
                  &gt; focus = [&quot;full-stack&quot;, &quot;backend&quot;, &quot;real-time systems&quot;]
                </div>
                <div className="text-cyan-400/90 truncate">
                  &gt; location = &quot;Gurugram, India&quot; • timezone = &quot;IST&quot;
                </div>
                <div className="text-amber-400/90 truncate">
                  &gt; interview_status = READY
                </div>
                <div className="flex items-center pt-0.5">
                  <span className="text-cyan-400 font-bold">root@rakesh:~$</span>
                  <span className="inline-block w-2 h-3.5 bg-cyan-400 ml-1.5 animate-pulse" />
                </div>
              </div>

              {/* Quick Action Buttons (Footer Bar) */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 font-mono text-[11px]">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com&su=Portfolio%20inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => openEmailClient(e, 'Portfolio inquiry')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer font-medium"
                >
                  <span>OPEN EMAIL</span>
                  <span>↗</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? 'COPIED_TO_CLIPBOARD ✓' : 'COPY_EMAIL_CLIPBOARD'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
