import React, { useRef, useState } from 'react';

export default function RadiantCard({ children, className = '', glowColor = 'rgba(16, 185, 129, 0.15)', onClick, ...props }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative rounded-2xl border border-white/[0.08] bg-[#0c1017]/80 backdrop-blur-2xl transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}
      {...props}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`
            : 'none',
        }}
      />

      {/* Radiant Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.35), transparent 80%)`
            : 'none',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
