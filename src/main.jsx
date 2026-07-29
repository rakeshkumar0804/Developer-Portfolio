import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
  FiFileText,
  FiExternalLink,
  FiAward,
} from "react-icons/fi";
import {
  SiCisco,
  SiHackerrank,
  SiLeetcode,
  SiUdemy,
} from "react-icons/si";
import emailjs from "@emailjs/browser";
import {
  profile,
  projects,
  skills,
  journey,
  certifications,
} from "./data/portfolio";
import "./styles.css";
import "./contact-status.css";

const nav = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certificates", "certificates"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];
const certificateLogos = {
  hackerrank: SiHackerrank,
  cisco: SiCisco,
  udemy: SiUdemy,
};
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
};
const cardReveal = (index) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.42, delay: index * 0.09 },
});
const primarySkills = new Set([
  "JavaScript (ES6+)",
  "React.js",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT",
  "RBAC",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "Postman",
]);
const Section = ({ id, label, title, children }) => (
  <motion.section className="section" id={id} {...fade}>
    <p className="section-label">// {label}</p>
    <h2>{title}</h2>
    {children}
  </motion.section>
);

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = nav
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );
    sections.forEach((section) =>
      observer.observe(section),
    );
    return () => observer.disconnect();
  }, []);
  return (
    <header>
      <a className="brand" href="#top">
        <i /> {profile.name}
      </a>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
      <nav className={open ? "open" : ""}>
        {nav.map(([name, id]) => (
          <a
            className={active === id ? "active" : ""}
            href={`#${id}`}
            onClick={() => {
              setActive(id);
              setOpen(false);
            }}
            key={id}
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Terminal() {
  return (
    <div
      className="terminal"
      aria-label="Introduction terminal"
    >
      <div className="terminal-bar">
        <span>
          <b />
          <b />
          <b />
        </span>
        <span>rakesh@portfolio: ~</span>
      </div>
      <div className="terminal-body">
        <p>
          <em>rakesh@portfolio $</em> whoami
        </p>
        <strong>
          {profile.name}{" "}
          <span className="whoami-role">
            • Software Engineer
          </span>
        </strong>
        <p>
          <em>rakesh@portfolio $</em> cat role.txt
        </p>
        <span>{profile.role}</span>
        <p>
          <em>rakesh@portfolio $</em> ls skills/
        </p>
        <div className="terminal-tags">
          <b>React</b>
          <b>TypeScript</b>
          <b>Node.js</b>
          <b>Express</b>
          <b>MongoDB</b>
        </div>
        <p>
          <em>rakesh@portfolio $</em> npm run build
        </p>
        <span className="terminal-success">
          ✓ Build successful
        </span>
        <p>
          <em>rakesh@portfolio $</em> git status
        </p>
        <span className="terminal-ready">
          Ready for new opportunities 🚀
        </span>
        <p>
          <em>rakesh@portfolio $</em>{" "}
          <i className="cursor">█</i>
        </p>
      </div>
    </div>
  );
}

function ProjectCover({ project }) {
  if (project.art === "health")
    return (
      <div
        className="project-cover health"
        aria-hidden="true"
      >
        <div className="cover-browser">
          <div className="cover-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="cover-heading">
            Portfolio health
          </div>
          <div className="score-line">
            <b>86</b>
            <span>Hiring readiness</span>
          </div>
          <div className="cover-bars">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  if (project.art === "leave")
    return (
      <div
        className="project-cover leave"
        aria-hidden="true"
      >
        <div className="cover-dashboard">
          <div className="cover-heading">LeaveFlow</div>
          <div className="leave-summary">
            <span>24</span>
            <small>Requests</small>
            <span>08</span>
            <small>Pending</small>
          </div>
          <div className="leave-rows">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  return (
    <div className="project-cover task" aria-hidden="true">
      <div className="cover-dashboard">
        <div className="cover-heading">TaskFlow</div>
        <div className="task-columns">
          <div>
            <b>Todo</b>
            <i />
            <i />
          </div>
          <div>
            <b>In progress</b>
            <i />
            <i />
          </div>
          <div>
            <b>Done</b>
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveGitHub() {
  const [data, setData] = useState(null);
  const username = import.meta.env.VITE_GITHUB_USERNAME || "rakeshkumar0804";
  useEffect(() => {
    if (username)
      fetch(`https://api.github.com/users/${username}`)
        .then((r) => r.ok && r.json())
        .then(setData)
        .catch(() => {});
  }, [username]);
  if (!data)
    return (
      <div className="github-strip">
        <FiGithub />{" "}
        <span>
          GitHub metrics are temporarily unavailable. Please try again shortly.
        </span>
      </div>
    );
  return (
    <a
      className="github-strip"
      href={data.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <FiGithub /> <b>{data.public_repos}</b> public
      repositories <FiArrowUpRight />
    </a>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    const cfg = import.meta.env;
    if (
      !cfg.VITE_EMAILJS_PUBLIC_KEY ||
      !cfg.VITE_EMAILJS_SERVICE_ID ||
      !cfg.VITE_EMAILJS_TEMPLATE_ID
    )
      return setStatus(
        {
          type: "error",
          text: "Contact form unavailable. Please use the Email me button above.",
        },
      );
    setIsSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
          cfg.VITE_EMAILJS_SERVICE_ID,
          cfg.VITE_EMAILJS_TEMPLATE_ID,
          event.target,
          { publicKey: cfg.VITE_EMAILJS_PUBLIC_KEY },
      );
      event.target.reset();
      setStatus({ type: "success", text: "✓ Message sent successfully!" });
    } catch (error) {
      console.error("EmailJS form error:", error);
      setStatus({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Section
      id="contact"
      label="contact"
      title="Let's build something useful."
    >
      <div className="contact-panel">
        <div>
          <p>
            I'm actively seeking Full-Stack Developer
            opportunities. Whether it's a full-time role,
            internship, or an interesting project, I'd love
            to connect.
          </p>
          <div className="contact-actions">
            <a
              className="button fill"
              href={profile.emailCompose}
              target="_blank"
              rel="noreferrer"
            >
              <FiMail /> Email me
            </a>
            <a
              className="icon-button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              className="icon-button"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              className="icon-button"
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        <form onSubmit={submit}>
          <label>
            Name
            <input name="from_name" required />
          </label>
          <label>
            Email
            <input name="reply_to" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="3" required />
          </label>
            <button className="text-button" disabled={isSending}>
              {isSending ? "Sending..." : "Send message"} <FiArrowUpRight />
            </button>
            {status && <p className={`status ${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </Section>
  );
}

function App() {
  return (
    <>
      <div className="boot-loader" aria-hidden="true">
        <span>RK</span>
        <i />
      </div>
      <Header />
      <motion.main
        id="top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        <section className="hero">
          <div className="hero-copy">
            <motion.p
              className="availability"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <i /> Available for opportunities
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              Hi, I'm
              <br />
              <span>Rakesh Kumar</span>
              <br />
              Full-Stack
              <br />
              Developer.
            </motion.h1>
            <motion.p
              className="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {profile.intro}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <a href="#projects" className="button fill">
                View projects <FiArrowUpRight />
              </a>
              <a href={profile.resume} className="button">
                <FiDownload /> Download resume
              </a>
            </motion.div>
            <div className="socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href={profile.emailCompose}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
          >
            <Terminal />
          </motion.div>
        </section>
        <Section
          id="about"
          label="about"
          title="A developer who cares about the finish."
        >
          <div className="about-grid">
            <div>
              <p className="body-copy">{profile.story}</p>
              <div className="stat-row">
                {profile.stats.map(([number, label]) => (
                  <div key={label}>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              className="resume-card"
              href={profile.resume}
            >
              <FiFileText />
              <span>
                <b>Resume</b>
                <small>
                  A concise overview of my projects,
                  technical skills, and education.
                </small>
                <em className="resume-meta">
                  PDF · 1 Page · ATS Optimized
                </em>
              </span>
              <FiArrowUpRight />
            </a>
          </div>
        </Section>
        <Section
          id="projects"
          label="projects"
          title="Things I've built."
        >
          <p className="section-intro">
            A selection of live full-stack projects - each
            designed around a clear workflow, clean
            architecture, and a useful user experience.
          </p>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.name}
                {...cardReveal(index)}
              >
                <ProjectCover project={project} />
                <div className="project-content">
                  <div className="project-top">
                    <span>{project.number}</span>
                    <div className="project-statuses">
                      <small>{project.type}</small>
                      <b
                        className={`status-badge ${project.status === "Live" ? "live" : ""}`}
                      >
                        {project.status}
                      </b>
                    </div>
                  </div>
                  <h3>{project.name}</h3>
                  <div className="project-narrative">
                    <p>
                      <b>Problem</b>
                      {project.problem}
                    </p>
                    <p>
                      <b>Solution</b>
                      {project.solution}
                    </p>
                  </div>
                  <ul>
                    {project.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-bottom">
                    <div className="tech-list">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} source`}
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="demo"
                        aria-label={`${project.name} demo`}
                      >
                        <FiExternalLink /> Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>
        <Section
          id="skills"
          label="skills"
          title="Tools I work with."
        >
          <p className="section-intro">
            The tools and technologies I use to build web
            products, organised by area.
          </p>
          <div className="skill-legend">
            <span className="legend-primary">
              Primary stack
            </span>
            <span>Working knowledge</span>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(
              ([group, items], index) => (
                <motion.article
                  key={group}
                  {...cardReveal(index)}
                >
                  <h3>{group}</h3>
                  <div>
                    {items.map((item) => (
                      <span
                        className={
                          primarySkills.has(item)
                            ? "primary"
                            : "secondary"
                        }
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </Section>
        <Section
          id="certificates"
          label="certificates"
          title="Certifications."
        >
          <p className="section-intro">
            Credentials earned through hands-on learning,
            each available to view.
          </p>
          <div className="certificate-grid">
            {certifications.map((cert, index) => {
              const Logo = certificateLogos[cert.logo];
              return (
                <motion.a
                  className="certificate-card"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  key={cert.title}
                  {...cardReveal(index)}
                >
                  <div className="certificate-top">
                    <span className="certificate-icon">
                      {Logo ? <Logo /> : <FiAward />}
                    </span>
                    <small>{cert.issuer}</small>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.detail}</p>
                  <div className="certificate-footer">
                    <span>{cert.date}</span>
                    <b>
                      View certificate <FiArrowUpRight />
                    </b>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Section>
        <Section
          id="journey"
          label="journey"
          title="My Journey"
        >
          <div className="timeline">
            {journey.map((item, index) => (
              <motion.article
                key={item.period}
                {...cardReveal(index)}
              >
                <span className="line-number">
                  0{index + 1}
                </span>
                <i />
                <div>
                  <small>{item.period}</small>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <LiveGitHub />
        </Section>
        <Contact />
      </motion.main>
      <footer>
        <span>
          Built by {profile.name} - ©{" "}
          {new Date().getFullYear()}
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
