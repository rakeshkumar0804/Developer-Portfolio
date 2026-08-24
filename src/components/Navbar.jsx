import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Activity', href: '#activity' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'activity', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 160;

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
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#6366f1] p-[1px] shadow-sm">
            <div className="h-full w-full bg-[#090a0f] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-[#38bdf8] group-hover:text-white transition-colors">
              RK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-slate-100 tracking-tight group-hover:text-[#38bdf8] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[0.7rem] text-slate-400 font-mono hidden sm:inline">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#131622]/60 px-4 py-1.5 backdrop-blur-md text-xs font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.1] shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Resume Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-[#38bdf8] hover:text-[#090a0f] border border-white/[0.1] hover:border-transparent text-xs font-medium text-slate-200 transition-all duration-200"
          >
            <span>Resume</span>
            <FiDownload className="text-xs" />
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-white/[0.1] bg-[#131622] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
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
            className="lg:hidden border-b border-white/[0.08] bg-[#090a0f]/98 backdrop-blur-2xl px-6 py-5 space-y-3"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-[#38bdf8]/10 text-[#38bdf8] font-semibold'
                      : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-600">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
