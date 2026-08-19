import React from 'react';

export default function ArchitectureDiagram({ project, index }) {
  const { architecture } = project;

  // Topology node configurations for projects
  const topologies = {
    0: { // IncidentHub AI / SYS-01
      edges: [
        { d: 'M 8 22 L 24 22 L 24 46 L 40 46', label: 'HTTPS', lx: '24%', ly: '34%', delay: '0s' },
        { d: 'M 8 70 L 24 70 L 24 46 L 40 46', label: 'verify', lx: '24%', ly: '58%', delay: '0.4s' },
        { d: 'M 40 46 L 56 46 L 56 22 L 72 22', label: 'stream', lx: '56%', ly: '34%', delay: '0.8s' },
        { d: 'M 40 46 L 66 46 L 66 50 L 92 50', label: 'CRUD', lx: '66%', ly: '48%', delay: '1.2s' },
        { d: 'M 72 22 L 82 22 L 82 50 L 92 50', label: 'sync', lx: '82%', ly: '36%', delay: '1.6s' },
        { d: 'M 40 46 L 56 46 L 56 74 L 72 74', label: 'cache', lx: '56%', ly: '60%', delay: '0.2s' },
      ],
      nodes: [
        { x: '8%', y: '22%', title: 'React 19 SPA', sub: 'Tailwind UI', color: 'var(--cyan)' },
        { x: '8%', y: '70%', title: 'Auth / JWT', sub: 'RBAC Guard', color: 'var(--paper-dim)' },
        { x: '40%', y: '46%', title: 'Express API', sub: 'Node Services', color: 'var(--cyan-bright)' },
        { x: '72%', y: '22%', title: 'Socket.io', sub: 'Real-time Hub', color: 'var(--cyan-bright)' },
        { x: '92%', y: '50%', title: 'Postgres DB', sub: 'Prisma / ACID', color: 'var(--amber)' },
        { x: '72%', y: '74%', title: 'Redis Cache', sub: 'Incident Queue', color: 'var(--paper-dim)' },
      ],
    },
    1: { // Dev Portfolio Health Checker / SYS-02
      edges: [
        { d: 'M 8 24 L 21 24 L 21 48 L 34 48', label: 'route', lx: '21%', ly: '36%', delay: '0s' },
        { d: 'M 8 72 L 21 72 L 21 48 L 34 48', label: 'eval', lx: '21%', ly: '60%', delay: '0.4s' },
        { d: 'M 34 48 L 46 48 L 46 26 L 58 26', label: 'parse', lx: '46%', ly: '37%', delay: '0.8s' },
        { d: 'M 58 26 L 58 26 L 58 72 L 58 72', label: 'infer', lx: '58%', ly: '49%', delay: '1.2s' },
        { d: 'M 58 26 L 72 26 L 72 28 L 86 28', label: 'CRUD', lx: '72%', ly: '27%', delay: '1.6s' },
        { d: 'M 58 72 L 72 72 L 72 28 L 86 28', label: 'store', lx: '72%', ly: '49%', delay: '0s' },
      ],
      nodes: [
        { x: '8%', y: '24%', title: 'Next.js App', sub: 'SSR Audit', color: 'var(--cyan)' },
        { x: '8%', y: '72%', title: 'DOM Parser', sub: 'Cheerio / AST', color: 'var(--cyan)' },
        { x: '34%', y: '48%', title: 'Audit Engine', sub: 'Scoring Alg', color: 'var(--paper-dim)' },
        { x: '58%', y: '26%', title: 'Node API', sub: 'Lighthouse API', color: 'var(--cyan-bright)' },
        { x: '58%', y: '72%', title: 'Gemini AI', sub: 'Portfolio Tips', color: 'var(--amber-bright)' },
        { x: '86%', y: '28%', title: 'MongoDB', sub: 'Audit Archive', color: 'var(--amber)' },
      ],
    },
    2: { // Kohli Analytics / SYS-03
      edges: [
        { d: 'M 8 26 L 24 26 L 24 48 L 40 48', label: 'socket', lx: '24%', ly: '37%', delay: '0s' },
        { d: 'M 8 72 L 24 72 L 24 48 L 40 48', label: 'sync', lx: '24%', ly: '60%', delay: '0.4s' },
        { d: 'M 40 48 L 55 48 L 55 24 L 70 24', label: 'stream', lx: '55%', ly: '36%', delay: '0.8s' },
        { d: 'M 40 48 L 66 48 L 66 50 L 92 50', label: 'render', lx: '66%', ly: '49%', delay: '1.2s' },
        { d: 'M 70 24 L 81 24 L 81 50 L 92 50', label: 'vector', lx: '81%', ly: '37%', delay: '1.6s' },
      ],
      nodes: [
        { x: '8%', y: '26%', title: 'React 19 TS', sub: 'D3.js Charts', color: 'var(--cyan)' },
        { x: '8%', y: '72%', title: 'GSAP Motion', sub: 'Timeline UI', color: 'var(--cyan)' },
        { x: '40%', y: '48%', title: 'Stats Engine', sub: 'Career Data', color: 'var(--cyan-bright)' },
        { x: '70%', y: '24%', title: 'Vector Viz', sub: 'Shot Trajectory', color: 'var(--cyan-bright)' },
        { x: '92%', y: '50%', title: 'JSON Stream', sub: 'Match DB', color: 'var(--amber)' },
      ],
    },
    3: { // LeaveFlow HR / SYS-04
      edges: [
        { d: 'M 8 22 L 24 22 L 24 46 L 40 46', label: 'HTTPS', lx: '24%', ly: '34%', delay: '0s' },
        { d: 'M 8 70 L 24 70 L 24 46 L 40 46', label: 'auth', lx: '24%', ly: '58%', delay: '0.4s' },
        { d: 'M 40 46 L 56 46 L 56 22 L 72 22', label: 'notify', lx: '56%', ly: '34%', delay: '0.8s' },
        { d: 'M 40 46 L 66 46 L 66 50 L 92 50', label: 'CRUD', lx: '66%', ly: '48%', delay: '1.2s' },
      ],
      nodes: [
        { x: '8%', y: '22%', title: 'React Dashboard', sub: 'Employee Portal', color: 'var(--cyan)' },
        { x: '8%', y: '70%', title: 'Role Guard', sub: 'Manager/HR', color: 'var(--paper-dim)' },
        { x: '40%', y: '46%', title: 'Express Server', sub: 'Approval Logic', color: 'var(--cyan-bright)' },
        { x: '72%', y: '22%', title: 'Nodemailer', sub: 'Email Triggers', color: 'var(--cyan-bright)' },
        { x: '92%', y: '50%', title: 'MongoDB Atlas', sub: 'Leave Balances', color: 'var(--amber)' },
      ],
    },
    4: { // TaskFlow / SYS-05
      edges: [
        { d: 'M 8 24 L 21 24 L 21 48 L 34 48', label: 'route', lx: '21%', ly: '36%', delay: '0s' },
        { d: 'M 8 72 L 21 72 L 21 48 L 34 48', label: 'drag', lx: '21%', ly: '60%', delay: '0.4s' },
        { d: 'M 34 48 L 58 48 L 58 26 L 72 26', label: 'CRUD', lx: '58%', ly: '37%', delay: '0.8s' },
        { d: 'M 34 48 L 58 48 L 58 72 L 72 72', label: 'assign', lx: '58%', ly: '60%', delay: '1.2s' },
      ],
      nodes: [
        { x: '8%', y: '24%', title: 'Kanban SPA', sub: 'Framer Motion', color: 'var(--cyan)' },
        { x: '8%', y: '72%', title: 'Sprint Board', sub: 'Filter/Sort', color: 'var(--cyan)' },
        { x: '34%', y: '48%', title: 'Node REST API', sub: 'Task Controllers', color: 'var(--cyan-bright)' },
        { x: '72%', y: '26%', title: 'MongoDB', sub: 'Card Collection', color: 'var(--amber)' },
        { x: '72%', y: '72%', title: 'Activity Log', sub: 'Audit Trail', color: 'var(--paper-dim)' },
      ],
    },
    5: { // EMS Core / SYS-06
      edges: [
        { d: 'M 8 26 L 24 26 L 24 48 L 40 48', label: 'HTTPS', lx: '24%', ly: '37%', delay: '0s' },
        { d: 'M 8 72 L 24 72 L 24 48 L 40 48', label: 'RBAC', lx: '24%', ly: '60%', delay: '0.4s' },
        { d: 'M 40 48 L 66 48 L 66 50 L 92 50', label: 'CRUD', lx: '66%', ly: '49%', delay: '0.8s' },
      ],
      nodes: [
        { x: '8%', y: '26%', title: 'Admin Client', sub: 'Employee Master', color: 'var(--cyan)' },
        { x: '8%', y: '72%', title: 'JWT Token', sub: 'Secure Headers', color: 'var(--paper-dim)' },
        { x: '40%', y: '48%', title: 'Core Server', sub: 'Department API', color: 'var(--cyan-bright)' },
        { x: '92%', y: '50%', title: 'Postgres DB', sub: 'Relational Store', color: 'var(--amber)' },
      ],
    },
  };

  const topo = topologies[index % 6];

  return (
    <div className="diagram relative h-full w-full select-none overflow-hidden rounded border border-line-faint bg-ink-800/40">
      <div className="pointer-events-none absolute inset-0 rounded blueprint-grid opacity-60" />
      <div className="absolute inset-0 origin-top-left">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {topo.edges.map((edge, eIdx) => (
            <g key={eIdx}>
              <path
                className="edge"
                d={edge.d}
                pathLength="1"
                fill="none"
                stroke="var(--line-dim)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                className="flow"
                d={edge.d}
                pathLength="1"
                fill="none"
                stroke="var(--cyan-bright)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="0.04 0.3"
                style={{ animationDelay: edge.delay }}
              />
            </g>
          ))}
        </svg>

        {/* Edge Labels */}
        {topo.edges.map((edge, eIdx) => (
          <span
            key={eIdx}
            className="tech-label pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 bg-ink-900/80 px-1 text-[0.55rem] text-cyan"
            style={{ left: edge.lx, top: edge.ly }}
          >
            {edge.label}
          </span>
        ))}

        {/* Node Cards */}
        {topo.nodes.map((node, nIdx) => (
          <div
            key={nIdx}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <div
              className="flex min-w-[5rem] flex-col items-center rounded-sm border bg-ink-900/90 px-2.5 py-1.5 backdrop-blur"
              style={{ borderColor: node.color }}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="node-dot h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: node.color,
                    boxShadow: `0 0 6px ${node.color}`,
                  }}
                />
                <span className="font-display text-xs font-semibold text-paper">
                  {node.title}
                </span>
              </div>
              <span className="tech-label mt-0.5 text-[0.5rem] tracking-[0.15em]">
                {node.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
