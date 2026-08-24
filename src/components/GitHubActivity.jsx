import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import { codingStats } from '../data/portfolioData';

const pinnedRepos = [
  {
    name: 'incidenthub-ai',
    desc: 'Incident triage and intelligence platform correlating GitHub and Sentry signals for evidence-backed postmortems.',
    lang: 'TypeScript',
    langColor: '#38bdf8',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    name: 'leaveflow-hr',
    desc: 'Full-stack employee leave management application with 3 role portals, approval workflows, and SQLite/MongoDB store.',
    lang: 'JavaScript',
    langColor: '#facc15',
    stars: 6,
    forks: 2,
    url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
  },
  {
    name: 'dev-portfolio-checker',
    desc: 'Automated developer portfolio auditor scoring GitHub profiles and portfolio SPAs across ~20 hiring signals.',
    lang: 'JavaScript',
    langColor: '#facc15',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
  {
    name: 'kohli-analytics',
    desc: 'Interactive cricket statistics dashboard with custom D3.js vector visualizations and smooth GSAP transitions.',
    lang: 'TypeScript',
    langColor: '#38bdf8',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/kohli-analytics',
  },
  {
    name: 'taskflow',
    desc: 'Real-time collaborative task board built with React, Node.js, Express, MongoDB, and Socket.io WebSockets.',
    lang: 'JavaScript',
    langColor: '#facc15',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/taskflow',
  },
  {
    name: 'Solar-System-Explorer',
    desc: '3D interactive celestial orbital mechanics visualizer built with WebGL, Three.js, and astronomical data.',
    lang: 'JavaScript',
    langColor: '#facc15',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804',
  },
];

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
          className="flex flex-col items-start mb-12"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // Open Source & Activity
          </span>
          <div className="flex items-center justify-between w-full flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
                GitHub Repositories & Coding Activity
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
                Open-source repositories, development commits, and code contributions.
              </p>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.1] bg-[#121524] text-xs font-medium text-slate-200 hover:border-[#38bdf8]/40 hover:text-white transition-all shadow-sm"
            >
              <FiGithub className="text-sm text-[#38bdf8]" />
              <span>@rakeshkumar0804</span>
            </a>
          </div>
        </motion.div>

        {/* Bento Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="card p-5 rounded-xl border border-white/[0.08] bg-[#121524]/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{codingStats.github.stars}</div>
            <div className="text-xs text-slate-400 font-sans mt-1">Total Stars Earned</div>
          </div>

          <div className="card p-5 rounded-xl border border-white/[0.08] bg-[#121524]/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{codingStats.github.contributions}</div>
            <div className="text-xs text-slate-400 font-sans mt-1">Contributions in 2026</div>
          </div>

          <div className="card p-5 rounded-xl border border-white/[0.08] bg-[#121524]/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#38bdf8] font-mono">{codingStats.leetcode.solved}</div>
            <div className="text-xs text-slate-400 font-sans mt-1">LeetCode Solved</div>
          </div>

          <div className="card p-5 rounded-xl border border-white/[0.08] bg-[#121524]/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">{codingStats.github.streak}</div>
            <div className="text-xs text-slate-400 font-sans mt-1">Current Streak</div>
          </div>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pinnedRepos.map((repo, rIdx) => (
            <motion.div
              key={repo.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: rIdx * 0.05 }}
              className="card p-5 rounded-xl border border-white/[0.08] bg-[#121524]/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06]">
                  <span className="font-bold text-slate-200 truncate font-mono text-xs">{repo.name}</span>
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
                <div className="flex items-center gap-1.5 text-slate-300 text-[0.7rem]">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3 text-[0.7rem]">
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
