import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const modules = [
  { code: 'TRACE', detail: 'CAUSAL REASONING', threshold: 22 },
  { code: 'CHRONOS', detail: 'CONSTRAINT SEARCH', threshold: 44 },
  { code: 'SYNCPAD', detail: 'REAL-TIME CRDT', threshold: 66 },
  { code: 'INCIDENTHUB', detail: 'MULTI-TENANT OPS', threshold: 86 },
];

export default function SystemBootloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);
  const reduceMotion = useReducedMotion();

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setProgress(100);
    setLeaving(true);
    window.setTimeout(onComplete, reduceMotion ? 80 : 320);
  }, [onComplete, reduceMotion]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startedAt = Date.now();
    const duration = reduceMotion ? 360 : 2250;
    const ticker = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next >= 100) finish();
    }, 32);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') finish();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Independent hard fallback: the screen can never trap a visitor.
    const fallback = window.setTimeout(finish, duration + 500);

    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(fallback);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [finish, reduceMotion]);

  const getModuleState = (threshold) => {
    if (progress >= threshold) return 'ONLINE';
    if (progress >= threshold - 16) return 'SYNCING';
    return 'QUEUED';
  };

  return (
    <motion.div
      initial={false}
      animate={leaving ? { opacity: 0, clipPath: 'inset(0 0 100% 0)' } : { opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: reduceMotion ? 0.08 : 0.32, ease: [0.76, 0, 0.24, 1] }}
      className="boot-screen fixed inset-0 z-[9999] overflow-hidden bg-[#050811] font-mono text-slate-300"
      aria-live="polite"
      aria-label="Portfolio startup sequence"
    >
      <div className="boot-scan-line" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1440px] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-4 text-xs tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span className="boot-status-dot" />
            <span className="font-semibold text-slate-200">RK // SYSTEMS WORKBENCH</span>
          </div>
          <span className="hidden text-slate-500 sm:inline">ENTRY SEQUENCE 01</span>
          <span className="text-slate-500 sm:hidden">SEQ 01</span>
        </header>

        <main className="grid flex-1 items-center gap-6 py-5 sm:gap-10 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-10">
          <section className="min-w-0">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-cyan-300 sm:mb-5 sm:tracking-[0.24em]">FULL-STACK ENGINEERING // 2026</p>
            <h1 className="boot-name text-[clamp(3rem,8vw,7.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.075em] text-slate-100">
              <span className="block">Rakesh</span>
              <span className="block text-transparent">Kumar</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-7 sm:text-lg">
              Building systems you can <span className="text-slate-100">run</span>, <span className="text-slate-100">inspect</span>, and <span className="text-slate-100">verify</span>.
            </p>

            <div className="boot-network mt-8 hidden max-w-xl lg:block" aria-hidden="true">
              <svg viewBox="0 0 560 170" role="presentation">
                <motion.path d="M42 85 H154 L210 34 H348 L404 85 H518" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.35, ease: 'easeInOut' }} />
                <motion.path d="M154 85 L210 136 H348 L404 85" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 1.35, delay: reduceMotion ? 0 : 0.24, ease: 'easeInOut' }} />
                {[42, 154, 210, 348, 404, 518].map((x, index) => (
                  <motion.circle key={x} cx={x} cy={index === 2 ? 34 : index === 3 ? 136 : 85} r="4" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: progress > index * 14 ? 1 : 0.18, scale: progress > index * 14 ? 1 : 0.65 }} transition={{ duration: 0.18 }} />
                ))}
              </svg>
            </div>
          </section>

          <section className="boot-console border border-slate-700/70 bg-[#070d18]/88 p-4 shadow-2xl shadow-black/30 sm:p-7">
            <div className="mb-3 flex items-center justify-between border-b border-slate-800/90 pb-3 text-xs tracking-[0.14em] sm:mb-5 sm:pb-4 sm:tracking-[0.16em]">
              <span className="text-slate-300">INITIALIZING SYSTEM MAP</span>
              <span className="text-cyan-300">{String(progress).padStart(3, '0')}%</span>
            </div>

            <div className="space-y-2">
              {modules.map((module, index) => {
                const state = getModuleState(module.threshold);
                return (
                  <motion.div
                    key={module.code}
                    initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.16 + index * 0.1 }}
                    className={`boot-module flex items-center justify-between gap-4 border px-3 py-2 sm:px-4 sm:py-3 ${state === 'ONLINE' ? 'is-online' : ''}`}
                  >
                    <div className="min-w-0">
                      <span className="block text-sm font-bold tracking-[0.14em] text-slate-100">{module.code}</span>
                      <span className="mt-1 block truncate text-xs tracking-[0.12em] text-slate-500">{module.detail}</span>
                    </div>
                    <span className={`shrink-0 text-xs tracking-[0.14em] ${state === 'ONLINE' ? 'text-emerald-300' : state === 'SYNCING' ? 'text-cyan-300' : 'text-slate-600'}`}>
                      {state}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-800/90 pt-3 text-xs tracking-[0.12em] sm:mt-5 sm:pt-4 sm:tracking-[0.14em]">
              <span className="text-slate-500">PORTFOLIO INTERFACE</span>
              <span className={progress >= 96 ? 'text-emerald-300' : 'text-amber-300'}>{progress >= 96 ? 'READY' : 'ASSEMBLING'}</span>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800/80 pt-4">
          <div className="mb-3 flex items-center justify-between text-xs tracking-[0.16em]">
            <span className="text-slate-500">PROOF-DRIVEN SYSTEMS // LOADING</span>
            <button type="button" onClick={finish} className="min-h-9 px-2 text-sm tracking-[0.12em] text-slate-400 transition-colors hover:text-cyan-300">
              SKIP <span className="hidden sm:inline">[ESC]</span> →
            </button>
          </div>
          <div className="h-px overflow-hidden bg-slate-800">
            <motion.div className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,.75)]" animate={{ width: `${progress}%` }} transition={{ duration: 0.06, ease: 'linear' }} />
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
