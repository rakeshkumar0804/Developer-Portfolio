"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export interface StackLayer {
  id: string;
  num: string;
  tier: string;
  indexLabel: string;
  pill?: string;
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
    indexLabel: "L1 · FOUNDATION  01 / 07",
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
    indexLabel: "L2 · INTERFACE  02 / 07",
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
    indexLabel: "L3 · SERVICES  03 / 07",
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
    indexLabel: "L4 · PERSISTENCE  04 / 07",
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
    indexLabel: "L5 · INFRASTRUCTURE  05 / 07",
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
    indexLabel: "L6 · INTELLIGENCE  06 / 07",
    title: "Systems That Reason",
    description:
      "LLMs and automation wired into the product - recommendation engines, agents, and pipelines that think.",
    tags: ["Gemini API", "Claude API", "OpenAI API", "n8n"],
    color: "#ffb347",
    accent: "amber",
  },
  {
    id: "L7",
    num: "07",
    tier: "FRONTIER",
    indexLabel: "L7 · FRONTIER  07 / 07",
    pill: "⬢ EXPLORING",
    title: "Frontier Systems",
    description:
      "The emerging layer I'm researching now - decentralized infrastructure, autonomous agents, and trustless on-chain rails. New primitives, and the tooling that builds them.",
    tags: ["Decentralized Infra", "Autonomous Agents", "Smart Contracts", "EVM", "Web3"],
    color: "#ffb347",
    accent: "amber",
  },
];

// Exact 3D coordinates matching the 7 reference screenshots
const LAYER_GEOMETRIES: {
  points: [number, number, number][];
  lines: [number, number][];
}[] = [
  // L1: Bottom base triangle
  {
    points: [
      [-0.7, -1.8, 0.7],
      [0.8, -1.7, 0.6],
      [0.0, -1.9, -0.9],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  // L2: Lower horizontal hexagonal ring + struts
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
  // L3: Mid-lower polygon ring
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
  // L4: Mid-upper polygon ring
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
  // L5: Upper wide polygon ring
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
  // L6: High golden-amber square ring (Intelligence layer)
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
  // L7: Top golden-amber cap constellation (Frontier layer)
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

  // Smooth continuous rotation & orbital drift
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
    <group ref={globeRef} rotation={[0.25, 0, -0.15]}>
      {/* 1. Base Dark Navy Sphere Wireframe Cage */}
      <mesh>
        <sphereGeometry args={[2.4, 26, 20]} />
        <meshBasicMaterial
          color="#10223d"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* 2. Base Faint Scattered Points across sphere cage */}
      <points>
        <sphereGeometry args={[2.4, 26, 20]} />
        <pointsMaterial
          color="#1d3354"
          size={0.035}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
        />
      </points>

      {/* 3. Cumulative Layer Geometries */}
      {renderedLayers.map(({ lineGeo, pointsGeo, layerIdx }) => {
        if (layerIdx > activeIndex) return null;

        const isCurrentActive = layerIdx === activeIndex;
        const isAmber = layerIdx >= 5; // L6 and L7 are amber
        const lineColor = isAmber ? "#ffb347" : "#00f0ff";
        const pointColor = isAmber ? "#ffcb6b" : "#ffffff";

        const lineOpacity = isCurrentActive ? 0.95 : 0.45;
        const pointOpacity = isCurrentActive ? 1.0 : 0.55;
        const pointSize = isCurrentActive ? 0.12 : 0.07;

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
  const isLastLayer = activeIndex === STACK_LAYERS.length - 1;

  // Scroll & Key navigation
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
      className="fixed inset-0 z-50 bg-[#060a14] w-screen h-screen overflow-hidden flex flex-col justify-between select-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 240, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.07) 1px, transparent 1px)",
        backgroundSize: "38px 38px",
      }}
    >
      {/* Subtle radial vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#060a14_95%)]" />

      {/* =================================================================
          TOP HUD HEADER
          ================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pt-8 flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff] mb-2 tracking-wider">
            <span className="h-px w-6 bg-[#00f0ff]" />
            <span>THE STACK · 7 LAYERS</span>
          </div>
          <p className="max-w-xl text-xs md:text-sm text-[#8aa6c0] font-mono leading-relaxed">
            Seven layers, one operator. Descend the system I build with - from raw language at the core to the decentralized frontier I'm pushing into now.
          </p>
        </div>

        {/* Exit / Return Action Button */}
        {onClose && (
          <button
            onClick={onClose}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)] ${
              isLastLayer
                ? "border border-[#00f0ff]/60 bg-[#00f0ff]/10 text-[#00f0ff] font-bold"
                : "border border-[#1a2f4c] bg-[#070d18] text-[#8aa6c0] hover:border-[#00f0ff] hover:text-[#00f0ff]"
            }`}
          >
            <span>{isLastLayer ? "RETURN ↩" : "~ DESCEND TO EXIT"}</span>
          </button>
        )}
      </div>

      {/* =================================================================
          TWO-COLUMN MAIN EXPLORER GRID
          ================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 md:px-14 py-4">
        
        {/* Left Side (45% width, lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`font-mono text-xs font-semibold tracking-wider ${
                activeLayer.accent === "amber"
                  ? "text-[#ffb347] drop-shadow-[0_0_8px_rgba(255,179,71,0.4)]"
                  : "text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              }`}
            >
              {activeLayer.indexLabel}
            </span>
            {activeLayer.pill && (
              <span className="border border-[#ffb347]/50 bg-[#ffb347]/10 px-1.5 py-0.5 text-[0.55rem] text-[#ffb347] font-mono font-bold tracking-widest uppercase">
                {activeLayer.pill}
              </span>
            )}
          </div>

          <h2
            className={`font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${
              activeLayer.accent === "amber"
                ? "text-[#ffb347] drop-shadow-[0_0_20px_rgba(255,179,71,0.45)]"
                : "text-white"
            }`}
          >
            {activeLayer.title}
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-[#8aa6c0] mb-6 font-mono">
            {activeLayer.description}
          </p>

          {/* Tech Tag Chips */}
          <div className="flex flex-wrap gap-2.5 mt-2 mb-6">
            {activeLayer.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1.5 text-xs font-mono transition-all ${
                  activeLayer.accent === "amber"
                    ? "border border-[#ffb347]/40 bg-[#ffb347]/5 text-[#ffb347] hover:border-[#ffb347] hover:bg-[#ffb347]/15 shadow-[0_0_10px_rgba(255,179,71,0.15)]"
                    : "border border-[#00f0ff]/30 bg-[#00f0ff]/5 text-[#00f0ff] hover:border-[#00f0ff] hover:bg-[#00f0ff]/15 shadow-[0_0_10px_rgba(0,240,255,0.1)]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[0.6rem] font-mono text-[#3a567a] tracking-widest uppercase">
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
            const isAmber = layer.accent === "amber";

            return (
              <button
                key={layer.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${layer.id}`}
                className="group flex items-center gap-2 focus:outline-none"
              >
                {isActive && (
                  <span
                    className={`font-mono text-xs font-bold hidden lg:inline ${
                      isAmber ? "text-[#ffb347]" : "text-[#00f0ff]"
                    }`}
                  >
                    {layer.id}
                  </span>
                )}
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? isAmber
                        ? "bg-[#ffb347] ring-4 ring-[#ffb347]/20 scale-125 shadow-[0_0_10px_#ffb347]"
                        : "bg-[#00f0ff] ring-4 ring-[#00f0ff]/20 scale-125 shadow-[0_0_10px_#00f0ff]"
                      : isPassed
                      ? "bg-[#00f0ff]/70"
                      : "border border-[#1a2f4c] bg-transparent group-hover:border-[#00f0ff]"
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
        <span className="font-mono text-[0.65rem] text-[#8aa6c0] tracking-widest uppercase">
          {isLastLayer ? "STACK COMPLETE · EXIT UNLOCKED" : "SCROLL TO DESCEND"}
        </span>
        <div className="h-5 w-px bg-[#00f0ff]/60 mt-1 animate-pulse" />
      </div>
    </div>
  );
}
