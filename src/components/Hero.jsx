import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiCheck, FiArrowRight, FiShield, FiServer, FiDatabase, FiLayers, FiCloud, FiActivity } from 'react-icons/fi';
import { personalInfo, heroProofPoints } from '../data/portfolioData';

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // Pulse progression cycle through the architecture tiers
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

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
    hidden: { opacity: 0, y: 16 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clean Cinematic Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Status Pill */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs border border-white/[0.08] bg-[#060e1c] text-[0.68rem] font-mono text-slate-400 w-fit mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="tracking-widest text-[#38bdf8] font-medium">RAKESH-CORE</span>
              <span className="text-slate-600">/</span>
              <span>UPLINK ACTIVE</span>
            </motion.div>

            {/* Massive Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] select-none"
            >
              <span className="block text-[#f8fafc]">RAKESH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#f8fafc]">
                KUMAR
              </span>
            </motion.h1>

            {/* One Strong Subtitle */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="mt-5 font-mono text-sm sm:text-base font-semibold text-[#38bdf8] tracking-tight"
            >
              {personalInfo.headline}
            </motion.div>

            {/* One Short Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400 font-sans max-w-xl"
            >
              {personalInfo.subhead}
            </motion.p>

            {/* 3 Proof Cards (Above the Fold for Recruiters) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl"
            >
              {heroProofPoints.map((proof) => (
                <a
                  key={proof.id}
                  href={proof.link}
                  onClick={(e) => handleNavClick(e, proof.link)}
                  className="blueprint-card p-3 rounded-xs border border-white/[0.08] hover:border-[#38bdf8]/40 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-[0.65rem] font-mono font-semibold text-[#38bdf8] mb-1">
                    <span>{proof.title}</span>
                    <span className="text-[#fbbf24] text-[0.55rem] opacity-90">{proof.tag}</span>
                  </div>
                  <div className="text-[0.68rem] text-slate-400 group-hover:text-slate-200 transition-colors leading-tight">
                    {proof.highlight}
                  </div>
                </a>
              ))}
            </motion.div>

            {/* 2 Primary CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-7 flex items-center gap-3 font-mono text-xs"
            >
              <a
                href="#systems"
                onClick={(e) => handleNavClick(e, '#systems')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-semibold transition-all shadow-sm"
              >
                <span>View Systems</span>
                <FiArrowDown className="text-xs" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xs border border-white/[0.15] bg-[#060e1c] text-slate-300 font-medium hover:border-[#38bdf8]/50 hover:text-white transition-all"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xs text-[#38bdf8]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Rectangular Full-Stack Architecture Pipeline Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <div className="blueprint-card w-full rounded-xs border border-white/[0.08] p-5 relative shadow-[0_0_30px_rgba(0,0,0,0.6)]">
              <div className="micro-corner-tl" />
              <div className="micro-corner-br" />

              {/* Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] font-mono text-[0.65rem]">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <FiLayers className="text-[#38bdf8]" />
                  <span className="tracking-wider">FULL_STACK_SYSTEM_MAP</span>
                </div>
                <span className="text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[0.6rem]">
                  PIPELINE_VERIFIED
                </span>
              </div>

              {/* Rectangular Blueprint Architecture Flow */}
              <div className="space-y-3 font-mono text-xs">
                {/* 1. Client UI Tier */}
                <div
                  className={`p-3 rounded-xs border transition-all duration-300 ${
                    activeStep === 0
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'border-white/[0.06] bg-[#02050c]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[0.62rem] text-slate-400 mb-1">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 0 ? 'bg-[#38bdf8] animate-ping' : 'bg-slate-600'}`} />
                      01 // CLIENT PRESENTATION TIER
                    </span>
                    <span className="text-[#38bdf8]">REACT 19 UI</span>
                  </div>
                  <div className="text-[0.72rem] text-slate-200 font-sans font-medium flex items-center justify-between">
                    <span>SPA / Next.js / Tailwind CSS</span>
                    <span className="text-[0.6rem] font-mono text-slate-500">200 OK</span>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-slate-600">
                  <span className={`text-[0.65rem] transition-colors ${activeStep === 1 ? 'text-[#38bdf8] font-bold' : ''}`}>↓</span>
                </div>

                {/* 2. Security & Routing Tier (Auth + Gateway) */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div
                    className={`p-2.5 rounded-xs border transition-all duration-300 ${
                      activeStep === 1
                        ? 'border-[#fbbf24] bg-[#fbbf24]/10 shadow-[0_0_12px_rgba(251,191,36,0.15)]'
                        : 'border-white/[0.06] bg-[#02050c]'
                    }`}
                  >
                    <div className="text-[0.58rem] text-slate-400 mb-0.5 flex items-center gap-1">
                      <FiShield className="text-[#fbbf24] text-[0.65rem]" />
                      <span>JWT AUTH & RBAC</span>
                    </div>
                    <div className="text-[0.68rem] text-slate-200 font-sans font-medium">
                      Role Verification
                    </div>
                  </div>

                  <div
                    className={`p-2.5 rounded-xs border transition-all duration-300 ${
                      activeStep === 1
                        ? 'border-[#38bdf8] bg-[#38bdf8]/10 shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                        : 'border-white/[0.06] bg-[#02050c]'
                    }`}
                  >
                    <div className="text-[0.58rem] text-slate-400 mb-0.5 flex items-center gap-1">
                      <FiServer className="text-[#38bdf8] text-[0.65rem]" />
                      <span>EXPRESS API</span>
                    </div>
                    <div className="text-[0.68rem] text-slate-200 font-sans font-medium">
                      REST & WebSockets
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-slate-600">
                  <span className={`text-[0.65rem] transition-colors ${activeStep === 2 ? 'text-[#38bdf8] font-bold' : ''}`}>↓</span>
                </div>

                {/* 3. Business Services & Domain Logic */}
                <div
                  className={`p-3 rounded-xs border transition-all duration-300 ${
                    activeStep === 2
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'border-white/[0.06] bg-[#02050c]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[0.62rem] text-slate-400 mb-1">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <span className={`h-1.5 w-1.5 rounded-full ${activeStep === 2 ? 'bg-[#38bdf8] animate-ping' : 'bg-slate-600'}`} />
                      03 // BUSINESS SERVICES & WORKFLOWS
                    </span>
                    <span className="text-[#fbbf24]">LOGIC ENGINE</span>
                  </div>
                  <div className="text-[0.72rem] text-slate-200 font-sans font-medium">
                    Incident Triage · Leave Approvals · Signal Evaluator
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-slate-600">
                  <span className={`text-[0.65rem] transition-colors ${activeStep === 3 ? 'text-[#38bdf8] font-bold' : ''}`}>↓</span>
                </div>

                {/* 4. Persistence & Cache Tier */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div
                    className={`p-2.5 rounded-xs border transition-all duration-300 ${
                      activeStep === 3
                        ? 'border-emerald-400 bg-emerald-400/10 shadow-[0_0_12px_rgba(52,211,153,0.15)]'
                        : 'border-white/[0.06] bg-[#02050c]'
                    }`}
                  >
                    <div className="text-[0.58rem] text-slate-400 mb-0.5 flex items-center gap-1">
                      <FiDatabase className="text-emerald-400 text-[0.65rem]" />
                      <span>DATABASE</span>
                    </div>
                    <div className="text-[0.68rem] text-slate-200 font-sans font-medium truncate">
                      MongoDB / PostgreSQL
                    </div>
                  </div>

                  <div
                    className={`p-2.5 rounded-xs border transition-all duration-300 ${
                      activeStep === 3
                        ? 'border-rose-400 bg-rose-400/10 shadow-[0_0_12px_rgba(248,113,113,0.15)]'
                        : 'border-white/[0.06] bg-[#02050c]'
                    }`}
                  >
                    <div className="text-[0.58rem] text-slate-400 mb-0.5 flex items-center gap-1">
                      <FiActivity className="text-rose-400 text-[0.65rem]" />
                      <span>CACHE & QUEUE</span>
                    </div>
                    <div className="text-[0.68rem] text-slate-200 font-sans font-medium">
                      Redis Event Sync
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center -my-1 text-slate-600">
                  <span className={`text-[0.65rem] transition-colors ${activeStep === 4 ? 'text-[#38bdf8] font-bold' : ''}`}>↓</span>
                </div>

                {/* 5. Cloud Deployment Tier */}
                <div
                  className={`p-3 rounded-xs border transition-all duration-300 ${
                    activeStep === 4
                      ? 'border-[#38bdf8] bg-[#38bdf8]/10 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'border-white/[0.06] bg-[#02050c]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[0.62rem] text-slate-400 mb-0.5">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <FiCloud className="text-[#38bdf8]" />
                      05 // CLOUD DEPLOYMENT
                    </span>
                    <span className="text-emerald-400">LIVE</span>
                  </div>
                  <div className="text-[0.72rem] text-slate-200 font-sans font-medium">
                    Render API Runtime + Vercel Edge Client
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[0.62rem] text-slate-500">
                <span className="text-slate-400">AUTH → API → DATA → DEPLOY</span>
                <span className="text-[#38bdf8] font-medium">STATUS: OPTIMAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
