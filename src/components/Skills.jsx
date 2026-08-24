import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-[#6366f1]",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Redux/Zustand", "Framer Motion"]
    },
    {
      title: "Backend",
      color: "bg-emerald-500",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets/Socket.io", "JWT Auth", "RBAC"]
    },
    {
      title: "Databases",
      color: "bg-blue-500",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose ODM", "Prisma ORM"]
    },
    {
      title: "DevOps & Tools",
      color: "bg-purple-500",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "VS Code", "Linux"]
    }
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 bg-[#0a0a0f]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <p className="font-mono text-sm text-[#6366f1] mb-4">// Skills & Technologies</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e4e4e7]">My Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#111118] border border-[#1e1e2a] rounded-2xl p-6 transition-colors hover:border-[#3f3f46]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2.5 h-2.5 rounded-full ${category.color}`}></div>
                <h3 className="text-lg font-semibold text-[#e4e4e7]">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium text-[#e4e4e7] bg-[#0a0a0f] border border-[#1e1e2a] rounded-full hover:border-[#6366f1] hover:text-[#6366f1] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
