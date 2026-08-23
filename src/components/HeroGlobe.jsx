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
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 8.5;

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

    const radius = 2.7;

    // 0. Translucent Inner Glowing Solid Sphere (depth & solid presence)
    const glowGeo = new THREE.SphereGeometry(2.6, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x002447,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    globeGroup.add(glowMesh);

    // 1. Inner dense wireframe sphere (faint dark navy/blue)
    const innerGeo = new THREE.SphereGeometry(radius * 0.95, 22, 16);
    const innerWire = new THREE.WireframeGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0x1d3354,
      transparent: true,
      opacity: 0.4,
    });
    const innerLines = new THREE.LineSegments(innerWire, innerMat);
    globeGroup.add(innerLines);

    // 2. Main Outer Constellation Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(radius, 1);
    const posAttr = outerGeo.attributes.position;
    const vertexCount = posAttr.count;

    // Create custom lines separated by top (amber) and body (cyan)
    const wireGeo = new THREE.WireframeGeometry(outerGeo);
    const wirePos = wireGeo.attributes.position;
    
    const cyanLinePositions = [];
    const amberLinePositions = [];

    // Split edges into top cap (y > 0.7) and lower body (y <= 0.7)
    for (let i = 0; i < wirePos.count; i += 2) {
      const x1 = wirePos.getX(i);
      const y1 = wirePos.getY(i);
      const z1 = wirePos.getZ(i);
      const x2 = wirePos.getX(i + 1);
      const y2 = wirePos.getY(i + 1);
      const z2 = wirePos.getZ(i + 1);

      if (y1 > 0.7 && y2 > 0.7) {
        amberLinePositions.push(x1, y1, z1, x2, y2, z2);
      } else {
        cyanLinePositions.push(x1, y1, z1, x2, y2, z2);
      }
    }

    // Cyan body wireframe with Additive Blending
    const cyanBufferGeo = new THREE.BufferGeometry();
    cyanBufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(cyanLinePositions, 3));
    const cyanMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85,
      linewidth: 1.5,
      blending: THREE.AdditiveBlending,
    });
    const cyanLinesMesh = new THREE.LineSegments(cyanBufferGeo, cyanMat);
    globeGroup.add(cyanLinesMesh);

    // Amber top cap wireframe with Additive Blending
    const amberBufferGeo = new THREE.BufferGeometry();
    amberBufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(amberLinePositions, 3));
    const amberMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.95,
      linewidth: 2,
      blending: THREE.AdditiveBlending,
    });
    const amberLinesMesh = new THREE.LineSegments(amberBufferGeo, amberMat);
    globeGroup.add(amberLinesMesh);

    // 3. Glowing Node Points at vertices
    const cyanPointsPos = [];
    const amberPointsPos = [];

    for (let i = 0; i < vertexCount; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);

      if (y > 0.7) {
        amberPointsPos.push(x, y, z);
      } else {
        cyanPointsPos.push(x, y, z);
      }
    }

    // Cyan dots with Additive Blending
    const cyanPointsGeo = new THREE.BufferGeometry();
    cyanPointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(cyanPointsPos, 3));
    const cyanPointsMat = new THREE.PointsMaterial({
      color: 0x7fe0ff,
      size: 0.18,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const cyanPointsMesh = new THREE.Points(cyanPointsGeo, cyanPointsMat);
    globeGroup.add(cyanPointsMesh);

    // Amber dots with Additive Blending
    const amberPointsGeo = new THREE.BufferGeometry();
    amberPointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(amberPointsPos, 3));
    const amberPointsMat = new THREE.PointsMaterial({
      color: 0xffcb6b,
      size: 0.22,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
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

      // Earth-like constant smooth slow rotation around axis
      if (!isInteracting.current) {
        targetRotation.current.y += delta * 0.22;
        targetRotation.current.x += Math.sin(clock.getElapsedTime() * 0.5) * 0.0006;
      }

      // Cursor tilt damping
      const tiltX = mousePos.current.y * 0.2;
      const tiltY = mousePos.current.x * 0.2;

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
      glowGeo.dispose();
      glowMat.dispose();
      outerGeo.dispose();
      innerGeo.dispose();
      innerWire.dispose();
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
