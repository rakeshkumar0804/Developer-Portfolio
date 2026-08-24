import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTerminal, FiClock } from 'react-icons/fi';
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
    <footer className="border-t border-[#50aaff]/20 bg-[#020712] text-[#8aa4bf] font-mono text-xs relative pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Spec */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-7 w-7 rounded-sm bg-[#06101f] border border-[#38cfff]/60 flex items-center justify-center font-bold text-xs text-[#38cfff]">
                RK
              </div>
              <span className="font-sans font-bold text-base text-[#e6f1ff] tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-[#8aa4bf] leading-relaxed max-w-sm mb-5 font-sans">
              Full-Stack Web Developer building role-based systems, secure REST APIs, and responsive React web experiences.
            </p>

            {/* Social Uplinks */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-sm border border-[#50aaff]/25 bg-[#06101f] text-[#8aa4bf] hover:text-[#38cfff] hover:border-[#38cfff] transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-sm border border-[#50aaff]/25 bg-[#06101f] text-[#8aa4bf] hover:text-[#5fa8ff] hover:border-[#5fa8ff] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-sm border border-[#50aaff]/25 bg-[#06101f] text-[#8aa4bf] hover:text-[#ffb23f] hover:border-[#ffb23f] transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-sm border border-[#50aaff]/25 bg-[#06101f] text-[#8aa4bf] hover:text-[#38cfff] hover:border-[#38cfff] transition-colors"
                aria-label="Email Address"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Subsystem Nav */}
          <div className="md:col-span-4 flex flex-col items-start font-mono text-xs">
            <h4 className="text-[0.68rem] font-bold uppercase tracking-wider text-[#38cfff] mb-3">
              // TELEMETRY_NAV
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[0.7rem]">
              <a href="#hero" className="hover:text-[#38cfff] transition-colors">01_CORE</a>
              <a href="#principles" className="hover:text-[#38cfff] transition-colors">02_PRINCIPLES</a>
              <a href="#systems" className="hover:text-[#38cfff] transition-colors">03_SYSTEMS</a>
              <a href="#signals" className="hover:text-[#38cfff] transition-colors">04_SIGNALS</a>
              <a href="#architect" className="hover:text-[#38cfff] transition-colors">05_ARCHITECT</a>
              <a href="#subsystems" className="hover:text-[#38cfff] transition-colors">06_SUBSYSTEMS</a>
              <a href="#comms" className="hover:text-[#38cfff] transition-colors">07_COMMS</a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-[#ffb23f] transition-colors">RESUME_ARCHIVE</a>
            </div>
          </div>

          {/* System Telemetry & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end font-mono text-xs">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#50aaff]/30 bg-[#06101f] text-[#38cfff] hover:bg-[#38cfff] hover:text-[#020712] mb-3 transition-all cursor-pointer"
            >
              <span>[ TOP_RETURN ↑ ]</span>
            </button>

            <div className="flex items-center gap-2 text-[#e6f1ff]">
              <FiClock className="text-[#38cfff]" />
              <span className="tabular-nums">{istTime} IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Baseline */}
        <div className="mt-10 pt-4 border-t border-[#50aaff]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.65rem] text-[#536d88]">
          <div>
            © {new Date().getFullYear()} Rakesh Kumar · SYS_BUILD: v2.6-PRODUCTION
          </div>
          <div>
            COORDINATES: 28.4595° N, 77.0266° E · GURUGRAM / IN
          </div>
        </div>
      </div>
    </footer>
  );
}
