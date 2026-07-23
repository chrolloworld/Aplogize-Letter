"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "💕", "🎀", "🌸", "🍓", "✨", "☁️", "⭐", "🐰",
  "💗", "🎀", "🌷", "✨", "🍓", "☁️", "💕", "⭐",
  "🌸", "💗", "🎀", "✨", "🐰", "☁️", "💕", "🌷",
];

// deterministic pseudo-random so server/client render match
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 999 + salt * 37.13) * 10000;
  return x - Math.floor(x);
}

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6F8] via-[#FFEFF4] to-[#FFE3ED]" />
      {/* soft glow blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFD3E4] opacity-40 blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-[#FFD9BE] opacity-40 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#FFB6D0] opacity-30 blur-3xl" />

      {ITEMS.map((emoji, i) => {
        const left = seeded(i, 1) * 100;
        const top = seeded(i, 2) * 100;
        const size = 16 + seeded(i, 3) * 20;
        const duration = 5 + seeded(i, 4) * 6;
        const delay = seeded(i, 5) * 4;
        const opacity = 0.18 + seeded(i, 6) * 0.22;
        return (
          <motion.span
            key={i}
            className="absolute select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              opacity,
            }}
            animate={{ y: [0, -18, 0], rotate: [0, seeded(i, 7) > 0.5 ? 10 : -10, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {emoji}
          </motion.span>
        );
      })}
    </div>
  );
}
