import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { deployedSystems } from '../data/portfolioData';

function ArchitectureDiagram({ nodes, id }) {
  const visibleNodes = nodes.slice(0, 6);
  return (
    <div className="relative overflow-hidden rounded-xl border border-sky-400/15 bg-[#07111f] p-5 sm:p-7">
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.08) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="relative mb-8 flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-[0.65rem] tracking-wider text-slate-400">
        <span>FIG.{id} / SYSTEM ARCHITECTURE</span>
        <span className="flex items-center gap-1.5 text-emerald-400"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> ACTIVE FLOW</span>
      </div>
      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
        {visibleNodes.map((node, index) => (
          <React.Fragment key={node.label}>
            <div className={`min-h-[4.5rem] rounded-md border px-3 py-3 font-mono ${index === visibleNodes.length - 1 ? 'border-amber-400/50 bg-amber-400/[0.06]' : 'border-sky-400/35 bg-[#0a1727]'}`}>
              <div className="mb-1 flex items-center gap-1.5 text-[0.62rem] text-slate-500"><i className={`h-1.5 w-1.5 ${index === visibleNodes.length - 1 ? 'bg-amber-400' : 'bg-sky-400'}`} /> NODE_{String(index + 1).padStart(2, '0')}</div>
              <strong className="block text-[0.72rem] text-slate-100 sm:text-xs">{node.label}</strong>
              <span className="mt-1 block text-[0.6rem] uppercase tracking-wider text-slate-500">{node.type}</span>
            </div>
            {index < visibleNodes.length - 1 && <div className="h-px border-t border-dashed border-sky-400/70" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/[0.08] py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-16 border-b border-white/[0.08] pb-7">
          <p className="mb-3 font-mono text-xs font-semibold tracking-[0.18em] text-[#f59e0b]">02 / DEPLOYED SYSTEMS</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">Production-grade systems built around real workflows.</h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">Production-grade systems, dashboards, and workflows with real APIs, auth, data models, and deployment.</p>
          </div>
        </div>
        <div className="space-y-18 sm:space-y-24">
          {deployedSystems.map((system, index) => {
            const diagramFirst = index % 2 === 1;
            return (
              <motion.article key={system.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="grid grid-cols-1 items-center gap-9 border-b border-white/[0.08] pb-18 lg:grid-cols-2 lg:gap-14">
                <div className={diagramFirst ? 'lg:order-2' : ''}>
                  <div className="mb-4 flex items-center justify-between font-mono text-[0.68rem] tracking-wider"><span className="font-bold text-slate-300">{system.systemId.replace('_', '-')}</span><span className="flex items-center gap-1.5 text-emerald-400"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> {system.status}</span></div>
                  <p className="mb-3 font-mono text-[0.66rem] font-semibold tracking-[0.13em] text-[#38bdf8]">{system.category}</p>
                  <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{system.title}</h3><p className="mt-1 text-base font-medium text-slate-300">{system.subtitle}</p><p className="mt-5 text-sm leading-relaxed text-slate-400">{system.description}</p>
                  <div className="mt-6 grid grid-cols-2 divide-x divide-white/[0.08] overflow-hidden rounded-lg border border-white/[0.08] bg-[#090a0f] sm:grid-cols-4">{system.metrics.map((metric) => <div key={metric.label} className="p-3 text-center"><b className="block text-sm text-[#38bdf8]">{metric.value}</b><span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-wider text-slate-500">{metric.label}</span></div>)}</div>
                  <ul className="mt-6 grid gap-2 text-sm text-slate-300">{system.highlights.map((item) => <li key={item} className="flex gap-2"><span className="text-[#f59e0b]">↗</span>{item}</li>)}</ul>
                  <div className="mt-6 flex flex-wrap gap-2">{system.tech.map((item) => <span key={item} className="rounded border border-white/[0.1] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.67rem] text-slate-300">{item}</span>)}</div>
                  <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs"><a href={system.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-white/[0.13] px-4 py-2.5 text-slate-200 transition-colors hover:border-[#38bdf8] hover:text-white"><FiGithub /> Source</a><a href={system.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-[#38bdf8] px-4 py-2.5 font-semibold text-[#090a0f] transition-colors hover:bg-[#7dd3fc]">Live Demo <FiExternalLink /></a></div>
                </div>
                <div className={diagramFirst ? 'lg:order-1' : ''}><ArchitectureDiagram nodes={system.architectureNodes} id={index + 1} /></div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
