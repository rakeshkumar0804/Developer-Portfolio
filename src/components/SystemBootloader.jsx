import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const checks = [
  { name: 'profile.json', detail: 'IDENTITY + STACK', threshold: 16 },
  { name: 'projects.index', detail: '04 SYSTEMS', threshold: 38 },
  { name: 'signals.cache', detail: 'GITHUB + LEETCODE', threshold: 62 },
  { name: 'interface.mount', detail: 'PORTFOLIO', threshold: 86 },
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
    window.setTimeout(onComplete, reduceMotion ? 80 : 260);
  }, [onComplete, reduceMotion]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startedAt = Date.now();
    const duration = reduceMotion ? 320 : 1650;
    const ticker = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next >= 100) finish();
    }, 32);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') finish();
    };

    window.addEventListener('keydown', handleKeyDown);
    const fallback = window.setTimeout(finish, duration + 400);

    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(fallback);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [finish, reduceMotion]);

  return (
    <motion.div
      initial={false}
      animate={leaving ? { opacity: 0, y: -6 } : { opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.08 : 0.26, ease: [0.16, 1, 0.3, 1] }}
      className="boot-screen fixed inset-0 z-[9999] overflow-y-auto bg-[#050811] font-mono text-slate-300 lg:overflow-hidden"
      aria-live="polite"
      aria-label="Portfolio startup sequence"
    >
      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-[1320px] flex-col px-6 py-6 sm:px-10 sm:py-8 lg:px-14">
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-4 text-[0.68rem] tracking-[0.18em] sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="boot-status-dot" />
            <span className="font-semibold text-slate-200">RK // PORTFOLIO</span>
          </div>
          <span className="text-slate-500">BOOT SEQUENCE 01</span>
        </header>

        <main className="grid flex-1 items-center gap-6 py-6 sm:gap-10 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <section className="min-w-0">
            <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.22em] text-cyan-300 sm:text-xs">FULL-STACK ENGINEER</p>
            <h1 className="boot-name text-[clamp(3.5rem,6.2vw,6.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.065em] text-slate-100">
              <span className="block">Rakesh</span>
              <span className="block text-transparent">Kumar</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
              Initializing a workspace for building, inspecting, and shipping reliable systems.
            </p>

            <div className="boot-network mt-10 hidden max-w-lg sm:block" aria-hidden="true">
              <svg viewBox="0 0 560 108" role="presentation">
                <motion.path d="M24 54 H154 L218 18 H342 L406 54 H536" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeInOut' }} />
                <motion.path d="M154 54 L218 90 H342 L406 54" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.14, ease: 'easeInOut' }} />
                {[24, 154, 218, 342, 406, 536].map((x, index) => (
                  <circle key={x} cx={x} cy={index === 2 ? 18 : index === 3 ? 90 : 54} r="3.5" />
                ))}
                {!reduceMotion && (
                  <motion.circle
                    className="boot-signal"
                    r="4"
                    animate={{ cx: [24, 154, 218, 342, 406, 536], cy: [54, 54, 18, 18, 54, 54] }}
                    transition={{ duration: 1.35, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </svg>
            </div>
          </section>

          <section className="boot-console w-full border border-slate-700/70 bg-[#070d18]/82 p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-800/90 pb-4 text-[0.68rem] tracking-[0.15em] sm:text-xs">
              <span className="text-slate-300">$ portfolio.init</span>
              <span className="text-cyan-300">{String(progress).padStart(3, '0')}%</span>
            </div>

            <div className="py-2">
              {checks.map((check) => {
                const complete = progress >= check.threshold;
                return (
                  <motion.div
                    key={check.name}
                    initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                    animate={{ opacity: progress >= check.threshold - 14 ? 1 : 0.24, x: 0 }}
                    transition={{ duration: 0.18 }}
                    className="boot-check grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-800/70 py-3.5"
                  >
                    <div className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-slate-200 sm:text-sm">{check.name}</span>
                      <span className="mt-1 block text-[0.6rem] tracking-[0.14em] text-slate-600 sm:text-[0.65rem]">{check.detail}</span>
                    </div>
                    <span className={complete ? 'text-emerald-300' : 'text-slate-600'}>{complete ? '[ OK ]' : '[ .. ]'}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between text-[0.68rem] tracking-[0.13em] sm:text-xs">
              <span className="text-slate-500">{progress >= 94 ? '> workspace ready_' : '> resolving dependencies_'}</span>
              <span className={progress >= 94 ? 'text-emerald-300' : 'text-cyan-300'}>{progress >= 94 ? 'READY' : 'RUNNING'}</span>
            </div>

            <div className="mt-5 h-px overflow-hidden bg-slate-800">
              <motion.div className="h-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.7)]" animate={{ width: `${progress}%` }} transition={{ duration: 0.05, ease: 'linear' }} />
            </div>
          </section>
        </main>

        <footer className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-[0.65rem] tracking-[0.15em] text-slate-500 sm:text-xs">
          <span>ENGINEERING WORKSPACE // LOADING</span>
          <button type="button" onClick={finish} className="min-h-9 px-2 tracking-[0.12em] transition-colors hover:text-cyan-300">
            SKIP <span className="hidden sm:inline">[ESC]</span> →
          </button>
        </footer>
      </div>
    </motion.div>
  );
}
