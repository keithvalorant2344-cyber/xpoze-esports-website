"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "28%", size: 4, delay: 0 },
  { left: "16%", top: "67%", size: 3, delay: 0.4 },
  { left: "24%", top: "46%", size: 5, delay: 0.2 },
  { left: "35%", top: "18%", size: 3, delay: 0.8 },
  { left: "45%", top: "72%", size: 4, delay: 0.1 },
  { left: "54%", top: "35%", size: 3, delay: 0.7 },
  { left: "63%", top: "58%", size: 5, delay: 0.5 },
  { left: "72%", top: "22%", size: 3, delay: 0.3 },
  { left: "83%", top: "63%", size: 4, delay: 0.9 },
  { left: "92%", top: "38%", size: 3, delay: 0.6 }
];

export function ParticleField() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute left-[6%] top-[18%] h-px w-56 origin-left rotate-[-18deg] bg-xpoze-purple/60 shadow-glow animate-pulseLine" />
      <div className="absolute right-[8%] top-[34%] h-px w-72 origin-left rotate-[24deg] bg-xpoze-cyan/50 animate-pulseLine" />
      <div className="absolute bottom-[18%] left-[42%] h-px w-64 origin-left rotate-[-10deg] bg-white/40 animate-pulseLine" />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(168,85,247,0.9)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -16, 0],
                  opacity: [0.24, 0.9, 0.24]
                }
          }
          transition={{
            duration: 3.4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
