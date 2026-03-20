"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "1. týden",
    dates: "18. 7. – 25. 7. 2026",
    duration: "7 dní",
    price: "8 900",
    highlight: false,
    perks: ["Ubytování v chatkách", "Strava 5× denně + pitný režim", "Kurz angličtiny", "Táborový program", "Úrazové pojištění"],
  },
  {
    name: "Celý tábor",
    dates: "18. 7. – 1. 8. 2026",
    duration: "14 dní",
    price: "13 000",
    highlight: true,
    badge: "Nejoblíbenější",
    perks: ["Ubytování v chatkách", "Strava 5× denně + pitný režim", "Kurz angličtiny (2× týden)", "Veškerý táborový program", "Úrazové pojištění"],
  },
  {
    name: "2. týden",
    dates: "25. 7. – 1. 8. 2026",
    duration: "7 dní",
    price: "8 900",
    highlight: false,
    perks: ["Ubytování v chatkách", "Strava 5× denně + pitný režim", "Kurz angličtiny", "Táborový program", "Úrazové pojištění"],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Termíny a ceny
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Vyberte si termín
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kurz angličtiny v hodnotě <strong className="text-[#1a5c38]">8 000 Kč</strong> je součástí každého termínu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0d3320] shadow-2xl shadow-[#0d3320]/40 scale-105 z-10"
                  : "bg-white border border-gray-100 shadow-md card-hover"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 bg-[#f5a623] text-[#1a1a1a] text-xs font-black rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex-1">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? "text-[#f5a623]" : "text-[#1a5c38]"}`}>
                  {plan.duration}
                </p>
                <h3 className={`text-2xl font-black mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>
                  {plan.dates}
                </p>

                <div className="mb-8 flex items-end gap-1">
                  <span className={`text-5xl font-black leading-none ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-white/50" : "text-gray-400"}`}>Kč</span>
                </div>

                <ul className="space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? "bg-[#f5a623]" : "bg-[#1a5c38]/10"
                      }`}>
                        <svg className={`w-3 h-3 ${plan.highlight ? "text-[#1a1a1a]" : "text-[#1a5c38]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-gray-600"}`}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 pb-8">
                <a
                  href="#contact"
                  className={`block w-full py-4 text-center font-bold rounded-2xl transition-all duration-200 ${
                    plan.highlight
                      ? "bg-[#f5a623] hover:bg-[#e8941a] text-[#1a1a1a] hover:scale-[1.02]"
                      : "bg-[#1a5c38] hover:bg-[#134428] text-white"
                  }`}
                >
                  Přihlásit dítě
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          Pro děti od 7 do 17 let (po ukončené 1. třídě)
        </motion.p>
      </div>
    </section>
  );
}
