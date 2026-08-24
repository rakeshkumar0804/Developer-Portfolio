import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="recognition" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-mono text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-3 tracking-widest uppercase">
            <span>06 / FIELD_RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            Field Recognition
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            Verified industry certifications, competitive programming credentials, and hackathon participations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: cIdx * 0.06 }}
              className="blueprint-card p-6 rounded-xs flex flex-col justify-between group"
            >
              <div>
                {/* Meta Line */}
                <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-white/[0.05] font-mono text-xs">
                  <span className="text-[#fbbf24] text-[0.65rem] uppercase">
                    {cert.category}
                  </span>
                  <span className="text-[0.62rem] text-[#38bdf8]">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors flex items-center justify-between gap-2 mb-1">
                  <span>{cert.title}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-[#38bdf8] p-0.5"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </h3>

                <div className="text-xs font-mono text-slate-400 mb-2">
                  Issued by: {cert.issuer}
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                  {cert.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-2.5 border-t border-white/[0.04] flex items-center justify-between font-mono text-[0.6rem] text-slate-500">
                <span>CERT_ID: RK-{cIdx + 1}</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
