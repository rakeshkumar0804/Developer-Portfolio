import React from 'react';
import { FiArrowUp, FiCheck, FiMail } from 'react-icons/fi';
import { playBlip } from '../utils/sound';

const REVIEW_SECTIONS = [
  { id: 'top', num: '00', label: 'HERO & SCHEMATIC' },
  { id: 'operations', num: '01', label: 'PHILOSOPHY & FOCUS' },
  { id: 'principles', num: '02', label: 'CORE PRINCIPLES' },
  { id: 'projects', num: '03', label: 'DEPLOYED SYSTEMS (6)' },
  { id: 'signals', num: '04', label: 'OPEN-SOURCE SIGNALS' },
  { id: 'architect', num: '05', label: 'THE ARCHITECT / BIO' },
  { id: 'certifications', num: '06', label: 'CERTIFICATIONS' },
  { id: 'contact', num: '07', label: 'CONTACT CHANNEL' },
];

export default function MissionDebrief() {
  const scrollTo = (id) => {
    playBlip(1100, 0.05);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mission-debrief-section" id="debrief">
      <div className="debrief-header">
        <div className="debrief-title-wrap">
          <span className="section-label">// SYSTEM AUDIT</span>
          <h2>System reviewed.</h2>
        </div>
        <div className="debrief-sync-box">
          <div className="debrief-sync-top">
            <span>AUDIT STATUS</span>
            <span className="debrief-100">SYNC 100%</span>
          </div>
          <div className="debrief-sync-track">
            <div className="debrief-sync-fill" />
          </div>
        </div>
      </div>

      <div className="debrief-grid">
        {REVIEW_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            className="debrief-tile"
            onClick={() => scrollTo(sec.id)}
            aria-label={`Jump back to ${sec.label}`}
          >
            <div className="debrief-tile-top">
              <span className="debrief-tile-num">{sec.num}</span>
              <span className="debrief-tile-status">
                <FiCheck /> REVIEWED
              </span>
            </div>
            <div className="debrief-tile-label">{sec.label}</div>
          </button>
        ))}
      </div>

      <div className="debrief-decision-box">
        <div className="debrief-decision-caption">
          // ONE DECISION REMAINS
        </div>
        <div className="debrief-cta-group">
          <a
            href="#contact"
            className="button fill debrief-btn"
            onClick={() => playBlip(1200, 0.08)}
          >
            <FiMail /> INITIATE CONTACT → OPEN THE CHANNEL
          </a>
          <button
            className="button debrief-btn secondary"
            onClick={() => scrollTo('top')}
          >
            <FiArrowUp /> REMAIN OBSERVER → REWIND TO THE TOP
          </button>
        </div>
      </div>
    </section>
  );
}
