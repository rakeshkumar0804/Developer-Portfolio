import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function ContactConsole() {
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
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
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
    <section id="comms" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-14"
        >
          <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-mono text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-3 tracking-widest uppercase">
            <span>07 / ESTABLISH_COMMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f8fafc]">
            Establish Comms
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-xl text-slate-400 font-sans">
            Recruiters, founders, and teams — if you need someone who can build clean interfaces, reliable APIs, and full-stack systems, the channel is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Column: Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 blueprint-card p-7 sm:p-8 rounded-xs"
          >
            <div className="micro-corner-tl" />

            <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.05] font-mono text-xs text-slate-400">
              <span>TRANSMISSION CONSOLE</span>
              <span className="text-[0.65rem]">SECURE TLS</span>
            </div>

            {transmitted ? (
              <div className="py-8 flex flex-col items-center justify-center text-center font-mono">
                <div className="w-10 h-10 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-lg mb-3">
                  <FiCheck />
                </div>
                <h3 className="text-base font-bold font-sans text-[#f8fafc] mb-1">
                  Message Dispatched (200 OK)
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mb-4 leading-relaxed font-sans">
                  Payload received. I will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-1.5 rounded-xs bg-[#38bdf8] text-[#030712] font-mono text-xs font-semibold hover:bg-[#60a5fa] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[0.65rem] text-slate-400 uppercase tracking-wider mb-1">
                      Name <span className="text-[#fbbf24]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Recruiter / Founder"
                      className={`w-full px-3 py-2 rounded-xs border text-xs text-slate-200 bg-[#02050c] outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-white/[0.08] focus:border-[#38bdf8]/50'
                      }`}
                    />
                    {errors.name && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[0.65rem] text-slate-400 uppercase tracking-wider mb-1">
                      Email <span className="text-[#fbbf24]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@company.com"
                      className={`w-full px-3 py-2 rounded-xs border text-xs text-slate-200 bg-[#02050c] outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-white/[0.08] focus:border-[#38bdf8]/50'
                      }`}
                    />
                    {errors.email && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[0.65rem] text-slate-400 uppercase tracking-wider mb-1">
                    Message <span className="text-[#fbbf24]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rakesh, we are looking for a Full-Stack Developer..."
                    className={`w-full px-3 py-2 rounded-xs border text-xs text-slate-200 bg-[#02050c] outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : 'border-white/[0.08] focus:border-[#38bdf8]/50'
                    }`}
                  />
                  {errors.message && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-2.5 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-mono text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {transmitting ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Initiate Transmission</span>
                      <FiSend className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-3"
          >
            {/* Email Uplink */}
            <div className="blueprint-card p-5 rounded-xs flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] text-sm shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0 font-mono">
                  <div className="text-[0.6rem] text-slate-500 uppercase">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-slate-200 font-medium truncate block hover:text-[#38bdf8] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-xs border border-white/[0.08] hover:border-[#38bdf8]/40 text-slate-400 hover:text-[#38bdf8] text-xs transition-colors shrink-0 cursor-pointer"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Channel (Available on Request) */}
            <div className="blueprint-card p-5 rounded-xs flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#fbbf24]/10 border border-[#fbbf24]/20 flex items-center justify-center text-[#fbbf24] text-sm shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-[0.6rem] text-slate-500 uppercase">Phone</div>
                  <div className="text-xs text-slate-300 font-medium">
                    Available on request
                  </div>
                </div>
              </div>
              <span className="text-[0.6rem] text-[#fbbf24] px-1.5 py-0.5 rounded bg-[#fbbf24]/10">
                VIA FORM
              </span>
            </div>

            {/* Base Station / Location */}
            <div className="blueprint-card p-5 rounded-xs flex items-center gap-3 font-mono">
              <div className="w-8 h-8 rounded-xs bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className="text-[0.6rem] text-slate-500 uppercase">Location</div>
                <div className="text-xs text-slate-300 font-medium">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* GitHub & LinkedIn Channels */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="blueprint-card p-3.5 rounded-xs flex items-center gap-2 text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors"
              >
                <FiGithub className="text-sm text-[#38bdf8]" />
                <span className="truncate">@{personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="blueprint-card p-3.5 rounded-xs flex items-center gap-2 text-slate-400 hover:text-[#60a5fa] hover:border-[#60a5fa]/40 transition-colors"
              >
                <FiLinkedin className="text-sm text-[#60a5fa]" />
                <span className="truncate">in/rakesh-kumar</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
