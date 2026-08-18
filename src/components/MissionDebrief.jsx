import React from 'react';
import { FiArrowUp, FiCheck, FiMail } from 'react-icons/fi';
import { playBlip } from '../utils/sound';

const REVIEW_SECTIONS = [
  { id: 'operations', num: '01', label: 'OPERATIONS' },
  { id: 'principles', num: '02', label: 'GUIDING PRINCIPLES' },
  { id: 'projects', num: '03', label: 'DEPLOYED SYSTEMS' },
  { id: 'signals', num: '04', label: 'OPEN SIGNALS' },
  { id: 'architect', num: '05', label: 'THE ARCHITECT' },
  { id: 'contact', num: '06', label: 'ESTABLISH COMMS' },
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
          <div className="debrief-eyebrow">
            <span className="eyebrow-line">―</span> MISSION DEBRIEF
          </div>
          <h2>System reviewed.</h2>
        </div>
        <div className="debrief-sync-box">
          <div className="debrief-sync-top">
            <span>SYNC</span>
            <span className="debrief-100">100%</span>
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
            <div className="debrief-tile-left">
              <span className="debrief-tile-num">{sec.num}</span>
              <span className="debrief-tile-dot" />
              <div className="debrief-tile-text-wrap">
                <span className="debrief-tile-label">{sec.label}</span>
                <span className="debrief-tile-status">REVIEWED</span>
              </div>
            </div>
            <span className="debrief-tile-arrow">↗</span>
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
            <span>INITIATE CONTACT</span>
            <small className="btn-subtext">OPEN THE CHANNEL →</small>
          </a>
          <button
            className="button secondary debrief-btn"
            onClick={() => scrollTo('top')}
          >
            <span>REMAIN OBSERVER</span>
            <small className="btn-subtext">REWIND TO THE TOP ↑</small>
          </button>
        </div>
      </div>
    </section>
  );
}
