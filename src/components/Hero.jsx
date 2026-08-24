import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiCpu, FiCheckCircle } from 'react-icons/fi';
import { personalInfo, heroStats, heroProofPoints } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);

  // Precision Engineering Schematic Canvas Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const nodes = [
      { label: 'CLIENT (React 19)', xOffset: -100, yOffset: -55, color: '#38bdf8', size: 4 },
      { label: 'API GATEWAY (Node)', xOffset: 0, yOffset: -85, color: '#60a5fa', size: 5 },
      { label: 'AUTH / RBAC (JWT)', xOffset: 95, yOffset: -45, color: '#fbbf24', size: 4 },
      { label: 'DATABASE (Mongo/SQL)', xOffset: 85, yOffset: 60, color: '#34d399', size: 5 },
      { label: 'CACHE (Redis)', xOffset: -85, yOffset: 55, color: '#f87171', size: 4 },
      { label: 'CORE_OPERATOR', xOffset: 0, yOffset: 0, color: '#38bdf8', size: 6 },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Concentric blueprint coordinate rings
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 1;
      [35, 75, 115, 145].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Axis crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - 150, centerY);
      ctx.lineTo(centerX + 150, centerY);
      ctx.moveTo(centerX, centerY - 150);
      ctx.lineTo(centerX, centerY + 150);
      ctx.stroke();

      // 2. Rotating radar beam
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(0, 0, 145, 0);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0.22)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 145, 0, Math.PI / 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Connect nodes with dashed blueprint lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.setLineDash([3, 3]);
      nodes.forEach((node) => {
        if (node.label !== 'CORE_OPERATOR') {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(centerX + node.xOffset, centerY + node.yOffset);
          ctx.stroke();
        }
      });
      ctx.setLineDash([]);

      // 4. Moving data packet along paths
      const pulseProgress = (Date.now() % 2800) / 2800;
      nodes.forEach((node) => {
        if (node.label !== 'CORE_OPERATOR') {
          const px = centerX + node.xOffset * pulseProgress;
          const py = centerY + node.yOffset * pulseProgress;
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 5. Draw node points and technical labels
      nodes.forEach((node) => {
        const nx = centerX + node.xOffset;
        const ny = centerY + node.yOffset;

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + node.size + 11);
      });

      angle += 0.012;
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
    hidden: { opacity: 0, y: 18 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.07, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Command Center Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small HUD label */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-xs border border-sky-500/30 bg-[#060e1c] text-xs font-mono font-bold tracking-widest text-[#38bdf8] w-fit mb-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-ping" />
              <span>RAKESH-CORE UPLINK ACTIVE</span>
            </motion.div>

            {/* Huge Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] font-sans select-none"
            >
              <span className="block text-[#f8fafc]">RAKESH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#fbbf24]">
                KUMAR
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="mt-4 font-mono text-xs sm:text-sm font-bold tracking-wide text-[#38bdf8] flex items-center gap-2"
            >
              <span className="text-[#fbbf24]">›</span>
              <span>{personalInfo.headline}</span>
            </motion.div>

            {/* Hero Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="mt-3 text-sm sm:text-base leading-relaxed max-w-2xl text-[#94a3b8] font-sans"
            >
              {personalInfo.subhead}
            </motion.p>

            {/* 3 Standout Hero Proof Points (Above the Fold) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl font-mono text-xs"
            >
              {heroProofPoints.map((proof) => (
                <a
                  key={proof.id}
                  href={proof.link}
                  onClick={(e) => handleNavClick(e, proof.link)}
                  className="blueprint-panel p-2.5 rounded-xs border border-sky-500/20 bg-[#060e1c]/90 hover:border-sky-500/50 transition-all group block"
                >
                  <div className="flex items-center justify-between text-[0.62rem] text-[#38bdf8] mb-1 font-bold">
                    <span>{proof.title}</span>
                    <span className="text-[#fbbf24] text-[0.55rem] px-1 rounded bg-[#fbbf24]/10">
                      {proof.tag}
                    </span>
                  </div>
                  <div className="text-[0.68rem] text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors leading-tight font-sans">
                    {proof.highlight}
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs"
            >
              <a
                href="#systems"
                onClick={(e) => handleNavClick(e, '#systems')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-bold transition-all"
              >
                <span>[ VIEW SYSTEMS ↓ ]</span>
                <FiArrowDown className="text-xs" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xs border border-sky-500/40 bg-[#060e1c] text-[#f8fafc] font-semibold hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all"
              >
                <FiDownload className="text-[#38bdf8]" />
                <span>[ DOWNLOAD RESUME ↗ ]</span>
              </a>

              <a
                href="#comms"
                onClick={(e) => handleNavClick(e, '#comms')}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xs border border-sky-500/20 bg-transparent text-[#94a3b8] hover:border-[#fbbf24] hover:text-[#fbbf24] transition-all"
              >
                <FiMail />
                <span>[ INITIATE CONTACT ]</span>
              </a>
            </motion.div>

            {/* 4 HUD Metric Stats Row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={7}
              variants={fadeInUp}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono"
            >
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className="blueprint-panel p-3 rounded-xs border border-sky-500/15 bg-[#060e1c]/70 relative"
                >
                  <div className="corner-bracket-tl" />
                  <div className="corner-bracket-br" />
                  <div className="text-xl font-black tracking-tight text-[#38bdf8]">
                    {stat.value}
                  </div>
                  <div className="text-[0.7rem] font-bold text-[#f8fafc] mt-0.5 truncate">
                    {stat.label}
                  </div>
                  <div className="text-[0.62rem] text-[#94a3b8] mt-0.5 truncate">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Engineering Schematic & Radar Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            <div className="blueprint-panel w-full rounded-xs border border-sky-500/25 bg-[#060e1c]/85 p-4 sm:p-5 relative shadow-[0_0_30px_rgba(3,7,18,0.8)]">
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              {/* Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-500/15 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#38bdf8] font-bold">
                  <FiCpu />
                  <span>SYSTEM_SCHEMATIC_RADAR</span>
                </div>
                <span className="text-[0.62rem] text-[#fbbf24] px-1.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/20 font-semibold">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Canvas Graphic */}
              <div className="relative w-full h-[260px] sm:h-[300px] bg-[#030712] rounded-xs overflow-hidden flex items-center justify-center border border-sky-500/15">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              {/* Status Footer */}
              <div className="mt-3 pt-2.5 border-t border-sky-500/15 flex items-center justify-between font-mono text-[0.62rem] text-[#94a3b8]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-ping" />
                  <span>SCHEMATIC: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <span>NODE_PING: 14ms</span>
                  <span>·</span>
                  <span>SYS: 100%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
