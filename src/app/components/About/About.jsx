"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBook, faLocationCrosshairs, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
    <section id="about" className="py-[120px] px-4 sm:px-0">
      <div className="container mx-auto max-w-7xl">
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8">What I Do</motion.h2>
            {/* ICONS_BOX */}
            <ul className="space-y-6">
              {[
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "API Integration"
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 text-gray-400 group"
                >
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#1771BF] group-hover:border-[#1771BF] transition-all">
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 group-hover:text-white" />
                  </div>
                  <span className="text-lg group-hover:text-white transition-colors">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;