"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Sticker({
  children,
  className = "",
  rotate = 0,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: rotate - 8 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.12, rotate: rotate + (rotate >= 0 ? 6 : -6) }}
      className={`select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
