export const profile = {
  name: 'Rakesh Kumar',
  role: 'Full-Stack MERN Developer',
  location: 'Gurugram, India',
  email: 'rakeshchauhan6651@gmail.com',
  github: 'https://github.com/rakeshkumar0804',
  linkedin: 'https://www.linkedin.com/in/rakesh-kumar-520754246/',
  resume: '/resume.pdf',
  intro: 'I build scalable full-stack web applications using React, Node.js, Express, and MongoDB, with a focus on clean architecture, performance, and user experience.',
  story: 'B.Tech Computer Science graduate specializing in MERN stack development. I build scalable, production-ready full-stack applications with secure authentication, REST APIs, and responsive user experiences, focusing on clean architecture, performance, and reliability.',
  stats: [['03+', 'Live projects'], ['2026', 'B.Tech CSE'], ['Gurugram', 'Based in']]
}

export const skills = {
  'Languages': ['JavaScript (ES6+)', 'Python', 'C++', 'SQL'],
  'Frontend': ['React.js', 'HTML5', 'CSS3', 'Bootstrap'],
  'Backend': ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC'],
  'Data': ['MongoDB', 'Mongoose', 'MySQL'],
  'Tooling': ['Git', 'GitHub', 'Postman', 'Vercel', 'Render'],
  'Core CS': ['Data Structures', 'DBMS', 'OOP', 'Operating Systems']
}

export const projects = [
  {
    name: 'Developer Portfolio Health Checker', number: '01', type: 'MERN + GitHub API', art: 'health', status: 'In progress',
    problem: 'Developers often do not have a clear, objective view of how recruiters evaluate their GitHub profile and portfolio.',
    solution: 'An AI-powered platform that analyzes GitHub profiles and developer portfolios, providing hiring-readiness scores, recruiter insights, and actionable improvement recommendations.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'GitHub API'],
    bullets: ['Scored portfolio analysis', 'Recruiter simulation feedback', 'Actionable skill-gap insights'],
    live: '#', code: '#'
  },
  {
    name: 'Leave Management System', number: '02', type: 'Workflow application', art: 'leave', status: 'Live',
    problem: 'Manual leave tracking makes approval status unclear for employees, managers, and administrators.',
    solution: 'A role-based leave platform with employee, manager, and admin dashboards that automates the request and approval workflow in one place.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    bullets: ['Three role-based dashboards', 'Real-time approval status', 'Validated REST APIs'],
    live: 'https://leaveflow-hr-hvfh.onrender.com/', code: 'https://github.com/rakeshkumar0804/leaveflow-hr'
  },
  {
    name: 'Task Management App', number: '03', type: 'Productivity application', art: 'task', status: 'Live',
    problem: 'Teams need a simple way to create, assign, and track tasks without losing ownership or priority.',
    solution: 'A full-stack task platform with secure role-based access, priority breakdowns, and a React dashboard for tracking work in real time.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    bullets: ['Admin and user RBAC', 'Real-time task statistics', 'Priority breakdown dashboard'],
    live: 'https://taskflow-gules-rho.vercel.app/', code: 'https://github.com/rakeshkumar0804/taskflow'
  }
]

export const journey = [
  { period: '2026', title: 'B.Tech in Computer Science Engineering', detail: 'Graduating from Parul University, Vadodara. Coursework includes DSA, DBMS, computer networks, operating systems, and web technologies.' },
  { period: '2025', title: 'AMENTIS Innovation Hackathon', detail: 'Participated in the GTBIT, New Delhi innovation hackathon while continuing to ship production-style web applications.' },
  { period: '2024', title: 'CodeKshetra participant', detail: 'Participated at GD Goenka University, Gurugram, and built a stronger problem-solving foundation through consistent DSA practice.' }
]

export const certifications = [
  { issuer: 'HACKERRANK', logo: 'hackerrank', title: 'SQL (Advanced)', date: '30 May 2026', detail: 'Advanced SQL', link: '/certificates/sql-advanced.pdf' },
  { issuer: 'OPENEDG / CISCO', logo: 'cisco', title: 'Programming Essentials in C++', date: '21 Feb 2024', detail: 'C++ & OOP Fundamentals', link: '/certificates/cpp-programming.pdf' },
  { issuer: 'UDEMY', logo: 'udemy', title: 'Python Programming Masterclass', date: '17 Feb 2025', detail: 'Python Fundamentals', link: '/certificates/python.pdf' },
  { issuer: 'UDEMY', logo: 'udemy', title: 'Learn Cyber Security From Scratch: Practical Guide', date: '17 Feb 2025', detail: 'Cybersecurity Fundamentals', link: '/certificates/cybersecurity.pdf' }
]
