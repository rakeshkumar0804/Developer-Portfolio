import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiLinux,
  SiJsonwebtokens,
  SiSocketdotio,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { skillCategories } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const iconMap = {
  SiReact: SiReact,
  SiTypescript: SiTypescript,
  SiJavascript: SiJavascript,
  SiTailwindcss: SiTailwindcss,
  SiNextdotjs: SiNextdotjs,
  SiHtml5: SiHtml5,
  FaCss3Alt: FaCss3Alt,
  SiRedux: SiRedux,
  SiFramer: SiFramer,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiPostgresql: SiPostgresql,
  SiMysql: SiMysql,
  SiRedis: SiRedis,
  SiPrisma: SiPrisma,
  SiGit: SiGit,
  SiGithub: SiGithub,
  SiDocker: SiDocker,
  SiPostman: SiPostman,
  VscCode: VscCode,
  SiVercel: SiVercel,
  SiLinux: SiLinux,
  SiJsonwebtokens: SiJsonwebtokens,
  SiSocketdotio: SiSocketdotio,
};

export default function Skills() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Advanced':
        return isDark
          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
          : 'bg-emerald-50 text-emerald-700 border-emerald-300';
      case 'Intermediate':
        return isDark
          ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
          : 'bg-indigo-50 text-indigo-700 border-indigo-300';
      default:
        return isDark
          ? 'bg-slate-700/30 text-slate-400 border-slate-700'
          : 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>My Developer </span>
            <span className="text-gradient-accent">Tech Stack</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Technologies, frameworks, databases, and tooling I use to architect, build, and ship production applications.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & APIs' },
            { id: 'database', label: 'Databases' },
            { id: 'tools', label: 'Tools & DevOps' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isDark
                    ? 'bg-slate-900/60 border border-white/[0.08] text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: catIdx * 0.1 }}
              className={`p-7 rounded-2xl border backdrop-blur-xl flex flex-col justify-between ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                  <div>
                    <h3 className={`text-lg font-bold font-sans ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {category.title}
                    </h3>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
                    {category.skills.length} Techs
                  </span>
                </div>

                {/* Skills Chips Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || SiReact;
                    return (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border flex items-center justify-between gap-2 group transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? 'bg-slate-950/50 border-white/[0.06] hover:border-indigo-500/40 hover:bg-slate-800/80'
                            : 'bg-slate-50 border-slate-200 hover:border-indigo-500/50 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <IconComponent
                            className="text-lg shrink-0 transition-transform group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                          <span
                            className={`text-xs font-medium truncate ${
                              isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800'
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>

                        <span
                          className={`text-[0.62rem] font-mono font-semibold px-2 py-0.5 rounded-full border shrink-0 ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
