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
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none px-6 py-3 bg-transparent flex items-center justify-between text-[11px] tracking-wider text-slate-400 font-mono select-none">
      {/* Bottom Persistent Real-Time Telemetry Bar (Unboxed & Transparent Directly on Grid) */}
      <div className="flex items-center gap-4 truncate">
        <span>└ GURUGRAM, HR, INDIA</span>
        <span>•</span>
        <span>
          FPS <strong className="text-cyan-400 font-normal">{fps}</strong>
        </span>
        <span>•</span>
        <span>
          SYS LOAD <strong className="text-cyan-400 font-normal">{sysLoad}%</strong>
        </span>
      </div>

      <div className="text-slate-600 text-xs shrink-0">
        ┘
      </div>
    </div>
  );
}
