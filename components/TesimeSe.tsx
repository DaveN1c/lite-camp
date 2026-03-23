"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TesimeSe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#fbbf24] py-20 md:py-28 overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/20 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-amber-500/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-amber-800/50 text-xs font-bold uppercase tracking-[0.35em] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-amber-800/30 inline-block" />
            LITE camp 2026
            <span className="w-8 h-px bg-amber-800/30 inline-block" />
          </p>

          <h2
            className="font-black text-[#111] leading-tight mb-5"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            Těšíme se na Vás!
          </h2>

          <p className="text-amber-900/60 text-base md:text-xl font-medium max-w-lg mx-auto mb-10 leading-relaxed">
            Místa jsou omezená.<br className="hidden sm:block" />
            Přihlaste své dítě co nejdříve.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#14b8a6] text-white font-black text-sm uppercase tracking-wider hover:bg-[#0d9488] transition-colors rounded-lg"
            >
              Přihlásit dítě →
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-amber-800/25 text-amber-900 font-black text-sm uppercase tracking-wider hover:border-amber-800/50 transition-colors rounded-lg"
            >
              Termíny a ceny
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
