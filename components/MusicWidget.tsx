"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause, Music2 } from "lucide-react";

export default function MusicWidget({
  title = "Our Song",
  src = "/music/song.mp3",
}: {
  title?: string;
  src?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [askConsent, setAskConsent] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [errored, setErrored] = useState(false);

  // Show the permission pop-up shortly after the page loads
  useEffect(() => {
    const t = setTimeout(() => setAskConsent(true), 900);
    return () => clearTimeout(t);
  }, []);

  function handleAllow() {
    setAskConsent(false);
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setErrored(true));
  }

  function handleDecline() {
    setAskConsent(false);
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setErrored(true));
    }
  }

  return (
    <>
      {/* ---------- Permission pop-up ---------- */}
      <AnimatePresence>
        {askConsent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#5A3B33]/30 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 12, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="paper-card stitch-border relative max-w-xs w-full px-6 py-7 text-center"
            >
              <div className="washi-tape absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 -rotate-3 rounded-sm bg-[#FFB6D0]" />

              <motion.div
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl mb-2"
              >
                🎵
              </motion.div>

              <p className="font-display text-lg font-bold text-rose-deep">
                Mau nyalain musik?
              </p>
              <p className="font-hand text-base text-brown-ink/80 mt-1 leading-snug">
                Ada lagu kecil buat nemenin kamu buka website ini 💗
              </p>

              <div className="mt-5 flex gap-3 justify-center">
                <button
                  onClick={handleDecline}
                  className="rounded-full px-4 py-2 text-sm font-display font-semibold text-rose-ink/70 bg-white/70 hover:bg-white transition-colors shadow-sticker"
                >
                  Nggak dulu
                </button>
                <button
                  onClick={handleAllow}
                  className="rounded-full px-5 py-2 text-sm font-display font-semibold text-white bg-gradient-to-r from-[#FF9FC0] to-[#FFB6D0] shadow-[0_8px_16px_rgba(232,98,138,0.35)]"
                >
                  Yuk, putar 💕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Mini player ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/70 shadow-[0_8px_20px_rgba(226,130,160,0.22)] pl-2 pr-4 py-2"
      >
        <button
          onClick={toggle}
          className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#FFB6D0] to-[#FF9FC0] text-white flex items-center justify-center shadow-sticker active:scale-90 transition-transform"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" className="ml-0.5" />}
        </button>
        <div className="flex items-center gap-1.5 text-rose-ink/80">
          <Music2 size={13} className={playing ? "animate-wobble" : ""} />
          <span className="text-[11px] font-body font-semibold max-w-[110px] truncate">
            {errored ? "Taruh lagu di /public/music" : title}
          </span>
        </div>
        <audio ref={audioRef} src={src} loop onError={() => setErrored(true)} />
      </motion.div>
    </>
  );
}
