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

function App() {
  const [booting, setBooting] = useState(() => !sessionStorage.getItem('rakesh_core_booted'));

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

    const handleReboot = () => {
      sessionStorage.removeItem('rakesh_core_booted');
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

  return (
    <div className="relative min-h-screen bg-subtle-grid text-[#f8fafc] font-sans selection:bg-[#22d3ee]/30 selection:text-[#22d3ee] overflow-x-hidden pb-8">
      {booting && <SystemBootloader onComplete={() => setBooting(false)} />}

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
