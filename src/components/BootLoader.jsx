import React, { useEffect, useState } from 'react';
import { playBootBeep } from '../utils/sound';

const BOOT_LINES = [
  { text: 'mounting subsystem graph', status: 'OK' },
  { text: 'linking MERN runtime', status: 'OK' },
  { text: 'spinning cloud-native nodes', status: 'OK' },
  { text: 'indexing 6 production systems', status: 'OK' },
  { text: 'warming AI / LLM bridge', status: 'OK' },
  { text: 'operator recognized :: last uplink 7s ago :: session #29', status: '', highlight: true },
];

export default function BootLoader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasBooted = typeof window !== 'undefined' && sessionStorage.getItem('rk_booted');
    const speed = hasBooted ? 12 : 22;

    const progressInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 6) + 3;
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
    }, 350);
  };

  useEffect(() => {
    const handleKey = () => finish();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div
      className={`boot-overlay ${isFading ? 'boot-fade-out' : ''}`}
      onClick={finish}
      role="dialog"
      aria-label="System Boot Sequence"
    >
      <div className="boot-scanlines" />
      <div className="boot-beam" />
      <div className="boot-vignette" />

      <div className="boot-card">
        <div className="boot-card-header">
          <span className="tech-label text-cyan">BLUEPRINT OS · v2.0</span>
          <span className="tech-label text-paper-dim" style={{ opacity: 0.6 }}>BOOT</span>
        </div>

        <div className="boot-powering tech-label">
          POWERING ON<span className="cursor-blink text-cyan"> _</span>
        </div>

        <div className="boot-sync-row">
          <span className="tech-label text-paper-dim" style={{ opacity: 0.7 }}>SYNC</span>
          <div className="boot-sync-track">
            <div
              className="boot-sync-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="font-mono text-sm text-cyan glow-cyan">
            <span>{String(percent).padStart(3, '0')}</span>%
          </span>
        </div>

        <div className="boot-diag-list">
          {BOOT_LINES.slice(0, visibleLines).map((line, idx) => (
            <div
              key={idx}
              className={`boot-diag-line ${line.highlight ? 'highlight' : ''}`}
            >
              <span>&gt; {line.text}</span>
              {line.status && (
                <>
                  <span style={{ color: 'var(--line-dim)' }}>...</span>
                  <span className="boot-ok-tag">{line.status}</span>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="boot-skip-hint tech-label">
          TAP / PRESS ANY KEY TO SKIP
        </div>
      </div>
    </div>
  );
}
