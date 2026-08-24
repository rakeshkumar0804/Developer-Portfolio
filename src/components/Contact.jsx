import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setTransmitting(true);
      setTimeout(() => {
        setTransmitting(false);
        setTransmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 900);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.08]">
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
            // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
            Let's build something useful.
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xl font-sans">
            I'm open to fresher SDE roles, internships, freelance projects, and full-stack development opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 premium-card p-7 sm:p-8 rounded-xl border border-white/[0.08] bg-[#131622]/80"
          >
            <h3 className="text-lg font-bold text-white font-sans mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 font-sans mb-6">
              Fill in the form below and I'll get back to you promptly.
            </p>

            {transmitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl mb-4">
                  <FiCheck />
                </div>
                <h4 className="text-lg font-bold text-white font-sans mb-1">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed font-sans">
                  Thank you for reaching out. I have received your message and will respond to your email as soon as possible.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-5 py-2 rounded-lg bg-[#38bdf8] text-[#090a0f] font-semibold text-xs transition-all hover:bg-[#60a5fa] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-white bg-[#090a0f] outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-white/[0.1] focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.name && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-[#f59e0b]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-white bg-[#090a0f] outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-white/[0.1] focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.email && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-[#f59e0b]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rakesh, we have an open full-stack developer role..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-white bg-[#090a0f] outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : 'border-white/[0.1] focus:border-[#38bdf8]'
                    }`}
                  />
                  {errors.message && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-3 rounded-lg bg-[#38bdf8] hover:bg-[#60a5fa] text-[#090a0f] font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-500/10 disabled:opacity-60"
                >
                  {transmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4 font-sans"
          >
            {/* Email Card */}
            <div className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="h-10 w-10 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] text-base shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 font-medium">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white truncate block hover:text-[#38bdf8] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-white/[0.1] hover:border-[#38bdf8] text-slate-400 hover:text-white text-xs transition-colors shrink-0 cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Card (Available on Request) */}
            <div className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="h-10 w-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b] text-base shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone Number</div>
                  <div className="text-sm font-semibold text-slate-200">
                    Available on request
                  </div>
                </div>
              </div>
              <span className="text-xs text-[#f59e0b] font-mono px-2 py-0.5 rounded bg-[#f59e0b]/10">
                Via Form
              </span>
            </div>

            {/* Location Card */}
            <div className="premium-card p-5 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex items-center gap-3.5">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-base shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Location</div>
                <div className="text-sm font-semibold text-slate-200">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Links Bento */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="premium-card p-4 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex items-center gap-2.5 text-slate-300 hover:text-white hover:border-[#38bdf8]/40 transition-colors"
              >
                <FiGithub className="text-lg text-[#38bdf8]" />
                <span className="text-xs font-semibold truncate">GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="premium-card p-4 rounded-xl border border-white/[0.08] bg-[#131622]/80 flex items-center gap-2.5 text-slate-300 hover:text-white hover:border-[#6366f1]/40 transition-colors"
              >
                <FiLinkedin className="text-lg text-indigo-400" />
                <span className="text-xs font-semibold truncate">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
