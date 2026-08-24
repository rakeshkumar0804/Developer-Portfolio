import React, { useState, useEffect } from 'react';

const DEPTH_SECTIONS = [
  { id: 'hero', num: '00', label: 'HERO_CORE' },
  { id: 'principles', num: '01', label: 'PRINCIPLES' },
  { id: 'systems', num: '02', label: 'SYSTEMS' },
  { id: 'signals', num: '03', label: 'SIGNALS' },
  { id: 'architect', num: '04', label: 'ARCHITECT' },
  { id: 'subsystems', num: '05', label: 'SUBSYSTEMS' },
  { id: 'recognition', num: '06', label: 'RECOGNITION' },
  { id: 'comms', num: '07', label: 'COMMS' },
];

export default function HUDFrame() {
  const [timeStr, setTimeStr] = useState('--:--:--');
  const [sysLoad, setSysLoad] = useState(32);
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
      setSysLoad(30 + Math.floor(Math.random() * 4));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
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
      {/* Top HUD Telemetry Bar */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-1.5 font-mono text-[0.65rem] text-[#94a3b8] select-none border-b border-sky-500/15 bg-[#030712]/90 backdrop-blur-md">
        {/* Left: Uplink Active Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]" />
          </span>
          <span className="font-bold tracking-wider text-[#38bdf8]">RAKESH-CORE // UPLINK ACTIVE</span>
          <span className="hidden md:inline-block text-sky-500/30">·</span>
          <span className="hidden md:inline-block text-[#64748b]">SCHEMATIC: RK-2026-SYS</span>
        </div>

        {/* Right: Signal meter & Live IST time */}
        <div className="flex items-center gap-3 tracking-wider">
          <div className="flex items-center gap-1 text-[#38bdf8]">
            <span className="text-[0.6rem] text-[#64748b]">SIG</span>
            <span className="font-bold">ıll 100%</span>
          </div>
          <span className="text-sky-500/30">·</span>
          <div className="text-[#f8fafc] font-semibold tabular-nums">
            T {timeStr} IST
          </div>
        </div>
      </div>

      {/* Right-Side Fixed Vertical DEPTH Rail Tracker */}
      <div className="hidden xl:flex pointer-events-auto fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2 font-mono text-[0.6rem] text-[#94a3b8] select-none">
        <div className="text-[0.52rem] uppercase tracking-widest text-[#38bdf8]/70 font-bold border-b border-sky-500/20 pb-1 pr-1">
          DEPTH AXIS
        </div>
        {DEPTH_SECTIONS.map((section) => {
          const isActive = activeDepth === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-2 transition-all group ${
                isActive
                  ? 'text-[#38bdf8] font-bold scale-105'
                  : 'hover:text-[#38bdf8] opacity-50 hover:opacity-100'
              }`}
            >
              <span className="tracking-wider">
                <span className="text-[#fbbf24] mr-1">{section.num}</span>
                {section.label}
              </span>
              <span
                className={`h-1 rounded-xs transition-all ${
                  isActive ? 'w-3.5 bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]' : 'w-1 bg-sky-500/30'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Bottom Fixed HUD Telemetry Bar */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-1 font-mono text-[0.62rem] text-[#94a3b8] select-none border-t border-sky-500/15 bg-[#030712]/90 backdrop-blur-md">
        {/* Left Telemetry */}
        <div className="flex items-center gap-3">
          <span className="text-[#38bdf8] font-semibold">GURUGRAM, IN</span>
          <span className="text-sky-500/30">·</span>
          <span>FPS 144</span>
          <span className="text-sky-500/30">·</span>
          <span className="tabular-nums">SYS LOAD {sysLoad}%</span>
          <span className="hidden sm:inline-block text-sky-500/30">·</span>
          <span className="hidden sm:inline-block text-emerald-400 font-semibold">STATUS: OPTIMAL</span>
        </div>

        {/* Right Coordinates */}
        <div className="flex items-center gap-3 text-[0.6rem]">
          <span className="hidden md:inline-block text-[#64748b]">
            28.4595° N, 77.0266° E
          </span>
          <span className="hidden md:inline-block text-sky-500/30">·</span>
          <span className="text-[#38bdf8] font-semibold">MERN_ARCH_v2.6</span>
        </div>
      </div>
    </>
  );
}
