import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGlobe() {
  const mountRef = useRef(null);
  const isInteracting = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.15, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.z = 7.5;

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
    scene.add(globeGroup);

    // 1. Inner soft dark blue sphere mesh for solid volume presence
    const innerGeo = new THREE.SphereGeometry(2.45, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0b1e36,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerMesh);

    // 2. High-density outer cyan spherical wireframe (detail=3)
    const outerGeo = new THREE.IcosahedronGeometry(2.5, 3);
    const wireGeo = new THREE.WireframeGeometry(outerGeo);
    const wirePos = wireGeo.attributes.position;
    
    const cyanLinePositions = [];
    const amberLinePositions = [];

    // Split edges into top cap (y > 0.8) and lower body (y <= 0.8)
    for (let i = 0; i < wirePos.count; i += 2) {
      const x1 = wirePos.getX(i);
      const y1 = wirePos.getY(i);
      const z1 = wirePos.getZ(i);
      const x2 = wirePos.getX(i + 1);
      const y2 = wirePos.getY(i + 1);
      const z2 = wirePos.getZ(i + 1);

      if (y1 > 0.8 && y2 > 0.8) {
        amberLinePositions.push(x1, y1, z1, x2, y2, z2);
      } else {
        cyanLinePositions.push(x1, y1, z1, x2, y2, z2);
      }
    }

    // Cyan body wireframe
    const cyanBufferGeo = new THREE.BufferGeometry();
    cyanBufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(cyanLinePositions, 3));
    const cyanMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const cyanLinesMesh = new THREE.LineSegments(cyanBufferGeo, cyanMat);
    globeGroup.add(cyanLinesMesh);

    // Amber top cap wireframe
    const amberBufferGeo = new THREE.BufferGeometry();
    amberBufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(amberLinePositions, 3));
    const amberMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.65,
      linewidth: 1.5,
    });
    const amberLinesMesh = new THREE.LineSegments(amberBufferGeo, amberMat);
    globeGroup.add(amberLinesMesh);

    // 3. Clean small glowing vertex points (size: 0.05)
    const posAttr = outerGeo.attributes.position;
    const vertexCount = posAttr.count;
    const cyanPointsPos = [];
    const amberPointsPos = [];

    for (let i = 0; i < vertexCount; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);

      if (y > 0.8) {
        amberPointsPos.push(x, y, z);
      } else {
        cyanPointsPos.push(x, y, z);
      }
    }

    // Cyan dots
    const cyanPointsGeo = new THREE.BufferGeometry();
    cyanPointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(cyanPointsPos, 3));
    const cyanPointsMat = new THREE.PointsMaterial({
      color: 0x7fe0ff,
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });
    const cyanPointsMesh = new THREE.Points(cyanPointsGeo, cyanPointsMat);
    globeGroup.add(cyanPointsMesh);

    // Amber dots
    const amberPointsGeo = new THREE.BufferGeometry();
    amberPointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(amberPointsPos, 3));
    const amberPointsMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });
    const amberPointsMesh = new THREE.Points(amberPointsGeo, amberPointsMat);
    globeGroup.add(amberPointsMesh);

    // Tilt globe slightly
    globeGroup.rotation.z = -0.15;
    globeGroup.rotation.x = 0.25;

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
        targetRotation.current.y += delta * 0.18;
        targetRotation.current.x += Math.sin(clock.getElapsedTime() * 0.5) * 0.0004;
      }

      const tiltX = mousePos.current.y * 0.15;
      const tiltY = mousePos.current.x * 0.15;

      globeGroup.rotation.x += (targetRotation.current.x + tiltX - globeGroup.rotation.x) * 0.08;
      globeGroup.rotation.y += (targetRotation.current.y + tiltY - globeGroup.rotation.y) * 0.08;

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
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      wireGeo.dispose();
      cyanBufferGeo.dispose();
      amberBufferGeo.dispose();
      cyanPointsGeo.dispose();
      amberPointsGeo.dispose();
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
