"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import content from "@/content";

export default function Home({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-3xl">
        {/* washi tape */}
        <div className="washi-tape absolute -top-3 left-8 w-24 h-7 -rotate-6 rounded-sm z-20 bg-[#FFB6D0]" />
        <div className="washi-tape absolute -top-2 right-10 w-20 h-7 rotate-12 rounded-sm z-20 bg-[#FFD9BE]" />

        <div className="paper-card notebook-paper px-6 py-10 sm:px-12 sm:py-14 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <Sticker rotate={-4} className="inline-block mb-4">
              <span className="inline-flex items-center gap-1 text-xs font-display font-bold text-rose-deep bg-white rounded-full px-3 py-1 shadow-sticker stitch-border">
                for my pretty girl 🎀
              </span>
            </Sticker>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl font-bold text-rose-deep text-shadow-soft leading-tight"
            >
              {content.home.title}
            </motion.h1>

            <div className="mt-5 space-y-2">
              {content.home.lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="font-body text-brown-ink/90 text-base sm:text-lg"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF9FC0] to-[#FFB6D0] text-white font-display font-bold px-7 py-3.5 shadow-[0_10px_20px_rgba(232,98,138,0.35)]"
            >
              {content.home.button}
            </motion.button>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-52 sm:w-64 aspect-[504/703]"
            >
              <Image
                src="/mascot/kelinci-sedih.png"
                alt="Kelinci sedih memegang hati"
                fill
                sizes="256px"
                className="object-contain drop-shadow-[0_14px_18px_rgba(226,130,160,0.35)]"
                priority
              />
            </motion.div>
            <Sticker rotate={-8} className="absolute -top-2 left-2 text-3xl">
              ☁️
            </Sticker>
            <Sticker rotate={10} delay={0.2} className="absolute top-4 right-0 text-3xl">
              🍓
            </Sticker>
            <Sticker rotate={-6} delay={0.35} className="absolute bottom-2 left-0 text-2xl">
              ✨
            </Sticker>
          </div>
        </div>

        {/* bottom scattered stickers */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            { text: "You mean the world to me 🍎", rotate: -6 },
            { text: "I love you so much!", rotate: 4 },
            { text: "Thank you for being in my life 🌷", rotate: -3 },
          ].map((note, i) => (
            <Sticker key={i} rotate={note.rotate} delay={0.5 + i * 0.15}>
              <div className="stitch-border bg-[#FFFDF9] rounded-xl px-4 py-3 shadow-sticker font-hand text-lg text-brown-ink max-w-[160px] text-center">
                {note.text}
              </div>
            </Sticker>
          ))}
        </div>
      </div>
    </div>
  );
}
