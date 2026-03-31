"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features: { num: string; emoji: string; label: string; title: string; description: string | string[] }[] = [
  {
    num: "01",
    emoji: "🌊",
    label: "Zážitky",
    title: "Dva týdny přátelství, her a dobrodružství",
    description:
      "Děti se probouzí s úsměvem a očekáváním, co báječného dnes zažijí a naučí se. Naše hry nejsou jen zábava, je to i učení se spolupráci, toleranci a odvaze. Rozvíjíme u dětí smysl pro týmovou práci, strategii, zvládání překážek, a hlavně dosažení cílů.",
  },
  {
    num: "02",
    emoji: "🗣️",
    label: "Angličtina",
    title: "Výuka přirozenou formou a mluvením",
    description: [
      "Děti jsou rozdělené podle úrovně AJ",
      "Lektoři s praxí, kteří umí nadchnout pro angličtinu",
      "70% mluvení",
      "Výuka podobná tomu, jak jsme se naučili rodný jazyk",
      "Kurz angličtiny v hodnotě 8.000,- je součástí ceny za tábor",
    ],
  },
  {
    num: "03",
    emoji: "📈",
    label: "Výsledky",
    title: "Skutečný pokrok za 14 dní",
    description:
      "Intenzivní pobyt v prostředí plném angličtiny dětem dá více než školní AJ za celý rok. Domů se děti vrátí s reálným pokrokem, nadšením a chutí se dál angličtině věnovat.",
  },
];

const ACCENT_STARS = [
  { top: "10%", right: "5%", size: 28, delay: 0 },
  { top: "45%", left: "2%", size: 20, delay: 0.8 },
  { bottom: "15%", right: "8%", size: 24, delay: 1.4 },
  { top: "70%", left: "5%", size: 16, delay: 0.4 },
];

const FLOATERS = [
  { top: "8%",  left: "1%",  content: "🏊", size: 20, delay: 0.2, duration: 5.0 },
  { top: "35%", right: "1%", content: "🎒", size: 18, delay: 1.0, duration: 4.5 },
  { top: "60%", left: "3%",  content: "🌈", size: 16, delay: 0.6, duration: 5.8 },
  { bottom: "8%", right: "2%", content: "⭐", size: 18, delay: 1.6, duration: 4.2 },
  { top: "80%", left: "1%",  content: "🎨", size: 16, delay: 2.0, duration: 5.3 },
];

export default function WhyLiteCamp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="dot-pattern absolute inset-0 pointer-events-none" />

      {/* Circle blob decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-100/40 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-teal-50/60 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full bg-amber-50/50 pointer-events-none" />

      {/* Forest silhouette background element */}
      <svg className="absolute bottom-0 right-0 w-1/2 pointer-events-none select-none" style={{ opacity: 0.04 }} viewBox="0 0 600 340" fill="#14b8a6" xmlns="http://www.w3.org/2000/svg">
        <polygon points="80,340 40,220 58,220 20,130 38,130 5,50 -28,130 -10,130 -48,220 -30,220 -70,340" />
        <polygon points="180,340 130,200 152,200 108,100 130,100 90,10 50,100 72,100 28,200 50,200 0,340" />
        <polygon points="290,340 250,230 266,230 234,148 250,148 222,74 194,148 210,148 178,230 194,230 154,340" />
        <polygon points="390,340 355,240 369,240 340,165 354,165 328,96 302,165 316,165 287,240 301,240 266,340" />
        <polygon points="490,340 455,240 469,240 440,165 454,165 428,96 402,165 416,165 387,240 401,240 366,340" />
        <polygon points="590,340 548,218 568,218 528,128 548,128 512,40 476,128 496,128 456,218 476,218 434,340" />
        <rect x="-70" y="330" width="680" height="20" />
      </svg>

      {/* Decorative stars */}
      {ACCENT_STARS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-[#fbbf24] pointer-events-none"
          style={{ top: s.top, bottom: "bottom" in s ? s.bottom : undefined, left: "left" in s ? s.left : undefined, right: "right" in s ? s.right : undefined, fontSize: s.size, opacity: 0.5 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear", delay: s.delay }}
        >
          ✦
        </motion.div>
      ))}

      {/* Floating emoji */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none flex items-center justify-center"
          style={{ top: f.top, bottom: "bottom" in f ? f.bottom : undefined, left: "left" in f ? f.left : undefined, right: "right" in f ? f.right : undefined, fontSize: f.size }}
          animate={{ y: [0, -14, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.content}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#14b8a6] font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3" style={{ fontSize: "0.85rem" }}>
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Proč LITE camp?
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <h2 className="text-[#0f172a] leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontFamily: "var(--font-fredoka)" }}>
                Tábor, který dá víc než jen prázdniny.
              </h2>
              <p className="mt-4 text-gray-600 font-semibold" style={{ fontSize: "1.15rem" }}>
                Děti se vrátí s lepší angličtinou a nezapomenutelnými zážitky.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              Spojujeme táborové prázdniny s intenzivní výukou angličtiny, která bude děti dál bavit a zároveň si užijí léto naplno!
            </p>
          </div>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid grid-cols-3 gap-3 overflow-hidden"
          style={{ borderRadius: "20px" }}
        >
          {[
            { src: "/fotky/english-class.jpg", alt: "Hodina angličtiny", label: "🗣️ Angličtina" },
            { src: "/fotky/grass-games.jpg", alt: "Hry na trávě", label: "🏃 Hry" },
            { src: "/fotky/activity-group.jpg", alt: "Skupinová aktivita", label: "🤝 Skupinky" },
          ].map((photo) => (
            <div key={photo.src} className="relative overflow-hidden group" style={{ aspectRatio: "4/3" }}>
              <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover", transition: "transform 0.4s" }} sizes="(max-width: 768px) 33vw, 25vw" className="group-hover:scale-105" />
              <div className="absolute bottom-2 left-2">
                <span className="bg-white/90 text-gray-700 font-bold px-2 py-1 rounded-full" style={{ fontSize: "0.72rem" }}>{photo.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature rows */}
        <div className="border-t-2 border-teal-100">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + 0.12 * i }}
              className="grid md:grid-cols-[90px_1fr_2fr] gap-6 md:gap-12 py-12 border-b-2 border-teal-100 items-start group"
            >
              <div className="flex md:flex-col gap-4 md:gap-3 items-center md:items-start">
                <span className="font-black text-3xl leading-none select-none tabular-nums" style={{ color: "#ccfbf1", fontFamily: "var(--font-fredoka)" }}>
                  {f.num}
                </span>
                <motion.div
                  className="w-12 h-12 bg-teal-50 flex items-center justify-center group-hover:bg-[#14b8a6] transition-colors duration-200"
                  style={{ borderRadius: "12px", fontSize: "1.4rem" }}
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  {f.emoji}
                </motion.div>
              </div>

              <div>
                <span className="font-bold uppercase tracking-widest text-[#14b8a6] block mb-2" style={{ fontSize: "0.8rem" }}>
                  {f.label}
                </span>
                <h3 className="text-[#0f172a] leading-snug" style={{ fontSize: "1.4rem", fontFamily: "var(--font-fredoka)" }}>{f.title}</h3>
              </div>

              {Array.isArray(f.description) ? (
                <ul className="text-gray-500 leading-relaxed space-y-3 list-none" style={{ fontSize: "1.05rem" }}>
                  {f.description.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#14b8a6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>{f.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
