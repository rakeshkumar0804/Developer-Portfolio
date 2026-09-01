export const personalInfo = {
  name: 'Rakesh Kumar',
  role: 'B.Tech CSE Graduate · Full-Stack Developer',
  headline: "Hi, I'm Rakesh Kumar — B.Tech CSE Graduate · Full-Stack Developer",
  pitch: 'I build fast, reliable full-stack applications and enjoy turning real-world requirements into clean, working code.',
  shortBio:
    "I graduated with a B.Tech in Computer Science Engineering (Class of 2026) from Parul University in Vadodara, Gujarat. I am currently based in my hometown of Gurugram, Haryana. I specialize in building and shipping production-ready full-stack web applications with React, TypeScript, Node.js, Express, and MongoDB/PostgreSQL.",
  location: 'Gurugram, India',
  email: 'rakeshchauhan6651@gmail.com',
  gmailComposeUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=rakeshchauhan6651@gmail.com',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: '/Rakesh_Kumar_Resume.pdf',
  availability: 'Open to Software Engineer Roles',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Parul University, Vadodara',
    period: '2022–2026',
    graduated: 'Graduated 2026',
  },
  internship: {
    role: 'Software Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    location: 'Remote',
    highlights: [
      'Engineered an Internal Employee Management System using Node.js, Express.js, and MongoDB.',
      'Implemented JWT authentication and RBAC across Admin, Manager, and Employee portals.',
      'Designed and documented RESTful API endpoints.',
    ],
  },
};

export const skillsData = [
  {
    category: '01_languages.ts',
    label: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: '02_frontend.tsx',
    label: 'Frontend',
    skills: ['React.js', 'React Router', 'Redux Toolkit', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap', 'Axios'],
  },
  {
    category: '03_backend.js',
    label: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'WebSocket / Socket.io', 'bcrypt'],
  },
  {
    category: '04_databases.sql',
    label: 'Databases',
    skills: ['MongoDB', 'Mongoose ODM', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    category: '05_tools_devops.sh',
    label: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Postman', 'Docker', 'Vercel', 'Render', 'npm', 'VS Code', 'Linux'],
  },
  {
    category: '06_core_cs.cpp',
    label: 'Core CS Fundamentals',
    skills: ['Data Structures & Algorithms', 'Database Management (DBMS)', 'Object-Oriented Programming (OOP)', 'Computer Networks', 'Operating Systems'],
  },
];

export const primarySystems = [
  {
    sysId: 'SYS-01',
    id: 'trace',
    title: 'TRACE — Temporal Root-cause Analysis & Causal Engine',
    tagline: 'AI-Assisted Production Incident Investigation Engine',
    highlights:
      'Multi-hypothesis competition engine running real-time adversarial falsification loops across 19 hidden-ground-truth production incidents benchmarked at 89.5% accuracy.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini API', 'Next.js', 'TypeScript', 'D3.js', 'GSAP', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/trace-rca-engine',
    liveUrl: 'https://trace-rca-engine.vercel.app',
  },
  {
    sysId: 'SYS-02',
    id: 'syncpad',
    title: 'SyncPad',
    tagline: 'Real-Time Collaborative Code Editor with In-Browser Execution',
    highlights:
      'Conflict-free peer synchronization using Yjs CRDTs, live multi-cursor awareness, and fully sandboxed in-browser code execution (JS/TS via Web Workers, Python via Pyodide/WebAssembly).',
    stack: ['React', 'TypeScript', 'Yjs (CRDT)', 'Monaco Editor', 'Node.js', 'WebSocket', 'Pyodide (WASM)'],
    githubUrl: 'https://github.com/rakeshkumar0804/SyncPad',
    liveUrl: 'https://sync-pad-client.vercel.app',
  },
  {
    sysId: 'SYS-03',
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    tagline: 'Engineering Incident Intelligence & Root-Cause Analysis Platform',
    highlights:
      'Multi-tenant RBAC boundary isolation, real OAuth flows (GitHub, Sentry, Slack, Jira), Redis distributed locking, and live WebSocket triage rooms.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth'],
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    liveUrl: 'https://incidenthub-ai-web.vercel.app',
  },
  {
    sysId: 'SYS-04',
    id: 'portfoliopulse',
    title: 'PortfolioPulse',
    tagline: 'Developer Portfolio & GitHub Profile Hiring Readiness Auditor',
    highlights:
      'Deterministic 20-point rule-based scoring engine integrating GitHub REST APIs and headless SPA performance crawling with Puppeteer.',
    stack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Puppeteer', 'GitHub API'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://dev-portfolio-checker.vercel.app',
  },
  {
    sysId: 'SYS-05',
    id: 'kohli-analytics',
    title: 'Kohli Analytics',
    tagline: 'Sports Statistics & High-Performance Data Visualization Dashboard',
    highlights:
      'Interactive vector analytics computing custom original performance metrics (Clutch Index, Pressure Maps) using D3.js and Hardware-Accelerated Transitions.',
    stack: ['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app',
  },
];

export const secondaryDeployments = [
  {
    id: 'solar-system-explorer',
    title: 'Solar-System-Explorer',
    description: '3D interactive celestial orbital visualizer with real astronomical data and orbital physics.',
    tech: ['React', 'Three.js', 'TypeScript', 'Zustand'],
    githubUrl: 'https://github.com/rakeshkumar0804/Solar-System-Explorer',
    liveUrl: 'https://solar-system-explorer-ten-phi.vercel.app',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Real-time collaborative Kanban task board with live WebSocket synchronization and JWT RBAC.',
    tech: ['MERN', 'Socket.io', 'JWT', 'RBAC'],
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    liveUrl: 'https://taskflow-gules-rho.vercel.app',
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow HR',
    description: 'Enterprise role-based leave management system with approval workflows and audit logs.',
    tech: ['Node.js', 'Express', 'SQLite', 'JWT'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-ten.vercel.app',
  },
];

export const codingStats = {
  leetcode: {
    solved: '165+',
    profileUrl: 'https://leetcode.com/u/Rakesh__Kumar_/',
    label: 'LeetCode Solved',
  },
  github: {
    contributions: '205+',
    stars: '42',
    streak: '25 Days',
    profileUrl: 'https://github.com/rakeshkumar0804',
  },
};

export const certificationsData = [
  {
    id: 1,
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    status: 'Verified',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'C++ Programming (CPA)',
    issuer: 'OpenEDG / Cisco Networking Academy',
    status: 'Certified',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'Introduction to Internet of Things (IoT)',
    issuer: 'NPTEL, IIT Kharagpur',
    status: 'Elite Certificate',
    link: 'https://nptel.ac.in/',
  },
  {
    id: 4,
    title: 'AMENTIS Hackathon Participation',
    issuer: 'IEEE GTBIT',
    status: 'Finalist Team',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 5,
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks',
    status: 'Participant',
    link: 'https://github.com/rakeshkumar0804',
  },
];
