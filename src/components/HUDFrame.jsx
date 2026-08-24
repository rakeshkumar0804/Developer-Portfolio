import React, { useState, useEffect } from 'react';
import { FiRadio, FiActivity, FiLayers } from 'react-icons/fi';

const DEPTH_SECTIONS = [
  { id: 'hero', num: '01', label: 'HERO_CORE' },
  { id: 'principles', num: '02', label: 'PRINCIPLES' },
  { id: 'systems', num: '03', label: 'SYSTEMS' },
  { id: 'signals', num: '04', label: 'SIGNALS' },
  { id: 'architect', num: '05', label: 'ARCHITECT' },
  { id: 'subsystems', num: '06', label: 'SUBSYSTEMS' },
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
      setSysLoad(30 + Math.floor(Math.random() * 5));
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
      {/* Corner Crosshairs */}
      <div className="pointer-events-none fixed top-14 left-4 z-40 text-[#38cfff]/30 font-mono text-sm select-none hidden md:block">
        +
      </div>
      <div className="pointer-events-none fixed top-14 right-4 z-40 text-[#38cfff]/30 font-mono text-sm select-none hidden md:block">
        +
      </div>
      <div className="pointer-events-none fixed bottom-10 left-4 z-40 text-[#38cfff]/30 font-mono text-sm select-none hidden md:block">
        +
      </div>
      <div className="pointer-events-none fixed bottom-10 right-4 z-40 text-[#38cfff]/30 font-mono text-sm select-none hidden md:block">
        +
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-2 font-mono text-[0.65rem] text-[#8aa4bf] select-none border-b border-[#50aaff]/20 bg-[#020712]/80 backdrop-blur-md">
        {/* Left: Uplink Active Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38cfff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38cfff]" />
          </span>
          <span className="font-bold tracking-wider text-[#38cfff]">RAKESH-CORE // UPLINK ACTIVE</span>
          <span className="hidden md:inline-block text-[#50aaff]/40">·</span>
          <span className="hidden md:inline-block text-[#8aa4bf]/70">SCHEMATIC: RK-2026-SYS</span>
        </div>

        {/* Right: Signal meter & Live IST time */}
        <div className="flex items-center gap-3.5 tracking-wider">
          <div className="flex items-center gap-1 text-[#38cfff]">
            <span className="text-[0.6rem] text-[#8aa4bf]">SIG</span>
            <span className="font-bold">ıll 100%</span>
          </div>
          <span className="text-[#50aaff]/30">·</span>
          <div className="text-[#e6f1ff] font-semibold tabular-nums">
            T {timeStr} IST
          </div>
        </div>
      </div>

      {/* Right-Side Fixed Vertical DEPTH Rail Tracker */}
      <div className="hidden lg:flex pointer-events-auto fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 font-mono text-[0.6rem] text-[#8aa4bf] select-none">
        <div className="text-[0.52rem] uppercase tracking-widest text-[#38cfff]/70 font-bold border-b border-[#50aaff]/30 pb-1 pr-1">
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
                  ? 'text-[#38cfff] font-bold scale-105'
                  : 'hover:text-[#38cfff] opacity-50 hover:opacity-100'
              }`}
            >
              <span className="tracking-wider">
                <span className="text-[#ffb23f] mr-1">{section.num}</span>
                {section.label}
              </span>
              <span
                className={`h-1.5 rounded-sm transition-all ${
                  isActive ? 'w-4 bg-[#38cfff] shadow-[0_0_8px_#38cfff]' : 'w-1 bg-[#50aaff]/40'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Bottom Fixed HUD Telemetry Bar */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-1.5 font-mono text-[0.62rem] text-[#8aa4bf] select-none border-t border-[#50aaff]/20 bg-[#020712]/85 backdrop-blur-md">
        {/* Left Telemetry */}
        <div className="flex items-center gap-3">
          <span className="text-[#38cfff] font-semibold">GURUGRAM, IN</span>
          <span className="text-[#50aaff]/30">·</span>
          <span>FPS 144</span>
          <span className="text-[#50aaff]/30">·</span>
          <span className="tabular-nums">SYS LOAD {sysLoad}%</span>
          <span className="hidden sm:inline-block text-[#50aaff]/30">·</span>
          <span className="hidden sm:inline-block text-emerald-400 font-semibold">STATUS: OPTIMAL</span>
        </div>

        {/* Right Coordinates */}
        <div className="flex items-center gap-3 text-[0.6rem]">
          <span className="hidden md:inline-block text-[#8aa4bf]/70">
            28.4595° N, 77.0266° E
          </span>
          <span className="hidden md:inline-block text-[#50aaff]/30">·</span>
          <span className="text-[#38cfff] font-semibold">MERN_ARCH_v2.6</span>
        </div>
      </div>
    </>
  );
}
