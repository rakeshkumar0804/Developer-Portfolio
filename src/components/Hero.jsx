import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiMapPin, FiAward, FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, codingStats } from '../data/portfolioData';

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium text-emerald-400 w-fit mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Software Engineer Roles</span>
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-sm sm:text-base font-semibold text-[#38bdf8] mb-1 font-mono"
            >
              Hi there, I'm
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans leading-none"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role Title */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-bold text-slate-300 mt-3 mb-4 font-sans"
            >
              Full-Stack Developer & MERN Engineer
            </motion.div>

            {/* Headline / Summary */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl font-sans"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Quick Metadata Chips */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-sans"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FiMapPin className="text-[#38bdf8]" />
                <span>Gurugram, India</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <FiAward className="text-[#f59e0b]" />
                <span>B.Tech CSE (Class of 2026)</span>
              </span>
              <a
                href={codingStats.leetcode.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-[#f59e0b]/40 transition-colors"
              >
                <SiLeetcode className="text-[#f59e0b]" />
                <span>165+ LeetCode Solved</span>
              </a>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={7}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/10"
              >
                <FiDownload className="text-sm" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.15] bg-[#121524] hover:border-[#38bdf8]/50 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>View Projects</span>
                <FiArrowDown className="text-sm" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                <FiMail />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Developer Profile Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <div className="w-full rounded-xl border border-white/[0.1] bg-[#121524]/90 backdrop-blur-xl shadow-2xl p-5 relative">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">developer-spec.ts</span>
                </div>
                <span className="text-[0.7rem] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">
                  TypeScript
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-1 overflow-x-auto py-1">
                <div>
                  <span className="text-indigo-400 font-semibold">const</span>{' '}
                  <span className="text-[#38bdf8]">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-400">'Rakesh Kumar'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-400">'B.Tech CSE, Parul University (2026)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">internship:</span>{' '}
                  <span className="text-emerald-400">'Codetech IT Solutions (MERN Stack)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreTech:</span> [
                  <span className="text-[#38bdf8]">'React'</span>,{' '}
                  <span className="text-[#38bdf8]">'Node.js'</span>,{' '}
                  <span className="text-[#38bdf8]">'Express'</span>,{' '}
                  <span className="text-[#38bdf8]">'MongoDB'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focusAreas:</span> [
                  <span className="text-amber-400">'REST APIs'</span>,{' '}
                  <span className="text-amber-400">'JWT & RBAC'</span>,{' '}
                  <span className="text-amber-400">'System Workflows'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">'Actively Interviewing for SDE Roles'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Stat Highlights at bottom of card */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                  <div className="text-sm font-bold text-white">6+</div>
                  <div className="text-[0.65rem] text-slate-400 uppercase">Projects</div>
                </div>
                <div className="p-2 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                  <div className="text-sm font-bold text-[#38bdf8]">165+</div>
                  <div className="text-[0.65rem] text-slate-400 uppercase">LeetCode</div>
                </div>
                <div className="p-2 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                  <div className="text-sm font-bold text-emerald-400">2026</div>
                  <div className="text-[0.65rem] text-slate-400 uppercase">Graduate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
