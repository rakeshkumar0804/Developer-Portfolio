import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const systemEvidence = [
  {
    index: '01',
    title: 'TRACE',
    detail: 'Causal incident analysis',
    proof: '89.5% benchmark accuracy',
  },
  {
    index: '02',
    title: 'CHRONOS',
    detail: 'Constraint scheduling engine',
    proof: '2,328 → 46 search nodes',
  },
  {
    index: '03',
    title: 'SYNCPAD',
    detail: 'Collaborative code editor',
    proof: 'CRDT + WASM execution',
  },
  {
    index: '04',
    title: 'INCIDENTHUB',
    detail: 'Multi-tenant incident operations',
    proof: 'OAuth + distributed locks',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  const handleNavClick = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);

    if (!element) return;

    if (window.lenis) {
      window.lenis.scrollTo(element, { offset: -70, duration: 1.1 });
      return;
    }

    const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center px-5 pb-14 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={reveal}
          className="flex flex-col gap-3 border-b border-slate-800/90 pb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]"
        >
          <span>00 / Engineering profile</span>
          <span>{personalInfo.location} · Open to software engineering roles</span>
        </motion.div>

        <div className="grid gap-14 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16 xl:gap-24">
          <div className="lg:col-span-7">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.12}
              variants={reveal}
              className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400 sm:text-sm"
            >
              Rakesh Kumar · Full-stack engineer
            </motion.p>

            <motion.h1
              id="hero-title"
              initial="hidden"
              animate="visible"
              custom={0.19}
              variants={reveal}
              className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-100 sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
            >
              I build full-stack systems for complex,{' '}
              <span className="text-cyan-400">stateful workflows.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.26}
              variants={reveal}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-8"
            >
              From causal incident analysis and constraint scheduling to CRDT
              collaboration—I design the backend, interface, and deployment as one system.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.33}
              variants={reveal}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#systems"
                onClick={(event) => handleNavClick(event, '#systems')}
                className="inline-flex items-center gap-3 border border-cyan-400 bg-cyan-400 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#030914] transition-colors hover:bg-cyan-300"
              >
                Explore systems
                <FiArrowDown aria-hidden="true" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-slate-700 px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                <FiDownload aria-hidden="true" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={reveal}
              className="mt-8 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-cyan-400"
              >
                GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 transition-colors hover:text-cyan-400"
              >
                LinkedIn <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial="hidden"
            animate="visible"
            custom={0.28}
            variants={reveal}
            aria-label="Selected system evidence"
            className="lg:col-span-5 lg:pt-11"
          >
            <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]">
              <span className="text-slate-500">Selected system evidence</span>
              <span className="text-cyan-500">04 deployed</span>
            </div>

            <div className="border-b border-slate-800/90">
              {systemEvidence.map((system) => (
                <div
                  key={system.index}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-t border-slate-800/90 py-4 sm:grid-cols-[2rem_1fr_auto] sm:items-center sm:gap-4"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-cyan-500">
                    {system.index}
                  </span>
                  <div>
                    <h2 className="font-mono text-sm font-semibold tracking-[0.08em] text-slate-200">
                      {system.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {system.detail}
                    </p>
                  </div>
                  <span className="col-start-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400 sm:col-start-auto sm:max-w-[10.5rem] sm:text-right sm:text-[11px]">
                    {system.proof}
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.46}
          variants={reveal}
          className="flex flex-col gap-4 border-t border-slate-800/90 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]"
        >
          <span>B.Tech CSE · Class of 2026</span>
          <span className="text-slate-400">Architecture → implementation → deployment</span>
        </motion.div>
      </div>
    </section>
  );
}
