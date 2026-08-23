"use client";

import { Cpu, Terminal, Shield, Database, Layout, Cloud } from "lucide-react";

export default function CapabilityMatrix() {
  const CAPABILITIES = [
    {
      icon: Layout,
      title: "FRONTEND // RUNTIME",
      accent: "text-blueprint-cyan",
      skills: ["React 19", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Three.js / R3F", "Framer Motion", "D3.js"],
      note: "Deterministic UI lifecycles & sub-100ms render budgets",
    },
    {
      icon: Terminal,
      title: "BACKEND // ARCHITECTURE",
      accent: "text-blueprint-amber",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets / Socket.io", "RBAC Auth", "JWT Sessions", "Nodemailer"],
      note: "Event-driven pipelines & robust rate-limited endpoints",
    },
    {
      icon: Database,
      title: "PERSISTENCE // CACHE",
      accent: "text-blueprint-green",
      skills: ["PostgreSQL", "MongoDB / Mongoose", "Redis In-Memory Bus", "Prisma ORM", "SQL Indexing", "ACID Compliance"],
      note: "Sub-20ms query indexing & atomic transaction locks",
    },
    {
      icon: Cloud,
      title: "DEVOPS // CLOUD INFRA",
      accent: "text-blueprint-cyan",
      skills: ["Docker Containers", "Git / GitHub Actions", "Vercel Edge", "AWS EC2 / S3", "Postman", "CI/CD Pipelines"],
      note: "Automated lint/build validations with zero-downtime deploys",
    },
  ];

  return (
    <section id="capabilities" className="relative border-t border-blueprint-border bg-canvas-base py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-blueprint-cyan mb-2">
          <span className="h-px w-8 bg-blueprint-cyan" />
          <span className="tech-tag">03 // OPERATOR SPEC & MATRIX</span>
        </div>
        <h2 className="font-mono text-3xl font-extrabold tracking-tight text-paper md:text-5xl">
          CAPABILITY <span className="text-blueprint-cyan glow-cyan">MATRIX</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper-dim">
          Deep full-stack specialization spanning modern reactive interfaces, distributed API runtimes, and resilient data engines.
        </p>

        {/* Matrix Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px border border-blueprint-border bg-blueprint-border">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="bg-canvas-base p-8 transition-colors hover:bg-canvas-subtle">
              <div className="flex items-center justify-between mb-4">
                <span className="tech-tag text-xs font-bold text-paper flex items-center gap-2">
                  <cap.icon className={`h-4 w-4 ${cap.accent}`} />
                  {cap.title}
                </span>
                <span className="tech-tag text-[0.6rem] text-paper-muted">
                  TIER_1 // PROD
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-tag border border-blueprint-border/90 bg-canvas-subtle px-2.5 py-1 text-[0.65rem] text-paper-dim transition-colors hover:border-blueprint-cyan hover:text-blueprint-cyan"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="border-t border-blueprint-border/60 pt-3 text-[0.68rem] font-mono text-paper-muted">
                {cap.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
