"use client";

import ScrollLink from "../ScrollLink/ScrollLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full relative bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] flex items-center justify-center overflow-hidden">
      {/* LIGHT EFFECT */}
      <motion.div 
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-1/2  w-[600px] h-[400px] bg-[#1771BF]/10 blur-[120px] rounded-full pointer-events-none" 
      />
     
      {/* HERO_HEADER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center flex flex-col gap-5 z-10 p-19"
      >
            <motion.span variants={itemVariants} className="text-[#1771BF] font-medium tracking-widest">
              BASED IN POLAND
            </motion.span>
            
            <motion.h1 variants={itemVariants} className=" text-7xl md:text-8xl font-bold tracking-tighter text-gray-300">
              Software Engineer
            </motion.h1>
            
            <motion.span variants={itemVariants} className="text-xl text-gray-400">
            Front-end focused software engineer.
            </motion.span>
            
            {/* BUTTONS_BOX */}
            <motion.div variants={itemVariants} className=" flex flex-col md:flex-row gap-4 justify-center mt-4">
              {/* WORK BUTTON */}
              <ScrollLink 
                href="/#work" 
                className="bg-gray-300 text-black py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors font-semibold shadow-lg shadow-white/5"
              >
                See Work
                <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
              </ScrollLink>
              
              {/* CV BUTTON */}
              <a
                href="/Maciej_Lach_CV.pdf" 
                className="flex items-center gap-2 py-3 px-8 rounded-full border border-[#1771BF] text-[#1771BF] hover:bg-[#1771BF]/10 transition-colors font-semibold"
                download
              >
                Download CV
                <FontAwesomeIcon icon={faDownload} className="h-5 w-5" />
              </a>
            </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
