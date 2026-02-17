import { Experience, Project, SkillData, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'React/Next.js', A: 150, fullMark: 150 },
  { subject: 'TypeScript', A: 140, fullMark: 150 },
  { subject: 'UI/UX Design', A: 130, fullMark: 150 },
  { subject: 'Node.js', A: 120, fullMark: 150 },
  { subject: 'Performance', A: 135, fullMark: 150 },
  { subject: 'DevOps', A: 90, fullMark: 150 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Commerce',
    description: 'A futuristic headless e-commerce platform built with Next.js 14 and Stripe integration. Features real-time inventory and AI-powered recommendations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    category: 'Fullstack',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Orbit Dashboard',
    description: 'High-performance analytics dashboard processing millions of data points with D3.js and WebGL. Dark mode first design system.',
    tags: ['React', 'D3.js', 'WebGL', 'Firebase'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    category: 'Frontend',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Nexus Chat',
    description: 'Real-time encrypted messaging application using WebSocket and end-to-end encryption protocols. Mobile responsive.',
    tags: ['Socket.io', 'Express', 'React Native', 'Redis'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    category: 'Mobile',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'Aero Finance',
    description: 'DeFi dashboard for tracking crypto assets across multiple chains. Built with Web3.js and Tailwind.',
    tags: ['React', 'Web3.js', 'Tailwind', 'Solidity'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    category: 'Frontend',
    githubUrl: '#'
  },
  {
    id: '5',
    title: 'Zenith Task',
    description: 'AI-powered task management app that auto-prioritizes your day based on deadlines and work habits.',
    tags: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Prisma'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    category: 'Fullstack',
    githubUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechNova Solutions',
    period: '2022 - Present',
    description: [
      'Led the migration of a legacy monolith to a micro-frontend architecture using Next.js.',
      'Improved Core Web Vitals by 40%, resulting in a 15% increase in conversion rates.',
      'Mentored a team of 5 junior developers and established code quality standards.'
    ]
  },
  {
    id: '2',
    role: 'UI/UX Developer',
    company: 'Creative Pulse',
    period: '2020 - 2022',
    description: [
      'Designed and developed award-winning marketing websites for Fortune 500 clients.',
      'Implemented advanced animations using Framer Motion and GSAP.',
      'Collaborated closely with design teams to bridge the gap between Figma and Code.'
    ]
  },
  {
    id: '3',
    role: 'Freelance Full Stack Dev',
    company: 'Self-Employed',
    period: '2018 - 2020',
    description: [
      'Delivered 20+ custom web applications for startups globally.',
      'Specialized in MERN stack development and cloud deployments on AWS.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO at FinEdge',
    content: 'Abu Rayhan is a rare talent who understands both the technical complexities and the design nuances. The dashboard he built is simply world-class.',
    rating: 5,
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Product Manager',
    content: 'Incredible attention to detail. The animations are buttery smooth and the performance is rock solid. Highly recommended.',
    rating: 5,
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    content: 'He transformed our vision into reality. The communication was excellent throughout the entire project.',
    rating: 5,
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];