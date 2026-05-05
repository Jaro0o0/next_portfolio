"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  return (
    <motion.div 
      initial={false}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-28 left-10 z-[60]"
    >
      <Link 
        href="/#work" 
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
      >
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#1771BF] transition-all text-sm">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest">Back to work</span>
      </Link>
    </motion.div>
  );
};

export default BackButton;
