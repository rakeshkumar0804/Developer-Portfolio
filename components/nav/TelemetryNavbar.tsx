"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Terminal, Volume2, VolumeX, Menu, X } from "lucide-react";

// Web Audio synthesizer for zero-latency tactical UI sounds
const playFeedbackBlip = (freq: number = 880, duration: number = 0.04) => {
  if (typeof window === "undefined") return;
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // AudioContext blocked or not supported
  }
};

interface NavItem {
  idx: string;
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { idx: "01", label: "PRINCIPLES", href: "#principles" },
  { idx: "02", label: "SYSTEMS", href: "#systems" },
  { idx: "03", label: "CAPABILITIES", href: "#capabilities" },
  { idx: "04", label: "COMMS", href: "#comms" },
];

export default function TelemetryNavbar() {
  const [audioActive, setAudioActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("01");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Scroll detection & ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ["principles", "systems", "capabilities", "comms"];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(NAV_LINKS[i].idx);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = useCallback(() => {
    const nextState = !audioActive;
    setAudioActive(nextState);
    if (nextState) {
      playFeedbackBlip(1200, 0.08);
    }
  }, [audioActive]);

  const handleNavClick = (href: string) => {
    if (audioActive) playFeedbackBlip(980, 0.03);
    setMobileMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-canvas-base/85 backdrop-blur-md border-blueprint-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex h-14 items-center justify-between">
        
        {/* Brand / Uplink Telemetry */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => audioActive && playFeedbackBlip(1100, 0.04)}
        >
          <div className="relative flex h-8 w-8 items-center justify-center border border-blueprint-border bg-canvas-subtle transition-all duration-200 group-hover:border-blueprint-cyan group-hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            <Terminal className="h-4 w-4 text-blueprint-cyan" />
            <span className="absolute -top-0.5 -right-0.5 h-1 w-1 bg-blueprint-cyan rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="tech-tag font-bold tracking-widest text-paper group-hover:text-blueprint-cyan transition-colors">
              RAKESH.SYS
            </span>
            <span className="text-[0.58rem] font-mono text-paper-muted flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-blueprint-green" />
              UPLINK // ACTIVE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Schematic Navigation">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.idx;
            return (
              <a
                key={item.idx}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onMouseEnter={() => audioActive && playFeedbackBlip(600, 0.02)}
                className={`relative flex items-center gap-1.5 tech-tag transition-all duration-150 py-1 ${
                  isActive
                    ? "text-blueprint-cyan font-semibold glow-cyan"
                    : "text-paper-dim hover:text-paper"
                }`}
              >
                <span className={isActive ? "text-blueprint-cyan font-bold" : "text-blueprint-cyan/50"}>
                  {item.idx}
                </span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 inset-x-0 h-0.5 bg-blueprint-cyan shadow-[0_0_6px_#00f0ff]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Tactical Controls & Audio State */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAudioToggle}
            aria-label={audioActive ? "Mute tactical audio" : "Enable tactical audio"}
            aria-pressed={audioActive}
            className={`flex items-center gap-1.5 border px-2.5 py-1 text-[0.62rem] font-mono uppercase transition-all duration-200 ${
              audioActive
                ? "border-blueprint-cyan text-blueprint-cyan bg-blueprint-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                : "border-blueprint-border text-paper-muted hover:border-blueprint-border hover:text-paper"
            }`}
          >
            {audioActive ? (
              <>
                <Volume2 className="h-3.5 w-3.5 text-blueprint-cyan animate-pulse" />
                <span className="font-semibold">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5 text-paper-muted" />
                <span>AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center border border-blueprint-border bg-canvas-subtle text-paper-dim hover:text-blueprint-cyan"
            aria-label="Toggle schematic menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Tactical Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blueprint-border bg-canvas-base/95 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex items-center justify-between text-[0.6rem] font-mono text-paper-muted mb-4 border-b border-blueprint-border pb-2">
            <span>INDEX // DIRECTORY</span>
            <span className="text-blueprint-cyan">SYS_READY</span>
          </div>
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.idx}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="flex items-center justify-between border-b border-blueprint-border/40 pb-2 text-sm font-mono text-paper hover:text-blueprint-cyan"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-blueprint-cyan">{item.idx}</span>
                  <span className="tech-tag text-xs">{item.label}</span>
                </div>
                <span className="text-xs text-paper-muted">↗</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
