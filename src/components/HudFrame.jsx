import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { label: '01/OPERATING PRINCIPLES', href: '#principles', id: 'principles' },
  { label: '02/DEPLOYED SYSTEMS', href: '#systems', id: 'systems' },
  { label: '03/OPEN-SOURCE SIGNALS', href: '#opensource', id: 'opensource' },
  { label: '04/THE ARCHITECT', href: '#architect', id: 'architect' },
  { label: '05/ESTABLISH COMMS', href: '#contact', id: 'contact' },
];

export default function HudFrame() {
  const [fps, setFps] = useState(144);
  const [sysLoad, setSysLoad] = useState(38);
  const [activeSection, setActiveSection] = useState('principles');
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  // Real-time requestAnimationFrame FPS calculation & System Load fluctuation
  useEffect(() => {
    let animationId;

    const calcFps = (now) => {
      frameCount.current++;
      if (now - lastTime.current >= 1000) {
        const currentFps = Math.round((frameCount.current * 1000) / (now - lastTime.current));
        setFps(Math.min(currentFps, 240));
        frameCount.current = 0;
        lastTime.current = now;
      }
      animationId = requestAnimationFrame(calcFps);
    };

    animationId = requestAnimationFrame(calcFps);

    // Realistic subtle CPU/Memory load fluctuation
    const loadInterval = setInterval(() => {
      setSysLoad(Math.floor(Math.random() * (45 - 28 + 1)) + 28);
    }, 2500);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(loadInterval);
    };
  }, []);

  useEffect(() => {
    let rafId;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + window.innerHeight * 0.38;
        let current = 'principles';

        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element && element.offsetTop <= scrollPosition) current = section.id;
        });

        setActiveSection(current);
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (!element) return;

    if (window.lenis) {
      window.lenis.scrollTo(element, { offset: -70, duration: 0.65 });
    } else {
      const top = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-4 pointer-events-none select-none font-mono">
      <div className="mx-auto flex max-w-[1500px] items-center border border-slate-700/70 bg-[#060b15]/94 shadow-[0_-12px_40px_rgba(2,6,23,0.62)] backdrop-blur-xl">
        <div className="hidden 2xl:flex shrink-0 items-center gap-2 border-r border-slate-700/60 px-4 py-3 text-[10px] text-slate-400">
          <span className="text-slate-600 text-sm leading-none">└</span>
          <span className="tracking-[0.16em]">GURUGRAM, HR, INDIA</span>
          <span className="text-slate-700">/</span>
          <span className="tracking-wider">FPS <span className="text-cyan-400">{fps}</span></span>
          <span className="text-slate-700">/</span>
          <span className="tracking-wider">SYS LOAD <span className="text-cyan-400">{sysLoad}%</span></span>
        </div>

        <nav className="hud-nav pointer-events-auto flex min-w-0 flex-1 items-center overflow-x-auto" aria-label="Portfolio sections">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={section.href}
                onClick={(event) => handleNavClick(event, section.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative flex min-h-11 min-w-max shrink-0 flex-1 items-center justify-center whitespace-nowrap border-r border-slate-800/70 px-3 py-3 text-[10px] tracking-[0.11em] transition-colors last:border-r-0 lg:text-[11px] ${
                  isActive
                    ? 'bg-cyan-400/[0.08] text-cyan-300'
                    : 'text-slate-400 hover:bg-slate-900/70 hover:text-slate-100'
                }`}
              >
                {section.label}
                {isActive && <span className="absolute inset-x-0 top-0 h-px bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />}
              </a>
            );
          })}
        </nav>

        <span className="hidden shrink-0 px-3 text-slate-600 sm:block">┘</span>
      </div>
    </div>
  );
}
