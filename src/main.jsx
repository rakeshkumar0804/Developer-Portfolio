import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import HUDFrame from './components/HUDFrame';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OperatingPrinciples from './components/OperatingPrinciples';
import Projects from './components/Projects';
import GitHubSignals from './components/GitHubSignals';
import AboutArchitect from './components/AboutArchitect';
import SkillsMatrix from './components/SkillsMatrix';
import Certifications from './components/Certifications';
import ContactConsole from './components/ContactConsole';
import SystemReview from './components/SystemReview';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen cyber-grid-bg text-[#e6f1ff] font-sans selection:bg-[#38cfff]/30 selection:text-[#38cfff] overflow-x-hidden">
      {/* Subtle Scanlines Overlay */}
      <div className="pointer-events-none fixed inset-0 z-30 scanline-overlay opacity-40" />

      {/* Global Fixed HUD Telemetry Frame & Depth Rail */}
      <HUDFrame />

      {/* Sticky Cyber-HUD Navbar */}
      <Navbar />

      {/* Main Command Center Stream */}
      <main className="relative z-10">
        <Hero />
        <OperatingPrinciples />
        <Projects />
        <GitHubSignals />
        <AboutArchitect />
        <SkillsMatrix />
        <Certifications />
        <ContactConsole />
        <SystemReview />
      </main>

      {/* System Footer & Floating ReturntoTop */}
      <Footer />
      <BackToTop />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
