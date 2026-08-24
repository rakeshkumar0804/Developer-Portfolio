import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiLayers, FiPenTool } from 'react-icons/fi';

const services = [
  {
    icon: <FiLayout className="w-8 h-8 text-[#6366f1]" />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible UIs with React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: <FiServer className="w-8 h-8 text-[#6366f1]" />,
    title: 'Backend Development',
    description: 'Designing RESTful APIs and server-side logic with Node.js, Express, and MongoDB.',
  },
  {
    icon: <FiLayers className="w-8 h-8 text-[#6366f1]" />,
    title: 'Full-Stack Web Apps',
    description: 'End-to-end application development from database design to deployment.',
  },
  {
    icon: <FiPenTool className="w-8 h-8 text-[#6366f1]" />,
    title: 'UI/UX Design',
    description: 'Creating clean, intuitive interfaces focused on user experience.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const Services = () => {
  return (
    <section id="services" className="bg-[#0a0a0f] py-24 px-6 text-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#6366f1] font-mono text-sm tracking-wider uppercase block mb-2">
            // What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-[#111118] border border-[#1e1e2a] hover:border-[#6366f1] rounded-2xl p-8 transition-colors duration-300"
            >
              <div className="mb-6 bg-[#0a0a0f] w-16 h-16 rounded-xl flex items-center justify-center border border-[#1e1e2a]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#71717a] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
