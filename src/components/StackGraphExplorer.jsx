import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export const STACK_LAYERS = [
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

const LAYER_GEOMETRIES = [
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
  // L2: Lower horizontal hexagonal ring
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

export default function StackGraphExplorer({ isOpen = true, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isInteracting = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.25, y: 0 });
  const layerMeshesRef = useRef([]);
  const touchStartY = useRef(0);

  activeIndexRef.current = activeIndex;
  const activeLayer = STACK_LAYERS[activeIndex] || STACK_LAYERS[0];
  const isLastLayer = activeIndex === STACK_LAYERS.length - 1;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isOpen) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 25) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setActiveIndex((prev) => Math.min(STACK_LAYERS.length - 1, prev + 1));
        } else {
          setActiveIndex((prev) => Math.max(0, prev - 1));
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(STACK_LAYERS.length - 1, prev + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
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

  useEffect(() => {
    const container = mountRef.current;
    if (!container || !isOpen) return;

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.z = 7.2;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      return;
    }

    const globeGroup = new THREE.Group();
    globeGroup.rotation.z = -0.15;
    globeGroup.rotation.x = 0.25;
    scene.add(globeGroup);

    // 1. Base Dark Navy Wireframe Sphere Cage
    const sphereGeo = new THREE.SphereGeometry(2.4, 26, 20);
    const sphereWire = new THREE.WireframeGeometry(sphereGeo);
    const sphereMat = new THREE.LineBasicMaterial({
      color: 0x10223d,
      transparent: true,
      opacity: 0.35,
    });
    const sphereLines = new THREE.LineSegments(sphereWire, sphereMat);
    globeGroup.add(sphereLines);

    // 2. Base Faint Scattered Points
    const pointsMat = new THREE.PointsMaterial({
      color: 0x1d3354,
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    });
    const spherePoints = new THREE.Points(sphereGeo, pointsMat);
    globeGroup.add(spherePoints);

    // 3. Build all 7 layer groups
    const layerMeshes = [];
    LAYER_GEOMETRIES.forEach((layerGeo, layerIdx) => {
      const group = new THREE.Group();

      const linePositions = [];
      const pointsPositions = [];

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

      const isAmber = layerIdx >= 5;
      const lineColor = isAmber ? 0xffb347 : 0x00f0ff;
      const pointColor = isAmber ? 0xffcb6b : 0xffffff;

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      group.add(lines);

      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pointsPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: pointColor,
        size: 0.12,
        sizeAttenuation: true,
        transparent: true,
        opacity: 1.0,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(pGeo, pMat);
      group.add(points);

      globeGroup.add(group);
      layerMeshes.push({ group, lineMat, pMat, isAmber });
    });

    layerMeshesRef.current = layerMeshes;

    // Pointer events
    const handlePointerDown = (e) => {
      isInteracting.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      if (isInteracting.current) {
        const deltaX = e.clientX - prevMousePos.current.x;
        const deltaY = e.clientY - prevMousePos.current.y;
        targetRotation.current.y += deltaX * 0.008;
        targetRotation.current.x += deltaY * 0.008;
        prevMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isInteracting.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 420;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isInteracting.current) {
        targetRotation.current.y += delta * 0.15;
      }

      globeGroup.rotation.x += (targetRotation.current.x - globeGroup.rotation.x) * 0.08;
      globeGroup.rotation.y += (targetRotation.current.y - globeGroup.rotation.y) * 0.08;

      const curIdx = activeIndexRef.current;
      layerMeshes.forEach((mesh, idx) => {
        if (idx > curIdx) {
          mesh.group.visible = false;
        } else {
          mesh.group.visible = true;
          const isCurrent = idx === curIdx;
          mesh.lineMat.opacity = isCurrent ? 0.95 : 0.45;
          mesh.pMat.opacity = isCurrent ? 1.0 : 0.55;
          mesh.pMat.size = isCurrent ? 0.12 : 0.07;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      dom.removeEventListener('pointerdown', handlePointerDown);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereWire.dispose();
    };
  }, [isOpen]);

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#060a14_95%)]" />

      {/* Top Header */}
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

      {/* Two-Column Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8 md:px-14 py-4">
        {/* Left Side (45%) */}
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

        {/* Right Side (55%) */}
        <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div ref={mountRef} className="h-full w-full" />
        </div>

        {/* Far Right Track (L1 - L7) */}
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

      {/* Bottom Footer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pb-6">
        <span className="font-mono text-[0.65rem] text-[#8aa6c0] tracking-widest uppercase">
          {isLastLayer ? "STACK COMPLETE · EXIT UNLOCKED" : "SCROLL TO DESCEND"}
        </span>
        <div className="h-5 w-px bg-[#00f0ff]/60 mt-1 animate-pulse" />
      </div>
    </div>
  );
}
