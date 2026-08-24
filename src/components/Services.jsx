import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiLayers, FiPenTool, FiCheckCircle, FiTool } from 'react-icons/fi';
import { services } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { isDark } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  const getServiceIcon = (icon) => {
    switch (icon) {
      case 'layout':
        return <FiLayout className="text-xl text-indigo-400" />;
      case 'server':
        return <FiServer className="text-xl text-sky-400" />;
      case 'layers':
        return <FiLayers className="text-xl text-violet-400" />;
      case 'pen-tool':
        return <FiPenTool className="text-xl text-emerald-400" />;
      case 'tool':
        return <FiTool className="text-xl text-amber-400" />;
      default:
        return <FiLayout className="text-xl text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <span>What I Deliver</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Engineering Services & </span>
            <span className="text-gradient-accent">Solutions</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            End-to-end development services tailored for modern web applications, scalable architectures, and responsive user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className={`p-7 rounded-2xl border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 hover:shadow-xl shadow-sm'
              }`}
            >
              <div>
                {/* Service Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-200 group-hover:scale-105 ${
                    isDark ? 'bg-slate-800 border-white/[0.08]' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold font-sans mb-3 group-hover:text-indigo-400 transition-colors ${
                    isDark ? 'text-slate-100' : 'text-slate-900'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {service.deliverables.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs">
                      <FiCheckCircle className="text-indigo-400 text-xs shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
