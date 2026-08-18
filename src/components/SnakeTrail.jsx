import React, { useEffect, useRef } from 'react';

export default function SnakeTrail() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.clientWidth || 320);
    let height = (canvas.height = 42);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 320;
      height = canvas.height = 42;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const segmentCount = 11;
    const segments = [];
    for (let i = 0; i < segmentCount; i++) {
      segments.push({ x: width * 0.2 - i * 8, y: height / 2 });
    }

    let time = 0;
    let animId;

    const render = () => {
      animId = requestAnimationFrame(render);
      time += 0.035;

      ctx.clearRect(0, 0, width, height);

      // Calculate path head target (smooth wandering sine + mouse attraction)
      const baseX = (width * 0.35) + Math.sin(time * 0.8) * (width * 0.28);
      const baseY = height / 2 + Math.sin(time * 1.6) * 12;

      let targetX = baseX;
      let targetY = baseY;

      // Mouse reactivity if nearby
      const dx = mouseRef.current.x - baseX;
      const dy = mouseRef.current.y - baseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100 && dist > 0) {
        targetX += (dx / dist) * 20;
        targetY += (dy / dist) * 10;
      }

      // Smooth lead segment
      segments[0].x += (targetX - segments[0].x) * 0.2;
      segments[0].y += (targetY - segments[0].y) * 0.2;

      // Follower segments
      for (let i = 1; i < segmentCount; i++) {
        const segDx = segments[i - 1].x - segments[i].x;
        const segDy = segments[i - 1].y - segments[i].y;
        segments[i].x += segDx * 0.35;
        segments[i].y += segDy * 0.35;
      }

      // Draw subtle connecting line
      ctx.beginPath();
      ctx.moveTo(segments[0].x, segments[0].y);
      for (let i = 1; i < segmentCount; i++) {
        ctx.lineTo(segments[i].x, segments[i].y);
      }
      ctx.strokeStyle = 'rgba(66, 215, 202, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw nodes
      for (let i = segmentCount - 1; i >= 0; i--) {
        const seg = segments[i];
        const radius = i === 0 ? 3.5 : Math.max(1.8, 3.2 - i * 0.18);
        ctx.beginPath();
        ctx.arc(seg.x, seg.y, radius, 0, Math.PI * 2);

        if (i === 0) {
          ctx.fillStyle = '#42d7ca';
          ctx.shadowColor = '#42d7ca';
          ctx.shadowBlur = 6;
        } else if (i === 3 || i === 7) {
          ctx.fillStyle = '#ffad4d';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = 'rgba(66, 215, 202, 0.7)';
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="snake-trail-wrapper" aria-hidden="true">
      <div className="snake-tag">LIVE TRACE · AMBIENT SENSOR</div>
      <canvas ref={canvasRef} className="snake-canvas" />
    </div>
  );
}
