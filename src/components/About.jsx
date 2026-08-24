import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const facts = [
    { label: "Name", value: "Rakesh Kumar" },
    { label: "Location", value: "Gurugram, India" },
    { label: "Education", value: "B.Tech CSE, 2026" },
    { label: "Email", value: "rakeshchauhan6651@gmail.com" },
    { label: "Availability", value: "Open to work" }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 bg-[#0a0a0f]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="font-mono text-sm text-[#6366f1] mb-4">// About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e4e4e7]">Get to know me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div variants={itemVariants} className="space-y-6 text-[#e4e4e7]/90 leading-relaxed text-lg">
            <p>
              I'm a Computer Science graduate (Class of 2026) from Parul University, currently based in Gurugram, India. I specialize in building full-stack web applications using the MERN stack.
            </p>
            <p>
              During my internship at Codetech IT Solutions, I built an Employee Management System with Node.js, Express, MongoDB, and JWT authentication with RBAC. I enjoy turning ideas into clean, functional products.
            </p>
            <p>
              When I'm not coding, I'm solving problems on LeetCode (165+ solved) or participating in hackathons. I'm passionate about clean architecture and writing maintainable code.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-[#111118] border border-[#1e1e2a] rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#e4e4e7]">Quick Facts</h3>
              <ul className="space-y-4">
                {facts.map((fact, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-[#1e1e2a] last:border-0 last:pb-0">
                    <span className="text-[#71717a] w-32 font-medium mb-1 sm:mb-0">{fact.label}</span>
                    <span className="text-[#e4e4e7] font-medium">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
