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
    <div className="fixed inset-0 pointer-events-none z-50 select-none font-mono">
      {/* Bottom Technical Corner Brackets */}
      <div className="absolute bottom-2 left-2 text-slate-600 text-xs leading-none">└</div>
      <div className="absolute bottom-2 right-2 text-slate-600 text-xs leading-none">┘</div>

      {/* Bottom Persistent Real-Time Telemetry Bar (Unboxed & Transparent Directly on Grid) */}
      <div className="absolute bottom-0 left-0 right-0 pb-3 pt-0 px-5 sm:px-8 bg-transparent backdrop-blur-none border-0 shadow-none flex items-center justify-between text-[11px] tracking-wider text-slate-400 font-mono">
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

        <div className="text-cyan-400/60 text-xs shrink-0">
          ┘
        </div>
      </div>
    </div>
  );
}
