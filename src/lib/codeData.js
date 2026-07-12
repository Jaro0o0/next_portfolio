export const codeData = `
const developer = {

  name: "Maciej Lach",

  role: "Software Engineer",

  location: "Poland",

  age: 22,

  email: "maciej@example.com",

  github: "https://github.com/mlach",

  linkedin: "https://linkedin.com/in/mlach",

  twitter: "https://twitter.com/mlach_dev",

  website: "https://mlach.dev",

  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Git",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "GraphQL",
    "REST APIs",
    "Redis",
    "AWS",
    "Vercel",
    "Prisma",
    "Firebase",
    "Socket.io",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Figma",
    "Linux",
    "Nginx"
  ],

  passion: "building clean & efficient code",

  coffee: true,

  remote: true,

  openToWork: true,

  languages_spoken: [
    "Polish",
    "English",
    "German"
  ],

  education: "BSc Computer Science, AGH University",

  certifications: [
    "AWS Cloud Practitioner",
    "Docker Certified Associate",
    "Google UX Design"
  ],

  hobbies: [
    "open source",
    "blogging",
    "gaming",
    "hiking",
    "photography"
  ],

  bio: "Passionate software engineer with 2+ years of experience building full-stack web applications. I love creating elegant solutions to complex problems and contributing to the open source community."

};

const projects = [

  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js and Framer Motion",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript"
    ],
    status: "active",
    stars: 42,
    forks: 8,
    watchers: 15,
    issues: 2,
    repo: "https://github.com/mlach/portfolio",
    demo: "https://mlach.dev",
    featured: true,
    year: 2024,
    license: "MIT"
  },

  {
    id: 2,
    name: "E-Commerce Platform",
    description: "Full-stack online store with Stripe payments and admin dashboard",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Docker"
    ],
    status: "completed",
    stars: 128,
    forks: 23,
    watchers: 45,
    issues: 0,
    repo: "https://github.com/mlach/ecommerce",
    demo: "https://shop.mlach.dev",
    featured: true,
    year: 2024,
    license: "MIT"
  },

  {
    id: 3,
    name: "Task Manager App",
    description: "Productivity app with drag-and-drop and team collaboration",
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "React",
      "WebSocket"
    ],
    status: "in progress",
    stars: 67,
    forks: 11,
    watchers: 22,
    issues: 5,
    repo: "https://github.com/mlach/taskmanager",
    demo: "https://tasks.mlach.dev",
    featured: true,
    year: 2025,
    license: "MIT"
  },

  {
    id: 4,
    name: "Chat Application",
    description: "Real-time messaging with file sharing and video calls",
    tech: [
      "Socket.io",
      "Express",
      "Redis",
      "React",
      "WebRTC"
    ],
    status: "completed",
    stars: 93,
    forks: 17,
    watchers: 30,
    issues: 1,
    repo: "https://github.com/mlach/chatapp",
    demo: "https://chat.mlach.dev",
    featured: false,
    year: 2024,
    license: "Apache-2.0"
  },

  {
    id: 5,
    name: "Weather Dashboard",
    description: "Weather forecasting app with interactive charts",
    tech: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js"
    ],
    status: "archived",
    stars: 34,
    forks: 5,
    watchers: 8,
    issues: 0,
    repo: "https://github.com/mlach/weather",
    demo: null,
    featured: false,
    year: 2023,
    license: "MIT"
  },

  {
    id: 6,
    name: "AI Content Generator",
    description: "GPT-powered content creation with Markdown and PDF export",
    tech: [
      "Next.js",
      "OpenAI API",
      "Prisma",
      "PostgreSQL"
    ],
    status: "active",
    stars: 215,
    forks: 41,
    watchers: 60,
    issues: 3,
    repo: "https://github.com/mlach/ai-writer",
    demo: "https://writer.mlach.dev",
    featured: true,
    year: 2025,
    license: "MIT"
  },

  {
    id: 7,
    name: "DevOps Pipeline Tool",
    description: "CI/CD dashboard for monitoring builds and deployments",
    tech: [
      "Python",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "Grafana"
    ],
    status: "in progress",
    stars: 56,
    forks: 9,
    watchers: 18,
    issues: 4,
    repo: "https://github.com/mlach/devops-tool",
    demo: null,
    featured: false,
    year: 2025,
    license: "MIT"
  },

  {
    id: 8,
    name: "Habit Tracker",
    description: "Gamified habit tracking with streaks and analytics",
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase"
    ],
    status: "completed",
    stars: 88,
    forks: 14,
    watchers: 25,
    issues: 0,
    repo: "https://github.com/mlach/habits",
    demo: "https://habits.mlach.dev",
    featured: false,
    year: 2024,
    license: "MIT"
  },

  {
    id: 9,
    name: "Blog Engine",
    description: "Custom static blog generator with Markdown support and syntax highlighting",
    tech: [
      "Node.js",
      "Marked",
      " Prism.js",
      "CSS"
    ],
    status: "archived",
    stars: 21,
    forks: 3,
    watchers: 5,
    issues: 0,
    repo: "https://github.com/mlach/blog-engine",
    demo: null,
    featured: false,
    year: 2023,
    license: "MIT"
  }

];

const experience = [

  {
    company: "TechCorp",
    role: "Frontend Developer",
    period: "2024-2025",
    description: "Built responsive web apps with React and Next.js",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },

  {
    company: "StartupHub",
    role: "Full-Stack Engineer",
    period: "2023-2024",
    description: "Developed REST APIs and deployed microservices on AWS",
    technologies: [
      "Node.js",
      "Python",
      "AWS",
      "Docker"
    ]
  }

];

const socials = {
  github: "https://github.com/mlach",
  linkedin: "https://linkedin.com/in/mlach",
  twitter: "https://twitter.com/mlach_dev",
  email: "maciej@example.com",
  website: "https://mlach.dev"
};

const stats = {
  total_commits: 2500,
  total_repos: 15,
  total_stars: 744,
  total_forks: 131,
  contributions_this_year: 890,
  longest_streak: 45
};

function getDeveloperInfo(dev) {
  return {
    ...dev,
    experience: "2+ years",
    languages: [
      "JavaScript",
      "TypeScript",
      "Python"
    ],
    editor: "VS Code",
    OS: "Linux",
    timezone: "CET",
    available: true,
    github_contributions: 1200,
    open_source_repos: 12,
    blog_posts: 8
  };
}

function calculateTotalStars(projects) {
  return projects.reduce(
    (acc, p) => acc + p.stars,
    0
  );
}

function calculateTotalForks(projects) {
  return projects.reduce(
    (acc, p) => acc + p.forks,
    0
  );
}

function getFeaturedProjects(projects) {
  return projects.filter(
    p => p.featured
  );
}

function getProjectsByStatus(projects, status) {
  return projects.filter(
    p => p.status === status
  );
}

function getProjectsByYear(projects, year) {
  return projects.filter(
    p => p.year === year
  );
}

function sortProjectsByStars(projects) {
  return [...projects].sort(
    (a, b) => b.stars - a.stars
  );
}

function formatProjectCard(p) {
  return \`[\${p.status.toUpperCase()}] \${p.name} - \${p.stars}⭐ \${p.forks}🍴\`;
}

function getTopProjects(projects, count) {
  return sortProjectsByStars(projects)
    .slice(0, count);
}

const info = getDeveloperInfo(developer);
const totalStars = calculateTotalStars(projects);
const totalForks = calculateTotalForks(projects);
const featured = getFeaturedProjects(projects);
const active = getProjectsByStatus(projects, "active");
const completed = getProjectsByStatus(projects, "completed");
const topProjects = getTopProjects(projects, 3);

export {
  developer,
  projects,
  experience,
  socials,
  stats,
  info,
  totalStars,
  totalForks,
  featured,
  active,
  completed,
  topProjects,
  getDeveloperInfo,
  calculateTotalStars,
  calculateTotalForks,
  getFeaturedProjects,
  getProjectsByStatus,
  getProjectsByYear,
  sortProjectsByStars,
  formatProjectCard,
  getTopProjects
};

export default function About() {
  return <div>About Section</div>;
}`
