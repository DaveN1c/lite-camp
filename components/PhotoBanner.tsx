"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PhotoBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative h-64 md:h-96 overflow-hidden">
      <Image
        src="/fotky/camp-grounds.jpg"
        alt="Areál tábora LITE camp"
        fill
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a2e2c]/65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.35em] mb-4">
          LITE camp 2026
        </p>
        <p
          className="text-white font-black leading-tight tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
        >
          Místa jsou omezená.
        </p>
        <p className="text-white/55 text-sm md:text-base mt-3 mb-8 max-w-md">
          Přihlaste dítě co nejdříve — kapacita tábora je limitovaná.
        </p>
        <a
          href="#contact"
          className="px-8 py-3.5 bg-[#f5a623] text-[#111] font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
        >
          Přihlásit dítě →
        </a>
      </motion.div>
    </div>
  );
}
