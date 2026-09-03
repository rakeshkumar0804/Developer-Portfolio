import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const focusAreas = [
  {
    index: '01',
    title: 'Secure backend systems',
    detail: 'REST APIs · JWT · RBAC',
  },
  {
    index: '02',
    title: 'Real-time collaboration',
    detail: 'CRDT · WebSocket · Redis',
  },
  {
    index: '03',
    title: 'AI-assisted workflows',
    detail: 'FastAPI · Gemini · pgvector',
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
      className="relative flex min-h-[100svh] items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={reveal}
          className="flex flex-col gap-3 border-b border-slate-800/90 pb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]"
        >
          <span>00 / Introduction</span>
          <span>{personalInfo.location} · Portfolio 2026</span>
        </motion.div>

        <div className="grid gap-14 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20 xl:gap-24">
          <div className="lg:col-span-8">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.12}
              variants={reveal}
              className="mb-7 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400 sm:text-sm"
            >
              Rakesh Kumar · Full-stack engineer
            </motion.p>

            <motion.h1
              id="hero-title"
              initial="hidden"
              animate="visible"
              custom={0.19}
              variants={reveal}
              className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-slate-100 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              I build systems that hold up{' '}
              <span className="text-cyan-400">beyond the demo.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.26}
              variants={reveal}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-8"
            >
              Full-stack products with secure APIs, real-time collaboration, and
              AI-assisted workflows—from system design to production deployment.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.33}
              variants={reveal}
              className="mt-10 flex flex-wrap items-center gap-3"
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
            aria-label="Engineering focus"
            className="self-end lg:col-span-4 lg:pb-1"
          >
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:text-[11px]">
              Engineering focus
            </p>

            <div className="border-b border-slate-800/90">
              {focusAreas.map((area) => (
                <div
                  key={area.index}
                  className="grid grid-cols-[2rem_1fr] gap-4 border-t border-slate-800/90 py-5"
                >
                  <span className="font-mono text-[10px] tracking-[0.16em] text-cyan-500">
                    {area.index}
                  </span>
                  <div>
                    <h2 className="text-sm font-medium text-slate-200 sm:text-base">
                      {area.title}
                    </h2>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:text-[11px]">
                      {area.detail}
                    </p>
                  </div>
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
          className="grid gap-px border-y border-slate-800/90 bg-slate-800/90 sm:grid-cols-3"
        >
          <div className="bg-[#050811] px-5 py-4">
            <span className="font-mono text-xl text-slate-100">04</span>
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Core systems
            </span>
          </div>
          <div className="bg-[#050811] px-5 py-4">
            <span className="font-mono text-sm text-slate-200">B.Tech CSE</span>
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Class of 2026
            </span>
          </div>
          <div className="bg-[#050811] px-5 py-4">
            <span className="font-mono text-sm text-emerald-400">Available</span>
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Software roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
