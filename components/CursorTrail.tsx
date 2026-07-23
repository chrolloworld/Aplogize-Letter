"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  emoji: string;
};

const EMOJIS = ["💕", "✨", "💗"];

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawn = useRef(0);
  const counter = useRef(0);

  useEffect(() => {
    // Skip on touch-only devices to avoid odd behavior
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    function handleMove(e: MouseEvent) {
      const now = Date.now();
      if (now - lastSpawn.current < 90) return;
      lastSpawn.current = now;

      const id = counter.current++;
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      setParticles((prev) => [
        ...prev.slice(-18),
        { id, x: e.clientX, y: e.clientY, emoji },
      ]);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.9, scale: 0.6, x: p.x, y: p.y }}
            animate={{ opacity: 0, scale: 1.1, y: p.y - 30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((pt) => pt.id !== p.id));
            }}
            className="absolute text-sm -translate-x-1/2 -translate-y-1/2 select-none"
          >
            {p.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
