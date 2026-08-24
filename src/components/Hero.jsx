import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiExternalLink } from 'react-icons/fi';
import { personalInfo, heroProofPoints } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);

  // Cinematic Orbital Schematic Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const orbits = [
      { name: 'CLIENT (React 19)', radius: 65, speed: 0.008, color: '#38bdf8', size: 3.5 },
      { name: 'API GATEWAY (Node)', radius: 105, speed: -0.006, color: '#60a5fa', size: 4 },
      { name: 'AUTH & RBAC (JWT)', radius: 140, speed: 0.004, color: '#fbbf24', size: 3.5 },
      { name: 'DATA LAYER (Mongo/SQL)', radius: 175, speed: -0.003, color: '#34d399', size: 4 },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw subtle concentric orbit rings
      orbits.forEach((orb) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 2. Draw central core
      const corePulse = Math.sin(t * 2) * 1.5;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.beginPath();
      ctx.arc(cx, cy, 14 + corePulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CORE', cx, cy + 12);

      // 3. Compute and draw orbiting nodes & connections
      orbits.forEach((orb, i) => {
        const currentAngle = t * orb.speed * 60 + i * 1.5;
        const nx = cx + Math.cos(currentAngle) * orb.radius;
        const ny = cy + Math.sin(currentAngle) * orb.radius;

        // Subtle connection ray
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        // Node glow & body
        ctx.fillStyle = orb.color;
        ctx.beginPath();
        ctx.arc(nx, ny, orb.size, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = '#94a3b8';
        ctx.font = '8.5px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(orb.name, nx, ny + orb.size + 9);
      });

      t += 0.016;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clean Cinematic Typography & Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Status Pill */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs border border-white/[0.08] bg-[#060e1c] text-[0.68rem] font-mono text-slate-400 w-fit mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="tracking-widest text-[#38bdf8] font-medium">RAKESH-CORE</span>
              <span className="text-slate-600">/</span>
              <span>UPLINK ACTIVE</span>
            </motion.div>

            {/* Massive Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.92] select-none"
            >
              <span className="block text-[#f8fafc]">RAKESH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#f8fafc]">
                KUMAR
              </span>
            </motion.h1>

            {/* One Strong Subtitle */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="mt-5 font-mono text-sm sm:text-base font-semibold text-[#38bdf8] tracking-tight"
            >
              {personalInfo.headline}
            </motion.div>

            {/* One Short Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400 font-sans max-w-xl"
            >
              {personalInfo.subhead}
            </motion.p>

            {/* 3 Proof Cards (Above the Fold for Recruiters) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl"
            >
              {heroProofPoints.map((proof) => (
                <a
                  key={proof.id}
                  href={proof.link}
                  onClick={(e) => handleNavClick(e, proof.link)}
                  className="blueprint-card p-3 rounded-xs border border-white/[0.08] hover:border-[#38bdf8]/40 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-[0.65rem] font-mono font-semibold text-[#38bdf8] mb-1">
                    <span>{proof.title}</span>
                    <span className="text-[#fbbf24] text-[0.55rem] opacity-90">{proof.tag}</span>
                  </div>
                  <div className="text-[0.68rem] text-slate-400 group-hover:text-slate-200 transition-colors leading-tight">
                    {proof.highlight}
                  </div>
                </a>
              ))}
            </motion.div>

            {/* 2 Primary CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-7 flex items-center gap-3 font-mono text-xs"
            >
              <a
                href="#systems"
                onClick={(e) => handleNavClick(e, '#systems')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-semibold transition-all shadow-sm"
              >
                <span>View Systems</span>
                <FiArrowDown className="text-xs" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xs border border-white/[0.15] bg-[#060e1c] text-slate-300 font-medium hover:border-[#38bdf8]/50 hover:text-white transition-all"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xs text-[#38bdf8]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Engineering Schematic Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <div className="blueprint-card w-full rounded-xs border border-white/[0.08] p-4 relative">
              <div className="micro-corner-tl" />
              <div className="micro-corner-br" />

              {/* Titlebar */}
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.05] font-mono text-[0.65rem] text-slate-500">
                <span className="text-slate-400 font-medium tracking-wider">ARCHITECTURE_SCHEMATIC</span>
                <span className="text-[#38bdf8]">SYSTEM_ACTIVE</span>
              </div>

              {/* Canvas Visualizer */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-[#02050c] rounded-xs overflow-hidden flex items-center justify-center border border-white/[0.04]">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              {/* Status Footer */}
              <div className="mt-2.5 pt-2 border-t border-white/[0.05] flex items-center justify-between font-mono text-[0.6rem] text-slate-500">
                <span>FULL-STACK TOPOLOGY</span>
                <span className="text-slate-400">4 ACTIVE NODES</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
