import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './styles.css';
import {
  profile,
  metrics,
  journey,
  projects,
  capabilitiesMatrix,
  openSourceRepos,
  achievements,
} from './data/portfolio';
import Navbar from './components/Navbar';
import AmbientBackground from './components/AmbientBackground';
import RadiantCard from './components/RadiantCard';
import SystemArchitectureCanvas from './components/SystemArchitectureCanvas';
import CustomCursor from './components/CustomCursor';
import MagneticButton from './components/MagneticButton';
import { playButtonClick } from './utils/audio';
import {
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiGitBranch,
  FiClock,
  FiStar,
  FiFolder,
  FiLayers,
  FiActivity,
  FiCpu,
  FiCheckCircle,
  FiExternalLink,
  FiCode,
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.08,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function App() {
  const [timeStr, setTimeStr] = useState('--:--:--');

  // Live IST Clock for bottom telemetry status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTimeStr(now.toLocaleTimeString('en-GB', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#EDEDED] font-sans selection:bg-[#10B981] selection:text-[#08090C] flex flex-col justify-between overflow-x-hidden">
      {/* Hardware-Accelerated Custom Cursor */}
      <CustomCursor />

      {/* Global Dynamic Mouse Spotlight & Grid Canvas */}
      <AmbientBackground />

      {/* Global Navigation Header */}
      <Navbar />

      <main className="relative z-10 pt-28 md:pt-36 flex-1 w-full">
        {/* =================================================================
           SECTION 1: HERO (THE INTERACTIVE SYSTEM PIPELINE)
           ================================================================= */}
        <section id="hero" className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-6 md:pt-10 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Personal Positioning & Metric Bento */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Tactical Status Pill */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeInUp}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 font-mono text-[0.68rem] tracking-wider text-[#34D399] font-semibold mb-6 w-fit shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                <span>AVAILABLE FOR FULL-TIME ROLES // 2026 CSE</span>
              </motion.div>

              {/* Metallic Silver-to-White Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-sans leading-[1.02] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent"
              >
                Rakesh Kumar
              </motion.h1>

              {/* Role & Pitch */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl font-sans font-medium text-neutral-200 leading-relaxed max-w-xl"
              >
                Full-Stack Software Engineer architecting high-concurrency web platforms, sub-50ms API runtimes, and real-time data pipelines.
              </motion.p>

              {/* Short Bio */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeInUp}
                className="mt-3.5 text-sm sm:text-base font-sans text-neutral-400 leading-relaxed max-w-lg"
              >
                B.Tech CSE 2026 graduate specializing in MERN stack distributed architecture, role-based security, and high-performance UI systems.
              </motion.p>

              {/* Action CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={5}
                variants={fadeInUp}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <MagneticButton
                  href="#projects"
                  onClick={playButtonClick}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-[#08090C] text-sm font-sans font-bold hover:opacity-95 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <span>Explore Systems</span>
                    <FiArrowRight className="text-base" />
                  </span>
                </MagneticButton>

                <MagneticButton
                  href="https://github.com/rakeshkumar0804"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playButtonClick}
                  className="px-5 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-sm font-sans font-medium text-white hover:border-white/25 hover:bg-white/[0.08]"
                >
                  <span className="flex items-center gap-2">
                    <FiFileText className="text-neutral-400" />
                    <span>Download Resume</span>
                    <FiArrowUpRight className="text-neutral-400" />
                  </span>
                </MagneticButton>
              </motion.div>

              {/* 4-Cell Metric Bento */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={6}
                variants={fadeInUp}
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {metrics.map((m, i) => (
                  <RadiantCard
                    key={i}
                    className="p-3.5 flex flex-col justify-between"
                    glowColor="rgba(16, 185, 129, 0.12)"
                  >
                    <div className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {m.val}
                    </div>
                    <div className="mt-1 font-sans text-xs text-neutral-300 font-medium">
                      {m.label}
                    </div>
                  </RadiantCard>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Live Interactive System Architecture Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-6 w-full flex justify-center"
            >
              <SystemArchitectureCanvas />
            </motion.div>
          </div>
        </section>

        {/* =================================================================
           SECTION 2: BENTO GRID DEPLOYED SYSTEMS SHOWCASE (#projects)
           ================================================================= */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/[0.08]"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#10B981] tracking-widest uppercase font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>DEPLOYED SYSTEMS SHOWCASE</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="font-mono text-xs text-neutral-400">
              6 Production Implementations
            </motion.div>
          </div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-sans tracking-tight mb-12">
            Engineered Platforms & Systems
          </motion.h2>

          {/* High-End Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured Project 1: IncidentHub AI (Span 8) */}
            {projects.slice(0, 1).map((proj) => (
              <RadiantCard
                key={proj.id}
                className="md:col-span-12 lg:col-span-8 p-7 sm:p-9 flex flex-col justify-between"
                glowColor="rgba(56, 189, 248, 0.2)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] font-bold tracking-wider text-[0.68rem]">
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                        aria-label="GitHub Source"
                      >
                        <FiGithub className="text-lg" />
                      </a>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <span>Live System</span>
                        <FiArrowUpRight className="text-sm text-[#38BDF8]" />
                      </a>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    {proj.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                    {proj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 font-sans mt-3 leading-relaxed max-w-3xl">
                    {proj.description}
                  </p>

                  {/* Real-time Data Pipeline Diagram */}
                  {proj.flow && (
                    <div className="mt-6 p-4 rounded-xl border border-white/[0.08] bg-[#070b10] font-mono text-xs">
                      <div className="text-[0.62rem] uppercase tracking-wider text-neutral-400 mb-2.5 font-bold flex items-center gap-1.5">
                        <FiActivity className="text-[#38BDF8]" />
                        <span>REAL-TIME PIPELINE FLOW</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-neutral-300 text-[0.72rem]">
                        {proj.flow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-white">
                              {step}
                            </span>
                            {sIdx < proj.flow.length - 1 && (
                              <FiArrowRight className="text-[#10B981] shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </RadiantCard>
            ))}

            {/* Featured Project 2: PortfolioPulse (Span 4) */}
            {projects.slice(1, 2).map((proj) => (
              <RadiantCard
                key={proj.id}
                className="md:col-span-12 lg:col-span-4 p-7 sm:p-8 flex flex-col justify-between"
                glowColor="rgba(16, 185, 129, 0.18)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] font-bold text-[0.68rem]">
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-neutral-400 hover:text-white p-1"
                      >
                        <FiGithub className="text-base" />
                      </a>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-white hover:text-[#38BDF8] p-1"
                      >
                        <FiArrowUpRight className="text-base" />
                      </a>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    {proj.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-5 space-y-1.5 font-mono text-xs text-neutral-400">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {proj.tags.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[0.72rem] font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </RadiantCard>
            ))}

            {/* Featured Project 3: Kohli Analytics (Span 6) */}
            {projects.slice(2, 3).map((proj) => (
              <RadiantCard
                key={proj.id}
                className="md:col-span-12 lg:col-span-6 p-7 sm:p-8 flex flex-col justify-between"
                glowColor="rgba(245, 158, 11, 0.15)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#FBBF24] font-bold text-[0.68rem]">
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-neutral-400 hover:text-white p-1"
                      >
                        <FiGithub className="text-base" />
                      </a>
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-white hover:text-[#FBBF24] p-1 flex items-center gap-1 text-xs"
                      >
                        <span>Demo</span>
                        <FiArrowUpRight className="text-sm" />
                      </a>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#FBBF24] uppercase tracking-wider mb-1">
                    {proj.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Flow */}
                  {proj.flow && (
                    <div className="mt-5 p-3 rounded-xl border border-white/[0.08] bg-[#070b10] font-mono text-[0.7rem]">
                      <div className="text-[0.6rem] uppercase tracking-wider text-neutral-400 mb-2 font-bold">
                        DATA PIPELINE
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-neutral-300">
                        {proj.flow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-white">
                              {step}
                            </span>
                            {sIdx < proj.flow.length - 1 && (
                              <FiArrowRight className="text-[#FBBF24] shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </RadiantCard>
            ))}

            {/* Remaining Projects: LeaveFlow, TaskFlow, Codetech EMS (Span 6 and Span 12) */}
            {projects.slice(3).map((proj) => (
              <RadiantCard
                key={proj.id}
                className="md:col-span-12 lg:col-span-6 p-7 sm:p-8 flex flex-col justify-between"
                glowColor="rgba(56, 189, 248, 0.14)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-neutral-300 text-[0.68rem] font-bold">
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-neutral-400 hover:text-white p-1"
                      >
                        <FiGithub className="text-base" />
                      </a>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={playButtonClick}
                          className="text-white hover:text-[#38BDF8] p-1"
                        >
                          <FiArrowUpRight className="text-base" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                    {proj.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-sans">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[0.72rem] font-mono text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 3: SKILLS & CAPABILITIES MATRIX (#skills)
           ================================================================= */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/[0.08]"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] tracking-widest uppercase font-semibold mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span>TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-sans tracking-tight mb-12">
            Engineering Runtimes & Tooling
          </motion.h2>

          {/* 4-Quadrant Specs Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {capabilitiesMatrix.map((quad) => (
              <RadiantCard
                key={quad.id}
                className="p-7 sm:p-8 flex flex-col justify-between"
                glowColor="rgba(16, 185, 129, 0.15)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] font-bold text-[0.68rem]">
                      {quad.badge}
                    </span>
                    <span className="text-neutral-500 text-[0.7rem] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                      <span>{quad.status}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-3">
                    {quad.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans leading-relaxed mb-6">
                    {quad.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {quad.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-xs font-mono text-white hover:border-[#10B981]/50 hover:text-[#34D399] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 4: EXPERIENCE & CREDENTIALS TIMELINE (#timeline)
           ================================================================= */}
        <motion.section
          id="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Timeline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] tracking-widest uppercase font-semibold mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                <span>CHRONOLOGICAL TIMELINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight mb-10">
                Experience & Education
              </h2>

              <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-10">
                {journey.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#08090C] bg-[#16202c] group-hover:bg-[#10B981] group-hover:shadow-[0_0_12px_#10B981] transition-all" />

                    <RadiantCard className="p-6 sm:p-7" glowColor="rgba(56, 189, 248, 0.12)">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-semibold text-[#10B981]">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-neutral-400">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                        {item.role} <span className="text-neutral-400 font-normal">— {item.company}</span>
                      </h3>

                      <ul className="mt-4 space-y-2.5 text-sm text-neutral-300 font-sans leading-relaxed">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="text-[#10B981] text-xs mt-1 shrink-0">▸</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </RadiantCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Verified Certifications */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8] tracking-widest uppercase font-semibold mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                <span>VERIFIED CREDENTIALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight mb-10">
                Certifications
              </h2>

              <div className="space-y-4">
                {achievements.map((item) => (
                  <RadiantCard
                    key={item.id}
                    className="p-5"
                    glowColor="rgba(56, 189, 248, 0.12)"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                      <span className="text-[#38BDF8]">{item.category}</span>
                      <span className="px-2 py-0.5 rounded bg-white/[0.06] text-white text-[0.65rem]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white font-sans flex items-center justify-between">
                      <span>{item.title}</span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={playButtonClick}
                          className="text-neutral-400 hover:text-white p-1"
                        >
                          <FiArrowUpRight />
                        </a>
                      )}
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans mt-2 leading-relaxed">
                      {item.detail}
                    </p>
                  </RadiantCard>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 5: TERMINAL COMMS & CONTACT DOCK (#contact)
           ================================================================= */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 border-t border-white/[0.08]"
        >
          <RadiantCard
            className="p-8 sm:p-12 md:p-16"
            glowColor="rgba(16, 185, 129, 0.22)"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] tracking-widest uppercase font-semibold mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              <span>TERMINAL COMMS // CONTACT DOCK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-sans tracking-tight mb-5 max-w-3xl">
              Let's connect — open to full-time roles & engineering discussions.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-10">
              Actively interviewing for Full-Stack Developer & Software Engineer positions (Immediate Joiner / CSE 2026 Grad).
            </p>

            {/* Direct Connect Magnetic Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <MagneticButton
                href={`mailto:${profile.email}`}
                onClick={playButtonClick}
                className="w-full p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-[#10B981] transition-all group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-white font-bold">
                    <FiMail className="text-[#10B981]" /> EMAIL
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#10B981] transition-colors" />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-white truncate w-full">
                  {profile.email}
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-[#10B981] transition-all group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-white font-bold">
                    <FiGithub className="text-[#10B981]" /> GITHUB
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#10B981] transition-colors" />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-white w-full">
                  @{profile.githubUsername}
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-[#10B981] transition-all group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-white font-bold">
                    <FiLinkedin className="text-[#10B981]" /> LINKEDIN
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#10B981] transition-colors" />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-white w-full">
                  in/rakesh-kumar
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-[#10B981] transition-all group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-2 text-white font-bold">
                    <SiLeetcode className="text-[#FFA116]" /> LEETCODE
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#10B981] transition-colors" />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-semibold text-white w-full">
                  165+ Solved
                </div>
              </MagneticButton>
            </div>

            {/* Live Pipeline Status */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2.5 text-xs font-mono text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Engineering Runtime: Node.js 22 · Express REST / WSS · MongoDB Cluster · Next.js / React 19</span>
            </div>
          </RadiantCard>
        </motion.section>
      </main>

      {/* =================================================================
         BOTTOM TELEMETRY STATUS BAR FOOTER
         ================================================================= */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#06080b] px-6 sm:px-8 md:px-12 lg:px-16 py-4 font-mono text-xs text-neutral-400 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <FiGitBranch className="text-xs" />
              <span>git: main · verified</span>
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-xs text-neutral-400" />
              <span className="tabular-nums">{timeStr} IST</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[0.72rem]">
            <span>© 2026 Rakesh Kumar · Hyper-Engineered Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
