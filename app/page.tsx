import TelemetryNavbar from "@/components/nav/TelemetryNavbar";
import SchematicGlobeCanvas from "@/components/canvas/SchematicGlobeCanvas";
import StackGraphExplorer from "@/components/canvas/StackGraphExplorer";
import DeployedSystems from "@/components/sections/DeployedSystems";
import CapabilityMatrix from "@/components/sections/CapabilityMatrix";
import EstablishComms from "@/components/sections/EstablishComms";
import { Terminal, Shield, Cpu, Activity, ArrowDownRight, Mail } from "lucide-react";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-canvas-base text-paper font-mono selection:bg-blueprint-cyan selection:text-canvas-base">
      {/* Blueprint Grid Overlay Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 blueprint-grid" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_60%,var(--ink-900)_100%)]" />

      <TelemetryNavbar />

      {/* =================================================================
          HERO MASTER SCHEMATIC
          ================================================================= */}
      <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-32 pb-16 md:px-12 md:pt-40">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Operator Bio & 4-Cell Stats Counter Panel */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-blueprint-cyan mb-4">
              <span className="h-px w-10 bg-blueprint-cyan shadow-[0_0_8px_#00f0ff]" />
              <span className="tech-tag font-semibold">DRAWING NO. RK-2026 // MASTER SCHEMATIC</span>
            </div>

            <h1 className="font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-paper">
              RAKESH<br />
              <span className="text-[#8fb7d9] drop-shadow-[0_0_20px_rgba(143,183,217,0.2)]">KUMAR</span>
            </h1>

            <div className="mt-5 flex items-center gap-2 font-mono text-lg md:text-xl font-bold text-blueprint-cyan">
              <span>Full-Stack MERN Developer</span>
              <span className="animate-blink-cursor">▮</span>
            </div>

            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-paper-dim font-sans">
              I architect and ship production systems end-to-end. Building scalable MERN & cloud-native backends, sub-50ms real-time pipelines, and deterministic AI/LLM integrations.
            </p>

            {/* CTA Action Triggers */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#systems"
                className="flex items-center gap-2 border border-blueprint-cyan bg-blueprint-cyan/15 px-6 py-3 font-mono text-xs font-bold text-blueprint-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all hover:bg-blueprint-cyan hover:text-canvas-base"
              >
                <span>EXPLORE SCHEMATICS</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:rakeshchauhan6651@gmail.com"
                className="flex items-center gap-2 border border-blueprint-border bg-canvas-subtle px-6 py-3 font-mono text-xs text-paper-dim transition-all hover:border-blueprint-cyan hover:text-paper"
              >
                <Mail className="h-4 w-4 text-blueprint-cyan" />
                <span>INITIATE COMMS</span>
              </a>
            </div>

            {/* 4-Cell Telemetry Stats Panel */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px border border-blueprint-border bg-blueprint-border max-w-2xl">
              {[
                { label: "PROD SYSTEMS", val: "5+", icon: Cpu },
                { label: "LEETCODE SOLVED", val: "165+", icon: Terminal },
                { label: "HACKATHONS", val: "2+", icon: Activity },
                { label: "CERTIFICATIONS", val: "3+", icon: Shield },
              ].map((item, i) => (
                <div key={i} className="bg-canvas-base/90 p-4 backdrop-blur">
                  <div className="font-mono text-2xl font-bold text-blueprint-cyan glow-cyan">
                    {item.val}
                  </div>
                  <div className="tech-tag mt-1 text-[0.58rem] text-paper-muted">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Blueprint Constellation Globe Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md border border-blueprint-border bg-canvas-subtle/40 p-4 backdrop-blur-md flex flex-col justify-between overflow-hidden">
              {/* Radar Corner Crosses */}
              <div className="absolute top-2 left-2 text-xs font-mono text-blueprint-cyan/50">+</div>
              <div className="absolute top-2 right-2 text-xs font-mono text-blueprint-cyan/50">+</div>
              <div className="absolute bottom-2 left-2 text-xs font-mono text-blueprint-cyan/50">+</div>
              <div className="absolute bottom-2 right-2 text-xs font-mono text-blueprint-cyan/50">+</div>

              {/* Header Telemetry */}
              <div className="flex items-center justify-between tech-tag text-[0.6rem] text-paper-muted px-2 pt-1">
                <span>STACK GRAPH // 3D MESH</span>
                <span className="text-blueprint-green flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blueprint-green animate-ping" />
                  LIVE NODES
                </span>
              </div>

              {/* Three.js R3F Canvas */}
              <div className="relative h-64 sm:h-72 w-full my-auto">
                <SchematicGlobeCanvas />
              </div>

              {/* Footer Indicator */}
              <div className="border-t border-blueprint-border pt-2.5 px-2 flex items-center justify-between text-[0.62rem] font-mono text-paper-dim">
                <span>BASE: GURUGRAM, IN</span>
                <span className="text-blueprint-cyan">SYS_NOMINAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          THE STACK // 7 LAYERS INTERACTIVE SCROLL EXPLORER
          ================================================================= */}
      <StackGraphExplorer />

      {/* =================================================================
          01 // OPERATING PRINCIPLES
          ================================================================= */}
      <section id="principles" className="relative border-t border-blueprint-border py-24 bg-canvas-base/60">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center gap-3 text-blueprint-cyan mb-2">
            <span className="h-px w-8 bg-blueprint-cyan" />
            <span className="tech-tag">01 // OPERATING PRINCIPLES</span>
          </div>
          <h2 className="font-mono text-3xl font-extrabold text-paper md:text-5xl">
            DESIGN <span className="text-blueprint-amber glow-amber">CONSTRAINTS</span>
          </h2>
          <p className="mt-2 text-sm text-paper-dim max-w-xl">
            The core architecture principles underpinning every production system.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px border border-blueprint-border bg-blueprint-border">
            {[
              { num: "01", title: "Own the Entire Stack", desc: "Design from database schemas and Redis pub/sub queues to high-performance client rendering pipelines without leaky abstractions." },
              { num: "02", title: "Ship to Real Users", desc: "Zero toy projects. Every system is built to withstand real network conditions, payload spikes, and live concurrent users." },
              { num: "03", title: "AI as Reliable Infrastructure", desc: "Leverage LLMs for automated root-cause analysis, dynamic incident routing, and AST code triage, backed by deterministic guardrails." },
              { num: "04", title: "Engineer for Scale & Speed", desc: "Keep sub-50ms API budgets, strict payload serialization, indexed queries, and resilient fallback states." },
            ].map((p) => (
              <div key={p.num} className="bg-canvas-base p-8 transition-colors hover:bg-canvas-subtle">
                <span className="font-mono text-4xl font-black text-paper-muted/30 block mb-4">
                  {p.num}
                </span>
                <h3 className="font-mono text-lg font-bold text-paper mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          02 // DEPLOYED SYSTEMS (6 PRODUCTION SCHEMATICS)
          ================================================================= */}
      <DeployedSystems />

      {/* =================================================================
          03 // CAPABILITY MATRIX
          ================================================================= */}
      <CapabilityMatrix />

      {/* =================================================================
          04 // ESTABLISH COMMS
          ================================================================= */}
      <EstablishComms />
    </div>
  );
}
