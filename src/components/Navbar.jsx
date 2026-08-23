import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight, FiFileText } from 'react-icons/fi';

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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#232329] py-3.5 shadow-lg'
          : 'bg-[#0A0A0B]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Name + Status Indicator */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="h-8 w-8 rounded-lg bg-[#16161A] border border-[#232329] flex items-center justify-center font-mono font-bold text-xs text-[#C6FF3D] group-hover:border-[#C6FF3D] transition-colors">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-[#EDEDED] group-hover:text-[#C6FF3D] transition-colors">
              Rakesh Kumar
            </span>
            <span className="flex items-center gap-1.5 text-[0.68rem] font-mono text-[#9E9EA8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
              <span>Available for hire</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans font-medium text-[#9E9EA8]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#EDEDED] transition-colors hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/rakeshkumar0804"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#232329] bg-[#121215] text-xs font-sans font-medium text-[#EDEDED] hover:border-[#EDEDED]/40 hover:bg-[#16161A] transition-all"
          >
            <FiFileText className="text-[#9E9EA8]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C6FF3D] text-xs font-sans font-bold text-[#0A0A0B] hover:bg-[#B8F230] shadow-[0_0_20px_rgba(198,255,61,0.25)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight className="text-xs" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-[#232329] bg-[#16161A] text-[#EDEDED]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232329] bg-[#0A0A0B]/95 backdrop-blur-xl px-6 py-5 space-y-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-sans font-medium text-[#9E9EA8] hover:text-[#EDEDED] hover:bg-[#16161A] rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#232329] flex flex-col gap-2.5">
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-[#232329] text-xs font-sans font-medium text-[#EDEDED]"
            >
              <FiFileText className="text-xs" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#C6FF3D] text-xs font-sans font-bold text-[#0A0A0B]"
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
