import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart, FiClock } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();
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
    <footer
      className={`border-t transition-colors ${
        isDark ? 'border-white/[0.08] bg-slate-950/80 text-slate-400' : 'border-slate-200 bg-white text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-mono font-bold text-xs text-white shadow-sm">
                RK
              </div>
              <span className={`font-bold text-base tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs leading-relaxed max-w-sm mb-6">
              Full Stack Developer building clean, responsive, and high-performance web applications with modern architectures.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900 hover:text-white hover:border-indigo-400'
                    : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-400'
                }`}
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900 hover:text-sky-400 hover:border-sky-400'
                    : 'border-slate-200 bg-slate-50 hover:text-sky-600 hover:border-sky-400'
                }`}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900 hover:text-amber-400 hover:border-amber-400'
                    : 'border-slate-200 bg-slate-50 hover:text-amber-600 hover:border-amber-400'
                }`}
                aria-label="LeetCode Profile"
              >
                <SiLeetcode />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2 rounded-lg border transition-all ${
                  isDark
                    ? 'border-white/[0.08] bg-slate-900 hover:text-indigo-400 hover:border-indigo-400'
                    : 'border-slate-200 bg-slate-50 hover:text-indigo-600 hover:border-indigo-400'
                }`}
                aria-label="Send Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className={`text-xs font-mono font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              Navigation Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Tech Stack</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a>
              <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Resume</a>
            </div>
          </div>

          {/* Real-time Status */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium mb-4 transition-all ${
                isDark
                  ? 'border-white/[0.08] bg-slate-900 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span>Back to top</span>
              <FiArrowUp />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono">
              <FiClock className="text-indigo-400" />
              <span className="tabular-nums">{istTime} IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] font-mono ${
            isDark ? 'border-white/[0.06] text-slate-400' : 'border-slate-200 text-slate-600'
          }`}
        >
          <div>
            © {new Date().getFullYear()} Rakesh Kumar · All Rights Reserved
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed & Built with React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
