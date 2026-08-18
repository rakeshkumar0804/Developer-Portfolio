import React, { useEffect, useRef, useState } from 'react';
import { playPurr, playTick } from '../utils/sound';

export default function CatCompanion() {
  const panelRef = useRef(null);
  const catRef = useRef(null);
  const [headRotation, setHeadRotation] = useState(0);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isHappy, setIsHappy] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!panelRef.current || isDragging) return;
    const rect = panelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = (angleRad * 180) / Math.PI;

    // Clamp head tilt
    const clampedAngle = Math.max(-18, Math.min(18, deltaX * 0.08));
    setHeadRotation(clampedAngle);

    // Eye pupil offset
    const dist = Math.min(4, Math.hypot(deltaX, deltaY) * 0.02);
    setEyeOffset({
      x: Math.cos(angleRad) * dist,
      y: Math.sin(angleRad) * dist,
    });
  };

  const handleMouseEnter = () => {
    playTick();
  };

  const triggerPet = () => {
    setIsHappy(true);
    playPurr();

    // Spawn floating heart
    const newHeart = {
      id: Date.now() + Math.random(),
      x: (Math.random() - 0.5) * 40,
      y: 0,
    };
    setHearts((prev) => [...prev.slice(-4), newHeart]);

    setTimeout(() => {
      setIsHappy(false);
    }, 1800);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    };
  };

  const handleWindowMouseMove = (e) => {
    if (!isDragging) return;
    const nextX = Math.max(-45, Math.min(45, e.clientX - dragStart.current.x));
    const nextY = Math.max(-30, Math.min(30, e.clientY - dragStart.current.y));
    setDragOffset({ x: nextX, y: nextY });
  };

  const handleWindowMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Spring back to center
      setDragOffset({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={panelRef}
      className="cat-companion-panel"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      aria-label="Interactive Companion Pet System"
    >
      <div className="cat-panel-header">
        <div className="cat-panel-title">
          <span className="cat-dot" /> [CHIP] · PET.SYS
        </div>
        <span className={`cat-status-badge ${isHappy ? 'purring' : ''}`}>
          {isHappy ? 'CPU: PURRING' : 'STATUS: NOMINAL'}
        </span>
      </div>

      <div
        className="cat-stage"
        onMouseEnter={triggerPet}
        onClick={triggerPet}
        onMouseDown={handleMouseDown}
      >
        {/* Floating Heart Particles */}
        {hearts.map((h) => (
          <span
            key={h.id}
            className="floating-heart"
            style={{ left: `calc(50% + ${h.x}px)` }}
          >
            ♥
          </span>
        ))}

        <div
          ref={catRef}
          className={`cat-body-container ${isDragging ? 'dragging' : 'spring-back'}`}
          style={{
            transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`,
          }}
        >
          <svg
            className="cyber-cat-svg"
            viewBox="0 0 160 140"
            width="140"
            height="120"
            fill="none"
            stroke="currentColor"
          >
            {/* Body */}
            <path
              d="M48 115 C48 85, 112 85, 112 115 Z"
              stroke="#42d7ca"
              strokeWidth="2.5"
              fill="rgba(66, 215, 202, 0.08)"
            />
            {/* Tail */}
            <path
              d="M112 110 C130 110, 138 90, 130 80 C124 72, 120 78, 122 84"
              stroke="#42d7ca"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="cat-tail-path"
            />
            {/* Paws */}
            <path
              d="M58 115 L58 122 M70 115 L70 122 M90 115 L90 122 M102 115 L102 122"
              stroke="#42d7ca"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Rotatable Head Group */}
            <g
              className="cat-head-group"
              style={{
                transformOrigin: '80px 70px',
                transform: `rotate(${headRotation}deg)`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
              }}
            >
              {/* Ears */}
              <polygon
                points="52,50 62,25 74,45"
                stroke="#42d7ca"
                strokeWidth="2.5"
                fill="rgba(255, 173, 77, 0.2)"
              />
              <polygon
                points="108,50 98,25 86,45"
                stroke="#42d7ca"
                strokeWidth="2.5"
                fill="rgba(255, 173, 77, 0.2)"
              />

              {/* Head Base */}
              <circle
                cx="80"
                cy="64"
                r="28"
                stroke="#42d7ca"
                strokeWidth="2.5"
                fill="#0e1724"
              />

              {/* Eyes */}
              {isHappy ? (
                // Happy closed curved eyes ^_^
                <g stroke="#ffad4d" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M68 62 Q72 56 76 62" />
                  <path d="M84 62 Q88 56 92 62" />
                </g>
              ) : (
                // Open eyes tracking cursor
                <g>
                  <circle cx="72" cy="62" r="5" stroke="#42d7ca" strokeWidth="1.5" />
                  <circle
                    cx={72 + eyeOffset.x}
                    cy={62 + eyeOffset.y}
                    r="2.5"
                    fill="#42d7ca"
                  />
                  <circle cx="88" cy="62" r="5" stroke="#42d7ca" strokeWidth="1.5" />
                  <circle
                    cx={88 + eyeOffset.x}
                    cy={62 + eyeOffset.y}
                    r="2.5"
                    fill="#42d7ca"
                  />
                </g>
              )}

              {/* Nose & Whiskers */}
              <polygon points="78,70 82,70 80,73" fill="#ffad4d" />
              <path
                d="M78 74 Q80 77 82 74"
                stroke="#ffad4d"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M56 68 L42 66 M56 72 L40 74 M104 68 L118 66 M104 72 L120 74"
                stroke="rgba(66, 215, 202, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="cat-panel-footer">
        <span className="cat-caption">
          TAP TO PET · DRAG TO PLAY · CPU WATCHER
        </span>
      </div>
    </div>
  );
}
