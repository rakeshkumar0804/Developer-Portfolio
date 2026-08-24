export const personalInfo = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack Web Developer / MERN Stack Engineer',
  headline: 'I build full-stack products with clean interfaces, secure APIs, and real user workflows.',
  description:
    'Computer Science graduate focused on MERN applications, role-based access control, REST APIs, dashboards, database design, and deployment-ready architecture.',
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

export const featuredProject = {
  id: 'incidenthub-ai',
  projectNum: '01',
  title: 'IncidentHub AI',
  subtitle: 'Incident Intelligence Platform',
  category: 'Full-Stack / AI System',
  problem: 'Engineering teams lose critical time correlating scattered signals across GitHub, Sentry, Slack, and Jira during major outages.',
  description:
    'Engineering incident intelligence platform that correlates GitHub and Sentry signals for evidence-backed root-cause analysis and AI postmortems.',
  tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth', 'Docker'],
  highlights: [
    'GitHub and Sentry signal correlation across webhooks and commit logs',
    'Multi-tenant RBAC with granular role permissions and team isolation',
    'Real-time WebSocket updates for live incident triage rooms',
    'PostgreSQL + Redis caching data layer with automated AI postmortems',
  ],
  metrics: '24 commits · 5 stars · Production-style architecture',
  flowSteps: ['GitHub', 'Sentry', 'Slack / Jira', 'Incident Triage', 'AI Postmortem'],
  githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
  liveUrl: 'https://incidenthub-ai-web.vercel.app/',
};

export const gridProjects = [
  {
    id: 'leaveflow-hr',
    projectNum: '02',
    title: 'Employee Leave Management System / LeaveFlow',
    subtitle: 'Role-Based HRMS Portal',
    category: 'Full-Stack / HRMS',
    problem: 'Companies struggle with manual spreadsheet leave tracking and unvalidated manager approvals.',
    description:
      'Full-stack employee leave management system with role-based authentication, manager approvals, dashboards, leave balance validation, and REST APIs.',
    tech: ['Node.js', 'SQLite', 'REST APIs', 'JavaScript', 'RBAC', 'HTML5', 'CSS3'],
    highlights: [
      'Employee, manager, and admin isolated portal workflows',
      'Approval-time leave balance validation with audit history',
      'Interactive dashboard analytics with real-time balance tracking',
      'End-to-end backend + database architecture included',
    ],
    metrics: '6 stars · Full-stack HRMS project',
    flowSteps: ['Employee Request', 'Manager Review', 'Admin Dashboard', 'Status Update'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
  },
  {
    id: 'portfoliopulse',
    projectNum: '03',
    title: 'PortfolioPulse / dev-portfolio-checker',
    subtitle: 'Career Intelligence & Portfolio Auditor',
    category: 'MERN / Tooling',
    problem: 'Developers apply to roles without knowing if their GitHub profiles and portfolio websites meet recruiter screening standards.',
    description:
      'Evidence-based career intelligence platform that analyzes GitHub profiles, portfolio websites, and resumes to evaluate hiring readiness.',
    tech: ['JavaScript', 'Express', 'Node.js', 'MongoDB', 'React', 'GitHub API', 'Puppeteer'],
    highlights: [
      'Deep GitHub profile and repository signal analysis',
      'Portfolio and resume screening with ~20 hiring readiness signals',
      'ATS and recruiter simulation feedback engine',
      'Personalized actionable recommendations for resume/repo upgrades',
    ],
    metrics: '45 commits · 5 stars',
    flowSteps: ['GitHub Score', 'Portfolio Score', 'ATS Signals', 'Recommendations'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
  },
  {
    id: 'kohli-analytics',
    projectNum: '04',
    title: 'Kohli Analytics',
    subtitle: 'Sports Statistics & Data Storytelling',
    category: 'Frontend / Data Viz',
    problem: 'Standard sports scorecards are flat and fail to illustrate match momentum, pitch conditions, and historical trends.',
    description:
      'Interactive cricket analytics platform built with React, TypeScript, D3.js, and GSAP, transforming ball-by-ball data into original metrics and cinematic visualizations.',
    tech: ['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    highlights: [
      'Data storytelling transforming complex match logs into visual narratives',
      'Custom cricket analytics with strike-rate trends & pitch heatmaps',
      'Interactive multi-dimensional filtering by opponent, format, and year',
      'Scroll-based cinematic visual experience powered by GSAP',
    ],
    metrics: '26 commits · 5 stars',
    flowSteps: ['Ball-by-Ball Data', 'D3.js Vector Engine', 'GSAP Transitions', 'Pitch Heatmaps'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app/',
  },
  {
    id: 'taskflow-pro',
    projectNum: '05',
    title: 'TaskFlow',
    subtitle: 'Collaborative Task Management Board',
    category: 'Full-Stack / Real-Time',
    problem: 'Teams lack lightweight, role-guarded task orchestration boards for fast sprint cycles.',
    description:
      'MERN task management platform with JWT authentication, RBAC, project organization, task tracking, and responsive dashboard.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'Socket.io'],
    highlights: [
      'Role-based task workflows with fine-grained access control',
      'Project and task organization with priority indicators and due dates',
      'Real-time team dashboard state broadcasting via Socket.io',
      'Secure authentication and authorization layer',
    ],
    metrics: '9 commits · 5 stars',
    flowSteps: ['To Do (3)', 'In Progress (2)', 'Review (1)', 'Done (8)'],
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
  },
];

export const creativeExperiments = [
  {
    id: 'solar-system',
    title: 'Solar System Explorer',
    subtitle: '3D Celestial Orbital Mechanics',
    category: 'Interactive WebGL',
    description: '3D interactive celestial orbital mechanics visualizer built with WebGL and Three.js featuring real astronomical physics and planetary textures.',
    tech: ['JavaScript', 'Three.js', 'WebGL', 'HTML5/CSS3'],
    metrics: '5 stars',
    githubUrl: 'https://github.com/rakeshkumar0804',
    liveUrl: 'https://github.com/rakeshkumar0804',
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
