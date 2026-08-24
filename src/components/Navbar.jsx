import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { num: '01', name: 'PRINCIPLES', href: '#principles' },
  { num: '02', name: 'SYSTEMS', href: '#systems' },
  { num: '03', name: 'SIGNALS', href: '#signals' },
  { num: '04', name: 'ARCHITECT', href: '#architect' },
  { num: '05', name: 'SUBSYSTEMS', href: '#subsystems' },
  { num: '06', name: 'RECOGNITION', href: '#recognition' },
  { num: '07', name: 'COMMS', href: '#comms' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

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
          ? 'py-2.5 bg-[#030712]/92 backdrop-blur-xl border-b border-sky-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-3.5 bg-[#030712]/50 backdrop-blur-sm border-b border-sky-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Node */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="h-7 w-7 rounded-xs bg-[#060e1c] border border-[#38bdf8]/60 flex items-center justify-center font-mono font-bold text-xs text-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.2)] group-hover:border-[#38bdf8] transition-all">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
              {personalInfo.name}
            </span>
            <span className="flex items-center gap-1.5 text-[0.6rem] font-mono text-[#94a3b8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>SYS_READY // MERN</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 rounded-xs border border-sky-500/15 bg-[#060e1c]/60 px-3 py-1 backdrop-blur-md font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 py-1 rounded-xs transition-all duration-150 ${
                  isActive
                    ? 'text-[#38bdf8] font-bold bg-[#38bdf8]/10 border-b border-[#38bdf8]'
                    : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[#fbbf24] text-[0.65rem] mr-1">{link.num}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs border border-[#38bdf8]/50 bg-[#38bdf8]/10 text-[#38bdf8] font-mono text-xs font-semibold hover:bg-[#38bdf8] hover:text-[#030712] transition-all duration-150"
          >
            <span>[ RESUME ↗ ]</span>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xs border border-sky-500/25 bg-[#060e1c] text-[#f8fafc]"
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
            className="xl:hidden border-b border-sky-500/25 bg-[#030712]/98 backdrop-blur-2xl px-6 py-4 space-y-3 font-mono text-xs"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xs border ${
                    activeSection === link.href.replace('#', '')
                      ? 'border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8] font-bold'
                      : 'border-transparent text-[#94a3b8] hover:bg-[#060e1c] hover:text-[#f8fafc]'
                  }`}
                >
                  <span>
                    <span className="text-[#fbbf24] mr-2">{link.num}</span>
                    {link.name}
                  </span>
                  <span className="text-[0.62rem] text-[#64748b]">NAV_GO</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-sky-500/15">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2 rounded-xs bg-[#38bdf8] text-[#030712] font-bold text-xs shadow-sm"
              >
                <span>DOWNLOAD RESUME ARCHIVE</span>
                <FiDownload />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
