import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const bootLogs = [
  { text: 'loading developer profile', threshold: 14 },
  { text: 'linking MERN runtime', threshold: 30 },
  { text: 'indexing 4 deployed systems', threshold: 46 },
  { text: 'mounting real-time modules', threshold: 62 },
  { text: 'resolving open-source signals', threshold: 78 },
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
    window.setTimeout(onComplete, reduceMotion ? 60 : 180);
  }, [onComplete, reduceMotion]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startedAt = Date.now();
    const duration = reduceMotion ? 260 : 1600;
    const hold = reduceMotion ? 60 : 420;
    let completionTimer;

    const ticker = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
      setProgress(next);

      if (next >= 100) {
        window.clearInterval(ticker);
        completionTimer = window.setTimeout(finish, hold);
      }
    }, 32);

    const handleKeyDown = (event) => {
      if (!event.repeat) finish();
    };

    window.addEventListener('keydown', handleKeyDown);
    const fallback = window.setTimeout(finish, duration + hold + 300);

    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(completionTimer);
      window.clearTimeout(fallback);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [finish, reduceMotion]);

  return (
    <motion.div
      initial={false}
      animate={leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.06 : 0.18 }}
      className="boot-blueprint fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#030914] px-6 py-12 font-mono text-slate-400"
      aria-live="polite"
      aria-label="Portfolio startup sequence"
    >
      <div className="w-full max-w-3xl -translate-y-4 sm:-translate-y-8">
        <div className="flex items-center justify-between text-[0.68rem] tracking-[0.2em] text-slate-400 sm:text-xs">
          <span>RK SYSTEMS // V1.0</span>
          <span>BOOT</span>
        </div>

        <p className="mt-8 text-xs tracking-[0.2em] text-slate-400 sm:text-sm">
          INITIALIZING PORTFOLIO RUNTIME
          <motion.span
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          >
            _
          </motion.span>
        </p>

        <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-4 text-xs tracking-[0.15em] sm:text-sm">
          <span className="text-slate-400">SYNC</span>
          <div className="h-1.5 overflow-hidden bg-slate-800/90">
            <motion.div
              className="h-full bg-sky-400"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.04, ease: 'linear' }}
            />
          </div>
          <span className="w-12 text-right text-sky-300">{String(progress).padStart(3, '0')}%</span>
        </div>

        <div className="mt-8 min-h-40 space-y-1.5 text-xs sm:text-base">
          {bootLogs.map((log) => (
            progress >= log.threshold && (
              <motion.div
                key={log.text}
                initial={reduceMotion ? false : { opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.14 }}
                className="flex min-w-0 items-baseline gap-2"
              >
                <span className="shrink-0 text-sky-400">&gt;</span>
                <span className="shrink-0 text-slate-400">{log.text}</span>
                <span className="min-w-4 flex-1 overflow-hidden whitespace-nowrap text-amber-400/80">................................</span>
                <span className="shrink-0 text-amber-400">OK</span>
              </motion.div>
            )
          ))}

          {progress >= 90 && (
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-1 text-cyan-300"
            >
              <span className="text-sky-400">&gt;</span> operator recognized :: Rakesh Kumar
            </motion.p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-7 left-1/2 min-h-10 -translate-x-1/2 whitespace-nowrap px-3 text-[0.65rem] tracking-[0.24em] text-slate-500 transition-colors hover:text-cyan-300 sm:bottom-9 sm:text-xs"
      >
        TAP / PRESS ANY KEY TO SKIP
      </button>
    </motion.div>
  );
}
