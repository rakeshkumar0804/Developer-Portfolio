import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import {
  profile,
  philosophy,
  principles,
  projects,
  openSourceRepos,
  skills,
  journey,
  certifications,
} from './data/portfolio';
import BootLoader from './components/BootLoader';
import HeroGlobe from './components/HeroGlobe';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import CatCompanion from './components/CatCompanion';
import MissionDebrief from './components/MissionDebrief';
import { playBlip, playTick, toggleAudioState, getAudioState } from './utils/sound';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [fps, setFps] = useState(60);
  const [sysLoad, setSysLoad] = useState(34);
  const [timeStr, setTimeStr] = useState('--:--:--');
  const [activeSection, setActiveSection] = useState('hero');
  const [depthGauge, setDepthGauge] = useState('000');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTimeStr(now.toLocaleTimeString('en-GB', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Live Telemetry Jitter (FPS & Sys Load)
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calcTelemetry = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
        setSysLoad(32 + Math.floor(Math.random() * 8));
      }
      animId = requestAnimationFrame(calcTelemetry);
    };

    animId = requestAnimationFrame(calcTelemetry);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Scroll Position & Depth Rail Sync
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const progress = Math.min(100, Math.max(0, Math.round((scrollPos / (docHeight || 1)) * 100)));
      setDepthGauge(String(progress).padStart(3, '0'));

      const sections = ['operations', 'principles', 'systems', 'signals', 'architect', 'comms'];
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const nextState = toggleAudioState();
    setAudioOn(nextState);
    if (nextState) {
      playBlip(1200, 0.08);
    }
  };

  const scrollToSection = (id) => {
    playBlip(1100, 0.05);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Terminal Boot Loader (Photo 1) */}
      {!booted && <BootLoader onComplete={() => setBooted(true)} />}

      {/* 2. Fixed Background Mesh */}
      <div className="pointer-events-none fixed inset-0 -z-10 blueprint-grid" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--ink-900)_100%)]" />

      {/* 3. Fixed HUD Telemetry Frame & Corner Brackets */}
      <div className="hud-frame">
        <div className="hud-corners">
          <svg className="corner-bracket corner-tl" viewBox="0 0 24 24" fill="none">
            <path d="M1 8 V1 H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="corner-bracket corner-tr" viewBox="0 0 24 24" fill="none">
            <path d="M1 8 V1 H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="corner-bracket corner-br" viewBox="0 0 24 24" fill="none">
            <path d="M1 8 V1 H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="corner-bracket corner-bl" viewBox="0 0 24 24" fill="none">
            <path d="M1 8 V1 H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Top-Left Uplink */}
        <div className="hud-top-left">
          <span className="hud-pulse-dot" />
          <span className="tech-label text-cyan">RAKESH-CORE</span>
          <span className="tech-label">UPLINK ACTIVE</span>
        </div>

        {/* Top-Right Signal & IST Clock */}
        <div className="hud-top-right">
          <span className="flex items-center gap-1.5">
            <span className="tech-label">SIG</span>
            <span className="hud-sig-bars">
              <span style={{ height: '4px' }} />
              <span style={{ height: '6px' }} />
              <span style={{ height: '8px' }} />
              <span style={{ height: '10px' }} />
              <span style={{ height: '12px' }} />
            </span>
          </span>
          <span className="tech-label tabular-nums text-cyan">T {timeStr} IST</span>
        </div>

        {/* Bottom-Left Telemetry */}
        <div className="hud-bottom-left">
          <span className="tech-label">GURUGRAM, HR, INDIA</span>
          <span className="tech-label">
            FPS <span className="text-cyan tabular-nums">{fps}</span>
          </span>
          <span className="tech-label">
            SYS LOAD <span className="text-cyan tabular-nums">{sysLoad}%</span>
          </span>
        </div>

        {/* Bottom-Right Audio Toggle */}
        <div className="hud-bottom-right">
          <button
            onClick={handleToggleAudio}
            className="hud-audio-btn"
            aria-label={audioOn ? 'Mute audio' : 'Enable audio'}
          >
            <span className={`hud-audio-bars ${audioOn ? 'active' : 'muted'}`}>
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="tech-label text-[0.6rem]">
              {audioOn ? 'AUDIO ON' : 'AUDIO OFF'}
            </span>
          </button>
        </div>
      </div>

      {/* 4. Fixed Right Depth Rail */}
      <div className="depth-rail">
        <button
          className="depth-rail-label tech-label text-paper-dim hover:text-cyan"
          onClick={() => scrollToSection('hero')}
        >
          DEPTH
        </button>

        <div className="depth-rail-track">
          <div
            className="depth-rail-fill"
            style={{ height: `${depthGauge}%` }}
          />

          {[
            { id: 'operations', top: 14.28, label: 'OPS' },
            { id: 'principles', top: 28.57, label: 'PRINCIPLES' },
            { id: 'systems', top: 42.85, label: 'SYSTEMS' },
            { id: 'signals', top: 57.14, label: 'SIGNALS' },
            { id: 'architect', top: 71.42, label: 'ARCHITECT' },
            { id: 'comms', top: 85.71, label: 'COMMS' },
          ].map((node) => (
            <div
              key={node.id}
              className={`depth-rail-node ${activeSection === node.id ? 'active' : ''}`}
              style={{ top: `${node.top}%` }}
            >
              <span className="depth-node-tooltip tech-label">{node.label}</span>
              <button
                aria-label={node.label}
                className="depth-node-btn"
                onClick={() => scrollToSection(node.id)}
              >
                <span className="depth-node-dot" />
              </button>
            </div>
          ))}

          <div
            className="depth-active-indicator"
            style={{ top: `calc(${depthGauge}% - 4px)` }}
          />
        </div>

        <span className="depth-gauge-counter tech-label tabular-nums">
          {depthGauge}
        </span>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="mobile-nav-pill">
        <span className="tech-label text-[0.55rem] text-cyan">
          {activeSection.toUpperCase()}
        </span>
        {['operations', 'principles', 'systems', 'signals', 'architect', 'comms'].map((id) => (
          <button
            key={id}
            aria-label={id}
            className={`mobile-nav-dot ${activeSection === id ? 'active' : ''}`}
            onClick={() => scrollToSection(id)}
          />
        ))}
      </div>

      {/* 5. Main Content Stream */}
      <main className="relative">
        {/* =================================================================
           HERO SECTION (PHOTO 2)
           ================================================================= */}
        <section id="hero" className="hero-section-container">
          <div className="hero-grid-layout">
            {/* Left Column: Master Schematic Info */}
            <div className="hero-content-col">
              <div className="hero-eyebrow-line tech-label">
                <span className="eyebrow-rule" />
                DRAWING NO. RK-2026 · MASTER SCHEMATIC
              </div>

              <h1 className="hero-display-name">
                RAKESH<br />
                <span className="text-line">KUMAR</span>
              </h1>

              <div className="hero-bio-lead">
                <div className="hero-role-heading">
                  <span className="text-cyan glow-cyan">
                    Full-Stack MERN Developer
                    <span className="cursor-blink text-cyan"> ▮</span>
                  </span>
                </div>
                <p className="hero-bio-para">
                  I architect and ship production systems end-to-end. Building scalable MERN and cloud-native applications with deep AI/LLM integration, microservices, and reliable real-time pipelines.
                </p>
              </div>

              {/* 4-Boxed Stats */}
              <div className="hero-stats-row">
                <div className="stat-cell">
                  <div className="stat-val glow-cyan">5+</div>
                  <div className="tech-label mt-1">PROD SYSTEMS</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-val glow-cyan">165+</div>
                  <div className="tech-label mt-1">LEETCODE SOLVED</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-val glow-cyan">2+</div>
                  <div className="tech-label mt-1">HACKATHONS</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-val glow-cyan">3+</div>
                  <div className="tech-label mt-1">CERTIFICATIONS</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Wireframe Globe */}
            <div className="hero-globe-viewport group">
              <HeroGlobe />
              <div className="pointer-events-none absolute inset-0 grid-vignette" />
              <div className="globe-badge-tl tech-label">STACK GRAPH · ONLINE</div>
              <div className="globe-badge-tr tech-label">07 LAYERS · LIVE</div>
              <div className="globe-pill-bottom">
                <span className="hud-pulse-dot" />
                <span className="tech-label text-[0.55rem] text-cyan">
                  DOUBLE-TAP TO EXPLORE THE STACK
                </span>
              </div>
            </div>
          </div>

          <div className="descend-prompt">
            <span className="tech-label">DESCEND THROUGH THE SYSTEM</span>
            <span className="descend-anim-line" />
          </div>
        </section>

        {/* =================================================================
           OPERATING PHILOSOPHY (PHOTO 4)
           ================================================================= */}
        <section id="operations" className="section-wrapper">
          <div className="philosophy-wrap">
            <div className="tech-label mb-7 flex items-center gap-3 text-cyan">
              <span className="eyebrow-rule" style={{ width: '2rem' }} />
              OPERATING PHILOSOPHY
            </div>
            <p className="manifesto-line">Every system begins as a blueprint.</p>
            <p className="manifesto-line">Every blueprint becomes infrastructure.</p>
            <p className="manifesto-line text-cyan glow-cyan">
              Every infrastructure becomes a living network.
            </p>
          </div>

          <div className="op-grid-block">
            <div className="tech-label mb-5 flex items-center gap-3">
              CURRENT OPERATIONS
              <span className="hud-pulse-dot" />
              <span className="text-paper-dim" style={{ opacity: 0.5 }}>LIVE</span>
            </div>

            <div className="op-table-wrap">
              <div className="op-row">
                <span className="op-num">OP-01</span>
                <div>
                  <div className="op-title">Full-Stack SDE Roles</div>
                  <div className="op-desc">Available for immediate full-time employment & high-impact engineering.</div>
                </div>
                <span className="tech-label flex items-center gap-2 justify-self-end text-cyan">
                  <span className="hud-pulse-dot" /> ACTIVE
                </span>
              </div>

              <div className="op-row">
                <span className="op-num">OP-02</span>
                <div>
                  <div className="op-title">Distributed Caching & Real-time WebSockets</div>
                  <div className="op-desc">Redis queues, pub/sub topologies, and sub-100ms API architectures.</div>
                </div>
                <span className="tech-label flex items-center gap-2 justify-self-end text-amber">
                  <span className="hud-pulse-dot" style={{ backgroundColor: 'var(--amber)', boxShadow: '0 0 8px var(--amber)' }} /> RESEARCH
                </span>
              </div>

              <div className="op-row">
                <span className="op-num">OP-03</span>
                <div>
                  <div className="op-title">AI Tooling & LLM Agents</div>
                  <div className="op-desc">Automated code triage, intelligent incident routers, and automated evaluation.</div>
                </div>
                <span className="tech-label flex items-center gap-2 justify-self-end text-amber-bright">
                  <span className="hud-pulse-dot" style={{ backgroundColor: 'var(--amber-bright)', boxShadow: '0 0 8px var(--amber-bright)' }} /> EXPERIMENTING
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
           01 / OPERATING PRINCIPLES (PHOTO 5)
           ================================================================= */}
        <section id="principles" className="section-wrapper">
          <div className="mb-12">
            <div className="section-header-divider" />
            <div className="section-header-row">
              <h2 className="section-title">
                <span className="text-amber glow-amber">01</span>
                <span className="mx-3 text-line-dim">/</span>
                OPERATING PRINCIPLES
              </h2>
              <p className="section-subtitle">
                The design constraints behind every system below.
              </p>
            </div>
          </div>

          <div className="principles-grid-wrap">
            {principles.map((p, idx) => (
              <div key={p.num} className="pr-card group">
                <div className="pr-card-top">
                  <span className="tech-label text-amber">P-0{idx + 1}</span>
                  <span className="pr-huge-num">{p.num}</span>
                </div>
                <h3 className="pr-title">{p.title}</h3>
                <p className="pr-desc">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
           02 / DEPLOYED SYSTEMS (PHOTOS 6, 7, 8)
           ================================================================= */}
        <section id="systems" className="section-wrapper">
          <div className="mb-12">
            <div className="section-header-divider" />
            <div className="section-header-row">
              <h2 className="section-title">
                <span className="text-amber glow-amber">02</span>
                <span className="mx-3 text-line-dim">/</span>
                DEPLOYED SYSTEMS
              </h2>
              <p className="section-subtitle">
                Self-assembling architecture schematics - drawn as you read.
              </p>
            </div>
          </div>

          <div>
            {projects.map((project, idx) => (
              <div key={project.id} className="system-row-card">
                {/* Left Column: Project Specs */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="tech-label text-amber">{project.number}</span>
                    <span className="h-px flex-1 bg-line-faint" />
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: project.status === 'ONLINE' ? 'var(--cyan)' : 'var(--line-dim)',
                          boxShadow: project.status === 'ONLINE' ? '0 0 6px var(--cyan)' : 'none',
                        }}
                      />
                      <span
                        className="tech-label"
                        style={{ color: project.status === 'ONLINE' ? 'var(--cyan)' : 'var(--line-dim)' }}
                      >
                        {project.status}
                      </span>
                    </span>
                    <span className="tech-label">{project.year || '2026'}</span>
                  </div>

                  <h3 className="sys-title">{project.name}</h3>
                  <div className="sys-cat-tag tech-label">
                    {project.category} · {project.context}
                  </div>

                  <p className="sys-summary">{project.description}</p>

                  {/* 3 Metrics */}
                  <div className="sys-metrics-box">
                    {project.stats.map((st, sIdx) => (
                      <div key={sIdx} className="sys-metric-cell">
                        <div className="stat-val glow-cyan">{st.val}</div>
                        <div className="tech-label mt-0.5 text-[0.55rem]">{st.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Bullets with Amber Squares */}
                  <ul className="sys-bullets-list">
                    {project.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="sys-bullet-item">
                        <span className="sys-bullet-sq" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="sys-stack-tags">
                    {project.stack.map((tech) => (
                      <span key={tech} className="sys-tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="comms-btn-action text-xs py-2 px-4"
                      onClick={() => playBlip(1000, 0.05)}
                    >
                      GITHUB REPO ↗
                    </a>
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="comms-btn-action text-xs py-2 px-4"
                        style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}
                        onClick={() => playBlip(1200, 0.06)}
                      >
                        LIVE DEPLOYMENT ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architecture SVG Flow Diagram */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="tech-label mb-3 flex items-center justify-between">
                    <span>FIG.{idx + 1} - SYSTEM ARCHITECTURE</span>
                    <span className="text-cyan flex items-center gap-1.5">
                      <span className="hud-pulse-dot" /> STREAMING
                    </span>
                  </div>

                  <div className="arch-diagram-card">
                    <ArchitectureDiagram project={project} index={idx} />
                  </div>

                  <button
                    className="reconstruct-history-btn group"
                    onClick={() => playBlip(900, 0.04)}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm leading-none text-cyan">⟲</span>
                      Reconstruct build history
                    </span>
                    <span className="tech-label text-[0.5rem] text-paper-dim group-hover:text-cyan">
                      SCRUB THE TIMELINE →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
           03 / OPEN-SOURCE SIGNALS (PHOTO 9)
           ================================================================= */}
        <section id="signals" className="section-wrapper">
          <div className="mb-12">
            <div className="section-header-divider" />
            <div className="section-header-row">
              <h2 className="section-title">
                <span className="text-amber glow-amber">03</span>
                <span className="mx-3 text-line-dim">/</span>
                OPEN-SOURCE SIGNALS
              </h2>
              <p className="section-subtitle">
                Public work on GitHub - built in the open, validated by stars.
              </p>
            </div>
          </div>

          <div className="os-summary-grid">
            <div className="os-sum-card">
              <div className="os-sum-val text-amber glow-amber">12+★</div>
              <div className="tech-label mt-1">TOTAL STARS</div>
            </div>
            <div className="os-sum-card">
              <div className="os-sum-val text-cyan glow-cyan">18</div>
              <div className="tech-label mt-1">PUBLIC REPOS</div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="os-sum-card group hover:bg-ink-800 transition-colors"
            >
              <div className="font-display text-lg font-semibold text-paper group-hover:text-cyan transition-colors">
                @{profile.githubUsername}
              </div>
              <div className="tech-label mt-1 flex items-center gap-1">
                VIEW PROFILE ↗
              </div>
            </a>
          </div>

          <div className="os-repos-grid">
            {openSourceRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="os-card group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="tech-label text-cyan">{repo.category}</span>
                  <span className="flex items-center gap-1 font-display text-sm font-semibold text-amber">
                    {repo.stars}<span className="text-xs">★</span>
                  </span>
                </div>
                <h3 className="os-card-title">{repo.name}</h3>
                <p className="os-card-desc">{repo.description}</p>
                <div className="os-card-foot">
                  <span className="flex items-center gap-1.5 text-xs text-paper-dim">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    {repo.language}
                  </span>
                  <span className="tech-label group-hover:text-cyan transition-colors">
                    OPEN ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =================================================================
           04 / THE ARCHITECT (PHOTOS 10, 11)
           ================================================================= */}
        <section id="architect" className="section-wrapper">
          <div className="mb-12">
            <div className="section-header-divider" />
            <div className="section-header-row">
              <h2 className="section-title">
                <span className="text-amber glow-amber">04</span>
                <span className="mx-3 text-line-dim">/</span>
                THE ARCHITECT
              </h2>
              <p className="section-subtitle">
                Operator spec sheet & service history.
              </p>
            </div>
          </div>

          <div className="architect-split-grid">
            {/* Left: Spec Sheet Table & Bio */}
            <div className="spec-sheet-panel">
              <div className="spec-sheet-header tech-label">
                OPERATOR SPEC · RAKESH-CORE
              </div>
              <dl className="spec-dl-list">
                {profile.specSheet.map((item, idx) => (
                  <div key={idx} className="spec-dl-row">
                    <dt className="spec-dt tech-label">{item.label}</dt>
                    <dd className="spec-dd">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="spec-narrative-p">{profile.story}</p>
              <div className="p-4 border-t border-line-faint">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="comms-btn-action text-xs w-full justify-center"
                >
                  VIEW VERIFIED ATS RESUME (PDF) ↗
                </a>
              </div>
            </div>

            {/* Right: Service History Log Timeline */}
            <div>
              <div className="tech-label mb-5">SERVICE HISTORY · LOG</div>
              <ol className="timeline-list">
                {journey.map((item, idx) => (
                  <li key={idx} className="timeline-item">
                    <span className="timeline-bullet-ring" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="timeline-role-title">{item.title}</h4>
                      <span className="tech-label text-cyan">{item.period}</span>
                    </div>
                    <div className="timeline-company">{item.type}</div>
                    {item.bullets ? (
                      <ul className="mt-2 space-y-1">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex gap-2 text-sm text-paper-dim">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-line-dim" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-paper-dim">{item.detail}</p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Subsystems Capability Matrix */}
          <div className="matrix-block">
            <div className="tech-label mb-5">SUBSYSTEMS · CAPABILITY MATRIX</div>
            <div className="matrix-grid-cells">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="matrix-cell">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="hud-pulse-dot" />
                    <span className="font-display text-sm font-semibold text-paper">{category}</span>
                  </div>
                  <div className="matrix-pills-row">
                    {items.map((skill) => (
                      <span key={skill} className="matrix-pill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Field Recognition */}
          <div className="mt-16">
            <div className="tech-label mb-5">FIELD RECOGNITION & CERTIFICATIONS</div>
            <div className="recognition-grid">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="recognition-card group hover:bg-ink-800 transition-colors"
                >
                  <div className="tech-label text-amber">{cert.date}</div>
                  <div className="mt-2 font-display text-base font-semibold text-paper group-hover:text-cyan transition-colors">
                    {cert.title}
                  </div>
                  <div className="mt-1 text-sm text-paper-dim">{cert.issuer}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
           05 / ESTABLISH COMMS (PHOTOS 12, 13, 14)
           ================================================================= */}
        <section id="comms" className="section-wrapper">
          <div className="mb-12">
            <div className="section-header-divider" />
            <div className="section-header-row">
              <h2 className="section-title">
                <span className="text-amber glow-amber">05</span>
                <span className="mx-3 text-line-dim">/</span>
                ESTABLISH COMMS
              </h2>
              <p className="section-subtitle">
                Channel open. Awaiting transmission.
              </p>
            </div>
          </div>

          <div className="comms-split-grid">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
                <span className="tech-label text-cyan">ACQUIRING...</span>
              </div>
              <h3 className="comms-lead-title">
                Let's build<br />
                <span className="text-cyan glow-cyan">something</span><br />
                ambitious.
              </h3>
              <p className="comms-lead-text">
                Recruiters, founders, and engineering teams - if you need someone who can architect, build, and ship production web systems end-to-end, the channel is open.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="comms-btn-action"
                onClick={() => playBlip(1200, 0.08)}
              >
                INITIATE TRANSMISSION →
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="comms-channels-grid">
                <a href={`mailto:${profile.email}`} className="channel-card group">
                  <div className="tech-label flex items-center justify-between">
                    EMAIL <span className="text-line-dim group-hover:text-cyan">↗</span>
                  </div>
                  <div className="channel-val">{profile.email}</div>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="channel-card group">
                  <div className="tech-label flex items-center justify-between">
                    GITHUB <span className="text-line-dim group-hover:text-cyan">↗</span>
                  </div>
                  <div className="channel-val">github.com/{profile.githubUsername}</div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="channel-card group">
                  <div className="tech-label flex items-center justify-between">
                    LINKEDIN <span className="text-line-dim group-hover:text-cyan">↗</span>
                  </div>
                  <div className="channel-val">linkedin.com/in/rakesh-kumar</div>
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer" className="channel-card group">
                  <div className="tech-label flex items-center justify-between">
                    LEETCODE <span className="text-line-dim group-hover:text-cyan">↗</span>
                  </div>
                  <div className="channel-val">leetcode.com/u/Rakesh__Kumar_</div>
                </a>
              </div>

              {/* Interactive Cat Companion Pet Box */}
              <div className="nyx-pet-box">
                <CatCompanion />
              </div>
            </div>
          </div>

          {/* =================================================================
             MISSION DEBRIEF (PHOTO 15)
             ================================================================= */}
          <div className="debrief-block">
            <div className="debrief-head-row">
              <div>
                <div className="tech-label flex items-center gap-3 text-cyan">
                  <span className="eyebrow-rule" style={{ width: '2rem' }} />
                  MISSION DEBRIEF
                </div>
                <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                  System reviewed.
                </h3>
              </div>
              <div className="debrief-sync-widget">
                <div className="flex items-center justify-between">
                  <span className="tech-label text-paper-dim">SYNC</span>
                  <span className="font-mono text-sm text-cyan glow-cyan">
                    <span>100</span>%
                  </span>
                </div>
                <div className="relative mt-2 h-2 overflow-hidden border border-line-faint bg-ink-800">
                  <div className="absolute inset-y-0 left-0 bg-cyan shadow-[0_0_12px_var(--cyan)]" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

            <div className="debrief-tiles-grid">
              {[
                { num: '01', label: 'OPERATIONS', id: 'operations' },
                { num: '02', label: 'GUIDING PRINCIPLES', id: 'principles' },
                { num: '03', label: 'DEPLOYED SYSTEMS', id: 'systems' },
                { num: '04', label: 'OPEN SIGNALS', id: 'signals' },
                { num: '05', label: 'THE ARCHITECT', id: 'architect' },
                { num: '06', label: 'ESTABLISH COMMS', id: 'comms' },
              ].map((item) => (
                <button
                  key={item.num}
                  className="debrief-nav-tile group"
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="tech-label w-6 shrink-0 text-paper-dim" style={{ opacity: 0.5 }}>
                    {item.num}
                  </span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan shadow-[0_0_6px_var(--cyan)]" />
                  <span className="min-w-0 flex-1">
                    <span className="debrief-item-title block truncate font-display text-sm font-semibold text-paper transition-colors">
                      {item.label}
                    </span>
                    <span className="tech-label text-[0.55rem] text-cyan">
                      REVIEWED
                    </span>
                  </span>
                  <span className="tech-label text-line-dim group-hover:text-cyan transition-colors">
                    ↗
                  </span>
                </button>
              ))}
            </div>

            <div className="debrief-footer-strip tech-label">
              <span>© 2026 RAKESH KUMAR</span>
              <span>DRAWING NO. RK-2026 · END OF SCHEMATIC</span>
              <span className="text-cyan">UPLINK · STABLE</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
