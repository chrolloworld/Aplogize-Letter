"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import content from "@/content";

export default function Memories() {
  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-3xl">
        <div className="washi-tape absolute -top-3 left-10 w-24 h-7 -rotate-3 rounded-sm z-20 bg-[#FFB6D0]" />

        <div className="paper-card notebook-paper px-6 py-10 sm:px-12 sm:py-12">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-3">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep text-shadow-soft">
                {content.memories.heading}
              </h2>
              <p className="font-hand text-lg text-brown-ink/80 mt-1">{content.memories.subheading}</p>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 sm:w-24 aspect-[800/541]"
            >
              <Image
                src="/mascot/kelinci-love.png"
                alt="Kelinci bahagia memeluk hati"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_10px_14px_rgba(226,130,160,0.35)]"
              />
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-5 place-items-center">
            {content.memories.photos.map((photo, i) => (
              <Sticker key={i} rotate={photo.rotate} delay={0.15 * i} className="w-full max-w-[160px]">
                <div className="polaroid">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-[#FFE0EB] to-[#FFD9BE] rounded-sm overflow-hidden flex items-center justify-center">
                    <ImageOrFallback src={photo.src} caption={photo.caption} />
                  </div>
                  <p className="mt-2 text-center font-hand text-base text-brown-ink">
                    {photo.caption}
                  </p>
                </div>
              </Sticker>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 text-center font-hand text-base text-rose-ink/70"
          >
            {content.memories.note}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function ImageOrFallback({ src, caption }: { src: string; caption: string }) {
  return (
    <>
      <Image
        src={src}
        alt={caption}
        fill
        sizes="200px"
        className="object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="absolute text-3xl pointer-events-none">🐰</span>
    </>
  );
}
