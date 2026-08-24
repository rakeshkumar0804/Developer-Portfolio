import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function CTASection() {
  const { isDark } = useTheme();

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
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`relative rounded-3xl p-8 sm:p-12 md:p-16 border overflow-hidden backdrop-blur-2xl ${
            isDark
              ? 'bg-gradient-to-br from-indigo-950/50 via-slate-900/80 to-slate-900/90 border-indigo-500/30 shadow-2xl shadow-indigo-500/10'
              : 'bg-gradient-to-br from-indigo-50 via-white to-slate-50 border-indigo-200 shadow-xl'
          }`}
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <span>Looking for Engineering Talent?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>
                Let's build something{' '}
              </span>
              <span className="text-gradient-accent">useful & scalable together</span>
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              I am actively interviewing for Full Stack Developer, Frontend Engineer, and Software Development Intern roles. Ready to write clean code, solve complex engineering problems, and deliver production value from Day 1.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Contact Me / Hire</span>
                <FiArrowRight className="text-base" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  isDark
                    ? 'border-white/[0.12] bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-indigo-400'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                }`}
              >
                <FiDownload className="text-indigo-400 text-base" />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <FiGithub className="text-base" />
                <span>View GitHub Repos</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
