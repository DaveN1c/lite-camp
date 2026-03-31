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

// Fun floating decorations — stars, suns, blobs
const FLOATERS = [
  { top: "14%", left: "3%",  content: "⭐", size: 22, delay: 0,   duration: 4.2 },
  { top: "58%", left: "5%",  content: "🌿", size: 20, delay: 1.1, duration: 5.6 },
  { top: "32%", left: "1%",  content: "✦",  size: 18, delay: 0.6, duration: 3.8, color: "#fbbf24" },
  { top: "78%", left: "7%",  content: "🎯", size: 18, delay: 1.8, duration: 4.9 },
  { top: "8%",  right: "4%", content: "☀️", size: 26, delay: 0.3, duration: 5.1 },
  { top: "50%", right: "2%", content: "⭐", size: 18, delay: 2,   duration: 4.4 },
  { top: "72%", right: "6%", content: "🏕️", size: 22, delay: 0.8, duration: 6   },
  { top: "25%", right: "8%", content: "✦",  size: 14, delay: 1.5, duration: 5.3, color: "#14b8a6" },
  { top: "42%", left: "2%",  content: "🌟", size: 16, delay: 2.2, duration: 4.7 },
  { top: "88%", right: "3%", content: "🎪", size: 20, delay: 0.5, duration: 5.8 },
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
    <section
      className="min-h-screen flex flex-col pt-16 relative overflow-hidden"
      style={{ background: "linear-gradient(175deg, #e0f9f5 0%, #f0fdf9 55%, #fffbeb 100%)" }}
    >
      {/* Background rolling hills silhouette */}
      <svg className="absolute bottom-16 left-0 right-0 w-full pointer-events-none select-none" style={{ opacity: 0.05 }} viewBox="0 0 1440 200" fill="#14b8a6" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,200 L0,140 Q120,60 240,120 Q360,180 480,100 Q600,20 720,90 Q840,160 960,80 Q1080,0 1200,70 Q1320,140 1440,100 L1440,200 Z" />
      </svg>

      {/* Floating decorative elements */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none flex items-center justify-center"
          style={{
            top: f.top,
            left: "left" in f ? f.left : undefined,
            right: "right" in f ? f.right : undefined,
            fontSize: f.size,
            color: "color" in f ? f.color : undefined,
            zIndex: 0,
          }}
          animate={{ y: [0, -16, 0], rotate: [0, 5, -5, 0] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {f.content}
        </motion.div>
      ))}

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <div>
            <motion.h1
              className="text-[#0f172a] leading-[0.92] tracking-tight mb-10 overflow-hidden"
              style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)", fontFamily: "var(--font-fredoka)", fontWeight: 800 }}
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

            {/* Mobile slider */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="lg:hidden mt-8 mb-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-teal-100" style={{ aspectRatio: "16/9" }}>
                <AnimatePresence mode="wait">
                  <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                    <Image src={SLIDES[current].src} alt={SLIDES[current].caption} fill style={{ objectFit: "cover" }} sizes="100vw" priority={current === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">Léto 2026</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 flex items-end justify-between z-10 gap-3">
                  <p className="text-white/75 text-[10px] font-mono tracking-wider truncate">{SLIDES[current].caption}</p>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {SLIDES.map((_, i) => (
                      <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#fbbf24] w-5" : "bg-white/50 w-1.5"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 leading-relaxed max-w-md mb-4"
              style={{ fontSize: "1.1rem" }}
            >
              Dva týdny na ostrově na řece Sázavě — koupání, kamarádi
              a výuka angličtiny přirozenou formou. Vaše dítě se vrátí nadšené.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-gray-400 mb-10"
              style={{ fontSize: "0.95rem" }}
            >
              Pro děti od 7 do 17 let &nbsp;·&nbsp; 18. července – 1. srpna 2026
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-3 mb-10"
            >
              <motion.a
  href="#contact"
  className="flex-1 sm:flex-none px-6 sm:px-10 py-4 bg-[#fbbf24] text-[#111] font-black uppercase tracking-wider inline-flex items-center justify-center gap-2"
  style={{ fontSize: "1rem", borderRadius: "12px" }}
  whileHover={{ scale: 1.05, y: -3 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Přihlásit dítě 🎒
</motion.a>
              <motion.a
                href="#pricing"
                className="flex-1 sm:flex-none px-6 sm:px-10 py-4 border-2 border-[#14b8a6]/40 text-[#14b8a6] font-bold flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/5 transition-all"
                style={{ fontSize: "1rem", borderRadius: "12px" }}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Termíny a ceny
              </motion.a>
            </motion.div>

          </div>

          {/* Right — image slider */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden shadow-2xl shadow-teal-100" style={{ aspectRatio: "4/3", borderRadius: "24px" }}>
              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} className="absolute inset-0">
                  <Image src={SLIDES[current].src} alt={SLIDES[current].caption} fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 100vw, 50vw" priority={current === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between gap-4 z-10">
                <p className="text-white/80 text-[11px] font-mono tracking-wider">{SLIDES[current].caption}</p>
                <div className="flex gap-1.5 flex-shrink-0 items-center">
                  {SLIDES.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#fbbf24] w-6" : "bg-white/50 hover:bg-white/70 w-1.5"}`} />
                  ))}
                </div>
              </div>

              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white z-10 rounded-full">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white z-10 rounded-full">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>

              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">Léto 2026</span>
              </div>
            </div>

            {/* Fun badge below photo */}
            <div className="flex gap-3 mt-4">
              {["🌊 Sázava", "🏕️ 14 dní", "🗣️ Angličtina"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-teal-100 text-gray-600 font-bold rounded-full shadow-sm" style={{ fontSize: "0.8rem" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy bottom into Marquee */}
      <div className="relative z-10" style={{ marginBottom: "-2px" }}>
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0,32 C180,64 360,0 540,32 C720,64 900,0 1080,32 C1260,64 1380,20 1440,32 L1440,64 L0,64 Z" fill="#14b8a6" />
        </svg>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-t-0" style={{ borderTop: "none" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-teal-100">
            {[
              { label: "Celý tábor (2 týdny)", content: <CountUp to={13000} suffix=" Kč" />, icon: "📅", bgClass: "bg-emerald-50/60" },
              { label: "Jeden týden", content: <CountUp to={8900} suffix=" Kč" duration={1600} />, icon: "🏷️", bgClass: "bg-emerald-50/60" },
              { label: "Kurz angličtiny v ceně", content: <CountUp to={8000} suffix=" Kč" duration={1500} />, icon: "📚", bgClass: "" },
              { label: "Věk dětí", content: <span>7–17 let</span>, icon: "👦", bgClass: "" },
            ].map((stat) => (
              <div key={stat.label} className={`py-7 px-6 transition-colors duration-300 ${stat.bgClass}`}>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-[#0f172a] font-black text-xl md:text-2xl mb-1" style={{ fontFamily: "var(--font-fredoka)" }}>
                  {stat.content}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider font-bold">
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
