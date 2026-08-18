import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroGlobe() {
  const mountRef = useRef(null);
  const isInteracting = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.15, y: 0 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported, falling back to static render');
      return;
    }

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Geodesic / Icosahedron Geometry for Constellation Sphere
    const sphereRadius = 6.2;
    const geometry = new THREE.IcosahedronGeometry(sphereRadius, 2);
    
    // Wireframe edges
    const wireframeGeo = new THREE.WireframeGeometry(geometry);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x42d7ca,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    globeGroup.add(wireframe);

    // Secondary Accent Accent Lines (Inner Octahedron)
    const accentGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(sphereRadius * 0.98, 1));
    const accentMat = new THREE.LineBasicMaterial({
      color: 0xffad4d,
      transparent: true,
      opacity: 0.55,
    });
    const accentLines = new THREE.LineSegments(accentGeo, accentMat);
    globeGroup.add(accentLines);

    // Node Vertices (Glowing Points)
    const pointsMat = new THREE.PointsMaterial({
      color: 0x42d7ca,
      size: 0.32,
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(geometry, pointsMat);
    globeGroup.add(points);

    // Subtle Core Particle Cloud
    const particleCount = 60;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = sphereRadius * (0.3 + Math.random() * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const coreParticles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.2, transparent: true, opacity: 0.6 })
    );
    globeGroup.add(coreParticles);

    // Subtle Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    setIsReady(true);

    // Interaction Handlers
    const handlePointerDown = (e) => {
      isInteracting.current = true;
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current = { x: normX, y: normY };

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

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 400;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Ambient Auto-Rotation when not dragging
      if (!isInteracting.current) {
        targetRotation.current.y += delta * 0.28;
        targetRotation.current.x += Math.sin(clock.getElapsedTime() * 0.5) * 0.001;
      }

      // Tilt toward mouse
      const tiltX = mousePos.current.y * 0.25;
      const tiltY = mousePos.current.x * 0.25;

      globeGroup.rotation.x += (targetRotation.current.x + tiltX - globeGroup.rotation.x) * 0.08;
      globeGroup.rotation.y += (targetRotation.current.y + tiltY - globeGroup.rotation.y) * 0.08;

      coreParticles.rotation.y -= delta * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      dom.removeEventListener('pointerdown', handlePointerDown);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      wireframeGeo.dispose();
      accentGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="hero-globe-wrapper" aria-label="Interactive 3D Constellation Sphere">
      <div className="globe-badge-top">
        <span className="globe-tag">FIG.01 // TOPOLOGY MESH</span>
        <span className="globe-live-indicator">
          <span className="pulsing-core" /> 6.2k NODES
        </span>
      </div>

      <div ref={mountRef} className="hero-globe-canvas-container" />

      <div className="globe-caption-bottom">
        <span className="globe-instruction">DRAG TO ROTATE · HOVER TO TILT</span>
        <span className="globe-coord">ORBIT [45° LAT · 18 Z]</span>
      </div>
    </div>
  );
}
