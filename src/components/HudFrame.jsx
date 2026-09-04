import React, { useState, useEffect, useRef } from 'react';

export default function HudFrame() {
  const [displayFps, setDisplayFps] = useState('LIVE');
  const [sysLoad, setSysLoad] = useState(38);

  const lastFrameTimeRef = useRef(performance.now());
  const frameDeltasRef = useRef([]);
  const lastUpdateRef = useRef(performance.now());

  useEffect(() => {
    let animationId;

    const resetMeasurement = () => {
      frameDeltasRef.current = [];
      lastFrameTimeRef.current = performance.now();
      lastUpdateRef.current = performance.now();
      setDisplayFps('LIVE');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setDisplayFps('LIVE');
        frameDeltasRef.current = [];
      } else {
        resetMeasurement();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const calcFps = (now) => {
      if (document.hidden) {
        animationId = requestAnimationFrame(calcFps);
        return;
      }

      const delta = now - lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;

      // Filter out hitches (e.g. initial render spikes, GC pauses, or pauses > 120ms)
      if (delta > 120) {
        frameDeltasRef.current = [];
        animationId = requestAnimationFrame(calcFps);
        return;
      }

      // Valid frame delta (roughly between 240 FPS [~4ms] and 20 FPS [50ms])
      if (delta >= 3) {
        frameDeltasRef.current.push(delta);
        // Rolling window of recent 18 frames (~125ms at 144Hz, ~300ms at 60Hz)
        if (frameDeltasRef.current.length > 18) {
          frameDeltasRef.current.shift();
        }
      }

      // Update displayed FPS periodically (every ~400ms) to avoid excessive re-renders
      if (now - lastUpdateRef.current >= 400) {
        lastUpdateRef.current = now;

        // Require at least 6 consecutive samples to compute a trustworthy rolling average
        if (frameDeltasRef.current.length >= 6) {
          const sum = frameDeltasRef.current.reduce((acc, d) => acc + d, 0);
          const avgDelta = sum / frameDeltasRef.current.length;
          const calculatedFps = Math.round(1000 / avgDelta);

          // Only accept measurements in the realistic 30–240 FPS range
          if (calculatedFps >= 30 && calculatedFps <= 240) {
            setDisplayFps(calculatedFps);
          } else {
            setDisplayFps('LIVE');
          }
        } else {
          setDisplayFps('LIVE');
        }
      }

      animationId = requestAnimationFrame(calcFps);
    };

    animationId = requestAnimationFrame(calcFps);

    // Realistic subtle CPU/Memory load fluctuation
    const loadInterval = setInterval(() => {
      if (!document.hidden) {
        setSysLoad(Math.floor(Math.random() * (45 - 28 + 1)) + 28);
      }
    }, 2500);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
      clearInterval(loadInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none select-none bg-transparent font-mono">
      {/* Left-Hand Corner Bracket & Telemetry */}
      <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
        <span className="text-slate-600 text-sm leading-none select-none">└</span>
        <span className="tracking-widest">GURUGRAM, HR, INDIA</span>
        <span className="text-slate-600">•</span>
        <span className="tracking-wider">
          FPS <span className="text-cyan-400">{displayFps}</span>
        </span>
        <span className="text-slate-600">•</span>
        <span className="tracking-wider">
          SYS LOAD <span className="text-cyan-400">{sysLoad}%</span>
        </span>
      </div>

      {/* Right-Hand Symmetrical Corner Bracket */}
      <span className="text-slate-600 text-sm leading-none select-none">┘</span>
    </div>
  );
}
