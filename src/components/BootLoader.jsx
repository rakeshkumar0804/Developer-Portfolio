import React, { useEffect, useState } from 'react';
import { playBootBeep } from '../utils/sound';

const BOOT_LINES = [
  { text: 'mounting subsystem graph', status: 'OK', color: 'orange' },
  { text: 'linking MERN runtime', status: 'OK', color: 'orange' },
  { text: 'spinning cloud-native nodes', status: 'OK', color: 'orange' },
  { text: 'indexing 6 production systems', status: 'OK', color: 'orange' },
  { text: 'warming AI / LLM bridge', status: 'OK', color: 'orange' },
  { text: 'operator recognized :: last uplink 7s ago :: session #29', status: '', color: 'cyan' },
];

export default function BootLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user already saw boot sequence this session
    const hasBooted = typeof window !== 'undefined' && sessionStorage.getItem('rk_booted');
    const speed = hasBooted ? 14 : 26;

    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 5) + 2;
        return next > 100 ? 100 : next;
      });
    }, speed);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const lineIndex = Math.min(
      Math.floor((percent / 100) * (BOOT_LINES.length + 1)),
      BOOT_LINES.length
    );
    if (lineIndex > visibleLines) {
      setVisibleLines(lineIndex);
      playBootBeep(lineIndex);
    }

    if (percent === 100) {
      const exitTimer = setTimeout(() => {
        finish();
      }, 500);
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
    }, 400);
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

      <div className="boot-center-card">
        <div className="boot-card-header">
          <span className="boot-title-left">BLUEPRINT OS · V2.0</span>
          <span className="boot-title-right">BOOT</span>
        </div>

        <div className="boot-calibrating-row">
          CALIBRATING DEPTH AXIS <span className="boot-blinking-cursor">_</span>
        </div>

        <div className="boot-sync-line">
          <span className="boot-sync-label">SYNC</span>
          <div className="boot-bar-track">
            <div
              className="boot-bar-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="boot-counter">
            {String(percent).padStart(3, '0')}%
          </span>
        </div>

        <div className="boot-diagnostics-box">
          {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
            <div
              key={idx}
              className={`boot-diag-line ${line.color === 'cyan' ? 'cyan-line' : ''}`}
            >
              <span className="diag-text">&gt; {line.text}</span>
              {line.status && (
                <>
                  <span className="diag-dots">...</span>
                  <span className="diag-ok-tag">{line.status}</span>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="boot-footer-skip">
          [ TAP ANYWHERE OR PRESS ANY KEY TO SKIP ]
        </div>
      </div>
    </div>
  );
}
