"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { PageKey } from "./PageShell";

const NAV_ITEMS: { key: PageKey; label: string; src: string }[] = [
  { key: "home", label: "Home", src: "/navbar/home.png" },
  { key: "letter", label: "Letter", src: "/navbar/letter.png" },
  { key: "memories", label: "Memories", src: "/navbar/memories.png" },
  { key: "promise", label: "Promise", src: "/navbar/promise.png" },
  { key: "foryou", label: "For You", src: "/navbar/foryou.png" },
];

export default function Navbar({
  current,
  onNavigate,
}: {
  current: PageKey;
  onNavigate: (key: PageKey) => void;
}) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-xl">
      <nav className="flex items-center justify-between gap-1 sm:gap-2 rounded-[26px] bg-white/50 backdrop-blur-md border border-white/70 shadow-[0_8px_24px_rgba(226,130,160,0.22)] px-1.5 py-1.5 sm:px-2 sm:py-2">
        {NAV_ITEMS.map((item) => {
          const active = current === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className="relative flex-1 flex flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 sm:px-3 sm:py-2 transition-colors"
            >
              {active && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB6D0] to-[#FF9FC0] shadow-sticker"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex flex-col items-center gap-0.5">
                <span className="relative w-6 h-6 sm:w-8 sm:h-8">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="32px"
                    className="object-contain drop-shadow-[0_2px_3px_rgba(178,76,110,0.25)]"
                  />
                </span>
                <span
                  className={`block text-[8.5px] sm:text-[11px] leading-none font-display font-semibold tracking-wide ${
                    active ? "text-white" : "text-rose-ink/70"
                  }`}
                >
                  {item.label}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
