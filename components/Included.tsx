"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";

const included: React.ReactNode[] = [
  "Ubytování v jednoduchých chatkách (toalety a sprchy v samostatné budově)",
  "Strava 5× denně + celodenní pitný režim",
  <>Intenzivní kurz angličtiny (hodnota <CountUp to={8000} suffix=" Kč" duration={1500} />)</>,
  "Táborový program",
  "Péče kvalifikovaným zdravotníkem a táborovými vedoucími",
  "Úrazové pojištění",
];

const notIncluded = [
  "Doprava — ta je vlastní",
  "Kapesné",
  "Osobní hygienické potřeby",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      className="flex-shrink-0 mt-0.5 opacity-30">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function Included() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 bg-[#f0fdf9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Co je v ceně?
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              Žádné skryté poplatky.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Cena zahrnuje vše podstatné — od stravy po pojištění. Nic navíc neplatíte.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm max-w-5xl border border-sky-100">
          {/* Included — colorful card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#14b8a6] p-8 md:p-10"
          >
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Cena zahrnuje
            </p>
            <ul className="space-y-4">
              {included.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-white/90 text-base leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included + tip */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="p-8 md:p-10 flex-1 bg-white border-b border-sky-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">
                Cena nezahrnuje
              </p>
              <ul className="space-y-4">
                {notIncluded.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <DashIcon />
                    <span className="text-gray-700 text-base leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 bg-amber-50">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#14b8a6] mb-2">
                Tip pro rodiče
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strava je k dispozici ve variantách{" "}
                <strong>bezlepková, bezlaktózová, vegetariánská i veganská</strong>{" "}
                — nutno domluvit předem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
