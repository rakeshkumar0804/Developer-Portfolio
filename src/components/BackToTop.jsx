import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

export default function BackToTop() {
  const { isDark } = useTheme();
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
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-2xl border shadow-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 group cursor-pointer ${
            isDark
              ? 'bg-slate-900/90 border-white/[0.12] text-slate-200 hover:text-white hover:border-indigo-500 shadow-indigo-500/10'
              : 'bg-white/95 border-slate-300 text-slate-700 hover:text-indigo-600 hover:border-indigo-500 shadow-slate-300'
          }`}
          aria-label="Scroll to top of page"
        >
          <FiArrowUp className="text-lg group-hover:scale-110 transition-transform" />
          <span className="sr-only">Back to top ({scrollPercent}%)</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
