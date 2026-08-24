import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiTerminal, FiLayers, FiActivity, FiShield } from 'react-icons/fi';
import { personalInfo, heroStats, heroProofPoints } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);

  // Animated Cyber Radar & Node Network Visualizer
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
      { label: 'CLIENT_UI (React)', xOffset: -100, yOffset: -60, color: '#38cfff', size: 5 },
      { label: 'API_GATEWAY (Node)', xOffset: 0, yOffset: -90, color: '#5fa8ff', size: 6 },
      { label: 'AUTH_RBAC (JWT)', xOffset: 95, yOffset: -50, color: '#ffb23f', size: 5 },
      { label: 'STORAGE (Mongo/SQL)', xOffset: 85, yOffset: 65, color: '#10b981', size: 6 },
      { label: 'CACHE (Redis)', xOffset: -90, yOffset: 60, color: '#f43f5e', size: 5 },
      { label: 'CORE_OPERATOR', xOffset: 0, yOffset: 0, color: '#38cfff', size: 8 },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw concentric radar grid rings
      ctx.strokeStyle = 'rgba(80, 170, 255, 0.15)';
      ctx.lineWidth = 1;
      [40, 80, 120, 150].forEach((r) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Axis crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - 160, centerY);
      ctx.lineTo(centerX + 160, centerY);
      ctx.moveTo(centerX, centerY - 160);
      ctx.lineTo(centerX, centerY + 160);
      ctx.stroke();

      // 2. Draw rotating radar sweep gradient
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      const gradient = ctx.createLinearGradient(0, 0, 150, 0);
      gradient.addColorStop(0, 'rgba(56, 207, 255, 0)');
      gradient.addColorStop(1, 'rgba(56, 207, 255, 0.25)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 150, 0, Math.PI / 3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 3. Connect nodes with blueprint lines
      ctx.strokeStyle = 'rgba(56, 207, 255, 0.25)';
      ctx.setLineDash([4, 4]);
      nodes.forEach((node) => {
        if (node.label !== 'CORE_OPERATOR') {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(centerX + node.xOffset, centerY + node.yOffset);
          ctx.stroke();
        }
      });
      ctx.setLineDash([]);

      // 4. Moving data packet pulse along paths
      const pulseProgress = (Date.now() % 3000) / 3000;
      nodes.forEach((node) => {
        if (node.label !== 'CORE_OPERATOR') {
          const px = centerX + node.xOffset * pulseProgress;
          const py = centerY + node.yOffset * pulseProgress;
          ctx.fillStyle = '#38cfff';
          ctx.shadowColor = '#38cfff';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 5. Draw node circles and monospace tags
      nodes.forEach((node) => {
        const nx = centerX + node.xOffset;
        const ny = centerY + node.yOffset;

        // Node Glow
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.fillStyle = '#8aa4bf';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + node.size + 12);
      });

      angle += 0.015;
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
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: custom * 0.08, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Command Center Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Uplink Status */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm border border-[#38cfff]/40 bg-[#38cfff]/10 text-xs font-mono font-semibold tracking-widest text-[#38cfff] w-fit mb-5 shadow-[0_0_15px_rgba(56,207,255,0.2)]"
            >
              <span className="h-2 w-2 rounded-full bg-[#38cfff] animate-ping" />
              <span>RAKESH-CORE UPLINK ACTIVE // 2026</span>
            </motion.div>

            {/* Huge Display Name */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUp}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] font-sans select-none"
            >
              <span className="block text-[#e6f1ff]">RAKESH</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38cfff] via-[#5fa8ff] to-[#ffb23f]">
                KUMAR
              </span>
            </motion.h1>

            {/* Headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUp}
              className="mt-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#38cfff] flex items-center gap-2"
            >
              <span className="text-[#ffb23f]">›</span>
              <span>{personalInfo.headline}</span>
            </motion.div>

            {/* Subtitle & Core Pitch */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeInUp}
              className="mt-3.5 text-sm sm:text-base font-semibold leading-relaxed max-w-2xl text-[#e6f1ff] font-sans"
            >
              {personalInfo.subhead}
            </motion.p>

            {/* Work & Projects Summary */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeInUp}
              className="mt-2.5 text-xs sm:text-sm leading-relaxed max-w-2xl text-[#8aa4bf] font-sans"
            >
              {personalInfo.description}
            </motion.p>

            {/* 3 Standout Proof Points (Above the Fold for Recruiters) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl"
            >
              {heroProofPoints.map((proof, pIdx) => (
                <a
                  key={pIdx}
                  href={proof.link}
                  onClick={(e) => handleNavClick(e, proof.link)}
                  className="hud-panel p-2.5 rounded-sm border border-[#50aaff]/25 bg-[#020712]/90 hover:border-[#38cfff]/60 hover:bg-[#06101f] transition-all group block font-mono"
                >
                  <div className="flex items-center justify-between text-[0.6rem] text-[#38cfff] mb-1 font-bold">
                    <span>{proof.title}</span>
                    <span className="text-[#ffb23f] text-[0.55rem] px-1 py-0.2 rounded bg-[#ffb23f]/10">
                      {proof.tag}
                    </span>
                  </div>
                  <div className="text-[0.68rem] text-[#8aa4bf] group-hover:text-[#e6f1ff] transition-colors leading-tight font-sans">
                    {proof.highlight}
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Action CTA Triggers */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={7}
              variants={fadeInUp}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#systems"
                onClick={(e) => handleNavClick(e, '#systems')}
                className="flex items-center gap-2 px-5 py-3 rounded-sm bg-[#38cfff] hover:bg-[#5fa8ff] text-[#020712] font-mono text-xs font-bold shadow-[0_0_20px_rgba(56,207,255,0.4)] hover:shadow-[0_0_25px_#38cfff] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>[ VIEW PROJECTS ↓ ]</span>
                <FiArrowDown className="text-sm" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-sm border border-[#38cfff]/60 bg-[#06101f]/80 text-[#e6f1ff] font-mono text-xs font-semibold hover:border-[#38cfff] hover:bg-[#38cfff]/15 hover:text-[#38cfff] transition-all duration-200"
              >
                <FiDownload className="text-[#38cfff]" />
                <span>[ DOWNLOAD RESUME ↗ ]</span>
              </a>

              <a
                href="#comms"
                onClick={(e) => handleNavClick(e, '#comms')}
                className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#50aaff]/20 bg-transparent text-[#8aa4bf] font-mono text-xs hover:border-[#ffb23f] hover:text-[#ffb23f] transition-all duration-200"
              >
                <FiMail />
                <span>[ CONTACT ME ]</span>
              </a>
            </motion.div>

            {/* 4 HUD Metric Stats Row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={6}
              variants={fadeInUp}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5"
            >
              {heroStats.map((stat, i) => (
                <div
                  key={i}
                  className="hud-panel p-3.5 rounded-sm border border-[#50aaff]/20 bg-[#06101f]/70 relative"
                >
                  <div className="hud-corner-tl" />
                  <div className="hud-corner-br" />
                  <div className="text-xl sm:text-2xl font-black font-mono tracking-tight text-[#38cfff]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#e6f1ff] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[0.65rem] font-mono text-[#8aa4bf] mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive System Architecture Radar Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            {/* HUD Bracket Window Frame */}
            <div className="hud-panel w-full rounded-sm border border-[#50aaff]/30 bg-[#06101f]/85 p-4 sm:p-5 relative shadow-[0_0_30px_rgba(6,16,31,0.9)]">
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#50aaff]/20 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#38cfff] font-bold">
                  <FiActivity className="animate-pulse" />
                  <span>SYSTEM_ARCHITECTURE_RADAR</span>
                </div>
                <span className="text-[0.65rem] text-[#ffb23f] px-2 py-0.5 rounded bg-[#ffb23f]/10 border border-[#ffb23f]/30">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Canvas Canvas Graphic */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-[#020712]/90 rounded-sm overflow-hidden flex items-center justify-center border border-[#50aaff]/15">
                <canvas ref={canvasRef} className="w-full h-full block" />
              </div>

              {/* Bottom Telemetry HUD Output */}
              <div className="mt-3 pt-3 border-t border-[#50aaff]/20 flex items-center justify-between font-mono text-[0.65rem] text-[#8aa4bf]">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38cfff] animate-ping" />
                  <span>RADAR_SCAN: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-[#38cfff]">
                  <span>NODE LATENCY: 14ms</span>
                  <span>·</span>
                  <span>PKT LOSS: 0.00%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
