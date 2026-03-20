"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { submitRegistration } from "@/app/actions";

const TERMS = [
  { value: "full", label: "Celý tábor – 18. 7. – 1. 8. 2026 (13 000 Kč)" },
  { value: "week1", label: "1. týden – 18. 7. – 25. 7. 2026 (8 900 Kč)" },
  { value: "week2", label: "2. týden – 25. 7. – 1. 8. 2026 (8 900 Kč)" },
];

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      const result = await submitRegistration(data);
      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Nastala chyba, zkuste to prosím znovu.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Nastala chyba, zkuste to prosím znovu.");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 gradient-hero relative overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#f5a623]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Přihláška
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Přihlaste dítě ještě dnes.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Vyplňte přihlášku a my se ozveme s potvrzením a dalšími informacemi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-3xl p-7">
              <h3 className="font-black text-white text-base mb-5">Kontakt</h3>
              <div className="space-y-3">
                {[
                  { href: "tel:+420774650545", icon: "📞", label: "774 650 545" },
                  { href: "tel:+420739611714", icon: "📞", label: "739 611 714" },
                  { href: "mailto:hk@lite.cz", icon: "✉️", label: "hk@lite.cz" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">{c.icon}</div>
                    <span className="text-sm font-medium">{c.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <h3 className="font-black text-white text-base mb-4">Termíny 2026</h3>
              <div className="space-y-3">
                {[
                  { name: "Celý tábor", date: "18. 7. – 1. 8.", price: "13 000 Kč" },
                  { name: "1. týden", date: "18. 7. – 25. 7.", price: "8 900 Kč" },
                  { name: "2. týden", date: "25. 7. – 1. 8.", price: "8 900 Kč" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-semibold">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.date}</p>
                    </div>
                    <span className="text-[#f5a623] font-black text-sm">{t.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="glass rounded-3xl p-12 text-center">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-2xl font-black text-white mb-2">Přihláška odeslána!</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                  Děkujeme za zájem o LITE camp 2026. Ozveme se co nejdříve s potvrzením a dalšími informacemi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Jméno rodiče *</label>
                    <input name="parentName" type="text" required placeholder="Jana Nováková"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Email *</label>
                    <input name="email" type="email" required placeholder="jana@email.cz"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Telefon *</label>
                    <input name="phone" type="tel" required placeholder="+420 123 456 789"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Jméno dítěte *</label>
                    <input name="childName" type="text" required placeholder="Tomáš Novák"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Věk dítěte *</label>
                    <input name="childAge" type="number" required min={7} max={17} placeholder="10"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Termín *</label>
                    <select name="term" required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all">
                      <option value="" className="text-gray-900 bg-white">Vyberte termín…</option>
                      {TERMS.map((t) => (
                        <option key={t.value} value={t.value} className="text-gray-900 bg-white">{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Zpráva / poznámka</label>
                  <textarea name="message" rows={3} placeholder="Speciální stravovací požadavky, dotazy…"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5a623] focus:bg-white/15 transition-all resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-300 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{errorMsg}</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full py-4 bg-[#f5a623] hover:bg-[#e8941a] disabled:opacity-60 text-[#1a1a1a] font-black text-base rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#f5a623]/30">
                  {status === "loading" ? "Odesílám…" : "Odeslat přihlášku →"}
                </button>

                <p className="text-xs text-white/30 text-center">
                  Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení přihlášky.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
