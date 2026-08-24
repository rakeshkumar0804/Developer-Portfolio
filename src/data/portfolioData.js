export const personalInfo = {
  name: 'Rakesh Kumar',
  firstName: 'RAKESH',
  lastName: 'KUMAR',
  designation: 'Full-Stack Web Developer / MERN Stack Engineer',
  systemTag: 'OPERATOR // RAKESH-CORE',
  uplinkStatus: 'UPLINK ACTIVE // SYS_READY',
  headline: 'Full-Stack Web Developer / MERN Stack Engineer',
  subhead:
    'I build role-based web applications, secure REST APIs, responsive React interfaces, and production-ready MERN systems with clean architecture and practical problem solving.',
  location: 'Gurugram, Haryana, India',
  email: 'rakeshchauhan6651@gmail.com',
  phone: '+91-9306573459',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: 'https://github.com/rakeshkumar0804',
  availability: 'Open to internships, fresher roles, and freelance projects',
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
      'Built an internal Employee Management System using Node.js, Express.js, and MongoDB.',
      'Implemented JWT authentication and RBAC across employee, manager, and admin roles.',
      'Planned and validated REST APIs for employee, department, and role modules.',
    ],
  },
};

export const heroStats = [
  { value: '3+', label: 'Major Projects', desc: 'Enterprise & AI Systems' },
  { value: '3', label: 'Role-Based Systems', desc: 'RBAC Access Layers' },
  { value: '20+', label: 'Hiring Signals Engine', desc: 'Portfolio & Code Auditor' },
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
    title: 'Build role-based systems',
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
    title: 'IncidentHub AI',
    subtitle: 'Incident Intelligence & Automated Triage Platform',
    category: 'ai-cloud',
    status: 'PRODUCTION // VERIFIED',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth', 'Gemini API'],
    description:
      'Multi-tenant incident intelligence platform with OAuth integrations across GitHub, Sentry, Slack, and Jira to correlate engineering signals for automated root-cause analysis and severity triage.',
    highlights: [
      'Multi-tenant Role-Based Access Control (RBAC)',
      'Real-time WebSocket event dispatching',
      'High-throughput PostgreSQL + Redis caching layer',
      'AI-generated root-cause postmortems via Gemini API',
    ],
    architecture: ['Client (React 19)', 'API Gateway (Node)', 'Auth / OAuth', 'PostgreSQL + Redis', 'WebSocket / LLM'],
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    featured: true,
  },
  {
    id: 'leaveflow-hr',
    title: 'Employee Leave Management System (LeaveFlow)',
    subtitle: 'Enterprise Role-Based Approval Workflow Portal',
    category: 'rbac-fullstack',
    status: 'DEPLOYED // VERIFIED',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    description:
      'Role-based leave management platform with employee, manager, and admin dashboards, approval workflows, backend APIs, schema validation, and cloud deployment.',
    highlights: [
      '3 distinct role-based dashboards (Employee, Manager, Admin)',
      'Hierarchical manager approval & rejection workflow',
      'RESTful endpoints with strict JWT authorization headers',
      'MongoDB schema validation & automated balance auditing',
      'Production deployment on Render cloud infrastructure',
    ],
    architecture: ['Client UI', 'Express Router', 'JWT / RBAC Guard', 'MongoDB Atlas', 'Render Cloud'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    featured: true,
  },
  {
    id: 'portfoliopulse',
    title: 'Developer Portfolio Health Checker (PortfolioPulse)',
    subtitle: 'Automated Repository & Profile Hiring-Signal Auditor',
    category: 'tools',
    status: 'PRODUCTION // VERIFIED',
    tech: ['MERN Stack', 'GitHub API', 'Puppeteer', 'Node.js', 'Express', 'React', 'Tailwind CSS'],
    description:
      'A platform that scores developer repositories and portfolio websites across hiring-readiness signals like activity regularity, code quality, profile completeness, and recruiter screening criteria.',
    highlights: [
      'Deep GitHub REST API & GraphQL repository analyzer',
      '~20 hiring-readiness signals evaluation matrix',
      'Puppeteer headless SPA crawling and SEO audit',
      'Recruiter simulation feedback engine with actionable scores',
    ],
    architecture: ['React Client', 'Express Audit Engine', 'GitHub API / Puppeteer', 'Signals Evaluator', 'Vercel Deployment'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    featured: false,
  },
  {
    id: 'employee-management',
    title: 'Internal Employee Management System',
    subtitle: 'Internship Enterprise Operations & Roster Platform',
    category: 'rbac-fullstack',
    status: 'INTERNSHIP PROJECT // VERIFIED',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'REST API', 'React'],
    description:
      'Internship engineering project built at Codetech IT Solutions replacing spreadsheet tracking with role-based employee, department, and role management APIs.',
    highlights: [
      '3 user access roles (Staff, Department Head, Superadmin)',
      'Stateless JWT session authentication with bcrypt hashing',
      'Full CRUD REST APIs for departments, roles, and profiles',
      'Role-restricted API endpoint middleware guards',
    ],
    architecture: ['React UI', 'API Gateway', 'JWT & RBAC Middleware', 'MongoDB Roster', 'Vercel/Render'],
    githubUrl: 'https://github.com/rakeshkumar0804',
    liveUrl: 'https://github.com/rakeshkumar0804',
    featured: false,
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics Dashboard',
    subtitle: 'Sports Statistics & High-Performance Vector Visualization',
    category: 'tools',
    status: 'PRODUCTION // VERIFIED',
    tech: ['React 19', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    description:
      'Interactive sports intelligence and statistical computation dashboard analyzing match records across Test, ODI, and T20 international formats with custom D3.js vector visualizations and smooth GSAP transitions.',
    highlights: [
      'Interactive D3.js vector charts and pitch heatmaps',
      'Multi-dimensional filters for opponents, format, and years',
      'Sub-second client-side vector calculations with GSAP motion',
    ],
    architecture: ['React 19 UI', 'TypeScript Engine', 'D3.js Visualization', 'GSAP Vector', 'Vercel Edge'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app/',
    featured: false,
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro (Collaborative Task Board)',
    subtitle: 'Real-time Multi-User Task Orchestration Board',
    category: 'rbac-fullstack',
    status: 'PRODUCTION // VERIFIED',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    description:
      'Collaborative task management application featuring drag-and-drop workflow lanes, priority distribution indicators, due date reminders, and instant state broadcasting across multiple team members using WebSockets.',
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
    { name: 'TypeScript', percentage: 65.71, color: '#3178C6' },
    { name: 'JavaScript', percentage: 25.61, color: '#F7DF1E' },
    { name: 'CSS / Tailwind', percentage: 8.06, color: '#38BDF8' },
    { name: 'HTML', percentage: 0.62, color: '#E34F26' },
  ],
  pinnedRepos: [
    {
      name: 'incidenthub-ai',
      desc: 'Multi-tenant incident triage & intelligence engine with OAuth & LLM root-cause analyzer.',
      lang: 'TypeScript',
      langColor: '#3178C6',
      stars: 18,
      forks: 4,
      url: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    },
    {
      name: 'leaveflow-hr',
      desc: 'Enterprise role-based leave management platform with JWT auth and approval workflows.',
      lang: 'JavaScript',
      langColor: '#F7DF1E',
      stars: 12,
      forks: 3,
      url: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    },
    {
      name: 'dev-portfolio-checker',
      desc: 'Automated portfolio evaluator scoring repositories across 20+ hiring-readiness signals.',
      lang: 'JavaScript',
      langColor: '#F7DF1E',
      stars: 9,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    },
    {
      name: 'kohli-analytics',
      desc: 'Sports intelligence and vector statistical computation dashboard with D3.js.',
      lang: 'TypeScript',
      langColor: '#3178C6',
      stars: 7,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804/kohli-analytics',
    },
    {
      name: 'Solar-System-Explorer',
      desc: '3D interactive celestial orbital mechanics visualizer built with WebGL/Three.js.',
      lang: 'JavaScript',
      langColor: '#F7DF1E',
      stars: 5,
      forks: 1,
      url: 'https://github.com/rakeshkumar0804',
    },
    {
      name: 'taskflow',
      desc: 'Real-time collaborative task board with Socket.io state synchronization.',
      lang: 'JavaScript',
      langColor: '#F7DF1E',
      stars: 6,
      forks: 2,
      url: 'https://github.com/rakeshkumar0804/taskflow',
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
    items: ['React.js', 'React Router', 'Redux', 'Axios', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI'],
  },
  {
    category: 'Backend & APIs',
    code: 'API_GATEWAY',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication', 'RBAC', 'bcrypt', 'WebSocket / Socket.io'],
  },
  {
    category: 'Databases',
    code: 'DATA_STORE',
    items: ['MongoDB', 'Mongoose ODM', 'MySQL', 'PostgreSQL', 'Redis In-Memory'],
  },
  {
    category: 'Tools & Deployment',
    code: 'DEVOPS_TOOL',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'npm', 'Linux / Bash'],
  },
  {
    category: 'Core CS',
    code: 'CORE_THEORY',
    items: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Operating Systems', 'Computer Networks'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'SQL Advanced Certification',
    issuer: 'HackerRank',
    category: 'DATABASE & QUERY ENGINE',
    date: 'VERIFIED',
    desc: 'Demonstrated advanced SQL mastery: complex joins, recursive CTEs, indexing optimizations, and relational aggregations.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'C++ Programming (CPA)',
    issuer: 'OpenEDG / C++ Institute & Cisco',
    category: 'CORE PROGRAMMING',
    date: 'CERTIFIED',
    desc: 'Certified Associate in C++ Programming covering OOP architecture, pointers, dynamic memory management, and STL algorithms.',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL IIT Kharagpur',
    category: 'ACADEMIC EXCELLENCE',
    date: 'ELITE CERTIFICATION',
    desc: 'Awarded Elite status for coursework in embedded networks, sensor telemetry, wireless protocols, and cloud IoT architectures.',
    link: 'https://nptel.ac.in/',
  },
  {
    id: 4,
    title: 'AMENTIS: Charting the Unknown',
    issuer: 'IEEE GTBIT Hackathon',
    category: 'RAPID PROTOTYPING',
    date: 'PARTICIPANT / FINALIST',
    desc: 'Collaborated in intensive sprint hackathon to architect, prototype, and pitch full-stack MVPs under strict 24-hour time limits.',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 5,
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks & GD Goenka',
    category: 'ALGORITHMIC SPRINT',
    date: 'COMPETITOR',
    desc: 'Competed in algorithmic problem solving, graph traversals, and dynamic programming optimization challenges.',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 6,
    title: 'LeetCode 165+ Problems Solved',
    issuer: 'LeetCode (u/Rakesh__Kumar_)',
    category: 'PROBLEM SOLVING',
    date: 'ACTIVE PRACTICE',
    desc: 'Consistently solving data structure problems focusing on Arrays, Strings, Binary Trees, Graphs, Two Pointers, and DP.',
    link: 'https://leetcode.com/u/Rakesh__Kumar_/',
  },
];

export const systemReviewChecklist = [
  { label: 'System status', status: 'ONLINE', verified: true },
  { label: 'Operations architecture', status: 'VERIFIED (MERN + RBAC)', verified: true },
  { label: 'Operating principles', status: '4 CORE PILLARS', verified: true },
  { label: 'Deployed systems', status: '6 PROJECTS SHIPPED', verified: true },
  { label: 'GitHub signals & telemetry', status: '205+ CONTRIBUTIONS', verified: true },
  { label: 'Architect credentials', status: 'B.TECH CSE 2026', verified: true },
  { label: 'Comms uplink channel', status: 'OPEN FOR TRANSMISSION', verified: true },
];
