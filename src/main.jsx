import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
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
import Footer from './components/Footer';
import HudFrame from './components/HudFrame';
import SystemBootloader from './components/SystemBootloader';

function isBootCompleted() {
  try {
    return (
      sessionStorage.getItem('bootComplete') === 'true' ||
      sessionStorage.getItem('rakesh_core_booted') === 'true'
    );
  } catch (e) {
    return false;
  }
}

function App() {
  const [booting, setBooting] = useState(() => !isBootCompleted());

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll with Natural, Fluid Physics
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // If boot was skipped (already booted in this session) and there is a hash, honor it;
    // otherwise ensure top of page.
    if (isBootCompleted()) {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          window.setTimeout(() => {
            if (window.lenis) {
              window.lenis.scrollTo(targetEl, { offset: -70 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
      }
    }

    const handleReboot = () => {
      try {
        sessionStorage.removeItem('bootComplete');
        sessionStorage.removeItem('rakesh_core_booted');
      } catch (e) {}
      setBooting(true);
    };

    window.addEventListener('reboot-system', handleReboot);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('reboot-system', handleReboot);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  const handleBootComplete = () => {
    setBooting(false);
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (window.lenis) {
          window.lenis.scrollTo(targetEl, { offset: -70 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  };

  return (
    <div className="relative min-h-screen bg-subtle-grid text-[#f8fafc] font-sans selection:bg-[#22d3ee]/30 selection:text-[#22d3ee] overflow-x-hidden pb-8">
      {booting && <SystemBootloader onComplete={handleBootComplete} />}

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
