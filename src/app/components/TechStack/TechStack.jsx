"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faTailwindCss, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const techItems = [
  { name: "React", description: "JavaScript Library", icon: faReact, color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { name: "Python", description: "Programming language", icon: faPython, color: "text-yellow-500", bgColor: "bg-blue-500/10" },
  { name: "Tailwind", description: "CSS framework", icon: faTailwindCss, color: "text-sky-400", bgColor: "bg-sky-500/10" },
  { name: "Git", description: "Version control", icon: faGitAlt, color: "text-[#F05032]", bgColor: "bg-orange-600/10" },
  { name: "Django", description: "Web framework", src: "/icons/django.svg", bgColor: "bg-emerald-900/20" },
  { name: "Postgres", description: "Database", src: "/icons/postgres.png", bgColor: "bg-blue-500/10" },
  { name: "NextJS", description: "React framework", src: "/icons/next.svg", bgColor: "bg-white/10", className: "invert brightness-200" },
  { name: "MaterialUI", description: "React library", src: "/icons/material.svg", bgColor: "bg-blue-600/10" },
  { name: "C", description: "Programming language", src: "/icons/C.png", bgColor: "bg-indigo-500/10" },
  { name: "Framer Motion", description: "Animations library", src: "/icons/framer-motion.svg", bgColor: "bg-purple-500/10" },
];

function TechStack() {
  return (
    <section className="py-[95px] px-4 sm:px-0">
      <div className="container mx-auto max-w-7xl">
        {/* TEXT_BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl text-white mb-4 font-bold tracking-tight">Tech stack</h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            I use modern technologies and best practices to build efficient and maintainable solutions. 
            My tech stack is chosen to match project needs while ensuring performance and great user experience.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {techItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="p-4 flex gap-3 bg-[#171717] rounded-xl border border-white/5 hover:border-white/10 transition-all group cursor-default"
            >
              {/* ICON_BOX */}
              <div className={`rounded-lg ${item.bgColor} flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon ? (
                  <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 ${item.color}`} />
                ) : (
                  <Image src={item.src} width={24} height={24} alt={`${item.name} Logo`} className={item.className || ""} />
                )}
              </div>
              {/* TEXT_BOX */}
              <div className="flex flex-col justify-center">
                <span className="text-white text-[15px] font-semibold block leading-tight">{item.name}</span>
                <p className="text-zinc-500 text-[11px] mt-0.5">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;