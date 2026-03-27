"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-[#fbbf24] text-[#111] font-black text-sm uppercase tracking-wider rounded-full shadow-xl shadow-amber-300/50 whitespace-nowrap"
          >
            Přihlásit dítě →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
