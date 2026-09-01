import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const topics = [
  { name: 'About', href: '#operations', sectionId: 'operations' },
  { name: 'Skills', href: '#principles', sectionId: 'principles' },
  { name: 'Projects', href: '#systems', sectionId: 'systems' },
  { name: 'GitHub', href: '#opensource', sectionId: 'opensource' },
  { name: 'Journey', href: '#architect', sectionId: 'architect' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const TopHud = () => {
  const [activeSection, setActiveSection] = useState('operations');

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sectionIds = ['operations', 'principles', 'systems', 'opensource', 'architect', 'contact', 'debrief'];
        const scrollPos = window.scrollY + 180;

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPos) {
            const mapped = sectionIds[i] === 'debrief' ? 'contact' : sectionIds[i];
            setActiveSection(mapped);
            break;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -70, duration: 1.2 });
      } else {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none select-none font-mono text-xs text-slate-400 bg-transparent">
      {/* 1. Left Header Item */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="text-slate-600 text-sm leading-none select-none">┌</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] mr-1 animate-pulse" />
        <span className="text-[11px] tracking-[0.18em] text-slate-300 font-medium uppercase">
          Rakesh Kumar
        </span>
      </div>

      {/* 2. Center Navigation Topics (Bare Floating Text with smooth gliding active indicator) */}
      <nav className="hidden md:flex pointer-events-auto items-center gap-6 text-[11px] tracking-widest relative">
        {topics.map((topic) => {
          const isActive = activeSection === topic.sectionId;
          return (
            <a
              key={topic.name}
              href={topic.href}
              onClick={(e) => handleNavClick(e, topic.href)}
              className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              {topic.name}
              {isActive && (
                <motion.span
                  layoutId="activeHudTopic"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>

      <div className="hidden lg:flex items-center gap-2 pointer-events-auto font-mono text-[11px] tracking-wider text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span>OPEN TO WORK</span>
      </div>
    </header>
  );
};

export default TopHud;
