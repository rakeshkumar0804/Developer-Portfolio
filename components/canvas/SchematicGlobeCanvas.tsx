"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ConstellationSphere() {
  const globeRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Smooth continuous rotation & orbital drift
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.22;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.08;
    }
  });

  const radius = 2.7;

  return (
    <group ref={globeRef} rotation={[0.25, 0, -0.15]}>
      {/* 1. Translucent Inner Glowing Solid Sphere (depth & solid presence) */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial
          color="#002447"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 2. Inner Navy Density Wireframe Core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[2.55, 22, 16]} />
        <meshBasicMaterial
          color="#1d3354"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* 3. Main Outer Cyan Constellation Wireframe with Additive Blending */}
      <mesh>
        <icosahedronGeometry args={[radius, 1]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Golden Amber Top-Cap Vertex Accent with Additive Blending */}
      <mesh position={[0, 0.35, 0]} rotation={[-0.4, 0, 0]}>
        <icosahedronGeometry args={[radius * 1.02, 1]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 5. Glowing Node Vertices (Points) with Neon Brightness */}
      <points>
        <icosahedronGeometry args={[radius, 1]} />
        <pointsMaterial
          color="#7fe0ff"
          size={0.18}
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Top Golden Nodes */}
      <points position={[0, 0.35, 0]} rotation={[-0.4, 0, 0]}>
        <icosahedronGeometry args={[radius * 1.02, 1]} />
        <pointsMaterial
          color="#ffcb6b"
          size={0.22}
          transparent
          opacity={1.0}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function SchematicGlobeCanvas() {
  return (
    <div className="relative h-full w-full select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 40 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.9} />
        <ConstellationSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          dampingFactor={0.08}
          autoRotate={false}
        />
      </Canvas>

      {/* Overlay Blueprint Badge */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 border border-blueprint-cyan/30 bg-canvas-base/80 px-3 py-1 backdrop-blur-md">
        <span className="tech-tag flex items-center gap-1.5 text-[0.55rem] text-blueprint-cyan">
          <span className="h-1 w-1 rounded-full bg-blueprint-cyan animate-ping" />
          INTERACTIVE 3D MESH // DRAG TO ROTATE
        </span>
      </div>
    </div>
  );
}
