import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'philosophy', href: '#philosophy' },
  { name: 'principles', href: '#principles' },
  { name: 'systems', href: '#systems' },
  { name: 'open-source', href: '#opensource' },
  { name: 'architect', href: '#architect' },
  { name: 'matrix', href: '#matrix' },
  { name: 'contact', href: '#contact' },
];

export const TelemetryStatus = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 select-none">
      <span className="tracking-wider text-slate-400">SIG</span>
      <svg
        className="w-3.5 h-3 text-cyan-400"
        viewBox="0 0 14 12"
        fill="currentColor"
      >
        <rect x="0" y="9" width="2" height="3" rx="0.5" opacity="0.4" />
        <rect x="4" y="6" width="2" height="6" rx="0.5" opacity="0.6" />
        <rect x="8" y="3" width="2" height="9" rx="0.5" opacity="0.8" />
        <rect x="12" y="0" width="2" height="12" rx="0.5" />
      </svg>
      <span className="mx-1 text-slate-600">•</span>
      <span className="text-slate-300 font-mono">T {time || '19:10:51'} IST</span>
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        'hero',
        'philosophy',
        'about',
        'principles',
        'systems',
        'projects',
        'opensource',
        'architect',
        'matrix',
        'contact',
        'debrief',
      ];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          const mapToNav = {
            about: 'philosophy',
            projects: 'systems',
          };
          setActiveSection(mapToNav[sectionIds[i]] || sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 font-mono ${
        scrolled
          ? 'py-2 bg-[#0a0e14]/95 backdrop-blur-md border-b border-[#22d3ee]/20 shadow-lg shadow-black/40'
          : 'py-3 bg-[#0a0e14]/80 backdrop-blur-sm border-b border-white/[0.06]'
      }`}
    >
      <div className="w-full px-3 sm:px-6 flex items-center justify-between">
        {/* Terminal Brand Prompt */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-[#22d3ee] transition-colors group shrink-0"
        >
          <span className="text-emerald-400 font-bold">rakesh@portfolio</span>
          <span className="text-slate-500">:</span>
          <span className="text-[#38bdf8]">~/{activeSection}</span>
          <span className="inline-block w-2 h-3.5 bg-[#22d3ee] animate-pulse" />
        </a>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-transparent p-0 border-0 text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 py-1 transition-all ${
                  isActive
                    ? 'text-cyan-400 border-b border-cyan-400/80 bg-cyan-950/20 rounded-t font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] rounded'
                }`}
              >
                <span className="text-slate-500 mr-0.5">$</span>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Top-Right Clean SVG Signal & Timestamp Telemetry Status */}
        <div className="flex items-center gap-3 shrink-0">
          <TelemetryStatus />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-white/[0.1] bg-[#0d1117] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#22d3ee]/20 bg-[#0a0e14]/98 px-6 py-4 space-y-1.5 text-xs font-mono"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2 rounded transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <span>$ {link.name}</span>
                <span className="text-slate-600">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
