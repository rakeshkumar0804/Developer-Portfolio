import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_LINES = [
  'INITIALIZING RAKESH-CORE // v2.6-SYS',
  'MOUNTING FULL-STACK RUNTIME (MERN)',
  'VERIFYING RBAC & AUTH SUBSYSTEMS ... OK',
  'INDEXING 6 PRODUCTION PROJECTS ... OK',
  'CONNECTING GITHUB SIGNALS TELEMETRY ... OK',
  'OPERATOR RECOGNIZED :: ALL SYSTEMS OPTIMAL',
];

export default function BootLoader({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  // Skip handler
  const handleSkip = () => {
    setIsSkipped(true);
    setTimeout(onComplete, 200);
  };

  useEffect(() => {
    const handleKeyDown = () => handleSkip();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isSkipped) return;

    // Progress bar ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Staggered log lines
    const logInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < LOG_LINES.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 160);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [isSkipped, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        onClick={handleSkip}
        className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-[#030712] text-[#f8fafc] font-mono text-xs cursor-pointer select-none"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-sky-500/20 pb-3 text-[#94a3b8]">
          <div className="flex items-center gap-2 text-[#38bdf8] font-bold">
            <span className="h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>RAKESH-CORE // BOOT SEQUENCE</span>
          </div>
          <span className="text-[0.65rem] text-[#fbbf24]">SYS_INIT</span>
        </div>

        {/* Center Console Logs & Progress */}
        <div className="max-w-lg mx-auto w-full my-auto space-y-5">
          <div className="space-y-1.5 min-h-[140px]">
            {LOG_LINES.slice(0, currentLine + 1).map((line, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[0.75rem]">
                <span className="text-[#38bdf8] font-bold">›</span>
                <span className={idx === currentLine ? 'text-[#f8fafc]' : 'text-[#64748b]'}>
                  {line}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-[0.65rem] text-[#94a3b8]">
              <span>SYSTEM SYNCHRONIZATION</span>
              <span className="text-[#38bdf8] font-bold">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-900 border border-sky-500/30 rounded-xs overflow-hidden">
              <div
                className="h-full bg-[#38bdf8] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer Skip Prompt */}
        <div className="flex items-center justify-between border-t border-sky-500/20 pt-3 text-[0.65rem] text-[#64748b]">
          <span className="text-[#38bdf8] animate-pulse">[ PRESS ANY KEY OR CLICK TO SKIP ]</span>
          <span>INITIALIZING WORKSPACE...</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
