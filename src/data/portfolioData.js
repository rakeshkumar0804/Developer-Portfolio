export const personalInfo = {
  name: 'Rakesh Kumar',
  firstName: 'RAKESH',
  lastName: 'KUMAR',
  role: 'Full-Stack Web Developer / MERN Stack Engineer',
  systemTag: 'OPERATOR // RAKESH-CORE',
  uplinkStatus: 'RAKESH-CORE UPLINK ACTIVE',
  headline: 'Full-Stack Developer building real product workflows.',
  subhead:
    'I build practical full-stack systems with authentication, RBAC, dashboards, APIs, and analytics — from incident intelligence tools to employee approval workflows and GitHub-powered portfolio analysis.',
  location: 'Gurugram, Haryana, India',
  email: 'rakeshchauhan6651@gmail.com',
  phone: 'Available on request',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: 'https://github.com/rakeshkumar0804',
  availability: 'Open to internships, fresher roles, and freelance work',
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
      'Built Internal Employee Management System using Node.js, Express.js, MongoDB',
      'Implemented JWT auth and RBAC across employee, manager, admin roles',
      'Planned and validated REST APIs for employee, department, and role modules',
    ],
  },
};

export const heroProofPoints = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    highlight: 'OAuth + engineering signal correlation',
    tag: 'INTELLIGENCE',
    link: '#systems',
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow',
    highlight: 'Employee-manager-admin approval system',
    tag: 'RBAC WORKFLOW',
    link: '#systems',
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse',
    highlight: 'GitHub-powered hiring-readiness analyzer',
    tag: 'DEV AUDITOR',
    link: '#systems',
  },
];

export const heroStats = [
  { value: '3+', label: 'Major Systems', desc: 'Auth, RBAC & Cloud' },
  { value: '3', label: 'Role-Based Dashboards', desc: 'Employee, Manager, Admin' },
  { value: '20+', label: 'Hiring Signals Engine', desc: 'Code Quality & Portfolio' },
  { value: '2026', label: 'CSE Graduate', desc: 'Parul University' },
];

export const operatingPrinciples = [
  {
    num: '01',
    title: 'Own the whole stack',
    description:
      'From UI architecture to backend APIs, database schemas, authentication, and deployment. Deep understanding of the entire data lifecycle.',
    highlight: 'Full-Cycle Engineering',
  },
  {
    num: '02',
    title: 'Build role-based workflows',
    description:
      'Experience building employee, manager, and admin dashboards with real permissions, JWT token verification, and automated approval workflows.',
    highlight: 'RBAC & Authorization',
  },
  {
    num: '03',
    title: 'Engineer for clarity',
    description:
      'Readable code, structured REST APIs, validated data models, and maintainable frontend components designed for team scalability.',
    highlight: 'Defensive Architecture',
  },
  {
    num: '04',
    title: 'Ship practical products',
    description:
      'Focus on projects that solve real problems: automated leave management, real-time incident intelligence, and developer portfolio analysis.',
    highlight: 'Production Impact',
  },
];

export const deployedSystems = [
  {
    id: 'incidenthub-ai',
    sysNum: 'SYS_01',
    title: 'IncidentHub AI',
    subtitle: 'Incident Intelligence Platform',
    status: 'ONLINE // PRODUCTION',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth'],
    description:
      'Multi-tenant incident intelligence platform with OAuth integrations across GitHub, Sentry, Slack, and Jira to correlate engineering signals for automated root-cause analysis.',
    highlights: [
      'GitHub, Sentry, Slack, Jira signal correlation',
      'Multi-tenant RBAC with granular permission tiers',
      'Real-time WebSocket event dispatching & triage sync',
      'PostgreSQL + Redis caching & AI-generated postmortems',
    ],
    architecture: ['Client (React)', 'API Gateway (Node)', 'Auth / OAuth', 'PostgreSQL + Redis', 'WebSocket / Live Sync'],
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    featured: true,
  },
  {
    id: 'leaveflow-hr',
    title: 'Employee Leave Management System / LeaveFlow',
    sysNum: 'SYS_02',
    subtitle: 'Role-Based Leave Management Platform',
    status: 'DEPLOYED // VERIFIED',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Role-based leave management platform with employee, manager, and admin dashboards, approval workflows, backend APIs, validation, and cloud deployment.',
    highlights: [
      '3 role-based dashboards (Employee, Manager, Admin)',
      'Manager approval workflow with instant status sync',
      'Secure REST APIs with JWT authentication headers',
      'MongoDB validation & automated leave balance tracking',
      'Production deployment on Render cloud',
    ],
    architecture: ['Client UI', 'Express Router', 'JWT / RBAC Guard', 'MongoDB Atlas', 'Render Deployment'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    featured: true,
  },
  {
    id: 'portfoliopulse',
    title: 'Developer Portfolio Health Checker / PortfolioPulse',
    sysNum: 'SYS_03',
    subtitle: 'Repository & Profile Hiring-Readiness Analyzer',
    status: 'ONLINE // PRODUCTION',
    tech: ['MERN Stack', 'GitHub API', 'Puppeteer'],
    description:
      'A platform that scores developer repositories and portfolio websites across hiring-readiness signals like activity regularity, code quality, profile completeness, and recruiter screening criteria.',
    highlights: [
      'GitHub profile analysis & deep repository auditing',
      '~20 hiring-readiness signals evaluation matrix',
      'Puppeteer headless SPA crawling and SEO validation',
      'Recruiter simulation feedback engine with actionable scoring',
    ],
    architecture: ['React Client', 'Express Audit Engine', 'GitHub API / Puppeteer', 'Signals Evaluator', 'Vercel Deployment'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    featured: false,
  },
  {
    id: 'employee-management',
    title: 'Internal Employee Management System',
    sysNum: 'SYS_04',
    subtitle: 'Internship Enterprise Operations Platform',
    status: 'VERIFIED // INTERNSHIP',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'REST API'],
    description:
      'Internship engineering project built at Codetech IT Solutions replacing spreadsheet tracking with role-based employee, department, and role management APIs.',
    highlights: [
      'Employee, department, and role modules',
      'Stateless JWT auth with bcrypt password hashing',
      'Role-restricted API endpoints and middleware guards',
      'Full CRUD workflows for internal roster management',
    ],
    architecture: ['React UI', 'API Gateway', 'JWT & RBAC Middleware', 'MongoDB Roster', 'Cloud Deployment'],
    githubUrl: 'https://github.com/rakeshkumar0804',
    liveUrl: 'https://github.com/rakeshkumar0804',
    featured: false,
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics Dashboard',
    sysNum: 'SYS_05',
    subtitle: 'Sports Statistics & Vector Visualization Platform',
    status: 'ONLINE // VERIFIED',
    tech: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    description:
      'Interactive sports intelligence and statistical computation dashboard analyzing match records across international formats with custom D3.js vector visualizations and smooth transitions.',
    highlights: [
      'Interactive D3.js vector charts and pitch heatmaps',
      'Multi-dimensional filters for opponents, format, and years',
      'Sub-second client-side vector calculations with GSAP motion',
    ],
    architecture: ['React 19 UI', 'TypeScript Engine', 'D3.js Viz', 'GSAP Vector', 'Vercel Edge'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app/',
    featured: false,
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro (Collaborative Task Board)',
    sysNum: 'SYS_06',
    subtitle: 'Real-time Collaborative Task Orchestration Board',
    status: 'DEPLOYED // VERIFIED',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    description:
      'Collaborative task management application featuring drag-and-drop workflow lanes, priority distribution indicators, due date reminders, and instant state broadcasting across multiple team members.',
    highlights: [
      'Real-time state broadcasting with Socket.io WebSockets',
      'Drag-and-drop Kanban workflow lanes with state persistence',
      'Priority tags, task filters, and team assignment tracking',
    ],
    architecture: ['Client (React)', 'Socket.io Client', 'Express WebSocket Gateway', 'MongoDB Layer', 'Render'],
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    featured: false,
  },
];

export const githubSignals = {
  stats: [
    { label: 'TOTAL STARS EARNED', value: '42', unit: '★' },
    { label: 'TOTAL CONTRIBUTIONS', value: '205+', unit: 'COMMITS' },
    { label: 'CURRENT STREAK', value: '25', unit: 'DAYS' },
    { label: 'LONGEST STREAK', value: '25', unit: 'DAYS' },
  ],
  languages: [
    { name: 'TypeScript', percentage: 65.71, color: '#38bdf8' },
    { name: 'JavaScript', percentage: 25.61, color: '#fbbf24' },
    { name: 'CSS', percentage: 8.06, color: '#60a5fa' },
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
      desc: 'Automated portfolio evaluator scoring repositories across 20+ hiring-readiness signals.',
      lang: 'JavaScript',
      langColor: '#fbbf24',
      stars: 9,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    },
    {
      name: 'kohli-analytics',
      desc: 'Sports intelligence and vector statistical computation dashboard with D3.js.',
      lang: 'TypeScript',
      langColor: '#38bdf8',
      stars: 7,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804/kohli-analytics',
    },
    {
      name: 'Solar-System-Explorer',
      desc: '3D interactive celestial orbital mechanics visualizer built with WebGL/Three.js.',
      lang: 'JavaScript',
      langColor: '#fbbf24',
      stars: 5,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804',
    },
    {
      name: 'taskflow',
      desc: 'Real-time collaborative task board with Socket.io state synchronization.',
      lang: 'JavaScript',
      langColor: '#fbbf24',
      stars: 6,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/taskflow',
    },
    {
      name: 'leaveflow-hr',
      desc: 'Enterprise role-based leave management platform with JWT auth and approval workflows.',
      lang: 'JavaScript',
      langColor: '#fbbf24',
      stars: 12,
      forks: 3,
      url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    },
  ],
};

export const skillsMatrix = [
  {
    category: 'Languages',
    code: 'LANG_SYS',
    items: ['JavaScript ES6+', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    code: 'UI_RUNTIME',
    items: ['React.js', 'React Router', 'Redux', 'Axios', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    category: 'Backend & APIs',
    code: 'API_GATEWAY',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT', 'RBAC', 'bcrypt', 'WebSocket'],
  },
  {
    category: 'Databases',
    code: 'DATA_STORE',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Tools',
    code: 'DEVOPS_TOOL',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'npm'],
  },
  {
    category: 'Core CS',
    code: 'CORE_THEORY',
    items: ['DSA', 'DBMS', 'OOP', 'OS', 'Computer Networks'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'SQL Advanced',
    issuer: 'HackerRank',
    category: 'DATABASE & QUERY ENGINE',
    date: 'VERIFIED',
    desc: 'Demonstrated advanced SQL mastery: complex joins, recursive CTEs, indexing optimizations, and relational aggregations.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'C++ Programming',
    issuer: 'OpenEDG / Cisco',
    category: 'CORE PROGRAMMING',
    date: 'CERTIFIED',
    desc: 'Certified Associate in C++ Programming covering OOP architecture, pointers, dynamic memory management, and STL algorithms.',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'Introduction to IoT',
    issuer: 'NPTEL IIT Kharagpur',
    category: 'ACADEMIC EXCELLENCE',
    date: 'ELITE CERTIFICATION',
    desc: 'Awarded Elite status for coursework in embedded networks, sensor telemetry, wireless protocols, and cloud IoT architectures.',
    link: 'https://nptel.ac.in/',
  },
  {
    id: 4,
    title: 'AMENTIS Hackathon Participation',
    issuer: 'IEEE GTBIT',
    category: 'RAPID PROTOTYPING',
    date: 'PARTICIPANT / FINALIST',
    desc: 'Collaborated in intensive sprint hackathon to architect, prototype, and pitch full-stack MVPs under strict 24-hour time limits.',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 5,
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks',
    category: 'ALGORITHMIC SPRINT',
    date: 'COMPETITOR',
    desc: 'Competed in algorithmic problem solving, graph traversals, and dynamic programming optimization challenges.',
    link: 'https://github.com/rakeshkumar0804',
  },
];
