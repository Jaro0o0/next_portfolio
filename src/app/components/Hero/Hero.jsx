"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  return (
    <section className="h-screen w-full relative bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] flex items-center justify-center">
      {/* HERO_HEADER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center flex flex-col gap-5 z-10"
      >
        <motion.span variants={itemVariants} className="text-[#1771BF] font-medium tracking-widest">
          BASED IN POLAND
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="text-8xl font-bold tracking-tighter text-gray-300">
          Software Engineer
        </motion.h1>
        
        <motion.span variants={itemVariants} className="text-xl text-gray-400">
          Building digital products, brands, and experiences.
        </motion.span>
        
        {/* BUTTONS_BOX */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center mt-4">
          {/* WORK BUTTON */}
          <Link 
            href="#portfolio" 
            className="bg-gray-300 text-black py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors font-semibold shadow-lg shadow-white/5"
          >
            See Work
            <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
          </Link>
          
          {/* CV BUTTON */}
          <a
            href="/cv.pdf" 
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
