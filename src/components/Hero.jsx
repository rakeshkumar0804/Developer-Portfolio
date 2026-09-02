import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiMail, FiGithub, FiLinkedin, FiTerminal, FiCheck } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { openEmailClient } from '../utils/emailHandler';

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden font-mono">
      <div className="max-w-6xl w-full mx-auto">
        {/* Terminal Window Wrapper */}
        <div className="rounded-xl border border-slate-800/80 bg-[#0B101B]/60 backdrop-blur-sm shadow-2xl shadow-black/80 overflow-hidden">
          {/* Terminal Window Titlebar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#0d1424] border-b border-slate-800/80 text-xs text-slate-400 select-none">
            <div className="flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block shadow-[0_0_6px_rgba(255,189,46,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block shadow-[0_0_6px_rgba(39,201,63,0.5)]" />
              <span className="ml-2 text-slate-300 font-semibold flex items-center gap-1.5 font-mono text-xs">
                <FiTerminal className="text-cyan-400" />
                rakesh@portfolio:~ (zsh)
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span>UTF-8</span>
              <span>Node v20.x</span>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Headline & Pitch */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                {/* Status Badge */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400 w-fit"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
                  <span>Open to Software Engineer Roles</span>
                </motion.div>

                {/* Shell Command Intro */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={fadeInUp}
                  className="text-xs text-slate-400 flex items-center gap-2 font-mono"
                >
                  <span className="text-emerald-400 font-bold">$</span>
                  <span>whoami</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight"
                >
                  Hi, I'm <span className="text-[#38bdf8] drop-shadow-[0_0_15px_rgba(56,189,248,0.35)]">Rakesh Kumar</span> — Full-Stack Developer & Systems Builder
                </motion.h1>

                {/* Sub-text Pitch */}
                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  variants={fadeInUp}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono"
                >
                  {personalInfo.pitch}
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <a
                    href="#systems"
                    onClick={(e) => handleNavClick(e, '#systems')}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg border border-cyan-500/60 bg-cyan-950/30 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] cursor-pointer"
                  >
                    <span>View Projects</span>
                    <FiArrowDown className="text-xs" />
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <FiDownload className="text-xs" />
                    <span>Download Resume</span>
                  </a>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2.5 ml-1 sm:ml-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 text-sm transition-all"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 text-sm transition-all"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin />
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => openEmailClient(e)}
                      className="p-3 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 text-sm transition-all cursor-pointer"
                      aria-label="Send Email"
                      title="Send Email"
                    >
                      <FiMail />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Terminal Shell Output Panel */}
              <div className="lg:col-span-5 h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-xl border border-slate-800/90 bg-[#060a12]/90 p-6 text-xs sm:text-sm font-mono text-slate-300 leading-relaxed shadow-inner"
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-xs text-slate-400">
                    <span className="text-emerald-400 font-bold">$ cat developer.json</span>
                    <span className="text-slate-500 uppercase tracking-widest text-[10px]">JSON</span>
                  </div>

                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div><span className="text-slate-500">&#123;</span></div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"name"</span>: <span className="text-emerald-400">"Rakesh Kumar"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"degree"</span>: <span className="text-emerald-400">"B.Tech CSE (2026)"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"stack"</span>: [<span className="text-[#facc15]">"React"</span>, <span className="text-[#facc15]">"Node"</span>, <span className="text-[#facc15]">"Express"</span>, <span className="text-[#facc15]">"MongoDB"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"focus"</span>: [<span className="text-[#facc15]">"REST APIs"</span>, <span className="text-[#facc15]">"JWT & RBAC"</span>, <span className="text-[#facc15]">"CRDTs"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"status"</span>: <span className="text-emerald-400">"Actively Interviewing for SDE Roles"</span>
                    </div>
                    <div><span className="text-slate-500">&#125;</span></div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <FiCheck className="text-sm" /> Ready for hire
                    </span>
                    <span className="text-slate-500">Gurugram, India</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
