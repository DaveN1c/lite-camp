"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { submitRegistration } from "@/app/actions";

const TERMS = [
  { value: "full", label: "Celý tábor – 18. 7. – 1. 8. 2026 (13 000 Kč)" },
  { value: "week1", label: "1. týden – 18. 7. – 25. 7. 2026 (8 900 Kč)" },
  { value: "week2", label: "2. týden – 25. 7. – 1. 8. 2026 (8 900 Kč)" },
];

const inputCls =
  "w-full px-4 py-3 border border-teal-200 bg-white text-[#111] text-sm placeholder-gray-400 focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]/20 transition-colors rounded-md";

// Pre-computed confetti particles — no Math.random() at render time
const CONFETTI = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: 5 + (i * 31 % 90),          // spread 5–95% of width
  delay: (i * 0.04) % 1.4,
  duration: 2.2 + (i * 0.11 % 1.8),
  color: ["#14b8a6", "#fbbf24", "#f97316", "#ec4899", "#8b5cf6", "#22c55e", "#ef4444", "#3b82f6"][i % 8],
  size: 6 + (i * 3 % 9),
  isSquare: i % 3 === 0,
  drift: (i % 7 - 3) * 6,
  rotateEnd: (i % 5 - 2) * 200,
}));

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {CONFETTI.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: "-16px", rotate: 0, opacity: 1 }}
          animate={{
            y: "105vh",
            x: [`${p.x}vw`, `calc(${p.x}vw + ${p.drift}px)`],
            rotate: p.rotateEnd,
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: p.isSquare ? 2 : "50%",
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
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

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      const result = await submitRegistration(data);
      if (result.success) {
        setStatus("success");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
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
    <>
      <AnimatePresence>{showConfetti && <Confetti />}</AnimatePresence>

      <section id="contact" className="bg-[#f0fdf9]">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#14b8a6] inline-block" />
              Přihláška
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              Přihlaste dítě<br />ještě dnes.
            </h2>
            <p className="text-gray-500 text-sm mt-4">
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
            className="grid lg:grid-cols-5 rounded-2xl overflow-hidden shadow-sm shadow-teal-100 border border-teal-200"
          >
            {/* Left – info */}
            <div className="lg:col-span-2 p-8 md:p-10 bg-white border-b border-teal-100 lg:border-b-0 lg:border-r border-teal-100 space-y-10">
              <div>
                <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.2em] mb-5">
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
                      className="flex items-center justify-between text-gray-500 hover:text-[#14b8a6] text-sm font-medium transition-colors border-b border-gray-100 pb-3 last:border-0"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-50">
                          {c.type === "phone" ? <PhoneIcon /> : <MailIcon />}
                        </span>
                        {c.label}
                      </span>
                      <span className="text-gray-300 text-xs">→</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  Termíny 2026
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Celý tábor", date: "18. 7. – 1. 8.", price: "13 000 Kč" },
                    { name: "1. týden", date: "18. 7. – 25. 7.", price: "8 900 Kč" },
                    { name: "2. týden", date: "25. 7. – 1. 8.", price: "8 900 Kč" },
                  ].map((t) => (
                    <div key={t.name} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
                      <div>
                        <p className="text-gray-700 text-sm font-semibold">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.date}</p>
                      </div>
                      <span className="text-[#14b8a6] font-black text-sm">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed">
                LITE camp, o.p.s.<br />
                Čáslavská 1162, 537 01 Chrudim
              </p>
            </div>

            {/* Right – form */}
            <div className="lg:col-span-3 bg-white p-8 md:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-black text-[#0f172a] mb-2">
                    Přihláška odeslána! 🎉
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Děkujeme za zájem o LITE camp 2026. Ozveme se co nejdříve
                    s potvrzením a dalšími informacemi.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs text-gray-400 mb-6">
                    Vyplňte formulář a my se vám ozveme s dalšími kroky.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Jméno rodiče *</label>
                      <input name="parentName" type="text" required placeholder="Jana Nováková" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Email *</label>
                      <input name="email" type="email" required placeholder="jana@email.cz" className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Telefon *</label>
                      <input name="phone" type="tel" required placeholder="+420 123 456 789" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Jméno dítěte *</label>
                      <input name="childName" type="text" required placeholder="Tomáš Novák" className={inputCls} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Věk dítěte *</label>
                      <input name="childAge" type="number" required min={7} max={17} placeholder="10" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Termín *</label>
                      <select name="term" required className={inputCls}>
                        <option value="">Vyberte termín…</option>
                        {TERMS.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Zpráva / poznámka</label>
                    <textarea name="message" rows={3} placeholder="Speciální stravovací požadavky, dotazy ohledně alergie…" className={`${inputCls} resize-none`} />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3 rounded-md">
                      {errorMsg}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-[#fbbf24] disabled:opacity-60 text-[#111] font-black text-sm uppercase tracking-wider hover:bg-[#f59e0b] transition-colors rounded-lg"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {status === "loading" ? "Odesílám…" : "Odeslat přihlášku →"}
                  </motion.button>

                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
