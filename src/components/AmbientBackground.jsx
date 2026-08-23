import React, { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#08090C]">
      {/* Dynamic Cursor Spotlight Mesh */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full bg-radial from-[#10B981]/12 via-[#38BDF8]/6 to-transparent blur-3xl opacity-70 transition-transform duration-75 will-change-transform"
      />

      {/* Fixed Ambient Glow Orbs */}
      <div className="absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#10B981]/8 blur-[130px]" />
      <div className="absolute top-[35%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#38BDF8]/6 blur-[150px]" />
      <div className="absolute bottom-[10%] left-[-5%] h-[550px] w-[550px] rounded-full bg-[#10B981]/6 blur-[140px]" />

      {/* Subtle Linear Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
