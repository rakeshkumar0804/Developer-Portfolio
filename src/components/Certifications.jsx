import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="recognition" className="py-20 relative border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs text-xs font-mono font-bold tracking-widest uppercase text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/25 mb-3">
            <span>06 / FIELD_RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Field Recognition <span className="text-[#38bdf8]">& Credentials</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            Verified technical certifications, competitive programming milestones, and national hackathon participations.
          </p>
        </motion.div>

        {/* Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: cIdx * 0.06 }}
              className="blueprint-panel p-5 sm:p-6 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex flex-col justify-between group hover:border-sky-500/50 transition-all duration-150"
            >
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-br" />

              <div>
                {/* Meta Line */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-sky-500/15 font-mono text-xs">
                  <span className="text-[#fbbf24] font-bold text-[0.65rem] tracking-wider uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[0.62rem] px-1.5 py-0.5 rounded-xs bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/25 font-bold">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-sans text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors flex items-center justify-between gap-2 mb-1">
                  <span>{cert.title}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#94a3b8] hover:text-[#38bdf8] p-1 shrink-0"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-mono text-[#60a5fa] mb-2.5">
                  Issued by: {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-[#94a3b8] font-sans leading-relaxed mb-3.5">
                  {cert.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2.5 border-t border-sky-500/10 flex items-center justify-between font-mono text-[0.62rem] text-[#64748b]">
                <span>CERT_ID: RK-{cIdx + 1}</span>
                <span className="text-[#38bdf8] flex items-center gap-1">
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
