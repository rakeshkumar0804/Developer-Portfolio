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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [timeString, setTimeString] = useState('');

  // Live IST (India Standard Time) Digital Telemetry Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Top-Right Cyber/Sci-Fi Live Telemetry Status Bar Widget */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-[#0b101b]/80 font-mono text-xs shadow-[0_0_12px_rgba(34,211,238,0.08)] select-none">
            <span className="text-slate-400 font-semibold tracking-wider">SIG</span>

            {/* 4 distinct vertical bars aligned to the bottom */}
            <div className="flex items-end gap-[3px] h-3.5" aria-label="Signal Strength 100%">
              <span className="w-[3px] h-[35%] bg-cyan-400 rounded-[1px]" />
              <span className="w-[3px] h-[55%] bg-cyan-400 rounded-[1px]" />
              <span className="w-[3px] h-[75%] bg-cyan-400 rounded-[1px]" />
              <span className="w-[3px] h-[100%] bg-cyan-400 rounded-[1px] shadow-[0_0_6px_#22d3ee]" />
            </div>

            <span className="text-cyan-400 font-bold ml-1">T</span>
            <span className="text-slate-100 font-medium tracking-wide">{timeString || '14:06:30'}</span>
            <span className="text-slate-500 text-[10px] tracking-wider">IST</span>
          </div>

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
