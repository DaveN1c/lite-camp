"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const assurances: { id: string; title: string; content: ReactNode; icon: string }[] = [
  {
    id: "01",
    title: "Speciální strava",
    content: "Zajišťujeme bezlepkovou, bezlaktózovou, vegetariánskou i veganskou stravu. Dietu je nutné domluvit předem při přihlášení.",
    icon: "utensils",
  },
  {
    id: "02",
    title: "Zdravotnický personál",
    content: "V areálu je přítomen kvalifikovaný zdravotník po celou dobu tábora. Nemusíte se o nic starat.",
    icon: "activity",
  },
  {
    id: "03",
    title: "Úrazové pojištění",
    content: "Každé dítě je po dobu tábora kryto úrazovým pojištěním. Je zahrnuto v ceně tábora.",
    icon: "shield",
  },
  {
    id: "04",
    title: "Rozřazovací test",
    content: (
      <>
        Před táborem prosíme o vyplnění vstupního testu.{" "}
        <a href="/vstupn%C3%AD%20test%20-%20LITE%20camp%202026.xls" className="underline underline-offset-2 hover:text-[#14b8a6] transition-colors" download>Stáhněte test zde</a>
        {" "}a vyplněný ho zašlete na{" "}
        <a href="mailto:litecamp@email.cz" className="underline underline-offset-2 hover:text-[#14b8a6] transition-colors">litecamp@email.cz</a>
        {" "}nejpozději do <strong className="text-gray-700 font-semibold">16. 6. 2026</strong>.
      </>
    ),
    icon: "clipboard",
  },
  {
    id: "05",
    title: "Věk dětí",
    content: "Tábor je určen pro děti od 7 do 17 let (podmínkou je ukončená 1. třída). Mladší i starší děti jsou vítány — program je přizpůsoben všem věkovým skupinám.",
    icon: "users",
  },
];

function Icon({ name }: { name: string }) {
  const p = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none" as const, stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "utensils": return <svg {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z" /><path d="M18 22v-3" /></svg>;
    case "activity": return <svg {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
    case "shield": return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "clipboard": return <svg {...p}><rect width="8" height="4" x="8" y="2" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>;
    case "users": return <svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    default: return null;
  }
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function ForParents() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="parents" className="py-24 md:py-36 bg-[#fffbeb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Pro rodiče
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Vaše dítě je<br />u nás v bezpečí.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Postaráme se o vše — od stravy po pojištění.
            </p>
          </div>
        </div>

        {/* Assurance rows */}
        <div className="mb-12 border-t border-amber-200">
          {assurances.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, delay: 0.07 * i }}
              className="flex gap-5 md:gap-8 items-start py-7 border-b border-amber-200 group"
            >
              <span className="text-[11px] font-mono text-amber-300 font-bold pt-0.5 w-5 shrink-0 select-none">
                {item.id}
              </span>

              <div className="flex-1 min-w-0 grid md:grid-cols-[210px_1fr] gap-2 md:gap-10 items-start">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-[#14b8a6] group-hover:text-white transition-colors duration-200 rounded-md">
                    <Icon name={item.icon} />
                  </div>
                  <span className="font-black text-[#0f172a] text-sm">{item.title}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA — colorful card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.45 }}
          className="bg-[#14b8a6] rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-[1fr_auto]">
            <div className="px-10 py-10 md:py-12">
              <p className="text-teal-200 text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-cyan-200 inline-block" />
                Máte otázku?
              </p>
              <p className="text-white font-black text-2xl md:text-3xl leading-snug">
                Rádi vám odpovíme<br />na cokoliv.
              </p>
              <p className="text-cyan-100/60 text-sm mt-3 max-w-xs leading-relaxed">
                Odpovídáme rychle, zpravidla do pár hodin.
              </p>
            </div>

            <div className="px-8 md:px-10 py-10 md:py-12 border-t border-white/15 md:border-t-0 md:border-l border-white/15 flex flex-col justify-center gap-2.5 md:min-w-[270px]">
              <a href="tel:+420774650545" className="flex items-center gap-3 px-4 py-3.5 border border-white/20 text-white text-sm font-semibold hover:border-white/50 hover:bg-white/10 transition-all group/link rounded-lg">
                <span className="text-white/40 group-hover/link:text-teal-200 transition-colors"><PhoneIcon /></span>
                <span className="flex-1 tabular-nums tracking-tight">774 650 545</span>
                <span className="text-white/20 text-xs">→</span>
              </a>
              <a href="tel:+420739611714" className="flex items-center gap-3 px-4 py-3.5 border border-white/20 text-white text-sm font-semibold hover:border-white/50 hover:bg-white/10 transition-all group/link rounded-lg">
                <span className="text-white/40 group-hover/link:text-teal-200 transition-colors"><PhoneIcon /></span>
                <span className="flex-1 tabular-nums tracking-tight">739 611 714</span>
                <span className="text-white/20 text-xs">→</span>
              </a>
              <a href="mailto:hk@lite.cz" className="flex items-center gap-3 px-4 py-3.5 bg-[#fbbf24] text-[#111] text-sm font-black hover:bg-[#f59e0b] transition-colors group/link rounded-lg">
                <span className="opacity-50"><MailIcon /></span>
                <span className="flex-1">hk@lite.cz</span>
                <span className="opacity-30 text-xs">→</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
