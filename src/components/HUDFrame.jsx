import React, { useState, useEffect } from 'react';

const DEPTH_SECTIONS = [
  { id: 'hero', num: '00', label: 'HERO' },
  { id: 'principles', num: '01', label: 'PRINCIPLES' },
  { id: 'systems', num: '02', label: 'SYSTEMS' },
  { id: 'signals', num: '03', label: 'SIGNALS' },
  { id: 'architect', num: '04', label: 'ARCHITECT' },
  { id: 'subsystems', num: '05', label: 'MATRIX' },
  { id: 'recognition', num: '06', label: 'RECOGNITION' },
  { id: 'comms', num: '07', label: 'COMMS' },
];

export default function HUDFrame() {
  const [timeStr, setTimeStr] = useState('--:--:--');
  const [activeDepth, setActiveDepth] = useState('hero');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTimeStr(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      for (let i = DEPTH_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(DEPTH_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveDepth(DEPTH_SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Quiet HUD Status Bar */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 py-1 font-mono text-[0.62rem] text-slate-500 select-none border-b border-white/[0.04] bg-[#030712]/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] opacity-80" />
          <span className="tracking-widest text-slate-400 font-semibold">RAKESH-CORE</span>
          <span className="text-slate-600">::</span>
          <span className="text-slate-500">FULL-STACK WORKSPACE</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-medium tabular-nums">{timeStr} IST</span>
          <span className="text-slate-700">|</span>
          <span className="text-[#38bdf8] font-semibold">SYS_ONLINE</span>
        </div>
      </div>

      {/* Right-Side Fixed Vertical Depth Rail Tracker */}
      <div className="hidden 2xl:flex pointer-events-auto fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 font-mono text-[0.58rem] text-slate-500 select-none">
        {DEPTH_SECTIONS.map((section) => {
          const isActive = activeDepth === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-2 transition-colors ${
                isActive
                  ? 'text-[#38bdf8] font-semibold'
                  : 'text-slate-600 hover:text-slate-300'
              }`}
            >
              <span className="tracking-wider">
                <span className="text-[#fbbf24] mr-1 opacity-80">{section.num}</span>
                {section.label}
              </span>
              <span
                className={`h-0.5 rounded-full transition-all ${
                  isActive ? 'w-3 bg-[#38bdf8]' : 'w-1 bg-slate-700'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Bottom Quiet Baseline Status Bar */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 py-1 font-mono text-[0.58rem] text-slate-500 select-none border-t border-white/[0.04] bg-[#030712]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">GURUGRAM, IN</span>
          <span className="text-slate-700">·</span>
          <span>MERN ARCHITECTURE</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-slate-600">28.4595° N, 77.0266° E</span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span className="text-slate-400">v2.6-PRODUCTION</span>
        </div>
      </div>
    </>
  );
}
