"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const schedule = [
  { time: "Ráno", activity: "Budíček & rozcvička", detail: "Protažení, cvičení a ranní hry", icon: "🌅", color: "bg-orange-50 border-orange-100", dot: "bg-orange-400" },
  { time: "Snídaně", activity: "Snídaně + úklid chatky", detail: "Ranní hygiena a úklid", icon: "🍳", color: "bg-gray-50 border-gray-100", dot: "bg-gray-300" },
  { time: "Dopoledne", activity: "Angličtina", detail: "Konverzace, hry a aktivity – výuka přirozenou formou", icon: "📖", color: "bg-amber-50 border-amber-200", dot: "bg-amber-400", highlight: true },
  { time: "Poledne", activity: "Oběd + polední klid", detail: "", icon: "🍽️", color: "bg-gray-50 border-gray-100", dot: "bg-gray-300" },
  { time: "Odpoledne", activity: "Táborový program", detail: "Hry, soutěže, výlety, koupání, tvořivé aktivity", icon: "⛵", color: "bg-emerald-50 border-emerald-200", dot: "bg-emerald-400", highlight: true },
  { time: "Večer", activity: "Večeře", detail: "", icon: "🥗", color: "bg-gray-50 border-gray-100", dot: "bg-gray-300" },
  { time: "Před večerkou", activity: "Anglické čtení", detail: "Čtení pohádek a příběhů v angličtině", icon: "🌙", color: "bg-blue-50 border-blue-200", dot: "bg-blue-400", highlight: true },
];

export default function Program() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="program" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Program
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Jak vypadá
            <br />
            <span className="text-gradient-green">typický den?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gray-100" />

            <div className="space-y-3">
              {schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.06 * i }}
                  className="flex items-start gap-4"
                >
                  {/* Dot */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-xl relative z-10 ${item.highlight ? "bg-white shadow-md border border-gray-100" : "bg-white border border-gray-100"}`}>
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-2xl border px-4 py-3 ${item.color}`}>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                      <span className="font-bold text-gray-900 text-sm">{item.activity}</span>
                    </div>
                    {item.detail && (
                      <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {/* English course card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0d3320] to-[#1a5c38] p-8 text-white">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-black mb-4">Kurz angličtiny</h3>
              <ul className="space-y-3">
                {[
                  "Rozřazovací test pro každé dítě",
                  "Přirozená forma výuky",
                  "Konverzace, hry a aktivity",
                  "Hodnota kurzu 8 000 Kč v ceně",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-[#f5a623] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8">
              <h3 className="text-lg font-black text-gray-900 mb-5">Odpolední aktivity</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏊", label: "Koupání" },
                  { icon: "🎮", label: "Hry a soutěže" },
                  { icon: "🌿", label: "Výlety" },
                  { icon: "🎨", label: "Tvořivé aktivity" },
                ].map((a) => (
                  <div key={a.label} className="flex items-center gap-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <span className="text-2xl">{a.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
