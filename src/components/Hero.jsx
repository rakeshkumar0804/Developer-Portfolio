import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiMail, FiGithub, FiLinkedin, FiTerminal, FiCheck, FiFolder } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
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
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Terminal Window Wrapper */}
        <div className="rounded-lg border border-white/[0.12] bg-[#0d1117] shadow-2xl shadow-black/80 overflow-hidden">
          {/* Terminal Window Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/[0.08] text-xs text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block" />
              <span className="ml-2 text-slate-300 font-semibold flex items-center gap-1.5">
                <FiTerminal className="text-[#38bdf8]" />
                rakesh@portfolio:~ (zsh)
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[0.7rem] text-slate-500">
              <span>UTF-8</span>
              <span>Node v20.x</span>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Headline & Pitch */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Status Badge */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400 w-fit mb-5"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to Software Engineer Roles</span>
                </motion.div>

                {/* Shell Command Intro */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={fadeInUp}
                  className="text-xs text-slate-400 mb-2 flex items-center gap-2"
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4"
                >
                  Hi, I'm <span className="text-[#38bdf8]">Rakesh Kumar</span> — B.Tech CSE Graduate · Full-Stack Developer
                </motion.h1>

                {/* One-Line Pitch */}
                <motion.p
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  variants={fadeInUp}
                  className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-6 font-sans"
                >
                  {personalInfo.pitch}
                </motion.p>

                {/* Action CTAs */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#projects"
                    onClick={(e) => handleNavClick(e, '#projects')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded border border-[#38bdf8]/60 bg-[#38bdf8]/10 hover:bg-[#38bdf8] text-[#38bdf8] hover:text-[#0a0e14] text-xs font-bold transition-all shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                  >
                    <span>View Projects</span>
                    <FiArrowDown className="text-xs" />
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#22d3ee] hover:bg-[#38bdf8] text-[#0a0e14] text-xs font-bold transition-all shadow-md"
                  >
                    <FiDownload className="text-xs" />
                    <span>Download Resume</span>
                  </a>

                  {/* Social Icons */}
                  <div className="flex items-center gap-2 ml-1 sm:ml-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded border border-white/[0.1] bg-[#161b22] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 text-sm transition-all"
                      aria-label="GitHub"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded border border-white/[0.1] bg-[#161b22] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 text-sm transition-all"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin />
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="p-2 rounded border border-white/[0.1] bg-[#161b22] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/50 text-sm transition-all"
                      aria-label="Email"
                    >
                      <FiMail />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Terminal Shell Output Panel */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded border border-white/[0.1] bg-[#0a0e14] p-4 text-xs font-mono text-slate-300 leading-relaxed shadow-inner"
                >
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-[0.7rem] text-slate-400">
                    <span className="text-emerald-400 font-bold">$ cat developer.json</span>
                    <span className="text-slate-500">JSON</span>
                  </div>

                  <div className="space-y-1 text-[0.78rem]">
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
                      <span className="text-[#38bdf8]">"focus"</span>: [<span className="text-[#facc15]">"REST APIs"</span>, <span className="text-[#facc15]">"JWT & RBAC"</span>, <span className="text-[#facc15]">"Workflows"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"status"</span>: <span className="text-emerald-400">"Actively Interviewing for SDE Roles"</span>
                    </div>
                    <div><span className="text-slate-500">&#125;</span></div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.7rem] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <FiCheck className="text-xs" /> Ready for hire
                    </span>
                    <span>Gurugram, India</span>
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
