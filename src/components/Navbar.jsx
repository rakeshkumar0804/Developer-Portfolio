import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight, FiFileText, FiTerminal } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Systems', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090C]/85 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#08090C]/40 backdrop-blur-md border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Name + Status Indicator */}
        <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="h-8 w-8 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-[#10B981] group-hover:border-[#10B981]/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
              Rakesh Kumar
            </span>
            <span className="flex items-center gap-1.5 text-[0.68rem] font-mono text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Full-Stack Engineer</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-xs font-sans font-medium text-neutral-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/rakeshkumar0804"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-xs font-sans font-medium text-neutral-300 hover:border-white/20 hover:text-white transition-all"
          >
            <FiFileText className="text-neutral-400 text-xs" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#10B981] to-[#059669] text-xs font-sans font-semibold text-[#08090C] hover:opacity-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight className="text-xs" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-neutral-300"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#08090C]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-sans font-medium text-neutral-300 hover:text-white hover:bg-white/[0.05] rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-white/[0.08] text-xs font-sans font-medium text-white"
            >
              <FiFileText className="text-xs" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#10B981] text-xs font-sans font-semibold text-[#08090C]"
            >
              <span>Get in Touch</span>
              <FiArrowUpRight className="text-xs" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
