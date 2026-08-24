import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import BootLoader from './components/BootLoader';
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
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <div className="relative min-h-screen blueprint-grid-bg text-[#f8fafc] font-sans selection:bg-[#38bdf8]/30 selection:text-[#38bdf8] overflow-x-hidden">
      {/* Subtle Boot Animation Sequence */}
      {!bootComplete && <BootLoader onComplete={() => setBootComplete(true)} />}

      {/* Global Fixed HUD Telemetry Frame & Depth Axis Rail */}
      <HUDFrame />

      {/* Sticky Blueprint Navbar */}
      <Navbar />

      {/* Main Engineering Command Stream */}
      <main className="relative z-10">
        <Hero />
        <OperatingPrinciples />
        <Projects />
        <GitHubSignals />
        <AboutArchitect />
        <SkillsMatrix />
        <Certifications />
        <ContactConsole />
      </main>

      {/* Telemetry Footer & Back to Top */}
      <Footer />
      <BackToTop />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
