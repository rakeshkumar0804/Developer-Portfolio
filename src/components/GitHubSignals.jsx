import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiActivity, FiFolder } from 'react-icons/fi';
import { githubSignals } from '../data/portfolioData';

export default function GitHubSignals() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="signals" className="py-20 relative border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs text-xs font-mono font-bold tracking-widest uppercase text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/25 mb-3">
            <span>03 / OPEN_SOURCE_SIGNALS</span>
          </div>
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
                Open Source <span className="text-[#38bdf8]">& Code Signals</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#94a3b8] font-sans">
                Real engineering signals, verified contributions, and active repositories from my GitHub workspace.
              </p>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-sky-500/30 bg-[#060e1c] text-[#38bdf8] font-mono text-xs hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 transition-all"
            >
              <FiGithub />
              <span>[ @rakeshkumar0804 ↗ ]</span>
            </a>
          </div>
        </motion.div>

        {/* Telemetry Stats & Language Distribution Bento */}
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
                className="blueprint-panel p-4 sm:p-5 rounded-xs border border-sky-500/20 bg-[#060e1c]/80 flex flex-col justify-between relative"
              >
                <div className="corner-bracket-tl" />
                <div className="corner-bracket-br" />
                <div className="text-[0.68rem] font-mono text-[#94a3b8] tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#f8fafc] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#fbbf24] font-semibold">
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
            className="lg:col-span-6 blueprint-panel p-5 sm:p-6 rounded-xs border border-sky-500/20 bg-[#060e1c]/80 flex flex-col justify-between relative"
          >
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sky-500/15 font-mono text-xs">
                <span className="text-[#38bdf8] font-bold flex items-center gap-1.5">
                  <FiActivity /> REPOSITORY_LANGUAGE_RATIO
                </span>
                <span className="text-[#94a3b8] text-[0.65rem]">4 RUNTIMES</span>
              </div>

              {/* Progress Multi-Color Bar */}
              <div className="h-2.5 w-full rounded-xs overflow-hidden flex mb-4 bg-[#030712] border border-sky-500/30 p-0.5">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full first:rounded-l-xs last:rounded-r-xs"
                  />
                ))}
              </div>

              {/* Language Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-[#f8fafc]">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="truncate text-xs">{lang.name}</span>
                    </div>
                    <span className="text-[0.65rem] text-[#94a3b8] mt-0.5 ml-3">
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
              className="blueprint-panel p-5 rounded-xs border border-sky-500/20 bg-[#060e1c]/80 flex flex-col justify-between group hover:border-sky-500/50 transition-all duration-150"
            >
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-sky-500/15 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-bold truncate">
                    <FiFolder className="text-[#38bdf8] shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#94a3b8] hover:text-[#38bdf8] p-1 shrink-0"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="text-xs text-[#94a3b8] font-sans leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              {/* Repo Footer Stats */}
              <div className="pt-2.5 border-t border-sky-500/15 flex items-center justify-between font-mono text-[0.65rem] text-[#94a3b8]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1 text-[#fbbf24]">
                    <FiStar className="text-xs" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FiGitBranch className="text-xs" />
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
