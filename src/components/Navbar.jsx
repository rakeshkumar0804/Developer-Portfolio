import React, { useState, useEffect } from 'react';

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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleScroll = () => {
      const sectionIds = ['operations', 'principles', 'systems', 'opensource', 'architect', 'contact', 'debrief'];
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

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none select-none font-mono text-xs text-slate-400 bg-transparent">
      {/* 1. Left Header Item */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="text-slate-600 text-sm leading-none">┌</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] mr-1 animate-pulse" />
        <span className="text-[11px] tracking-[0.25em] text-slate-300 font-medium uppercase">
          RAKESH-CORE UPLINK ACTIVE
        </span>
      </div>

      {/* 2. Center Navigation Topics (Bare Floating Text — No Boxes, No Pills, No Backgrounds) */}
      <nav className="hidden md:flex pointer-events-auto items-center gap-6 text-[11px] tracking-widest">
        {topics.map((topic) => {
          const isActive = activeSection === topic.sectionId;
          return (
            <a
              key={topic.name}
              href={topic.href}
              onClick={(e) => handleNavClick(e, topic.href)}
              className={`transition-colors ${
                isActive
                  ? 'text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]'
                  : 'text-slate-400 hover:text-cyan-400'
              }`}
            >
              {topic.name}
            </a>
          );
        })}
      </nav>

      {/* 3. Right Header Item (Exact Clone of Reference Image) */}
      <div className="flex items-center gap-3 pointer-events-auto font-mono text-[11px] tracking-widest text-slate-300">
        <span className="text-slate-400">SIG</span>

        {/* 4-Bar Signal SVG Clone */}
        <svg className="w-4 h-3 flex-shrink-0" viewBox="0 0 16 12" fill="none">
          <rect x="0" y="8.5" width="2.5" height="3.5" rx="0.5" fill="#38bdf8" />
          <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" fill="#38bdf8" />
          <rect x="9" y="3.5" width="2.5" height="8.5" rx="0.5" fill="#38bdf8" />
          <rect x="13.5" y="0.5" width="2.5" height="11.5" rx="0.5" fill="#1e3a5f" opacity="0.6" />
        </svg>

        <span className="text-slate-300 ml-2">
          T {timeString || '01:03:05'} IST
        </span>

        <span className="text-slate-600 text-sm leading-none ml-1">┐</span>
      </div>
    </header>
  );
};

export default TopHud;
