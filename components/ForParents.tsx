"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    icon: "🥗",
    title: "Speciální strava",
    content: "Zajišťujeme bezlepkovou, bezlaktózovou, vegetariánskou i veganskou stravu. Dietu je nutné domluvit předem.",
    accent: "#f97316",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "🩺",
    title: "Zdravotnický personál",
    content: "V areálu je přítomen kvalifikovaný zdravotník po celou dobu tábora.",
    accent: "#ef4444",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: "🛡️",
    title: "Úrazové pojištění",
    content: "Každé dítě je po dobu tábora kryto úrazovým pojištěním.",
    accent: "#3b82f6",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "📊",
    title: "Rozřazovací test",
    content: "Před zahájením výuky děti absolvují rozřazovací test.",
    accent: "#f5a623",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export default function ForParents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="parents" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#1a5c38]/10 text-[#1a5c38] text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Pro rodiče
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Vaše dítě je u nás v bezpečí.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Odpovědi na nejčastější otázky rodičů.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className={`flex items-start gap-4 p-5 rounded-2xl border ${faq.bg} ${faq.border} card-hover`}
            >
              <div
                className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                style={{ background: faq.accent + "20" }}
              >
                {faq.icon}
              </div>
              <div>
                <h4 className="font-black text-gray-900 text-sm mb-1">{faq.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#0d3320] to-[#1a5c38] overflow-hidden shadow-2xl shadow-[#0d3320]/30"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-black text-white mb-2">Máte otázku?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Rádi zodpovíme vše, co vás zajímá. Ozvěte se – zavolejte nebo napište email.
              </p>
            </div>
            <div className="p-8 md:p-10 md:border-l border-white/10 flex flex-col justify-center gap-3">
              <a href="tel:+420774650545" className="group flex items-center gap-3 px-4 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl text-white font-semibold text-sm transition-all hover:scale-[1.02]">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">📞</div>
                774 650 545
              </a>
              <a href="tel:+420739611714" className="group flex items-center gap-3 px-4 py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded-2xl text-white font-semibold text-sm transition-all hover:scale-[1.02]">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">📞</div>
                739 611 714
              </a>
              <a href="mailto:hk@lite.cz" className="group flex items-center gap-3 px-4 py-3.5 bg-[#f5a623] hover:bg-[#e8941a] rounded-2xl text-[#1a1a1a] font-bold text-sm transition-all hover:scale-[1.02]">
                <div className="w-8 h-8 rounded-xl bg-black/10 flex items-center justify-center flex-shrink-0">✉️</div>
                hk@lite.cz
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
