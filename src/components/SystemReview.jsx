import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import { systemReviewChecklist, personalInfo } from '../data/portfolioData';

export default function SystemReview() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="hud-panel p-8 sm:p-12 rounded-sm border border-[#38cfff]/40 bg-[#06101f]/90 relative shadow-[0_0_40px_rgba(6,16,31,0.9)]"
        >
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#50aaff]/20 font-mono text-xs">
            <span className="text-[#38cfff] font-bold tracking-wider">
              09 // FINAL_SYSTEM_REVIEW_AUDIT
            </span>
            <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              ALL_CHECKS_PASSED
            </span>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10 font-mono text-xs">
            {systemReviewChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-sm border border-[#50aaff]/20 bg-[#020712] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400 text-sm shrink-0" />
                  <span className="text-[#8aa4bf] text-[0.68rem] uppercase">{item.label}</span>
                </div>
                <span className="text-[#38cfff] font-bold text-[0.65rem]">{item.status}</span>
              </div>
            ))}
          </div>

          {/* Two Large Action CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Initiate Comms Card */}
            <a
              href="#comms"
              onClick={(e) => handleNavClick(e, '#comms')}
              className="p-6 rounded-sm border border-[#38cfff]/60 bg-[#38cfff]/10 hover:bg-[#38cfff] text-[#e6f1ff] hover:text-[#020712] flex items-center justify-between group transition-all duration-200 shadow-[0_0_20px_rgba(56,207,255,0.2)]"
            >
              <div>
                <div className="text-[0.68rem] font-mono font-bold text-[#38cfff] group-hover:text-[#020712] mb-1">
                  DIRECT TRANSMISSION
                </div>
                <div className="text-xl font-bold font-sans">
                  Initiate Contact Channel
                </div>
                <div className="text-xs font-mono opacity-80 mt-1">
                  {personalInfo.email}
                </div>
              </div>
              <FiArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Download Resume Card */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-sm border border-[#50aaff]/30 bg-[#020712] hover:border-[#ffb23f] text-[#e6f1ff] flex items-center justify-between group transition-all duration-200"
            >
              <div>
                <div className="text-[0.68rem] font-mono font-bold text-[#ffb23f] mb-1">
                  DOCUMENTATION ARCHIVE
                </div>
                <div className="text-xl font-bold font-sans">
                  Download Official Resume
                </div>
                <div className="text-xs font-mono text-[#8aa4bf] mt-1">
                  Verified Software Engineer PDF
                </div>
              </div>
              <FiDownload className="text-2xl text-[#ffb23f] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
