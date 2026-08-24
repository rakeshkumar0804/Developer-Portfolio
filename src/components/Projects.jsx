import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

export default function Projects() {
  const [activeStep, setActiveStep] = useState({});

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.08] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header with exact reference styling */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#f59e0b] font-mono tracking-tight">
                02
              </span>
              <span className="text-slate-500 font-mono text-xl">/</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                DEPLOYED SYSTEMS
              </h2>
            </div>
            <div className="font-mono text-xs text-slate-400 max-w-md">
              Self-assembling architecture schematics - drawn as you read.
            </div>
          </div>
        </div>

        {/* Project Rows */}
        <div className="space-y-32">
          {/* =========================================================================
              PROJECT 1: IncidentHub AI (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-01</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#38bdf8] flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  IncidentHub AI - Incident Intelligence Platform
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  FULL-STACK / INCIDENT INTELLIGENCE · INDEPENDENT BUILD
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  An engineering incident intelligence platform that correlates GitHub, Sentry, Slack, and Jira signals for evidence-backed root-cause analysis and AI-generated postmortems. Architected with multi-tenant RBAC, real-time WebSockets, and Redis caching.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">4+</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">INTEGRATIONS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">LIVE</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">WS SYNC</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points with small amber squares */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>OAuth integrations across GitHub, Sentry, Slack, and Jira webhooks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Multi-tenant RBAC with granular permissions and team isolation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Real-time WebSocket event triage rooms & automated AI postmortems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>PostgreSQL persistence layer with Redis caching for instant query resolution</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth', 'Docker'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/incidenthub-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://incidenthub-ai-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.1) */}
            <div className="lg:col-span-6">
              <div className="rounded-xs border border-white/[0.1] bg-[#060e1c]/90 p-5 font-mono shadow-2xl relative">
                {/* Schematic Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] text-[0.68rem] text-slate-400">
                  <span className="tracking-wider text-slate-300 font-semibold">FIG.1 - SYSTEM ARCHITECTURE</span>
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    STREAMING
                  </span>
                </div>

                {/* Blueprint Nodes Map */}
                <div className="grid grid-cols-12 gap-3 min-h-[260px] items-center relative py-2">
                  {/* Left Column Nodes */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#38bdf8]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Client UI</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">REACT 19 SPA</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-slate-300 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>OAuth / RBAC</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">SECURITY GUARD</div>
                    </div>
                  </div>

                  {/* Middle Column Gateway */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-3 rounded-xs border border-[#38bdf8] bg-[#0d1c33] text-[0.68rem] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                        <span>Node API</span>
                      </div>
                      <div className="text-slate-300 text-[0.6rem] mt-0.5">EXPRESS / WS</div>
                      <div className="mt-2 text-[0.55rem] text-[#38bdf8] border-t border-[#38bdf8]/30 pt-1 flex justify-between">
                        <span>ROUTE</span>
                        <span>TRIAGE</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.65rem] text-center">
                      <div className="text-[#f59e0b] font-bold">AI Postmortem</div>
                      <div className="text-slate-400 text-[0.58rem]">ROOT CAUSE</div>
                    </div>
                  </div>

                  {/* Right Column Stores */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#f59e0b]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                        <span>PostgreSQL</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">PRIMARY STORE</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-rose-500/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-rose-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        <span>Redis Cache</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">EVENT STREAM</div>
                    </div>
                  </div>
                </div>

                {/* Schematic Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.62rem] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    <FiRefreshCw className="text-[0.6rem]" />
                    <span>RECONSTRUCT BUILD HISTORY</span>
                  </div>
                  <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    SCRUB THE TIMELINE →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 2: LeaveFlow HR (Architecture Schematic LEFT, Details RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Architecture Schematic Panel (FIG.2) */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-xs border border-white/[0.1] bg-[#060e1c]/90 p-5 font-mono shadow-2xl relative">
                {/* Schematic Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] text-[0.68rem] text-slate-400">
                  <span className="tracking-wider text-slate-300 font-semibold">FIG.2 - SYSTEM ARCHITECTURE</span>
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    STREAMING
                  </span>
                </div>

                {/* Blueprint Nodes Map */}
                <div className="grid grid-cols-12 gap-3 min-h-[260px] items-center relative py-2">
                  {/* Left Column Nodes */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#38bdf8]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Employee UI</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">PORTAL / REQUEST</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-slate-300 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>Manager UI</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">APPROVAL QUEUE</div>
                    </div>
                  </div>

                  {/* Middle Column Services */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-3 rounded-xs border border-[#38bdf8] bg-[#0d1c33] text-[0.68rem] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Leave Engine</span>
                      </div>
                      <div className="text-slate-300 text-[0.6rem] mt-0.5">NODE / RBAC</div>
                      <div className="mt-2 text-[0.55rem] text-[#38bdf8] border-t border-[#38bdf8]/30 pt-1 flex justify-between">
                        <span>VALIDATE</span>
                        <span>DEDUCT</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.65rem] text-center">
                      <div className="text-[#38bdf8] font-bold">Admin Ops</div>
                      <div className="text-slate-400 text-[0.58rem]">ROSTER CONTROL</div>
                    </div>
                  </div>

                  {/* Right Column Stores */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#f59e0b]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                        <span>SQLite Store</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">AUDIT & RECORDS</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-emerald-500/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Analytics</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">BALANCE METRICS</div>
                    </div>
                  </div>
                </div>

                {/* Schematic Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.62rem] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    <FiRefreshCw className="text-[0.6rem]" />
                    <span>RECONSTRUCT BUILD HISTORY</span>
                  </div>
                  <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    SCRUB THE TIMELINE →
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-6 lg:order-2 flex flex-col justify-between">
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-02</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  LeaveFlow - Employee Leave Management System
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  HRMS / ROLE-BASED WORKFLOW · CORE BACKEND
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  A full-stack employee leave management system managing 3 role-isolated tiers (Employee, Manager, Admin). Includes automated balance validation at approval time, secure REST APIs, and SQLite audit logging.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">3</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">ROLES</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">100%</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">VALIDATED</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">6 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Employee, manager, and admin isolated portal workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Approval-time leave balance validation with automated audit deductions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>REST API backend with structured error handling & session auth</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>SQLite database and deployment-ready project structure</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['Node.js', 'Express.js', 'SQLite', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'RBAC'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/leaveflow-hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://leaveflow-hr-hvfh.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 3: PortfolioPulse (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-03</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  PortfolioPulse - Developer Portfolio Health Checker
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  CAREER INTELLIGENCE / GITHUB ANALYTICS · MERN APP
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  An evidence-based career intelligence platform that analyzes GitHub profiles, portfolio websites, and resumes to evaluate hiring readiness across ~20 recruiter-grade signals with actionable recommendations.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">20+</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">SIGNALS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">45</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>GitHub profile and repository commit regularity analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Portfolio SPA crawling via Puppeteer to test production performance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>ATS and recruiter-simulation scoring with tailored remediation advice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>MongoDB telemetry store tracking candidate progression scores</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'GitHub API', 'Puppeteer', 'JavaScript'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/dev-portfolio-checker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://developer-portfolio-nu-rouge.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.3) */}
            <div className="lg:col-span-6">
              <div className="rounded-xs border border-white/[0.1] bg-[#060e1c]/90 p-5 font-mono shadow-2xl relative">
                {/* Schematic Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] text-[0.68rem] text-slate-400">
                  <span className="tracking-wider text-slate-300 font-semibold">FIG.3 - SYSTEM ARCHITECTURE</span>
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    STREAMING
                  </span>
                </div>

                {/* Blueprint Nodes Map */}
                <div className="grid grid-cols-12 gap-3 min-h-[260px] items-center relative py-2">
                  {/* Left Column Nodes */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#38bdf8]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>User Input</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">HANDLE / URL</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-slate-300 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>Puppeteer</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">SPA CRAWLER</div>
                    </div>
                  </div>

                  {/* Middle Column Evaluator */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-3 rounded-xs border border-[#38bdf8] bg-[#0d1c33] text-[0.68rem] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Scoring Engine</span>
                      </div>
                      <div className="text-slate-300 text-[0.6rem] mt-0.5">20+ SIGNALS</div>
                      <div className="mt-2 text-[0.55rem] text-[#38bdf8] border-t border-[#38bdf8]/30 pt-1 flex justify-between">
                        <span>ANALYZE</span>
                        <span>ATS AUDIT</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.65rem] text-center">
                      <div className="text-[#f59e0b] font-bold">GitHub API</div>
                      <div className="text-slate-400 text-[0.58rem]">REPO SIGNALS</div>
                    </div>
                  </div>

                  {/* Right Column Stores */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#f59e0b]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                        <span>MongoDB</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">CANDIDATE LOGS</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-emerald-500/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Dashboard</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">SCORE REPORT</div>
                    </div>
                  </div>
                </div>

                {/* Schematic Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.62rem] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    <FiRefreshCw className="text-[0.6rem]" />
                    <span>RECONSTRUCT BUILD HISTORY</span>
                  </div>
                  <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    SCRUB THE TIMELINE →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 4: Kohli Analytics (Architecture Schematic LEFT, Details RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Architecture Schematic Panel (FIG.4) */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-xs border border-white/[0.1] bg-[#060e1c]/90 p-5 font-mono shadow-2xl relative">
                {/* Schematic Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] text-[0.68rem] text-slate-400">
                  <span className="tracking-wider text-slate-300 font-semibold">FIG.4 - SYSTEM ARCHITECTURE</span>
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    STREAMING
                  </span>
                </div>

                {/* Blueprint Nodes Map */}
                <div className="grid grid-cols-12 gap-3 min-h-[260px] items-center relative py-2">
                  {/* Left Column Nodes */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#38bdf8]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Match Logs</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">BALL-BY-BALL</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-slate-300 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>Data Parser</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">VECTOR ENGINE</div>
                    </div>
                  </div>

                  {/* Middle Column Computation */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-3 rounded-xs border border-[#38bdf8] bg-[#0d1c33] text-[0.68rem] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>D3.js Charts</span>
                      </div>
                      <div className="text-slate-300 text-[0.6rem] mt-0.5">VECTOR VIZ</div>
                      <div className="mt-2 text-[0.55rem] text-[#38bdf8] border-t border-[#38bdf8]/30 pt-1 flex justify-between">
                        <span>STRIKE RATE</span>
                        <span>HEATMAP</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.65rem] text-center">
                      <div className="text-indigo-400 font-bold">GSAP Motion</div>
                      <div className="text-slate-400 text-[0.58rem]">SCROLL STORY</div>
                    </div>
                  </div>

                  {/* Right Column Visualization */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#f59e0b]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                        <span>Pitch Map</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">COORDINATES</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-emerald-500/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Dashboard UI</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">RESPONSIVE VIZ</div>
                    </div>
                  </div>
                </div>

                {/* Schematic Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.62rem] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    <FiRefreshCw className="text-[0.6rem]" />
                    <span>RECONSTRUCT BUILD HISTORY</span>
                  </div>
                  <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    SCRUB THE TIMELINE →
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-6 lg:order-2 flex flex-col justify-between">
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-04</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  Kohli Analytics - Cricket Data Visualization
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  DATA VISUALIZATION / SPORTS ANALYTICS · D3.JS + GSAP
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  An interactive sports analytics platform transforming ball-by-ball cricket data into original metrics, pitch heatmaps, and cinematic visual storytelling with D3.js and GSAP scroll animations.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">26</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">D3.JS</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">CHARTS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Ball-by-ball cricket data transformed into custom statistical metrics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Custom D3.js vector visualizations & interactive pitch heatmaps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>GSAP-powered scroll animations and visual storytelling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Clean responsive dashboard experience with instant filtering</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/kohli-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://kohli-analytics.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 5: TaskFlow (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-05</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                {/* Big Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  TaskFlow - Real-Time Collaborative Task Board
                </h3>

                {/* Subtitle */}
                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  TASK MANAGEMENT / MERN APP · REAL-TIME SYSTEM
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  A modern full-stack task management application with JWT authentication, RBAC, project organization, and real-time state synchronization across team Kanban boards.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">9</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">RBAC</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">AUTH</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>JWT authentication and role-based task workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Project and task organization with priority indicators and due dates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Responsive team dashboard with instant activity audit logs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>MERN backend and frontend integration with MongoDB Atlas</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://github.com/rakeshkumar0804/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>View Project</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.5) */}
            <div className="lg:col-span-6">
              <div className="rounded-xs border border-white/[0.1] bg-[#060e1c]/90 p-5 font-mono shadow-2xl relative">
                {/* Schematic Titlebar */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.06] text-[0.68rem] text-slate-400">
                  <span className="tracking-wider text-slate-300 font-semibold">FIG.5 - SYSTEM ARCHITECTURE</span>
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    STREAMING
                  </span>
                </div>

                {/* Blueprint Nodes Map */}
                <div className="grid grid-cols-12 gap-3 min-h-[260px] items-center relative py-2">
                  {/* Left Column Nodes */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#38bdf8]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Kanban UI</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">REACT BOARD</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-slate-300 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span>JWT Auth</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">RBAC GUARD</div>
                    </div>
                  </div>

                  {/* Middle Column Gateway */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-3 rounded-xs border border-[#38bdf8] bg-[#0d1c33] text-[0.68rem] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                      <div className="flex items-center gap-1 text-[#38bdf8] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
                        <span>Express API</span>
                      </div>
                      <div className="text-slate-300 text-[0.6rem] mt-0.5">NODE GATEWAY</div>
                      <div className="mt-2 text-[0.55rem] text-[#38bdf8] border-t border-[#38bdf8]/30 pt-1 flex justify-between">
                        <span>PROJECT</span>
                        <span>TASK</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xs border border-white/[0.08] bg-[#090a0f] text-[0.65rem] text-center">
                      <div className="text-[#38bdf8] font-bold">Task Service</div>
                      <div className="text-slate-400 text-[0.58rem]">LANE OPS</div>
                    </div>
                  </div>

                  {/* Right Column Stores */}
                  <div className="col-span-4 space-y-4">
                    <div className="p-2.5 rounded-xs border border-[#f59e0b]/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                        <span>MongoDB</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">DOC STORE</div>
                    </div>

                    <div className="p-2.5 rounded-xs border border-emerald-500/40 bg-[#090a0f] text-[0.68rem]">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Sync Engine</span>
                      </div>
                      <div className="text-slate-400 text-[0.6rem] mt-0.5">LIVE AUDIT</div>
                    </div>
                  </div>
                </div>

                {/* Schematic Bottom Bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[0.62rem] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    <FiRefreshCw className="text-[0.6rem]" />
                    <span>RECONSTRUCT BUILD HISTORY</span>
                  </div>
                  <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
                    SCRUB THE TIMELINE →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
