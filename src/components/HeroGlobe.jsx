import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroGlobe() {
  const mountRef = useRef(null);
  const isInteracting = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.2, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 17;

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

    // Geodesic / Constellation Sphere
    const sphereRadius = 5.2;
    const geo = new THREE.IcosahedronGeometry(sphereRadius, 2);

    // 1. Cyan Wireframe mesh
    const wireframeGeo = new THREE.WireframeGeometry(geo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
      linewidth: 1,
    });
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
    globeGroup.add(wireframe);

    // 2. Top Accent Amber / Golden Cluster (matching Photo 2 top highlight)
    const accentGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(sphereRadius * 1.005, 1));
    const accentMat = new THREE.LineBasicMaterial({
      color: 0xffad4d,
      transparent: true,
      opacity: 0.85,
    });
    const accentLines = new THREE.LineSegments(accentGeo, accentMat);
    accentLines.rotation.x = -0.4;
    globeGroup.add(accentLines);

    // 3. Glowing Node Vertices
    const pointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.28,
      transparent: true,
      opacity: 0.85,
    });
    const points = new THREE.Points(geo, pointsMat);
    globeGroup.add(points);

    // 4. Amber Vertex Highlights
    const amberPointsMat = new THREE.PointsMaterial({
      color: 0xffad4d,
      size: 0.35,
      transparent: true,
      opacity: 0.95,
    });
    const amberPoints = new THREE.Points(new THREE.IcosahedronGeometry(sphereRadius * 1.005, 1), amberPointsMat);
    amberPoints.rotation.x = -0.4;
    globeGroup.add(amberPoints);

    // Event Handlers for Cursor Interaction & Drag
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
        targetRotation.current.y += deltaX * 0.007;
        targetRotation.current.x += deltaY * 0.007;
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
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
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

      // Earth-like constant smooth auto-rotation
      if (!isInteracting.current) {
        targetRotation.current.y += delta * 0.22;
        targetRotation.current.x += Math.sin(clock.getElapsedTime() * 0.4) * 0.0008;
      }

      // Smooth cursor tilt damping
      const tiltX = mousePos.current.y * 0.2;
      const tiltY = mousePos.current.x * 0.2;

      globeGroup.rotation.x += (targetRotation.current.x + tiltX - globeGroup.rotation.x) * 0.06;
      globeGroup.rotation.y += (targetRotation.current.y + tiltY - globeGroup.rotation.y) * 0.06;

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
      geo.dispose();
      wireframeGeo.dispose();
      accentGeo.dispose();
    };
  }, []);

  return (
    <div className="hero-globe-zone" aria-label="3D Constellation Sphere">
      <div ref={mountRef} className="hero-globe-canvas" />
      <div className="hero-globe-caption-pill">
        <span className="caption-dot" /> DOUBLE-TAP TO EXPLORE THE STACK
      </div>
    </div>
  );
}
