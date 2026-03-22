"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/fotky/group-photo.jpg", caption: "Celý tábor pohromadě — léto 2025" },
  { src: "/fotky/water-fight.jpg", caption: "Odpolední hry a zábava" },
  { src: "/fotky/outdoor-lesson.jpg", caption: "Angličtina pod širým nebem" },
  { src: "/fotky/football.jpg", caption: "Sport a pohyb každý den" },
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
    <section className="bg-[#061e1e] min-h-screen flex flex-col pt-16">

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[#f5a623] inline-block" />
              Letní tábor angličtiny 2026
            </p>

            <h1
              className="font-black text-white leading-[0.9] tracking-tight mb-10"
              style={{ fontSize: "clamp(3.2rem, 7.5vw, 7.5rem)" }}
            >
              Léto plné<br />
              zážitků.<br />
              <span className="text-[#f5a623]">Angličtina</span><br />
              na celý život.
            </h1>

            <p className="text-white/50 text-base leading-relaxed max-w-md mb-5">
              Dva týdny na ostrově na řece Sázavě — koupání, kamarádi
              a výuka angličtiny přirozenou formou. Vaše dítě se vrátí
              jiné. Lepší jiné.
            </p>

            <p className="text-white/25 text-sm mb-12">
              Pro děti od 7 do 17 let &nbsp;·&nbsp; 18. července – 1. srpna 2026
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#f5a623] text-[#111] font-black uppercase tracking-wider text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Přihlásit dítě →
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 border border-white/20 text-white font-semibold text-sm hover:border-white/45 hover:bg-white/5 transition-all"
              >
                Termíny a ceny
              </a>
            </div>
          </motion.div>

          {/* Right — image slider */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ aspectRatio: "4/3" }}>
              {/* Slides */}
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
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption + dots */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between gap-4 z-10">
                <p className="text-white/70 text-[11px] font-mono tracking-wider">
                  {SLIDES[current].caption}
                </p>
                <div className="flex gap-1.5 flex-shrink-0 items-center">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === current ? "bg-[#f5a623] w-5" : "bg-white/40 hover:bg-white/60 w-1"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/55 transition-colors text-white/70 hover:text-white z-10"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/55 transition-colors text-white/70 hover:text-white z-10"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Year badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#f5a623] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5">
                  Léto 2025
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              {
                value: "13 000 Kč", label: "Celý tábor (2 týdny)",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
              },
              {
                value: "8 900 Kč", label: "Jeden týden",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                ),
              },
              {
                value: "8 000 Kč", label: "Kurz angličtiny v ceně",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
              },
              {
                value: "7–17 let", label: "Věk dětí",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0">
                <div className="text-white/25 mb-2.5">{stat.icon}</div>
                <div className="text-white font-black text-xl md:text-2xl mb-1">
                  {stat.value}
                </div>
                <div className="text-white/35 text-xs uppercase tracking-wider">
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
