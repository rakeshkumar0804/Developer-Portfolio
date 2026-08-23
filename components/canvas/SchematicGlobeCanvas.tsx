"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ConstellationSphere() {
  const globeRef = useRef<THREE.Group>(null);

  // Smooth continuous rotation & orbital drift
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={globeRef} rotation={[0.25, 0, -0.15]}>
      {/* 1. Inner soft dark blue sphere mesh for solid volume presence */}
      <mesh>
        <sphereGeometry args={[2.45, 32, 32]} />
        <meshBasicMaterial
          color="#0b1e36"
          transparent={true}
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. High-density outer cyan spherical wireframe (detail=3, no vertex spikes) */}
      <mesh>
        <icosahedronGeometry args={[2.5, 3]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe={true}
          transparent={true}
          opacity={0.45}
        />
      </mesh>

      {/* 3. Amber top-cap accent (detail=2) positioned/rotated to cover top quadrant */}
      <mesh position={[0, 0.3, 0]} rotation={[-0.4, 0, 0]}>
        <icosahedronGeometry args={[2.52, 2]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe={true}
          transparent={true}
          opacity={0.65}
        />
      </mesh>

      {/* 4. Clean small glowing vertex points (size=0.05 with sizeAttenuation) */}
      <points>
        <icosahedronGeometry args={[2.5, 3]} />
        <pointsMaterial
          color="#7fe0ff"
          size={0.05}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>

      {/* Amber vertex points on top cap */}
      <points position={[0, 0.3, 0]} rotation={[-0.4, 0, 0]}>
        <icosahedronGeometry args={[2.52, 2]} />
        <pointsMaterial
          color="#f59e0b"
          size={0.06}
          sizeAttenuation={true}
          transparent={true}
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
        camera={{ position: [0, 0, 7.5], fov: 42 }}
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
