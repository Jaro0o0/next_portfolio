"use client";

import Link from "next/link";
import ScrollLink from "../../ScrollLink/ScrollLink";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open , setOpen] = useState(false)
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <nav className="bg-[#121212]/70 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
        {/* LOGO */}
        <Link href="/" className=" text-white text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          ML<span className="text-[#1771BF]">.</span>
        </Link>

        {/* NAVIGATION */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <li>
            <ScrollLink href={isHomePage ? "/#home" : "/"} className="hover:text-white transition-colors">Home</ScrollLink>
          </li>
          {isHomePage && (
            <li>
              <ScrollLink href="/#technologies" className="hover:text-white transition-colors">Technologies</ScrollLink>
            </li>
          )}
          <li>
            <ScrollLink href="/#contact" className="hover:text-white transition-colors">Contact</ScrollLink>
          </li>
          {isHomePage && (
            <li>
              <ScrollLink href="/#work" className="hover:text-white transition-colors">Work</ScrollLink>
            </li>
          )}
        </ul>

        {/* SOCIALS & ACTIONS */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 border-r border-white/10 pr-5">
             {/* Linkedin */}
            <a 
              href="https://www.linkedin.com/in/maciej-lach-46555b404/"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
        
            >
              <LinkedInIcon  fontSize="small"/>
              
            </a>
            {/* Git_Hub */}
            <a 
              href="https://github.com/Jaro0o0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              
            >
              <GitHubIcon fontSize="small"/>
            </a>
          </div>
          
          <Link 
            href="mailto:jar0dev80@gmail.com" 
            className="hidden sm:block text-xs font-bold uppercase tracking-wider bg-white text-black px-4 py-2 rounded-full hover:bg-[#1771BF] hover:text-white transition-all duration-300"
          >
            Hire Me
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white w-6 h-6 flex items-center justify-center">
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-xl" />
          </button>
        </div>
      </nav>
    </header>

    {/* SIDE_Menu */}
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-screen bg-[#121212]/95 backdrop-blur-xl z-[40] flex flex-col items-center justify-center"
        >
          <ul className="flex flex-col items-center gap-10 text-3xl font-bold tracking-tight text-gray-400">
            {/* Home */}
            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ScrollLink href={isHomePage ? "/#home" : "/"} onClick={() => setOpen(false)} className="hover:text-white transition-colors">Home</ScrollLink>
            </motion.li>
            {/* Technologies */}
            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ScrollLink href="/#technologies" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Technologies</ScrollLink>
            </motion.li>

            <motion.li 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ScrollLink href="/#contact" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Contact</ScrollLink>
            </motion.li>
            {isHomePage && (
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ScrollLink href="/#work" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Work</ScrollLink>
              </motion.li>
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
   
    </>
  );
};

export default Header;
