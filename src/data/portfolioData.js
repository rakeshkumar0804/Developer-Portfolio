export const personalInfo = {
  name: 'Rakesh Kumar',
  role: 'Full Stack Developer',
  headline: 'Building clean, scalable, and high-performance web experiences',
  subhead:
    'Computer Science Graduate (2026) specializing in the MERN stack, TypeScript, and modern frontend architecture. Passionate about building robust backend APIs and intuitive, accessible user interfaces.',
  location: 'Gurugram, Haryana, India',
  email: 'rakeshchauhan6651@gmail.com',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: '/resume.pdf',
  availability: 'Available for Full-time Roles & Internships',
};

export const heroStats = [
  { value: '6+', label: 'Projects Built', desc: 'MERN & Full-Stack Apps' },
  { value: '165+', label: 'LeetCode Solved', desc: 'DSA & Algorithms' },
  { value: '2+', label: 'Hackathons', desc: 'Finalist & Collaborator' },
  { value: '100%', label: 'Dedicated Focus', desc: 'Clean Code & Reliability' },
];

export const aboutHighlights = [
  {
    id: 1,
    title: 'Full Stack Focus',
    description: 'Expertise in modern React, Node.js, Express, MongoDB, and PostgreSQL.',
    icon: 'code',
    tag: 'MERN & Beyond',
  },
  {
    id: 2,
    title: 'Problem Solving',
    description: '165+ algorithmic challenges solved on LeetCode across trees, graphs, and DP.',
    icon: 'terminal',
    tag: 'DSA & Optimization',
  },
  {
    id: 3,
    title: 'Internship Tested',
    description: 'Built production Employee Management System with RBAC at Codetech IT Solutions.',
    icon: 'briefcase',
    tag: 'Industry Experience',
  },
  {
    id: 4,
    title: 'Immediate Availability',
    description: 'Ready to join engineering teams for full-time software developer and internship roles.',
    icon: 'user-check',
    tag: 'Ready to Ship',
  },
];

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Creating responsive, dynamic, and accessible interfaces',
    skills: [
      { name: 'React.js', level: 'Advanced', icon: 'SiReact', color: '#61DAFB' },
      { name: 'TypeScript', level: 'Intermediate', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Next.js', level: 'Intermediate', icon: 'SiNextdotjs', color: '#FFFFFF' },
      { name: 'HTML5 / CSS3', level: 'Advanced', icon: 'FaCss3Alt', color: '#E34F26' },
      { name: 'Redux / Zustand', level: 'Intermediate', icon: 'SiRedux', color: '#764ABC' },
      { name: 'Framer Motion', level: 'Intermediate', icon: 'SiFramer', color: '#0055FF' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Architecting secure, modular, and performant server runtimes',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Express.js', level: 'Advanced', icon: 'SiExpress', color: '#EEEEEE' },
      { name: 'RESTful APIs', level: 'Advanced', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'WebSockets (Socket.io)', level: 'Intermediate', icon: 'SiSocketdotio', color: '#010101' },
      { name: 'JWT & RBAC Auth', level: 'Advanced', icon: 'SiJsonwebtokens', color: '#000000' },
      { name: 'Microservices Concept', level: 'Intermediate', icon: 'SiDocker', color: '#2496ED' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    subtitle: 'Designing normalized schemas, indexes, and fast aggregation pipelines',
    skills: [
      { name: 'MongoDB', level: 'Advanced', icon: 'SiMongodb', color: '#47A248' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'MySQL', level: 'Intermediate', icon: 'SiMysql', color: '#4479A1' },
      { name: 'Redis', level: 'Intermediate', icon: 'SiRedis', color: '#DC382D' },
      { name: 'Mongoose ODM', level: 'Advanced', icon: 'SiMongodb', color: '#880000' },
      { name: 'Prisma ORM', level: 'Intermediate', icon: 'SiPrisma', color: '#2D3748' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Standard development workflow, version control, and cloud deployment',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: 'SiGithub', color: '#F05032' },
      { name: 'Docker', level: 'Intermediate', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Postman', level: 'Advanced', icon: 'SiPostman', color: '#FF6C37' },
      { name: 'VS Code', level: 'Advanced', icon: 'VscCode', color: '#007ACC' },
      { name: 'Vercel / Render', level: 'Advanced', icon: 'SiVercel', color: '#FFFFFF' },
      { name: 'Linux / Bash', level: 'Intermediate', icon: 'SiLinux', color: '#FCC624' },
    ],
  },
];

export const projects = [
  {
    id: 'leaveflow-hr',
    title: 'Employee Leave Management System (LeaveFlow HR)',
    tagline: 'Enterprise Full-Stack HR Portal & Approvals Workflow',
    category: 'fullstack',
    featured: true,
    description:
      'A comprehensive full-stack enterprise leave management web application. Features role-based authentication (Employees, Managers, Admins), interactive leave request submissions, live approval workflows, leave balance auditing, and departmental analytics.',
    highlights: [
      'Role-based access control (RBAC) with secure JWT cookie authentication',
      'Manager dashboard with one-click approve/reject actions and leave balance tracking',
      'Real-time status updates, calendar leave visualization, and responsive Tailwind UI',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    badge: 'Featured System',
  },
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    tagline: 'Real-time Incident Response & Automated Triage Engine',
    category: 'fullstack',
    featured: true,
    description:
      'High-throughput real-time incident triage platform with webhook ingestion from monitoring services. Features multi-tenant RBAC, live streaming incident triage pipelines with Socket.io, and LLM-assisted severity categorization.',
    highlights: [
      'Automated webhook parsing with event deduplication and priority categorization',
      'Live bi-directional incident state synchronization using Socket.io websockets',
      'AI-powered root-cause summary and incident remediation suggestions via Gemini API',
    ],
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Gemini API', 'Tailwind CSS'],
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    badge: 'AI Powered',
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics Dashboard',
    tagline: 'Sports Statistics & Interactive Vector Data Visualization',
    category: 'frontend',
    featured: false,
    description:
      'Interactive sports intelligence and statistical computation dashboard analyzing match records across Test, ODI, and T20 international formats with custom D3.js vector visualizations and smooth GSAP transitions.',
    highlights: [
      'Dynamic D3.js charts including strike rate distributions and pitch heatmaps',
      'Interactive filters for opponent countries, tournament years, and innings position',
      'Sub-second client-side data parsing and responsive mobile layout',
    ],
    tech: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://kohli-analytics.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    badge: 'Data Viz',
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro (Collaborative Task Manager)',
    tagline: 'Real-time Collaborative Task Board with Drag-and-Drop',
    category: 'fullstack',
    featured: false,
    description:
      'Collaborative task management application featuring drag-and-drop workflow lanes, priority distribution indicators, due date reminders, and instant state broadcasting across multiple team members using WebSockets.',
    highlights: [
      'Smooth drag-and-drop Kanban interface with customizable workflow columns',
      'Real-time task synchronization across concurrent client sessions',
      'Filterable task search, priority tagging, and user assignment metrics',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    badge: 'Collaboration',
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse (Dev Portfolio Checker)',
    tagline: 'Developer Portfolio & GitHub Profile Auditor',
    category: 'tools',
    featured: false,
    description:
      'Developer portfolio auditor and GitHub profile parser evaluating hiring-readiness criteria, SEO meta tags compliance, commit frequency regularity, and recruiter evaluation rubrics.',
    highlights: [
      'GitHub REST API integration to analyze repo activity and language breakdowns',
      'Actionable checklist feedback for recruiter presentation and accessibility',
      'Clean interactive score dashboard with animated circular progress indicators',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub API', 'Tailwind CSS'],
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    badge: 'Dev Tool',
  },
];

export const services = [
  {
    id: 'frontend',
    title: 'Frontend Web Development',
    icon: 'layout',
    description:
      'Building responsive, fast, and accessible user interfaces using React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.',
    deliverables: [
      'Single Page Applications (SPAs)',
      'Pixel-perfect responsive design',
      'State management (Redux, Zustand)',
      'Smooth micro-interactions & animations',
    ],
  },
  {
    id: 'backend',
    title: 'Backend API Development',
    icon: 'server',
    description:
      'Designing robust, RESTful APIs and server architectures with Node.js, Express, and secure authentication pipelines.',
    deliverables: [
      'RESTful API architecture',
      'JWT Authentication & RBAC security',
      'Database modeling (SQL & NoSQL)',
      'Third-party API & webhook integrations',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Applications',
    icon: 'layers',
    description:
      'End-to-end web product development connecting frontend user journeys with scalable backend database solutions.',
    deliverables: [
      'Complete MERN stack architecture',
      'Real-time features with WebSockets',
      'CRUD applications with auth',
      'Cloud deployment on Vercel & Render',
    ],
  },
  {
    id: 'uiux',
    title: 'Responsive UI Design & UX',
    icon: 'pen-tool',
    description:
      'Creating intuitive, modern, and human-centered design systems with a focus on hierarchy, typography, and accessibility.',
    deliverables: [
      'Mobile-first layout design',
      'Dark & light mode theming',
      'Clean typography & color systems',
      'Component library structuring',
    ],
  },
  {
    id: 'optimization',
    title: 'Optimization & Bug Fixing',
    icon: 'tool',
    description:
      'Auditing existing codebases for performance bottlenecks, debugging complex state issues, and boosting SEO/Lighthouse scores.',
    deliverables: [
      'Performance & bundle optimization',
      'Cross-browser debugging',
      'SEO meta tags & accessibility audits',
      'Code refactoring & clean architecture',
    ],
  },
];

export const timeline = [
  {
    id: 1,
    type: 'experience',
    title: 'Web Development Intern',
    organization: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    location: 'Remote, India',
    description:
      'Engineered an internal Employee Management System from scratch. Implemented full-stack architecture using Node.js, Express, MongoDB, and JWT authentication with Role-Based Access Control (RBAC). Designed administrative dashboards, employee leave tracking pipelines, and departmental performance overview modules.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'REST APIs'],
  },
  {
    id: 2,
    type: 'education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Parul University',
    period: '2022 – 2026',
    location: 'Vadodara, Gujarat, India',
    description:
      'Completed comprehensive engineering coursework covering Data Structures & Algorithms, Object-Oriented Programming (C++), Relational Database Management Systems (SQL), Operating Systems, Computer Networks, and Cloud Computing. Actively solved 165+ algorithmic problems on LeetCode.',
    skills: ['Data Structures', 'Algorithms', 'C++', 'SQL', 'Computer Networks', 'DBMS'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'HackerRank SQL (Advanced)',
    issuer: 'HackerRank',
    category: 'Database & SQL',
    date: 'Verified Credential',
    description: 'Demonstrated proficiency in complex SQL queries, joins, subqueries, aggregations, and schema indexing.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'OpenEDG CPA (C++ Associate)',
    issuer: 'C++ Institute',
    category: 'Core Programming',
    date: 'Certified',
    description: 'Certified Associate in C++ Programming covering OOP, pointer memory management, templates, and algorithms.',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'LeetCode 165+ Problems Solved',
    issuer: 'LeetCode',
    category: 'Algorithmic Problem Solving',
    date: 'Active',
    description: 'Consistently practicing algorithms focusing on Arrays, Strings, Trees, Graphs, Two Pointers, and DP.',
    link: 'https://leetcode.com/u/Rakesh__Kumar_/',
  },
  {
    id: 4,
    title: 'National Hackathons Participant',
    issuer: 'AMENTIS @ GTBIT & CodeKshetra @ GD Goenka',
    category: 'Rapid Prototyping & MVPs',
    date: '2024 – 2025',
    description: 'Collaborated in intensive sprint hackathons to architect, prototype, and present full-stack web MVPs.',
    link: 'https://github.com/rakeshkumar0804',
  },
];
