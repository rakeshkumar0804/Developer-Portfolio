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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#232329] py-3.5 shadow-lg'
          : 'bg-[#0A0A0B]/60 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Brand Name + Status Indicator */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="h-7 w-7 rounded-lg bg-[#16161A] border border-[#232329] flex items-center justify-center font-mono font-bold text-xs text-[#C6FF3D] group-hover:border-[#C6FF3D] transition-colors">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-[#EDEDED] group-hover:text-[#C6FF3D] transition-colors">
              Rakesh Kumar
            </span>
            <span className="flex items-center gap-1.5 text-[0.68rem] font-mono text-[#9E9EA8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF3D] animate-pulse" />
              Available for hire
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

        {/* Desktop CTAs: Resume + Contact */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/rakeshkumar0804"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#232329] bg-[#121215] text-xs font-sans font-medium text-[#EDEDED] hover:border-[#EDEDED]/40 transition-colors"
          >
            <FiFileText className="text-xs text-[#9E9EA8]" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-[#C6FF3D] text-[#0A0A0B] text-xs font-sans font-semibold hover:bg-[#B8F230] transition-colors shadow-[0_0_15px_rgba(198,255,61,0.2)]"
          >
            <span>Get in Touch</span>
            <FiArrowUpRight className="text-sm" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-[#232329] bg-[#121215] text-[#EDEDED] hover:border-[#C6FF3D]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232329] bg-[#0E0E11] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-sans font-medium text-[#9E9EA8] hover:text-[#C6FF3D]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#232329] flex flex-col gap-2.5">
            <a
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg border border-[#232329] bg-[#121215] text-xs font-sans text-[#EDEDED]"
            >
              <FiFileText /> Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#C6FF3D] text-[#0A0A0B] text-xs font-sans font-bold"
            >
              Get in Touch <FiArrowUpRight />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
