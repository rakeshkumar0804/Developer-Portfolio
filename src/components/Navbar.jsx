import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const topics = [
  { name: '~/work', href: '#operations', sectionId: 'operations' },
  { name: '~/approach', href: '#principles', sectionId: 'principles' },
  { name: '~/projects', href: '#systems', sectionId: 'systems' },
  { name: '~/open-source', href: '#opensource', sectionId: 'opensource' },
  { name: '~/profile', href: '#architect', sectionId: 'architect' },
  { name: '~/contact', href: '#contact', sectionId: 'contact' },
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
        window.lenis.scrollTo(element, { offset: -70, duration: 0.65 });
      } else {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-7 py-4 pointer-events-none select-none font-mono text-xs text-slate-400 bg-[#050811]/80 backdrop-blur-xl border-b border-slate-800/60">
      {/* 1. Left Header Item */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="grid h-7 w-7 place-items-center rounded-md border border-cyan-400/40 bg-cyan-400/5 text-[10px] font-bold text-cyan-300">RK</span>
        <span className="text-[11px] tracking-[0.18em] text-slate-200 font-semibold uppercase">RAKESH.DEV</span>
        <span className="hidden lg:inline text-[10px] tracking-[0.12em] text-slate-500">BUILD • DEBUG • SHIP</span>
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

      <div className="flex items-center gap-2 pointer-events-auto font-mono text-[10px] sm:text-[11px] tracking-wider text-slate-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
        <span className="hidden sm:inline text-emerald-300">OPEN TO SDE ROLES</span>
        <span className="hidden sm:inline text-slate-700">/</span>
        <span>{timeString || '00:00:00'} IST</span>
      </div>
    </header>
  );
};

export default TopHud;
