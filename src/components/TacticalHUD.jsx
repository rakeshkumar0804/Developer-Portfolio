import React, { useState, useEffect } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { isAudioEnabled, setAudioEnabled, playButtonClick } from '../utils/audio';

const DEPTH_SECTIONS = [
  { id: 'hero', label: 'L0 · CORE' },
  { id: 'about', label: 'L1 · ARCH' },
  { id: 'experience', label: 'L2 · TIME' },
  { id: 'projects', label: 'L3 · PROJ' },
  { id: 'skills', label: 'L4 · SPEC' },
  { id: 'contact', label: 'L5 · UPLK' },
];

export default function TacticalHUD() {
  const [timeStr, setTimeStr] = useState('--:--:--');
  const [sysLoad, setSysLoad] = useState(38);
  const [activeDepth, setActiveDepth] = useState('hero');
  const [soundOn, setSoundOn] = useState(() => isAudioEnabled());

  // Real-time IST clock + slight jitter on sys load
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
      setSysLoad(36 + Math.floor(Math.random() * 5));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = DEPTH_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(DEPTH_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveDepth(DEPTH_SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setAudioEnabled(nextState);
    if (nextState) playButtonClick();
  };

  return (
    <>
      {/* Corner Crosshairs (+) */}
      <div className="pointer-events-none fixed top-12 left-4 z-40 text-[#00f0ff]/40 font-mono text-sm select-none">
        +
      </div>
      <div className="pointer-events-none fixed top-12 right-4 z-40 text-[#00f0ff]/40 font-mono text-sm select-none">
        +
      </div>
      <div className="pointer-events-none fixed bottom-10 left-4 z-40 text-[#00f0ff]/40 font-mono text-sm select-none">
        +
      </div>
      <div className="pointer-events-none fixed bottom-10 right-4 z-40 text-[#00f0ff]/40 font-mono text-sm select-none">
        +
      </div>

      {/* Top Tactical Header Bar */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-2.5 font-mono text-[0.68rem] text-[#00f0ff] select-none border-b border-[#00f0ff]/15 bg-[#050811]/70 backdrop-blur-md">
        {/* Top-Left: Glowing cyan node + Uplink Active + Drawing No */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
          </span>
          <span className="font-bold tracking-wider">RAKESH-CORE // UPLINK ACTIVE</span>
          <span className="hidden md:inline-block text-[#00f0ff]/40">·</span>
          <span className="hidden md:inline-block text-[#00f0ff]/60">DRAWING NO. RK-2026 · MASTER SCHEMATIC</span>
        </div>

        {/* Top-Right: Signal strength meter + Live IST timestamp */}
        <div className="flex items-center gap-3.5 tracking-wider">
          <div className="flex items-center gap-1.5 text-[#00f0ff]/80">
            <span>SIG</span>
            <span className="font-bold tracking-tighter">ıll</span>
          </div>
          <span className="text-[#00f0ff]/30">·</span>
          <div className="text-[#00f0ff] font-semibold tabular-nums">
            T {timeStr} IST
          </div>
        </div>
      </div>

      {/* Right-Side: Fixed Vertical DEPTH Rail */}
      <div className="hidden lg:flex pointer-events-auto fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 font-mono text-[0.62rem] text-[#00f0ff]/60 select-none">
        <div className="text-[0.55rem] uppercase tracking-widest text-[#00f0ff]/40 font-bold border-b border-[#00f0ff]/20 pb-1 pr-1">
          DEPTH RAIL
        </div>
        {DEPTH_SECTIONS.map((section) => {
          const isActive = activeDepth === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center gap-2 transition-all group ${
                isActive
                  ? 'text-[#00f0ff] font-bold scale-105'
                  : 'hover:text-[#00f0ff] opacity-50 hover:opacity-100'
              }`}
            >
              <span className="tracking-wider">{section.label}</span>
              <span
                className={`h-1.5 rounded-full transition-all ${
                  isActive ? 'w-4 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]' : 'w-1.5 bg-[#00f0ff]/40'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Bottom Tactical Footer Bar */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-2 font-mono text-[0.65rem] text-[#00f0ff]/80 select-none border-t border-[#00f0ff]/15 bg-[#050811]/85 backdrop-blur-md">
        {/* Bottom-Left: Live Telemetry Metrics */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[#00f0ff]">GURUGRAM / VADODARA, IN</span>
          <span className="hidden sm:inline-block text-[#00f0ff]/30">·</span>
          <span>FPS 144</span>
          <span className="text-[#00f0ff]/30">·</span>
          <span className="tabular-nums">SYS LOAD {sysLoad}%</span>
        </div>

        {/* Bottom-Right: Tactical Audio Toggle */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#00f0ff]/30 bg-[#00f0ff]/5 hover:bg-[#00f0ff]/15 hover:border-[#00f0ff] text-[#00f0ff] transition-all tracking-wider font-semibold cursor-pointer"
          >
            {soundOn ? <FiVolume2 className="text-xs" /> : <FiVolumeX className="text-xs" />}
            <span>[ {soundOn ? 'AUDIO ON' : 'AUDIO OFF'} ]</span>
          </button>
        </div>
      </div>
    </>
  );
}
