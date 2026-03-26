"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Terka",
    text: "Než jsem se sem přijela nesnášela jsem angličtinu. Teď mám angličtinu mnoooohem radši. I love LITE camp.",
    accent: "bg-[#fbbf24]",
  },
  {
    name: "Zuzka",
    text: "Mě se tu vlastně líbilo vše, nemám co vytknout. Učitelé jsou bezva, je s nimi při hodinách sranda, baví se s námi jako s kamarádama a ne jako učitel se žákem. Týmová práce SUPER. NEJLEPŠÍ TÁBOR!",
    accent: "bg-[#14b8a6]",
  },
  {
    name: "Jirka",
    text: "Na tomto táboře se mi velmi líbilo. Poznal jsem zde mnoho kamarádů. Vedoucí byli moc příjemní a snaživí. Nikdy na tento tábor nezapomenu.",
    accent: "bg-[#fbbf24]",
  },
  {
    name: "Karolína",
    text: "Na táboře jsem byla letos už podruhé, opět se mi tu moc líbilo. Výuka úžasná, skvělý lektor. Hry super. Skvělá týmová hra. Ale i ostatní byli super! Děkuji za skvělý týden!",
    accent: "bg-[#14b8a6]",
  },
  {
    name: "Vašek",
    text: "Bylo to tady úžasné. Prostředí dobré a hry dobře vymyšlené. Dopolední angličtina výborná, hodně jsem se toho naučil. Kuchařky vařily skvěle. Celý tábor se mi líbil.",
    accent: "bg-[#fbbf24]",
  },
  {
    name: "Anna",
    text: "Moc se mi tu líbilo. Hodně sem se tady naučila. A příští rok bych chtěla přijet znovu. Hry byly taky super. Prostě se mi tady strašně líbilo.",
    accent: "bg-[#14b8a6]",
  },
  {
    name: "Martin",
    text: "Strašně se mi tady líbilo. Chci sem jet zase. Nejvíc se mi líbila hra Boj o vlajku a stezka odvahy. Vychovatelé byli hodní a angličtina se mi taky líbila.",
    accent: "bg-[#fbbf24]",
  },
  {
    name: "Veronika",
    text: "Líbilo se mi tady, protože učení AJ bylo formou hry a líbily se mi soutěže. Byli tu hodní lektoři.",
    accent: "bg-[#14b8a6]",
  },
];

function QuoteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-20 flex-shrink-0">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3a8.37 8.37 0 0 1 2.07-1.99L9 6.305c-.86.63-1.625 1.42-2.294 2.37C6.035 9.62 5.7 10.79 5.7 12.16c0 1.9.55 3.37 1.65 4.42C8.45 17.63 9.74 18.16 11.19 18.16c.5 0 .96-.06 1.39-.18l-.67-1.34c-.24.08-.47.11-.72.11zm6.808 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.824-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3a8.37 8.37 0 0 1 2.07-1.99l-1.484-1.86c-.86.63-1.625 1.42-2.294 2.37-.672.945-1.007 2.115-1.007 3.485 0 1.9.55 3.37 1.65 4.42 1.1 1.05 2.39 1.58 3.84 1.58.5 0 .96-.06 1.39-.18l-.67-1.34c-.24.08-.47.11-.72.11z" />
    </svg>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Reference
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              Co říkají děti.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Tyhle slova nepsali rodiče ani marketéři — napsaly je děti po návratu domů.
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              whileHover={{ y: -5, scale: 1.02, rotate: i % 2 === 0 ? 0.6 : -0.6 }}
              whileTap={{ scale: 0.98 }}
              className="break-inside-avoid bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-default"
            >
              <div className="flex items-start gap-3 mb-4">
                {/* Avatar circle */}
                <div className={`w-9 h-9 rounded-full ${review.accent} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-sm">
                    {review.name[0]}
                  </span>
                </div>
                <div className="pt-1">
                  <p className="font-black text-[#0f172a] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">Účastník tábora</p>
                </div>
                <div className={`ml-auto ${review.accent === "bg-[#fbbf24]" ? "text-[#fbbf24]" : "text-[#14b8a6]"}`}>
                  <QuoteIcon />
                </div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
