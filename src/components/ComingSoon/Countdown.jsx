"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../Hero/Hero";

const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-bold text-[#1771BF] w-12 md:w-16 text-center">
            {value.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mt-2 font-medium">
            {label}
        </span>
    </div>
);

export default function Countdown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!isMounted) return null;

    return (
        <>
            {/* LIGHT EFFECT */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#1771BF]/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" 
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center flex flex-col gap-8 md:gap-12 z-10"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-4xl md:text-8xl font-bold tracking-tighter text-gray-300 text-center"
                >
                    Coming Soon
                </motion.h1>

                <motion.div 
                    variants={itemVariants}
                    className="flex gap-2 md:gap-8 justify-center items-center bg-white/[0.02] border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md shadow-2xl"
                >
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <div className="text-xl md:text-3xl text-gray-700 font-extralight mb-6">:</div>
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <div className="text-xl md:text-3xl text-gray-700 font-extralight mb-6">:</div>
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <div className="text-xl md:text-3xl text-gray-700 font-extralight mb-6">:</div>
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </motion.div>
            </motion.div>
        </>
    );
}
