import React, { useEffect, useState } from 'react';
import { playBootBeep } from '../utils/sound';

const BOOT_LINES = [
  { text: 'mounting subsystem graph', status: 'OK' },
  { text: 'linking MERN runtime (React 19 + Node.js)', status: 'OK' },
  { text: 'spinning cloud-native MongoDB & Redis nodes', status: 'OK' },
  { text: 'indexing 6 production systems & APIs', status: 'OK' },
  { text: 'operator recognized :: uplink active :: session #2026', status: 'READY' },
];

export default function BootLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user already saw boot sequence this session
    const hasBooted = typeof window !== 'undefined' && sessionStorage.getItem('rk_booted');
    const speed = hasBooted ? 12 : 28; // fast boot for returning session

    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 6) + 2;
        return next > 100 ? 100 : next;
      });
    }, speed);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Step through boot lines as percent increases
    const lineIndex = Math.min(
      Math.floor((percent / 100) * BOOT_LINES.length),
      BOOT_LINES.length
    );
    if (lineIndex > visibleLines) {
      setVisibleLines(lineIndex);
      playBootBeep(lineIndex);
    }

    if (percent === 100) {
      const exitTimer = setTimeout(() => {
        finish();
      }, 400);
      return () => clearTimeout(exitTimer);
    }
  }, [percent, visibleLines]);

  const finish = () => {
    setIsFading(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('rk_booted', 'true');
    }
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  useEffect(() => {
    const handleKey = () => finish();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div
      className={`boot-overlay ${isFading ? 'fade-out' : ''}`}
      onClick={finish}
      role="dialog"
      aria-label="System Boot Sequence"
    >
      <div className="boot-grid-bg" />
      <div className="boot-header">
        <span className="boot-sys-label">
          <span className="boot-dot" /> BLUEPRINT OS · v2.0
        </span>
        <span className="boot-badge">BOOT // INITIALIZING</span>
      </div>

      <div className="boot-terminal">
        <div className="boot-headline">
          CALIBRATING DEPTH AXIS <span className="boot-cursor">_</span>
        </div>

        <div className="boot-sync-row">
          <span className="boot-sync-label">SYNC</span>
          <div className="boot-progress-track">
            <div
              className="boot-progress-bar"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="boot-percent">
            {String(percent).padStart(3, '0')}%
          </span>
        </div>

        <div className="boot-log-box">
          {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
            <div key={idx} className="boot-log-line">
              <span className="boot-log-prefix">&gt;</span>
              <span className="boot-log-text">{line.text} ...</span>
              <span className={`boot-log-status ${line.status.toLowerCase()}`}>
                {line.status}
              </span>
            </div>
          ))}
        </div>

        <div className="boot-skip-hint">
          <span>[ TAP / PRESS ANY KEY TO SKIP ]</span>
        </div>
      </div>
    </div>
  );
}
