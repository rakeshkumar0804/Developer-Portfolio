import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiDatabase, FiTool, FiBookOpen } from 'react-icons/fi';
import { skillsData } from '../data/portfolioData';

const skillIcons = {
  'Frontend Development': FiLayout,
  'Backend & APIs': FiServer,
  'Databases & Storage': FiDatabase,
  'Developer Tools': FiTool,
  'Core CS Fundamentals': FiBookOpen,
};

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
            Technical Skills & Proficiencies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Technologies, libraries, and computer science foundations I use to build robust full-stack software applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => {
            const Icon = skillIcons[group.category] || FiLayout;
            return (
              <motion.div
                key={group.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="card p-6 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-white/[0.06]">
                    <div className="h-8 w-8 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] text-sm shrink-0">
                      <Icon />
                    </div>
                    <h3 className="font-bold text-white font-sans text-sm sm:text-base">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-300 bg-[#090a0f] border border-white/[0.06] hover:border-[#38bdf8]/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
