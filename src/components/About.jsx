import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiServer, FiMapPin } from 'react-icons/fi';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-16 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-emerald-400 font-mono mb-1">
            <span className="font-bold">$</span>
            <span>cat about.txt</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            A little about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Terminal Bio Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-[#0B101B]/80 border border-slate-800/80 rounded-xl p-6 shadow-md hover:border-cyan-500/40 transition-all duration-200"
          >
            <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              <p>
                I'm a B.Tech Computer Science Engineering graduate (Class of 2026) from Parul University (Vadodara, Gujarat), based in my hometown of Gurugram, Haryana. I specialize in building and shipping production-ready full-stack web applications with React, TypeScript, Node.js, Express, and MongoDB/PostgreSQL.
              </p>
              <p>
                My engineering focus is on building resilient backend architectures, multi-tenant RBAC systems, stateless JWT auth workflows, and real-time collaborative features using WebSockets. Every project I build is designed with structured RESTful API design, database integrity, and dependable client-side state management.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/60">
              <p className="text-xs text-[#7fa0c7] font-mono italic">
                // Core focus: Multi-tenant RBAC, scalable REST APIs, WebSocket real-time updates, and robust frontend state.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Master Factual Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-3.5"
          >
            {/* Card 1: Projects Shipped */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/80 flex items-start gap-3.5 hover:border-cyan-500/40 transition-all duration-200 shadow-md">
              <div className="h-9 w-9 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-base shrink-0 mt-0.5">
                <FiLayers />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-mono">6+ Projects Shipped</h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">Production-Ready Full-Stack Web Apps</p>
              </div>
            </div>

            {/* Card 2: Architecture & Systems Focus */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/80 flex items-start gap-3.5 hover:border-emerald-500/40 transition-all duration-200 shadow-md">
              <div className="h-9 w-9 rounded-lg bg-[#34d399]/10 border border-[#34d399]/30 flex items-center justify-center text-[#34d399] text-base shrink-0 mt-0.5">
                <FiServer />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white font-mono">System & API Design</h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">RBAC, JWT Auth & Real-Time WebSockets</p>
              </div>
            </div>

            {/* Card 3: Target Role & Location */}
            <div className="p-4 rounded-xl border border-slate-800/80 bg-[#0B101B]/80 flex items-start gap-3.5 hover:border-amber-500/40 transition-all duration-200 shadow-md">
              <div className="h-9 w-9 rounded-lg bg-[#fbbf24]/10 border border-[#fbbf24]/30 flex items-center justify-center text-[#fbbf24] text-base shrink-0 mt-0.5">
                <FiMapPin />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200 font-mono">Gurugram, India</h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">Open to Full-Stack & Backend SDE Roles (Delhi NCR, Hybrid, Remote)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
