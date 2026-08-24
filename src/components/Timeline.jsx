import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiExternalLink, FiMapPin, FiCalendar } from 'react-icons/fi';
import { timeline, certifications } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Timeline() {
  const { isDark } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="experience" className="py-24 relative">
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
            <span>Career & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>My Journey & </span>
            <span className="text-gradient-accent">Credentials</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A verified timeline of my engineering internship experience, university education, and industry certifications.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/30 space-y-12 max-w-4xl mb-20">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Connector Pulse Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                  isDark
                    ? 'border-indigo-500 bg-slate-950 group-hover:bg-indigo-500 group-hover:shadow-[0_0_12px_#6366F1]'
                    : 'border-indigo-600 bg-white group-hover:bg-indigo-600 group-hover:shadow-[0_0_12px_#6366F1]'
                }`}
              />

              {/* Timeline Card */}
              <div
                className={`p-7 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-lg'
                    : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-md'
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400">
                      {item.period}
                    </span>
                    <span className={`text-xs font-mono flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <FiMapPin className="text-xs" /> {item.location}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    {item.type === 'experience' ? '● Verified Internship' : '● B.Tech CSE Graduate'}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className={`text-xl sm:text-2xl font-bold font-sans ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <h4 className="text-sm font-semibold text-indigo-400 mt-1 mb-4 font-sans">
                  {item.organization}
                </h4>

                {/* Narrative */}
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {item.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                        isDark
                          ? 'bg-slate-950/60 border border-white/[0.06] text-slate-300'
                          : 'bg-slate-100 border border-slate-200 text-slate-800'
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Certifications Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <FiAward className="text-sm" />
            <span>Verified Certifications & Competitions</span>
          </div>
          <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            Industry Credentials
          </h3>
        </motion.div>

        {/* Certifications 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: cIdx * 0.1 }}
              className={`p-6 rounded-2xl border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-lg'
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {cert.date}
                  </span>
                </div>

                <h4
                  className={`text-lg font-bold font-sans flex items-center justify-between gap-2 group-hover:text-indigo-400 transition-colors ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  <span>{cert.title}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-400 p-1"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <FiExternalLink className="text-base" />
                    </a>
                  )}
                </h4>

                <div className={`text-xs font-medium mt-1 mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Issued by <span className="font-semibold">{cert.issuer}</span>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
