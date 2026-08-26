import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.05, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="skills" className="py-16 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Terminal Header Prompt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="text-emerald-400 font-bold">$</span>
            <span>tree ./skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              custom={idx}
              variants={fadeInUp}
              className="p-5 rounded-lg border border-white/[0.1] bg-[#0d1117] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.06] text-xs">
                  <span className="text-[#38bdf8] font-bold">// {category.category}</span>
                  <span className="text-slate-500 text-[0.7rem]">{category.skills.length} items</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#161b22] border border-white/[0.08] text-xs text-slate-300 hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
