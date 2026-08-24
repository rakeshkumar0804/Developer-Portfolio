import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import { githubActivity } from '../data/portfolioData';

export default function GitHubActivity() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="activity" className="py-24 relative border-t border-white/[0.08]">
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
            // Open Source
          </span>
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                GitHub & Coding Activity
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
                Verified repository signals, contribution regularity, and language distribution across my GitHub repositories.
              </p>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.1] bg-[#131622] text-xs font-medium text-slate-200 hover:border-[#38bdf8]/40 hover:text-white transition-all shadow-sm"
            >
              <FiGithub className="text-sm text-[#38bdf8]" />
              <span>@rakeshkumar0804</span>
            </a>
          </div>
        </motion.div>

        {/* Top Bento: 4 Stat Tiles + Language Ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* 4 Stat Metrics */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            {githubActivity.stats.map((stat, i) => (
              <div
                key={i}
                className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between"
              >
                <div className="text-xs font-medium text-slate-400 mb-2 font-sans">
                  {stat.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {stat.value}
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
            className="lg:col-span-6 premium-card p-6 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-semibold text-slate-300">
                <span>Top Languages</span>
                <span className="font-mono text-slate-500">4 Runtimes</span>
              </div>

              {/* Progress Multi-Color Bar */}
              <div className="h-2.5 w-full rounded-full overflow-hidden flex mb-5 bg-[#090a0f] p-0.5">
                {githubActivity.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full first:rounded-l-full last:rounded-r-full"
                  />
                ))}
              </div>

              {/* Language Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                {githubActivity.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-slate-200">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="truncate text-xs font-medium">{lang.name}</span>
                    </div>
                    <span className="text-[0.7rem] text-slate-400 mt-0.5 ml-3.5">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {githubActivity.pinnedRepos.map((repo, rIdx) => (
            <motion.div
              key={repo.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: rIdx * 0.06 }}
              className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06]">
                  <span className="font-semibold text-slate-200 truncate font-mono text-xs">{repo.name}</span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#38bdf8] p-1 shrink-0 transition-colors"
                    aria-label={`Open repository ${repo.name}`}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#f59e0b]">
                    <FiStar className="text-xs" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
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
