import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    // Simulate successful submission
    setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="bg-[#0a0a0f] py-24 px-6 text-[#e4e4e7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#6366f1] font-mono text-sm tracking-wider uppercase block mb-2">
            // Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-[#71717a] max-w-2xl text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#111118] border border-[#1e1e2a] rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#71717a] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#111118] border border-[#1e1e2a] rounded-xl px-4 py-3 text-[#e4e4e7] focus:border-[#6366f1] outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#71717a] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111118] border border-[#1e1e2a] rounded-xl px-4 py-3 text-[#e4e4e7] focus:border-[#6366f1] outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#71717a] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#111118] border border-[#1e1e2a] rounded-xl px-4 py-3 text-[#e4e4e7] focus:border-[#6366f1] outline-none transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm ${status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: <FiMail />, label: 'Email', value: 'rakeshchauhan6651@gmail.com', href: 'mailto:rakeshchauhan6651@gmail.com' },
              { icon: <FiGithub />, label: 'GitHub', value: '@rakeshkumar0804', href: 'https://github.com/rakeshkumar0804' },
              { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Rakesh Kumar', href: 'https://www.linkedin.com/in/rakesh-kumar-520754246/' },
              { icon: <SiLeetcode />, label: 'LeetCode', value: '165+ Solved', href: 'https://leetcode.com/u/Rakesh__Kumar_/' },
              { icon: <FiMapPin />, label: 'Location', value: 'Gurugram, India', href: null }
            ].map((info, index) => {
              const CardContent = (
                <motion.div
                  variants={itemVariants}
                  className={`bg-[#111118] border border-[#1e1e2a] rounded-2xl p-6 flex items-center gap-4 transition-colors ${info.href ? 'hover:border-[#6366f1]' : ''}`}
                >
                  <div className="bg-[#0a0a0f] p-4 rounded-xl border border-[#1e1e2a] text-[#6366f1]">
                    {React.cloneElement(info.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="block text-sm text-[#71717a] font-medium mb-1">{info.label}</span>
                    <span className="text-[#e4e4e7] font-medium">{info.value}</span>
                  </div>
                </motion.div>
              );

              return info.href ? (
                <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                  {CardContent}
                </a>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
