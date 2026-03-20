"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const included = [
  { icon: "🏠", text: "Ubytování v jednoduchých chatkách (toalety a sprchy v samostatné budově)" },
  { icon: "🍽️", text: "Strava 5× denně + celodenní pitný režim" },
  { icon: "🎓", text: "Intenzivní kurz angličtiny (hodnota 8 000 Kč)" },
  { icon: "⛵", text: "Táborový program" },
  { icon: "🩺", text: "Péče kvalifikovaným zdravotníkem a táborovými vedoucími" },
  { icon: "🛡️", text: "Úrazové pojištění" },
];

const notIncluded = [
  { icon: "🚗", text: "Doprava – ta je vlastní" },
  { icon: "💵", text: "Kapesné" },
  { icon: "🧴", text: "Osobní hygienické potřeby" },
];

export default function Included() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Co je v ceně?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Žádné skryté poplatky.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cena zahrnuje vše podstatné – víte přesně, co dostanete.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-br from-[#0d3320] to-[#1a5c38] p-8"
          >
            <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-[#f5a623] flex items-center justify-center text-[#1a1a1a] text-sm font-black">✓</span>
              Cena zahrnuje
            </h3>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-white/80 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8">
              <h3 className="text-gray-700 font-black text-lg mb-6 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-black">×</span>
                Cena nezahrnuje
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="text-gray-500 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-amber-50 border border-amber-100 p-6 flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Tip:</strong> Strava je k dispozici ve variantách bezlepková, bezlaktózová, vegetariánská i veganská – nutno domluvit předem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
