import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = [
  'Full-Stack Developer',
  'Full-Stack · AI · Cloud-Native',
  'Digital Systems Engineer',
];

export default function CyclingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 sm:h-9 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="font-mono text-base sm:text-lg md:text-xl font-semibold text-[#00f0ff] tracking-wide flex items-center gap-2"
        >
          <span className="text-[#00f0ff]/50">▸</span>
          <span>{PHRASES[index]}</span>
          <span className="inline-block w-1.5 h-4 bg-[#00f0ff] animate-pulse ml-0.5" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
