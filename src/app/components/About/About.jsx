"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBook, faLocationCrosshairs, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Code } from "../txt/code.jsx";
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative overflow-hidden px-4 py-[120px] sm:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-10"
      >
        <div className="w-full h-full">
          <Code language="jsx" showCopyButton={false}>{`import React from "react";

const developer = {
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
}`}</Code>
        </div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* COL_ONE */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <h3 className="text-2xl text-[#1771BF] font-semibold mb-4 text-gray-300">Maciej Lach</h3>
            </motion.div>

            {/* ICONS_BOX */}
            <motion.ul variants={itemVariants} className="flex flex-col gap-4 text-gray-300">
              <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5"> 
                <div className="w-10 h-10 rounded-full bg-[#1771BF]/10 flex items-center justify-center text-[#1771BF]">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                Software Engineer
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5"> 
                <div className="w-10 h-10 rounded-full bg-[#1771BF]/10 flex items-center justify-center text-[#1771BF]">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                1 Year of Experience
              </li>
              <li className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5"> 
                <div className="w-10 h-10 rounded-full bg-[#1771BF]/10 flex items-center justify-center text-[#1771BF]">
                  <FontAwesomeIcon icon={faLocationCrosshairs} />
                </div>
                Poland
              </li>
            </motion.ul>

            {/* TEXT_BOX */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed">
              I am a Software Engineer passionate about creating efficient and user-friendly applications. I enjoy solving complex problems with clean, maintainable code and have experience in Python, JavaScript, and modern web technologies. I thrive in collaborative environments and value continuous learning.
            </motion.p>
          </div>

          {/* COL_TWO */}
          <div className="bg-[#111111] p-10 rounded-3xl border border-white/5">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="mt-2 text-gray-400">Have a project in mind? Send me a message.</p>
            </motion.div>

            <form className="mt-8 flex flex-col gap-5">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#1771BF]"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#1771BF]"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project"
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-[#1771BF]"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                className="flex w-fit items-center gap-3 rounded-lg bg-[#1771BF] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#2589df]"
              >
                Send message
                <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
