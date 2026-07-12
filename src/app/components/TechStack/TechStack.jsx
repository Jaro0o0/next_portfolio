"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faTailwindCss, faJs, faTypescript, faCss3Alt, faDocker, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const techItems = [
  { name: "Next.js", description: "Framework", src: "/icons/next.svg", bgColor: "bg-white/10", borderColor: "hover:border-white/50", className: "invert brightness-200", shadowColor: "group-hover:shadow-white/10" },
  { name: "React.js", description: "Library", icon: faReact, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "hover:border-cyan-400/50", shadowColor: "group-hover:shadow-cyan-400/10" },
  { name: "JavaScript", description: "Language", icon: faJs, color: "text-yellow-400", bgColor: "bg-yellow-400/10", borderColor: "hover:border-yellow-400/50", shadowColor: "group-hover:shadow-yellow-400/10" },
  { name: "TypeScript", description: "Language", icon: faTypescript, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "hover:border-blue-500/50", shadowColor: "group-hover:shadow-blue-500/10" },
  { name: "React Redux", description: "Library", src: "/icons/redux.png", bgColor: "bg-indigo-500/10", borderColor: "hover:border-indigo-500/50", shadowColor: "group-hover:shadow-indigo-500/10" },
  { name: "React Router", description: "Library", icon: faRoute, color: "text-red-400", bgColor: "bg-red-500/10", borderColor: "hover:border-red-400/50", shadowColor: "group-hover:shadow-red-400/10" },
  { name: "Framer Motion", description: "Animations", src: "/icons/framer-motion.svg", bgColor: "bg-purple-500/10", borderColor: "hover:border-purple-500/50", shadowColor: "group-hover:shadow-purple-500/10" },
  { name: "Python", description: "Language", icon: faPython, color: "text-yellow-500", bgColor: "bg-blue-500/10", borderColor: "hover:border-yellow-500/50", shadowColor: "group-hover:shadow-yellow-500/10" },
  { name: "CSS", description: "Styling", icon: faCss3Alt, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "hover:border-blue-500/50", shadowColor: "group-hover:shadow-blue-500/10" },
  { name: "Tailwind CSS", description: "CSS Framework", icon: faTailwindCss, color: "text-sky-400", bgColor: "bg-sky-500/10", borderColor: "hover:border-sky-400/50", shadowColor: "group-hover:shadow-sky-400/10" },
  { name: "Material UI", description: "UI Library", src: "/icons/material.svg", bgColor: "bg-blue-600/10", borderColor: "hover:border-blue-600/50", shadowColor: "group-hover:shadow-blue-600/10" },
  { name: "Vite", description: "Build Tool", src: "/icons/vite.svg", bgColor: "bg-violet-500/10", borderColor: "hover:border-violet-400/50", shadowColor: "group-hover:shadow-violet-400/10" },
  { name: "Jest", description: "Testing", src: "/icons/jest.svg", className: "invert", bgColor: "bg-red-500/10", borderColor: "hover:border-red-400/50", shadowColor: "group-hover:shadow-red-400/10" },
  { name: "ESLint", description: "Linter", src: "/icons/eslint.svg", className: "invert", bgColor: "bg-violet-500/10", borderColor: "hover:border-violet-400/50", shadowColor: "group-hover:shadow-violet-400/10" },
  { name: "Docker", description: "Containerization", icon: faDocker, color: "text-blue-400", bgColor: "bg-blue-500/10", borderColor: "hover:border-blue-400/50", shadowColor: "group-hover:shadow-blue-400/10" },
  { name: "Node.js", description: "Runtime", icon: faNodeJs, color: "text-green-400", bgColor: "bg-green-500/10", borderColor: "hover:border-green-400/50", shadowColor: "group-hover:shadow-green-400/10" },
  { name: "Express", description: "Backend Framework", src: "/icons/express.svg", className: "invert", bgColor: "bg-zinc-500/10", borderColor: "hover:border-zinc-200/50", shadowColor: "group-hover:shadow-zinc-200/10" },
  { name: "Cursor AI", description: "AI Tool", src: "/icons/cursor.png", bgColor: "bg-white/10", borderColor: "hover:border-white/50", shadowColor: "group-hover:shadow-purple-500/10" },
  { name: "Copilot AI", description: "AI Tool", src: "/icons/copilot.svg", className: "invert brightness-200", bgColor: "bg-white/10", borderColor: "hover:border-white/50", shadowColor: "group-hover:shadow-white/10" },
];

function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-0 relative overflow-hidden">
     
      

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* TEXT_BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center sm:text-left"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-6 font-bold tracking-tight">
            Tech stack
          </h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg font-medium">
            The technologies I reach for in my projects.
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
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {techItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 10 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ y: -5 }}
              className={`relative p-5 flex flex-col gap-4 bg-[#121212]/50 backdrop-blur-sm rounded-2xl border border-white/5 ${item.borderColor} ${item.shadowColor} transition-all duration-500 group cursor-default shadow-lg hover:bg-[#181818]/80`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl -z-10 ${item.bgColor} scale-75`} />

              <div className="flex items-start justify-between">
                {/* ICON_BOX */}
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out shadow-inner flex-shrink-0`}>
                  {item.icon ? (
                    <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 ${item.color}`} />
                  ) : (
                    <div className="relative w-6 h-6">
                      <Image 
                        src={item.src} 
                        fill 
                        alt={`${item.name} Logo`} 
                        className={`${item.className || ""} object-contain`} 
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* TEXT_BOX */}
              <div className="flex flex-col gap-1">
                <span className="text-white text-base font-bold tracking-tight group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <p className="text-zinc-500 text-[11px] font-semibold leading-tight uppercase tracking-wider opacity-70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
