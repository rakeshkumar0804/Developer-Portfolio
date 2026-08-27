import React, { useState, useEffect, useRef } from 'react';

export default function HudFrame() {
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none select-none bg-transparent font-mono">
      {/* Left-Hand Corner Bracket & Telemetry */}
      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <span className="text-slate-600 text-sm leading-none">└</span>
        <span className="tracking-widest">GURUGRAM, HR, INDIA</span>
        <span className="text-slate-600">•</span>
        <span className="tracking-wider">
          FPS <span className="text-cyan-400">{fps}</span>
        </span>
        <span className="text-slate-600">•</span>
        <span className="tracking-wider">
          SYS LOAD <span className="text-cyan-400">{sysLoad}%</span>
        </span>
      </div>

      {/* Right-Hand Symmetrical Corner Bracket */}
      <span className="text-slate-600 text-sm leading-none">┘</span>
    </div>
  );
}
