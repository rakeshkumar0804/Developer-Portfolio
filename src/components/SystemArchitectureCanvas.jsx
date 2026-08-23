import React, { useEffect, useRef, useState } from 'react';
import { FiActivity, FiServer, FiDatabase, FiMonitor, FiZap, FiCheckCircle } from 'react-icons/fi';
import { SiRedis, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';

const NODES = [
  {
    id: 'client',
    title: 'Client UI',
    subtitle: 'React 19 / Next.js',
    xRatio: 0.18,
    yRatio: 0.5,
    icon: SiReact,
    color: '#38BDF8',
    stats: {
      latency: '16ms Frame',
      throughput: '60 FPS UI',
      status: 'Hydrated',
      protocol: 'HTTPS / WSS',
      uptime: '100%',
    },
  },
  {
    id: 'api',
    title: 'API Gateway',
    subtitle: 'Node.js & Express',
    xRatio: 0.5,
    yRatio: 0.32,
    icon: SiNodedotjs,
    color: '#10B981',
    stats: {
      latency: '38ms P95',
      throughput: '12.4k req/s',
      status: 'Healthy',
      protocol: 'REST / GraphQL',
      uptime: '99.99%',
    },
  },
  {
    id: 'cache',
    title: 'Cache Layer',
    subtitle: 'Redis In-Memory',
    xRatio: 0.82,
    yRatio: 0.22,
    icon: SiRedis,
    color: '#EF4444',
    stats: {
      latency: '1.8ms RTT',
      throughput: '94.8% Hit Rate',
      status: 'Optimal',
      protocol: 'RESP3',
      uptime: '100%',
    },
  },
  {
    id: 'storage',
    title: 'Storage Engine',
    subtitle: 'MongoDB Atlas',
    xRatio: 0.78,
    yRatio: 0.72,
    icon: SiMongodb,
    color: '#34D399',
    stats: {
      latency: '11ms Query',
      throughput: 'Multi-Tenant RBAC',
      status: 'Synced',
      protocol: 'TLS WiredTiger',
      uptime: '99.98%',
    },
  },
];

const CONNECTIONS = [
  { from: 'client', to: 'api', label: 'JSON RPC / WebSockets' },
  { from: 'api', to: 'cache', label: 'Cache Lookup' },
  { from: 'api', to: 'storage', label: 'BSON Pipeline' },
  { from: 'cache', to: 'storage', label: 'Write-Through', dashed: true },
];

export default function SystemArchitectureCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(NODES[1]); // Default to API Gateway
  const [hoveredNode, setHoveredNode] = useState(null);
  const animationFrameRef = useRef(null);
  const packetsRef = useRef([]);

  useEffect(() => {
    // Initialize packets traversing connections
    const packets = [];
    CONNECTIONS.forEach((conn, index) => {
      for (let i = 0; i < 3; i++) {
        packets.push({
          connIndex: index,
          progress: (i / 3) + Math.random() * 0.2,
          speed: 0.006 + Math.random() * 0.004,
          size: 3 + Math.random() * 2,
        });
      }
    });
    packetsRef.current = packets;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.03;
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Node coordinates
      const coords = {};
      NODES.forEach((n) => {
        coords[n.id] = {
          x: n.xRatio * width,
          y: n.yRatio * height,
        };
      });

      // Draw Connection Lines
      CONNECTIONS.forEach((conn) => {
        const p1 = coords[conn.from];
        const p2 = coords[conn.to];
        if (!p1 || !p2) return;

        ctx.save();
        ctx.beginPath();
        if (conn.dashed) {
          ctx.setLineDash([4, 6]);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        } else {
          ctx.setLineDash([]);
          const isHighlighted =
            (selectedNode && (selectedNode.id === conn.from || selectedNode.id === conn.to)) ||
            (hoveredNode && (hoveredNode.id === conn.from || hoveredNode.id === conn.to));
          ctx.strokeStyle = isHighlighted ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.15)';
        }

        ctx.lineWidth = 1.5;

        // Quadratic curve
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2 + (conn.from === 'client' ? -15 : 10);
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      });

      // Update & Draw Data Packets
      packetsRef.current.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) pkt.progress = 0;

        const conn = CONNECTIONS[pkt.connIndex];
        const p1 = coords[conn.from];
        const p2 = coords[conn.to];
        if (!p1 || !p2) return;

        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2 + (conn.from === 'client' ? -15 : 10);

        // Calculate quadratic bezier point
        const t = pkt.progress;
        const x = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * midX + t * t * p2.x;
        const y = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * midY + t * t * p2.y;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, pkt.size, 0, Math.PI * 2);
        ctx.fillStyle = conn.from === 'client' ? '#38BDF8' : '#10B981';
        ctx.shadowColor = conn.from === 'client' ? '#38BDF8' : '#10B981';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [selectedNode, hoveredNode]);

  const active = hoveredNode || selectedNode;

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl border border-white/[0.1] bg-[#0c1017]/90 backdrop-blur-2xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden select-none flex flex-col justify-between"
    >
      {/* Top Header & Real-time Beacon */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-2 font-mono">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide">SYSTEM ARCHITECTURE PIPELINE</span>
        </div>
        <div className="flex items-center gap-2 text-[0.7rem] text-neutral-400">
          <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#38BDF8]">
            Interactive Telemetry
          </span>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div className="relative h-[280px] sm:h-[310px] w-full">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />

        {/* Interactive Overlay Nodes */}
        {NODES.map((node) => {
          const isSelected = selectedNode.id === node.id;
          const isHovered = hoveredNode?.id === node.id;
          const Icon = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                left: `${node.xRatio * 100}%`,
                top: `${node.yRatio * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute z-20 flex flex-col items-center gap-1.5 p-2 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                isSelected || isHovered
                  ? 'border-[#38BDF8] bg-[#16202c] shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-110'
                  : 'border-white/[0.12] bg-[#0e141d]/90 hover:border-white/30 hover:scale-105'
              }`}
            >
              <div
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex items-center justify-center border border-white/[0.08]"
                style={{ backgroundColor: `${node.color}15`, color: node.color }}
              >
                <Icon className="text-lg sm:text-xl" />
              </div>

              <div className="text-center">
                <div className="text-[0.72rem] font-bold text-white font-sans whitespace-nowrap">
                  {node.title}
                </div>
                <div className="text-[0.6rem] font-mono text-neutral-400 whitespace-nowrap">
                  {node.subtitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Telemetry Metric Inspector HUD */}
      {active && (
        <div className="mt-2 rounded-xl border border-white/[0.08] bg-[#080c12]/90 p-3.5 font-mono text-xs">
          <div className="flex items-center justify-between text-[0.68rem] text-neutral-400 mb-2.5 border-b border-white/[0.06] pb-1.5">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <FiActivity className="text-[#38BDF8]" />
              <span>{active.title} Telemetry</span>
            </span>
            <span className="text-[#10B981] flex items-center gap-1">
              <FiCheckCircle className="text-xs" /> {active.stats.status}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[0.7rem]">
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
              <span className="text-neutral-500 block text-[0.6rem]">LATENCY</span>
              <span className="font-semibold text-[#38BDF8]">{active.stats.latency}</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
              <span className="text-neutral-500 block text-[0.6rem]">THROUGHPUT</span>
              <span className="font-semibold text-white">{active.stats.throughput}</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
              <span className="text-neutral-500 block text-[0.6rem]">PROTOCOL</span>
              <span className="font-semibold text-neutral-300">{active.stats.protocol}</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
              <span className="text-neutral-500 block text-[0.6rem]">UPTIME</span>
              <span className="font-semibold text-[#10B981]">{active.stats.uptime}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
