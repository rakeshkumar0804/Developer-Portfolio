import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiServer, FiDatabase, FiShield, FiLayers } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('api');

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
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium text-emerald-400 w-fit mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time SDE & Intern Roles</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="text-lg sm:text-xl font-semibold text-[#38bdf8] mt-2 mb-4 font-sans"
            >
              {personalInfo.role}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug max-w-2xl font-sans"
            >
              {personalInfo.headline}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-400 max-w-xl font-sans"
            >
              {personalInfo.description}
            </motion.p>

            {/* 3 CTA Buttons (No project cards here) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/10"
              >
                <span>View Projects</span>
                <FiArrowDown className="text-sm" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/[0.15] bg-[#131622] hover:border-[#38bdf8]/50 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all"
              >
                <FiDownload className="text-sm text-[#38bdf8]" />
                <span>Download Resume</span>
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

          {/* Right Column: Refined, Compact Product Engineering Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <div className="w-full rounded-xl border border-white/[0.08] bg-[#131622]/90 backdrop-blur-xl shadow-2xl p-5 relative overflow-hidden">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">system-pipeline.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[0.7rem] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>HEALTH: 100%</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex items-center gap-1 bg-[#090a0f] p-1 rounded-lg mb-4 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('api')}
                  className={`flex-1 py-1.5 rounded-md transition-all text-center ${
                    activeTab === 'api'
                      ? 'bg-[#1a1d2e] text-[#38bdf8] font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  API Pipeline
                </button>
                <button
                  onClick={() => setActiveTab('rbac')}
                  className={`flex-1 py-1.5 rounded-md transition-all text-center ${
                    activeTab === 'rbac'
                      ? 'bg-[#1a1d2e] text-[#38bdf8] font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  RBAC Matrix
                </button>
                <button
                  onClick={() => setActiveTab('status')}
                  className={`flex-1 py-1.5 rounded-md transition-all text-center ${
                    activeTab === 'status'
                      ? 'bg-[#1a1d2e] text-[#38bdf8] font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Live Status
                </button>
              </div>

              {/* Tab 1: API Pipeline Flow */}
              {activeTab === 'api' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                    <div className="flex items-center justify-between text-slate-400 text-[0.7rem] mb-1">
                      <span className="text-emerald-400 font-bold">POST</span>
                      <span className="text-slate-300">/api/v1/auth/login</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <div className="text-[0.75rem] text-slate-300 font-sans">
                      JWT payload generated with verified user permissions
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                    <div className="flex items-center justify-between text-slate-400 text-[0.7rem] mb-1">
                      <span className="text-sky-400 font-bold">GET</span>
                      <span className="text-slate-300">/api/v1/leaves/dashboard</span>
                      <span className="text-emerald-400">200 OK</span>
                    </div>
                    <div className="text-[0.75rem] text-slate-300 font-sans">
                      Role-restricted query (Employee, Manager, Admin)
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#090a0f] border border-white/[0.04]">
                    <div className="flex items-center justify-between text-slate-400 text-[0.7rem] mb-1">
                      <span className="text-amber-400 font-bold">WS</span>
                      <span className="text-slate-300">/ws/incident-triage</span>
                      <span className="text-emerald-400">CONNECTED</span>
                    </div>
                    <div className="text-[0.75rem] text-slate-300 font-sans">
                      Real-time webhook sync across GitHub & Sentry signals
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: RBAC Matrix */}
              {activeTab === 'rbac' && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiShield className="text-[#38bdf8]" />
                      <span className="text-slate-200">Admin Role</span>
                    </div>
                    <span className="text-[0.7rem] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      FULL_CRUD_ACCESS
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiShield className="text-amber-400" />
                      <span className="text-slate-200">Manager Role</span>
                    </div>
                    <span className="text-[0.7rem] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      APPROVE_REJECT_ONLY
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiShield className="text-slate-400" />
                      <span className="text-slate-200">Employee Role</span>
                    </div>
                    <span className="text-[0.7rem] text-slate-300 bg-white/[0.05] px-2 py-0.5 rounded">
                      SUBMIT_VIEW_SELF
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 3: Live Status */}
              {activeTab === 'status' && (
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <FiServer className="text-[#38bdf8]" />
                      <span>Node.js / Express Gateway</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">14ms Latency</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <FiDatabase className="text-emerald-400" />
                      <span>MongoDB Atlas / PostgreSQL</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">Connected</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#090a0f] border border-white/[0.04] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-300">
                      <FiLayers className="text-indigo-400" />
                      <span>Render & Vercel Deploy</span>
                    </div>
                    <span className="text-emerald-400 font-semibold">Active // TLS</span>
                  </div>
                </div>
              )}

              {/* Console Footer */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.7rem] font-mono text-slate-400">
                <span>Architecture: MERN + RBAC</span>
                <span className="text-slate-300">Production Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
