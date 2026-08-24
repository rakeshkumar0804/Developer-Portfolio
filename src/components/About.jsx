import React from 'react';
import { motion } from 'framer-motion';
import {
  FiUser,
  FiCode,
  FiTerminal,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
  FiAward,
  FiGlobe,
  FiCalendar,
} from 'react-icons/fi';
import { personalInfo, aboutHighlights } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FiCode className="text-indigo-400 text-xl" />;
      case 'terminal':
        return <FiTerminal className="text-amber-400 text-xl" />;
      case 'briefcase':
        return <FiBriefcase className="text-emerald-400 text-xl" />;
      case 'user-check':
        return <FiCheckCircle className="text-sky-400 text-xl" />;
      default:
        return <FiUser className="text-indigo-400 text-xl" />;
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Passionate about engineering </span>
            <span className="text-gradient-accent">reliable web systems</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A closer look at my engineering mindset, academic background, and what drives my software development work.
          </p>
        </motion.div>

        {/* Top Story & Quick Details Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            <div
              className={`p-7 sm:p-8 rounded-2xl border backdrop-blur-xl ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 font-sans ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Hi, I'm Rakesh Kumar — Full Stack Developer
              </h3>
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <p>
                  I am a Computer Science Engineering graduate (Class of 2026) from Parul University, currently based in Gurugram, India. My journey in software engineering revolves around building full-stack web applications with modern frameworks, reliable database schemas, and clean user interfaces.
                </p>
                <p>
                  During my internship as a Web Development Intern at <span className="font-semibold text-indigo-400">Codetech IT Solutions</span>, I designed and deployed an internal Employee Management System with Node.js, Express, MongoDB, and JWT authentication with Role-Based Access Control (RBAC).
                </p>
                <p>
                  Beyond web development, I am an active algorithmic problem solver with <span className="font-semibold text-amber-400">165+ LeetCode problems solved</span> across Trees, Graphs, and Dynamic Programming. I take pride in writing readable, maintainable, and defensive code that stands up to production demands.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Profile Matrix */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <div
              className={`p-7 rounded-2xl border backdrop-blur-xl h-full flex flex-col justify-between ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider font-mono mb-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  Quick Facts & Verification
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-indigo-400 text-lg mt-0.5 shrink-0" />
                    <div>
                      <div className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Location</div>
                      <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{personalInfo.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiAward className="text-amber-400 text-lg mt-0.5 shrink-0" />
                    <div>
                      <div className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Education</div>
                      <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        B.Tech in CSE · Parul University (2022–2026)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiGlobe className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                    <div>
                      <div className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Core Stack</div>
                      <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        React.js, Node.js, Express, MongoDB, TypeScript, SQL
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiCalendar className="text-sky-400 text-lg mt-0.5 shrink-0" />
                    <div>
                      <div className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Availability</div>
                      <div className="text-xs text-emerald-400 font-semibold">Immediate Joiner · Open for Roles</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`mt-6 pt-5 border-t flex items-center justify-between text-xs font-mono ${isDark ? 'border-white/[0.08] text-slate-400' : 'border-slate-200 text-slate-600'}`}>
                <span>LeetCode: 165+ Solved</span>
                <span className="text-indigo-400 font-semibold">HackerRank SQL Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Highlight Cards Bento Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-800 border-white/[0.08]' : 'bg-slate-100 border-slate-200'}`}>
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[0.68rem] font-mono font-semibold uppercase tracking-wider text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">
                    {item.tag}
                  </span>
                </div>
                <h4 className={`text-base font-bold mb-2 font-sans ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
