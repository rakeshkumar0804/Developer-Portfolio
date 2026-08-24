export const personalInfo = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack Web Developer / MERN Stack Engineer',
  headline: 'Full-Stack Developer building practical web applications & scalable APIs.',
  shortBio:
    'Computer Science Engineering graduate (Class of 2026) with hands-on experience in the MERN stack, RESTful API design, role-based workflows, and modern React interfaces. Actively seeking full-time Software Engineer (SDE) and developer opportunities.',
  fullBio: [
    "I'm a B.Tech Computer Science graduate (2026) from Parul University, currently based in Gurugram, India. I specialize in building full-stack web applications using React, Node.js, Express, and MongoDB/PostgreSQL.",
    "During my software development internship at Codetech IT Solutions, I developed an internal Employee Management System featuring JWT authentication, role-based access control (RBAC), and RESTful CRUD endpoints.",
    "I enjoy turning real-world requirements into clean, well-tested code. When I'm not building projects, I actively practice data structures and algorithms on LeetCode (165+ problems solved) and participate in hackathons.",
  ],
  location: 'Gurugram, Haryana, India',
  email: 'rakeshchauhan6651@gmail.com',
  phone: 'Available on request',
  github: 'https://github.com/rakeshkumar0804',
  githubUsername: 'rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  leetcode: 'https://leetcode.com/u/Rakesh__Kumar_/',
  resumeUrl: '/Rakesh_Kumar_Resume.pdf',
  availability: 'Available for Full-Time Roles & Immediate Joining',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Parul University, Vadodara',
    period: '2022 – 2026',
    score: 'First Class with Distinction',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming (OOP)',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  internship: {
    role: 'Software Development Intern',
    company: 'Codetech IT Solutions',
    period: 'Jan 2026 – Apr 2026',
    location: 'Remote',
    highlights: [
      'Engineered an Internal Employee Management System using Node.js, Express.js, and MongoDB.',
      'Implemented secure JWT authentication and role-based access control (RBAC) across Admin, Manager, and Employee portals.',
      'Designed and documented RESTful API endpoints for employee directory, leave balance tracking, and role management.',
    ],
  },
};

export const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Axios'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'Socket.io', 'bcrypt'],
  },
  {
    category: 'Databases & Storage',
    skills: ['MongoDB', 'Mongoose ODM', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Docker', 'Vercel', 'Render', 'npm', 'Linux'],
  },
  {
    category: 'Core CS Fundamentals',
    skills: ['Data Structures & Algorithms', 'Database Management (DBMS)', 'Object-Oriented Programming (OOP)', 'Computer Networks', 'Operating Systems'],
  },
];

export const projectsData = [
  {
    id: 'incidenthub-ai',
    title: 'IncidentHub AI',
    tagline: 'Incident Intelligence & Root-Cause Analysis Platform',
    category: 'Full-Stack / AI Tool',
    description:
      'A multi-tenant engineering incident intelligence platform that correlates signals from GitHub, Sentry, Slack, and Jira to help engineering teams triage outages faster with AI-generated postmortems.',
    highlights: [
      'OAuth integrations across GitHub, Sentry, Slack, and Jira',
      'Multi-tenant RBAC with granular role permissions and team isolation',
      'Real-time WebSocket event triage rooms for live incident coordination',
      'PostgreSQL + Redis caching data layer with automated AI postmortem generation',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'OAuth', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/incidenthub-ai',
    liveUrl: 'https://incidenthub-ai-web.vercel.app/',
    featured: true,
  },
  {
    id: 'leaveflow-hr',
    title: 'LeaveFlow HR',
    tagline: 'Enterprise Role-Based Leave Management System',
    category: 'Full-Stack / HR Tech',
    description:
      'A full-stack employee leave management application with dedicated portals for Employees, Managers, and Admins. Features multi-step approval workflows, leave balance validation, and audit logs.',
    highlights: [
      '3 distinct role-based dashboards (Employee, Manager, Admin)',
      'Manager review workflow with automated leave balance deduction and audit trail',
      'Secure stateless JWT authentication middleware and password hashing with bcrypt',
      'Full REST API architecture with structured error handling and database validation',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'JWT', 'Tailwind CSS', 'HTML5'],
    githubUrl: 'https://github.com/rakeshkumar0804/leaveflow-hr',
    liveUrl: 'https://leaveflow-hr-hvfh.onrender.com/',
    featured: true,
  },
  {
    id: 'portfoliopulse',
    title: 'PortfolioPulse',
    tagline: 'Developer Portfolio & GitHub Profile Auditor',
    category: 'MERN / Tooling',
    description:
      'An automated career intelligence platform that audits developer GitHub profiles, portfolio repositories, and web performance across ~20 hiring-readiness signals with actionable recommendations.',
    highlights: [
      'Integrates GitHub REST API to score repository regularity, commit history, and code signals',
      'Headless SPA crawling using Puppeteer to audit portfolio load speeds and mobile responsiveness',
      'Recruiter-style scoring feedback with concrete tips to improve hiring readiness',
      'MongoDB backend storing audit reports and improvement benchmarks',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'GitHub API', 'Puppeteer', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/dev-portfolio-checker',
    liveUrl: 'https://developer-portfolio-nu-rouge.vercel.app/',
    featured: false,
  },
  {
    id: 'employee-management',
    title: 'Internal Employee Management System',
    tagline: 'Internship Project @ Codetech IT Solutions',
    category: 'Backend / MERN',
    description:
      'An internal operations management platform built during internship to replace spreadsheet tracking with role-based REST APIs, department rosters, and structured employee workflows.',
    highlights: [
      'Complete CRUD workflows for employee records, departments, and payroll tiers',
      'Role-restricted API endpoints guarded by custom JWT middleware',
      'Database schema design with Mongoose ODM for clean relational data modeling',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs', 'Postman'],
    githubUrl: 'https://github.com/rakeshkumar0804',
    liveUrl: 'https://github.com/rakeshkumar0804',
    featured: false,
  },
  {
    id: 'kohli-analytics',
    title: 'Kohli Analytics',
    tagline: 'Sports Statistics & Data Visualization Dashboard',
    category: 'Frontend / Data Viz',
    description:
      'An interactive sports statistics and data visualization dashboard analyzing international cricket records with custom D3.js vector visualizations and smooth GSAP transitions.',
    highlights: [
      'Custom D3.js vector charts, pitch heatmaps, and career trajectory graphs',
      'Multi-dimensional filtering across match formats (Test, ODI, T20I), opponents, and venues',
      'High-performance client-side computation and responsive layout',
    ],
    tech: ['React', 'TypeScript', 'D3.js', 'GSAP', 'Vite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/kohli-analytics',
    liveUrl: 'https://kohli-analytics.vercel.app/',
    featured: false,
  },
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    tagline: 'Real-Time Collaborative Task Board',
    category: 'Full-Stack / Real-Time',
    description:
      'A Kanban-style task management web application featuring drag-and-drop workflow lanes, priority tags, due date reminders, and real-time state synchronization via WebSockets.',
    highlights: [
      'Real-time task updates and board synchronization across team members using Socket.io',
      'Drag-and-drop workflow status lanes (To Do, In Progress, Review, Completed)',
      'JWT user authentication and persistent board data in MongoDB',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rakeshkumar0804/taskflow',
    liveUrl: 'https://github.com/rakeshkumar0804/taskflow',
    featured: false,
  },
];

export const codingStats = {
  leetcode: {
    solved: '165+',
    profileUrl: 'https://leetcode.com/u/Rakesh__Kumar_/',
    label: 'LeetCode Problems Solved',
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
    date: 'Verified',
    desc: 'Demonstrated proficiency in complex SQL queries, multi-table joins, recursive CTEs, indexing, and aggregations.',
    link: 'https://www.hackerrank.com/certificates/iframe/9e6ce9fa0fa1',
  },
  {
    id: 2,
    title: 'C++ Programming (CPA)',
    issuer: 'OpenEDG / Cisco Networking Academy',
    date: 'Certified',
    desc: 'Certified in Object-Oriented Programming, memory management, pointers, and STL algorithms.',
    link: 'https://www.credly.com/',
  },
  {
    id: 3,
    title: 'Introduction to Internet of Things (IoT)',
    issuer: 'NPTEL — IIT Kharagpur',
    date: 'Elite Certificate',
    desc: 'Completed coursework in networking protocols, sensor integration, embedded systems, and cloud architecture.',
    link: 'https://nptel.ac.in/',
  },
  {
    id: 4,
    title: 'AMENTIS Hackathon Participation',
    issuer: 'IEEE GTBIT',
    date: 'Finalist Team',
    desc: 'Collaborated in an intensive 24-hour hackathon to build and pitch a functional web MVP under strict deadlines.',
    link: 'https://github.com/rakeshkumar0804',
  },
  {
    id: 5,
    title: 'CodeKshetra Coding Contest',
    issuer: 'GeeksforGeeks',
    date: 'Participant',
    desc: 'Competed in algorithmic problem-solving sprints focusing on time and space complexity optimization.',
    link: 'https://github.com/rakeshkumar0804',
  },
];
