import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { codingStats, primarySystems } from '../data/portfolioData';

const CYAN = '#38bdf8';
const AMBER = '#fbbf24';
const DIM = '#17324d';

const roleSignals = [
  'FULL-STACK · BACKEND · REAL-TIME',
  'SECURE APIS · RBAC · DATA SYSTEMS',
  'CRDT · WEBSOCKET · COLLABORATION',
  'AI-ASSISTED ENGINEERING TOOLS',
];

const stackLayers = [
  {
    id: 'L1',
    category: 'FOUNDATION',
    title: 'Language Core',
    description: 'The languages I use to express product logic, data models, algorithms, and system constraints.',
    tags: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    id: 'L2',
    category: 'INTERFACE',
    title: 'What People Use',
    description: 'Responsive interfaces built for clarity, fast interaction, and maintainable product workflows.',
    tags: ['React', 'Tailwind CSS', 'D3.js', 'Monaco Editor', 'HTML / CSS'],
  },
  {
    id: 'L3',
    category: 'BACKEND',
    title: 'Where Logic Runs',
    description: 'Secure application services that turn requirements into reliable APIs and controlled access.',
    tags: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT / RBAC'],
  },
  {
    id: 'L4',
    category: 'PERSISTENCE',
    title: 'State That Survives',
    description: 'Data layers designed around durable state, fast retrieval, isolation, and operational correctness.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'SQLite'],
  },
  {
    id: 'L5',
    category: 'REAL-TIME',
    title: 'Systems in Sync',
    description: 'Live collaboration and execution paths that keep users, editors, and application state synchronized.',
    tags: ['WebSocket', 'Socket.io', 'Yjs / CRDT', 'Web Workers', 'Pyodide / WASM'],
  },
  {
    id: 'L6',
    category: 'DELIVERY',
    title: 'Where It Ships',
    description: 'The practical delivery layer used to package, deploy, inspect, and operate production applications.',
    tags: ['Docker', 'Vercel', 'Render', 'Git / GitHub', 'Linux'],
  },
  {
    id: 'L7',
    category: 'INTELLIGENCE',
    title: 'Systems That Reason',
    description: 'AI-assisted workflows grounded in retrieval, causal analysis, and constraint-driven engineering tools.',
    tags: ['Gemini API', 'LLM Workflows', 'Causal Analysis', 'Constraint Search', 'Vector Retrieval'],
  },
];

const proofMetrics = [
  { value: String(primarySystems.length).padStart(2, '0'), label: 'CORE SYSTEMS' },
  { value: codingStats.leetcode.solved, label: 'DSA SOLVED' },
  { value: codingStats.github.contributions, label: 'CONTRIBUTIONS' },
  { value: codingStats.github.stars, label: 'GITHUB STARS' },
];

function TypeSignal({ reduceMotion }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(roleSignals[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const phrase = roleSignals[phraseIndex];
    const atEnd = characterIndex === phrase.length;
    const atStart = characterIndex === 0;
    const delay = atEnd && !deleting ? 1500 : deleting ? 24 : 48;

    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % roleSignals.length);
        return;
      }

      setCharacterIndex((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterIndex, deleting, phraseIndex, reduceMotion]);

  useEffect(() => {
    setCharacterIndex(reduceMotion ? roleSignals[0].length : 0);
  }, [phraseIndex, reduceMotion]);

  return (
    <span className="inline-flex min-h-[1.5em] items-center text-cyan-300">
      <span>{roleSignals[phraseIndex].slice(0, characterIndex)}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[0.5em] bg-cyan-400/80 motion-safe:animate-pulse" aria-hidden="true" />
    </span>
  );
}

function createLayerGeometry(index) {
  const layerY = -1.35 + index * 0.45;
  const radius = Math.sqrt(Math.max(0.4, 2.05 ** 2 - layerY ** 2)) * 0.92;
  const pointCount = 14;
  const points = [];

  for (let pointIndex = 0; pointIndex <= pointCount; pointIndex += 1) {
    const angle = (pointIndex / pointCount) * Math.PI * 2;
    const distortion = 1 + Math.sin(pointIndex * 2.17 + index * 0.83) * 0.055;
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius * distortion,
        layerY + Math.sin(pointIndex * 1.7 + index) * 0.035,
        Math.sin(angle) * radius * distortion
      )
    );
  }

  const curve = new THREE.BufferGeometry().setFromPoints(points);
  const nodes = new THREE.BufferGeometry().setFromPoints(
    points.filter((_, pointIndex) => pointIndex < pointCount && pointIndex % 2 === index % 2)
  );

  return { curve, nodes };
}

function StackOrb({ activeLayer, exploring, reduceMotion }) {
  const layers = useMemo(() => stackLayers.map((_, index) => createLayerGeometry(index)), []);

  useEffect(
    () => () => {
      layers.forEach(({ curve, nodes }) => {
        curve.dispose();
        nodes.dispose();
      });
    },
    [layers]
  );

  return (
    <>
      <group rotation={[0.08, -0.45, -0.03]}>
        <mesh>
          <icosahedronGeometry args={[2.16, 3]} />
          <meshBasicMaterial color="#24425f" wireframe transparent opacity={exploring ? 0.28 : 0.32} />
        </mesh>

        <points>
          <icosahedronGeometry args={[2.17, 2]} />
          <pointsMaterial color="#426b8c" size={0.035} transparent opacity={0.65} sizeAttenuation />
        </points>

        {layers.map(({ curve, nodes }, index) => {
          const completed = index <= activeLayer;
          const current = index === activeLayer;
          const color = index >= 5 ? AMBER : CYAN;
          const opacity = completed ? (current ? 1 : exploring ? 0.52 : 0.72) : 0.12;

          return (
            <group key={stackLayers[index].id} rotation={[0, 0, (index - 3) * 0.035]}>
              <line geometry={curve}>
                <lineBasicMaterial
                  color={completed ? color : DIM}
                  transparent
                  opacity={opacity}
                  depthWrite={false}
                />
              </line>
              <points geometry={nodes}>
                <pointsMaterial
                  color={completed ? color : DIM}
                  size={current ? 0.085 : 0.055}
                  transparent
                  opacity={completed ? 0.95 : 0.18}
                  sizeAttenuation
                  depthWrite={false}
                />
              </points>
            </group>
          );
        })}

      </group>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate={!reduceMotion}
        autoRotateSpeed={exploring ? 0.36 : 0.55}
        dampingFactor={0.06}
        enableDamping
        minPolarAngle={Math.PI * 0.3}
        maxPolarAngle={Math.PI * 0.7}
      />
    </>
  );
}

function StackVisual({ activeLayer = stackLayers.length - 1, exploring = false, reduceMotion = false }) {
  return (
    <div className="relative h-full min-h-[300px] w-full" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-cyan-500/[0.035] blur-3xl" />
      <Canvas
        className="relative z-10 drop-shadow-[0_0_12px_rgba(56,189,248,0.28)]"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.15, exploring ? 6.4 : 12.4], fov: 43 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <StackOrb activeLayer={activeLayer} exploring={exploring} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}

function IdentityHero({ onExplore, reduceMotion }) {
  const lastTapRef = useRef(0);

  const handlePointerUp = (event) => {
    if (event.pointerType !== 'touch') return;
    const now = Date.now();
    if (now - lastTapRef.current < 360) onExplore();
    lastTapRef.current = now;
  };

  const descend = () => {
    const target = document.getElementById('operations');
    if (!target) return;
    if (window.lenis) window.lenis.scrollTo(target, { offset: -70, duration: 1.1 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      key="identity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
      className="mx-auto flex min-h-[calc(100svh-2rem)] w-full max-w-[1600px] flex-col justify-center px-6 pb-20 pt-24 sm:px-10 lg:px-16 xl:px-40"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.65fr_1fr] lg:gap-6">
        <div className="relative z-10">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] text-slate-500 sm:text-xs"
          >
            <span className="h-px w-10 bg-cyan-400/80" aria-hidden="true" />
            <span>DRAWING NO. RK-2026 · SYSTEM PROFILE</span>
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[clamp(4.6rem,7.7vw,9.2rem)] font-semibold uppercase leading-[0.88] tracking-[-0.075em]"
          >
            <span className="block text-slate-100">Rakesh</span>
            <span className="block text-sky-200">Kumar</span>
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 font-mono text-xs tracking-[0.2em] sm:text-sm"
          >
            <TypeSignal reduceMotion={reduceMotion} />
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-6 max-w-[610px] font-mono text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7"
          >
            I build production-ready web systems across secure backends, real-time collaboration, and AI-assisted
            engineering workflows—from system design to deployment.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-11 grid max-w-[670px] grid-cols-2 border-l border-t border-slate-800/80 sm:grid-cols-4"
          >
            {proofMetrics.map((metric) => (
              <div key={metric.label} className="border-b border-r border-slate-800/80 px-4 py-3 sm:px-5">
                <div className="font-mono text-xl font-medium text-cyan-300 sm:text-2xl">{metric.value}</div>
                <div className="mt-1 font-mono text-[9px] tracking-[0.18em] text-slate-500 sm:text-[10px]">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex h-[430px] w-full max-w-[520px] flex-col sm:h-[520px] lg:h-[620px]"
        >
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.22em] sm:text-xs">
            <span className="h-px flex-1 bg-slate-800/80" aria-hidden="true" />
            <span className="text-slate-400">STACK GRAPH · <span className="text-emerald-400">ONLINE</span></span>
            <span className="text-slate-500">07 LAYERS · LIVE</span>
            <span className="h-px flex-1 bg-slate-800/80" aria-hidden="true" />
          </div>

          <div
            role="button"
            tabIndex={0}
            aria-label="Open interactive seven-layer technology stack explorer"
            onDoubleClick={onExplore}
            onPointerUp={handlePointerUp}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onExplore();
              }
            }}
            className="group relative min-h-0 flex-1 cursor-grab touch-none focus-visible:outline-none active:cursor-grabbing"
          >
            <StackVisual reduceMotion={reduceMotion} />
            <div className="pointer-events-none absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap border border-slate-700/70 bg-[#050b16]/80 px-5 py-3 text-center font-mono text-[9px] tracking-[0.2em] text-slate-500 transition-colors group-hover:border-cyan-400/30 group-hover:text-cyan-300 sm:text-[10px]">
              <span className="h-1.5 w-1.5 bg-cyan-400/70 shadow-[0_0_8px_#38bdf8]" aria-hidden="true" />
              DOUBLE-TAP TO EXPLORE THE STACK
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={descend}
        className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] tracking-[0.28em] text-slate-500 transition-colors hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none lg:flex"
      >
        DESCEND THROUGH THE SYSTEM <span aria-hidden="true">↓</span>
      </button>

      <div className="absolute bottom-[14%] right-7 top-[23%] hidden flex-col items-center xl:flex" aria-hidden="true">
        <span className="[writing-mode:vertical-rl] font-mono text-[9px] tracking-[0.28em] text-slate-400">DEPTH</span>
        <span className="mt-5 h-2 w-2 bg-cyan-300 shadow-[0_0_10px_#38bdf8]" />
        <span className="h-full w-px bg-slate-800" />
        {[0, 1, 2, 3, 4].map((marker) => (
          <span key={marker} className="absolute right-[2px] h-1.5 w-1.5 border border-slate-600 bg-[#050811]" style={{ top: `${25 + marker * 14}%` }} />
        ))}
        <span className="mt-4 font-mono text-[9px] tracking-[0.22em] text-slate-500">000</span>
      </div>
    </motion.div>
  );
}

function StackExplorer({ activeLayer, setActiveLayer, onExit, reduceMotion }) {
  const layer = stackLayers[activeLayer];
  const touchStartRef = useRef(null);
  const wheelLockRef = useRef(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    window.lenis?.stop();
    document.body.style.overflow = 'hidden';

    const moveLayer = (direction) => {
      setActiveLayer((current) => Math.max(0, Math.min(stackLayers.length - 1, current + direction)));
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onExit();
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        moveLayer(1);
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        moveLayer(-1);
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
      if (Math.abs(event.deltaY) < 12) return;
      const now = Date.now();
      if (now - wheelLockRef.current < 480) return;
      wheelLockRef.current = now;
      moveLayer(event.deltaY > 0 ? 1 : -1);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = previousOverflow;
      window.lenis?.start();
    };
  }, [onExit, setActiveLayer]);

  const handleTouchStart = (event) => {
    if (event.target.closest('[data-stack-globe]')) return;
    touchStartRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;
    const endY = event.changedTouches[0]?.clientY ?? touchStartRef.current;
    const distance = touchStartRef.current - endY;
    if (Math.abs(distance) > 45) {
      setActiveLayer((current) =>
        Math.max(0, Math.min(stackLayers.length - 1, current + (distance > 0 ? 1 : -1)))
      );
    }
    touchStartRef.current = null;
  };

  return (
    <motion.div
      key="explorer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.38 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-40 overflow-hidden bg-[#030914] font-mono"
    >
      <div className="absolute inset-0 bg-subtle-grid opacity-80" />
      <div className="relative mx-auto flex h-full w-full max-w-[1700px] flex-col px-5 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-24 lg:px-16 xl:px-24">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] tracking-[0.28em] text-cyan-300 sm:text-xs">THE STACK · 7 LAYERS</p>
            <p className="mt-3 hidden max-w-lg text-[10px] leading-5 tracking-[0.08em] text-slate-500 sm:block sm:text-xs">
              A working map of the technologies behind my deployed systems.
            </p>
          </div>
          <button
            type="button"
            onClick={onExit}
            className="border border-slate-700/80 px-4 py-2 text-[9px] tracking-[0.22em] text-slate-400 transition-colors hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:border-cyan-400 focus-visible:text-cyan-300 focus-visible:outline-none sm:text-[10px]"
          >
            RETURN ↩
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[auto_minmax(220px,30vh)] items-center gap-1 sm:grid-rows-[auto_minmax(260px,36vh)] lg:grid-cols-[0.86fr_1.14fr] lg:grid-rows-none lg:gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={layer.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-2xl py-2 sm:py-5"
            >
              <div className="flex items-center gap-4 text-[10px] tracking-[0.24em] sm:text-xs">
                <span className={activeLayer >= 5 ? 'text-amber-300' : 'text-cyan-300'}>{layer.id}</span>
                <span className="text-slate-500">{layer.category}</span>
                <span className="h-px flex-1 bg-slate-800/80" />
                <span className="text-slate-500">{String(activeLayer + 1).padStart(2, '0')} / 07</span>
              </div>

              <h2 className="mt-4 font-sans text-[clamp(2.6rem,13vw,4.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-slate-100 sm:mt-6 lg:mt-8 lg:text-[clamp(3.4rem,6.4vw,7.4rem)]">
                {layer.title}
              </h2>
              <p className="mt-4 max-w-xl text-xs leading-6 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7 lg:mt-7 lg:text-base lg:leading-8">
                {layer.description}
              </p>

              <div className="mt-5 flex max-w-xl flex-wrap gap-1.5 sm:mt-7 sm:gap-2 lg:mt-8">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`border px-2.5 py-1.5 text-[8px] tracking-[0.14em] sm:px-3 sm:py-2 sm:text-[10px] ${
                      activeLayer >= 5
                        ? 'border-amber-400/25 bg-amber-400/[0.035] text-amber-100/80'
                        : 'border-cyan-400/25 bg-cyan-400/[0.035] text-cyan-100/80'
                    }`}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <p className="mt-8 hidden text-[9px] tracking-[0.2em] text-slate-600 sm:block sm:text-[10px]">
                DRAG THE GLOBE TO ROTATE · USE SCROLL OR ARROW KEYS
              </p>
            </motion.div>
          </AnimatePresence>

          <div data-stack-globe className="relative h-[30vh] min-h-[220px] sm:h-[36vh] sm:min-h-[260px] lg:h-[68vh] lg:min-h-[520px]">
            <StackVisual activeLayer={activeLayer} exploring reduceMotion={reduceMotion} />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
          <button
            type="button"
            disabled={activeLayer === 0}
            onClick={() => setActiveLayer((current) => Math.max(0, current - 1))}
            className="text-[9px] tracking-[0.22em] text-slate-500 transition-colors enabled:hover:text-cyan-300 disabled:opacity-25 focus-visible:text-cyan-300 focus-visible:outline-none sm:text-[10px]"
          >
            ← PREVIOUS LAYER
          </button>
          <span className={`hidden text-[9px] tracking-[0.24em] sm:block sm:text-[10px] ${activeLayer === 6 ? 'text-amber-300' : 'text-slate-500'}`}>
            {activeLayer === 6 ? 'STACK COMPLETE · EXIT UNLOCKED' : 'SCROLL TO DESCEND'}
          </span>
          <button
            type="button"
            disabled={activeLayer === stackLayers.length - 1}
            onClick={() => setActiveLayer((current) => Math.min(stackLayers.length - 1, current + 1))}
            className="text-[9px] tracking-[0.22em] text-slate-500 transition-colors enabled:hover:text-cyan-300 disabled:opacity-25 focus-visible:text-cyan-300 focus-visible:outline-none sm:text-[10px]"
          >
            NEXT LAYER →
          </button>
        </div>
      </div>

      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 sm:right-6">
        {stackLayers.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setActiveLayer(index)}
            aria-label={`Open ${item.title} layer`}
            aria-current={activeLayer === index ? 'step' : undefined}
            className="group flex h-5 items-center gap-2 focus-visible:outline-none"
          >
            <span className={`hidden text-[8px] tracking-[0.16em] sm:block ${activeLayer === index ? (index >= 5 ? 'text-amber-300' : 'text-cyan-300') : 'text-transparent'}`}>
              {item.id}
            </span>
            <span className={`block transition-all ${activeLayer === index ? `h-2 w-2 ${index >= 5 ? 'bg-amber-300' : 'bg-cyan-300'}` : 'h-1 w-1 bg-slate-600 group-hover:bg-slate-400'}`} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [exploring, setExploring] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (exploring) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !event.repeat) {
        const target = event.target;
        if (target instanceof HTMLElement && ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
          return;
        }
        setActiveLayer(0);
        setExploring(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [exploring]);

  const openExplorer = useCallback(() => {
    setActiveLayer(0);
    setExploring(true);
  }, []);

  const closeExplorer = useCallback(() => setExploring(false), []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!exploring ? (
          <IdentityHero onExplore={openExplorer} reduceMotion={reduceMotion} />
        ) : (
          <StackExplorer
            activeLayer={activeLayer}
            setActiveLayer={setActiveLayer}
            onExit={closeExplorer}
            reduceMotion={reduceMotion}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
