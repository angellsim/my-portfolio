"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SixEyesBackground() {
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 });

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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#eefaff]">
      {/* Crystalline Sky Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#e0f2fe_100%)] opacity-80" />

      {/* Circular Iris (Restored) */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,transparent_70%)] blur-[40px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] border border-sky-400/20 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "conic-gradient(from 0deg at 50% 50%, transparent, rgba(56,189,248,0.08), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Triangular Shards (Crystalline depth) */}
      {[...Array(10)].map((_, i) => (
        <Shard key={i} index={i} smoothX={smoothX} smoothY={smoothY} />
      ))}

      {/* Specular Aura Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-transparent to-white" />
      </div>
    </div>
  );
}

function Shard({ index, smoothX, smoothY }: { index: number, smoothX: any, smoothY: any }) {
  const angle = (index * 36) * (Math.PI / 180);
  const distance = 180 + index * 45;
  
  return (
    <motion.div
      className="absolute bg-white/25 backdrop-blur-[1px]"
      style={{
        width: 30 + (index % 4) * 15,
        height: 30 + (index % 4) * 15,
        left: 0,
        top: 0,
        x: smoothX,
        y: smoothY,
        translateX: `calc(-50% + ${Math.cos(angle) * distance}px)`,
        translateY: `calc(-50% + ${Math.sin(angle) * distance}px)`,
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        rotate: index * 72,
      }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.15, 1],
        rotate: [index * 72, index * 72 + 20, index * 72],
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}



