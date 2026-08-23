export const profile = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack Developer',
  focus: 'MERN Stack · Scalable Web Applications',
  location: 'Gurugram, India',
  email: 'rakeshchauhan6651@gmail.com',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resume: 'https://github.com/rakeshkumar0804',
};

export const journey = [
  {
    role: 'Web Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    type: 'Internship',
    bullets: [
      'Engineered an internal Employee Management System using Node.js, Express, MongoDB, and JWT authentication.',
      'Implemented Role-Based Access Control (RBAC) and performance tracking pipelines for team operations.',
    ],
  },
  {
    role: 'B.Tech in Computer Science and Engineering',
    company: 'Parul University',
    period: '2022 – 2026',
    type: 'Education',
    bullets: [
      'Graduated with core coursework in Data Structures, Database Management Systems, Computer Networks, and Cloud Computing.',
      'Active competitive programmer with 165+ LeetCode problems solved across Arrays, Graphs, and Dynamic Programming.',
    ],
  },
];

export const projects = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    tagline: 'Real-time Incident Response & Triage Engine',
    category: 'AI & CLOUD PLATFORM',
    description:
      'Real-time incident response & triage engine with LLM integration. Features automated webhook ingestion from Sentry, GitHub, and Slack, multi-tenant RBAC, and live streaming triage pipelines.',
    flow: ['Client (React 19)', 'API Layer (Express / REST)', 'Database / AI Engine (Mongo + LLM)'],
    tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Gemini API', 'Tailwind'],
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse (Dev Portfolio Checker)',
    tagline: 'Automated Portfolio Auditing & SEO Analyzer',
    category: 'DEVELOPER TOOLING',
    description:
      'Automated developer portfolio auditor and GitHub profile parser. Evaluates hiring-readiness scores, SEO meta compliance, commit frequency, and recruiter simulation rubrics.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub API', 'Tailwind'],
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics',
    tagline: 'High-Performance Sports Stats & Visual Data Dashboard',
    category: 'DATA VISUALIZATION',
    description:
      'High-performance sports stats & visual data dashboard. Calculates proprietary cricket metrics (Pressure Map, Run Chase Impact) across Test, ODI, and T20 formats with vector charts.',
    flow: ['Client (React 19)', 'API Layer (Calculation Pipelines)', 'Data Engine / Aggregator (D3.js + JSON)'],
    tags: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind'],
    liveUrl: 'https://kohli-analytics.vercel.app/',
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow HR',
    tagline: 'Enterprise Leave Management & Approvals Workflow',
    category: 'WORKFLOW PLATFORM',
    description:
      'Enterprise leave management & approvals workflow. Implements discrete role-based portals for Employees, Managers, and Admins with automated status state transitions and balance audits.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
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
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind'],
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    tagline: 'Secure Role-Based Company Operations Dashboard',
    category: 'ENTERPRISE SYSTEM',
    description:
      'Secure role-based company operations dashboard built during internship at Codetech IT Solutions. Implements secure session auth, departmental roster management, and performance tracking.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RBAC', 'Tailwind'],
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
    description: 'Sports intelligence & statistical computation engine with D3.js and GSAP visualizations.',
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
    date: '2024',
    detail: 'Demonstrated advanced SQL problem solving, relational querying, subqueries, indexing, and complex data aggregation.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
    badge: 'Verified',
  },
  {
    id: 'openedg-cpp',
    title: 'OpenEDG CPA (C++)',
    issuer: 'C++ Institute',
    category: 'CERTIFICATION',
    date: '2024',
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
    issuer: 'AMENTIS @ GTBIT (2025) & CodeKshetra @ GD Goenka (2024)',
    category: 'COMPETITION',
    date: '2024 – 2025',
    detail: 'Collaborated in intensive sprint hackathons to architect, prototype, and pitch full-stack MVPs under strict time constraints.',
    link: 'https://github.com/rakeshkumar0804',
    badge: 'Participant & Finalist',
  },
];
