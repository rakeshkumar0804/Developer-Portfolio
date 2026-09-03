import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const checks = [
  { label: 'profile', value: 'Rakesh Kumar', threshold: 16 },
  { label: 'projects', value: '04 indexed', threshold: 38 },
  { label: 'github', value: 'connected', threshold: 62 },
  { label: 'interface', value: 'mounted', threshold: 84 },
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
    const duration = reduceMotion ? 260 : 1250;
    const ticker = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next >= 100) finish();
    }, 32);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') finish();
    };

    window.addEventListener('keydown', handleKeyDown);
    const fallback = window.setTimeout(finish, duration + 300);

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
      animate={leaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.06 : 0.18 }}
      className="fixed inset-0 z-[9999] grid place-items-center overflow-y-auto bg-[#050811] px-6 py-10 font-mono text-slate-300"
      aria-live="polite"
      aria-label="Portfolio startup sequence"
    >
      <div className="w-full max-w-2xl">
        <p className="text-sm leading-6 text-slate-400">
          <span className="text-cyan-300">rakesh@portfolio</span>
          <span className="text-slate-600">:</span>
          <span className="text-sky-300">~</span>
          <span className="text-slate-600">$</span> ./boot --production
        </p>

        <div className="mt-8 space-y-3 text-sm sm:text-base">
          {checks.map((check) => {
            const complete = progress >= check.threshold;
            return (
              <div key={check.label} className={`grid grid-cols-[3.5rem_1fr_auto] items-center gap-3 transition-opacity duration-150 ${complete ? 'opacity-100' : 'opacity-30'}`}>
                <span className={complete ? 'text-emerald-300' : 'text-slate-600'}>{complete ? '[ ok ]' : '[ .. ]'}</span>
                <span className="text-slate-300">{check.label}</span>
                <span className="text-right text-slate-500">{check.value}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 h-px overflow-hidden bg-slate-800">
          <motion.div
            className="h-full bg-cyan-300"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.04, ease: 'linear' }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
          <span>
            {progress >= 94 ? 'ready' : 'starting'}
            <motion.span
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            >
              _
            </motion.span>
          </span>
          <button type="button" onClick={finish} className="min-h-9 px-2 transition-colors hover:text-cyan-300">
            skip [esc]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
