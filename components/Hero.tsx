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

const STAT_DATA = [
  { label: "Celý tábor (2 týdny)", icon: "📅", accent: "#fbbf24", to: 13000, suffix: " Kč", duration: undefined },
  { label: "Jeden týden", icon: "🏷️", accent: "#fb923c", to: 8900, suffix: " Kč", duration: 1600 },
  { label: "Kurz angličtiny v ceně celého tábora", icon: "📚", accent: "#14b8a6", to: 8000, suffix: " Kč", duration: 1500 },
  { label: "Věk dětí", icon: "👦", accent: "#a78bfa", to: undefined, suffix: undefined, duration: undefined },
];

function SlideProgress({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex gap-1.5 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          aria-label={`Snímek ${i + 1}`}
          className="relative rounded-full overflow-hidden focus:outline-none transition-all duration-300"
          style={{
            height: "3px",
            width: i === current ? "30px" : "8px",
            background: "rgba(255,255,255,0.3)",
          }}
        >
          {i === current && (
            <motion.span
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: "#fbbf24" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "linear" }}
              key={`fill-${current}`}
            />
          )}
          {i < current && (
            <span className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.55)" }} />
          )}
        </button>
      ))}
    </div>
  );
}

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
  <>
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
                  <SlideProgress total={SLIDES.length} current={current} onChange={setCurrent} />
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
                <div>
                  <p className="text-white/80 text-[11px] font-mono tracking-wider mb-2">{SLIDES[current].caption}</p>
                  <SlideProgress total={SLIDES.length} current={current} onChange={setCurrent} />
                </div>
                <div className="flex gap-1.5 flex-shrink-0 items-center">
                  <button onClick={prev} className="w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-sm transition-colors text-white rounded-full">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button onClick={next} className="w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-sm transition-colors text-white rounded-full">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>

              <div className="absolute top-5 right-5 z-10">
                <span className="bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">Léto 2026</span>
      </div>
            </div>

            {/* Fun tags below photo */}
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

    </section>

    {/* ── Stat cards + wave — outside section to avoid overflow/flex gap issues ── */}
    {/*
      The wave div is absolutely positioned at top of stats section, translated -100% upward.
      Stats section teal background fills behind transparent wave areas → no white stripe possible.
    */}
    <div className="relative bg-[#14b8a6] pb-10" style={{ paddingTop: 90 }}>
      {/* Wave: anchored to top of this div, floated up into hero.
          Each layer is 200% wide with a seamlessly tiling path (pattern repeats at x=1440).
          Animating x: 0 → -50% scrolls exactly one full repeat → no jump on loop. */}
      <div
        className="absolute inset-x-0 select-none pointer-events-none overflow-hidden"
        style={{ top: 0, height: 90, transform: "translateY(-100%)" }}
      >
        {/* Layer 1 — lightest, slowest */}
        <motion.div
          className="absolute inset-y-0"
          style={{ left: 0, width: "200%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 2880 90" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
            <path d="M0,62 C120,22 240,22 360,62 C480,102 600,102 720,62 C840,22 960,22 1080,62 C1200,102 1320,102 1440,62 C1560,22 1680,22 1800,62 C1920,102 2040,102 2160,62 C2280,22 2400,22 2520,62 C2640,102 2760,102 2880,62 L2880,90 L0,90 Z" fill="rgba(167,243,208,0.55)" />
          </svg>
        </motion.div>
        {/* Layer 2 — medium speed, offset phase */}
        <motion.div
          className="absolute inset-y-0"
          style={{ left: "-15%", width: "200%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 2880 90" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
            <path d="M0,52 C120,12 240,12 360,52 C480,92 600,92 720,52 C840,12 960,12 1080,52 C1200,92 1320,92 1440,52 C1560,12 1680,12 1800,52 C1920,92 2040,92 2160,52 C2280,12 2400,12 2520,52 C2640,92 2760,92 2880,52 L2880,90 L0,90 Z" fill="rgba(45,212,191,0.65)" />
          </svg>
        </motion.div>
        {/* Layer 3 — solid teal, fastest */}
        <motion.div
          className="absolute inset-y-0"
          style={{ left: 0, width: "200%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 2880 90" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
            <path d="M0,46 C120,6 240,6 360,46 C480,86 600,86 720,46 C840,6 960,6 1080,46 C1200,86 1320,86 1440,46 C1560,6 1680,6 1800,46 C1920,86 2040,86 2160,46 C2280,6 2400,6 2520,46 C2640,86 2760,86 2880,46 L2880,90 L0,90 Z" fill="#14b8a6" />
          </svg>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {STAT_DATA.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`rounded-2xl overflow-hidden ${i < 2 ? "bg-emerald-50" : "bg-white"}`}
              style={{ boxShadow: "0 6px 28px rgba(0,0,0,0.11), 0 1px 4px rgba(0,0,0,0.07)" }}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.09, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -7, transition: { duration: 0.18, ease: "easeOut" } }}
            >
              <div style={{ height: 5, background: stat.accent }} />
              <div className="px-5 pt-4 pb-5">
                <div className="text-xl mb-2">{stat.icon}</div>
                <div
                  className="text-[#0f172a] font-black mb-1"
                  style={{ fontFamily: "var(--font-fredoka)", fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)" }}
                >
                  {stat.to !== undefined ? (
                    <CountUp to={stat.to} suffix={stat.suffix ?? ""} duration={stat.duration} />
                  ) : (
                    <span>7–17 let</span>
                  )}
                </div>
                <div className="text-gray-400 font-semibold leading-snug" style={{ fontSize: "0.7rem" }}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
