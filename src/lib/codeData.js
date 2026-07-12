 export const codeData = `const developer = {
  name: "Maciej Lach",
  role: "Software Engineer",
  location: "Poland",
  age: 22,
  email: "maciej@example.com",
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
    "Git",
    "Tailwind CSS",
    "Framer Motion",
  ],
  passion: "building clean & efficient code",
  coffee: true,
  remote: true,
};

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "active",
    stars: 42,
  },
  {
    name: "E-Commerce Platform",
    description: "Full-stack online store",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "completed",
    stars: 128,
  },
  {
    name: "Task Manager App",
    description: "Productivity application",
    tech: ["Python", "FastAPI", "MongoDB", "React"],
    status: "in progress",
    stars: 67,
  },
  {
    name: "Chat Application",
    description: "Real-time messaging platform",
    tech: ["Socket.io", "Express", "Redis", "React"],
    status: "completed",
    stars: 93,
  },
  {
    name: "Weather Dashboard",
    description: "Weather forecasting app",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    status: "archived",
    stars: 34,
  },
];

function getDeveloperInfo(dev) {
  return {
    ...dev,
    experience: "1+ year",
    languages: ["JavaScript", "TypeScript", "Python"],
    editor: "VS Code",
    OS: "Linux",
    timezone: "CET",
    available: true,
  };
}

function calculateTotalStars(projects) {
  return projects.reduce((acc, p) => acc + p.stars, 0);
}

const info = getDeveloperInfo(developer);
const totalStars = calculateTotalStars(projects);

export { developer, projects, info, totalStars };
export default function About() {
  return <div>About Section</div>;
}`