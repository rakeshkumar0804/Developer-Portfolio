import React, { useState, useEffect, useRef } from 'react';
import { FiFolder, FiCheck, FiGitBranch, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { SiTypescript, SiMarkdown, SiJson, SiGnubash } from 'react-icons/si';
import { playKeyTick, playButtonClick, isAudioEnabled, setAudioEnabled } from '../utils/audio';

const FILE_CONTENTS = {
  'skills.ts': {
    title: 'skills.config.ts',
    lang: 'TypeScript',
    icon: SiTypescript,
    iconColor: '#38bdf8',
    targetId: 'skills',
    lines: [
      { type: 'comment', text: '// Developer configuration & runtime specs' },
      { parts: [
        { text: 'export const ', cls: 'text-[#C6FF3D] font-semibold' },
        { text: 'developer', cls: 'text-[#EDEDED]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: 'Engineer', cls: 'text-[#7DD3FC]' },
        { text: ' = {', cls: 'text-[#EDEDED]' },
      ]},
      { indent: 2, parts: [
        { text: 'name', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Rakesh Kumar"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'role', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Full-Stack Developer"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'graduating', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"CSE Class of 2026"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'location', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Gurugram, India"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'stack', cls: 'text-[#9E9EA8]' },
        { text: ': [', cls: 'text-[#80808C]' },
        { text: '"React"', cls: 'text-[#38BDF8]' },
        { text: ', ', cls: 'text-[#80808C]' },
        { text: '"Node.js"', cls: 'text-[#4ADE80]' },
        { text: ', ', cls: 'text-[#80808C]' },
        { text: '"Express"', cls: 'text-[#EDEDED]' },
        { text: ', ', cls: 'text-[#80808C]' },
        { text: '"MongoDB"', cls: 'text-[#34D399]' },
        { text: '],', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'status', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"open_to_work"', cls: 'text-[#C6FF3D] font-medium' },
        { text: ',', cls: 'text-[#80808C]' },
      ]},
      { indent: 2, parts: [
        { text: 'focus', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '["Scalable APIs", "Full-Stack Web", "Clean UI"]', cls: 'text-[#E2E8F0]' },
      ]},
      { type: 'close', text: '};' },
    ],
  },
  'about.md': {
    title: 'about.md',
    lang: 'Markdown',
    icon: SiMarkdown,
    iconColor: '#7dd3fc',
    targetId: 'about',
    lines: [
      { parts: [{ text: '# About Rakesh Kumar', cls: 'text-[#C6FF3D] font-bold text-sm' }] },
      { type: 'comment', text: '> Engineering with rigor, shipping with velocity.' },
      { parts: [{ text: '' }] },
      { parts: [{ text: '- **Background**', cls: 'text-[#7DD3FC]' }, { text: ': B.Tech CSE, Class of 2026', cls: 'text-[#EDEDED]' }] },
      { parts: [{ text: '- **Core Stack**', cls: 'text-[#7DD3FC]' }, { text: ': React, Node.js, Express, MongoDB, TS', cls: 'text-[#EDEDED]' }] },
      { parts: [{ text: '- **Focus**', cls: 'text-[#7DD3FC]' }, { text: ': Scalable APIs, RBAC, Clean UI', cls: 'text-[#EDEDED]' }] },
      { parts: [{ text: '- **Mindset**', cls: 'text-[#7DD3FC]' }, { text: ': Code is living infrastructure', cls: 'text-[#A3E635]' }] },
      { parts: [{ text: '' }] },
      { type: 'comment', text: '/* Open for immediate hiring & full-time engineering */' },
    ],
  },
  'experience.json': {
    title: 'experience.json',
    lang: 'JSON',
    icon: SiJson,
    iconColor: '#facc15',
    targetId: 'experience',
    lines: [
      { parts: [{ text: '{', cls: 'text-[#EDEDED]' }] },
      { indent: 2, parts: [
        { text: '"internship"', cls: 'text-[#C6FF3D]' },
        { text: ': {', cls: 'text-[#EDEDED]' }
      ]},
      { indent: 4, parts: [
        { text: '"company"', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Codetech IT Solutions"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' }
      ]},
      { indent: 4, parts: [
        { text: '"period"', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Jan 2026 – Apr 2026"', cls: 'text-[#A3E635]' },
        { text: ',', cls: 'text-[#80808C]' }
      ]},
      { indent: 4, parts: [
        { text: '"shipped"', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"Employee Management System (RBAC)"', cls: 'text-[#7DD3FC]' }
      ]},
      { indent: 2, parts: [
        { text: '},', cls: 'text-[#EDEDED]' }
      ]},
      { indent: 2, parts: [
        { text: '"education"', cls: 'text-[#C6FF3D]' },
        { text: ': {', cls: 'text-[#EDEDED]' }
      ]},
      { indent: 4, parts: [
        { text: '"degree"', cls: 'text-[#9E9EA8]' },
        { text: ': ', cls: 'text-[#80808C]' },
        { text: '"B.Tech Computer Science (2022–2026)"', cls: 'text-[#A3E635]' }
      ]},
      { indent: 2, parts: [{ text: '}', cls: 'text-[#EDEDED]' }] },
      { parts: [{ text: '}', cls: 'text-[#EDEDED]' }] },
    ],
  },
  'projects/': {
    title: 'projects.manifest.json',
    lang: 'JSON',
    icon: FiFolder,
    iconColor: '#c6ff3d',
    targetId: 'projects',
    lines: [
      { parts: [{ text: '// Shipped Production Systems', cls: 'text-[#64748B] italic' }] },
      { parts: [{ text: '[', cls: 'text-[#EDEDED]' }] },
      { indent: 2, parts: [{ text: '{ "name": ', cls: 'text-[#9E9EA8]' }, { text: '"IncidentHub AI"', cls: 'text-[#C6FF3D]' }, { text: ', "type": "AI Incident Triage" },', cls: 'text-[#80808C]' }] },
      { indent: 2, parts: [{ text: '{ "name": ', cls: 'text-[#9E9EA8]' }, { text: '"Kohli Analytics"', cls: 'text-[#7DD3FC]' }, { text: ', "type": "D3.js Sports Engine" },', cls: 'text-[#80808C]' }] },
      { indent: 2, parts: [{ text: '{ "name": ', cls: 'text-[#9E9EA8]' }, { text: '"PortfolioPulse"', cls: 'text-[#A3E635]' }, { text: ', "type": "Auditing Tool" },', cls: 'text-[#80808C]' }] },
      { indent: 2, parts: [{ text: '{ "name": ', cls: 'text-[#9E9EA8]' }, { text: '"LeaveFlow HR"', cls: 'text-[#FACC15]' }, { text: ', "type": "RBAC Workflow" },', cls: 'text-[#80808C]' }] },
      { indent: 2, parts: [{ text: '{ "name": ', cls: 'text-[#9E9EA8]' }, { text: '"TaskFlow Pro"', cls: 'text-[#EDEDED]' }, { text: ', "type": "Socket.io Collab" }', cls: 'text-[#80808C]' }] },
      { parts: [{ text: ']', cls: 'text-[#EDEDED]' }] },
    ],
  },
  'contact.sh': {
    title: 'contact.sh',
    lang: 'Bash',
    icon: SiGnubash,
    iconColor: '#4ade80',
    targetId: 'contact',
    lines: [
      { type: 'comment', text: '#!/usr/bin/env bash' },
      { type: 'comment', text: '# Initiate engineer contact stream' },
      { parts: [
        { text: 'curl', cls: 'text-[#C6FF3D] font-bold' },
        { text: ' -X POST https://api.rakesh.dev/v1/contact \\', cls: 'text-[#EDEDED]' },
      ]},
      { indent: 2, parts: [
        { text: '-H ', cls: 'text-[#7DD3FC]' },
        { text: '"Content-Type: application/json" \\', cls: 'text-[#A3E635]' },
      ]},
      { indent: 2, parts: [
        { text: '-d ', cls: 'text-[#7DD3FC]' },
        { text: '\'{ "email": "rakeshchauhan6651@gmail.com", "open_to_work": true }\'', cls: 'text-[#FACC15]' },
      ]},
      { parts: [{ text: '' }] },
      { type: 'comment', text: '# Response: 200 OK — Ready to collaborate.' },
    ],
  },
};

const FILE_KEYS = ['skills.ts', 'about.md', 'experience.json', 'projects/', 'contact.sh'];

export default function IDEWidget() {
  const [activeFileKey, setActiveFileKey] = useState('skills.ts');
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  const [soundOn, setSoundOn] = useState(() => isAudioEnabled());

  const activeFileData = FILE_CONTENTS[activeFileKey] || FILE_CONTENTS['skills.ts'];
  const timerRef = useRef(null);

  // Progressive typing effect with cancellation debounce & sound tick
  useEffect(() => {
    setDisplayedLineCount(0);
    if (timerRef.current) clearInterval(timerRef.current);

    let count = 0;
    const total = activeFileData.lines.length;

    timerRef.current = setInterval(() => {
      count++;
      setDisplayedLineCount(count);
      playKeyTick();

      if (count >= total) {
        clearInterval(timerRef.current);
      }
    }, 70);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeFileKey]);

  const handleTabClick = (key) => {
    playButtonClick();
    setActiveFileKey(key);
    const target = document.getElementById(FILE_CONTENTS[key]?.targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setAudioEnabled(nextState);
    if (nextState) {
      playButtonClick();
    }
  };

  const TabIcon = activeFileData.icon;

  return (
    <div className="relative w-full rounded-2xl border border-[#232329] bg-[#121215] shadow-2xl overflow-hidden font-mono text-xs select-none group">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-[#C6FF3D]/5 blur-3xl opacity-50 transition-opacity group-hover:opacity-75" />

      {/* Window Chrome Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#232329] bg-[#16161A] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56] opacity-80 hover:opacity-100 transition-opacity" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E] opacity-80 hover:opacity-100 transition-opacity" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F] opacity-80 hover:opacity-100 transition-opacity" />
        </div>

        {/* Tab title */}
        <div className="flex items-center gap-2 rounded-md bg-[#121215] px-3 py-1 text-xs text-[#EDEDED] border border-[#232329]">
          <TabIcon style={{ color: activeFileData.iconColor }} className="text-xs" />
          <span>{activeFileData.title}</span>
        </div>

        {/* Audio Toggle + Live Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle audio effects"
            title={soundOn ? 'Sound On (Click to mute)' : 'Sound Muted (Click to enable)'}
            className={`p-1.5 rounded-md border transition-all ${
              soundOn
                ? 'border-[#C6FF3D]/60 bg-[#C6FF3D]/10 text-[#C6FF3D]'
                : 'border-[#232329] bg-[#121215] text-[#80808C] hover:text-[#EDEDED]'
            }`}
          >
            {soundOn ? <FiVolume2 className="text-xs" /> : <FiVolumeX className="text-xs" />}
          </button>

          <div className="flex items-center gap-1.5 text-[0.65rem] text-[#80808C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF3D] animate-ping" />
            <span className="text-[#C6FF3D] font-semibold">LIVE</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Body: File Tree Sidebar + Code Pane */}
      <div className="relative z-10 flex flex-col sm:flex-row min-h-[320px] bg-[#0E0E11]">
        {/* Left File Tree Sidebar */}
        <div className="w-full sm:w-44 shrink-0 border-b sm:border-b-0 sm:border-r border-[#232329] bg-[#121215]/60 p-3 flex flex-col justify-between">
          <div>
            <div className="text-[0.62rem] font-bold text-[#80808C] uppercase tracking-wider mb-2.5 px-2">
              WORKSPACE EXPLORER
            </div>
            <div className="space-y-1">
              {FILE_KEYS.map((key) => {
                const file = FILE_CONTENTS[key];
                const Icon = file.icon;
                const isActive = activeFileKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleTabClick(key)}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[0.72rem] transition-all text-left ${
                      isActive
                        ? 'bg-[#232329] text-[#C6FF3D] font-medium border-l-2 border-[#C6FF3D]'
                        : 'text-[#9E9EA8] hover:bg-[#1A1A20] hover:text-[#EDEDED]'
                    }`}
                  >
                    <Icon style={{ color: file.iconColor }} className="text-xs shrink-0" />
                    <span className="truncate">{key}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:block pt-3 border-t border-[#232329]/60 px-2 text-[0.62rem] text-[#80808C]">
            <span>Click file to jump ↗</span>
          </div>
        </div>

        {/* Right Code Pane with generous padding and clean scroll */}
        <div className="flex-1 min-w-0 p-4 sm:p-5 overflow-x-auto bg-[#0E0E11] text-xs sm:text-[0.82rem] font-mono leading-relaxed">
          <div className="space-y-1.5 min-w-[340px] pr-4">
            {activeFileData.lines.slice(0, displayedLineCount).map((line, idx) => (
              <div key={idx} className="flex items-start">
                <span className="w-6 shrink-0 text-right pr-3 text-[#50505A] text-[0.72rem] select-none">
                  {idx + 1}
                </span>
                <div className="flex-1 whitespace-pre" style={{ paddingLeft: line.indent ? `${line.indent * 0.75}rem` : '0' }}>
                  {line.type === 'comment' ? (
                    <span className="text-[#64748B] italic">{line.text}</span>
                  ) : line.type === 'close' ? (
                    <span className="text-[#EDEDED]">{line.text}</span>
                  ) : line.parts ? (
                    line.parts.map((part, pIdx) => (
                      <span key={pIdx} className={part.cls}>
                        {part.text}
                      </span>
                    ))
                  ) : null}
                  {idx === displayedLineCount - 1 && (
                    <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-[#C6FF3D] animate-pulse align-middle" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#232329] bg-[#16161A] px-4 py-2 text-[0.68rem] text-[#80808C]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[#C6FF3D]">
            <FiGitBranch className="text-xs" />
            <span>main</span>
          </span>
          <span className="text-[#50505A]">·</span>
          <span>MERN Stack</span>
          <span className="text-[#50505A]">·</span>
          <span>{activeFileData.lang}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span className="text-[#50505A]">·</span>
          <span className="text-[#4ADE80] flex items-center gap-1">
            <FiCheck className="text-xs" /> 0 errors
          </span>
        </div>
      </div>
    </div>
  );
}
