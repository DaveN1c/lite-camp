"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { submitRegistration } from "@/app/actions";

const TERMS = [
  { value: "full", label: "Celý tábor – 18. 7. – 1. 8. 2026 (13 000 Kč)" },
  { value: "week1", label: "1. týden – 18. 7. – 25. 7. 2026 (8 900 Kč)" },
  { value: "week2", label: "2. týden – 25. 7. – 1. 8. 2026 (8 900 Kč)" },
];

const inputCls =
  "w-full px-4 py-3 border border-gray-300 bg-white text-[#111] text-sm placeholder-gray-400 focus:outline-none focus:border-[#0a2e2c] transition-colors";

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

function CheckCircle() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0a2e2c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

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
    <section id="contact" className="bg-[#0a2e2c]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#f5a623] inline-block" />
            Přihláška
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Přihlaste dítě<br />ještě dnes.
          </h2>
          <p className="text-white/40 text-sm mt-4">
            Místa jsou omezená — nenechte to na poslední chvíli.
          </p>
        </motion.div>
      </div>

      {/* Split panel */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-5 border border-white/10 overflow-hidden"
        >
          {/* Left – info */}
          <div className="lg:col-span-2 p-8 md:p-10 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 space-y-10">
            {/* Contact */}
            <div>
              <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                Kontakt
              </p>
              <div className="space-y-3">
                {[
                  { href: "tel:+420774650545", label: "774 650 545", type: "phone" },
                  { href: "tel:+420739611714", label: "739 611 714", type: "phone" },
                  { href: "mailto:hk@lite.cz", label: "hk@lite.cz", type: "mail" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center justify-between text-white/60 hover:text-white text-sm font-medium transition-colors border-b border-white/10 pb-3 last:border-0"
                  >
                    <span className="flex items-center gap-2">
                      <span className="opacity-50">
                        {c.type === "phone" ? <PhoneIcon /> : <MailIcon />}
                      </span>
                      {c.label}
                    </span>
                    <span className="text-white/20 text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div>
              <p className="text-[#f5a623] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                Termíny 2026
              </p>
              <div className="space-y-3">
                {[
                  { name: "Celý tábor", date: "18. 7. – 1. 8.", price: "13 000 Kč" },
                  { name: "1. týden", date: "18. 7. – 25. 7.", price: "8 900 Kč" },
                  { name: "2. týden", date: "25. 7. – 1. 8.", price: "8 900 Kč" },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
                  >
                    <div>
                      <p className="text-white/80 text-sm font-semibold">{t.name}</p>
                      <p className="text-white/30 text-xs">{t.date}</p>
                    </div>
                    <span className="text-[#f5a623] font-black text-sm">{t.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <p className="text-white/25 text-xs leading-relaxed">
              LITE camp, o.p.s.<br />
              Čáslavská 1162, 537 01 Chrudim
            </p>
          </div>

          {/* Right – form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-10">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle />
                <h3 className="text-2xl font-black text-[#111] mb-2">
                  Přihláška odeslána!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Děkujeme za zájem o LITE camp 2026. Ozveme se co nejdříve
                  s potvrzením a dalšími informacemi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs text-gray-400 mb-6">
                  Vyplňte formulář a my se vám ozveme s dalšími kroky.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Jméno rodiče *
                    </label>
                    <input
                      name="parentName"
                      type="text"
                      required
                      placeholder="Jana Nováková"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jana@email.cz"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Telefon *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+420 123 456 789"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Jméno dítěte *
                    </label>
                    <input
                      name="childName"
                      type="text"
                      required
                      placeholder="Tomáš Novák"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Věk dítěte *
                    </label>
                    <input
                      name="childAge"
                      type="number"
                      required
                      min={7}
                      max={17}
                      placeholder="10"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Termín *
                    </label>
                    <select name="term" required className={inputCls}>
                      <option value="">Vyberte termín…</option>
                      {TERMS.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                    Zpráva / poznámka
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Speciální stravovací požadavky, dotazy ohledně alergie…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3 rounded-sm">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#f5a623] disabled:opacity-60 text-[#111] font-black text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
                >
                  {status === "loading" ? "Odesílám…" : "Odeslat přihlášku →"}
                </button>

                <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider">
                  Odesláním souhlasíte se zpracováním osobních údajů.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
