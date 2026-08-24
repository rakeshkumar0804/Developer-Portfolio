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
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 p-3 rounded-sm border border-[#38cfff]/60 bg-[#06101f]/95 text-[#38cfff] shadow-[0_0_15px_rgba(56,207,255,0.3)] hover:bg-[#38cfff] hover:text-[#020712] transition-all duration-200 cursor-pointer group"
          aria-label="Scroll to top of page"
        >
          <FiArrowUp className="text-base group-hover:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Back to top ({scrollPercent}%)</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
