"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const schedule = [
  { time: "Ráno", activity: "Budíček & rozcvička", detail: "Protažení, cvičení a ranní hry" },
  { time: "Snídaně", activity: "Snídaně + úklid chatky", detail: "Ranní hygiena a úklid" },
  { time: "Dopoledne", activity: "Angličtina", detail: "Konverzace, hry a aktivity — výuka přirozenou formou" },
  { time: "Poledne", activity: "Oběd + polední klid", detail: "" },
  { time: "Odpoledne", activity: "Táborový program", detail: "Hry, soutěže, výlety, koupání, tvořivé aktivity" },
  { time: "Večer", activity: "Večeře", detail: "" },
  { time: "Před večerkou", activity: "Anglické čtení", detail: "Čtení pohádek a příběhů v angličtině" },
];

function CheckMark() {
  return (
    <svg
      width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Program() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="program" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#f5a623] inline-block" />
            Program
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">
              Jak vypadá typický den?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Každý den je nabitý — ráno angličtina, odpoledne dobrodružství, večer pohádky v angličtině.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Schedule table */}
          <div className="border border-gray-200 overflow-hidden">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="flex items-stretch border-b border-gray-200 last:border-b-0 bg-white"
              >
                <div className="flex-1 px-5 py-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider w-24 flex-shrink-0">
                      {item.time}
                    </span>
                    <span className="font-black text-sm text-[#0a2e2c]">
                      {item.activity}
                    </span>
                  </div>
                  {item.detail && (
                    <p className="text-xs text-gray-400 mt-0.5 ml-[6.75rem]">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* English course */}
            <div className="bg-[#0a2e2c] p-8 md:p-10">
              <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Kurz angličtiny
              </p>
              <ul className="space-y-4">
                {[
                  "Rozřazovací test pro každé dítě",
                  "Přirozená forma výuky",
                  "Konverzace, hry a aktivity",
                  "Hodnota kurzu 8 000 Kč v ceně",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckMark />
                    <span className="text-white/70 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities photos */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { src: "/fotky/football.jpg", label: "Sport a hry" },
                { src: "/fotky/science-activity.jpg", label: "Tvořivé aktivity" },
                { src: "/fotky/instructor-group.jpg", label: "Skupinový program" },
                { src: "/fotky/cards-grass.jpg", label: "Angličtina venku" },
              ].map((item) => (
                <div key={item.src} className="relative overflow-hidden group" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
