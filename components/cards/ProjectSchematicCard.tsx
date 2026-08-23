"use client";

import { ExternalLink, GitBranch, Server, Database, Smartphone, ArrowRight } from "lucide-react";

export interface ProjectSystem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  status?: "ONLINE" | "STANDBY" | "ARCHIVED";
  metrics: { label: string; value: string; accent?: "cyan" | "amber" | "green" }[];
  tags: string[];
  pipeline: {
    client: string;
    api: string;
    data: string;
  };
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProjectSchematicCard({ project }: { project: ProjectSystem }) {
  const status = project.status || "ONLINE";

  return (
    <article
      className="group relative flex flex-col justify-between border border-blueprint-border bg-canvas-subtle/50 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-blueprint-cyan/60 hover:bg-canvas-subtle/80 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* 1. Tactical Corner Crosshairs (+) */}
      <div className="absolute -top-1.5 -left-1.5 font-mono text-[11px] font-bold text-blueprint-cyan/40 transition-colors group-hover:text-blueprint-cyan group-hover:drop-shadow-[0_0_4px_#00f0ff]">+</div>
      <div className="absolute -top-1.5 -right-1.5 font-mono text-[11px] font-bold text-blueprint-cyan/40 transition-colors group-hover:text-blueprint-cyan group-hover:drop-shadow-[0_0_4px_#00f0ff]">+</div>
      <div className="absolute -bottom-1.5 -left-1.5 font-mono text-[11px] font-bold text-blueprint-cyan/40 transition-colors group-hover:text-blueprint-cyan group-hover:drop-shadow-[0_0_4px_#00f0ff]">+</div>
      <div className="absolute -bottom-1.5 -right-1.5 font-mono text-[11px] font-bold text-blueprint-cyan/40 transition-colors group-hover:text-blueprint-cyan group-hover:drop-shadow-[0_0_4px_#00f0ff]">+</div>

      <div>
        {/* 2. Header Telemetry & Direct Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blueprint-border/60 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="tech-tag border border-blueprint-cyan/40 bg-blueprint-cyan/10 px-2 py-0.5 font-bold text-blueprint-cyan shadow-[0_0_8px_rgba(0,240,255,0.15)]">
              {project.code}
            </span>
            <span className="flex items-center gap-1.5 tech-tag text-[0.62rem] text-paper-muted">
              <span className={`h-1.5 w-1.5 rounded-full ${status === "ONLINE" ? "bg-blueprint-green animate-pulse shadow-[0_0_6px_#10b981]" : "bg-paper-muted"}`} />
              {status}
            </span>
            <span className="hidden sm:inline tech-tag text-[0.62rem] text-paper-muted/60">
              // {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="flex items-center gap-1 border border-blueprint-border bg-canvas-base/80 px-2 py-1 text-[0.62rem] font-mono text-paper-dim transition-all hover:border-blueprint-cyan hover:text-blueprint-cyan hover:shadow-[0_0_8px_rgba(0,240,255,0.2)]"
              >
                <GitBranch className="h-3 w-3" />
                <span className="hidden md:inline">SRC</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Launch ${project.title} live system`}
                className="flex items-center gap-1 border border-blueprint-border bg-canvas-base/80 px-2 py-1 text-[0.62rem] font-mono text-paper-dim transition-all hover:border-blueprint-green hover:text-blueprint-green hover:shadow-[0_0_8px_rgba(16,185,129,0.2)]"
              >
                <ExternalLink className="h-3 w-3" />
                <span className="hidden md:inline">DEPLOY</span>
              </a>
            )}
          </div>
        </div>

        {/* 3. Title & Description */}
        <div className="mt-5">
          <h3
            id={`project-title-${project.id}`}
            className="font-mono text-xl font-bold tracking-tight text-paper transition-colors group-hover:text-blueprint-cyan"
          >
            {project.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">
            {project.description}
          </p>
        </div>

        {/* 4. Architectural Telemetry Metrics Matrix */}
        <div className="mt-6 grid grid-cols-2 gap-px border border-blueprint-border/70 bg-blueprint-border/70 md:grid-cols-3">
          {project.metrics.map((metric, i) => {
            const accentClass =
              metric.accent === "amber"
                ? "text-blueprint-amber"
                : metric.accent === "green"
                ? "text-blueprint-green"
                : "text-blueprint-cyan glow-cyan";

            return (
              <div key={i} className="bg-canvas-base/80 px-3 py-2.5 backdrop-blur">
                <span className="tech-tag block text-[0.58rem] text-paper-muted">
                  {metric.label}
                </span>
                <span className={`mt-0.5 font-mono text-base font-bold tabular-nums ${accentClass}`}>
                  {metric.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* 5. Interactive Pipeline Schematic Visualizer */}
        <div className="mt-6 border border-dashed border-blueprint-border bg-canvas-base/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="tech-tag text-[0.58rem] text-paper-muted">
              FIG.1 // ARCHITECTURE TOPOLOGY
            </span>
            <span className="tech-tag text-[0.55rem] text-blueprint-cyan flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-blueprint-cyan animate-ping" />
              LIVE DATASTREAM
            </span>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            {/* Client Tier */}
            <div className="w-full flex-1 border border-blueprint-border bg-canvas-subtle/80 p-2.5 text-center transition-colors group-hover:border-blueprint-cyan/30">
              <Smartphone className="mx-auto mb-1 h-3.5 w-3.5 text-blueprint-cyan" />
              <span className="tech-tag block text-[0.55rem] text-paper-muted">CLIENT</span>
              <span className="font-mono text-xs font-semibold text-paper block truncate">
                {project.pipeline.client}
              </span>
            </div>

            {/* Signal Stream 1 */}
            <ArrowRight className="h-3 w-3 shrink-0 text-blueprint-cyan/50 rotate-90 sm:rotate-0" />

            {/* API Tier */}
            <div className="w-full flex-1 border border-blueprint-border bg-canvas-subtle/80 p-2.5 text-center transition-colors group-hover:border-blueprint-amber/30">
              <Server className="mx-auto mb-1 h-3.5 w-3.5 text-blueprint-amber" />
              <span className="tech-tag block text-[0.55rem] text-paper-muted">RUNTIME / API</span>
              <span className="font-mono text-xs font-semibold text-paper block truncate">
                {project.pipeline.api}
              </span>
            </div>

            {/* Signal Stream 2 */}
            <ArrowRight className="h-3 w-3 shrink-0 text-blueprint-cyan/50 rotate-90 sm:rotate-0" />

            {/* Storage Tier */}
            <div className="w-full flex-1 border border-blueprint-border bg-canvas-subtle/80 p-2.5 text-center transition-colors group-hover:border-blueprint-green/30">
              <Database className="mx-auto mb-1 h-3.5 w-3.5 text-blueprint-green" />
              <span className="tech-tag block text-[0.55rem] text-paper-muted">PERSISTENCE</span>
              <span className="font-mono text-xs font-semibold text-paper block truncate">
                {project.pipeline.data}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Tech Stack Badges */}
      <div className="mt-6 flex flex-wrap gap-1.5 border-t border-blueprint-border/50 pt-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="tech-tag border border-blueprint-border/80 bg-canvas-base/50 px-2 py-0.5 text-[0.58rem] text-paper-dim transition-colors hover:border-blueprint-cyan hover:text-blueprint-cyan"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
