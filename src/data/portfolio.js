export const profile = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack Developer',
  focus: 'MERN Stack · Scalable Web Applications',
  pitch: 'Building scalable web applications, RESTful APIs, and responsive frontends with the MERN stack.',
  location: 'Gurugram, India',
  email: 'rakeshchauhan6651@gmail.com',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resume: 'https://github.com/rakeshkumar0804',
};

export const stats = [
  { val: '6+', label: 'Projects Shipped' },
  { val: '165+', label: 'LeetCode Solved' },
  { val: '2+', label: 'Hackathons' },
  { val: 'SQL & C++', label: 'Certified' },
];

export const journey = [
  {
    role: 'Web Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    type: 'Internship',
    bullets: [
      'Engineered an internal Employee Management System using Node.js, Express, MongoDB, and JWT authentication.',
      'Implemented Role-Based Access Control (RBAC) and performance tracking pipelines for company operations.',
    ],
  },
  {
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Parul University',
    period: '2022 – 2026',
    type: 'Education (Graduated 2026)',
    bullets: [
      'Graduated with coursework in Data Structures, Database Management Systems, Computer Networks, and Cloud Computing.',
      'Active competitive programmer with 165+ LeetCode problems solved across Arrays, Graphs, and Dynamic Programming.',
    ],
  },
];

export const projects = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    tagline: 'Real-time Incident Response & Triage Platform',
    category: 'AI & CLOUD PLATFORM',
    description:
      'Incident response and triage platform with automated webhook ingestion from Sentry, GitHub, and Slack. Features multi-tenant RBAC, live streaming triage updates via Socket.io, and LLM-assisted incident categorization.',
    flow: ['Client (React 19)', 'API Gateway (Express)', 'Database / LLM Engine (Mongo + Gemini)'],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Gemini API', 'Tailwind CSS'],
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse (Dev Portfolio Checker)',
    tagline: 'Developer Portfolio & GitHub Auditor',
    category: 'DEVELOPER TOOLING',
    description:
      'Developer portfolio auditor and GitHub profile parser. Evaluates hiring-readiness criteria, SEO meta tags, commit consistency, and portfolio presentation rubrics.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub API', 'Tailwind CSS'],
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics',
    tagline: 'Sports Statistics & Vector Data Dashboard',
    category: 'DATA VISUALIZATION',
    description:
      'Sports statistics dashboard analyzing batting and match data across Test, ODI, and T20 formats using interactive D3.js charts and GSAP transitions.',
    flow: ['Client (React 19)', 'Calculation Pipeline', 'Data Engine (D3.js)'],
    tags: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://kohli-analytics.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow HR',
    tagline: 'Enterprise Leave Management & Approvals Workflow',
    category: 'WORKFLOW PLATFORM',
    description:
      'Enterprise leave management workflow system with discrete role-based portals for Employees, Managers, and Admins with automated status transitions and leave balance auditing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    tagline: 'Real-time Collaborative Task Board with Socket.io',
    category: 'COLLABORATION',
    description:
      'Real-time collaborative task board with Socket.io. Features interactive drag-and-drop workflow lanes, priority distribution charts, and instant state broadcasting across multiple team members.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    tagline: 'Secure Role-Based Operations Dashboard',
    category: 'ENTERPRISE SYSTEM',
    description:
      'Secure role-based company operations dashboard built during internship at Codetech IT Solutions. Implements secure session auth, departmental roster management, and performance tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC', 'Tailwind CSS'],
    liveUrl: 'https://github.com/rakeshkumar0804',
    githubUrl: 'https://github.com/rakeshkumar0804',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'C++', 'HTML5/CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux / Zustand', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets / Socket.io', 'JWT / RBAC', 'Microservices'],
  },
  {
    category: 'Databases & Storage',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose ODM', 'Prisma ORM'],
  },
  {
    category: 'Tools & Deployment',
    items: ['Git & GitHub', 'Docker', 'Postman', 'Vercel', 'Render', 'Linux / Bash'],
  },
  {
    category: 'Currently Learning',
    items: ['Distributed Systems', 'Vector Search & Embeddings', 'System Design Patterns', 'Go (Basics)'],
  },
];

export const openSourceRepos = [
  {
    name: 'incidenthub-ai',
    description: 'Real-time incident response & triage engine with LLM integration and multi-tenant RBAC.',
    language: 'TypeScript',
    langColor: '#38BDF8',
    stars: 1,
    url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    name: 'kohli-analytics',
    description: 'Sports intelligence & statistical computation dashboard with D3.js and GSAP visualizations.',
    language: 'JavaScript',
    langColor: '#FACC15',
    stars: 1,
    url: 'https://github.com/rakeshkumar0804/kohli-analytics',
  },
  {
    name: 'leaveflow-hr',
    description: 'Role-based enterprise leave management workflow platform with JWT authentication.',
    language: 'JavaScript',
    langColor: '#FACC15',
    stars: 1,
    url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
  },
  {
    name: 'taskflow',
    description: 'Real-time collaborative task board with Socket.io streaming and priority distribution.',
    language: 'JavaScript',
    langColor: '#FACC15',
    stars: 1,
    url: 'https://github.com/rakeshkumar0804/taskflow',
  },
  {
    name: 'dev-portfolio-checker',
    description: 'Automated developer portfolio auditor, SEO validator, and GitHub profile analyzer.',
    language: 'JavaScript',
    langColor: '#FACC15',
    stars: 1,
    url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
];

export const achievements = [
  {
    id: 'hackerrank-sql',
    title: 'HackerRank SQL (Advanced)',
    issuer: 'HackerRank',
    category: 'CERTIFICATION',
    date: 'Verified',
    detail: 'Demonstrated advanced SQL problem solving, relational querying, subqueries, indexing, and data aggregation.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
    badge: 'Verified',
  },
  {
    id: 'openedg-cpp',
    title: 'OpenEDG CPA (C++)',
    issuer: 'C++ Institute',
    category: 'CERTIFICATION',
    date: 'Certified',
    detail: 'Certified Associate in C++ Programming covering object-oriented architecture, pointers, memory allocation, and STL algorithms.',
    link: 'https://www.credly.com/',
    badge: 'Certified',
  },
  {
    id: 'leetcode-165',
    title: 'LeetCode 165+ Solved',
    issuer: 'LeetCode',
    category: 'PROBLEM SOLVING',
    date: 'Active',
    detail: 'Solved 165+ algorithmic challenges focusing on Arrays, Strings, Trees, Graphs, Two Pointers, and Dynamic Programming.',
    link: 'https://leetcode.com/u/Rakesh__Kumar_/',
    badge: 'u/Rakesh__Kumar_',
  },
  {
    id: 'hackathons',
    title: 'Hackathon Participations',
    issuer: 'AMENTIS @ GTBIT & CodeKshetra @ GD Goenka',
    category: 'COMPETITION',
    date: '2024 – 2025',
    detail: 'Collaborated in intensive sprint hackathons to architect, prototype, and pitch full-stack MVPs under time constraints.',
    link: 'https://github.com/rakeshkumar0804',
    badge: 'Participant & Finalist',
  },
];
