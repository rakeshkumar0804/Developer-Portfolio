import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'button' | 'text' | 'hidden'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check target element type for cursor state
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
      const isCodeOrText = target.closest('.font-mono, pre, code, .ide-code-pane, input, textarea');

      if (isInteractive) {
        setCursorState('button');
      } else if (isCodeOrText && !isInteractive) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for outer ring
    const renderLoop = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Center sharp dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 rounded-full transition-all duration-150 ease-out will-change-transform ${
          cursorState === 'button'
            ? 'h-3 w-3 -ml-1.5 -mt-1.5 bg-[#C6FF3D] shadow-[0_0_12px_#C6FF3D]'
            : cursorState === 'text'
            ? 'h-5 w-0.5 -ml-px -mt-2.5 bg-[#C6FF3D] rounded-none animate-pulse'
            : 'h-2 w-2 bg-[#C6FF3D] shadow-[0_0_8px_#C6FF3D]'
        }`}
      />

      {/* Trailing smooth ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out will-change-transform ${
          cursorState === 'button'
            ? 'h-10 w-10 -ml-5 -mt-5 border-[#C6FF3D] bg-[#C6FF3D]/10 scale-110 shadow-[0_0_15px_rgba(198,255,61,0.2)]'
            : cursorState === 'text'
            ? 'h-7 w-7 -ml-3.5 -mt-3.5 border-[#C6FF3D]/40 bg-transparent scale-90'
            : 'h-8 w-8 -ml-4 -mt-4 border-[#C6FF3D]/50 bg-transparent'
        }`}
      />
    </div>
  );
}
