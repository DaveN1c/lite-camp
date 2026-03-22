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
      stroke={highlight ? "#f5a623" : "#0a2e2c"}
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5 opacity-70"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#f5a623] inline-block" />
            Termíny a ceny
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-tight">
              Vyberte si termín.
            </h2>
            <p className="text-gray-600 text-base max-w-sm leading-relaxed">
              Kurz angličtiny v hodnotě{" "}
              <strong className="text-[#0a2e2c]">8 000 Kč</strong> je součástí
              každého termínu. Bez příplatků.
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 border border-gray-300">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`flex flex-col relative ${
                plan.highlight ? "bg-[#0a2e2c]" : "bg-white"
              } ${
                i < plans.length - 1
                  ? "border-b border-gray-300 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-[#f5a623] text-[#111] text-[10px] font-black uppercase tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10 flex-1">
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                    plan.highlight ? "text-[#f5a623]" : "text-[#0a2e2c]"
                  }`}
                >
                  {plan.duration}
                </p>
                <h3
                  className={`text-2xl font-black mb-1 ${
                    plan.highlight ? "text-white" : "text-[#111]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs mb-10 ${
                    plan.highlight ? "text-white/40" : "text-gray-400"
                  }`}
                >
                  {plan.dates}
                </p>

                <div
                  className="mb-10 flex items-end gap-1.5 pb-8 border-b border-dashed"
                  style={{ borderColor: plan.highlight ? "rgba(255,255,255,0.1)" : "#e5e7eb" }}
                >
                  <span
                    className={`font-black leading-none ${
                      plan.highlight ? "text-white" : "text-[#111]"
                    }`}
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1.5 font-bold ${
                      plan.highlight ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    Kč
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <CheckMark highlight={plan.highlight} />
                      <span
                        className={`text-sm ${
                          plan.highlight ? "text-white/75" : "text-gray-600"
                        }`}
                      >
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 md:px-10 pb-8 md:pb-10">
                <a
                  href="#contact"
                  className={`block w-full py-4 text-center font-black text-sm uppercase tracking-wider transition-opacity hover:opacity-80 ${
                    plan.highlight
                      ? "bg-[#f5a623] text-[#111]"
                      : "bg-[#0a2e2c] text-white"
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
