"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ArrowUpRight, X } from "lucide-react";

export interface StackLayer {
  id: string;
  num: string;
  tier: string;
  indexLabel: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  accent: "cyan" | "amber";
}

export const STACK_LAYERS: StackLayer[] = [
  {
    id: "L1",
    num: "01",
    tier: "FOUNDATION",
    indexLabel: "L1 · FOUNDATION 01 / 07",
    title: "Language Core",
    description:
      "Every system I ship starts here - typed, strict, predictable. The bedrock the whole stack stands on.",
    tags: ["TypeScript", "JavaScript (ES6+)"],
    color: "#00f0ff",
    accent: "cyan",
  },
  {
    id: "L2",
    num: "02",
    tier: "INTERFACE",
    indexLabel: "L2 · INTERFACE 02 / 07",
    title: "What People Touch",
    description:
      "The surface layer - fast, server-rendered, and built to feel alive. Where engineering meets the eye.",
    tags: ["React.js", "Next.js (SSR/ISR)", "Three.js / R3F", "GSAP", "Tailwind"],
    color: "#00f0ff",
    accent: "cyan",
  },
  {
    id: "L3",
    num: "03",
    tier: "SERVICES",
    indexLabel: "L3 · SERVICES 03 / 07",
    title: "The Logic Layer",
    description:
      "Where the rules live - APIs, sockets, and microservices wired for real-time and locked down with RBAC.",
    tags: ["Node.js", "Express.js", "REST", "WebSockets", "Microservices", "OAuth", "RBAC"],
    color: "#00f0ff",
    accent: "cyan",
  },
  {
    id: "L4",
    num: "04",
    tier: "PERSISTENCE",
    indexLabel: "L4 · PERSISTENCE 04 / 07",
    title: "State That Survives",
    description:
      "Memory for the system - documents, caches, and graphs that hold the truth between requests.",
    tags: ["MongoDB", "Redis", "Supabase", "Firebase", "Neo4j"],
    color: "#00f0ff",
    accent: "cyan",
  },
  {
    id: "L5",
    num: "05",
    tier: "INFRASTRUCTURE",
    indexLabel: "L5 · INFRASTRUCTURE 05 / 07",
    title: "Where It Runs",
    description:
      "Containers, pipelines, and cloud - shipped end-to-end so deploys are boring and uptime isn't.",
    tags: ["AWS (EC2/S3/IAM)", "Google Cloud", "Docker", "CI/CD", "Nginx"],
    color: "#00f0ff",
    accent: "cyan",
  },
  {
    id: "L6",
    num: "06",
    tier: "INTELLIGENCE",
    indexLabel: "L6 · INTELLIGENCE 06 / 07",
    title: "Systems That Reason",
    description:
      "Augmenting applications with deterministic LLM agents, dynamic vector search, automated triage, and workflow automations.",
    tags: ["Gemini API", "Claude API", "OpenAI API", "n8n"],
    color: "#f59e0b",
    accent: "amber",
  },
  {
    id: "L7",
    num: "07",
    tier: "FRONTIER",
    indexLabel: "L7 · FRONTIER 07 / 07",
    title: "Frontier Systems",
    description:
      "Decentralized protocols, autonomous agent teams, and trustless settlement networks pushing beyond traditional web bounds.",
    tags: ["Decentralized Infra", "Autonomous Agents", "Smart Contracts", "EVM", "Web3"],
    color: "#ffb347",
    accent: "amber",
  },
];

// Exact spatial coordinates for each layer on the sphere
const LAYER_GEOMETRIES: {
  points: [number, number, number][];
  lines: [number, number][];
}[] = [
  // L1: Base triangle at bottom
  {
    points: [
      [-0.8, -2.1, 0.8],
      [0.9, -2.0, 0.7],
      [0.0, -2.2, -1.0],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  // L2: Lower horizontal ring polygon
  {
    points: [
      [-1.8, -1.2, 0.8],
      [-0.7, -1.3, 1.8],
      [1.3, -1.2, 1.5],
      [1.9, -1.1, -0.6],
      [0.5, -1.3, -1.9],
      [-1.4, -1.2, -1.4],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
  },
  // L3: Middle polygon ring
  {
    points: [
      [-2.3, -0.2, 0.4],
      [-1.2, -0.1, 2.0],
      [1.2, -0.2, 2.0],
      [2.3, -0.1, 0.5],
      [1.7, 0.0, -1.6],
      [-1.1, 0.0, -2.1],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
  },
  // L4: Upper-mid tier polygon ring
  {
    points: [
      [-2.1, 0.7, 0.6],
      [-0.8, 0.8, 2.0],
      [1.1, 0.7, 1.8],
      [2.1, 0.8, 0.4],
      [1.3, 0.9, -1.7],
      [-1.0, 0.8, -1.9],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
  },
  // L5: Outer equator shell polygon
  {
    points: [
      [-1.8, 1.3, 0.5],
      [-0.6, 1.4, 1.7],
      [1.2, 1.3, 1.4],
      [1.7, 1.4, -0.6],
      [-0.4, 1.4, -1.8],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
  },
  // L6: Upper golden-amber ring (AI layer)
  {
    points: [
      [-1.2, 1.8, 0.6],
      [0.3, 1.9, 1.3],
      [1.3, 1.8, 0.3],
      [0.0, 1.9, -1.3],
      [-1.0, 1.8, -0.8],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
  },
  // L7: Top golden-amber cap (Frontier layer)
  {
    points: [
      [-0.5, 2.3, 0.3],
      [0.6, 2.3, 0.2],
      [0.0, 2.35, -0.5],
      [0.0, 2.45, 0.0],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 0],
      [0, 3],
      [1, 3],
      [2, 3],
    ],
  },
];

function InteractiveStackSphere({ activeIndex }: { activeIndex: number }) {
  const globeRef = useRef<THREE.Group>(null);

  // Slow continuous orbital drift
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
  });

  const renderedLayers = useMemo(() => {
    return LAYER_GEOMETRIES.map((layerGeo, layerIdx) => {
      const linePositions: number[] = [];
      const pointsPositions: number[] = [];

      layerGeo.points.forEach((pt) => {
        pointsPositions.push(pt[0], pt[1], pt[2]);
      });

      layerGeo.lines.forEach(([p1Idx, p2Idx]) => {
        const p1 = layerGeo.points[p1Idx];
        const p2 = layerGeo.points[p2Idx];
        if (p1 && p2) {
          linePositions.push(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);
        }
      });

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));

      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute("position", new THREE.Float32BufferAttribute(pointsPositions, 3));

      return { lineGeo, pointsGeo, layerIdx };
    });
  }, []);

  return (
    <group ref={globeRef} rotation={[0.2, 0, -0.1]}>
      {/* 1. Base Dark Navy Wireframe Sphere Cage (#162a45, opacity 0.4) */}
      <mesh>
        <sphereGeometry args={[2.4, 26, 20]} />
        <meshBasicMaterial
          color="#162a45"
          wireframe={true}
          transparent={true}
          opacity={0.4}
        />
      </mesh>

      {/* 2. Base Faint Scattered Points across sphere cage */}
      <points>
        <sphereGeometry args={[2.4, 26, 20]} />
        <pointsMaterial
          color="#1d3354"
          size={0.04}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.6}
        />
      </points>

      {/* 3. Cumulative Layer Geometries */}
      {renderedLayers.map(({ lineGeo, pointsGeo, layerIdx }) => {
        if (layerIdx > activeIndex) return null;

        const isCurrentActive = layerIdx === activeIndex;
        const isAmber = layerIdx >= 5; // L6 and L7 are amber
        const lineColor = isAmber ? "#f59e0b" : "#00f0ff";
        const pointColor = isAmber ? "#ffcb6b" : "#ffffff";

        const lineOpacity = isCurrentActive ? 0.95 : 0.35;
        const pointOpacity = isCurrentActive ? 1.0 : 0.45;
        const pointSize = isCurrentActive ? 0.12 : 0.06;

        return (
          <group key={layerIdx}>
            <lineSegments geometry={lineGeo}>
              <lineBasicMaterial
                color={lineColor}
                transparent={true}
                opacity={lineOpacity}
                blending={THREE.AdditiveBlending}
              />
            </lineSegments>

            <points geometry={pointsGeo}>
              <pointsMaterial
                color={pointColor}
                size={pointSize}
                sizeAttenuation={true}
                transparent={true}
                opacity={pointOpacity}
                blending={THREE.AdditiveBlending}
              />
            </points>
          </group>
        );
      })}
    </group>
  );
}

interface StackGraphExplorerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function StackGraphExplorer({ isOpen = true, onClose }: StackGraphExplorerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);

  const activeLayer = STACK_LAYERS[activeIndex] || STACK_LAYERS[0];

  // Mouse wheel / Touchpad scrolling layer transitions
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 25) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setActiveIndex((prev) => Math.min(STACK_LAYERS.length - 1, prev + 1));
        } else {
          setActiveIndex((prev) => Math.max(0, prev - 1));
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(STACK_LAYERS.length - 1, prev + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
          setActiveIndex((prev) => Math.min(STACK_LAYERS.length - 1, prev + 1));
        } else {
          setActiveIndex((prev) => Math.max(0, prev - 1));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#07090e] w-screen h-screen overflow-hidden flex flex-col justify-between select-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 240, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Subtle radial vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#07090e_95%)]" />

      {/* =================================================================
          TOP HUD HEADER
          ================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-8 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2 tracking-wider">
            <span className="h-px w-6 bg-[#00f0ff]" />
            <span>THE STACK · 7 LAYERS</span>
          </div>
          <p className="max-w-xl text-xs md:text-sm text-slate-400 font-mono leading-relaxed">
            Seven layers, one operator. Descend the system I build with - from raw language at the core to the decentralized frontier I'm pushing into now.
          </p>
        </div>

        {/* Exit / Return Action Button */}
        {onClose ? (
          <button
            onClick={onClose}
            className="flex items-center gap-2 border border-cyan-500/40 bg-cyan-950/30 px-4 py-2 text-xs font-mono text-cyan-300 hover:border-cyan-400 hover:text-white transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)]"
          >
            <span>~ DESCEND TO EXIT</span>
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <a
            href="#systems"
            className="flex items-center gap-2 border border-cyan-500/40 bg-cyan-950/30 px-4 py-2 text-xs font-mono text-cyan-300 hover:border-cyan-400 hover:text-white transition-all"
          >
            <span>~ DESCEND TO EXIT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* =================================================================
          TWO-COLUMN MAIN EXPLORER GRID
          ================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 md:px-16 py-4">
        
        {/* Left Side (45% width, lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="font-mono text-xs font-semibold text-[#00f0ff] tracking-wider mb-2 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
            {activeLayer.indexLabel}
          </div>

          <h2 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            {activeLayer.title}
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-slate-300 mb-6 font-sans">
            {activeLayer.description}
          </p>

          {/* Tech Tag Chips */}
          <div className="flex flex-wrap gap-2.5 mt-2 mb-6">
            {activeLayer.tags.map((tag) => (
              <span
                key={tag}
                className="border border-cyan-500/30 bg-cyan-950/20 px-3 py-1 text-xs font-mono text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[0.62rem] font-mono text-slate-500 tracking-widest uppercase">
            ~ HOVER A TAG TO LOCATE IT · DRAG THE GLOBE TO ROTATE
          </div>
        </div>

        {/* Right Side (55% width, lg:col-span-6) Dedicated 3D Canvas */}
        <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
          <Canvas
            camera={{ position: [0, 0, 7.2], fov: 42 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={0.9} />
            <InteractiveStackSphere activeIndex={activeIndex} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.6}
              dampingFactor={0.08}
              autoRotate={false}
            />
          </Canvas>
        </div>

        {/* Far Right Track Indicator (lg:col-span-1) */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4 py-2">
          {STACK_LAYERS.map((layer, idx) => {
            const isActive = idx === activeIndex;
            const isPassed = idx < activeIndex;

            return (
              <button
                key={layer.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${layer.id}`}
                className="group flex items-center gap-2 focus:outline-none"
              >
                {isActive && (
                  <span className="font-mono text-xs font-bold text-[#00f0ff] hidden lg:inline">
                    {layer.id}
                  </span>
                )}
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#00f0ff] ring-4 ring-cyan-400/20 scale-125 shadow-[0_0_10px_#00f0ff]"
                      : isPassed
                      ? "bg-cyan-600/60"
                      : "border border-slate-700 bg-transparent group-hover:border-cyan-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* =================================================================
          BOTTOM FOOTER
          ================================================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pb-6">
        <span className="font-mono text-[0.65rem] text-slate-400 tracking-widest">
          SCROLL TO DESCEND
        </span>
        <div className="h-6 w-px bg-cyan-400/60 mt-1 animate-pulse" />
      </div>
    </div>
  );
}
