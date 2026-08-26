import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: custom * 0.05, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="certifications" className="py-16 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Terminal Header Prompt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="text-emerald-400 font-bold">$</span>
            <span>check-credentials --all</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Verified Certifications & Contests
          </h2>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              custom={idx}
              variants={fadeInUp}
              className="p-5 rounded-lg border border-white/[0.1] bg-[#0d1117] flex flex-col justify-between hover:border-[#38bdf8]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06] text-xs">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[0.75rem]">
                    <FiCheckCircle className="text-xs" />
                    {cert.status}
                  </span>
                  <span className="text-slate-500 text-[0.7rem]">CERT-0{cert.id}</span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1 tracking-tight">
                  {cert.title}
                </h3>

                <div className="text-xs text-[#38bdf8] font-sans mb-3">
                  {cert.issuer}
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[0.7rem] text-slate-400">
                <span>Verified Credential</span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#38bdf8] hover:underline flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <FiExternalLink className="text-[0.65rem]" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
