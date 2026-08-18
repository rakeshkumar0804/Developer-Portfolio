import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiFileText,
  FiExternalLink,
  FiAward,
  FiActivity,
  FiCpu,
  FiTerminal,
  FiCheckCircle,
  FiLayers,
  FiGlobe,
  FiVolume2,
  FiVolumeX,
} from 'react-icons/fi';
import {
  SiCisco,
  SiHackerrank,
  SiLeetcode,
  SiUdemy,
} from 'react-icons/si';
import emailjs from '@emailjs/browser';

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
import SnakeTrail from './components/SnakeTrail';
import DepthRail from './components/DepthRail';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import CatCompanion from './components/CatCompanion';
import MissionDebrief from './components/MissionDebrief';
import { getAudioState, toggleAudioState, playBlip, playTick } from './utils/sound';

import './styles.css';
import './contact-status.css';

const navItems = [
  { name: 'OPERATIONS', id: 'operations' },
  { name: 'PRINCIPLES', id: 'principles' },
  { name: 'SYSTEMS', id: 'projects' },
  { name: 'SIGNALS', id: 'signals' },
  { name: 'ARCHITECT', id: 'architect' },
  { name: 'CREDS', id: 'certifications' },
  { name: 'CONTACT', id: 'contact' },
];

const certificateLogos = {
  hackerrank: SiHackerrank,
  cisco: SiCisco,
  udemy: SiUdemy,
  openedg: FiAward,
};

const fadeAnimation = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.45 },
};

const cardReveal = (index) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay: Math.min(index * 0.08, 0.35) },
});

const getPreferredEmailLink = () => {
  const mailto = `mailto:${profile.email}?subject=Portfolio%20Inquiry%20-%20Rakesh%20Kumar`;
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return isMobile
    ? { href: mailto }
    : {
        href: `${profile.emailCompose}&su=Portfolio%20Inquiry%20-%20Rakesh%20Kumar`,
        target: '_blank',
        rel: 'noreferrer',
      };
};

function Section({ id, tag, title, subtitle, children, className = '' }) {
  return (
    <motion.section className={`section ${className}`} id={id} {...fadeAnimation}>
      <div className="section-header-block">
        <div className="section-tag-row">
          <span className="section-label">// {tag}</span>
          <span className="section-decor-line" />
        </div>
        <h2>{title}</h2>
        {subtitle && <p className="section-intro">{subtitle}</p>}
      </div>
      {children}
    </motion.section>
  );
}

function TopBar({ audioOn, onToggleAudio }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [timeStr, setTimeStr] = useState('');

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

  return (
    <header className="topbar">
      <div className="topbar-left">
        <a className="brand" href="#top" onClick={() => playBlip(1200, 0.05)}>
          <span className="brand-pulse-dot" />
          <span className="brand-name">{profile.firstName} {profile.lastName}</span>
        </a>
        <div className="topbar-status-pill">
          <span className="status-live-dot" />
          <span>RK-CORE UPLINK ACTIVE</span>
        </div>
      </div>

      <div className="topbar-center">
        <span className="topbar-schematic-id">{profile.schematicId}</span>
      </div>

      <div className="topbar-right">
        <div className="topbar-telemetry">
          <span className="telemetry-item">
            <span className="telemetry-label">IST</span> {timeStr || '00:00:00'}
          </span>
          <span className="telemetry-item signal">
            <span className="signal-bars"><i></i><i></i><i></i><i></i></span> 99.4%
          </span>
        </div>

        <button
          className="audio-toggle-btn"
          onClick={onToggleAudio}
          aria-label={audioOn ? 'Mute audio feedback' : 'Enable audio feedback'}
          title={audioOn ? 'Audio: ON (Click to Mute)' : 'Audio: OFF (Click to Enable)'}
        >
          {audioOn ? <FiVolume2 className="audio-icon on" /> : <FiVolumeX className="audio-icon off" />}
          <span className="audio-toggle-text">{audioOn ? 'AUDIO ON' : 'AUDIO OFF'}</span>
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`top-nav ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${active === item.id ? 'active' : ''}`}
              href={`#${item.id}`}
              onClick={() => {
                playBlip(1100, 0.05);
                setActive(item.id);
                setOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection({ audioOn, onToggleAudio }) {
  const [fps, setFps] = useState(60);
  const [sysLoad, setSysLoad] = useState('14.2');
  const emailLink = getPreferredEmailLink();

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calcFps = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.min(60, Math.round((frameCount * 1000) / (now - lastTime))));
        frameCount = 0;
        lastTime = now;
        // Jitter SYS load slightly for realism
        setSysLoad((13.8 + Math.random() * 1.8).toFixed(1));
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="hero-section" id="top">
      <div className="hero-blueprint-grid">
        {/* Left Column: Blueprint Schematic & Bio */}
        <div className="hero-left-column">
          <div className="hero-eyebrow">
            <span className="eyebrow-id">{profile.schematicId}</span>
            <span className="eyebrow-tag">// SPEC-2026.MERN</span>
          </div>

          <SnakeTrail />

          <h1 className="hero-headline">
            <span className="headline-line1">{profile.firstName}</span>
            <span className="headline-line2">{profile.lastName}</span>
          </h1>

          <div className="hero-role-row">
            <span className="hero-role-title">{profile.role}</span>
            <span className="hero-role-cursor">█</span>
            <span className="hero-role-badge">IMMEDIATE JOINER</span>
          </div>

          <p className="hero-intro-text">{profile.intro}</p>

          <div className="hero-actions-row">
            <a
              href="#projects"
              className="button fill"
              onClick={() => playBlip(1200, 0.06)}
            >
              DEPLOYED SYSTEMS <FiArrowUpRight />
            </a>
            <a
              href={profile.resume}
              className="button secondary"
              target="_blank"
              rel="noreferrer"
              onClick={() => playBlip(1000, 0.05)}
            >
              <FiDownload /> DOWNLOAD RESUME
            </a>
          </div>

          <div className="hero-socials-row">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              {...emailLink}
              className="hero-social-link"
              aria-label="Direct Email"
              title="Email"
            >
              <FiMail />
            </a>
          </div>

          <div className="hero-stats-grid">
            {profile.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <span className="stat-card-val">{stat.value}</span>
                <span className="stat-card-label">{stat.label}</span>
                <span className="stat-card-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Interactive Globe */}
        <div className="hero-right-column">
          <HeroGlobe />
        </div>
      </div>

      {/* Hero Bottom Telemetry Bar */}
      <div className="hero-telemetry-bar">
        <div className="telemetry-bar-left">
          <span className="telemetry-block">
            <span className="t-label">LOC:</span> {profile.location}
          </span>
          <span className="telemetry-block">
            <span className="t-label">ENGINE:</span> REACT 19 + THREE.JS
          </span>
        </div>

        <div className="telemetry-bar-right">
          <span className="telemetry-block">
            <span className="t-label">FPS:</span> <b className="t-val">{fps}</b>
          </span>
          <span className="telemetry-block">
            <span className="t-label">SYS LOAD:</span> <b className="t-val">{sysLoad}%</b>
          </span>
          <button
            className="telemetry-audio-btn"
            onClick={onToggleAudio}
            aria-label="Toggle sound effects"
          >
            {audioOn ? <FiVolume2 /> : <FiVolumeX />} {audioOn ? 'AUDIO ON' : 'AUDIO OFF'}
          </button>
        </div>
      </div>
    </section>
  );
}

function OperationsSection() {
  return (
    <Section
      id="operations"
      tag="01 / PHILOSOPHY & OPERATIONS"
      title="Engineering methodology & active focus."
      subtitle="How I approach building production systems, from initial problem formulation to resilient deployment."
    >
      <div className="operations-grid">
        {/* Philosophy Escalating Statement */}
        <div className="philosophy-card">
          <div className="card-header-tag">CORE PHILOSOPHY</div>
          <div className="philosophy-quotes">
            {philosophy.quote.map((line, idx) => (
              <div key={idx} className="philosophy-quote-line">
                <span className="quote-step">0{idx + 1}</span>
                <p className="quote-text">{line}</p>
              </div>
            ))}
          </div>
          <div className="philosophy-footer-note">
            // FOCUSED ON SHIP SPEED, ROBUST SCHEMA DESIGN & HIGH AVAILABILITY
          </div>
        </div>

        {/* Current Focus Items */}
        <div className="current-focus-card">
          <div className="card-header-tag">CURRENT OPERATIONS // 2026</div>
          <div className="focus-items-list">
            {philosophy.focus.map((item, idx) => (
              <div key={idx} className="focus-item-row">
                <div className="focus-item-top">
                  <span className="focus-item-title">{item.label}</span>
                  <span className={`focus-status-tag ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="focus-item-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function PrinciplesSection() {
  return (
    <Section
      id="principles"
      tag="02 / ENGINEERING PRINCIPLES"
      title="How I work."
      subtitle="Four core engineering principles that guide architecture, implementation, and code hygiene."
    >
      <div className="principles-grid">
        {principles.map((p, idx) => (
          <motion.div key={p.num} className="principle-card" {...cardReveal(idx)}>
            <div className="principle-card-top">
              <span className="principle-num">{p.num}</span>
              <span className="principle-badge">CANONICAL</span>
            </div>
            <h3 className="principle-title">{p.title}</h3>
            <p className="principle-detail">{p.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function DeployedSystemsSection() {
  return (
    <Section
      id="projects"
      tag="03 / DEPLOYED SYSTEMS"
      title="Systems shipped and running in production."
      subtitle="Full-stack web applications engineered with clear architecture, verified authentication, and scalable storage."
    >
      <div className="systems-list">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            className={`deployed-system-card ${project.featured ? 'featured' : ''}`}
            {...cardReveal(idx)}
          >
            {/* Left Side: System Specifications */}
            <div className="system-spec-column">
              <div className="system-spec-header">
                <span className="system-sys-id">{project.number}</span>
                <span className="system-status-badge">
                  <span className="sys-pulse-dot" /> {project.status}
                </span>
              </div>

              <h3 className="system-title">{project.name}</h3>
              <div className="system-category">{project.category}</div>
              <div className="system-context">// {project.context}</div>

              <p className="system-description">{project.description}</p>

              {/* 3 Real Metric Tiles */}
              <div className="system-metrics-row">
                {project.stats.map((st, sIdx) => (
                  <div key={sIdx} className="system-metric-tile">
                    <span className="metric-val">{st.val}</span>
                    <span className="metric-lbl">{st.label}</span>
                  </div>
                ))}
              </div>

              {/* Technical Bullet Highlights */}
              <ul className="system-bullets-list">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <span className="bullet-arrow">↗</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="system-stack-pills">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="system-actions-row">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="button secondary sm"
                  aria-label={`${project.name} GitHub Repository`}
                >
                  <FiGithub /> SOURCE REPO
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="button fill sm"
                    aria-label={`${project.name} Live Deployment`}
                  >
                    <FiExternalLink /> LIVE SYSTEM <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            {/* Right Side: Architecture Diagram */}
            <div className="system-arch-column">
              <ArchitectureDiagram project={project} index={idx} />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function OpenSourceSection() {
  const [repoCount, setRepoCount] = useState('06+');
  const [starCount, setStarCount] = useState('08+');

  useEffect(() => {
    if (profile.githubUsername) {
      fetch(`https://api.github.com/users/${profile.githubUsername}`)
        .then((r) => r.ok && r.json())
        .then((data) => {
          if (data && data.public_repos) {
            setRepoCount(String(data.public_repos).padStart(2, '0'));
          }
        })
        .catch(() => {});
    }
  }, []);

  return (
    <Section
      id="signals"
      tag="04 / OPEN-SOURCE SIGNALS"
      title="Public work on GitHub — built in the open."
      subtitle="Source code repositories, automated tools, and experiments maintained publicly."
    >
      {/* Top Metrics Row */}
      <div className="signals-metrics-row">
        <div className="signal-stat-tile">
          <span className="signal-stat-val">{repoCount}</span>
          <span className="signal-stat-label">PUBLIC REPOSITORIES</span>
          <span className="signal-stat-sub">Active on GitHub</span>
        </div>
        <div className="signal-stat-tile">
          <span className="signal-stat-val">100%</span>
          <span className="signal-stat-label">OPEN ARCHITECTURE</span>
          <span className="signal-stat-sub">MERN & Full-Stack</span>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="signal-profile-tile"
        >
          <div className="signal-profile-left">
            <FiGithub className="github-large-icon" />
            <div>
              <span className="signal-profile-title">github.com/{profile.githubUsername}</span>
              <span className="signal-profile-sub">Explore full commit graph & codebases</span>
            </div>
          </div>
          <FiArrowUpRight className="signal-profile-arrow" />
        </a>
      </div>

      {/* Repo Cards Grid */}
      <div className="signals-repo-grid">
        {openSourceRepos.map((repo, idx) => (
          <motion.div key={repo.name} className="repo-signal-card" {...cardReveal(idx)}>
            <div className="repo-card-top">
              <span className="repo-category-badge">{repo.category}</span>
              <span className="repo-star-badge">★ {repo.stars}</span>
            </div>
            <h4 className="repo-name">{repo.name}</h4>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-card-footer">
              <span className="repo-lang-tag">
                <span className="lang-dot" style={{ backgroundColor: repo.langColor }} />
                {repo.language}
              </span>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="repo-open-link"
                aria-label={`Open repository ${repo.name}`}
              >
                OPEN REPO ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ArchitectSection() {
  return (
    <Section
      id="architect"
      tag="05 / THE ARCHITECT"
      title="Operator spec sheet & service history."
      subtitle="Professional profile, internship engineering background, and structured subsystem capabilities."
    >
      <div className="architect-layout-grid">
        {/* Left Column: Spec Sheet Table & Bio */}
        <div className="architect-spec-card">
          <div className="spec-card-header">
            <span className="spec-header-tag">SPECIFICATION SHEET</span>
            <span className="spec-header-id">OPERATOR // RK-0804</span>
          </div>

          <table className="spec-table" aria-label="Developer Specifications">
            <tbody>
              {profile.specSheet.map((row, idx) => (
                <tr key={idx}>
                  <th scope="row" className="spec-label">{row.label}</th>
                  <td className="spec-value">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="spec-bio-narrative">
            <p>{profile.story}</p>
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="button fill architect-resume-btn"
          >
            <FiFileText /> VIEW VERIFIED ATS RESUME (PDF) <FiArrowUpRight />
          </a>
        </div>

        {/* Right Column: Service History Log */}
        <div className="service-history-card">
          <div className="spec-card-header">
            <span className="spec-header-tag">SERVICE HISTORY LOG</span>
            <span className="spec-header-id">TIMELINE // VERIFIED</span>
          </div>

          <div className="service-timeline">
            {journey.map((item, idx) => (
              <div key={idx} className="timeline-entry">
                <div className="timeline-entry-rail">
                  <span className="timeline-dot" />
                  {idx !== journey.length - 1 && <span className="timeline-stem" />}
                </div>
                <div className="timeline-entry-content">
                  <div className="timeline-entry-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-type-tag">{item.type}</span>
                  </div>
                  <h4 className="timeline-title">{item.title}</h4>
                  {item.bullets ? (
                    <ul className="timeline-bullets">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="timeline-detail">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capability Matrix */}
      <div className="capability-matrix-wrapper">
        <div className="matrix-header">
          <span className="matrix-title">SUBSYSTEM CAPABILITY MATRIX</span>
          <span className="matrix-sub">Verified skills & production tooling</span>
        </div>

        <div className="capability-grid">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div key={category} className="capability-group-card" {...cardReveal(idx)}>
              <div className="capability-group-header">
                <span className="capability-cat-name">{category}</span>
                <span className="capability-count">{items.length} TOOLS</span>
              </div>
              <div className="capability-pills">
                {items.map((skill) => (
                  <span key={skill} className="capability-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  return (
    <Section
      id="certifications"
      tag="06 / CREDENTIALS & CERTIFICATIONS"
      title="Field recognition & certifications."
      subtitle="Industry credentials and competitive problem-solving milestones."
    >
      <div className="credentials-grid">
        {certifications.map((cert, idx) => {
          const Logo = certificateLogos[cert.logo] || FiAward;
          return (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="credential-card"
              {...cardReveal(idx)}
            >
              <div className="credential-top">
                <span className="credential-icon-box">
                  <Logo />
                </span>
                <span className="credential-issuer">{cert.issuer}</span>
              </div>
              <h3 className="credential-title">{cert.title}</h3>
              <p className="credential-detail">{cert.detail}</p>
              <div className="credential-footer">
                <span className="credential-date">{cert.date}</span>
                <span className="credential-action">
                  VIEW CREDENTIAL <FiArrowUpRight />
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const emailLink = getPreferredEmailLink();

  useEffect(() => {
    if (status?.type !== 'success') return undefined;
    const timeout = window.setTimeout(() => setStatus(null), 6000);
    return () => window.clearTimeout(timeout);
  }, [status]);

  const submit = async (event) => {
    event.preventDefault();
    const cfg = import.meta.env;
    if (
      !cfg.VITE_EMAILJS_PUBLIC_KEY ||
      !cfg.VITE_EMAILJS_SERVICE_ID ||
      !cfg.VITE_EMAILJS_TEMPLATE_ID
    ) {
      return setStatus({
        type: 'error',
        text: 'EmailJS credentials not configured in environment. Please connect via direct email.',
      });
    }

    setIsSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        cfg.VITE_EMAILJS_SERVICE_ID,
        cfg.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        { publicKey: cfg.VITE_EMAILJS_PUBLIC_KEY }
      );
      event.target.reset();
      setStatus({
        type: 'success',
        text: 'Message received by RK-CORE! I will respond promptly.',
      });
    } catch (error) {
      console.error('EmailJS transmission error:', error);
      setStatus({
        type: 'error',
        text: 'Transmission failed. Please use direct email link below.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section
      id="contact"
      tag="07 / CONTACT CHANNEL"
      title="Initiate communication."
      subtitle="Actively evaluating Full-Stack / MERN Developer roles. Available to join immediately."
    >
      <div className="contact-composite-grid">
        {/* Left: Contact Form & Direct Dispatch */}
        <div className="contact-form-panel">
          <div className="contact-header-tag">TRANSMISSION PORTAL // DIRECT DISPATCH</div>
          <p className="contact-intro-text">
            Whether you have a full-stack engineering role, an internship opportunity, or want to discuss scalable architecture, send a transmission below.
          </p>

          <form onSubmit={submit} className="contact-form">
            <div className="form-group">
              <label htmlFor="from_name">NAME // IDENTIFIER</label>
              <input
                id="from_name"
                name="from_name"
                required
                placeholder="e.g. Sarah Jenkins (Recruiter / Tech Lead)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">EMAIL // RETURN CHANNEL</label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                required
                placeholder="e.g. s.jenkins@company.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE // INQUIRY PAYLOAD</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Discuss role requirements, tech stack alignment, interview timeline..."
              />
            </div>

            <div className="form-action-row">
              <button
                type="submit"
                className="button fill contact-submit-btn"
                disabled={isSending}
              >
                {isSending ? 'DISPATCHING PAYLOAD...' : 'TRANSMIT MESSAGE'} <FiArrowUpRight />
              </button>
              <a {...emailLink} className="button secondary contact-direct-btn">
                <FiMail /> OPEN MAIL CLIENT
              </a>
            </div>

            {status && (
              <div className={`contact-status-banner ${status.type}`} role="status">
                <span className="status-banner-icon">
                  {status.type === 'success' ? '✓' : '✕'}
                </span>
                <span>{status.text}</span>
              </div>
            )}
          </form>
        </div>

        {/* Right: Interactive Cat Companion Pet Widget */}
        <div className="contact-pet-column">
          <CatCompanion />
        </div>
      </div>
    </Section>
  );
}

function App() {
  const [bootComplete, setBootComplete] = useState(false);
  const [audioOn, setAudioOn] = useState(false);

  const handleToggleAudio = () => {
    const nextState = toggleAudioState();
    setAudioOn(nextState);
    if (nextState) {
      playBlip(1200, 0.08);
    }
  };

  return (
    <>
      {!bootComplete && <BootLoader onComplete={() => setBootComplete(true)} />}

      <div className={`portfolio-app-root ${bootComplete ? 'mounted' : 'booting'}`}>
        <TopBar audioOn={audioOn} onToggleAudio={handleToggleAudio} />

        <DepthRail />

        <main id="main-content">
          <HeroSection audioOn={audioOn} onToggleAudio={handleToggleAudio} />
          <OperationsSection />
          <PrinciplesSection />
          <DeployedSystemsSection />
          <OpenSourceSection />
          <ArchitectSection />
          <CertificationsSection />
          <ContactSection />
          <MissionDebrief />
        </main>

        <footer className="schematic-footer">
          <div className="footer-left">
            <span className="footer-brand">{profile.firstName} {profile.lastName}</span>
            <span className="footer-meta">
              BLUEPRINT OS v2.0 · {profile.location} · © {new Date().getFullYear()}
            </span>
          </div>
          <div className="footer-right">
            <span className="footer-badge">ALL SYSTEMS OPERATIONAL</span>
            <a href="#top" className="footer-back-top" onClick={() => playBlip(1200, 0.05)}>
              REWIND TO TOP ↑
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
