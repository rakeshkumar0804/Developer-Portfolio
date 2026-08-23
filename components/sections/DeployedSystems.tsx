"use client";

import { useState, useMemo } from "react";
import ProjectSchematicCard, { ProjectSystem } from "../cards/ProjectSchematicCard";
import { Server, Activity, ShieldCheck, Filter } from "lucide-react";

const SYSTEMS_DATA: ProjectSystem[] = [
  {
    id: "sys-01",
    code: "SYS-01 // FEATURED",
    title: "IncidentHub AI - Automated Incident Intelligence",
    category: "AI & REALTIME",
    description:
      "Production-grade incident response platform featuring automated LLM root-cause triage, WebSocket live streaming, and webhook alerts with sub-50ms query latency.",
    status: "ONLINE",
    metrics: [
      { label: "TRIAGE TIME", value: "↓ 68%", accent: "green" },
      { label: "STREAM LATENCY", value: "<45ms", accent: "cyan" },
      { label: "INGESTION", value: "10K/min", accent: "amber" },
    ],
    pipeline: {
      client: "React 19 / TS",
      api: "Node.js / Express",
      data: "PostgreSQL / Redis",
    },
    tags: ["React 19", "Node.js", "PostgreSQL", "Redis", "Socket.io", "Gemini AI"],
    repoUrl: "https://github.com/rakeshkumar0804/incidenthub-ai",
    demoUrl: "https://incidenthub-ai.vercel.app",
  },
  {
    id: "sys-02",
    code: "SYS-02 // CORE ENGINE",
    title: "Dev Portfolio Health & ATS Scorer",
    category: "AI & DEVTOOL",
    description:
      "Automated web audit platform that performs AST static analysis, Lighthouse audits, and LLM-driven resume/portfolio enhancement scoring in real-time.",
    status: "ONLINE",
    metrics: [
      { label: "AUDIT SPEED", value: "<1.2s", accent: "green" },
      { label: "CHECKS", value: "32 Rules", accent: "cyan" },
      { label: "ACCURACY", value: "99.4%", accent: "amber" },
    ],
    pipeline: {
      client: "Next.js / Tailwind",
      api: "Node AST Parser",
      data: "MongoDB Atlas",
    },
    tags: ["Next.js", "AST Analysis", "Cheerio", "Express", "MongoDB", "AI"],
    repoUrl: "https://github.com/rakeshkumar0804/portfolio-health-checker",
    demoUrl: "https://portfolio-checker.vercel.app",
  },
  {
    id: "sys-03",
    code: "SYS-03 // ANALYTICS",
    title: "Kohli Analytics - Sports Trajectory Engine",
    category: "DATA VIZ",
    description:
      "High-performance sports analytics platform rendering complex career datasets with customized D3.js vector visualizations and 60 FPS GSAP animation pipelines.",
    status: "ONLINE",
    metrics: [
      { label: "RENDER FPS", value: "60 FPS", accent: "green" },
      { label: "DATA POINTS", value: "25K+", accent: "cyan" },
      { label: "BUNDLE SIZE", value: "<120KB", accent: "green" },
    ],
    pipeline: {
      client: "React 19 / D3.js",
      api: "Stat Aggregator",
      data: "JSON Datasets",
    },
    tags: ["React 19", "TypeScript", "D3.js", "GSAP", "Tailwind CSS"],
    repoUrl: "https://github.com/rakeshkumar0804/kohli-analytics",
    demoUrl: "https://kohli-analytics.vercel.app",
  },
  {
    id: "sys-04",
    code: "SYS-04 // WORKFLOW",
    title: "LeaveFlow - Enterprise HR & Approval CRM",
    category: "ENTERPRISE",
    description:
      "Enterprise leave management system featuring hierarchical RBAC approval matrix, automated email dispatchers, and detailed attendance telemetry charts.",
    status: "ONLINE",
    metrics: [
      { label: "MANUAL WORK", value: "↓ 75%", accent: "green" },
      { label: "ROLES", value: "Multi-Tier", accent: "cyan" },
      { label: "DB RESPONSE", value: "<15ms", accent: "green" },
    ],
    pipeline: {
      client: "React SPA",
      api: "Express Server",
      data: "MongoDB / Mongoose",
    },
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    repoUrl: "https://github.com/rakeshkumar0804/leaveflow-hr",
    demoUrl: "https://leaveflow-hr.vercel.app",
  },
  {
    id: "sys-05",
    code: "SYS-05 // REALTIME",
    title: "TaskFlow Pro - Agile Kanban Engine",
    category: "AI & REALTIME",
    description:
      "Collaborative project workflow suite featuring drag-and-drop board mechanics, multi-user WebSocket synchronization, and automated sprint velocity calculators.",
    status: "ONLINE",
    metrics: [
      { label: "SYNC LATENCY", value: "<20ms", accent: "green" },
      { label: "THROUGHPUT", value: "5K req/s", accent: "cyan" },
      { label: "UPTIME", value: "99.95%", accent: "green" },
    ],
    pipeline: {
      client: "React / Framer",
      api: "Node API",
      data: "Redis Cache / Mongo",
    },
    tags: ["React", "Express", "WebSockets", "Redis", "Framer Motion"],
    repoUrl: "https://github.com/rakeshkumar0804/taskflow-pro",
    demoUrl: "https://taskflow-pro.vercel.app",
  },
  {
    id: "sys-06",
    code: "SYS-06 // ENTERPRISE",
    title: "EMS Core - Emergency Response Dispatcher",
    category: "ENTERPRISE",
    description:
      "Critical emergency services dispatch management dashboard supporting live incident maps, responder assignment workflows, and secure audit logging.",
    status: "ONLINE",
    metrics: [
      { label: "DISPATCH TIME", value: "<30s", accent: "green" },
      { label: "MAP RENDER", value: "<80ms", accent: "cyan" },
      { label: "AUDIT LOG", value: "Immutable", accent: "amber" },
    ],
    pipeline: {
      client: "React / Leaflet",
      api: "Express Runtime",
      data: "PostgreSQL",
    },
    tags: ["React", "Node.js", "PostgreSQL", "Leaflet Maps", "RBAC"],
    repoUrl: "https://github.com/rakeshkumar0804/ems-core",
    demoUrl: "https://ems-core.vercel.app",
  },
];

const CATEGORIES = ["ALL", "AI & REALTIME", "ENTERPRISE", "DATA VIZ", "AI & DEVTOOL"] as const;

export default function DeployedSystems() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredSystems = useMemo(() => {
    if (activeCategory === "ALL") return SYSTEMS_DATA;
    return SYSTEMS_DATA.filter((sys) => sys.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="systems" className="relative border-t border-blueprint-border bg-canvas-base/40 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header with Tactical Indexing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-blueprint-border">
          <div>
            <div className="flex items-center gap-3 text-blueprint-cyan mb-2">
              <span className="h-px w-8 bg-blueprint-cyan" />
              <span className="tech-tag">02 // DEPLOYED SYSTEMS</span>
            </div>
            <h2 className="font-mono text-3xl font-extrabold tracking-tight text-paper md:text-5xl">
              SYSTEM <span className="text-blueprint-cyan glow-cyan">SCHEMATICS</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper-dim">
              Production architectures engineered for high concurrency, deterministic uptime, and clean separation of concerns.
            </p>
          </div>

          {/* Telemetry Status Block */}
          <div className="flex items-center gap-4 border border-blueprint-border bg-canvas-subtle p-3 font-mono text-xs">
            <div className="flex items-center gap-2 border-r border-blueprint-border pr-4">
              <Server className="h-4 w-4 text-blueprint-cyan" />
              <div>
                <span className="text-[0.6rem] text-paper-muted block">SYSTEMS</span>
                <span className="font-bold text-blueprint-cyan">06 ONLINE</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-r border-blueprint-border pr-4">
              <Activity className="h-4 w-4 text-blueprint-green" />
              <div>
                <span className="text-[0.6rem] text-paper-muted block">AVG LATENCY</span>
                <span className="font-bold text-blueprint-green">&lt;35ms</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blueprint-amber" />
              <div>
                <span className="text-[0.6rem] text-paper-muted block">UPTIME SLA</span>
                <span className="font-bold text-blueprint-amber">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 tech-tag text-[0.65rem] text-paper-muted mr-2">
              <Filter className="h-3 w-3 text-blueprint-cyan" />
              FILTER:
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`tech-tag px-3 py-1 text-[0.65rem] transition-all ${
                    isActive
                      ? "border border-blueprint-cyan bg-blueprint-cyan/15 text-blueprint-cyan font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      : "border border-blueprint-border bg-canvas-subtle text-paper-muted hover:border-blueprint-border/80 hover:text-paper"
                  }`}
                >
                  {cat} {cat === "ALL" ? `[${SYSTEMS_DATA.length}]` : ""}
                </button>
              );
            })}
          </div>

          <span className="tech-tag text-[0.6rem] text-paper-muted hidden md:inline">
            SHOWING {filteredSystems.length} OF {SYSTEMS_DATA.length} NODE SCHEMATICS
          </span>
        </div>

        {/* 2-Column Responsive Schematics Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredSystems.map((project) => (
            <ProjectSchematicCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
