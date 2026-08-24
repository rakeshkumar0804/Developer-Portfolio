import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setVisible(currentScroll > 350);
      if (totalScroll > 0) {
        setScrollPercent(Math.round((currentScroll / totalScroll) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 p-2.5 rounded-xs border border-sky-500/40 bg-[#060e1c]/95 text-[#38bdf8] hover:bg-[#38bdf8] hover:text-[#030712] transition-all duration-150 cursor-pointer group shadow-lg"
          aria-label="Scroll to top of page"
        >
          <FiArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Back to top ({scrollPercent}%)</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
