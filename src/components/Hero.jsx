import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiMapPin, FiAward, FiCode, FiGithub, FiLinkedin, FiLayers, FiCheck } from 'react-icons/fi';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { personalInfo, codingStats } from '../data/portfolioData';

const typewriterTitles = [
  'Full-Stack Web Developer',
  'MERN Stack Engineer, JWT & RBAC Systems',
  'Building Real-Time Systems — SyncPad, IncidentHub AI & More',
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth Typewriter animation engine
  useEffect(() => {
    if (prefersReducedMotion) return;

    const fullText = typewriterTitles[currentTitleIndex];
    let timer;

    if (!isDeleting && displayText === fullText) {
      // Pause for 2 seconds at the end of the phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      // Transition to next title after deletion
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % typewriterTitles.length);
    } else {
      // Smooth typing (~50ms) or fast backspacing (~30ms)
      const speed = isDeleting ? 30 : 50;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, prefersReducedMotion]);

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

  // Floating animation variants for tech badges
  const floatVariant1 = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatVariant2 = {
    animate: {
      y: [0, 8, 0],
      transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
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

            {/* Dynamic Typewriter Subtitle */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="min-h-[3.25rem] sm:min-h-[2.5rem] flex items-center mt-3 mb-4"
            >
              <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-[#22d3ee] tracking-tight leading-snug">
                {prefersReducedMotion ? (
                  <span>Full-Stack Web Developer & MERN Engineer</span>
                ) : (
                  <>
                    <span>{displayText}</span>
                    <span
                      className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse align-middle"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
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

          {/* Right Column: Illustration Layout with developer.js, Globe/Circuit Graphics & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center w-full py-6"
          >
            {/* Glowing Circuit Globe Background Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible">
              {/* Outer Cyan Ring */}
              <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#38bdf8]/15 border-dashed animate-[spin_60s_linear_infinite]" />
              {/* Middle Orbital Ring */}
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-indigo-500/20" />
              {/* Inner Glowing Orb */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#38bdf8]/10 via-indigo-500/10 to-transparent blur-2xl" />
            </div>

            {/* Floating Tech Badge 1: React (Top Right) */}
            <motion.div
              variants={floatVariant1}
              animate="animate"
              className="absolute -top-3 sm:-top-5 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl border border-white/[0.12] bg-[#090a0f]/90 backdrop-blur-md text-xs font-mono text-white shadow-xl shadow-cyan-950/30 flex items-center gap-2 z-20"
            >
              <SiReact className="text-[#61DAFB] text-base" />
              <span className="font-semibold text-[0.75rem]">React.js</span>
            </motion.div>

            {/* Floating Tech Badge 2: Node.js (Top Left) */}
            <motion.div
              variants={floatVariant2}
              animate="animate"
              className="absolute -top-4 sm:-top-6 -left-2 sm:-left-5 px-3 py-1.5 rounded-xl border border-white/[0.12] bg-[#090a0f]/90 backdrop-blur-md text-xs font-mono text-white shadow-xl shadow-green-950/30 flex items-center gap-2 z-20"
            >
              <SiNodedotjs className="text-[#68A063] text-base" />
              <span className="font-semibold text-[0.75rem]">Node.js</span>
            </motion.div>

            {/* Floating Tech Badge 3: Express (Bottom Left) */}
            <motion.div
              variants={floatVariant1}
              animate="animate"
              className="absolute -bottom-4 sm:-bottom-5 -left-3 sm:-left-4 px-3 py-1.5 rounded-xl border border-white/[0.12] bg-[#090a0f]/90 backdrop-blur-md text-xs font-mono text-white shadow-xl shadow-black/40 flex items-center gap-2 z-20"
            >
              <SiExpress className="text-slate-200 text-base" />
              <span className="font-semibold text-[0.75rem]">Express.js</span>
            </motion.div>

            {/* Floating Tech Badge 4: MongoDB (Bottom Right) */}
            <motion.div
              variants={floatVariant2}
              animate="animate"
              className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl border border-white/[0.12] bg-[#090a0f]/90 backdrop-blur-md text-xs font-mono text-white shadow-xl shadow-emerald-950/30 flex items-center gap-2 z-20"
            >
              <SiMongodb className="text-[#47A248] text-base" />
              <span className="font-semibold text-[0.75rem]">MongoDB</span>
            </motion.div>

            {/* Main developer.js Code Card */}
            <div className="w-full rounded-2xl border border-white/[0.12] bg-[#121524]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 p-5 sm:p-6 relative z-10">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-300 font-semibold">developer.js</span>
                </div>
                <span className="text-[0.7rem] font-mono text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-2 py-0.5 rounded">
                  JavaScript
                </span>
              </div>

              {/* Code Snippet with Real, Factual Developer Object */}
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

              {/* Mini Stat Summary Footer */}
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

            {/* Floating Tag Below Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 px-4 py-1.5 rounded-full border border-white/[0.1] bg-[#090a0f]/90 backdrop-blur-md text-xs font-mono font-medium text-slate-300 shadow-xl flex items-center gap-2 z-20"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>6+ Production-Ready Full-Stack Projects</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
