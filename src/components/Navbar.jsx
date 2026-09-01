import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const topics = [
  { name: '$ops', href: '#operations', sectionId: 'operations' },
  { name: '$principles', href: '#principles', sectionId: 'principles' },
  { name: '$systems', href: '#systems', sectionId: 'systems' },
  { name: '$signals', href: '#opensource', sectionId: 'opensource' },
  { name: '$architect', href: '#architect', sectionId: 'architect' },
  { name: '$comms', href: '#contact', sectionId: 'contact' },
];

export const TopHud = () => {
  const [timeString, setTimeString] = useState('');
  const [activeSection, setActiveSection] = useState('operations');

  useEffect(() => {
    const updateTime = () => {
      setTimeString(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
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
      window.clearInterval(timer);
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
        <span className="text-[11px] tracking-[0.25em] text-slate-300 font-medium uppercase">
          RAKESH-CORE UPLINK ACTIVE
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

      <div className="flex items-center gap-3 pointer-events-auto font-mono text-[11px] tracking-widest text-slate-300">
        <span className="text-slate-400">SIG</span>
        <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 12" fill="none" aria-hidden="true">
          <rect x="0" y="8.5" width="2.5" height="3.5" rx="0.5" fill="#38bdf8" />
          <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" fill="#38bdf8" />
          <rect x="9" y="3.5" width="2.5" height="8.5" rx="0.5" fill="#38bdf8" />
          <rect x="13.5" y="0.5" width="2.5" height="11.5" rx="0.5" fill="#1e3a5f" opacity="0.6" />
        </svg>
        <span className="text-slate-300 ml-2 font-mono">T {timeString || '00:00:00'} IST</span>
        <span className="text-slate-600 text-sm leading-none select-none ml-1">┐</span>
      </div>
    </header>
  );
};

export default TopHud;
