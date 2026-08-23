import React, { useState, useEffect, useRef, useMemo } from 'react';
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
      "Augmenting applications with deterministic LLM agents, dynamic vector search, automated triage, and workflow automations.",
    tags: ["Gemini API", "Claude API", "OpenAI API", "n8n"],
    color: "#f59e0b",
    accent: "amber",
  },
  {
    id: "L7",
    num: "07",
    tier: "FRONTIER",
    indexLabel: "L7 · FRONTIER  07 / 07",
    title: "Frontier Systems",
    description:
      "Decentralized protocols, autonomous agent teams, and trustless settlement networks pushing beyond traditional web bounds.",
    tags: ["Decentralized Infra", "Autonomous Agents", "Smart Contracts", "EVM", "Web3"],
    color: "#ffb347",
    accent: "amber",
  },
];

const LAYER_GEOMETRIES = [
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

export default function StackGraphExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mountRef = useRef(null);
  const activeIndexRef = useRef(0);
  const isInteracting = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.2, y: 0 });
  const layerMeshesRef = useRef([]);

  activeIndexRef.current = activeIndex;
  const activeLayer = STACK_LAYERS[activeIndex] || STACK_LAYERS[0];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

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
    globeGroup.rotation.z = -0.1;
    globeGroup.rotation.x = 0.2;
    scene.add(globeGroup);

    // 1. Base Dark Navy Wireframe Sphere Cage
    const sphereGeo = new THREE.SphereGeometry(2.4, 24, 18);
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
      size: 0.03,
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
      const lineColor = isAmber ? 0xf59e0b : 0x00f0ff;
      const pointColor = isAmber ? 0xffcb6b : 0x7fe0ff;

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
        size: 0.08,
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

    // Pointer event listeners for orbit drag
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

      // Update layer visibility based on active index
      const curIdx = activeIndexRef.current;
      layerMeshes.forEach((mesh, idx) => {
        if (idx > curIdx) {
          mesh.group.visible = false;
        } else {
          mesh.group.visible = true;
          const isCurrent = idx === curIdx;
          mesh.lineMat.opacity = isCurrent ? 0.95 : 0.4;
          mesh.pMat.opacity = isCurrent ? 1.0 : 0.5;
          mesh.pMat.size = isCurrent ? 0.08 : 0.05;
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
  }, []);

  return (
    <section
      id="stack"
      className="relative min-h-[92vh] w-full border-t border-blueprint-border bg-canvas-base px-6 py-12 md:px-12 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background blueprint grid */}
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 tech-tag text-[0.7rem] text-cyan mb-2">
            <span className="h-px w-6 bg-cyan" />
            <span>THE STACK · 7 LAYERS</span>
          </div>
          <p className="max-w-xl text-xs md:text-sm text-paper-dim font-mono leading-relaxed">
            Seven layers, one operator. Descend the system I build with - from raw language at the core to the decentralized frontier I'm pushing into now.
          </p>
        </div>

        <a
          href="#systems"
          className="self-start flex items-center gap-2 border border-blueprint-border bg-canvas-subtle/80 px-4 py-2 text-[0.65rem] font-mono text-paper-muted transition-all hover:border-cyan hover:text-cyan"
        >
          <span>~ DESCEND TO EXIT</span>
          <span className="text-xs">↗</span>
        </a>
      </div>

      {/* Main interactive area */}
      <div className="relative z-10 mx-auto max-w-7xl w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        {/* Left Column: Details */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="tech-tag text-xs font-semibold text-cyan tracking-wider mb-2">
            {activeLayer.indexLabel}
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper mb-4">
            {activeLayer.title}
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-paper-dim mb-6 font-sans">
            {activeLayer.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {activeLayer.tags.map((tag) => (
              <span
                key={tag}
                className="tech-tag border border-cyan/40 bg-canvas-subtle px-3 py-1.5 text-xs text-cyan transition-all hover:border-cyan hover:bg-cyan/15 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[0.6rem] font-mono text-paper-muted tracking-widest uppercase">
            ~ HOVER A TAG TO LOCATE IT · DRAG THE GLOBE TO ROTATE
          </div>
        </div>

        {/* Center: 3D Canvas */}
        <div className="lg:col-span-6 relative h-[360px] sm:h-[420px] md:h-[480px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div ref={mountRef} className="h-full w-full" />
        </div>

        {/* Far Right: Track Indicator */}
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
                  <span className="font-mono text-xs font-bold text-cyan hidden lg:inline">
                    {layer.id}
                  </span>
                )}
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-cyan ring-4 ring-cyan/20 scale-125 shadow-[0_0_10px_#00f0ff]"
                      : isPassed
                      ? "bg-cyan/60"
                      : "border border-blueprint-border bg-transparent group-hover:border-cyan"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="tech-tag text-[0.65rem] text-paper-muted tracking-widest">
          SCROLL TO DESCEND
        </span>
        <div className="h-6 w-px bg-cyan/60 mt-1 animate-pulse" />
      </div>
    </section>
  );
}
