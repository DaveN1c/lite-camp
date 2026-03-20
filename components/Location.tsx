"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    icon: "🏝️",
    title: "Ostrov na Sázavě",
    desc: "Tábor leží na ostrově ve středním toku Sázavy. Z tábora je po schůdkách přístup k jezu – bezpečný pro koupání i nejmenších dětí.",
  },
  {
    icon: "📍",
    title: "Přesná poloha",
    desc: "Rekreační zařízení Březina, ~6 km od Zruče nad Sázavou. GPS: 49°43′47″N, 15°9′45″E",
  },
  {
    icon: "🏠",
    title: "Chatky",
    desc: "Ubytování v jednoduchých chatkách. Toalety a sprchy jsou v samostatné budově. Celodenní pitný režim zajištěn.",
  },
  {
    icon: "🩺",
    title: "Péče o děti",
    desc: "V areálu je přítomen kvalifikovaný zdravotník a skvělí táboroví vedoucí.",
  },
];

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Místo konání
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Ostrov uprostřed
            <br />
            <span className="text-gradient-green">přírody.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 min-h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=49.746448,15.162569&output=embed&z=14"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Rekreační zařízení Březina"
              className="block w-full h-full"
            />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm card-hover"
              >
                <div className="text-2xl mb-3">{h.icon}</div>
                <h4 className="font-black text-gray-900 text-sm mb-1">{h.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
