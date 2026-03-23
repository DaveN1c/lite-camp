"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "1. týden",
    dates: "18. 7. – 25. 7. 2026",
    duration: "7 dní",
    price: "8 900",
    highlight: false,
    perks: [
      "Ubytování v chatkách",
      "Strava 5× denně + pitný režim",
      "Kurz angličtiny",
      "Táborový program",
      "Úrazové pojištění",
    ],
  },
  {
    name: "Celý tábor",
    dates: "18. 7. – 1. 8. 2026",
    duration: "14 dní",
    price: "13 000",
    highlight: true,
    badge: "Nejoblíbenější",
    perks: [
      "Ubytování v chatkách",
      "Strava 5× denně + pitný režim",
      "Kurz angličtiny (2× týden)",
      "Veškerý táborový program",
      "Úrazové pojištění",
    ],
  },
  {
    name: "2. týden",
    dates: "25. 7. – 1. 8. 2026",
    duration: "7 dní",
    price: "8 900",
    highlight: false,
    perks: [
      "Ubytování v chatkách",
      "Strava 5× denně + pitný režim",
      "Kurz angličtiny",
      "Táborový program",
      "Úrazové pojištění",
    ],
  },
];

function CheckMark({ highlight }: { highlight: boolean }) {
  return (
    <svg
      width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke={highlight ? "#fbbf24" : "#14b8a6"}
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#fffbeb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Termíny a ceny
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              Vyberte si termín.
            </h2>
            <p className="text-gray-500 text-base max-w-sm leading-relaxed">
              Kurz angličtiny v hodnotě{" "}
              <strong className="text-[#14b8a6]">8 000 Kč</strong> je součástí
              každého termínu. Bez příplatků.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-0 md:border md:border-amber-200 rounded-xl md:rounded-2xl overflow-hidden">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`flex flex-col relative rounded-xl md:rounded-none ${
                plan.highlight
                  ? "bg-[#14b8a6] shadow-lg shadow-cyan-200"
                  : "bg-white"
              } ${
                i < plans.length - 1
                  ? "md:border-b-0 md:border-r md:border-amber-200"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-wider rounded-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10 flex-1">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? "text-teal-200" : "text-[#14b8a6]"}`}>
                  {plan.duration}
                </p>
                <h3 className={`text-2xl font-black mb-1 ${plan.highlight ? "text-white" : "text-[#0f172a]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-10 ${plan.highlight ? "text-teal-200/70" : "text-gray-400"}`}>
                  {plan.dates}
                </p>

                <div
                  className="mb-10 flex items-end gap-1.5 pb-8 border-b border-dashed"
                  style={{ borderColor: plan.highlight ? "rgba(255,255,255,0.2)" : "#fde68a" }}
                >
                  <span
                    className={`font-black leading-none ${plan.highlight ? "text-white" : "text-[#0f172a]"}`}
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 font-bold ${plan.highlight ? "text-teal-200" : "text-gray-400"}`}>
                    Kč
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <CheckMark highlight={plan.highlight} />
                      <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 md:px-10 pb-8 md:pb-10">
                <a
                  href="#contact"
                  className={`block w-full py-4 text-center font-black text-sm uppercase tracking-wider transition-colors rounded-lg ${
                    plan.highlight
                      ? "bg-[#fbbf24] text-[#111] hover:bg-[#f59e0b]"
                      : "bg-[#14b8a6] text-white hover:bg-[#0d9488]"
                  }`}
                >
                  Přihlásit dítě →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Pro děti od 7 do 17 let (po ukončené 1. třídě) &nbsp;·&nbsp; Doprava není zahrnuta
        </p>
      </div>
    </section>
  );
}
