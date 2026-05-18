"use client";

import { useEffect, useState } from "react";

type Snowflake = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  shape: string;
};

const shapes = [
  // Elegant 4-point diamond crystal star
  "M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z",
  // Classical elegant snowflake star
  "M12 2L13.5 8L19.5 6L15 10.5L21 12L15 13.5L19.5 18L13.5 16L12 22L10.5 16L4.5 18L9 13.5L3 12L9 10.5L4.5 6L10.5 8Z"
];

export function SnowEffect() {
  const [mounted, setMounted] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate exactly 55 snowflakes - richer density (extremely light and high performance)
    const generated = Array.from({ length: 55 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0% to 100% width
      size: Math.random() * 8 + 6, // 6px to 14px (delicate sizing)
      delay: Math.random() * -28, // Negative delay so some snowflakes are already falling on mount
      duration: Math.random() * 14 + 14, // 14s to 28s fall speed (slow, elegant, majestic)
      opacity: Math.random() * 0.45 + 0.25, // 0.25 to 0.70 opacity
      shape: shapes[i % shapes.length]
    }));
    setSnowflakes(generated);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes snow-fall {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(20px);
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
          }
        }
        .snowflake-element {
          position: absolute;
          top: -25px;
          animation-name: snow-fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
        }
      `}} />
      {snowflakes.map((flake) => (
        <svg
          key={flake.id}
          className="snowflake-element text-sky-300/80 drop-shadow-[0_0_5px_rgba(56,189,248,0.55)]"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={flake.shape} />
        </svg>
      ))}
    </div>
  );
}
