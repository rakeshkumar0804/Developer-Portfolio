import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGlobe() {
  const mountRef = useRef(null);
  const isInteracting = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.2, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.8;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      return;
    }

    const group = new THREE.Group();
    group.rotation.x = 0.2;
    group.rotation.z = -0.1;
    scene.add(group);

    // Generate distinct horizontal tiered rings (L1 through L7)
    const pts = [];
    const cyanLines = [];
    const ambLines = [];

    const layers = 7;
    const radius = 2.0;

    const layerPoints = [];

    for (let l = 0; l < layers; l++) {
      const y = -1.3 + (l / (layers - 1)) * 2.6;
      const r = Math.sqrt(Math.max(0, radius * radius - y * y)) * 1.05;
      const count = 6 + (l % 2 === 0 ? 2 : 0);
      const ring = [];

      for (let i = 0; i < count; i++) {
        const theta = (i / count) * Math.PI * 2 + (l * 0.35);
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        ring.push([x, y, z]);
        pts.push(x, y, z);
      }
      layerPoints.push(ring);
    }

    // Connect horizontal and inter-layer vertices
    for (let l = 0; l < layers; l++) {
      const ring = layerPoints[l];
      const isAmber = l >= 5;
      const target = isAmber ? ambLines : cyanLines;

      for (let i = 0; i < ring.length; i++) {
        const p1 = ring[i];
        const p2 = ring[(i + 1) % ring.length];
        target.push(p1[0], p1[1], p1[2], p2[0], p2[1], p2[2]);

        // Vertical connections
        if (l < layers - 1) {
          const nextRing = layerPoints[l + 1];
          const nextP = nextRing[i % nextRing.length];
          target.push(p1[0], p1[1], p1[2], nextP[0], nextP[1], nextP[2]);
          if (nextRing[(i + 1) % nextRing.length]) {
            const nextP2 = nextRing[(i + 1) % nextRing.length];
            target.push(p1[0], p1[1], p1[2], nextP2[0], nextP2[1], nextP2[2]);
          }
        }
      }
    }

    // Cyan Lower Structure
    const cyanLineGeo = new THREE.BufferGeometry();
    cyanLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(cyanLines, 3));
    const cyanMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
    const cyanMesh = new THREE.LineSegments(cyanLineGeo, cyanMat);
    group.add(cyanMesh);

    // Amber Top Cap Structure
    const amberLineGeo = new THREE.BufferGeometry();
    amberLineGeo.setAttribute('position', new THREE.Float32BufferAttribute(ambLines, 3));
    const amberMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.95 });
    const amberMesh = new THREE.LineSegments(amberLineGeo, amberMat);
    group.add(amberMesh);

    // Node Vertices
    const ptGeom = new THREE.BufferGeometry();
    ptGeom.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, sizeAttenuation: true, transparent: true, opacity: 0.9 });
    const ptMesh = new THREE.Points(ptGeom, ptMat);
    group.add(ptMesh);

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
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
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

      group.rotation.x += (targetRotation.current.x - group.rotation.x) * 0.08;
      group.rotation.y += (targetRotation.current.y - group.rotation.y) * 0.08;

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
      cyanLineGeo.dispose();
      cyanMat.dispose();
      amberLineGeo.dispose();
      amberMat.dispose();
      ptGeom.dispose();
      ptMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        cursor: 'grab',
      }}
      aria-label="3D Interactive Constellation Globe"
    />
  );
}
