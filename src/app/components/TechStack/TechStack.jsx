"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faTailwindCss, faGitAlt, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const techItems = [
  { name: "JavaScript", description: "Language", icon: faJs, color: "text-yellow-400", bgColor: "bg-yellow-400/10", borderColor: "hover:border-yellow-400/50", shadowColor: "group-hover:shadow-yellow-400/10" },
  { name: "Node.js", description: "Runtime", icon: faNodeJs, color: "text-green-500", bgColor: "bg-green-500/10", borderColor: "hover:border-green-500/50", shadowColor: "group-hover:shadow-green-500/10" },
  { name: "React", description: "Library", icon: faReact, color: "text-cyan-400", bgColor: "bg-cyan-500/10", borderColor: "hover:border-cyan-400/50", shadowColor: "group-hover:shadow-cyan-400/10" },
  { name: "Python", description: "Language", icon: faPython, color: "text-yellow-500", bgColor: "bg-blue-500/10", borderColor: "hover:border-yellow-500/50", shadowColor: "group-hover:shadow-yellow-500/10" },
  { name: "Tailwind", description: "CSS Framework", icon: faTailwindCss, color: "text-sky-400", bgColor: "bg-sky-500/10", borderColor: "hover:border-sky-400/50", shadowColor: "group-hover:shadow-sky-400/10" },
  { name: "Git", description: "Version Control", icon: faGitAlt, color: "text-[#F05032]", bgColor: "bg-orange-600/10", borderColor: "hover:border-[#F05032]/50", shadowColor: "group-hover:shadow-orange-600/10" },
  { name: "Django", description: "Web Framework", src: "/icons/django.svg", bgColor: "bg-emerald-900/20", borderColor: "hover:border-emerald-500/50", shadowColor: "group-hover:shadow-emerald-500/10" },
  { name: "Postgres", description: "Database", src: "/icons/postgres.png", bgColor: "bg-blue-500/10", borderColor: "hover:border-blue-400/50", shadowColor: "group-hover:shadow-blue-400/10" },
  { name: "NextJS", description: "Framework", src: "/icons/next.svg", bgColor: "bg-white/10", borderColor: "hover:border-white/50", className: "invert brightness-200", shadowColor: "group-hover:shadow-white/10" },
  { name: "MaterialUI", description: "UI Library", src: "/icons/material.svg", bgColor: "bg-blue-600/10", borderColor: "hover:border-blue-600/50", shadowColor: "group-hover:shadow-blue-600/10" },
  { name: "React Redux", description: "Library", src: "/icons/redux.png", bgColor: "bg-indigo-500/10", borderColor: "hover:border-indigo-500/50", shadowColor: "group-hover:shadow-indigo-500/10" },
  { name: "Framer Motion", description: "Animations", src: "/icons/framer-motion.svg", bgColor: "bg-purple-500/10", borderColor: "hover:border-purple-500/50", shadowColor: "group-hover:shadow-purple-500/10" },
];

function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-0 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.05)_0,transparent_70%)] pointer-events-none" />

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4"
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