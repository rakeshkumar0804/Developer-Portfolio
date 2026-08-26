import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'about', href: '#about' },
  { name: 'skills', href: '#skills' },
  { name: 'projects', href: '#projects' },
  { name: 'experience', href: '#experience' },
  { name: 'certifications', href: '#certifications' },
  { name: 'contact', href: '#contact' },
];

export const TelemetryStatus = () => {
  const [time, setTime] = useState('');
  const [barsActive, setBarsActive] = useState(4);

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

    const sigTimer = setInterval(() => {
      const pattern = [4, 4, 3, 4, 4, 2, 4, 3];
      setBarsActive(pattern[Math.floor(Math.random() * pattern.length)]);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(sigTimer);
    };
  }, []);

  return (
    <div className="flex items-center space-x-3 font-mono text-[11px] tracking-[0.22em] text-[#7fa0c7] select-none bg-transparent p-0 border-0 shadow-none">
      <span>SIG</span>

      {/* Raw Crisp SVG Signal Bars - No Blur Glow */}
      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" className="overflow-visible">
        <rect x="0" y="9.5" width="2.5" height="3.5" rx="0.5" fill={barsActive >= 1 ? '#38bdf8' : '#1e293b'} />
        <rect x="5" y="6.5" width="2.5" height="6.5" rx="0.5" fill={barsActive >= 2 ? '#38bdf8' : '#1e293b'} />
        <rect x="10" y="3.5" width="2.5" height="9.5" rx="0.5" fill={barsActive >= 3 ? '#38bdf8' : '#1e293b'} />
        <rect x="15" y="0" width="2.5" height="13" rx="0.5" fill={barsActive >= 4 ? '#38bdf8' : '#1e293b'} />
      </svg>

      <span>T</span>
      <span className="text-[#94a3b8]">{time || '19:15:29'}</span>
      <span className="text-[#64748b]">IST</span>
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

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
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

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 border border-white/[0.1] bg-[#0d1117] px-3 py-1 rounded-md text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-slate-600 mr-0.5">$</span>
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Top-Right Unboxed Raw SVG Telemetry Status */}
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
