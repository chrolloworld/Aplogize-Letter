"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import CursorTrail from "@/components/CursorTrail";
import MusicWidget from "@/components/MusicWidget";
import Home from "@/components/pages/Home";
import Letter from "@/components/pages/Letter";
import Memories from "@/components/pages/Memories";
import PromisePage from "@/components/pages/PromisePage";
import ForYou from "@/components/pages/ForYou";
import { PAGE_ORDER, type PageKey } from "@/components/PageShell";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Page() {
  const [current, setCurrent] = useState<PageKey>("home");
  const [direction, setDirection] = useState(1);

  function navigate(key: PageKey) {
    if (key === current) return;
    const from = PAGE_ORDER.indexOf(current);
    const to = PAGE_ORDER.indexOf(key);
    setDirection(to > from ? 1 : -1);
    setCurrent(key);
  }

  function goNext() {
    const idx = PAGE_ORDER.indexOf(current);
    const next = PAGE_ORDER[Math.min(idx + 1, PAGE_ORDER.length - 1)];
    navigate(next);
  }

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden">
      <Background />
      <CursorTrail />
      <Navbar current={current} onNavigate={navigate} />
      <MusicWidget />

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {current === "home" && <Home onNext={goNext} />}
          {current === "letter" && <Letter />}
          {current === "memories" && <Memories />}
          {current === "promise" && <PromisePage />}
          {current === "foryou" && <ForYou />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
