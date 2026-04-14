"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SixEyesBackground() {
  const [mounted, setMounted] = useState(false);
  
  // Mouse tracking for the Iris effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Iris Effect: Radial gradient following mouse */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle 400px at var(--x) var(--y), rgba(179, 229, 252, 0.15), transparent 80%)`,
          // Note: We use CSS variables for performance or direct injection if small
          // But framer-motion can handle direct style updates smoothly
        }}
        // We'll use a safer approach for SSR/Dynamic styles
      >
         <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_600px_at_center,rgba(224,247,250,0.2),transparent_100%)]"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
              left: 0,
              top: 0,
            }}
         />
      </motion.div>

      {/* Floating Ethereal Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} />
      ))}
      
      {/* Subtle Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />
    </div>
  );
}

function Particle() {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 10 + Math.random() * 20;
  const randomSize = 2 + Math.random() * 4;

  return (
    <motion.div
      className="absolute bg-white rounded-full blur-[1px]"
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        top: "-10%",
        opacity: 0.2 + Math.random() * 0.4,
      }}
      animate={{
        y: ["0vh", "110vh"],
        x: ["-20px", "20px", "-20px"],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{
        y: {
          duration: randomDuration,
          repeat: Infinity,
          ease: "linear",
          delay: randomDelay,
        },
        x: {
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: randomDuration,
          repeat: Infinity,
          times: [0, 0.1, 0.9, 1],
          delay: randomDelay,
        }
      }}
    />
  );
}
