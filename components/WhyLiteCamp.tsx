"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features: { num: string; icon: string; label: string; title: string; description: string | string[] }[] = [
  {
    num: "01",
    icon: "waves",
    label: "Zážitky",
    title: "Dva týdny přátelství, her a dobrodružství",
    description:
      "Děti se probouzí s úsměvem a očekáváním, co báječného dnes zažijí a naučí se. Naše hry nejsou jen zábava, je to i učení se spolupráci, toleranci a odvaze. Rozvíjíme u dětí smysl pro týmovou práci, strategii, zvládání překážek, a hlavně dosažení cílů. Pozadu nezůstanou ani tvořivé aktivity. Koupání a vodní radovánky máme na dosah, protože náš camp je v malebném prostředí na břehu Sázavy.",
  },
  {
    num: "02",
    icon: "chat",
    label: "Angličtina",
    title: "Výuka přirozenou formou a mluvením",
    description: [
      "Děti jsou rozdělené podle úrovně AJ",
      "Lektoři s praxí, kteří umí nadchnout pro angličtinu",
      "70% mluvení",
      "Výuka podobná tomu, jak jsme se naučili rodný jazyk",
      "Kurz angličtiny v hodnotě 8.000,- je už součástí ceny za tábor",
    ],
  },
  {
    num: "03",
    icon: "trending",
    label: "Výsledky",
    title: "Skutečný pokrok za 14 dní",
    description:
      "Intenzivní pobyt v prostředí plném angličtiny dětem dá více než školní AJ za celý rok. Domů se děti vrátí s reálným pokrokem, nadšením a chutí se dál angličtině věnovat.",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const base = {
    width: 20, height: 20, viewBox: "0 0 24 24",
    fill: "none" as const, stroke: "currentColor",
    strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "waves":
      return <svg {...base}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" /></svg>;
    case "chat":
      return <svg {...base}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "trending":
      return <svg {...base}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;
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

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Proč LITE camp?
          </p>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
                Tábor, který dá víc než jen prázdniny.
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-medium">
                Děti se vrátí s lepší angličtinou a nezapomenutelnými zážitky.
              </p>
            </div>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Spojujeme táborové prázdniny s intenzivní výukou angličtiny, která bude dál bavit a zároveň si užijí léto naplno!
            </p>
          </div>
        </motion.div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 grid grid-cols-3 gap-2 rounded-xl overflow-hidden"
        >
          {[
            { src: "/fotky/english-class.jpg", alt: "Hodina angličtiny" },
            { src: "/fotky/grass-games.jpg", alt: "Hry na trávě" },
            { src: "/fotky/activity-group.jpg", alt: "Skupinová aktivita" },
          ].map((photo) => (
            <div key={photo.src} className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 33vw, 25vw" />
            </div>
          ))}
        </motion.div>

        {/* Feature rows */}
        <div className="border-t border-teal-100">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + 0.12 * i }}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-12 py-10 border-b border-teal-100 items-start group"
            >
              <div className="flex md:flex-col gap-4 md:gap-3 items-center md:items-start">
                <span className="font-black text-3xl leading-none select-none tabular-nums text-teal-200">
                  {f.num}
                </span>
                <div className="w-8 h-8 bg-teal-50 flex items-center justify-center text-[#14b8a6] group-hover:bg-[#14b8a6] group-hover:text-white transition-colors duration-200 rounded-md">
                  <FeatureIcon name={f.icon} />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6] block mb-2">
                  {f.label}
                </span>
                <h3 className="text-xl font-black text-[#0f172a] leading-snug">{f.title}</h3>
              </div>

              {Array.isArray(f.description) ? (
                <ul className="text-gray-500 text-base leading-relaxed md:pt-0.5 space-y-2 list-none">
                  {f.description.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-gray-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-base leading-relaxed md:pt-0.5">{f.description}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
