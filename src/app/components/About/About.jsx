"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBook, faLocationCrosshairs, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Code } from "../txt/code.jsx";
import {codeData} from "../../../lib/codeData.js";
import {TextField} from "@mui/material";

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
    <section id="about" className="relative  px-4 py-[200px] sm:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 overflow-visible opacity-10"
      >
        <div className="w-[50vw] h-screen">
<Code language="jsx" showCopyButton={false}>{
  codeData
}</Code>
        </div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-x-24"
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
             Front-End focused Software Engineer specializing in React, TypeScript and Next.js for building user interfaces using
              Material UI, Framer Motion and Tailwind CSS on the front end. I also have experience with Node.js (Express)
               and Docker.
            </motion.p>
        
          </div>

          {/* COL_Form */}
          <div className="bg-[#111111] p-10 rounded-3xl border border-white/5 md:translate-x-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="mt-2 text-gray-400">Have a project in mind? Send me a message.</p>
            </motion.div>

            <form className="mt-8 flex flex-col gap-5">
              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                      "&:hover fieldset": { borderColor: "#1771BF" },
                      "&.Mui-focused fieldset": { borderColor: "#1771BF" },
                      color: "white",
                    },
                    "& .MuiInputLabel-root": { color: "gray" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#1771BF" },
                    "& input": { color: "white" },
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Your email"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                      "&:hover fieldset": { borderColor: "#1771BF" },
                      "&.Mui-focused fieldset": { borderColor: "#1771BF" },
                      color: "white",
                    },
                    "& .MuiInputLabel-root": { color: "gray" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#1771BF" },
                    "& input": { color: "white" },
                  }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project"
                  required
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                      "&:hover fieldset": { borderColor: "#1771BF" },
                      "&.Mui-focused fieldset": { borderColor: "#1771BF" },
                      color: "white",
                    },
                    "& .MuiInputLabel-root": { color: "gray" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#1771BF" },
                    "& textarea": { color: "white" },
                  }}
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                 className=" text-black px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 flex w-fit items-center gap-3 rounded-lg bg-[#1771BF] px-5 py-3 font-semibold text-white  hover:bg-[#2589df]" 
                
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
