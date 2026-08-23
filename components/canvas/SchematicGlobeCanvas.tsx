"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ConstellationSphere() {
  const globeRef = useRef<THREE.Group>(null);
  const radius = 1.6;

  // Continuous smooth orbital rotation
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
  });

  // Separate wireframe edges into top amber cap and lower cyan body
  const { cyanLineGeo, amberLineGeo, cyanPointsGeo, amberPointsGeo } = useMemo(() => {
    const icosaGeo = new THREE.IcosahedronGeometry(radius, 1);
    const wireGeo = new THREE.WireframeGeometry(icosaGeo);
    const pos = wireGeo.attributes.position;

    const cyanLines: number[] = [];
    const amberLines: number[] = [];

    for (let i = 0; i < pos.count; i += 2) {
      const x1 = pos.getX(i);
      const y1 = pos.getY(i);
      const z1 = pos.getZ(i);
      const x2 = pos.getX(i + 1);
      const y2 = pos.getY(i + 1);
      const z2 = pos.getZ(i + 1);

      if (y1 > 0.45 && y2 > 0.45) {
        amberLines.push(x1, y1, z1, x2, y2, z2);
      } else {
        cyanLines.push(x1, y1, z1, x2, y2, z2);
      }
    }

    const cLineGeo = new THREE.BufferGeometry();
    cLineGeo.setAttribute("position", new THREE.Float32BufferAttribute(cyanLines, 3));

    const aLineGeo = new THREE.BufferGeometry();
    aLineGeo.setAttribute("position", new THREE.Float32BufferAttribute(amberLines, 3));

    // Vertex points
    const icosaPos = icosaGeo.attributes.position;
    const cyanPts: number[] = [];
    const amberPts: number[] = [];

    for (let i = 0; i < icosaPos.count; i++) {
      const x = icosaPos.getX(i);
      const y = icosaPos.getY(i);
      const z = icosaPos.getZ(i);

      if (y > 0.45) {
        amberPts.push(x, y, z);
      } else {
        cyanPts.push(x, y, z);
      }
    }

    const cPtsGeo = new THREE.BufferGeometry();
    cPtsGeo.setAttribute("position", new THREE.Float32BufferAttribute(cyanPts, 3));

    const aPtsGeo = new THREE.BufferGeometry();
    aPtsGeo.setAttribute("position", new THREE.Float32BufferAttribute(amberPts, 3));

    return {
      cyanLineGeo: cLineGeo,
      amberLineGeo: aLineGeo,
      cyanPointsGeo: cPtsGeo,
      amberPointsGeo: aPtsGeo,
    };
  }, [radius]);

  return (
    <group ref={globeRef} rotation={[0.25, 0, -0.15]} scale={[1.15, 0.92, 1.15]}>
      {/* 1. Inner soft dark navy core */}
      <mesh>
        <sphereGeometry args={[radius * 0.96, 20, 16]} />
        <meshBasicMaterial
          color="#081a2e"
          transparent={true}
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. Lower Open Triangular Cyan Lattice */}
      <lineSegments geometry={cyanLineGeo}>
        <lineBasicMaterial
          color="#00f0ff"
          transparent={true}
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 3. Top Glowing Amber Cap */}
      <lineSegments geometry={amberLineGeo}>
        <lineBasicMaterial
          color="#f59e0b"
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 4. Cyan / White Glowing Vertex Points */}
      <points geometry={cyanPointsGeo}>
        <pointsMaterial
          color="#ffffff"
          size={0.08}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 5. Amber Glowing Top Vertex Points */}
      <points geometry={amberPointsGeo}>
        <pointsMaterial
          color="#ffcb6b"
          size={0.1}
          sizeAttenuation={true}
          transparent={true}
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
        camera={{ position: [0, 0, 7], fov: 40 }}
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
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 border border-blueprint-cyan/30 bg-canvas-base/80 px-3 py-1 backdrop-blur-md whitespace-nowrap">
        <span className="tech-tag flex items-center gap-1.5 text-[0.55rem] text-blueprint-cyan font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-blueprint-cyan animate-ping" />
          • DOUBLE-TAP TO EXPLORE THE STACK
        </span>
      </div>
    </div>
  );
}
