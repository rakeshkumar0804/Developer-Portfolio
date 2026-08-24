import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-10 bg-[#0a0a0f] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column - Content */}
          <motion.div 
            className="w-full lg:w-3/5 flex flex-col items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[#e4e4e7] text-sm tracking-wide">Available for opportunities</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e4e4e7] leading-tight mb-4 font-sans">
              Hi, I'm <br className="hidden sm:block lg:hidden" />
              <span className="text-[#6366f1]">Rakesh Kumar</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl text-[#6366f1] font-medium mb-6">
              Full-Stack Developer
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#71717a] max-w-lg mb-8 leading-relaxed text-base sm:text-lg">
              I build scalable, responsive, and user-centric web applications. 
              Passionate about clean code, modern architecture, and solving complex problems.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#projects" className="px-6 py-3 bg-[#6366f1] text-white rounded-md font-medium hover:bg-[#4f46e5] transition-colors shadow-lg shadow-[#6366f1]/20">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-[#1e1e2a] text-[#e4e4e7] rounded-md font-medium hover:bg-[#111118] transition-colors">
                Contact Me
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 text-[#71717a] hover:text-[#6366f1] transition-colors font-medium">
                <FiDownload />
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-8 border-t border-[#1e1e2a] pt-8 w-full max-w-md">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#e4e4e7]">6+</span>
                <span className="text-xs text-[#71717a] uppercase tracking-wider mt-1 font-mono">Projects</span>
              </div>
              <div className="w-px h-8 bg-[#1e1e2a]"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#e4e4e7]">165+</span>
                <span className="text-xs text-[#71717a] uppercase tracking-wider mt-1 font-mono">LeetCode</span>
              </div>
              <div className="w-px h-8 bg-[#1e1e2a]"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#e4e4e7]">2+</span>
                <span className="text-xs text-[#71717a] uppercase tracking-wider mt-1 font-mono">Hackathons</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* CSS animated abstract blob */}
              <div className="absolute inset-0 bg-[#6366f1]/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-[#6366f1]/40 to-transparent rounded-[40%_60%_70%_30%] animate-[spin_8s_linear_infinite] blur-xl"></div>
              <div className="absolute inset-8 bg-gradient-to-bl from-[#818cf8]/30 to-transparent rounded-[60%_40%_30%_70%] animate-[spin_12s_linear_infinite_reverse] blur-lg"></div>
              <div className="absolute inset-0 border border-[#1e1e2a] rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
