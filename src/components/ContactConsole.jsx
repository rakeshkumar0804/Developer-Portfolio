import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiCopy, FiCheck, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function ContactConsole() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
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
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
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
    <section id="comms" className="py-24 relative border-t border-[#50aaff]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-mono font-bold tracking-widest uppercase text-[#38cfff] bg-[#38cfff]/10 border border-[#38cfff]/30 mb-3">
            <span>08 // ESTABLISH_COMMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#e6f1ff]">
            Let's build <span className="text-[#38cfff]">something ambitious.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl text-[#8aa4bf] font-sans">
            Recruiters, founders, and teams — if you need someone who can build clean interfaces, reliable APIs, and full-stack systems, the channel is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Comms Transmission Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7 hud-panel p-7 sm:p-9 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 relative"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#50aaff]/15 font-mono text-xs">
              <span className="text-[#38cfff] font-bold flex items-center gap-2">
                <FiTerminal /> TRANSMISSION_CONSOLE
              </span>
              <span className="text-[#8aa4bf] text-[0.68rem]">CHANNEL: SECURE_TLS</span>
            </div>

            {transmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-sm bg-[#38cfff]/10 border border-[#38cfff]/40 flex items-center justify-center text-[#38cfff] text-2xl mb-4 shadow-[0_0_20px_rgba(56,207,255,0.3)]">
                  <FiCheckCircle />
                </div>
                <h3 className="text-xl font-bold font-sans text-[#e6f1ff] mb-2">
                  TRANSMISSION DISPATCHED // 200 OK
                </h3>
                <p className="text-xs font-mono text-[#8aa4bf] max-w-md mb-6 leading-relaxed">
                  Payload received and indexed into operator queue. A prompt response will be transmitted to your email.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-2 rounded-sm bg-[#38cfff] text-[#020712] font-mono text-xs font-bold hover:bg-[#5fa8ff] transition-all cursor-pointer"
                >
                  [ NEW TRANSMISSION ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[0.68rem] text-[#8aa4bf] uppercase tracking-wider mb-1.5 font-bold">
                      OPERATOR_CALLSIGN / NAME <span className="text-[#ffb23f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Engineering Recruiter / Founder"
                      className={`w-full px-3.5 py-2.5 rounded-sm border text-xs text-[#e6f1ff] bg-[#020712]/90 outline-none transition-colors ${
                        errors.name
                          ? 'border-[#f43f5e] bg-[#f43f5e]/10'
                          : 'border-[#50aaff]/30 focus:border-[#38cfff]'
                      }`}
                    />
                    {errors.name && <p className="text-[0.65rem] text-[#f43f5e] mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[0.68rem] text-[#8aa4bf] uppercase tracking-wider mb-1.5 font-bold">
                      COMMS_UPLINK / EMAIL <span className="text-[#ffb23f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@techcorp.com"
                      className={`w-full px-3.5 py-2.5 rounded-sm border text-xs text-[#e6f1ff] bg-[#020712]/90 outline-none transition-colors ${
                        errors.email
                          ? 'border-[#f43f5e] bg-[#f43f5e]/10'
                          : 'border-[#50aaff]/30 focus:border-[#38cfff]'
                      }`}
                    />
                    {errors.email && <p className="text-[0.65rem] text-[#f43f5e] mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-[0.68rem] text-[#8aa4bf] uppercase tracking-wider mb-1.5 font-bold">
                    SUBJECT / OPPORTUNITY_TYPE
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full-Stack Developer Role / Project Proposal"
                    className="w-full px-3.5 py-2.5 rounded-sm border border-[#50aaff]/30 bg-[#020712]/90 text-xs text-[#e6f1ff] outline-none focus:border-[#38cfff]"
                  />
                </div>

                {/* Message Payload */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[0.68rem] text-[#8aa4bf] uppercase tracking-wider font-bold">
                      TRANSMISSION_PAYLOAD / MESSAGE <span className="text-[#ffb23f]">*</span>
                    </label>
                    <span className="text-[0.62rem] text-[#536d88]">
                      {formData.message.length} BYTES
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rakesh, we are looking for a Full-Stack Developer to join our team..."
                    className={`w-full px-3.5 py-2.5 rounded-sm border text-xs text-[#e6f1ff] bg-[#020712]/90 outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-[#f43f5e] bg-[#f43f5e]/10'
                        : 'border-[#50aaff]/30 focus:border-[#38cfff]'
                    }`}
                  />
                  {errors.message && <p className="text-[0.65rem] text-[#f43f5e] mt-1">{errors.message}</p>}
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-3 rounded-sm bg-[#38cfff] hover:bg-[#5fa8ff] text-[#020712] font-mono text-xs font-bold shadow-[0_0_15px_rgba(56,207,255,0.3)] hover:shadow-[0_0_20px_#38cfff] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
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

          {/* Right Column: Direct Telemetry Uplinks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-3.5"
          >
            {/* Email Uplink */}
            <div className="hud-panel p-5 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-sm bg-[#38cfff]/10 border border-[#38cfff]/30 flex items-center justify-center text-[#38cfff] text-base shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0 font-mono">
                  <div className="text-[0.62rem] text-[#8aa4bf] uppercase">COMMS_EMAIL</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-[#e6f1ff] font-semibold truncate block hover:text-[#38cfff] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-sm border border-[#50aaff]/30 hover:border-[#38cfff] text-[#8aa4bf] hover:text-[#38cfff] text-xs transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Uplink */}
            <a
              href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="hud-panel p-5 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex items-center justify-between group hover:border-[#38cfff]/50 transition-colors block font-mono"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#ffb23f]/10 border border-[#ffb23f]/30 flex items-center justify-center text-[#ffb23f] text-base shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-[0.62rem] text-[#8aa4bf] uppercase">TELEPHONE_CHANNEL</div>
                  <div className="text-xs text-[#e6f1ff] font-semibold group-hover:text-[#ffb23f] transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              <span className="text-[0.65rem] text-[#38cfff]">[ CALL ]</span>
            </a>

            {/* Base Station / Location */}
            <div className="hud-panel p-5 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex items-center gap-3.5 font-mono">
              <div className="w-10 h-10 rounded-sm bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-base shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className="text-[0.62rem] text-[#8aa4bf] uppercase">PRIMARY_BASE</div>
                <div className="text-xs text-[#e6f1ff] font-semibold">
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
                className="hud-panel p-4 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex items-center gap-2 text-[#8aa4bf] hover:text-[#38cfff] hover:border-[#38cfff]/50 transition-colors"
              >
                <FiGithub className="text-base text-[#38cfff]" />
                <span className="truncate">@{personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hud-panel p-4 rounded-sm border border-[#50aaff]/25 bg-[#06101f]/85 flex items-center gap-2 text-[#8aa4bf] hover:text-[#5fa8ff] hover:border-[#5fa8ff]/50 transition-colors"
              >
                <FiLinkedin className="text-base text-[#5fa8ff]" />
                <span className="truncate">in/rakesh-kumar</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
