import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="certifications" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#ffb23f] bg-[#ffb23f]/10 border border-[#ffb23f]/30 mb-3">
            <span>07 // VERIFIED_CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Certifications <span className="text-[#38cfff]">& Recognition</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            Verified technical certifications, competitive programming milestones, and national hackathon participations.
          </p>
        </motion.div>

        {/* 6 Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: cIdx * 0.08 }}
              className="hud-panel p-6 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex flex-col justify-between group hover:border-[#38cfff]/60 hover:shadow-[0_0_20px_rgba(56,207,255,0.12)] transition-all duration-200"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                {/* Meta Line */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#50aaff]/15 font-mono text-xs">
                  <span className="text-[#ffb23f] font-bold text-[0.68rem] tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[0.65rem] px-2 py-0.5 rounded-sm bg-[#38cfff]/10 text-[#38cfff] border border-[#38cfff]/30 font-bold">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-sans text-[#e6f1ff] group-hover:text-[#38cfff] transition-colors flex items-center justify-between gap-2 mb-1">
                  <span>{cert.title}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8aa4bf] hover:text-[#38cfff] p-1 shrink-0"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-mono text-[#5fa8ff] mb-3">
                  Issued by: {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-[#8aa4bf] font-sans leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#50aaff]/10 flex items-center justify-between font-mono text-[0.65rem] text-[#536d88]">
                <span>CERT_ID: RK-{cIdx + 1}</span>
                <span className="text-[#38cfff] flex items-center gap-1">
                  <FiCheckCircle className="text-xs" /> VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
