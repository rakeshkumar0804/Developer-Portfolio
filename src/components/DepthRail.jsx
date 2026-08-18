import React, { useEffect, useState } from 'react';
import { playBlip, playTick } from '../utils/sound';

const SECTIONS = [
  { id: 'top', label: 'HERO', num: '00' },
  { id: 'operations', label: 'OPS', num: '01' },
  { id: 'principles', label: 'PRINCIPLES', num: '02' },
  { id: 'projects', label: 'SYSTEMS', num: '03' },
  { id: 'signals', label: 'SIGNALS', num: '04' },
  { id: 'architect', label: 'ARCHITECT', num: '05' },
  { id: 'certifications', label: 'CREDS', num: '06' },
  { id: 'contact', label: 'CONTACT', num: '07' },
];

export default function DepthRail() {
  const [activeSection, setActiveSection] = useState('top');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((currentScroll / docHeight) * 100))) : 0;
      setScrollPercent(pct);

      // Determine active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    playBlip(1050, 0.05);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="depth-rail-container" aria-label="Depth Navigation Rail">
      <div className="depth-rail-header">
        <span className="depth-rail-title">DEPTH</span>
        <span className="depth-rail-unit">AXIS-Z</span>
      </div>

      <div className="depth-rail-track">
        <div
          className="depth-rail-indicator-line"
          style={{ height: `${scrollPercent}%` }}
        />
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              className={`depth-dot-btn ${isActive ? 'active' : ''}`}
              onClick={() => scrollTo(sec.id)}
              onMouseEnter={playTick}
              aria-label={`Scroll to ${sec.label}`}
              title={`${sec.num} // ${sec.label}`}
            >
              <span className="depth-dot-core" />
              <span className="depth-dot-tooltip">
                <span className="depth-dot-num">{sec.num}</span> {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="depth-rail-footer">
        <span className="depth-gauge-val">
          {String(scrollPercent).padStart(3, '0')}
        </span>
        <span className="depth-gauge-lbl">M_DEP</span>
      </div>
    </aside>
  );
}
