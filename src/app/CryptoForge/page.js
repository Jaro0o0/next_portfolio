"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode, faGlobe, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

function CryptoForge() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* BACK BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-28 left-10 z-[60]"
      >
        <Link 
          href="/#portfolio" 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1771BF] transition-all text-sm">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest">Back to work</span>
        </Link>
      </motion.div>

      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* GRID_BACKGROUND */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* LIGHT EFFECT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1771BF]/10 blur-[120px] rounded-full pointer-events-none" 
        />

        {/* TEXT_BOX */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center relative z-10 text-center"
        >
          <h1 className="text-white text-8xl font-bold tracking-tighter">Crypto forge</h1>
          <p className="text-gray-400  text-xl mt-4 mb-5 text-center italic ">Social media app build in Django</p>
          <div className="animate-bounce">
            <FontAwesomeIcon icon={faArrowDown} className="w-15 h-15 text-white" />
          </div>
        </motion.div>
      </section>

      {/* SECTION_PROJECT */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="flex flex-col gap-16 -mt-32"
          >
            {/* IMG_BOX */}
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1771BF] to-cyan-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                src="/portfolio-imgs/portfolio-card-img-one.jpg"
                alt="Social Media Project"
                width={1000}
                height={1000}
                className="relative rounded-md shadow-2xl border border-white/5 w-full object-cover"
              />
            </motion.div>

            {/* TEXT_COL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div variants={itemVariants}>
                <h1 className="text-white text-5xl font-bold mb-6">Project Overview</h1>
                {/* ICONS_BOX */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md border border-white/5">
                    Django
                  </div>
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md border border-white/5">
                    ThreeJS
                  </div>
                  <div className="bg-[#1b1b1b] p-3 text-white rounded-md border border-white/5">
                    PostgreSQL
                  </div>
                </div>
                {/* BUTTONS_BOX */}
                <div className="flex mt-8 gap-4">
                  {/* BBUTTON */}
                  <Link href="#" className="bg-white text-black py-4 px-8 rounded-xl flex items-center gap-3 font-bold hover:bg-[#1771BF] hover:text-white transition-all shadow-xl shadow-black/20">
                    Code <FontAwesomeIcon icon={faCode} className="h-5 w-5" />
                  </Link>
                  {/* BBUTTON */}
                  <Link href="#" className="border border-white/10 text-white py-4 px-8 rounded-xl flex items-center gap-3 font-bold hover:bg-white/5 transition-all">
                    Demo <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.div variants={itemVariants} className="flex items-end text-gray-300 text-lg leading-relaxed">
                <p>
                 This project is a modern cryptocurrency price tracking platform called CryptoForge, built using Next.js for optimized performance, server-side rendering, and fast page loads. It leverages Material UI to create a clean, consistent, and responsive interface, ensuring a professional and intuitive user experience across all devices.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default CryptoForge;
