"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "🔥 Poslední místa",
  "💸 Výhodná sleva",
  "⏰ Pouze pár posledních volných míst",
  "🎒 Celý tábor 9 990 Kč",
  "🌞 Týden už od 6 990 Kč",
];

export default function PromoBar() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <a
      href="#pricing"
      className="fixed top-0 left-0 right-0 z-[60] h-9 flex items-center overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-md cursor-pointer"
      aria-label="Akční sleva — zobrazit ceník"
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((label, i) => (
          <span key={i} className="flex items-center px-6 shrink-0">
            <span>{label}</span>
            <span className="ml-6 text-white/60">✦</span>
          </span>
        ))}
      </motion.div>
    </a>
  );
}
