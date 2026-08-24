import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import { githubSignals } from '../data/portfolioData';

export default function GitHubSignals() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="signals" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-mono text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-3 tracking-widest uppercase">
            <span>03 / OPEN_SOURCE_SIGNALS</span>
          </div>
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
                Open Source Signals
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-xl">
                Active repositories, contribution streaks, and verified language breakdowns from my GitHub engineering profile.
              </p>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-white/[0.12] bg-[#060e1c] text-slate-300 font-mono text-xs hover:border-[#38bdf8]/40 hover:text-[#38bdf8] transition-all"
            >
              <FiGithub />
              <span>@rakeshkumar0804</span>
            </a>
          </div>
        </motion.div>

        {/* 4 Stats & Language Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* 4 Stat Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 grid grid-cols-2 gap-3.5"
          >
            {githubSignals.stats.map((stat, i) => (
              <div
                key={i}
                className="blueprint-card p-5 rounded-xs flex flex-col justify-between"
              >
                <div className="text-[0.65rem] font-mono text-slate-400 tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-[#f8fafc]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#fbbf24]">
                    {stat.unit}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Language Breakdown */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 blueprint-card p-6 rounded-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.05] font-mono text-xs text-slate-400">
                <span>LANGUAGE RATIO</span>
                <span className="text-[0.65rem]">4 RUNTIMES</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full rounded-xs overflow-hidden flex mb-4 bg-[#02050c] p-0.5">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full first:rounded-l-xs last:rounded-r-xs opacity-90"
                  />
                ))}
              </div>

              {/* Language Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="truncate text-xs">{lang.name}</span>
                    </div>
                    <span className="text-[0.65rem] text-slate-500 mt-0.5 ml-3">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubSignals.pinnedRepos.map((repo, rIdx) => (
            <motion.div
              key={repo.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: rIdx * 0.06 }}
              className="blueprint-card p-5 rounded-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.05] font-mono text-xs">
                  <span className="font-semibold text-slate-200 truncate">{repo.name}</span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-[#38bdf8] p-0.5 shrink-0"
                    aria-label={`Open repo ${repo.name}`}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-2.5 border-t border-white/[0.05] flex items-center justify-between font-mono text-[0.62rem] text-slate-500">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1 text-[#fbbf24]">
                    <FiStar className="text-[0.65rem]" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <FiGitBranch className="text-[0.65rem]" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
