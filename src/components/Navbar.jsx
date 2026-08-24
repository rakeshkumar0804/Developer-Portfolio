import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiTerminal, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { num: '01', name: 'CORE', href: '#hero' },
  { num: '02', name: 'PRINCIPLES', href: '#principles' },
  { num: '03', name: 'SYSTEMS', href: '#systems' },
  { num: '04', name: 'SIGNALS', href: '#signals' },
  { num: '05', name: 'ARCHITECT', href: '#architect' },
  { num: '06', name: 'SUBSYSTEMS', href: '#subsystems' },
  { num: '07', name: 'COMMS', href: '#comms' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = ['hero', 'principles', 'systems', 'signals', 'architect', 'subsystems', 'comms'];
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
      className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#020712]/90 backdrop-blur-xl border-b border-[#50aaff]/25 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'py-4 bg-[#020712]/40 backdrop-blur-sm border-b border-[#50aaff]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Terminal Node */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="h-8 w-8 rounded-sm bg-[#06101f] border border-[#38cfff]/60 flex items-center justify-center font-mono font-bold text-xs text-[#38cfff] shadow-[0_0_10px_rgba(56,207,255,0.2)] group-hover:border-[#38cfff] group-hover:shadow-[0_0_15px_#38cfff] transition-all">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-[#e6f1ff] group-hover:text-[#38cfff] transition-colors">
              {personalInfo.name}
            </span>
            <span className="flex items-center gap-1.5 text-[0.62rem] font-mono text-[#8aa4bf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38cfff] animate-pulse" />
              <span>SYS_READY // MERN</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 rounded-sm border border-[#50aaff]/20 bg-[#06101f]/60 px-3 py-1 backdrop-blur-md font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 py-1 rounded-sm transition-all duration-200 ${
                  isActive
                    ? 'text-[#38cfff] font-bold bg-[#38cfff]/15 border-b border-[#38cfff] shadow-[0_0_10px_rgba(56,207,255,0.2)]'
                    : 'text-[#8aa4bf] hover:text-[#e6f1ff] hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[#ffb23f] text-[0.65rem] mr-1">{link.num}</span>
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border border-[#38cfff]/60 bg-[#38cfff]/10 text-[#38cfff] font-mono text-xs font-semibold hover:bg-[#38cfff] hover:text-[#020712] shadow-[0_0_15px_rgba(56,207,255,0.2)] hover:shadow-[0_0_20px_#38cfff] transition-all duration-200"
          >
            <span>[ RESUME ↗ ]</span>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-sm border border-[#50aaff]/30 bg-[#06101f] text-[#e6f1ff]"
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
            className="xl:hidden border-b border-[#50aaff]/30 bg-[#020712]/95 backdrop-blur-2xl px-6 py-5 space-y-3 font-mono text-xs"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2 rounded-sm border ${
                    activeSection === link.href.replace('#', '')
                      ? 'border-[#38cfff]/50 bg-[#38cfff]/15 text-[#38cfff] font-bold'
                      : 'border-transparent text-[#8aa4bf] hover:bg-[#06101f] hover:text-[#e6f1ff]'
                  }`}
                >
                  <span>
                    <span className="text-[#ffb23f] mr-2">{link.num}</span>
                    {link.name}
                  </span>
                  <span className="text-[0.65rem] text-[#8aa4bf]">NAV_GO</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#50aaff]/20 flex flex-col gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-sm bg-[#38cfff] text-[#020712] font-bold text-xs shadow-md"
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
