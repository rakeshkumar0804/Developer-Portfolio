import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  'Loading portfolio',
  'Preparing project systems',
  'Ready',
];

export default function SystemBootloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setProgress(100);
    setStep(2);
    sessionStorage.setItem('rakesh_core_booted', 'true');
    setLeaving(true);
    window.setTimeout(onComplete, 180);
  }, [onComplete]);

  useEffect(() => {
    const startedAt = Date.now();
    const duration = 1450;
    const ticker = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next >= 38) setStep(1);
      if (next >= 100) finish();
    }, 40);

    // Independent hard fallback: the screen can never remain open beyond 1.8s.
    const fallback = window.setTimeout(finish, 1800);
    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(fallback);
    };
  }, [finish]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={leaving ? { opacity: 0, y: -8 } : { opacity: 1 }}
      transition={{ duration: leaving ? 0.18 : 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] grid place-items-center bg-[#050811] p-6 font-mono text-slate-300"
      aria-live="polite"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-between text-[0.68rem] tracking-[0.16em] text-slate-500">
          <span className="text-cyan-300">RK / PORTFOLIO</span>
          <span>STARTUP</span>
        </div>

        <div className="border border-slate-700/70 bg-[#09101c] p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-7 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center border border-cyan-400/55 bg-cyan-400/5 text-sm font-bold text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,.15)]">RK</div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-100">Rakesh Kumar</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-slate-500">Full-stack web developer</p>
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="text-slate-300">{steps[step]}</span>
            <span className="font-semibold text-cyan-300">{progress}%</span>
          </div>
          <div className="h-1 overflow-hidden bg-slate-800">
            <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400" animate={{ width: `${progress}%` }} transition={{ duration: 0.08, ease: 'linear' }} />
          </div>
          <p className="mt-4 text-[0.65rem] leading-relaxed text-slate-500">Securely loading projects, experience, and contact details.</p>
        </div>

        <button type="button" onClick={finish} className="mt-5 text-[0.68rem] tracking-wider text-slate-500 transition-colors hover:text-cyan-300">SKIP INTRO →</button>
      </div>
    </motion.div>
  );
}
