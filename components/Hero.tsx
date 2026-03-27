"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "@/components/CountUp";

const SLIDES = [
  { src: "/fotky/group-photo.jpg", caption: "Celý tábor pohromadě — léto 2025" },
  { src: "/fotky/water-fight.jpg", caption: "Odpolední hry a zábava" },
  { src: "/fotky/river-panorama.jpg", caption: "Koupání na Sázavě každý den" },
  { src: "/fotky/outdoor-lesson.jpg", caption: "Angličtina pod širým nebem" },
  { src: "/fotky/football.jpg", caption: "Sport a pohyb každý den" },
  { src: "/fotky/campfire.jpg", caption: "Táborák a večerní program" },
];

// Floating decorative shapes — deterministic positions to avoid hydration mismatch
const HEADLINE_LINES = [
  { text: "Léto plné", teal: false },
  { text: "zážitků.", teal: false },
  { text: "Angličtina", teal: true },
  { text: "na celý život.", teal: false },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const lineVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const FLOATERS = [
  { top: "18%", left: "4%",  size: 10, color: "#14b8a6", opacity: 0.18, delay: 0,   duration: 4.2 },
  { top: "62%", left: "6%",  size: 7,  color: "#fbbf24", opacity: 0.22, delay: 1.1, duration: 5.6 },
  { top: "38%", left: "2%",  size: 5,  color: "#14b8a6", opacity: 0.14, delay: 0.6, duration: 3.8 },
  { top: "80%", left: "9%",  size: 8,  color: "#fbbf24", opacity: 0.16, delay: 1.8, duration: 4.9 },
  { top: "12%", right: "5%", size: 9,  color: "#fbbf24", opacity: 0.18, delay: 0.3, duration: 5.1 },
  { top: "55%", right: "3%", size: 6,  color: "#14b8a6", opacity: 0.15, delay: 2,   duration: 4.4 },
  { top: "75%", right: "7%", size: 11, color: "#14b8a6", opacity: 0.12, delay: 0.8, duration: 6   },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  return (
    <section className="bg-[#f0fdf9] min-h-screen flex flex-col pt-16 relative overflow-hidden">

      {/* Floating decorative shapes */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none select-none hidden lg:block"
          style={{
            top: f.top,
            left: "left" in f ? f.left : undefined,
            right: "right" in f ? f.right : undefined,
            width: f.size,
            height: f.size,
            backgroundColor: f.color,
            opacity: f.opacity,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#14b8a6] inline-block" />
              Letní tábor s angličtinou 2026
            </p>

            <motion.h1
              className="font-black text-[#0f172a] leading-[0.9] tracking-tight mb-10 overflow-hidden"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7.5rem)" }}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {HEADLINE_LINES.map((line) => (
                <motion.span
                  key={line.text}
                  variants={lineVariants}
                  className={`block ${line.teal ? "text-[#14b8a6]" : ""}`}
                >
                  {line.text}
                </motion.span>
              ))}
            </motion.h1>

            {/* Mobile image slider — lg:hidden, shares state with desktop slider */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="lg:hidden mt-8 mb-8"
            >
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg shadow-teal-100"
                style={{ aspectRatio: "16/9" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={SLIDES[current].src}
                      alt={SLIDES[current].caption}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="100vw"
                      priority={current === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    Léto 2026
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 flex items-end justify-between z-10 gap-3">
                  <p className="text-white/75 text-[10px] font-mono tracking-wider truncate">
                    {SLIDES[current].caption}
                  </p>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === current ? "bg-[#fbbf24] w-5" : "bg-white/50 w-1.5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <p className="text-gray-600 text-base leading-relaxed max-w-md mb-5">
              Dva týdny na ostrově na řece Sázavě — koupání, kamarádi
              a výuka angličtiny přirozenou formou. Vaše dítě se vrátí nadšené.
            </p>

            <p className="text-gray-400 text-sm mb-12">
              Pro děti od 7 do 17 let &nbsp;·&nbsp; 18. července – 1. srpna 2026
            </p>

            <div className="flex gap-3">
              <motion.a
                href="#contact"
                className="flex-1 sm:flex-none px-5 sm:px-8 py-4 bg-[#fbbf24] text-[#111] font-black uppercase tracking-wider text-xs sm:text-sm inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Přihlásit dítě →
              </motion.a>
              <motion.a
                href="#pricing"
                className="flex-1 sm:flex-none px-5 sm:px-8 py-4 border-2 border-[#14b8a6]/30 text-[#14b8a6] font-bold text-xs sm:text-sm flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/5 transition-all"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Termíny a ceny
              </motion.a>
            </div>
          </div>

          {/* Right — image slider */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-teal-100" style={{ aspectRatio: "4/3" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES[current].src}
                    alt={SLIDES[current].caption}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={current === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption + dots */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between gap-4 z-10">
                <p className="text-white/80 text-[11px] font-mono tracking-wider">
                  {SLIDES[current].caption}
                </p>
                <div className="flex gap-1.5 flex-shrink-0 items-center">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "bg-[#fbbf24] w-6" : "bg-white/50 hover:bg-white/70 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white z-10 rounded-full"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white z-10 rounded-full"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  Léto 2026
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-teal-100">
            {[
              {
                label: "Celý tábor (2 týdny)",
                content: <CountUp to={13000} suffix=" Kč" />,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
              },
              {
                label: "Jeden týden",
                content: <CountUp to={8900} suffix=" Kč" duration={1600} />,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                ),
              },
              {
                label: "Kurz angličtiny v ceně",
                content: <CountUp to={8000} suffix=" Kč" duration={1500} />,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                label: "Věk dětí",
                content: <span>7–17 let</span>,
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div key={stat.label} className="py-7 px-6 first:pl-0">
                <div className="text-[#14b8a6]/50 mb-2">{stat.icon}</div>
                <div className="text-[#0f172a] font-black text-xl md:text-2xl mb-1">
                  {stat.content}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
