import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  { time: '0.00s', text: 'INITIALIZING RAKESH-CORE KERNEL v2.4...' },
  { time: '0.65s', text: 'ALLOCATING MEMORY BUFFERS & SHADER PIPELINES...' },
  { time: '1.20s', text: 'ESTABLISHING ENCRYPTED TELEMETRY STREAM [200 OK]' },
  { time: '1.80s', text: 'DECRYPTING ARCHITECTURE NODES & SYSTEM SPECS...' },
  { time: '2.20s', text: 'UPLINK SYNCHRONIZED. RENDERING HUD...' },
];

export default function SystemBootloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Ticker for Progress Percentage (0 to 100% over ~2.2s)
    const startTime = performance.now();
    const duration = 2200;

    let frameId;
    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        // Hold for 150ms at 100%, then trigger smooth exit animation
        setTimeout(() => {
          setIsExiting(true);
          sessionStorage.setItem('rakesh_core_booted', 'true');
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
        }, 150);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    // 2. Timed Log Message Reveal
    const timers = [
      setTimeout(() => setLogIndex(1), 550),
      setTimeout(() => setLogIndex(2), 1100),
      setTimeout(() => setLogIndex(3), 1650),
      setTimeout(() => setLogIndex(4), 2100),
    ];

    return () => {
      cancelAnimationFrame(frameId);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  // Clean formatting: 00% to 09% -> 10% to 99% -> 100%
  const displayProgress = progress < 10 ? `0${progress}%` : `${progress}%`;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="bootloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#050811] flex flex-col justify-between items-center p-6 md:p-10 font-mono text-slate-300 select-none overflow-hidden"
        >
          {/* Top Cyber Telemetry Header */}
          <div className="w-full flex items-center justify-between text-xs text-slate-500 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">┌</span>
              <span className="text-cyan-400 font-bold tracking-widest uppercase">
                SYSTEM BOOTLOADER · STAGE 01
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-1" />
              <span className="text-slate-400 tracking-wider">INITIALIZING...</span>
              <span className="text-slate-600">┐</span>
            </div>
          </div>

          {/* Central Animated Blueprint Radar & Progress Box */}
          <div className="flex flex-col items-center justify-center max-w-xl w-full my-auto text-center space-y-8">
            {/* Animated Radar Visual */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Outer Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-ping opacity-25" />
              {/* Middle Rotating Radar Circle */}
              <div className="absolute inset-2 rounded-full border border-slate-800 border-t-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              {/* Inner Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-slate-800/60" />
                <div className="h-full w-[1px] bg-slate-800/60 absolute" />
              </div>
              {/* Center Core Glyph */}
              <div className="w-8 h-8 rounded-lg border border-cyan-400/80 bg-cyan-950/40 flex items-center justify-center text-cyan-400 font-bold text-xs shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                RK
              </div>
            </div>

            {/* Terminal Log Stream */}
            <div className="w-full bg-[#080d1a]/80 border border-slate-800/80 rounded-xl p-5 text-left shadow-2xl space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800/60 pb-2 mb-3">
                <span className="text-cyan-400 font-semibold">$ SYSTEM_DIAGNOSTIC_RUN</span>
                <span>STATUS: ACTIVE</span>
              </div>

              <div className="space-y-1.5 min-h-[110px] text-xs font-mono">
                {bootLogs.slice(0, logIndex + 1).map((log, idx) => (
                  <div
                    key={log.text}
                    className={`flex items-center gap-2 transition-all ${
                      idx === logIndex ? 'text-cyan-300 font-medium' : 'text-slate-400'
                    }`}
                  >
                    <span className="text-slate-600 text-[11px]">[{log.time}]</span>
                    <span className="truncate">{log.text}</span>
                  </div>
                ))}
              </div>

              {/* Segmented Cyber Progress Bar */}
              <div className="pt-3 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
                  <span className="tracking-widest">LOADING ASSETS</span>
                  <span className="text-cyan-400 font-bold">{displayProgress}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden p-[1px] border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-75 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="w-full flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/80 pt-3">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">└</span>
              <span className="tracking-widest text-slate-400 text-[11px]">
                GURUGRAM HQ • MEM ALLOC: 512MB
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400/90 text-[11px]">SECURE TLS ENCRYPTED</span>
              <span className="text-slate-600">┘</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
