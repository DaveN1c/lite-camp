"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "🏕️",
    tag: "Zážitky",
    title: "Dva týdny přátelství a dobrodružství",
    description:
      "Koupání, výlety, hry a soutěže v krásné přírodě na ostrově uprostřed Sázavy. Vzpomínky, které zůstanou navždy.",
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
  {
    icon: "🗣️",
    tag: "Angličtina",
    title: "Výuka přirozenou formou",
    description:
      "Lektoři angličtiny vyučují pomocí konverzací, her a aktivit – stejně přirozeně, jako se děti naučily mluvit česky.",
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    highlight: true,
  },
  {
    icon: "📚",
    tag: "Výsledky",
    title: "Lepší angličtina = lepší známky",
    description:
      "Dvoutýdenní intenzivní kurz v hodnotě 8 000 Kč je součástí ceny. Děti se vrátí domů s reálným pokrokem.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
];

export default function WhyLiteCamp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Proč LITE camp?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Tábor, který dá víc
            <br />
            než jen <span className="text-gradient-green">prázdniny.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className={`relative group card-hover rounded-3xl p-8 bg-gradient-to-br ${f.bg} border ${f.border} overflow-hidden`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.gradient} rounded-t-3xl`} />

              <div className="text-5xl mb-6">{f.icon}</div>

              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${f.gradient} text-white mb-3`}>
                {f.tag}
              </span>

              <h3 className="text-xl font-black text-gray-900 mb-3 leading-snug">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
