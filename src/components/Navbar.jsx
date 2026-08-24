import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { num: '01', name: 'Principles', href: '#principles' },
  { num: '02', name: 'Systems', href: '#systems' },
  { num: '03', name: 'Signals', href: '#signals' },
  { num: '04', name: 'Architect', href: '#architect' },
  { num: '05', name: 'Matrix', href: '#subsystems' },
  { num: '06', name: 'Recognition', href: '#recognition' },
  { num: '07', name: 'Comms', href: '#comms' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'principles', 'systems', 'signals', 'architect', 'subsystems', 'recognition', 'comms'];
      const scrollPos = window.scrollY + 180;

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
      className={`fixed top-6 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'py-2.5 bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'py-3.5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Node */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="h-6 w-6 rounded-xs bg-[#060e1c] border border-[#38bdf8]/40 flex items-center justify-center font-mono font-bold text-[0.65rem] text-[#38bdf8] group-hover:border-[#38bdf8] transition-colors">
            RK
          </div>
          <span className="font-sans font-bold text-sm tracking-tight text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#38bdf8] font-medium'
                    : 'hover:text-[#f8fafc]'
                }`}
              >
                <span className="text-[#fbbf24] text-[0.6rem] mr-1 opacity-70">{link.num}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-white/[0.12] bg-[#060e1c] text-xs font-mono text-slate-300 hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all"
          >
            <span>Resume</span>
            <FiExternalLink className="text-[0.65rem]" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-xs border border-white/[0.1] bg-[#060e1c] text-slate-300"
            aria-label="Toggle navigation"
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
            className="lg:hidden border-b border-white/[0.08] bg-[#030712]/98 backdrop-blur-2xl px-6 py-4 space-y-2 font-mono text-xs"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xs ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-[#38bdf8]/10 text-[#38bdf8] font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>
                    <span className="text-[#fbbf24] mr-2 opacity-70">{link.num}</span>
                    {link.name}
                  </span>
                  <span className="text-[0.6rem] text-slate-600">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
