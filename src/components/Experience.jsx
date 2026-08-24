import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    title: 'Web Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    points: [
      'Built Employee Management System with Node.js, Express, MongoDB, JWT',
      'Implemented RBAC and performance tracking'
    ]
  },
  {
    title: 'B.Tech Computer Science',
    company: 'Parul University',
    period: '2022 – 2026',
    points: [
      'Graduated with coursework in DS, DBMS, Computer Networks, Cloud Computing',
      '165+ LeetCode problems solved'
    ]
  }
];

const certifications = [
  { title: 'HackerRank SQL (Advanced)', status: 'Verified', statusColor: 'bg-[#1e1e2a] text-green-400 border-green-500/30' },
  { title: 'OpenEDG CPA (C++)', status: 'Certified', statusColor: 'bg-[#1e1e2a] text-blue-400 border-blue-500/30' },
  { title: 'LeetCode 165+ Solved', status: 'Active', statusColor: 'bg-[#1e1e2a] text-orange-400 border-orange-500/30' },
  { title: 'Hackathons', status: 'AMENTIS @ GTBIT, CodeKshetra @ GD Goenka', statusColor: 'bg-[#1e1e2a] text-purple-400 border-purple-500/30' }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-24 bg-[#0a0a0f] text-[#e4e4e7]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-[#6366f1] font-mono text-sm mb-4">// Experience & Education</p>
        <h2 className="text-4xl md:text-5xl font-bold">My Journey</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Timeline */}
        <div className="lg:col-span-7">
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-[39px] top-0 bottom-0 w-[2px] bg-[#1e1e2a]"></div>
            
            <div className="space-y-12">
              {experience.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative md:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-[31px] top-1.5 w-[18px] h-[18px] rounded-full bg-[#111118] border-2 border-[#6366f1] group-hover:bg-[#6366f1] transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10"></div>
                  
                  <div className="bg-[#111118] border border-[#1e1e2a] rounded-2xl p-6 transition-all duration-300 hover:border-[#6366f1]/50 ml-6 md:ml-0 relative">
                    <div className="inline-block px-3 py-1 bg-[#1e1e2a] text-[#e4e4e7] text-xs font-mono rounded-md mb-4 border border-[#272737]">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-[#6366f1] font-medium mb-4">{item.company}</h4>
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-[#71717a] flex items-start">
                          <span className="text-[#6366f1] mr-2 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-[#6366f1] text-lg">✦</span> Achievements & Certs
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-[#111118] border border-[#1e1e2a] rounded-xl p-5 hover:border-[#272737] transition-colors">
                  <h4 className="font-semibold text-[#e4e4e7] mb-3 text-sm md:text-base">{cert.title}</h4>
                  <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded border ${cert.statusColor}`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
