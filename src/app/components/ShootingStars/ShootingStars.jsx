"use client";


import { motion } from "framer-motion";

function ShootingStars() {
    return (  
        <>
        <div className="overflow-hidden z-0">
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity,  }} className="absolute top-[80px] left-[100px] rotate-[200deg] inline-block  after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity,  }} className="absolute rotate-[200deg] inline-block  rounded-[50%]   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
            
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity,  }} className="absolute top-[40px] left-[100px] rotate-[200deg] inline-block w-3 h-3 rounded-[50%]   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity,  }} className="absolute   top-[-40px] left-[100px] rotate-[200deg] inline-block   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>

            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity,  }} className="absolute top-[20px] left-[100px] rotate-[200deg] inline-block   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity, delay:2  }} className="absolute   top-[-20px] left-[100px] rotate-[200deg] inline-block   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>

            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity, delay:1 }} className="absolute top-[35px] left-[-60px] rotate-[200deg] inline-block   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
            <motion.span   initial={{ rotate: 0, opacity:1 }} animate={{ x:-850, opacity:0 }} transition={{ duration: 3,repeat: Infinity, delay: 0.5 }} className="absolute   top-[70px] left-[-100px] rotate-[200deg] inline-block   after:content-[''] after:absolute after:top-[50%] after:-translate-y-1/2 after:left-[50%] after:w-20 after:h-[2px] after:bg-[#171717]"></motion.span>
        </div>
        
        </>
        
    );
}

export default ShootingStars;