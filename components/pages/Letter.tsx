"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import content from "@/content";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.button
              key="envelope"
              exit={{ opacity: 0, scale: 0.85 }}
              onClick={() => setOpened(true)}
              className="mx-auto flex flex-col items-center gap-5 group"
            >
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-44 sm:w-80 sm:h-56"
              >
                <div className="absolute inset-0 rounded-2xl bg-[#FFE0EB] stitch-border shadow-paper" />
                <div
                  className="absolute inset-x-0 top-0 h-1/2 bg-[#FFCADD] rounded-t-2xl origin-top"
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 70%)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">💌</span>
                </div>
                <Sticker rotate={-10} className="absolute -top-4 -left-4 text-2xl">🎀</Sticker>
                <Sticker rotate={12} delay={0.2} className="absolute -top-3 -right-3 text-2xl">✨</Sticker>
              </motion.div>
              <span className="font-hand text-2xl text-rose-deep group-hover:scale-105 transition-transform">
                Klik untuk buka suratnya 💗
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scaleY: 0.3, y: -40 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top center" }}
              className="paper-card notebook-paper px-6 py-10 sm:px-12 sm:py-12 relative"
            >
              <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 rotate-2 rounded-sm bg-[#FFD9BE]" />

              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep text-shadow-soft">
                  {content.letter.heading}
                </h2>
              </div>

              <div className="space-y-4 pb-16 sm:pb-4 sm:pr-28">
                {content.letter.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.35, duration: 0.5 }}
                    className="font-hand text-xl sm:text-2xl leading-relaxed text-brown-ink"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + content.letter.paragraphs.length * 0.35 + 0.3 }}
                className="mt-8 text-right font-hand text-2xl text-rose-deep sm:pr-28"
              >
                {content.letter.signature}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 180, damping: 14 }}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-24 sm:w-32 aspect-[800/542] pointer-events-none"
              >
                <Image
                  src="/mascot/kelinci-surat.png"
                  alt="Kelinci membaca surat"
                  fill
                  sizes="140px"
                  className="object-contain drop-shadow-[0_10px_14px_rgba(226,130,160,0.35)]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
