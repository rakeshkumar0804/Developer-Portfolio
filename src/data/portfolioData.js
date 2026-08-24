export const personalInfo = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack Web Developer / MERN Stack Engineer',
  headline: 'I build practical full-stack systems with clean UI, secure APIs, and real product workflows.',
  description:
    'I’m a Computer Science graduate focused on building MERN applications with authentication, RBAC, dashboards, REST APIs, database design, and deployment-ready architecture.',
  bio:
    'Full-Stack Web Developer and MERN Stack Engineer with hands-on experience building role-based systems, REST APIs, responsive interfaces, and database-backed applications. I enjoy solving real workflow problems and turning ideas into clean, usable products.',
  location: 'Gurugram, Haryana, India',
  email: 'rakeshchauhan6651@gmail.com',
  phone: 'Available on request',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: 'https://github.com/rakeshkumar0804',
  availability: 'Open to SDE / Fresher Roles & Full-Time Opportunities',
  education: {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Parul University, Vadodara',
    graduation: 'May 2026',
    coursework: 'Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP',
  },
  internship: {
    role: 'Software Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    type: 'Remote',
    bullets: [
      'Built an Internal Employee Management System using Node.js, Express.js, and MongoDB.',
      'Implemented JWT authentication and RBAC across employee, manager, and admin roles.',
      'Planned and validated REST APIs for employee, department, and role modules.',
    ],
  },
};

export const heroProofPoints = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    highlight: 'Engineering signal correlation platform with OAuth integrations',
    tag: 'Incident Triage',
    link: '#projects',
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow',
    highlight: 'Employee-manager-admin approval workflow with 3-role RBAC',
    tag: 'Role-Based System',
    link: '#projects',
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse',
    highlight: 'GitHub-powered hiring-readiness analyzer scoring ~20 signals',
    tag: 'Dev Auditor',
    link: '#projects',
  },
];

export const aboutHighlights = [
  {
    title: 'B.Tech CSE Graduate',
    subtitle: 'Parul University (2022 – 2026)',
    desc: 'Strong foundation in Data Structures, Algorithms, DBMS, Computer Networks, and System Design.',
  },
  {
    title: 'MERN Stack Developer',
    subtitle: 'React, Node, Express, MongoDB',
    desc: 'Building responsive frontend interfaces paired with resilient, scalable Node.js backend services.',
  },
  {
    title: 'Backend & API Focus',
    subtitle: 'REST APIs, JWT & RBAC',
    desc: 'Designing authenticated endpoints, role-based authorization guards, and database schemas.',
  },
  {
    title: 'Open to SDE / Fresher Roles',
    subtitle: 'Immediate Availability',
    desc: 'Ready to contribute to fast-moving engineering teams building real-world software products.',
  },
];

export const skillsData = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'React Router', 'Redux', 'Axios', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication', 'RBAC', 'bcrypt', 'WebSocket / Socket.io'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Mongoose ODM', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'npm', 'Linux'],
  },
  {
    category: 'Core CS',
    skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Operating Systems', 'Computer Networks'],
  },
];

export const projectsData = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    subtitle: 'Incident Intelligence Platform',
    category: 'Full-Stack / AI',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth'],
    description:
      'A multi-tenant incident intelligence platform that integrates GitHub, Sentry, Slack, and Jira signals to help engineering teams identify root causes faster.',
    highlights: [
      'OAuth integrations across engineering tools (GitHub, Slack, Jira, Sentry)',
      'Multi-tenant RBAC with granular role permissions',
      'Real-time WebSocket event triage and team synchronization',
      'PostgreSQL + Redis caching data layer with AI-generated postmortems',
    ],
    architecture: ['React Client', 'API Gateway', 'OAuth & RBAC', 'PostgreSQL + Redis', 'WebSocket Live Sync'],
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    featured: true,
  },
  {
    id: 'leaveflow-hr',
    title: 'Employee Leave Management System (LeaveFlow)',
    subtitle: 'Enterprise Role-Based Leave Management Portal',
    category: 'Full-Stack / HR Tech',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    description:
      'A role-based leave management system with employee, manager, and admin dashboards, approval workflows, backend APIs, validation, and deployment.',
    highlights: [
      '3 role-based dashboards with isolated permissions for Employees, Managers, and Admins',
      'Multi-step manager approval workflow with automated leave balance updates',
      'Secure REST APIs with stateless JWT authentication middleware',
      'MongoDB schema validation and production deployment on Render',
    ],
    architecture: ['Client UI', 'Express Router', 'JWT / RBAC Guard', 'MongoDB Atlas', 'Render Cloud'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    featured: true,
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse',
    subtitle: 'Developer Portfolio Health Checker & Auditor',
    category: 'MERN / Tooling',
    tech: ['MERN Stack', 'GitHub API', 'Puppeteer', 'Tailwind CSS'],
    description:
      'A developer portfolio analyzer that scores GitHub profiles, repositories, and portfolio websites across recruiter-focused hiring-readiness signals.',
    highlights: [
      'Deep GitHub API integration analyzing repository regularity and code signals',
      'Evaluates ~20 hiring-readiness signals with actionable recruiter-focused scoring',
      'Headless SPA crawling using Puppeteer to audit portfolio live performance',
      'Comprehensive scoring dashboard with clear remediation advice',
    ],
    architecture: ['React UI', 'Express Engine', 'GitHub API / Puppeteer', 'Signals Evaluator', 'Vercel'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    featured: false,
  },
  {
    id: 'employee-management',
    title: 'Internal Employee Management System',
    subtitle: 'Internship Enterprise Operations Platform',
    category: 'Backend / MERN',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'REST API'],
    description:
      'An internal employee management system built during internship at Codetech IT Solutions to replace spreadsheet tracking with role-based APIs and structured workflows.',
    highlights: [
      'Comprehensive employee, department, and role management modules',
      'Secure JWT authentication with bcrypt password encryption',
      'Role-restricted API endpoints and middleware permission checks',
      'Full CRUD workflows for internal roster management',
    ],
    architecture: ['React UI', 'API Gateway', 'JWT & RBAC Middleware', 'MongoDB Roster', 'Cloud Deploy'],
    githubUrl: 'https://github.com/rakeshkumar0804',
    liveUrl: 'https://github.com/rakeshkumar0804',
    featured: false,
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics Dashboard',
    subtitle: 'Sports Statistics & Data Visualization Dashboard',
    category: 'Frontend / Data Viz',
    tech: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Tailwind CSS'],
    description:
      'Interactive sports intelligence and statistical computation dashboard analyzing match records across international formats with custom D3.js vector visualizations.',
    highlights: [
      'Custom D3.js vector charts and interactive pitch heatmaps',
      'Multi-dimensional filtering across match opponents, format, and years',
      'Smooth client-side calculations and fluid transitions',
    ],
    architecture: ['React 19 UI', 'TypeScript Engine', 'D3.js Viz', 'GSAP Motion', 'Vercel Edge'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app/',
    featured: false,
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    subtitle: 'Real-Time Collaborative Task Board',
    category: 'Full-Stack / Real-Time',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    description:
      'Collaborative task management application featuring drag-and-drop workflow lanes, priority tags, due date reminders, and instant state broadcasting.',
    highlights: [
      'Real-time state synchronization across team members using Socket.io',
      'Drag-and-drop Kanban workflow lanes with state persistence',
      'Task priority filters, assignment tracking, and activity logs',
    ],
    architecture: ['React Client', 'Socket.io Client', 'Express Gateway', 'MongoDB Layer', 'Render'],
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    featured: false,
  },
];

export const githubActivity = {
  stats: [
    { label: 'Total Stars Earned', value: '42' },
    { label: 'Total Contributions', value: '205+' },
    { label: 'Current Streak', value: '25 Days' },
    { label: 'Longest Streak', value: '25 Days' },
  ],
  languages: [
    { name: 'TypeScript', percentage: 65.71, color: '#38bdf8' },
    { name: 'JavaScript', percentage: 25.61, color: '#facc15' },
    { name: 'CSS', percentage: 8.06, color: '#818cf8' },
    { name: 'HTML', percentage: 0.62, color: '#f87171' },
  ],
  pinnedRepos: [
    {
      name: 'incidenthub-ai',
      desc: 'Multi-tenant incident triage & intelligence engine with OAuth & LLM root-cause analyzer.',
      lang: 'TypeScript',
      langColor: '#38bdf8',
      stars: 18,
      forks: 4,
      url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    },
    {
      name: 'dev-portfolio-checker',
      desc: 'Automated portfolio evaluator scoring repositories across ~20 hiring-readiness signals.',
      lang: 'JavaScript',
      langColor: '#facc15',
      stars: 9,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    },
    {
      name: 'kohli-analytics',
      desc: 'Sports intelligence and vector statistical computation dashboard with D3.js charts.',
      lang: 'TypeScript',
      langColor: '#38bdf8',
      stars: 7,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804/kohli-analytics',
    },
    {
      name: 'Solar-System-Explorer',
      desc: '3D interactive celestial orbital mechanics visualizer built with WebGL and Three.js.',
      lang: 'JavaScript',
      langColor: '#facc15',
      stars: 5,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804',
    },
    {
      name: 'taskflow',
      desc: 'Real-time collaborative task board with Socket.io WebSockets state synchronization.',
      lang: 'JavaScript',
      langColor: '#facc15',
      stars: 6,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/taskflow',
    },
    {
      name: 'leaveflow-hr',
      desc: 'Enterprise role-based leave management platform with JWT auth and approval workflows.',
      lang: 'JavaScript',
      langColor: '#facc15',
      stars: 12,
      forks: 3,
      url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    },
  ],
};

export const certificationsData = [
  {
    id: 1,
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'Verified Certificate',
    desc: 'Demonstrated advanced mastery in SQL: complex multi-table joins, recursive CTEs, indexing, query optimization, and relational aggregations.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'C++ Programming (CPA)',
    issuer: 'OpenEDG / Cisco Networking Academy',
    date: 'Certified',
    desc: 'Certified in fundamental and advanced C++ programming, OOP architecture, memory management, pointers, and STL algorithms.',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'Introduction to Internet of Things (IoT)',
    issuer: 'NPTEL — IIT Kharagpur',
    date: 'Elite Certification',
    desc: 'Achieved Elite certification status for coursework in sensor networks, embedded systems, networking protocols, and cloud computing.',
    link: 'https://nptel.ac.in/',
  },
  {
    id: 4,
    title: 'AMENTIS Hackathon Participation',
    issuer: 'IEEE GTBIT',
    date: 'Participant / Finalist',
    desc: 'Collaborated in an intensive 24-hour sprint hackathon to architect, build, and pitch a functional full-stack web MVP under strict deadlines.',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 5,
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks',
    date: 'Competitor',
    desc: 'Competed in speed problem-solving, algorithmic optimization, data structure implementations, and competitive coding sprints.',
    link: 'https://github.com/rakeshkumar0804',
  },
];
