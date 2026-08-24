import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiClock } from 'react-icons/fi';
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
    <footer className="border-t border-sky-500/15 bg-[#030712] text-[#94a3b8] font-mono text-xs relative pb-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Spec */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="h-6 w-6 rounded-xs bg-[#060e1c] border border-[#38bdf8]/60 flex items-center justify-center font-bold text-xs text-[#38bdf8]">
                RK
              </div>
              <span className="font-sans font-bold text-sm text-[#f8fafc] tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed max-w-sm mb-4 font-sans">
              Full-Stack Web Developer building practical systems: auth, RBAC, dashboards, APIs, and real-time analytics.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-sky-500/20 bg-[#060e1c] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-sky-500/20 bg-[#060e1c] text-[#94a3b8] hover:text-[#60a5fa] hover:border-[#60a5fa] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-xs border border-sky-500/20 bg-[#060e1c] text-[#94a3b8] hover:text-[#fbbf24] hover:border-[#fbbf24] transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-1.5 rounded-xs border border-sky-500/20 bg-[#060e1c] text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-colors"
                aria-label="Email Address"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Subsystem Nav */}
          <div className="md:col-span-4 flex flex-col items-start font-mono text-xs">
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-[#38bdf8] mb-2.5">
              // TELEMETRY_NAV
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-[0.68rem]">
              <a href="#hero" className="hover:text-[#38bdf8] transition-colors">00_HERO</a>
              <a href="#principles" className="hover:text-[#38bdf8] transition-colors">01_PRINCIPLES</a>
              <a href="#systems" className="hover:text-[#38bdf8] transition-colors">02_SYSTEMS</a>
              <a href="#signals" className="hover:text-[#38bdf8] transition-colors">03_SIGNALS</a>
              <a href="#architect" className="hover:text-[#38bdf8] transition-colors">04_ARCHITECT</a>
              <a href="#subsystems" className="hover:text-[#38bdf8] transition-colors">05_SUBSYSTEMS</a>
              <a href="#recognition" className="hover:text-[#38bdf8] transition-colors">06_RECOGNITION</a>
              <a href="#comms" className="hover:text-[#38bdf8] transition-colors">07_COMMS</a>
            </div>
          </div>

          {/* System Telemetry & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end font-mono text-xs">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xs border border-sky-500/30 bg-[#060e1c] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#030712] mb-3 transition-all cursor-pointer text-xs"
            >
              <span>[ TOP_RETURN ↑ ]</span>
            </button>

            <div className="flex items-center gap-2 text-[#f8fafc]">
              <FiClock className="text-[#38bdf8]" />
              <span className="tabular-nums">{istTime} IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="mt-8 pt-3 border-t border-sky-500/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.62rem] text-[#64748b]">
          <div>
            © {new Date().getFullYear()} Rakesh Kumar · SYS_BUILD: v2.6-BLUEPRINT
          </div>
          <div>
            COORDINATES: 28.4595° N, 77.0266° E · GURUGRAM, IN
          </div>
        </div>
      </div>
    </footer>
  );
}
