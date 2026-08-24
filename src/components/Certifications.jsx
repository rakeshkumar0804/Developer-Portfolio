import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="certifications" className="py-24 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#38bdf8] mb-2">
            // Credentials & Awards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Certifications & Recognition
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            Verified industry certifications, academic achievements, and competitive hackathon participations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, cIdx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: cIdx * 0.08 }}
              className="premium-card p-6 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold text-[#38bdf8]">
                    {cert.date}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white p-1"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-sans group-hover:text-[#38bdf8] transition-colors mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs font-medium text-slate-400 mb-3">
                  Issued by: {cert.issuer}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Credential</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <FiCheckCircle className="text-xs" /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
