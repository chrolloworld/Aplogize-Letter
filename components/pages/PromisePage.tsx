"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import content from "@/content";

export default function PromisePage() {
  const [checked, setChecked] = useState<boolean[]>(
    () => content.promise.promises.map(() => false)
  );

  const allChecked = checked.every(Boolean);

  function toggle(i: number) {
    setChecked((prev) => prev.map((c, idx) => (idx === i ? !c : c)));
  }

  return (
    <div className="relative w-full min-h-[100dvh] flex items-center justify-center px-4 pt-28 pb-16">
      <div className="relative w-full max-w-2xl">
        <div className="washi-tape absolute -top-3 right-12 w-24 h-7 rotate-6 rounded-sm z-20 bg-[#FFD9BE]" />

        <div className="paper-card notebook-paper px-6 py-10 sm:px-12 sm:py-12">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-rose-deep text-shadow-soft">
                {content.promise.heading}
              </h2>
              <p className="font-hand text-lg text-brown-ink/80 mt-1">
                {content.promise.subheading}
              </p>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 sm:w-24 aspect-[800/534]"
            >
              <Image
                src="/mascot/kelinci-promise.png"
                alt="Kelinci berjanji dengan hati"
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_10px_14px_rgba(226,130,160,0.35)]"
              />
            </motion.div>
          </div>

          <ul className="mt-8 space-y-3">
            {content.promise.promises.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * i }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-3 rounded-2xl bg-white/70 hover:bg-white transition-colors px-4 py-3.5 shadow-sticker text-left"
                >
                  <span
                    className={`relative w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                      checked[i]
                        ? "bg-[#FF9FC0] border-[#FF9FC0]"
                        : "border-[#FFB6D0] bg-white"
                    }`}
                  >
                    <AnimatePresence>
                      {checked[i] && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check size={14} strokeWidth={3.2} className="text-white" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                  <span
                    className={`font-body text-base sm:text-lg ${
                      checked[i] ? "text-rose-ink/60 line-through" : "text-brown-ink"
                    }`}
                  >
                    {text}
                  </span>
                  <AnimatePresence>
                    {checked[i] && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: -18 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="ml-auto text-lg"
                      >
                        💗
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </motion.li>
            ))}
          </ul>

          <AnimatePresence>
            {allChecked && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center font-hand text-xl text-rose-deep"
              >
                Semua janji ini beneran dari hati aku 🥹💕
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
