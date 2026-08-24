import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiCheckCircle,
  FiTerminal,
  FiLayers,
} from 'react-icons/fi';
import { SiLeetcode, SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { personalInfo, heroStats } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const codeSnippets = {
  'App.tsx': `// Rakesh Kumar — Full Stack Developer
import { MERNStack, CleanArchitecture } from '@/core';

export const SoftwareEngineer = () => {
  const skills = ['React 19', 'Node.js', 'Express', 'MongoDB', 'TS'];
  const focus = 'Clean UI & Robust Microservices';
  
  return {
    status: 'Ready to build impactful web applications',
    available: true,
    hireMe: () => contact('rakeshchauhan6651@gmail.com')
  };
};`,
  'LeaveFlow.js': `// Employee Leave Management Core Engine
const handleLeaveApproval = async (req, res) => {
  const { leaveId, action, managerId } = req.body;
  const leave = await LeaveRequest.findById(leaveId);
  
  await leave.updateStatus(action, managerId);
  await auditLog.record({ leaveId, action, timestamp: Date.now() });
  
  return res.json({ success: true, status: leave.status });
};`,
  'IncidentTriage.ts': `// IncidentHub AI — Live Webhook Ingestion
export async function triageIncident(payload: WebhookEvent) {
  const priority = calculateSeverity(payload.level);
  const aiSummary = await gemini.summarize(payload.stack);
  
  socketServer.broadcast('incident:new', {
    id: payload.id,
    priority,
    aiSummary
  });
}`,
};

export default function Hero() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('App.tsx');

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Personal Brand, Headline, & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium w-fit mb-6 shadow-sm backdrop-blur-md transition-colors"
              style={{
                borderColor: isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.25)',
                backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                color: isDark ? '#A5B4FC' : '#4F46E5',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] font-sans"
            >
              <span className={isDark ? 'text-white' : 'text-slate-900'}>Hi, I'm </span>
              <span className="text-gradient-accent">{personalInfo.name}</span>
            </motion.h1>

            {/* Role & Headline */}
            <motion.h2
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className={`mt-4 text-xl sm:text-2xl font-semibold tracking-tight ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              {personalInfo.headline}
            </motion.h2>

            {/* Subhead / Bio */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-sans ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {personalInfo.subhead}
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <FiArrowRight className="text-base" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  isDark
                    ? 'border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-indigo-500/50 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-indigo-500/60'
                }`}
              >
                <FiMail className="text-indigo-400 text-base" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <FiDownload className="text-base" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Pill Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-8 flex items-center gap-2.5 flex-wrap"
            >
              <span className={`text-xs font-medium mr-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900/60 text-slate-300 hover:border-indigo-400 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:text-indigo-600 shadow-sm'
                }`}
              >
                <FiGithub />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900/60 text-slate-300 hover:border-indigo-400 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:text-indigo-600 shadow-sm'
                }`}
              >
                <FiLinkedin className="text-sky-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900/60 text-slate-300 hover:border-amber-400 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-amber-500 hover:text-amber-600 shadow-sm'
                }`}
              >
                <SiLeetcode className="text-amber-500" />
                <span>LeetCode</span>
              </a>
            </motion.div>

            {/* 4-Stat Metric Row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={7}
              variants={fadeInUp}
              className={`mt-10 pt-7 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 ${
                isDark ? 'border-white/[0.08]' : 'border-slate-200'
              }`}
            >
              {heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-gradient-accent">
                    {stat.value}
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {stat.label}
                  </div>
                  <div className={`text-[0.7rem] font-sans ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stat.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Workspace / IDE Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center w-full"
          >
            {/* Subtle Gradient Glow Behind Mockup */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 via-violet-500/10 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />

            {/* IDE Window Frame */}
            <div
              className={`w-full rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-colors ${
                isDark
                  ? 'bg-slate-900/90 border-white/[0.12] shadow-black/60'
                  : 'bg-white/95 border-slate-200 shadow-xl'
              }`}
            >
              {/* Window Titlebar */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b text-xs select-none ${
                  isDark ? 'bg-slate-950/70 border-white/[0.08]' : 'bg-slate-100 border-slate-200'
                }`}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/90 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/90 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/90 inline-block" />
                </div>

                <div className={`font-mono text-[0.7rem] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  rakesh-workspace · {activeTab}
                </div>

                <div className="flex items-center gap-1 text-[0.68rem] text-emerald-500 font-mono font-semibold">
                  <FiCheckCircle className="text-xs" />
                  <span>Ready</span>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div
                className={`flex items-center gap-1 px-3 pt-2 border-b overflow-x-auto text-xs font-mono ${
                  isDark ? 'bg-slate-950/40 border-white/[0.06]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                {Object.keys(codeSnippets).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all ${
                        isActive
                          ? isDark
                            ? 'bg-slate-900 text-indigo-400 border-t-2 border-indigo-500 font-semibold'
                            : 'bg-white text-indigo-600 border-t-2 border-indigo-600 font-semibold shadow-sm'
                          : isDark
                          ? 'text-slate-400 hover:text-slate-200'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <FiCode className="text-xs" />
                      <span>{tab}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-[0.75rem] sm:text-[0.8rem] leading-relaxed overflow-x-auto min-h-[220px]">
                <pre className={isDark ? 'text-slate-300' : 'text-slate-800'}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Mockup Status Bar Footer */}
              <div
                className={`flex items-center justify-between px-4 py-2 border-t text-[0.68rem] font-mono select-none ${
                  isDark ? 'bg-slate-950/80 border-white/[0.08] text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 font-semibold flex items-center gap-1">
                    <FiLayers className="text-xs" /> MERN Stack
                  </span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Lint: 0 Errors</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Stack Pills */}
            <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border shadow-xl backdrop-blur-xl bg-slate-900/90 border-white/[0.12] text-xs font-mono text-white">
              <SiReact className="text-[#61DAFB] text-base" />
              <SiNodedotjs className="text-[#339933] text-base" />
              <SiMongodb className="text-[#47A248] text-base" />
              <SiTypescript className="text-[#3178C6] text-base" />
              <SiTailwindcss className="text-[#06B6D4] text-base" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
