import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiServer, FiBriefcase } from 'react-icons/fi';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const highlightIcons = [FiAward, FiCode, FiServer, FiBriefcase];

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Engineering Background & Philosophy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-4 text-slate-300 text-base leading-relaxed font-sans"
          >
            <p className="text-lg font-medium text-slate-100 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              My engineering journey combines rigorous computer science fundamentals from Parul University with real-world internship experience at Codetech IT Solutions. I prioritize maintainable architectures, well-structured database schemas, robust error handling, and clean code over unnecessary complexity.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether building multi-tenant incident triage pipelines with OAuth integrations, enterprise leave portals with multi-step approval workflows, or developer profile auditors, I focus on delivering reliable, production-ready software that solves real user problems.
            </p>
          </motion.div>

          {/* Right: 4 Structured Highlight Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item, idx) => {
              const Icon = highlightIcons[idx] || FiCode;
              return (
                <div
                  key={idx}
                  className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-9 w-9 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] text-base mb-3.5">
                      <Icon />
                    </div>
                    <h3 className="text-base font-bold text-white font-sans mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-[#38bdf8] mb-2 font-medium">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
