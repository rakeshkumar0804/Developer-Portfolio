import React, { useState, useEffect } from 'react';

export const TopHud = () => {
  const [timeString, setTimeString] = useState('');

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

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-7 py-4 pointer-events-none select-none font-mono text-xs text-slate-400 bg-[#050811]/80 backdrop-blur-xl border-b border-slate-800/60">
      {/* 1. Left Header Item */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <span className="grid h-7 w-7 place-items-center rounded-md border border-cyan-400/40 bg-cyan-400/5 text-[10px] font-bold text-cyan-300">RK</span>
        <span className="text-[11px] tracking-[0.18em] text-slate-200 font-semibold uppercase">RAKESH.DEV</span>
        <span className="hidden lg:inline text-[10px] tracking-[0.12em] text-slate-500">BUILD • DEBUG • SHIP</span>
      </div>

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
