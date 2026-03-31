"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PhotoBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative bg-[#14b8a6] overflow-hidden py-16 md:py-20">
      {/* Background blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-teal-700/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 pointer-events-none" />

      {/* Floating emoji */}
      {[
        { top: "15%", left: "3%",  content: "🌞", size: 28, delay: 0.2, dur: 4.5 },
        { top: "20%", right: "4%", content: "🎉", size: 24, delay: 1.0, dur: 5.0 },
        { bottom: "15%", left: "5%", content: "⭐", size: 22, delay: 0.6, dur: 4.8 },
        { bottom: "20%", right: "3%", content: "🏕️", size: 26, delay: 1.4, dur: 5.3 },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none hidden md:flex items-center justify-center"
          style={{
            top: "top" in f ? f.top : undefined,
            bottom: "bottom" in f ? f.bottom : undefined,
            left: "left" in f ? f.left : undefined,
            right: "right" in f ? f.right : undefined,
            fontSize: f.size,
          }}
          animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.content}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <p className="text-white/70 text-xs font-bold uppercase tracking-[0.35em] mb-4">
          LITE camp 2026
        </p>
        <h2
          className="text-white font-black leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "var(--font-fredoka)" }}
        >
          Léto plné angličtiny čeká! ☀️
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Kapacita tábora je limitovaná — zajistěte dítěti místo a nezapomenutelné léto plné zábavy.
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-10 py-4 bg-[#fbbf24] text-[#111] font-black uppercase tracking-wider text-sm rounded-xl shadow-lg shadow-amber-300/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Přihlásit dítě →
        </motion.a>
      </motion.div>
    </div>
  );
}
