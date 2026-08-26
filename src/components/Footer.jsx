import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0e14] text-slate-400 text-xs font-mono relative py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="font-bold text-sm text-white tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[0.7rem] text-[#38bdf8]">[SDE Candidate]</span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-sm">
              B.Tech CSE Graduate (2026) & Full-Stack Developer seeking SDE roles.
            </p>
          </div>

          {/* Social Links & Resume */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#22d3ee]/40 bg-[#22d3ee]/10 text-[#22d3ee] hover:bg-[#22d3ee] hover:text-[#0a0e14] transition-all text-xs font-bold"
            >
              <FiFileText className="text-xs" />
              <span>resume.pdf</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-xs" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-xs" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="text-xs" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="Email"
            >
              <FiMail className="text-xs" />
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors cursor-pointer text-xs"
            >
              <span>^top</span>
              <FiArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Copyright & Terminal Prompt */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[0.75rem]">
          <div>
            © {new Date().getFullYear()} Rakesh Kumar · Built with React & Tailwind CSS
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-mono">
            <span>exit 0</span>
            <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
