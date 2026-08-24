import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'LeaveFlow HR',
    category: 'Enterprise System',
    featured: true,
    description: 'Enterprise Leave Management System with role-based portals for Employees, Managers, and Admins. Features a comprehensive dashboard for leave tracking, approvals, and reporting.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    live: 'https://leaveflow-hr-hvfh.onrender.com/',
    github: 'https://github.com/rakeshkumar0804/leaveflow-hr'
  },
  {
    title: 'IncidentHub AI',
    category: 'Platform',
    featured: false,
    description: 'Real-time incident triage platform with webhook ingestion and LLM categorization. Automates the categorization of incoming issues.',
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Gemini API'],
    live: 'https://incidenthub-ai-web.vercel.app/',
    github: 'https://github.com/rakeshkumar0804/incidenthub-ai'
  },
  {
    title: 'Kohli Analytics',
    category: 'Dashboard',
    featured: false,
    description: 'Sports statistics dashboard with interactive charts visualizing player performance and historical match data.',
    tags: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Tailwind CSS'],
    live: 'https://kohli-analytics.vercel.app/',
    github: 'https://github.com/rakeshkumar0804/kohli-analytics'
  },
  {
    title: 'TaskFlow Pro',
    category: 'Application',
    featured: false,
    description: 'Real-time collaborative task board utilizing WebSockets for instant updates across multiple users in a workspace.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    live: '',
    github: 'https://github.com/rakeshkumar0804/taskflow'
  },
  {
    title: 'PortfolioPulse',
    category: 'Tool',
    featured: false,
    description: 'Developer portfolio auditor and GitHub profile parser to analyze and present developer statistics.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub API'],
    live: 'https://developer-portfolio-nu-rouge.vercel.app/',
    github: 'https://github.com/rakeshkumar0804/dev-portfolio-checker'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 bg-[#0a0a0f] text-[#e4e4e7]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#6366f1] font-mono text-sm mb-4">// Selected Work</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-[#111118] border border-[#1e1e2a] rounded-2xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[#6366f1]/10 w-full"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-[#1e1e2a] text-[#6366f1] text-xs font-medium rounded-full mb-6">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-[#71717a] text-lg mb-8 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#0a0a0f] border border-[#1e1e2a] text-[#e4e4e7] text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-lg transition-colors font-medium">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#1e1e2a] hover:bg-[#272737] text-white rounded-lg transition-colors font-medium border border-[#272737]">
                    <FiGithub /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.featured).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#111118] border border-[#1e1e2a] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[#6366f1]/10 flex flex-col h-full justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#1e1e2a] text-[#6366f1] text-xs font-medium rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#71717a] mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#0a0a0f] border border-[#1e1e2a] text-[#e4e4e7] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#e4e4e7] hover:text-[#6366f1] transition-colors font-medium">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#e4e4e7] hover:text-[#6366f1] transition-colors font-medium">
                    <FiGithub /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
