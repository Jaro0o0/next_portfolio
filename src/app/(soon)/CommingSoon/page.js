"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/components/Hero/Hero";
import BackButton from "@/app/components/BackButton/BackButton";

function CommingSoon() {
    // Target date: 30 days from now (you can change this)
    const [expiryDate] = useState(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = expiryDate - now;

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
    }, [expiryDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#1771BF]">{value.toString().padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">{label}</span>
        </div>
    );

    return (
        <>
            <BackButton />
            <section className="h-screen w-full relative bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] flex items-center justify-center">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center flex flex-col gap-8 z-10"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-8xl font-bold tracking-tighter text-gray-300 text-center"
                    >
                        Comming Soon
                    </motion.h1>

                    {/* COUNTDOWN */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex gap-8 justify-center items-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
                    >
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <div className="text-2xl text-gray-700 font-light mb-5">:</div>
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <div className="text-2xl text-gray-700 font-light mb-5">:</div>
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <div className="text-2xl text-gray-700 font-light mb-5">:</div>
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </motion.div>
                </motion.div>
            </section>
        </>
      );
}

export default CommingSoon;
