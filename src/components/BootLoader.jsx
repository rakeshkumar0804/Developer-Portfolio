import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playKeyTick, playButtonClick } from '../utils/audio';

const LOG_LINES = [
  'mounting subsystem graph ... OK',
  'linking MERN runtime ... OK',
  'spinning cloud-native nodes ... OK',
  'indexing 6 production systems ... OK',
  'warming AI / LLM bridge ... OK',
  'operator recognized :: last uplink 4h ago :: session #43',
];

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 4) + 2;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
      setProgress(currentProgress);
    }, 45);

    // Stagger log lines
    LOG_LINES.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLogs((prev) => [...prev, line]);
        playKeyTick();
      }, (index + 1) * 260);
    });

    // Skip handler (click or keypress)
    const handleSkip = () => {
      if (!isSkipped) {
        setIsSkipped(true);
        playButtonClick();
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(onComplete, 200);
      }
    };

    window.addEventListener('keydown', handleSkip);
    window.addEventListener('click', handleSkip);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleSkip);
      window.removeEventListener('click', handleSkip);
    };
  }, [onComplete, isSkipped]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#050811] p-6 sm:p-10 md:p-14 font-mono text-xs text-[#00f0ff] select-none cursor-pointer overflow-hidden"
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 240, 255, 0.15) 0 1px, transparent 1px 3px)',
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#00f0ff]/20 pb-3.5 tracking-widest text-[0.72rem]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="font-bold">BLUEPRINT OS · v2.0</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#00f0ff]/60">SYS::INIT</span>
          <span className="px-2 py-0.5 rounded border border-[#00f0ff]/40 bg-[#00f0ff]/10 font-bold">ONLINE</span>
        </div>
      </div>

      {/* Center Progress & Terminal Logs */}
      <div className="relative z-10 max-w-xl mx-auto w-full my-auto space-y-7">
        <div className="space-y-2">
          <div className="flex justify-between text-xs tracking-wider">
            <span className="font-bold">
              {progress === 100 ? 'SYNC COMPLETE' : 'SYSTEM SYNCHRONIZATION'}
            </span>
            <span className="font-bold">{progress}%</span>
          </div>

          {/* Glowing Progress Bar */}
          <div className="h-2 w-full rounded-full bg-[#0d1b2a] border border-[#00f0ff]/30 overflow-hidden p-0.5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#7fe0ff] shadow-[0_0_12px_#00f0ff]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Staggered Terminal Output */}
        <div className="min-h-[140px] rounded-lg border border-[#00f0ff]/20 bg-[#070e1a]/80 p-4 space-y-1.5 text-[0.7rem] text-[#7fe0ff]">
          {visibleLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#00f0ff]">›</span>
              <span>{log}</span>
            </motion.div>
          ))}
          {visibleLogs.length < LOG_LINES.length && (
            <div className="flex items-center gap-2 text-[#00f0ff]/70">
              <span>›</span>
              <span className="inline-block w-2 h-3.5 bg-[#00f0ff] animate-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Footer Skip Prompt */}
      <div className="relative z-10 text-center tracking-widest text-[0.68rem] text-[#00f0ff]/70 animate-pulse">
        [ TAP / PRESS ANY KEY TO SKIP ]
      </div>
    </motion.div>
  );
}
