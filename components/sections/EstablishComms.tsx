"use client";

import { Mail, Github, Linkedin, Terminal, ArrowUpRight } from "lucide-react";

export default function EstablishComms() {
  const CHANNELS = [
    {
      icon: Mail,
      label: "EMAIL // DIRECT",
      val: "rakeshchauhan6651@gmail.com",
      href: "mailto:rakeshchauhan6651@gmail.com",
      accent: "text-blueprint-cyan",
      tag: "INBOX // OPEN",
    },
    {
      icon: Github,
      label: "GITHUB // REPOSITORIES",
      val: "@rakeshkumar0804",
      href: "https://github.com/rakeshkumar0804",
      accent: "text-blueprint-cyan",
      tag: "18 REPOS",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN // NETWORK",
      val: "in/rakesh-kumar",
      href: "https://www.linkedin.com/in/rakesh-kumar-520754246/",
      accent: "text-blueprint-cyan",
      tag: "PROFESSIONAL",
    },
    {
      icon: Terminal,
      label: "LEETCODE // ALGORITHMS",
      val: "u/Rakesh__Kumar_",
      href: "https://leetcode.com/u/Rakesh__Kumar_/",
      accent: "text-blueprint-amber",
      tag: "165+ SOLVED",
    },
  ];

  return (
    <section id="comms" className="relative border-t border-blueprint-border bg-canvas-subtle/40 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center gap-3 text-blueprint-cyan mb-2">
          <span className="h-px w-8 bg-blueprint-cyan" />
          <span className="tech-tag">04 // ESTABLISH COMMS</span>
        </div>
        <h2 className="font-mono text-4xl font-extrabold tracking-tight text-paper md:text-6xl leading-tight">
          Let's build <span className="text-blueprint-cyan glow-cyan">something</span> ambitious.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper-dim">
          Engineering teams, founders, and recruiters - if you need someone who can architect, build, and deploy production web systems end-to-end, my channel is active.
        </p>

        {/* Channels Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS.map((ch, idx) => (
            <a
              key={idx}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex flex-col justify-between border border-blueprint-border bg-canvas-base p-6 transition-all hover:border-blueprint-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ch.icon className={`h-5 w-5 ${ch.accent}`} />
                  <span className="tech-tag text-[0.55rem] text-paper-muted">
                    {ch.tag}
                  </span>
                </div>
                <span className="tech-tag text-[0.62rem] text-paper-muted block">
                  {ch.label}
                </span>
                <span className="font-mono text-sm font-semibold text-paper group-hover:text-blueprint-cyan block truncate mt-1 transition-colors">
                  {ch.val}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-blueprint-border/60 pt-3 text-[0.62rem] font-mono text-paper-muted">
                <span>CONNECT</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-paper-dim group-hover:text-blueprint-cyan transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Mission Debrief Footer Strip */}
        <div className="mt-24 border-t border-blueprint-border/60 pt-6 flex flex-wrap items-center justify-between gap-4 tech-tag text-[0.62rem] text-paper-muted">
          <span>© 2026 RAKESH KUMAR</span>
          <span>DRAWING NO. RK-2026 // END OF SCHEMATIC</span>
          <span className="text-blueprint-cyan flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blueprint-cyan animate-pulse" />
            UPLINK // STABLE
          </span>
        </div>
      </div>
    </section>
  );
}
