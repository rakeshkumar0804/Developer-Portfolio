import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiExternalLink,
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      // Simulate smooth submission
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="flex flex-col items-start mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Let's Connect & </span>
            <span className="text-gradient-accent">Start a Conversation</span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have an open role, project opportunity, or want to discuss full-stack engineering? Feel free to reach out directly through the form or my social channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Modern Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div
              className={`p-8 sm:p-10 rounded-2xl border backdrop-blur-xl ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl mb-4">
                    <FiCheckCircle />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Message Sent Successfully!
                  </h3>
                  <p className={`text-sm max-w-md mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Thank you for reaching out. I have received your note and will get back to you promptly at your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 font-mono ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rakesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                          errors.name
                            ? 'border-rose-500 bg-rose-500/5'
                            : isDark
                            ? 'bg-slate-950/60 border-white/[0.08] text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 font-mono ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                          errors.email
                            ? 'border-rose-500 bg-rose-500/5'
                            : isDark
                            ? 'bg-slate-950/60 border-white/[0.08] text-white focus:border-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-2 font-mono ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project Discussion"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                        isDark
                          ? 'bg-slate-950/60 border-white/[0.08] text-white focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="message"
                        className={`block text-xs font-semibold uppercase tracking-wider font-mono ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <span className={`text-[0.68rem] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Rakesh, I came across your portfolio and would like to discuss..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none resize-none ${
                        errors.message
                          ? 'border-rose-500 bg-rose-500/5'
                          : isDark
                          ? 'bg-slate-950/60 border-white/[0.08] text-white focus:border-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="text-sm" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Interactive Direct Contact Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl flex items-center justify-between group ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-sm font-semibold truncate block hover:text-indigo-400 transition-colors ${
                      isDark ? 'text-slate-200' : 'text-slate-900'
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`p-2 rounded-lg border text-xs transition-colors shrink-0 ${
                  copiedEmail
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : isDark
                    ? 'border-white/[0.08] hover:bg-slate-800 text-slate-400'
                    : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                }`}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-2xl border backdrop-blur-xl flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-sky-500/40'
                  : 'bg-white border-slate-200 hover:border-sky-500/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 text-xl shrink-0">
                  <FiLinkedin />
                </div>
                <div>
                  <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    LinkedIn Profile
                  </div>
                  <div className={`text-sm font-semibold group-hover:text-sky-400 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    in/rakesh-kumar-520754246
                  </div>
                </div>
              </div>
              <FiExternalLink className="text-slate-400 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-2xl border backdrop-blur-xl flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-indigo-500/40'
                  : 'bg-white border-slate-200 hover:border-indigo-500/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl shrink-0">
                  <FiGithub />
                </div>
                <div>
                  <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    GitHub Profile
                  </div>
                  <div className={`text-sm font-semibold group-hover:text-indigo-400 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    @{personalInfo.githubUsername}
                  </div>
                </div>
              </div>
              <FiExternalLink className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>

            {/* LeetCode Card */}
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className={`p-6 rounded-2xl border backdrop-blur-xl flex items-center justify-between group transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-900/70 border-white/[0.08] hover:border-amber-500/40'
                  : 'bg-white border-slate-200 hover:border-amber-500/50 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl shrink-0">
                  <SiLeetcode />
                </div>
                <div>
                  <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    LeetCode Profile
                  </div>
                  <div className={`text-sm font-semibold group-hover:text-amber-400 transition-colors ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                    165+ Solved (u/Rakesh__Kumar_)
                  </div>
                </div>
              </div>
              <FiExternalLink className="text-slate-400 group-hover:text-amber-400 transition-colors" />
            </a>

            {/* Location Card */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-xl flex items-center gap-4 ${
                isDark ? 'bg-slate-900/70 border-white/[0.08]' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl shrink-0">
                <FiMapPin />
              </div>
              <div>
                <div className={`text-xs font-mono font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Primary Base
                </div>
                <div className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
