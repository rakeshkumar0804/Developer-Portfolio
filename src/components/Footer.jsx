import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1e1e2a] py-8 px-6 text-[#71717a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Rakesh Kumar. Built with React & Tailwind CSS.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rakeshkumar0804"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#111118] border border-[#1e1e2a] rounded-lg hover:border-[#6366f1] hover:text-[#e4e4e7] transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-520754246/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#111118] border border-[#1e1e2a] rounded-lg hover:border-[#6366f1] hover:text-[#e4e4e7] transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://leetcode.com/u/Rakesh__Kumar_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#111118] border border-[#1e1e2a] rounded-lg hover:border-[#6366f1] hover:text-[#e4e4e7] transition-colors"
            aria-label="LeetCode"
          >
            <SiLeetcode className="w-5 h-5" />
          </a>
          <a
            href="mailto:rakeshchauhan6651@gmail.com"
            className="p-2 bg-[#111118] border border-[#1e1e2a] rounded-lg hover:border-[#6366f1] hover:text-[#e4e4e7] transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
