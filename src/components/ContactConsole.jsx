import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiCopy, FiCheck, FiTerminal } from 'react-icons/fi';
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'CALLSIGN / NAME REQUIRED';
    if (!formData.email.trim()) {
      errs.email = 'COMMS UPLINK / EMAIL REQUIRED';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'INVALID EMAIL FORMAT';
    }
    if (!formData.message.trim()) errs.message = 'PAYLOAD MESSAGE REQUIRED';
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
      }, 1000);
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
    <section id="comms" className="py-20 relative border-t border-sky-500/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-12"
        >
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xs text-xs font-mono font-bold tracking-widest uppercase text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/25 mb-3">
            <span>07 / ESTABLISH_COMMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-sans text-[#f8fafc]">
            Let's build <span className="text-[#38bdf8]">something ambitious.</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base max-w-2xl text-[#94a3b8] font-sans">
            Recruiters, founders, and teams — if you need someone who can build clean interfaces, reliable APIs, and full-stack systems, the channel is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Column: Direct Comms Transmission Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 blueprint-panel p-6 sm:p-8 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 relative"
          >
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            <div className="flex items-center justify-between pb-3 mb-5 border-b border-sky-500/15 font-mono text-xs">
              <span className="text-[#38bdf8] font-bold flex items-center gap-2">
                <FiTerminal /> TRANSMISSION_CONSOLE
              </span>
              <span className="text-[#94a3b8] text-[0.65rem]">CHANNEL: SECURE_TLS</span>
            </div>

            {transmitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center font-mono">
                <div className="w-12 h-12 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] text-xl mb-3.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  <FiCheckCircle />
                </div>
                <h3 className="text-lg font-bold font-sans text-[#f8fafc] mb-1.5">
                  TRANSMISSION DISPATCHED // 200 OK
                </h3>
                <p className="text-xs text-[#94a3b8] max-w-md mb-5 leading-relaxed">
                  Payload received and indexed into operator queue. A prompt response will be transmitted to your email.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-2 rounded-xs bg-[#38bdf8] text-[#030712] font-mono text-xs font-bold hover:bg-[#60a5fa] transition-all cursor-pointer"
                >
                  [ NEW TRANSMISSION ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[0.65rem] text-[#94a3b8] uppercase tracking-wider mb-1 font-bold">
                      OPERATOR_NAME <span className="text-[#fbbf24]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Recruiter / Engineering Lead"
                      className={`w-full px-3 py-2.5 rounded-xs border text-xs text-[#f8fafc] bg-[#030712] outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-sky-500/30 focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.name && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[0.65rem] text-[#94a3b8] uppercase tracking-wider mb-1 font-bold">
                      UPLINK_EMAIL <span className="text-[#fbbf24]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@techcorp.com"
                      className={`w-full px-3 py-2.5 rounded-xs border text-xs text-[#f8fafc] bg-[#030712] outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/10'
                          : 'border-sky-500/30 focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.email && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message Payload */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[0.65rem] text-[#94a3b8] uppercase tracking-wider font-bold">
                      MESSAGE_PAYLOAD <span className="text-[#fbbf24]">*</span>
                    </label>
                    <span className="text-[0.6rem] text-[#64748b]">
                      {formData.message.length} BYTES
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rakesh, we have an open full-stack role..."
                    className={`w-full px-3 py-2.5 rounded-xs border text-xs text-[#f8fafc] bg-[#030712] outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/10'
                        : 'border-sky-500/30 focus:border-[#38bdf8]'
                    }`}
                  />
                  {errors.message && <p className="text-[0.62rem] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-2.5 rounded-xs bg-[#38bdf8] hover:bg-[#60a5fa] text-[#030712] font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {transmitting ? (
                    <span>DISPATCHING PACKETS...</span>
                  ) : (
                    <>
                      <span>[ INITIATE TRANSMISSION ▶ ]</span>
                      <FiSend className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Telemetry Channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-3"
          >
            {/* Email Uplink */}
            <div className="blueprint-panel p-4 sm:p-5 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex items-center justify-between group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xs bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-base shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0 font-mono">
                  <div className="text-[0.6rem] text-[#94a3b8] uppercase">COMMS_EMAIL</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-[#f8fafc] font-semibold truncate block hover:text-[#38bdf8] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-xs border border-sky-500/30 hover:border-[#38bdf8] text-[#94a3b8] hover:text-[#38bdf8] text-xs transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Channel (Available on Request) */}
            <div className="blueprint-panel p-4 sm:p-5 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-[#fbbf24]/10 border border-[#fbbf24]/30 flex items-center justify-center text-[#fbbf24] text-base shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-[0.6rem] text-[#94a3b8] uppercase">PHONE_CHANNEL</div>
                  <div className="text-xs text-[#f8fafc] font-semibold">
                    Available on request
                  </div>
                </div>
              </div>
              <span className="text-[0.62rem] text-[#fbbf24] px-1.5 py-0.5 rounded bg-[#fbbf24]/10 border border-[#fbbf24]/30">
                VIA CONTACT FORM
              </span>
            </div>

            {/* Base Station / Location */}
            <div className="blueprint-panel p-4 sm:p-5 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex items-center gap-3 font-mono">
              <div className="w-9 h-9 rounded-xs bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-base shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className="text-[0.6rem] text-[#94a3b8] uppercase">PRIMARY_BASE</div>
                <div className="text-xs text-[#f8fafc] font-semibold">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* GitHub & LinkedIn Channels */}
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="blueprint-panel p-3.5 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] hover:border-sky-500/50 transition-colors"
              >
                <FiGithub className="text-base text-[#38bdf8]" />
                <span className="truncate">@{personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="blueprint-panel p-3.5 rounded-xs border border-sky-500/20 bg-[#060e1c]/85 flex items-center gap-2 text-[#94a3b8] hover:text-[#60a5fa] hover:border-sky-500/50 transition-colors"
              >
                <FiLinkedin className="text-base text-[#60a5fa]" />
                <span className="truncate">in/rakesh-kumar</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
