import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiCopy, FiDownload, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
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
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setTransmitting(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name,
              from_email: formData.email,
              reply_to: formData.email,
              message: formData.message,
              to_email: personalInfo.email,
            },
            publicKey
          );
          setTransmitting(false);
          setTransmitted(true);
          setFormData({ name: '', email: '', message: '' });
          return;
        } catch (err) {
          console.error('EmailJS error:', err);
        }
      }

      // Web3Forms / Direct submission fallback
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to: personalInfo.email,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setTransmitting(false);
          setTransmitted(true);
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      } catch {
        // Fallback to mailto
      }

      // Mailto pre-filled client fallback
      setTransmitting(false);
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setTransmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="py-16 relative border-t border-white/[0.08] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Terminal Header Prompt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="text-emerald-400 font-bold">$</span>
            <span>./send-message.sh</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let's build something together
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl font-sans">
            I'm actively seeking full-time Software Engineer (SDE) and developer roles. Whether you have an open position, project inquiry, or question, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="lg:col-span-7 p-6 rounded-lg border border-white/[0.1] bg-[#0d1117] shadow-md"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs">
              <span className="text-emerald-400 font-bold">// Direct Message Interface</span>
              <span className="text-slate-500">HTTPS POST</span>
            </div>

            {transmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg mb-3">
                  <FiCheck />
                </div>
                <h4 className="text-base font-bold text-white mb-1 font-mono">Message Sent Successfully</h4>
                <p className="text-xs text-slate-400 font-sans max-w-sm mb-4">
                  Thank you for reaching out. Rakesh will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-1.5 rounded border border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-semibold hover:bg-[#38bdf8] hover:text-[#0a0e14] transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono" noValidate>
                {errorMessage && (
                  <div className="p-2.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1">
                      name <span className="text-[#38bdf8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiter / Hiring Lead"
                      className={`w-full px-3 py-2 rounded border bg-[#0a0e14] text-white text-xs outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/[0.1] focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.name && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">
                      email <span className="text-[#38bdf8]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3 py-2 rounded border bg-[#0a0e14] text-white text-xs outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/[0.1] focus:border-[#38bdf8]'
                      }`}
                    />
                    {errors.email && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">
                    message <span className="text-[#38bdf8]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Rakesh, we are looking for a full-stack developer..."
                    className={`w-full px-3 py-2 rounded border bg-[#0a0e14] text-white text-xs outline-none resize-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-white/[0.1] focus:border-[#38bdf8]'
                    }`}
                  />
                  {errors.message && <p className="text-[0.7rem] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={transmitting}
                  className="w-full py-2.5 rounded bg-[#22d3ee] hover:bg-[#38bdf8] text-[#0a0e14] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(34,211,238,0.2)] disabled:opacity-60"
                >
                  {transmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <FiSend className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Details & Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-3"
          >
            {/* Email Card */}
            <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center justify-between">
              <div className="min-w-0 flex items-center gap-3">
                <div className="h-8 w-8 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-sm shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <div className="text-[0.68rem] text-slate-400 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs font-bold text-white hover:text-[#38bdf8] truncate block transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded border border-white/[0.1] hover:border-[#38bdf8] text-slate-400 hover:text-white text-xs transition-colors shrink-0"
                title="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* Resume Download */}
            <div className="p-4 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-sm shrink-0">
                  <FiDownload />
                </div>
                <div>
                  <div className="text-[0.68rem] text-slate-400 uppercase">Resume File</div>
                  <div className="text-xs font-bold text-slate-200">Rakesh_Kumar_Resume.pdf</div>
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-[#22d3ee]/10 border border-[#22d3ee]/40 text-[#22d3ee] hover:bg-[#22d3ee] hover:text-[#0a0e14] text-xs font-bold transition-all"
              >
                Download
              </a>
            </div>

            {/* Social Links Bento */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center gap-2.5 text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors text-xs font-semibold"
              >
                <FiLinkedin className="text-sm text-[#38bdf8]" />
                <span className="truncate">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg border border-white/[0.1] bg-[#0d1117] flex items-center gap-2.5 text-slate-300 hover:text-white hover:border-white/30 transition-colors text-xs font-semibold"
              >
                <FiGithub className="text-sm text-slate-200" />
                <span className="truncate">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
