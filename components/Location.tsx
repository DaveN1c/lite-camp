"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const highlights = [
  {
    icon: "waves",
    title: "Ostrov na Sázavě",
    desc: "Tábor leží na ostrově ve středním toku Sázavy. Z tábora je po schůdkách přístup k jezu — bezpečný pro koupání i pro nejmenší děti.",
  },
  {
    icon: "pin",
    title: "Přesná poloha",
    desc: "Rekreační zařízení Březina, přibližně 6 km od Zruče nad Sázavou. GPS: 49°43′47″N, 15°9′45″E",
  },
  {
    icon: "home",
    title: "Ubytování",
    desc: "Ubytování v jednoduchých chatkách. Toalety a sprchy jsou v samostatné budově. Celodenní pitný režim zajištěn.",
  },
  {
    icon: "cross",
    title: "Péče o děti",
    desc: "V areálu je přítomen kvalifikovaný zdravotník a zkušení táboroví vedoucí po celou dobu tábora.",
  },
];

function HighlightIcon({ name }: { name: string }) {
  const base = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
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
    case "pin":
      return (
        <svg {...base}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "home":
      return (
        <svg {...base}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "cross":
      return (
        <svg {...base}>
          <path d="M12 2v20M2 12h20" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-24 md:py-36 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#f5a623] inline-block" />
            Místo konání
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">
              Ostrov uprostřed přírody.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Rekreační zařízení Březina leží na ostrově na Sázavě — příroda na dosah ruky, od rána do večera.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 border border-gray-300 overflow-hidden">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[420px] lg:border-r border-gray-300"
          >
            <iframe
              src="https://maps.google.com/maps?q=49.746448,15.162569&output=embed&z=14"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Rekreační zařízení Březina"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`px-8 md:px-10 py-7 bg-white ${
                  i < highlights.length - 1 ? "border-b border-gray-200" : ""
                } group`}
              >
                <h4 className="font-black text-[#111] text-sm mb-1.5 flex items-center gap-2.5">
                  <span className="w-6 h-6 bg-[#0a2e2c]/[0.06] flex items-center justify-center text-[#0a2e2c] group-hover:bg-[#0a2e2c] group-hover:text-white transition-colors duration-200">
                    <HighlightIcon name={h.icon} />
                  </span>
                  {h.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed ml-8.5">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* River photos strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-px grid grid-cols-2 md:grid-cols-3 border border-gray-300 overflow-hidden"
        >
          {[
            { src: "/fotky/river.jpg", alt: "Sázava — výuka u řeky" },
            { src: "/fotky/camp-grounds.jpg", alt: "Areál tábora Březina" },
            { src: "/fotky/outdoor-lesson.jpg", alt: "Venkovní hodina" },
          ].map((photo, i) => (
            <div
              key={photo.src}
              className={`relative h-52 md:h-64 ${i === 2 ? "hidden md:block" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10" />
              {i === 0 && (
                <div className="absolute bottom-4 left-5">
                  <span className="bg-[#0a2e2c] text-white text-[10px] font-mono tracking-wider px-3 py-1.5 uppercase">
                    49°43′47″N, 15°9′45″E
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
