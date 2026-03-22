"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    num: "01",
    icon: "waves",
    label: "Zážitky",
    title: "Dva týdny přátelství a dobrodružství",
    description:
      "Koupání v Sázavě, výlety, hry a soutěže v krásné přírodě na ostrově. Tady vznikají kamarádství na celý život — i ta, která začínají anglicky.",
  },
  {
    num: "02",
    icon: "chat",
    label: "Angličtina",
    title: "Výuka přirozenou formou",
    description:
      "Žádná gramatika z tabule. Lektoři angličtiny vyučují konverzací, hrami a aktivitami — přirozeně, stejně jako se děti naučily česky. Kurz v hodnotě 8 000 Kč je součástí ceny.",
  },
  {
    num: "03",
    icon: "trending",
    label: "Výsledky",
    title: "Skutečný pokrok za 14 dní",
    description:
      "Intenzivní pobyt v prostředí plném angličtiny dětem dá víc než celý školní rok. Domů se vrátí s reálným pokrokem — a tím nejlepším motorem: chutí mluvit.",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const base = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "waves":
      return (
        <svg {...base}>
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
        </svg>
      );
    case "chat":
      return (
        <svg {...base}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "trending":
      return (
        <svg {...base}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhyLiteCamp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header — full width */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#f5a623] inline-block" />
            Proč LITE camp?
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">
              Tábor, který dá víc<br />než jen prázdniny.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Spojujeme táborové prázdniny s intenzivní výukou angličtiny. Dvě věci najednou — a obě pořádně.
            </p>
          </div>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid grid-cols-3 gap-2"
        >
          {[
            { src: "/fotky/english-class.jpg", alt: "Hodina angličtiny" },
            { src: "/fotky/grass-games.jpg", alt: "Hry na trávě" },
            { src: "/fotky/activity-group.jpg", alt: "Skupinová aktivita" },
          ].map((photo) => (
            <div key={photo.src} className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
          ))}
        </motion.div>

        {/* Feature rows — editorial style */}
        <div className="border-t border-gray-200">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + 0.12 * i }}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-12 py-10 border-b border-gray-200 items-start group"
            >
              {/* Number + icon */}
              <div className="flex md:flex-col gap-4 md:gap-3 items-center md:items-start">
                <span className="text-gray-200 font-black text-3xl leading-none select-none tabular-nums">
                  {f.num}
                </span>
                <div className="w-8 h-8 bg-[#0a2e2c]/[0.06] flex items-center justify-center text-[#0a2e2c] group-hover:bg-[#0a2e2c] group-hover:text-white transition-colors duration-200">
                  <FeatureIcon name={f.icon} />
                </div>
              </div>

              {/* Label + title */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0a2e2c] block mb-2">
                  {f.label}
                </span>
                <h3 className="text-xl font-black text-[#111] leading-snug">
                  {f.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed md:pt-0.5">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
