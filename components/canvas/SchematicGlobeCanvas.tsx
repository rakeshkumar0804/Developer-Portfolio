"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function BlueprintLattice() {
  const groupRef = useRef<THREE.Group>(null!);

  // Generate distinct horizontal tiered rings (L1 through L7)
  const { lineSegments, amberSegments, points } = useMemo(() => {
    const pts: [number, number, number][] = [];
    const cyanLines: [number, number, number][] = [];
    const ambLines: [number, number, number][] = [];

    const layers = 7;
    const radius = 2.0;

    const layerPoints: [number, number, number][][] = [];

    for (let l = 0; l < layers; l++) {
      const y = -1.3 + (l / (layers - 1)) * 2.6;
      const r = Math.sqrt(Math.max(0, radius * radius - y * y)) * 1.05;
      const count = 6 + (l % 2 === 0 ? 2 : 0);
      const ring: [number, number, number][] = [];

      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2 + (l * 0.35);
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        ring.push([x, y, z]);
        pts.push([x, y, z]);
      }
      layerPoints.push(ring);
    }

    // Connect horizontal and inter-layer vertices
    for (let l = 0; l < layers; l++) {
      const ring = layerPoints[l];
      const isAmber = l >= 5; // Top layers are amber
      const target = isAmber ? ambLines : cyanLines;

      for (let i = 0; i < ring.length; i++) {
        const p1 = ring[i];
        const p2 = ring[(i + 1) % ring.length];
        target.push(p1, p2);

        // Vertical connections
        if (l < layers - 1) {
          const nextRing = layerPoints[l + 1];
          const nextP = nextRing[i % nextRing.length];
          target.push(p1, nextP);
          if (nextRing[(i + 1) % nextRing.length]) {
            target.push(p1, nextRing[(i + 1) % nextRing.length]);
          }
        }
      }
    }

    const buildGeom = (lines: [number, number, number][]) => {
      const arr = new Float32Array(lines.length * 3);
      lines.forEach((p, idx) => {
        arr[idx * 3] = p[0];
        arr[idx * 3 + 1] = p[1];
        arr[idx * 3 + 2] = p[2];
      });
      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.BufferAttribute(arr, 3));
      return geom;
    };

    const ptArr = new Float32Array(pts.length * 3);
    pts.forEach((p, idx) => {
      ptArr[idx * 3] = p[0];
      ptArr[idx * 3 + 1] = p[1];
      ptArr[idx * 3 + 2] = p[2];
    });
    const ptGeom = new THREE.BufferGeometry();
    ptGeom.setAttribute("position", new THREE.BufferAttribute(ptArr, 3));

    return {
      lineSegments: buildGeom(cyanLines),
      amberSegments: buildGeom(ambLines),
      points: ptGeom,
    };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0, -0.1]}>
      {/* Cyan Lower Structure */}
      <lineSegments geometry={lineSegments}>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.85} />
      </lineSegments>

      {/* Amber Top Cap Structure */}
      <lineSegments geometry={amberSegments}>
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.95} />
      </lineSegments>

      {/* Node Vertices */}
      <points geometry={points}>
        <pointsMaterial color="#ffffff" size={0.06} sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

export default function SchematicGlobeCanvas() {
  return (
    <div className="relative h-full w-full select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1} />
        <BlueprintLattice />
        <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
