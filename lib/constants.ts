export const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Undergraduate Teaching Assistant & Grader',
    company: 'United International University',
    period: 'Oct 2024 – Feb 2026',
    description: 'Assisted in OOP and DSA lab sessions, supported debugging and problem-solving, evaluated assignments, collaborated with faculty on lab design.',
    highlights: [
      'Facilitated real-time debugging in OOP and DSA labs',
      'Graded assignments ensuring fairness and consistency',
      'Supported electrical circuit theory understanding',
      'Collaborated on lab curriculum design',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'BiblioTheca',
    subtitle: 'AI-Powered Gamified Library System',
    description: 'Full-stack gamified library system with AI chatbot integration and dungeon-style progression mechanics.',
    tech: ['React', 'Spring Boot', 'Java', 'REST APIs', 'H2 DB'],
    highlights: [
      'Implemented authentication & routing architecture',
      'Integrated AI chatbot module for user interaction',
      'Designed dungeon-style gamification system',
      'Built dark-mode responsive UI',
    ],
    link: '#',
  },
  {
    id: 2,
    title: 'Landlytics',
    subtitle: 'Intelligent Land Analytics Platform',
    description: 'Agricultural analytics platform with weather integration and AI-driven crop recommendations.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    highlights: [
      'Crop recommendation engine using ML',
      'Real-time weather & land data integration',
      'Decision-support system for farming insights',
      'Modular backend architecture',
    ],
    link: '#',
  },
  {
    id: 3,
    title: 'Medica DB',
    subtitle: 'Medical Workflow System',
    description: 'Real-time hospital workflow management with live patient collaboration tools.',
    tech: ['React', 'Node.js', 'Express', 'Socket.io', 'SQL'],
    highlights: [
      'Real-time hospital workflow system',
      'Patient management architecture',
      'Medical collaboration tools',
      'WebSocket-based live updates',
    ],
    link: '#',
  },
];

export const RESEARCH = [
  {
    id: 1,
    title: 'Multimodal Speech Reconstruction for Bengali Stroke Patients',
    status: 'Publication Pending',
    type: 'Final Year Design Project',
    description: 'Deep learning system combining lip movement and degraded audio to reconstruct intelligible Bengali speech for stroke patients.',
    tech: ['Deep Learning', 'Multimodal Fusion', 'Audio Processing', 'Computer Vision'],
    achievements: ['Champion — FYDP poster competition'],
  },
  {
    id: 2,
    title: 'ShunoBondhu — Voice Assistive System',
    status: 'Ongoing Research',
    type: 'Research Project',
    description: 'Voice-based mobile assistant designed for accessibility and real-world usability in low-literacy contexts.',
    tech: ['Voice Processing', 'Mobile Dev', 'NLP', 'Human-Centered Design'],
    achievements: [],
  },
  {
    id: 3,
    title: 'SmartBoardVision — Classroom Enhancement System',
    status: 'Ongoing Research',
    type: 'Research Project',
    description: 'Advanced classroom board visibility system using YOLOv8, EAST, and CRAFT pipelines for enhanced image processing.',
    tech: ['YOLOv8', 'EAST', 'CRAFT', 'CLAHE', 'SRGAN', 'Image Enhancement'],
    achievements: [],
  },
];

export const SKILLS = {
  'Programming Languages': ['Java', 'Python', 'PHP', 'JavaScript', 'SQL', 'C/C++', 'HTML', 'CSS', 'TypeScript'],
  'Frameworks & Tools': ['Spring Boot', 'Laravel', 'React', 'Node.js', 'Express', 'Git', 'MySQL', 'H2'],
  'AI & Data Science': ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'Pandas', 'NumPy', 'Image Processing'],
  'Core Systems': ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'Software Engineering'],
  'Research': ['Literature Review', 'Experimental Design', 'Data Preprocessing', 'Technical Writing'],
};

export const EDUCATION = {
  degree: 'B.Sc. in Computer Science & Engineering',
  school: 'United International University (UIU), Dhaka',
  cgpa: '3.90 / 4.00',
  graduation: 'Feb 2026',
  highlights: ['HSC: 4.83', 'SSC/JSC: 5.00', 'Multiple academic scholarships'],
};

export const ACHIEVEMENTS = [
  'Champion — Final Year Design Project (FYDP)',
  'Champion — Intra University Chess Competition',
  'Multiple Academic Scholarships (100%, 50%, 25%)',
  'Champion — National Debate Competition',
  'Participant — National Programming Contest (ICT Division)',
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:hello@nusrat.dev', icon: 'mail' },
];
