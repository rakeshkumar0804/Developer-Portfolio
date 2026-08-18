import React from 'react';
import { FiArrowUpRight, FiExternalLink, FiGithub, FiTerminal } from 'react-icons/fi';

export default function ArchitectureDiagram({ project, index }) {
  const { architecture, name, live, code } = project;
  const figNum = String(index + 1).padStart(2, '0');

  if (!architecture) {
    return null;
  }

  return (
    <div className="arch-panel" aria-label={`System Architecture diagram for ${name}`}>
      <div className="arch-header">
        <div className="arch-header-left">
          <span className="arch-fig-tag">FIG.{figNum} · SYSTEM TOPOLOGY</span>
          <span className="arch-status-pill">
            <span className="arch-pulse-dot" /> STREAMING
          </span>
        </div>
        <span className="arch-schema-id">SCHEMATIC // RK-SYS-{figNum}</span>
      </div>

      <div className="arch-canvas">
        {/* Top Tier: Client Presentation */}
        <div className="arch-node client-node">
          <div className="node-badge">CLIENT LAYER</div>
          <div className="node-title">{architecture.client}</div>
          <div className="node-meta">SPA // Web / Reactive UI</div>
        </div>

        {/* Animated Flow Arrow 1 */}
        <div className="arch-connector-row">
          <div className="flow-line vertical-flow">
            <span className="flow-particle" />
          </div>
          <span className="flow-badge">
            {architecture.links?.[0]?.label || 'HTTPS / JSON'}
          </span>
        </div>

        {/* Middle Tier: Gateway & Services */}
        <div className="arch-tier-grid">
          <div className="arch-node gateway-node">
            <div className="node-badge">SERVICE RUNTIME</div>
            <div className="node-title">{architecture.gateway}</div>
            <div className="node-meta">REST Controllers · Auth Interceptors</div>
          </div>

          <div className="arch-node bus-node">
            <div className="node-badge">MIDDLEWARE / QUEUE</div>
            <div className="node-title">{architecture.bus}</div>
            <div className="node-meta">RBAC Guard · Cache Bus</div>
          </div>
        </div>

        {/* Animated Flow Arrow 2 */}
        <div className="arch-connector-row">
          <div className="flow-line horizontal-flow">
            <span className="flow-particle" />
          </div>
          <span className="flow-badge">
            {architecture.links?.[2]?.label || 'PERSISTENCE / SYNC'}
          </span>
        </div>

        {/* Bottom Tier: Storage & Integrations */}
        <div className="arch-tier-grid">
          <div className="arch-node db-node">
            <div className="node-badge">DATA PERSISTENCE</div>
            <div className="node-title">{architecture.database}</div>
            <div className="node-meta">ACID / Indexed Documents</div>
          </div>

          <div className="arch-node ext-node">
            <div className="node-badge">EXTERNAL / CLOUD</div>
            <div className="node-title">{architecture.external}</div>
            <div className="node-meta">Cloud Edge · Webhooks · APIs</div>
          </div>
        </div>
      </div>

      <div className="arch-footer">
        <a
          href={`${code}/commits/main`}
          target="_blank"
          rel="noreferrer"
          className="arch-action-link"
          aria-label="Reconstruct build history on GitHub"
        >
          <FiTerminal /> RECONSTRUCT BUILD HISTORY
        </a>
        <a
          href={live !== '#' ? live : code}
          target="_blank"
          rel="noreferrer"
          className="arch-action-link primary"
          aria-label="Launch live deployment"
        >
          LIVE SERVICE TELEMETRY <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
}
