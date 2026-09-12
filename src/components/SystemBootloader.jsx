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
  const finishedRef = useRef(false);
  const leavingRef = useRef(false);
  const progressStartedRef = useRef(false);
  const animFrameRef = useRef(null);
  const entranceTimerRef = useRef(null);
  const holdTimerRef = useRef(null);
  const exitTimerRef = useRef(null);
  const fallbackTimerRef = useRef(null);

  const cleanup = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (entranceTimerRef.current) {
      clearTimeout(entranceTimerRef.current);
      entranceTimerRef.current = null;
    }
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, []);

  const completeBoot = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    // 2. Stop/cancel active animation frame and pending entrance/fallback timers
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (entranceTimerRef.current) {
      clearTimeout(entranceTimerRef.current);
      entranceTimerRef.current = null;
    }
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    // 3. Set progress to 100
    setProgress(100);

    // 4. Set the step to Ready
    setStep(2);

    // 5. Preserve both existing session-storage keys
    try {
      sessionStorage.setItem('bootComplete', 'true');
      sessionStorage.setItem('rakesh_core_booted', 'true');
    } catch (e) {
      // ignore storage errors
    }

    // 6. Hold the fully visible 100% state for 120ms
    holdTimerRef.current = window.setTimeout(() => {
      if (leavingRef.current) return;
      // 7. Start the existing 180ms exit transition
      leavingRef.current = true;
      setLeaving(true);

      exitTimerRef.current = window.setTimeout(() => {
        // 8. Call onComplete() exactly once
        // 9. Clean up every remaining frame and timer
        cleanup();
        onComplete();
      }, 180);
    }, 120);
  }, [cleanup, onComplete]);

  const skipBoot = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    finishedRef.current = true;

    // 2. Stop/cancel active animation frame
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    // 3. Cancel entrance, fallback and 100% hold timers
    if (entranceTimerRef.current) {
      clearTimeout(entranceTimerRef.current);
      entranceTimerRef.current = null;
    }
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }

    // 4. Set progress to 100
    setProgress(100);

    // 5. Set the step to Ready
    setStep(2);

    // 6. Preserve both existing session-storage keys
    try {
      sessionStorage.setItem('bootComplete', 'true');
      sessionStorage.setItem('rakesh_core_booted', 'true');
    } catch (e) {
      // ignore storage errors
    }

    // 7. Set leaving state immediately without 120ms hold
    setLeaving(true);

    // 8. Run existing 180ms exit animation
    if (exitTimerRef.current) {
      clearTimeout(exitTimerRef.current);
    }
    exitTimerRef.current = window.setTimeout(() => {
      // 9. Call onComplete() exactly once
      // 10. Clean up all resources
      cleanup();
      onComplete();
    }, 180);
  }, [cleanup, onComplete]);

  const startProgress = useCallback(() => {
    if (finishedRef.current || leavingRef.current) return;

    let startTimestamp = null;
    const progressDuration = 1250;

    const tick = (timestamp) => {
      if (finishedRef.current || leavingRef.current) return;

      if (startTimestamp === null) {
        startTimestamp = timestamp;
      }

      const elapsed = timestamp - startTimestamp;
      const pct = Math.min(100, Math.floor((elapsed / progressDuration) * 100));

      setProgress((prev) => (pct > prev ? pct : prev));
      if (pct >= 38) {
        setStep((prev) => (prev < 1 ? 1 : prev));
      }

      if (pct >= 100) {
        completeBoot();
        return;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
  }, [completeBoot]);

  const handleEntranceComplete = useCallback(() => {
    if (progressStartedRef.current || leavingRef.current || finishedRef.current) return;
    progressStartedRef.current = true;
    if (entranceTimerRef.current) {
      clearTimeout(entranceTimerRef.current);
      entranceTimerRef.current = null;
    }
    startProgress();
  }, [startProgress]);

  useEffect(() => {
    // Safety fallback: begin the guarded completion sequence after 1.8s if rAF progress stalls.
    fallbackTimerRef.current = window.setTimeout(completeBoot, 1800);

    // Fallback timer for entrance in case onAnimationComplete does not fire
    entranceTimerRef.current = window.setTimeout(handleEntranceComplete, 240);

    return () => {
      cleanup();
    };
  }, [cleanup, completeBoot, handleEntranceComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={leaving ? { opacity: 0, y: -8 } : { opacity: 1 }}
      transition={{
        duration: leaving ? 0.18 : 0.22,
        ease: [0.16, 1, 0.3, 1],
      }}
      onAnimationComplete={handleEntranceComplete}
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

        <button type="button" onClick={skipBoot} className="mt-5 text-[0.68rem] tracking-wider text-slate-500 transition-colors hover:text-cyan-300">SKIP INTRO →</button>
      </div>
    </motion.div>
  );
}
