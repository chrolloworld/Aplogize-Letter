import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        blush: "#FFE9EF",
        "baby-pink": "#FFD3E4",
        "soft-pink": "#FFB6D0",
        peach: "#FFD9BE",
        "rose-deep": "#E8628A",
        "rose-ink": "#B24C6E",
        "brown-ink": "#8C6250",
        paper: "#FFFCF8",
      },
      fontFamily: {
        display: ["var(--font-baloo)", "cursive"],
        hand: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      boxShadow: {
        paper: "0 6px 18px rgba(226, 130, 160, 0.18), 0 1px 2px rgba(226,130,160,0.15)",
        sticker: "0 4px 10px rgba(226, 130, 160, 0.25)",
      },
      keyframes: {
        wobble: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" },
        },
      },
      animation: {
        wobble: "wobble 2.4s ease-in-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
