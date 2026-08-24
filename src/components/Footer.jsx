import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#090a0f] text-slate-400 text-xs relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="h-7 w-7 rounded-lg bg-[#131622] border border-[#38bdf8]/40 flex items-center justify-center font-mono font-bold text-xs text-[#38bdf8]">
                RK
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Full-Stack Web Developer & MERN Stack Engineer · Building real-world product workflows.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-[#131622] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub className="text-sm" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-[#131622] text-slate-300 hover:text-indigo-400 hover:border-indigo-400/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="text-sm" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.08] bg-[#131622] text-slate-300 hover:text-[#f59e0b] hover:border-[#f59e0b]/40 transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode className="text-sm" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg border border-white/[0.08] bg-[#131622] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              aria-label="Email"
            >
              <FiMail className="text-sm" />
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/[0.08] bg-[#131622] text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors cursor-pointer text-xs font-medium"
            >
              <span>Back to Top</span>
              <FiArrowUp className="text-xs" />
            </button>
          </div>
        </div>

        {/* Copyright Baseline */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs">
          <div>
            © {new Date().getFullYear()} Rakesh Kumar. Built with React, Tailwind CSS & Vite.
          </div>
          <div>
            Gurugram, Haryana, India
          </div>
        </div>
      </div>
    </footer>
  );
}
