"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import techStackAnimations from "@/animations/techStackAnimations";
import { techItems } from "@/lib/techStackData";



function TechStack() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-0 relative overflow-hidden">
     
      

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* TEXT_BOX */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          viewport={{ once: true, amount: 0.15 }}
          variants={techStackAnimations.container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {techItems.map((item) => (
            <motion.div 
              key={item.name} 
              variants={techStackAnimations.item}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`relative p-5 flex flex-col gap-4 bg-[#121212]/50 backdrop-blur-sm rounded-2xl border border-white/5 ${item.borderColor} ${item.shadowColor} transition-[background-color,border-color,box-shadow] duration-500 group cursor-default shadow-lg hover:bg-[#181818]/80`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl -z-10 ${item.bgColor} scale-75`} />

              <div className="flex items-start justify-between">
                {/* ICON_BOX */}
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shadow-inner flex-shrink-0`}>
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
