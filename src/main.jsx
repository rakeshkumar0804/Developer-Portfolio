import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Principles from './components/Principles';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Architect from './components/Architect';
import GitHubActivity from './components/GitHubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HudFrame from './components/HudFrame';

function App() {
  return (
    <div className="relative min-h-screen bg-subtle-grid text-[#f8fafc] font-sans selection:bg-[#22d3ee]/30 selection:text-[#22d3ee] overflow-x-hidden pb-8">
      {/* Global Cyberpunk HUD Presentation Frame */}
      <HudFrame />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Principles />
        <Projects />
        <OpenSource />
        <Architect />
        <GitHubActivity />
        <Contact />
      </main>

      {/* Footer & Floating Back-to-Top */}
      <Footer />
      <BackToTop />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
