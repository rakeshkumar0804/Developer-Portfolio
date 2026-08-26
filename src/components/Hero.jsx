import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiMapPin, FiAward, FiCode, FiGithub, FiLinkedin, FiLayers, FiCheck } from 'react-icons/fi';
import { SiLeetcode, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';
import { personalInfo, codingStats } from '../data/portfolioData';

const typewriterTitles = [
  'MERN Stack Engineer, JWT & RBAC System Builder',
  'Full-Stack Web Developer & API Architect',
  'IncidentHub AI & SyncPad Creator',
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

  // Smooth orbital floating animations
  const floatVariantTop = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const floatVariantLeft = {
    animate: {
      x: [0, -6, 0],
      y: [0, 4, 0],
      transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
    },
  };

  const floatVariantRight = {
    animate: {
      x: [0, 6, 0],
      y: [0, -4, 0],
      transition: { duration: 4.0, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
    },
  };

  const floatVariantBottom = {
    animate: {
      y: [0, 7, 0],
      transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0D1117]">
      {/* Background Cyan Neon Ambient Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-xs font-medium text-emerald-400 w-fit mb-5 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
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
              className="text-base sm:text-lg font-normal text-white mb-1"
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
              className="h-10 sm:h-11 flex items-center mt-2.5 mb-3 overflow-hidden"
            >
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold font-mono text-[#22d3ee] tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis flex items-center">
                {prefersReducedMotion ? (
                  <span>MERN Stack Engineer, JWT & RBAC System Builder</span>
                ) : (
                  <>
                    <span>{displayText}</span>
                    <span
                      className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-[#22d3ee] shadow-[0_0_10px_#22d3ee] animate-pulse shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl font-sans"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Information Pills */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-5 flex flex-wrap items-center gap-2.5 text-xs text-slate-300 font-sans"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-sm">
                <FiMapPin className="text-[#22d3ee]" />
                <span>Gurugram, India</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] shadow-sm">
                <FiAward className="text-[#f59e0b]" />
                <span>B.Tech CSE (Parul University, Class of 2026)</span>
              </span>
              <a
                href={codingStats.leetcode.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-[#22d3ee]/40 transition-colors shadow-sm"
              >
                <span className="text-[#22d3ee] font-mono font-bold">&lt;|&gt;</span>
                <span>165+ LeetCode Solved</span>
              </a>
            </motion.div>

            {/* CTA Action Buttons & Social Icons */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={7}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              {/* Primary CTA: Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#22d3ee] hover:bg-[#38bdf8] text-[#070B12] font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
              >
                <FiDownload className="text-sm" />
                <span>Download Resume</span>
              </a>

              {/* Secondary CTA: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#22d3ee]/60 bg-[#070B12]/80 hover:bg-[#22d3ee]/10 text-white font-medium text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)]"
              >
                <span>View Projects</span>
                <FiArrowDown className="text-sm text-[#22d3ee]" />
              </a>

              {/* Contact Link */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-1.5 px-3 py-2 text-slate-300 hover:text-[#22d3ee] text-xs sm:text-sm transition-colors"
              >
                <span>✉</span>
                <span>Contact Me</span>
              </a>

              {/* Social Media Icons styled in Cyan Circles */}
              <div className="flex items-center gap-2 ml-1 sm:ml-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-full border border-[#22d3ee]/40 bg-[#070B12] text-[#22d3ee] flex items-center justify-center text-sm shadow-[0_0_10px_rgba(34,211,238,0.15)] hover:border-[#22d3ee] hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-full border border-[#22d3ee]/40 bg-[#070B12] text-[#22d3ee] flex items-center justify-center text-sm shadow-[0_0_10px_rgba(34,211,238,0.15)] hover:border-[#22d3ee] hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="h-8 w-8 rounded-full border border-[#22d3ee]/40 bg-[#070B12] text-[#22d3ee] flex items-center justify-center text-sm shadow-[0_0_10px_rgba(34,211,238,0.15)] hover:border-[#22d3ee] hover:shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Isometric Holographic Terminal on Projected Grid Floor */}
          <div className="lg:col-span-5 relative w-full h-[540px] flex items-center justify-center overflow-visible select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="relative w-full max-w-[460px] h-full flex flex-col items-center justify-center"
              style={{ perspective: '1200px' }}
            >
              {/* Concentric Neon Cyan Backlight Behind 3D Elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible">
                <div className="w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-gradient-to-tr from-[#22d3ee]/20 via-[#38bdf8]/15 to-transparent blur-3xl" />
              </div>

              {/* Orbiting Tech Logo 1: React (Top / 12 o'clock with Cyan Halo) */}
              <motion.div
                variants={floatVariantTop}
                animate="animate"
                className="absolute top-1 left-1/2 -translate-x-1/2 z-30 group cursor-pointer"
              >
                <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-full border border-[#22d3ee]/60 bg-[#070B12]/95 backdrop-blur-xl shadow-[0_0_18px_rgba(34,211,238,0.35)] flex items-center justify-center p-2.5 ring-2 ring-[#22d3ee]/25 group-hover:scale-110 group-hover:border-[#22d3ee] transition-all">
                  <FaReact className="text-[#61DAFB] text-2xl animate-[spin_12s_linear_infinite]" />
                </div>
              </motion.div>

              {/* Orbiting Tech Logo 2: Node.js (Left-Middle / 9 o'clock with Cyan Halo) */}
              <motion.div
                variants={floatVariantLeft}
                animate="animate"
                className="absolute top-[45%] -left-3 sm:-left-6 -translate-y-1/2 z-30 group cursor-pointer"
              >
                <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-full border border-[#22d3ee]/60 bg-[#070B12]/95 backdrop-blur-xl shadow-[0_0_18px_rgba(34,211,238,0.35)] flex items-center justify-center p-2.5 ring-2 ring-[#22d3ee]/25 group-hover:scale-110 group-hover:border-[#22d3ee] transition-all">
                  <SiNodedotjs className="text-[#68A063] text-2xl" />
                </div>
              </motion.div>

              {/* Orbiting Tech Logo 3: MongoDB (Right-Middle / 3 o'clock with Cyan Halo) */}
              <motion.div
                variants={floatVariantRight}
                animate="animate"
                className="absolute top-[45%] -right-3 sm:-right-6 -translate-y-1/2 z-30 group cursor-pointer"
              >
                <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-full border border-[#22d3ee]/60 bg-[#070B12]/95 backdrop-blur-xl shadow-[0_0_18px_rgba(34,211,238,0.35)] flex items-center justify-center p-2.5 ring-2 ring-[#22d3ee]/25 group-hover:scale-110 group-hover:border-[#22d3ee] transition-all">
                  <SiMongodb className="text-[#47A248] text-2xl" />
                </div>
              </motion.div>

              {/* Orbiting Tech Logo 4: Express (Bottom-Right with Cyan Halo) */}
              <motion.div
                variants={floatVariantBottom}
                animate="animate"
                className="absolute bottom-16 right-4 sm:right-6 z-30 group cursor-pointer"
              >
                <div className="h-12 w-12 sm:h-13 sm:w-13 rounded-full border border-[#22d3ee]/60 bg-[#070B12]/95 backdrop-blur-xl shadow-[0_0_18px_rgba(34,211,238,0.35)] flex items-center justify-center p-2.5 ring-2 ring-[#22d3ee]/25 group-hover:scale-110 group-hover:border-[#22d3ee] transition-all">
                  <SiExpress className="text-white text-2xl" />
                </div>
              </motion.div>

              {/* 3D Isometric Angled Glass Terminal with Line Numbers & Syntax Highlighting */}
              <motion.div
                whileHover={{ rotateY: -3, rotateX: 3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="w-full rounded-2xl border border-[#22d3ee]/40 bg-[#070B12]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(34,211,238,0.18)] p-5 sm:p-6 relative z-20"
                style={{
                  transform: 'rotateY(-9deg) rotateX(6deg) rotateZ(1deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/[0.08]">
                  {/* macOS Control Dots on the Upper-Left */}
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/90 shadow-[0_0_6px_#f43f5e]" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/90 shadow-[0_0_6px_#f59e0b]" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-[0_0_6px_#10b981]" />
                  </div>

                  {/* Filename developer.js (Monospace, Right-Aligned) */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-300 font-semibold tracking-wide">
                      developer.js
                    </span>
                    <span className="text-[0.65rem] font-mono font-bold text-[#22d3ee] bg-[#22d3ee]/10 border border-[#22d3ee]/30 px-2 py-0.5 rounded tracking-wider">
                      JAVASCRIPT
                    </span>
                  </div>
                </div>

                {/* Syntax-Highlighted Code Object with Line Numbers */}
                <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-1 overflow-x-auto py-1">
                  <div className="flex items-start">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">01</span>
                    <div>
                      <span className="text-[#22d3ee] font-semibold">const</span>{' '}
                      <span className="text-white font-medium">developer</span> = &#123;
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">02</span>
                    <div>
                      <span className="text-[#facc15]">name</span>:{' '}
                      <span className="text-[#4ade80]">'Rakesh Kumar'</span>,
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">03</span>
                    <div>
                      <span className="text-[#facc15]">education</span>:{' '}
                      <span className="text-[#4ade80]">'B.Tech CSE, Parul University (2026)'</span>,
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">04</span>
                    <div>
                      <span className="text-[#facc15]">internship</span>:{' '}
                      <span className="text-[#4ade80]">'Codetech IT Solution (MERN Stack)'</span>,
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">05</span>
                    <div>
                      <span className="text-[#facc15]">coreTech</span>: [
                      <span className="text-[#38bdf8]">'React'</span>,{' '}
                      <span className="text-[#38bdf8]">'Node.js'</span>,{' '}
                      <span className="text-[#38bdf8]">'Express'</span>,{' '}
                      <span className="text-[#38bdf8]">'MongoDB'</span>],
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">06</span>
                    <div>
                      <span className="text-[#facc15]">focusAreas</span>: [
                      <span className="text-[#38bdf8]">'REST APIs'</span>,{' '}
                      <span className="text-[#38bdf8]">'JWT & RBAC'</span>,{' '}
                      <span className="text-[#38bdf8]">'System Workflows'</span>],
                    </div>
                  </div>
                  <div className="flex items-start pl-2">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">07</span>
                    <div>
                      <span className="text-[#facc15]">status</span>:{' '}
                      <span className="text-[#4ade80]">'Actively Interviewing for SDE Roles'</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-slate-500 select-none w-7 text-right pr-2 shrink-0">08</span>
                    <div>&#125;;</div>
                  </div>
                </div>

                {/* Terminal Footer Proof Badges */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-1.5 rounded-lg bg-[#040810] border border-white/[0.04]">
                    <div className="text-sm font-bold text-white">6+</div>
                    <div className="text-[0.65rem] text-slate-400 uppercase">Projects</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#040810] border border-white/[0.04]">
                    <div className="text-sm font-bold text-[#22d3ee]">165+</div>
                    <div className="text-[0.65rem] text-slate-400 uppercase">LeetCode</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#040810] border border-white/[0.04]">
                    <div className="text-sm font-bold text-emerald-400">2026</div>
                    <div className="text-[0.65rem] text-slate-400 uppercase">Graduate</div>
                  </div>
                </div>
              </motion.div>

              {/* Advanced Concentric Holographic Light Platform with Grid Projection */}
              <div className="relative w-full flex flex-col items-center justify-center -mt-6 pt-2 pointer-events-none z-10">
                {/* Holographic Projection Rays Upward */}
                <div className="w-64 sm:w-80 h-16 bg-gradient-to-t from-[#22d3ee]/30 via-[#38bdf8]/15 to-transparent blur-xl" />

                {/* Concentric Light Rings Projected on Grid Floor */}
                <div className="relative -mt-9 flex items-center justify-center">
                  {/* Outer Pulsing Projection Ring */}
                  <div className="w-[350px] h-[52px] sm:w-[450px] sm:h-[68px] rounded-[100%] border border-[#22d3ee]/35 shadow-[0_0_20px_rgba(34,211,238,0.2)] animate-[ping_4.5s_cubic-bezier(0,0,0.2,1)_infinite]" />

                  {/* Circuit Grid Rotating Ring */}
                  <div className="absolute w-[270px] h-[42px] sm:w-[350px] sm:h-[52px] rounded-[100%] border border-[#38bdf8]/60 border-dashed shadow-[0_0_18px_#22d3ee] animate-[spin_60s_linear_infinite]" />

                  {/* Inner Intense Platform Core Ring */}
                  <div className="absolute w-[180px] h-[30px] sm:w-[230px] sm:h-[38px] rounded-[100%] border-2 border-[#22d3ee] shadow-[0_0_30px_#22d3ee,inset_0_0_15px_#22d3ee]" />

                  {/* Concentrated Light Source */}
                  <div className="absolute w-[210px] h-[55px] rounded-full bg-[#22d3ee]/45 blur-2xl animate-pulse" />
                </div>
              </div>

              {/* Centered Pill-Badge at the Very Bottom with Glowing Lightning Bolt */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4 px-4 sm:px-5 py-1.5 rounded-full border border-[#22d3ee]/50 bg-[#070B12]/95 backdrop-blur-xl text-xs font-mono font-medium text-slate-200 shadow-[0_0_20px_rgba(34,211,238,0.25)] flex items-center gap-2 z-20 shrink-0"
              >
                <span>Turning ideas into impactful digital solutions.</span>
                <span className="text-[#22d3ee] shadow-[0_0_8px_#22d3ee] font-bold">⚡</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
