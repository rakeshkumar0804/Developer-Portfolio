import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiActivity, FiFolder } from 'react-icons/fi';
import { githubSignals } from '../data/portfolioData';

export default function GitHubSignals() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="signals" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#38cfff] bg-[#38cfff]/10 border border-[#38cfff]/30 mb-3">
            <span>04 // GITHUB_SIGNALS</span>
          </div>
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
                Open Source <span className="text-[#38cfff]">& Code Signals</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#8aa4bf] font-sans">
                Real engineering signals, verified contributions, and active repositories from my GitHub workspace.
              </p>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-sm border border-[#50aaff]/30 bg-[#06101f] text-[#38cfff] font-mono text-xs hover:border-[#38cfff] hover:bg-[#38cfff]/10 transition-all"
            >
              <FiGithub />
              <span>[ @rakeshkumar0804 ↗ ]</span>
            </a>
          </div>
        </motion.div>

        {/* Telemetry Stats & Language Distribution Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 mb-10">
          {/* 4 Stat Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {githubSignals.stats.map((stat, i) => (
              <div
                key={i}
                className="hud-panel p-5 rounded-sm border border-[#50aaff]/20 bg-[#06101f]/80 flex flex-col justify-between relative"
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />
                <div className="text-xs font-mono text-[#8aa4bf] tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-black font-mono text-[#e6f1ff] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-[#ffb23f] font-semibold">
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
            className="lg:col-span-6 hud-panel p-6 rounded-sm border border-[#50aaff]/20 bg-[#06101f]/80 flex flex-col justify-between relative"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#50aaff]/15 font-mono text-xs">
                <span className="text-[#38cfff] font-bold flex items-center gap-1.5">
                  <FiActivity /> REPOSITORY_LANGUAGE_RATIO
                </span>
                <span className="text-[#8aa4bf]">4 PRINCIPAL RUNTIMES</span>
              </div>

              {/* Progress Multi-Color Bar */}
              <div className="h-3 w-full rounded-sm overflow-hidden flex mb-5 bg-[#020712] border border-[#50aaff]/30 p-0.5">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full first:rounded-l-sm last:rounded-r-sm"
                  />
                ))}
              </div>

              {/* Language Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {githubSignals.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex flex-col font-mono text-xs">
                    <div className="flex items-center gap-1.5 text-[#e6f1ff]">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="truncate">{lang.name}</span>
                    </div>
                    <span className="text-[0.68rem] text-[#8aa4bf] mt-0.5 ml-3.5">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubSignals.pinnedRepos.map((repo, rIdx) => (
            <motion.div
              key={repo.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: rIdx * 0.08 }}
              className="hud-panel p-6 rounded-sm border border-[#50aaff]/20 bg-[#06101f]/80 flex flex-col justify-between group hover:border-[#38cfff]/50 transition-all duration-200"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                {/* Repo Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#50aaff]/15 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#e6f1ff] font-bold truncate">
                    <FiFolder className="text-[#38cfff] shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8aa4bf] hover:text-[#38cfff] p-1 shrink-0"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="text-xs text-[#8aa4bf] font-sans leading-relaxed mb-6">
                  {repo.desc}
                </p>
              </div>

              {/* Repo Footer Stats */}
              <div className="pt-3 border-t border-[#50aaff]/15 flex items-center justify-between font-mono text-[0.68rem] text-[#8aa4bf]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#ffb23f]">
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
