import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './styles.css';
import {
  profile,
  stats,
  journey,
  projects,
  skills,
  openSourceRepos,
  achievements,
} from './data/portfolio';
import Navbar from './components/Navbar';
import IDEWidget from './components/IDEWidget';
import CustomCursor from './components/CustomCursor';
import MagneticButton from './components/MagneticButton';
import RadiantCard from './components/RadiantCard';
import { playButtonClick } from './utils/audio';
import {
  FiArrowUpRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiGitBranch,
  FiClock,
  FiStar,
  FiFolder,
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom * 0.08,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function App() {
  const [timeStr, setTimeStr] = useState('--:--:--');

  // Live IST Clock for bottom IDE status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setTimeStr(now.toLocaleTimeString('en-GB', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#EDEDED] font-sans selection:bg-[#C6FF3D] selection:text-[#0A0A0B] flex flex-col justify-between overflow-x-hidden">
      {/* Hardware-Accelerated Custom Cursor */}
      <CustomCursor />

      {/* Subtle Background Noise Texture */}
      <div className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-30" />

      {/* Global Navigation Bar */}
      <Navbar />

      <main className="relative z-10 pt-28 md:pt-36 flex-1 w-full">
        {/* =================================================================
           SECTION 1: HERO SECTION (THE WORKSPACE & CODE-EDITOR WIDGET)
           ================================================================= */}
        <section id="hero" className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-6 md:pt-10 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Personal Positioning & Real Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow Label */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeInUp}
                className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF3D]" />
                <span>FULL-STACK DEVELOPER</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDEDED] font-sans leading-[1.05]"
              >
                Rakesh Kumar
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl font-sans font-medium text-[#D4D4D8] leading-relaxed max-w-2xl"
              >
                Building scalable web applications, RESTful APIs, and responsive user interfaces with the MERN stack.
              </motion.p>

              {/* Bio */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeInUp}
                className="mt-4 text-sm sm:text-base font-sans text-[#9E9EA8] leading-relaxed max-w-xl"
              >
                B.Tech CSE 2026 graduate actively seeking full-time software engineering roles. Focused on clean architecture, reliable database design, and predictable backend services.
              </motion.p>

              {/* Magnetic Action CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={5}
                variants={fadeInUp}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <MagneticButton
                  href="#projects"
                  onClick={playButtonClick}
                  className="px-6 py-3.5 rounded-xl bg-[#C6FF3D] text-[#0A0A0B] text-sm font-sans font-bold hover:bg-[#B8F230] shadow-[0_0_25px_rgba(198,255,61,0.25)] hover:shadow-[0_0_35px_rgba(198,255,61,0.4)]"
                >
                  <span className="flex items-center gap-2">
                    <span>View Projects</span>
                    <FiArrowUpRight className="text-base" />
                  </span>
                </MagneticButton>

                <MagneticButton
                  href="https://github.com/rakeshkumar0804"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playButtonClick}
                  className="px-5 py-3.5 rounded-xl border border-[#232329] bg-[#121215] text-sm font-sans font-medium text-[#EDEDED] hover:border-[#EDEDED]/40 hover:bg-[#16161A]"
                >
                  <span className="flex items-center gap-2">
                    <FiFileText className="text-[#9E9EA8]" />
                    <span>Resume</span>
                  </span>
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  onClick={playButtonClick}
                  className="px-5 py-3.5 rounded-xl border border-[#232329] bg-[#121215] text-sm font-sans font-medium text-[#EDEDED] hover:border-[#C6FF3D]/50 hover:text-[#C6FF3D]"
                >
                  <span className="flex items-center gap-2">
                    <FiMail className="text-[#9E9EA8]" />
                    <span>Get in Touch</span>
                  </span>
                </MagneticButton>
              </motion.div>

              {/* Real Stats Row (4 Tiles) */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={6}
                variants={fadeInUp}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((stat, i) => (
                  <RadiantCard
                    key={i}
                    className="p-4 flex flex-col justify-between"
                    glowColor="rgba(198, 255, 61, 0.12)"
                  >
                    <div className="font-mono text-xl sm:text-2xl font-bold text-[#EDEDED]">
                      {stat.val}
                    </div>
                    <div className="mt-1.5 font-sans text-xs text-[#9E9EA8]">
                      {stat.label}
                    </div>
                  </RadiantCard>
                ))}
              </motion.div>
            </div>

            {/* Right Column: The Signature Interactive Code-Editor Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <IDEWidget />
            </motion.div>
          </div>
        </section>

        {/* =================================================================
           SECTION 2: ABOUT (EDITORIAL PULL-QUOTE & MINDSET)
           ================================================================= */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-4">
            <span>// ABOUT & MINDSET</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
            {/* Left Pull Quote Block */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 border-l-2 border-[#C6FF3D] pl-6 sm:pl-8 py-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-sans font-medium text-[#EDEDED] leading-snug tracking-tight">
                "I treat code as living infrastructure — prioritizing predictable API contracts, database integrity, and shipping intuitive user interfaces."
              </p>
              <div className="mt-5 font-mono text-xs text-[#80808C] uppercase tracking-wider">
                — Engineering Mindset
              </div>
            </motion.div>

            {/* Right Narrative Paragraphs */}
            <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-6 text-sm sm:text-base font-sans text-[#9E9EA8] leading-relaxed">
              <p>
                I am a final-year Computer Science Engineering student (Class of 2026) based in Gurugram, India. My engineering focus centers on building reliable backends with Node.js, Express, and MongoDB, paired with responsive, accessible React and TypeScript interfaces.
              </p>
              <p>
                Whether designing role-based access control systems, optimizing MongoDB aggregation pipelines, or integrating LLM triage workflows, I emphasize clean separation of concerns, defensive error handling, and maintainable architectures.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 3: EXPERIENCE & EDUCATION (VERTICAL TIMELINE)
           ================================================================= */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-4">
            <span>// TIMELINE</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight mb-14">
            Experience & Education
          </motion.h2>

          <div className="relative pl-6 sm:pl-8 md:pl-10 border-l border-[#232329] space-y-12 max-w-4xl">
            {journey.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#0A0A0B] bg-[#232329] group-hover:bg-[#C6FF3D] group-hover:shadow-[0_0_10px_#C6FF3D] transition-all" />

                <RadiantCard className="p-7" glowColor="rgba(198, 255, 61, 0.12)">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#C6FF3D]">
                        {item.period}
                      </span>
                      <span className="text-[#50505A]">·</span>
                      <span className="text-xs font-mono text-[#80808C] uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#EDEDED] font-sans">
                    {item.role} <span className="text-[#9E9EA8] font-normal">— {item.company}</span>
                  </h3>

                  <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-[#9E9EA8] font-sans leading-relaxed">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="text-[#C6FF3D] text-xs mt-1.5 shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </RadiantCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 4: PROJECTS (CORE SHOWCASE & FLOW DIAGRAMS)
           ================================================================= */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold">
              <span>// SELECTED PROJECTS</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="font-mono text-xs text-[#80808C]">
              6 Production Projects
            </motion.div>
          </div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight mb-14">
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((proj) => (
              <RadiantCard
                key={proj.id}
                className="p-8 flex flex-col justify-between group shadow-lg"
                glowColor="rgba(198, 255, 61, 0.14)"
              >
                <div>
                  {/* Top Category & Links */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#80808C] mb-4">
                    <span className="tracking-wider uppercase text-[#9E9EA8] font-medium">
                      {proj.category}
                    </span>
                    <div className="flex items-center gap-3">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={playButtonClick}
                          className="text-[#9E9EA8] hover:text-[#C6FF3D] transition-colors p-1"
                          aria-label={`GitHub for ${proj.title}`}
                        >
                          <FiGithub className="text-lg" />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={playButtonClick}
                          className="flex items-center gap-1 text-xs text-[#EDEDED] hover:text-[#C6FF3D] transition-colors p-1"
                          aria-label={`Live Demo for ${proj.title}`}
                        >
                          <span>Demo</span>
                          <FiArrowUpRight className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#EDEDED] font-sans group-hover:text-[#C6FF3D] transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#9E9EA8] font-sans mt-3.5 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Horizontal Architectural Flow Diagram */}
                  {proj.flow && (
                    <div className="mt-6 p-3.5 rounded-xl border border-[#232329] bg-[#0E0E11] font-mono text-[0.7rem] select-none">
                      <div className="text-[0.62rem] uppercase tracking-wider text-[#80808C] mb-2.5 font-semibold">
                        ARCHITECTURAL FLOW
                      </div>
                      <div className="flex items-center gap-2 flex-wrap text-[#D4D4D8]">
                        {proj.flow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2.5 py-1 rounded bg-[#16161A] border border-[#232329] text-[#EDEDED]">
                              {step}
                            </span>
                            {sIdx < proj.flow.length - 1 && (
                              <FiArrowRight className="text-[#C6FF3D] shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-8 pt-5 border-t border-[#232329]/70">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-[#16161A] border border-[#232329] text-xs font-mono text-[#9E9EA8] group-hover:border-[#32323A] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 5: SKILLS GRID (#skills)
           ================================================================= */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-4">
            <span>// TECHNICAL SKILLS</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight mb-14">
            Languages & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skillGroup, idx) => (
              <RadiantCard
                key={idx}
                className="p-7 flex flex-col justify-between"
                glowColor="rgba(198, 255, 61, 0.12)"
              >
                <div>
                  <h3 className="text-base font-bold text-[#EDEDED] font-sans mb-5 flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#C6FF3D]" />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg border border-[#232329] bg-[#16161A] text-xs font-mono text-[#EDEDED] hover:border-[#C6FF3D]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 6: GITHUB / OPEN SOURCE (#github)
           ================================================================= */}
        <motion.section
          id="github"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold">
              <span>// OPEN SOURCE & REPOSITORIES</span>
            </motion.div>
            <motion.a
              variants={fadeInUp}
              href="https://github.com/rakeshkumar0804"
              target="_blank"
              rel="noreferrer"
              onClick={playButtonClick}
              className="flex items-center gap-1.5 text-xs font-mono text-[#9E9EA8] hover:text-[#C6FF3D] transition-colors"
            >
              <span>View all on GitHub</span>
              <FiArrowUpRight />
            </motion.a>
          </div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight mb-14">
            Code Repositories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {openSourceRepos.map((repo) => (
              <RadiantCard
                key={repo.name}
                className="p-7 flex flex-col justify-between group shadow-md"
                glowColor="rgba(198, 255, 61, 0.12)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#80808C] mb-3.5">
                    <span className="flex items-center gap-2 text-[#EDEDED]">
                      <FiFolder className="text-[#C6FF3D]" />
                      <span className="font-bold truncate">{repo.name}</span>
                    </span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playButtonClick}
                      className="text-[#9E9EA8] hover:text-[#C6FF3D] p-1"
                      aria-label={`Open ${repo.name}`}
                    >
                      <FiArrowUpRight className="group-hover:text-[#C6FF3D] transition-colors" />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9E9EA8] font-sans leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#232329] flex items-center justify-between text-xs font-mono text-[#80808C]">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FiStar className="text-xs" />
                    <span>{repo.stars}</span>
                  </span>
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 7: CERTIFICATIONS & ACHIEVEMENTS (#achievements)
           ================================================================= */}
        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-4">
            <span>// CREDENTIALS & ACHIEVEMENTS</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] font-sans tracking-tight mb-14">
            Certifications & Milestones
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {achievements.map((item) => (
              <RadiantCard
                key={item.id}
                className="p-7 flex flex-col justify-between group shadow-md"
                glowColor="rgba(198, 255, 61, 0.12)"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#80808C] mb-3.5">
                    <span className="tracking-wider uppercase text-[#9E9EA8]">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full border border-[#C6FF3D]/30 bg-[#C6FF3D]/10 text-xs text-[#C6FF3D] font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#EDEDED] font-sans group-hover:text-[#C6FF3D] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playButtonClick}
                        className="text-[#9E9EA8] hover:text-[#C6FF3D] p-1"
                        aria-label={`Verify ${item.title}`}
                      >
                        <FiArrowUpRight className="text-base" />
                      </a>
                    )}
                  </h3>

                  <div className="text-xs font-mono text-[#9E9EA8] mt-1.5">
                    Issued by {item.issuer}
                  </div>

                  <p className="text-sm text-[#9E9EA8] font-sans mt-3.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </RadiantCard>
            ))}
          </div>
        </motion.section>

        {/* =================================================================
           SECTION 8: CONTACT WORKSPACE (#contact)
           ================================================================= */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 border-t border-neutral-800/60"
        >
          <RadiantCard
            className="p-8 sm:p-12 md:p-16"
            glowColor="rgba(198, 255, 61, 0.2)"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-[#C6FF3D] tracking-widest uppercase font-semibold mb-4">
              <span>// CONTACT WORKSPACE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#EDEDED] font-sans tracking-tight mb-5 max-w-3xl">
              Let's connect — open to full-time roles & engineering discussions.
            </h2>

            <p className="text-base sm:text-lg text-[#9E9EA8] max-w-2xl mb-12">
              Actively interviewing for Full-Stack Developer & Software Engineer positions (Immediate Joiner / CSE 2026 Grad).
            </p>

            {/* Direct Connect Magnetic Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <MagneticButton
                href={`mailto:${profile.email}`}
                onClick={playButtonClick}
                className="w-full p-6 rounded-2xl border border-[#232329] bg-[#16161A] hover:border-[#C6FF3D] transition-colors group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-[#80808C]">
                  <span className="flex items-center gap-2">
                    <FiMail className="text-[#C6FF3D]" /> EMAIL
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#C6FF3D] transition-colors" />
                </div>
                <div className="mt-4 text-xs sm:text-sm font-semibold text-[#EDEDED] truncate w-full">
                  {profile.email}
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-6 rounded-2xl border border-[#232329] bg-[#16161A] hover:border-[#C6FF3D] transition-colors group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-[#80808C]">
                  <span className="flex items-center gap-2">
                    <FiGithub className="text-[#C6FF3D]" /> GITHUB
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#C6FF3D] transition-colors" />
                </div>
                <div className="mt-4 text-xs sm:text-sm font-semibold text-[#EDEDED] w-full">
                  @{profile.githubUsername}
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-6 rounded-2xl border border-[#232329] bg-[#16161A] hover:border-[#C6FF3D] transition-colors group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-[#80808C]">
                  <span className="flex items-center gap-2">
                    <FiLinkedin className="text-[#C6FF3D]" /> LINKEDIN
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#C6FF3D] transition-colors" />
                </div>
                <div className="mt-4 text-xs sm:text-sm font-semibold text-[#EDEDED] w-full">
                  in/rakesh-kumar
                </div>
              </MagneticButton>

              <MagneticButton
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={playButtonClick}
                className="w-full p-6 rounded-2xl border border-[#232329] bg-[#16161A] hover:border-[#C6FF3D] transition-colors group flex flex-col justify-between text-left"
              >
                <div className="w-full flex items-center justify-between text-xs font-mono text-[#80808C]">
                  <span className="flex items-center gap-2">
                    <SiLeetcode className="text-[#FFA116]" /> LEETCODE
                  </span>
                  <FiArrowUpRight className="group-hover:text-[#C6FF3D] transition-colors" />
                </div>
                <div className="mt-4 text-xs sm:text-sm font-semibold text-[#EDEDED] w-full">
                  165+ Solved
                </div>
              </MagneticButton>
            </div>
          </RadiantCard>
        </motion.section>
      </main>

      {/* =================================================================
         BOTTOM IDE STATUS BAR FOOTER
         ================================================================= */}
      <footer className="relative z-10 border-t border-[#232329] bg-[#0E0E11] px-6 sm:px-8 md:px-12 lg:px-16 py-4 font-mono text-xs text-[#80808C] select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C6FF3D]">
              <FiGitBranch className="text-xs" />
              <span>git: main · ready</span>
            </span>
            <span className="text-[#32323A]">·</span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-xs text-[#9E9EA8]" />
              <span className="tabular-nums">{timeStr} IST</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[0.72rem]">
            <span>© 2026 Rakesh Kumar · The Workspace Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
