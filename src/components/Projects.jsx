import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiRefreshCw } from 'react-icons/fi';

// Dedicated SVG Architecture Diagram Component matching the reference 1:1
function ArchitectureSchematic({ figNumber, nodes, connections }) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-[#070d18] p-4 sm:p-5 font-mono shadow-2xl relative">
      {/* Titlebar */}
      <div className="flex items-center justify-between pb-3 mb-3 text-[0.68rem] text-slate-400 border-b border-white/[0.06]">
        <span className="tracking-wider text-slate-300 font-semibold">
          FIG.{figNumber} - SYSTEM ARCHITECTURE
        </span>
        <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold tracking-wider text-[0.65rem]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
          STREAMING
        </span>
      </div>

      {/* Inner Blueprint Canvas with faint grid */}
      <div className="rounded-md border border-[#1e293b]/70 bg-[#040812] relative overflow-hidden p-2 sm:p-3">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Vector SVG with Orthogonal Dashed Connectors & Labels */}
        <svg
          viewBox="0 0 680 230"
          className="w-full h-auto block select-none relative z-10"
          style={{ minHeight: '190px' }}
        >
          <defs>
            {/* Glowing filter for nodes */}
            <filter id={`glow-cyan-${figNumber}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="0.8" />
            </filter>
            <filter id={`glow-amber-${figNumber}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#f59e0b" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* 1. Connecting Dashed Lines */}
          {connections.map((conn, cIdx) => (
            <g key={cIdx}>
              {/* Glow background path */}
              <path
                d={conn.path}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeOpacity="0.15"
              />
              {/* Main dashed path with animated dash */}
              <path
                d={conn.path}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                strokeOpacity="0.75"
                className="transition-all duration-300"
              />
              {/* Path Label */}
              {conn.label && (
                <text
                  x={conn.labelX}
                  y={conn.labelY}
                  fill="#94a3b8"
                  fontSize="9.5"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                  letterSpacing="1"
                  textAnchor="middle"
                >
                  {conn.label}
                </text>
              )}
            </g>
          ))}

          {/* 2. Rectangular Blueprint Nodes */}
          {nodes.map((node, nIdx) => {
            const isAmber = node.theme === 'amber';
            const isDim = node.theme === 'dim';
            const borderColor = isAmber ? '#f59e0b' : isDim ? '#475569' : '#38bdf8';
            const borderOpacity = isAmber ? '0.7' : isDim ? '0.35' : '0.55';
            const dotColor = isAmber ? '#f59e0b' : isDim ? '#64748b' : '#38bdf8';
            const filter = isAmber
              ? `url(#glow-amber-${figNumber})`
              : isDim
              ? 'none'
              : `url(#glow-cyan-${figNumber})`;

            return (
              <g key={nIdx} className="cursor-pointer group">
                {/* Node Box Background & Border */}
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  rx="5"
                  fill="#070e1b"
                  fillOpacity="0.95"
                  stroke={borderColor}
                  strokeWidth="1.2"
                  strokeOpacity={borderOpacity}
                  className="transition-all duration-200 group-hover:stroke-opacity-100"
                />

                {/* Glowing Status Dot */}
                <circle
                  cx={node.x + 14}
                  cy={node.y + 16}
                  r="3.5"
                  fill={dotColor}
                  filter={filter}
                />

                {/* Primary Title */}
                <text
                  x={node.x + 24}
                  y={node.y + 19}
                  fill="#f8fafc"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {node.title}
                </text>

                {/* Subtitle / Tech Spec */}
                <text
                  x={node.x + 14}
                  y={node.y + 36}
                  fill="#94a3b8"
                  fontSize="8.5"
                  fontWeight="500"
                  fontFamily="JetBrains Mono, monospace"
                  letterSpacing="0.8"
                >
                  {node.subtitle}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Schematic Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[0.65rem] text-slate-500">
        <div className="flex items-center gap-1.5 text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
          <FiRefreshCw className="text-[0.6rem]" />
          <span>RECONSTRUCT BUILD HISTORY</span>
        </div>
        <div className="text-slate-400 hover:text-[#38bdf8] cursor-pointer transition-colors">
          SCRUB THE TIMELINE →
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };

  /* =========================================================================
     PROJECT 1 SCHEMATIC DATA (IncidentHub AI)
     ========================================================================= */
  const p1Nodes = [
    { x: 15, y: 35, w: 110, h: 48, title: 'Client', subtitle: 'NEXT.JS SPA', theme: 'cyan' },
    { x: 15, y: 145, w: 125, h: 48, title: 'OTP / OAuth', subtitle: 'PASSWORDLESS', theme: 'dim' },
    { x: 185, y: 90, w: 145, h: 48, title: 'API Layer', subtitle: 'NODE / EXPRESS', theme: 'cyan' },
    { x: 380, y: 35, w: 135, h: 48, title: 'Status Pipeline', subtitle: 'REAL-TIME WS', theme: 'cyan' },
    { x: 390, y: 145, w: 120, h: 48, title: 'Cloudinary', subtitle: 'DOCUMENTS', theme: 'dim' },
    { x: 545, y: 85, w: 120, h: 56, title: 'MongoDB', subtitle: 'CASE STORE', theme: 'amber' },
  ];

  const p1Connections = [
    // Client -> API Layer (HTTPS)
    { path: 'M 125 59 L 155 59 L 155 114 L 185 114', label: 'HTTPS', labelX: 155, labelY: 82 },
    // API Layer -> OTP Auth (VERIFY)
    { path: 'M 155 114 L 155 169 L 140 169', label: 'VERIFY', labelX: 155, labelY: 148 },
    // API Layer -> Status Pipeline
    { path: 'M 330 114 L 355 114 L 355 59 L 380 59' },
    // API Layer -> Cloudinary (UPLOAD)
    { path: 'M 330 114 L 355 114 L 355 169 L 390 169', label: 'UPLOAD', labelX: 355, labelY: 145 },
    // API Layer -> MongoDB (CRUD)
    { path: 'M 330 114 L 545 114', label: 'CRUD', labelX: 435, labelY: 108 },
    // Status Pipeline -> MongoDB
    { path: 'M 515 59 L 535 59 L 535 114 L 545 114' },
  ];

  /* =========================================================================
     PROJECT 2 SCHEMATIC DATA (LeaveFlow HR)
     ========================================================================= */
  const p2Nodes = [
    { x: 15, y: 35, w: 110, h: 48, title: 'Employee UI', subtitle: 'LEAVE PORTAL', theme: 'cyan' },
    { x: 15, y: 145, w: 115, h: 48, title: 'Manager UI', subtitle: 'APPROVAL QUEUE', theme: 'dim' },
    { x: 185, y: 90, w: 145, h: 48, title: 'Services', subtitle: 'NODE · RBAC', theme: 'cyan' },
    { x: 380, y: 35, w: 130, h: 48, title: 'Leave Rules', subtitle: 'BALANCE CHECK', theme: 'cyan' },
    { x: 390, y: 145, w: 120, h: 48, title: 'Audit Logger', subtitle: 'EVENT STREAM', theme: 'dim' },
    { x: 545, y: 85, w: 120, h: 56, title: 'SQLite DB', subtitle: 'DATA STORE', theme: 'amber' },
  ];

  const p2Connections = [
    { path: 'M 125 59 L 155 59 L 155 114 L 185 114', label: 'ROUTE', labelX: 155, labelY: 82 },
    { path: 'M 155 114 L 155 169 L 130 169', label: 'AUTH', labelX: 155, labelY: 148 },
    { path: 'M 330 114 L 355 114 L 355 59 L 380 59' },
    { path: 'M 330 114 L 355 114 L 355 169 L 390 169', label: 'LOG', labelX: 355, labelY: 145 },
    { path: 'M 330 114 L 545 114', label: 'STORE', labelX: 435, labelY: 108 },
    { path: 'M 510 59 L 535 59 L 535 114 L 545 114' },
  ];

  /* =========================================================================
     PROJECT 3 SCHEMATIC DATA (PortfolioPulse)
     ========================================================================= */
  const p3Nodes = [
    { x: 15, y: 35, w: 115, h: 48, title: 'User Input', subtitle: 'GITHUB / URL', theme: 'cyan' },
    { x: 15, y: 145, w: 125, h: 48, title: 'Resume Parser', subtitle: 'PDF / ATS', theme: 'dim' },
    { x: 185, y: 90, w: 145, h: 48, title: 'Scoring Engine', subtitle: 'EXPRESS / NODE', theme: 'cyan' },
    { x: 380, y: 35, w: 130, h: 48, title: 'Puppeteer', subtitle: 'SPA CRAWLER', theme: 'cyan' },
    { x: 390, y: 145, w: 120, h: 48, title: 'GitHub API', subtitle: 'REPO METRICS', theme: 'dim' },
    { x: 545, y: 85, w: 120, h: 56, title: 'MongoDB', subtitle: 'CANDIDATE LOGS', theme: 'amber' },
  ];

  const p3Connections = [
    { path: 'M 130 59 L 155 59 L 155 114 L 185 114', label: 'INPUT', labelX: 155, labelY: 82 },
    { path: 'M 155 114 L 155 169 L 140 169', label: 'PARSE', labelX: 155, labelY: 148 },
    { path: 'M 330 114 L 355 114 L 355 59 L 380 59' },
    { path: 'M 330 114 L 355 114 L 355 169 L 390 169', label: 'FETCH', labelX: 355, labelY: 145 },
    { path: 'M 330 114 L 545 114', label: 'EVAL', labelX: 435, labelY: 108 },
    { path: 'M 510 59 L 535 59 L 535 114 L 545 114' },
  ];

  /* =========================================================================
     PROJECT 4 SCHEMATIC DATA (Kohli Analytics)
     ========================================================================= */
  const p4Nodes = [
    { x: 15, y: 35, w: 115, h: 48, title: 'Cricket Logs', subtitle: 'BALL-BY-BALL', theme: 'cyan' },
    { x: 15, y: 145, w: 125, h: 48, title: 'Pitch Heatmap', subtitle: 'COORDINATES', theme: 'dim' },
    { x: 185, y: 90, w: 145, h: 48, title: 'D3.js Engine', subtitle: 'VECTOR VIZ', theme: 'cyan' },
    { x: 380, y: 35, w: 130, h: 48, title: 'GSAP Motion', subtitle: 'SCROLL STORY', theme: 'cyan' },
    { x: 390, y: 145, w: 120, h: 48, title: 'Aggregator', subtitle: 'STATS PARSER', theme: 'dim' },
    { x: 545, y: 85, w: 120, h: 56, title: 'Dashboard', subtitle: 'RESPONSIVE UI', theme: 'amber' },
  ];

  const p4Connections = [
    { path: 'M 130 59 L 155 59 L 155 114 L 185 114', label: 'STREAM', labelX: 155, labelY: 82 },
    { path: 'M 155 114 L 155 169 L 140 169', label: 'MAP', labelX: 155, labelY: 148 },
    { path: 'M 330 114 L 355 114 L 355 59 L 380 59' },
    { path: 'M 330 114 L 355 114 L 355 169 L 390 169', label: 'PARSE', labelX: 355, labelY: 145 },
    { path: 'M 330 114 L 545 114', label: 'RENDER', labelX: 435, labelY: 108 },
    { path: 'M 510 59 L 535 59 L 535 114 L 545 114' },
  ];

  /* =========================================================================
     PROJECT 5 SCHEMATIC DATA (TaskFlow)
     ========================================================================= */
  const p5Nodes = [
    { x: 15, y: 35, w: 110, h: 48, title: 'Kanban UI', subtitle: 'REACT CLIENT', theme: 'cyan' },
    { x: 15, y: 145, w: 120, h: 48, title: 'JWT / RBAC', subtitle: 'ROLE GUARD', theme: 'dim' },
    { x: 185, y: 90, w: 145, h: 48, title: 'Express API', subtitle: 'NODE / SOCKET.IO', theme: 'cyan' },
    { x: 380, y: 35, w: 130, h: 48, title: 'Task Service', subtitle: 'LANE STATE', theme: 'cyan' },
    { x: 390, y: 145, w: 120, h: 48, title: 'Activity Log', subtitle: 'AUDIT TRAIL', theme: 'dim' },
    { x: 545, y: 85, w: 120, h: 56, title: 'MongoDB', subtitle: 'DOC STORE', theme: 'amber' },
  ];

  const p5Connections = [
    { path: 'M 125 59 L 155 59 L 155 114 L 185 114', label: 'WS / REST', labelX: 155, labelY: 82 },
    { path: 'M 155 114 L 155 169 L 135 169', label: 'AUTH', labelX: 155, labelY: 148 },
    { path: 'M 330 114 L 355 114 L 355 59 L 380 59' },
    { path: 'M 330 114 L 355 114 L 355 169 L 390 169', label: 'AUDIT', labelX: 355, labelY: 145 },
    { path: 'M 330 114 L 545 114', label: 'CRUD', labelX: 435, labelY: 108 },
    { path: 'M 510 59 L 535 59 L 535 114 L 545 114' },
  ];

  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.08] font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#f59e0b] font-mono tracking-tight">
                02
              </span>
              <span className="text-slate-500 font-mono text-xl">/</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                DEPLOYED SYSTEMS
              </h2>
            </div>
            <div className="font-mono text-xs text-slate-400 max-w-md">
              Self-assembling architecture schematics - drawn as you read.
            </div>
          </div>
        </div>

        {/* Project Rows */}
        <div className="space-y-32">
          {/* =========================================================================
              PROJECT 1: IncidentHub AI (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-01</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#38bdf8] flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  IncidentHub AI - Incident Intelligence Platform
                </h3>

                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  FULL-STACK / INCIDENT INTELLIGENCE · INDEPENDENT BUILD
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  A full-stack incident intelligence platform correlating GitHub, Sentry, Slack, and Jira signals with passwordless OAuth, a real-time status pipeline, and AI-generated postmortems. Architected and deployed end-to-end.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">4+</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">INTEGRATIONS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">LIVE</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">WS SYNC</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Passwordless OAuth authentication flow & multi-tenant RBAC</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Real-time application status pipeline & live incident triage rooms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>PostgreSQL case store + Redis cache for instant telemetry retrieval</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Architected from system design to production cloud deployment</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth', 'Docker'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/incidenthub-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://incidenthub-ai-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.1) */}
            <div className="lg:col-span-6">
              <ArchitectureSchematic
                figNumber="1"
                nodes={p1Nodes}
                connections={p1Connections}
              />
            </div>
          </div>

          {/* =========================================================================
              PROJECT 2: LeaveFlow HR (Architecture Schematic LEFT, Details RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Architecture Schematic Panel (FIG.2) */}
            <div className="lg:col-span-6 lg:order-1">
              <ArchitectureSchematic
                figNumber="2"
                nodes={p2Nodes}
                connections={p2Connections}
              />
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-6 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-02</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  LeaveFlow - Employee Leave Management System
                </h3>

                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  HRMS / ROLE-BASED WORKFLOW · CORE BACKEND
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  A full-stack employee leave management system managing 3 role-isolated tiers (Employee, Manager, Admin). Includes automated balance validation at approval time, secure REST APIs, and SQLite audit logging.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">3</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">ROLES</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">100%</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">VALIDATED</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">6 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Employee, manager, and admin isolated portal workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Approval-time leave balance validation with automated audit deductions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>REST API backend with structured error handling & session auth</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>SQLite database and deployment-ready project structure</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['Node.js', 'Express.js', 'SQLite', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'RBAC'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/leaveflow-hr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://leaveflow-hr-hvfh.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 3: PortfolioPulse (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-03</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  PortfolioPulse - Developer Portfolio Health Checker
                </h3>

                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  CAREER INTELLIGENCE / GITHUB ANALYTICS · MERN APP
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  An evidence-based career intelligence platform that analyzes GitHub profiles, portfolio websites, and resumes to evaluate hiring readiness across ~20 recruiter-grade signals with actionable recommendations.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">20+</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">SIGNALS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">45</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>GitHub profile and repository commit regularity analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Portfolio SPA crawling via Puppeteer to test production performance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>ATS and recruiter-simulation scoring with tailored remediation advice</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>MongoDB telemetry store tracking candidate progression scores</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'GitHub API', 'Puppeteer', 'JavaScript'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/dev-portfolio-checker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://developer-portfolio-nu-rouge.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.3) */}
            <div className="lg:col-span-6">
              <ArchitectureSchematic
                figNumber="3"
                nodes={p3Nodes}
                connections={p3Connections}
              />
            </div>
          </div>

          {/* =========================================================================
              PROJECT 4: Kohli Analytics (Architecture Schematic LEFT, Details RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Architecture Schematic Panel (FIG.4) */}
            <div className="lg:col-span-6 lg:order-1">
              <ArchitectureSchematic
                figNumber="4"
                nodes={p4Nodes}
                connections={p4Connections}
              />
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-6 lg:order-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-04</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  Kohli Analytics - Cricket Data Visualization
                </h3>

                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  DATA VISUALIZATION / SPORTS ANALYTICS · D3.JS + GSAP
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  An interactive sports analytics platform transforming ball-by-ball cricket data into original metrics, pitch heatmaps, and cinematic visual storytelling with D3.js and GSAP scroll animations.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">26</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">D3.JS</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">CHARTS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Ball-by-ball cricket data transformed into custom statistical metrics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Custom D3.js vector visualizations & interactive pitch heatmaps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>GSAP-powered scroll animations and visual storytelling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Clean responsive dashboard experience with instant filtering</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/kohli-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://kohli-analytics.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PROJECT 5: TaskFlow (Details LEFT, Architecture Schematic RIGHT)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-bold">SYS-05</span>
                    <span className="h-[1px] w-12 bg-white/[0.1] inline-block" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[0.7rem]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                    <span className="text-slate-500 text-[0.7rem]">2026</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
                  TaskFlow - Real-Time Collaborative Task Board
                </h3>

                <div className="text-xs font-mono text-[#38bdf8] tracking-wider uppercase mb-4 font-semibold">
                  TASK MANAGEMENT / MERN APP · REAL-TIME SYSTEM
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono text-justify">
                  A modern full-stack task management application with JWT authentication, RBAC, project organization, and real-time state synchronization across team Kanban boards.
                </p>

                {/* 3 Metrics Box */}
                <div className="grid grid-cols-3 border border-white/[0.08] bg-[#090a0f] rounded-xs mb-6 divide-x divide-white/[0.08] font-mono text-center">
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">9</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">COMMITS</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">RBAC</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">AUTH</div>
                  </div>
                  <div className="p-3">
                    <div className="text-base sm:text-lg font-bold text-[#38bdf8]">5 ★</div>
                    <div className="text-[0.62rem] text-slate-400 uppercase mt-0.5 tracking-wider">STARS</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6 text-xs text-slate-300 font-mono">
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>JWT authentication and role-based task workflows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Project and task organization with priority indicators and due dates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>Responsive team dashboard with instant activity audit logs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] text-[0.65rem] mt-0.5 shrink-0">▪</span>
                    <span>MERN backend and frontend integration with MongoDB Atlas</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono text-[0.68rem]">
                  {['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs border border-white/[0.08] bg-[#090a0f] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 font-mono text-xs">
                  <a
                    href="https://github.com/rakeshkumar0804/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs border border-white/[0.12] bg-[#090a0f] text-slate-200 hover:border-[#38bdf8] hover:text-white transition-colors"
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href="https://github.com/rakeshkumar0804/taskflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xs bg-[#38bdf8] text-[#090a0f] font-semibold hover:bg-[#60a5fa] transition-colors"
                  >
                    <span>View Project</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Architecture Schematic Panel (FIG.5) */}
            <div className="lg:col-span-6">
              <ArchitectureSchematic
                figNumber="5"
                nodes={p5Nodes}
                connections={p5Connections}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
