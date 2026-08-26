import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink, FiTerminal } from 'react-icons/fi';
import { codingStats } from '../data/portfolioData';

const initialPinnedRepos = [
  {
    name: 'incidenthub-ai',
    desc: 'Incident triage and intelligence platform correlating GitHub and Sentry signals for evidence-backed postmortems.',
    lang: 'TypeScript',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    name: 'leaveflow-hr',
    desc: 'Full-stack employee leave management application with 3 role portals, approval workflows, and MongoDB store.',
    lang: 'JavaScript',
    stars: 6,
    forks: 2,
    url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
  },
  {
    name: 'dev-portfolio-checker',
    desc: 'Automated developer portfolio auditor scoring GitHub profiles and portfolio SPAs across ~20 hiring signals.',
    lang: 'JavaScript',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
  {
    name: 'kohli-analytics',
    desc: 'Interactive cricket statistics dashboard with custom D3.js vector visualizations and smooth GSAP transitions.',
    lang: 'TypeScript',
    stars: 5,
    forks: 1,
    url: 'https://github.com/rakeshkumar0804/kohli-analytics',
  },
];

const CACHE_KEY = 'gh_stats_rakeshkumar0804_v1';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

export default function GitHubActivity() {
  const [starsCount, setStarsCount] = useState(codingStats.github.stars);
  const [pinnedList, setPinnedList] = useState(initialPinnedRepos);
  const [publicReposCount, setPublicReposCount] = useState(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_DURATION_MS) {
            setStarsCount(parsed.totalStars);
            setPublicReposCount(parsed.publicRepos);
            if (parsed.pinned) setPinnedList(parsed.pinned);
            setIsLive(true);
            return;
          }
        }

        const userRes = await fetch('https://api.github.com/users/rakeshkumar0804');
        const reposRes = await fetch('https://api.github.com/users/rakeshkumar0804/repos?per_page=100');

        if (!userRes.ok || !reposRes.ok) return;

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        if (Array.isArray(reposData)) {
          const totalStars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          setStarsCount(String(totalStars));
          setPublicReposCount(userData.public_repos || reposData.length);

          const updatedPinned = initialPinnedRepos.map((pin) => {
            const found = reposData.find((r) => r.name.toLowerCase() === pin.name.toLowerCase());
            if (found) {
              return {
                ...pin,
                stars: found.stargazers_count ?? pin.stars,
                forks: found.forks_count ?? pin.forks,
              };
            }
            return pin;
          });

          setPinnedList(updatedPinned);
          setIsLive(true);

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: Date.now(),
              totalStars: String(totalStars),
              publicRepos: userData.public_repos || reposData.length,
              pinned: updatedPinned,
            })
          );
        }
      } catch {
        // Fallback gracefully
      }
    };

    fetchGitHubData();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="activity" className="py-16 relative border-t border-white/[0.08] font-mono">
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
            <span>gh repo list @rakeshkumar0804</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Live GitHub & Code Activity
              </h2>
            </div>

            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded border border-white/[0.1] bg-[#161b22] text-xs font-semibold text-slate-300 hover:text-white hover:border-[#38bdf8]/50 transition-all"
            >
              <FiGithub className="text-sm text-[#38bdf8]" />
              <span>@rakeshkumar0804</span>
            </a>
          </div>
        </motion.div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
          <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] text-center">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">{starsCount}</div>
            <div className="text-[0.7rem] text-slate-400 mt-0.5">
              Total Stars {isLive && <span className="text-emerald-400 font-bold">(Live)</span>}
            </div>
          </div>

          <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] text-center">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {publicReposCount !== null ? publicReposCount : codingStats.github.contributions}
            </div>
            <div className="text-[0.7rem] text-slate-400 mt-0.5">Public Repositories</div>
          </div>

          <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] text-center">
            <div className="text-xl sm:text-2xl font-bold text-[#38bdf8] font-mono">{codingStats.leetcode.solved}</div>
            <div className="text-[0.7rem] text-slate-400 mt-0.5">LeetCode Solved</div>
          </div>

          <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] text-center">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">{codingStats.github.streak}</div>
            <div className="text-[0.7rem] text-slate-400 mt-0.5">Active Coding Streak</div>
          </div>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedList.map((repo) => (
            <div
              key={repo.name}
              className="p-4 rounded-lg border border-white/[0.08] bg-[#0d1117] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06]">
                  <span className="font-bold text-slate-200 text-xs">{repo.name}</span>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-[#38bdf8] p-1"
                    aria-label={`View ${repo.name}`}
                  >
                    <FiExternalLink className="text-xs" />
                  </a>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[0.7rem] text-slate-400 font-mono">
                <span className="text-[#38bdf8]">{repo.lang}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#facc15]">
                    <FiStar className="text-xs" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiGitBranch className="text-xs" /> {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
