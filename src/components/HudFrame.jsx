import React, { useState, useEffect, useRef } from 'react';

const depthSections = [
  { id: 'hero', label: 'SYS' },
  { id: 'about', label: 'OPS' },
  { id: 'principles', label: 'PRINCIPLES' },
  { id: 'projects', label: 'SYSTEMS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'activity', label: 'ACTIVITY' },
  { id: 'contact', label: 'CONTACT' },
];

export default function HudFrame() {
  const [activeSection, setActiveSection] = useState('hero');
  const [fps, setFps] = useState(144);
  const [sysLoad, setSysLoad] = useState(38);
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
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = depthSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(depthSections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(depthSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40 select-none font-mono">
      {/* 4 Technical Corner Brackets */}
      <div className="absolute top-2 left-2 text-cyan-400/60 text-xs leading-none">┌</div>
      <div className="absolute top-2 right-2 text-cyan-400/60 text-xs leading-none">┐</div>
      <div className="absolute bottom-2 left-2 text-cyan-400/60 text-xs leading-none">└</div>
      <div className="absolute bottom-2 right-2 text-cyan-400/60 text-xs leading-none">┘</div>

      {/* Top Status Pill Under Navbar */}
      <div className="hidden lg:flex absolute top-14 left-6 items-center gap-1.5 px-2 py-0.5 rounded border border-cyan-500/20 bg-[#050811]/90 text-[10px] tracking-widest text-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.15)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>RAKESH-CORE UPLINK ACTIVE</span>
      </div>

      {/* Right-Side Vertical Navigation Track (DEPTH) */}
      <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-auto">
        <div className="text-[9px] tracking-[0.25em] text-slate-500 font-bold rotate-90 mb-2">
          DEPTH
        </div>

        <div className="flex flex-col items-center gap-3 relative py-2">
          {/* Vertical Track Line */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-slate-800" />

          {depthSections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-center cursor-pointer p-1"
                aria-label={`Scroll to ${sec.label}`}
              >
                {/* Node Dot Indicator */}
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-300 relative z-10 ${
                    isActive
                      ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee] scale-125'
                      : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />

                {/* Hover Tooltip Label */}
                <span className="absolute right-6 px-2 py-0.5 rounded bg-[#0b101b] border border-slate-800 text-[10px] text-cyan-400 tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Persistent Real-Time Telemetry Bar (Unboxed & Transparent Directly on Grid) */}
      <div className="absolute bottom-0 left-0 right-0 pb-3 pt-0 px-5 sm:px-8 bg-transparent backdrop-blur-none border-0 shadow-none flex items-center justify-between text-[11px] tracking-wider text-slate-400 font-mono">
        <div className="flex items-center gap-4 truncate">
          <span>GURUGRAM, HR, INDIA</span>
          <span>•</span>
          <span>
            FPS <strong className="text-cyan-400 font-normal">{fps}</strong>
          </span>
          <span>•</span>
          <span>
            SYS LOAD <strong className="text-cyan-400 font-normal">{sysLoad}%</strong>
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-[10px] shrink-0">
          <span>....</span>
          <span>AUDIO OFF</span>
        </div>
      </div>
    </div>
  );
}
