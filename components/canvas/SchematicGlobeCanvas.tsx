"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ConstellationSphere() {
  const globeRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  // Smooth continuous rotation & orbital drift
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group ref={globeRef} rotation={[0.25, 0, -0.15]}>
      {/* 1. Inner Navy Density Wireframe Core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[2.9, 20, 16]} />
        <meshBasicMaterial
          color="#1d3354"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 2. Main Outer Cyan Constellation Wireframe */}
      <mesh>
        <icosahedronGeometry args={[3.1, 1]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* 3. Golden Amber Top-Cap Vertex Accent */}
      <mesh position={[0, 0.4, 0]} rotation={[-0.4, 0, 0]}>
        <icosahedronGeometry args={[3.15, 1]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* 4. Glowing Node Vertices (Points) */}
      <points>
        <icosahedronGeometry args={[3.1, 1]} />
        <pointsMaterial
          color="#7fe0ff"
          size={0.16}
          transparent
          opacity={0.9}
        />
      </points>
    </group>
  );
}

export default function SchematicGlobeCanvas() {
  return (
    <div className="relative h-full w-full select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
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
