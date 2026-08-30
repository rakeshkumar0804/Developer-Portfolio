import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Architect from './components/Architect';
import Contact from './components/Contact';
import MissionDebrief from './components/MissionDebrief';
import Footer from './components/Footer';
import HudFrame from './components/HudFrame';
import SystemBootloader from './components/SystemBootloader';

function App() {
  const [booting, setBooting] = useState(() => {
    // Only boot on first session visit
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasBooted');
    }
    return false;
  });

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll with Lighter, Effortless Physics
    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // 2. Global Keyboard Navigation (J/K or Down/Up to cycle slides, Escape for drawers/modals)
    const sectionIds = [
      'hero',
      'operations',
      'principles',
      'systems',
      'opensource',
      'architect',
      'matrix',
      'contact',
      'debrief',
    ];

    const handleKeyDown = (e) => {
      // Don't intercept if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) {
        return;
      }

      if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const currentScroll = window.scrollY;
        for (let i = 0; i < sectionIds.length; i++) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop > currentScroll + 120) {
            lenis.scrollTo(el, { offset: -70, duration: 0.85 });
            break;
          }
        }
      } else if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const currentScroll = window.scrollY;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop < currentScroll - 120) {
            lenis.scrollTo(el, { offset: -70, duration: 0.85 });
            break;
          }
        }
      } else if (e.key === 'Escape') {
        // Dispatch custom escape event for modals / drawers to close cleanly
        window.dispatchEvent(new CustomEvent('close-modals'));
      }
    };

    const handleReboot = () => {
      sessionStorage.removeItem('hasBooted');
      setBooting(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('reboot-system', handleReboot);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('reboot-system', handleReboot);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-subtle-grid text-[#f8fafc] font-sans selection:bg-[#22d3ee]/30 selection:text-[#22d3ee] overflow-x-hidden pb-8">
      {/* Initial System Uplink Preloader */}
      {booting && (
        <SystemBootloader onComplete={() => setBooting(false)} />
      )}

      {/* Global Cyberpunk HUD Presentation Frame */}
      <HudFrame />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Stream */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Principles />
        <Projects />
        <OpenSource />
        <Architect />
        <Contact />
        <MissionDebrief />
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
