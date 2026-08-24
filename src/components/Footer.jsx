import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [istTime, setIstTime] = useState('--:--:--');

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
      setIstTime(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#030712] text-slate-500 font-mono text-xs relative pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Spec */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-5 rounded-xs bg-[#060e1c] border border-[#38bdf8]/40 flex items-center justify-center font-bold text-[0.6rem] text-[#38bdf8]">
                RK
              </div>
              <span className="font-sans font-bold text-sm text-[#f8fafc] tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4 font-sans">
              Full-Stack Web Developer building practical systems with authentication, RBAC, REST APIs, and analytics.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-white/[0.08] bg-[#060e1c] text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-white/[0.08] bg-[#060e1c] text-slate-400 hover:text-[#60a5fa] hover:border-[#60a5fa]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-white/[0.08] bg-[#060e1c] text-slate-400 hover:text-[#fbbf24] hover:border-[#fbbf24]/40 transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-1.5 rounded-xs border border-white/[0.08] bg-[#060e1c] text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
                aria-label="Email Address"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Nav & Telemetry */}
          <div className="md:col-span-6 flex flex-col md:items-end font-mono text-xs">
            <button
              onClick={scrollToTop}
              className="px-3 py-1 rounded-xs border border-white/[0.08] bg-[#060e1c] text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 mb-3 transition-colors cursor-pointer text-[0.68rem]"
            >
              Back to Top ↑
            </button>

            <div className="text-slate-400 text-xs">
              {istTime} IST
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-8 pt-3 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.6rem] text-slate-600">
          <div>
            © {new Date().getFullYear()} Rakesh Kumar · Built with React & Tailwind CSS
          </div>
          <div>
            Gurugram, Haryana, India
          </div>
        </div>
      </div>
    </footer>
  );
}
