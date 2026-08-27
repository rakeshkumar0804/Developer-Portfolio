import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-slate-800/80 px-8 py-5 max-w-7xl mx-auto w-full font-mono text-xs text-slate-400 relative z-20 pb-12 sm:pb-14">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="font-bold text-sm text-slate-100 tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-[0.7rem] text-cyan-400">[SDE Candidate]</span>
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 transition-all text-xs font-semibold shadow-[0_0_8px_rgba(56,189,248,0.15)] cursor-pointer"
          >
            <FiFileText className="text-xs" />
            <span>resume.pdf</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub Profile"
          >
            <FiGithub className="text-xs" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="text-xs" />
          </a>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode className="text-xs" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg border border-slate-800 bg-[#060a12] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="Email"
          >
            <FiMail className="text-xs" />
          </a>
        </div>
      </div>

      {/* Copyright & Terminal Prompt */}
      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[0.75rem]">
        <div>
          © {new Date().getFullYear()} Rakesh Kumar · Built with React & Tailwind CSS
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-mono">
          <span>exit 0</span>
          <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
