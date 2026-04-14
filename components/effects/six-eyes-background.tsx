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
        className="absolute w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(224,247,250,0.18)_0%,transparent_70%)] rounded-full blur-[20px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      />

      {/* Floating Ethereal Particles */}
      {[...Array(15)].map((_, i) => (
        <Particle key={i} />
      ))}
      
      {/* Subtle Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10" />
    </div>
  );
}

function Particle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 15 + Math.random() * 20;
  const randomSize = 2 + Math.random() * 3;

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        top: "-10%",
        opacity: 0,
        filter: "blur(1px)",
        willChange: "transform, opacity",
      }}
      animate={{
        y: ["0vh", "110vh"],
        x: ["-15px", "15px", "-15px"],
        opacity: [0, 0.5, 0.5, 0],
      }}
      transition={{
        y: {
          duration: randomDuration,
          repeat: Infinity,
          ease: "linear",
          delay: randomDelay,
        },
        x: {
          duration: 5 + Math.random() * 5,
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
