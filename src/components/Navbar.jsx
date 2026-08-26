import React, { useState, useEffect } from 'react';

export const TopHud = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }) + ' IST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 pointer-events-none select-none bg-transparent font-mono">
      {/* Top-Left Corner Bracket & Uplink Status */}
      <div className="flex items-center gap-3">
        <span className="text-slate-600 text-sm leading-none">┌</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
          <span className="text-[11px] tracking-[0.25em] text-slate-300 font-semibold uppercase">
            RAKESH-CORE UPLINK ACTIVE
          </span>
        </div>
      </div>

      {/* Top-Right Signal, Live Clock & Corner Bracket */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="text-slate-500 text-[11px] tracking-widest">SIG</span>
          {/* Clean 4-bar SVG cellular signal */}
          <svg className="w-3.5 h-3 text-cyan-400" viewBox="0 0 14 12" fill="currentColor">
            <rect x="0" y="9" width="2" height="3" rx="0.5" opacity="0.4" />
            <rect x="4" y="6" width="2" height="6" rx="0.5" opacity="0.6" />
            <rect x="8" y="3" width="2" height="9" rx="0.5" opacity="0.8" />
            <rect x="12" y="0" width="2" height="12" rx="0.5" />
          </svg>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-mono text-[11px] tracking-widest">
            T {time || '01:03:05 IST'}
          </span>
        </div>
        <span className="text-slate-600 text-sm leading-none">┐</span>
      </div>
    </header>
  );
};

export default TopHud;
