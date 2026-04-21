"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generowanie konfiguracji gwiazd po stronie klienta
    const starConfigs = [...Array(10)].map((_, i) => ({
      id: i,
      top: Math.random() * 50,
      left: Math.random() * 50,
      delay: Math.random() * 15,
      duration: 4.0 + Math.random() * 4.0,
      scale: 0.4 + Math.random() * 0.6,
    }));
    setStars(starConfigs);
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: 1200, 
            y: 800, 
            opacity: [0, 0.4, 0.4, 0] 
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
            times: [0, 0.1, 0.9, 1]
          }}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            scale: star.scale,
          }}
        >
          <div className="relative">
            {/* Star Head */}
            <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.9)]" />
            
            {/* Star Tail */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-[1.5px]"
              style={{
                background: "linear-gradient(to right, white, transparent)", 
                transform: "rotate(213.7deg)",
                transformOrigin: "left center",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ShootingStars;
