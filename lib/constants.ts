// Portfolio Data Constants
export const PERSONAL_INFO = {
  name: "Gajendra Kumawat",
  role: "Full stack developer",
  bio: `Full Stack Developer with 1+ year experience building scalable web and mobile applications. Expert in React.js, Next.js,
Node.js, NestJS, MongoDB, PostgreSQL, and React Native. Proven experience in eCommerce platforms, REST APIs,
RBAC, JWT authentication, and cloud deployment.`,
  email: "gajendrakmt491@gmail.com",
  github: "https://github.com/Gajendrakmt9079",
  linkedin: "https://www.linkedin.com/in/gajendra-kumawat-693b30370",
  twitter: "https://x.com/gajendrakmt491",
};

export const RESUME = "https://gajendrakmt491.github.io/resume/";

export const TECH_STACK = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "GSAP", category: "frontend" },
  { name: "Three.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React/Next.js", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "GSAP/Framer", level: 85, icon: "🎬" },
      { name: "Three.js/WebGL", level: 80, icon: "🎮" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "GraphQL", level: 80, icon: "📊" },
      { name: "REST APIs", level: 90, icon: "🔌" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "NestJS", level: 75, icon: "🪺⚙️" },
      ,
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "AWS/Vercel", level: 75, icon: "☁️" },
      { name: "CI/CD", level: 80, icon: "♾️" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 95, icon: "📚" },
      { name: "Figma", level: 85, icon: "🎭" },
      { name: "Webpack/Vite", level: 80, icon: "📦" },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Immersive 3D Portfolio",
    description:
      "Award-winning portfolio showcasing 3D interactions, smooth GSAP animations, and cutting-edge web technologies.",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    liveUrl: "https://gejendrakmt.netlify.app/",
    sourceUrl: "https://github.com/Gajendrakmt9079/Personal-portfolio.git",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "High-performance e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "https://thrihard.netlify.app/",
    sourceUrl: "https://github.com/Gajendrakmt9079/mern-stack-web-collection/tree/master/skincare/skincare/skincare-project",
    featured: true,
  },
  {
    id: 3,
    title: "Quick-commerce",
    description:
      "Modern e-commerce application with real-time inventory, payment integration, and admin dashboard.",
    image: "/projects/ai-chat.jpg",
    tech: ["React-native", "Spring boot", "WebSocket", "Tailwind"],
    liveUrl: "https://github.com/Gajendrakmt9079/Chaiwala-React-native.git",
    sourceUrl: "https://github.com/Gajendrakmt9079/Chaiwala-React-native.git",
    featured: false,
  },
  {
    id: 4,
    title: "Drone Delivery",
    description:
      "Drone delivery application with real-time inventory, payment integration, and admin dashboard.",
    image: "/projects/task-manager.jpg",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    liveUrl: "https://thedeadsec-dronehouse.netlify.app/https://tasks.example.com",
    sourceUrl: "https://github.com/Gajendrakmt9079/mern-stack-web-collection",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Mathionix Technologies",
    role: "Full Stack Developer",
    duration: "Aug 2025 - Present",
    description: `Designed and developed REST APIs for cart, orders, payments, and inventory modules.
Implemented RBAC for Admin, Seller, and Customer roles using JWT authentication.
Improved API performance by optimizing MongoDB queries and Redis caching`,
  },
  {
    id: 2,
    company: "Brandzaha Creative Agency",
    role: "Full Stack Developer",
    duration: "Jan 2025 - June 2025",
    description:
      "Developed web applications for multiple startups. Worked with modern stack: React, Node.js, AWS. Successfully launched  products to market.",
  },
  {
    id: 3,
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2024 - 2025",
    description:
      "work as full stack developer for multiple startups and work on different projects as freelancer .",
  },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Maharishi arvind institute of science and management",
    degree: "Master of Computer Applications",
    duration: "2025 - Present",
    description:
      "persuing master of computer applications from maharishi arvind institute of science and management.",
  },
  {
    id: 2,
    institution: "Parishkar College of Global Excellence",
    degree: "Bachelor of Computer Applications",
    duration: "2022 - 2025",
    description:
      "Graduated with honors. Focus on software engineering, algorithms, and web technologies from parishkar college of global excellence.",
  },
];
