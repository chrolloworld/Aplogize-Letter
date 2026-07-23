"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import content from "@/content";

export default function ForYou() {
  const [opened, setOpened] = useState(false);

  async function handleOpen() {
    setOpened(true);
    const confetti = (await import("canvas-confetti")).default;

    const heart = confetti.shapeFromText({ text: "💗", scalar: 2 });
    const sparkle = confetti.shapeFromText({ text: "✨", scalar: 2 });

    const duration = 2200;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.8 },
        shapes: [heart, sparkle],
        scalar: 1.4,
        gravity: 0.7,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.8 },
        shapes: [heart, sparkle],
        scalar: 1.4,
        gravity: 0.7,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    confetti({
      particleCount: 60,
      spread: 100,
      origin: { y: 0.6 },
      shapes: [heart, sparkle],
      scalar: 1.6,
    });
  }

  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-2xl text-center">
        <div className="paper-card notebook-paper px-6 py-12 sm:px-12 sm:py-16 relative overflow-hidden">
          <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 -rotate-2 rounded-sm bg-[#FFB6D0]" />

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep text-shadow-soft">
            {content.forYou.heading}
          </h2>
          <p className="font-hand text-lg text-brown-ink/80 mt-1">{content.forYou.subheading}</p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.button
                  key="box"
                  exit={{ opacity: 0, scale: 0.7 }}
                  onClick={handleOpen}
                  whileHover={{ scale: 1.06, rotate: [-2, 2, -2, 0] }}
                  whileTap={{ scale: 0.92 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-32 sm:w-40 aspect-[800/534]"
                  >
                    <Image
                      src="/mascot/gift.png"
                      alt="Kotak hadiah"
                      fill
                      sizes="160px"
                      className="object-contain drop-shadow-[0_14px_18px_rgba(226,130,160,0.35)]"
                    />
                  </motion.div>
                  <span className="block mt-2 font-hand text-xl text-rose-deep">
                    Klik kadonya yaa 💗
                  </span>
                </motion.button>
              ) : (
                <motion.div
                  key="reveal"
                  initial={{ opacity: 0, scale: 0.7, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <p className="font-hand text-2xl sm:text-3xl text-brown-ink max-w-md leading-relaxed">
                      {content.forYou.message}
                    </p>
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-32 sm:w-40 aspect-[800/541] shrink-0"
                    >
                      <Image
                        src="/mascot/kelinci-love.png"
                        alt="Kelinci sayang memeluk hati"
                        fill
                        sizes="160px"
                        className="object-contain drop-shadow-[0_14px_18px_rgba(226,130,160,0.35)]"
                      />
                    </motion.div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="font-display text-4xl sm:text-5xl font-extrabold text-rose-deep text-shadow-soft"
                  >
                    {content.forYou.finalLine}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Sticker rotate={-8} className="absolute top-6 left-6 text-2xl hidden sm:block">🌸</Sticker>
          <Sticker rotate={10} delay={0.2} className="absolute top-8 right-8 text-2xl hidden sm:block">⭐</Sticker>
          <Sticker rotate={-6} delay={0.35} className="absolute bottom-6 left-10 text-2xl hidden sm:block">🎀</Sticker>
          <Sticker rotate={6} delay={0.5} className="absolute bottom-8 right-6 text-2xl hidden sm:block">🍓</Sticker>
        </div>

        <p className="mt-8 font-hand text-lg sm:text-xl text-rose-ink/80 max-w-lg mx-auto">
          {content.forYou.footer}
        </p>
      </div>
    </div>
  );
}
