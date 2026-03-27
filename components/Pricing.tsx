"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";

const plans = [
  {
    name: "1. týden",
    dates: "18. 7. – 25. 7. 2026",
    duration: "7 dní",
    price: 8900,
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
    price: 13000,
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
    price: 8900,
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

function TiltCard({
  children,
  className,
  disabled,
}: {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-60, 60], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-60, 60], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - (rect.left + rect.width / 2));
    rawY.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[#fffbeb] relative overflow-hidden">
      {/* Decorative background stars */}
      {[
        { top: "8%", left: "3%", size: 24, delay: 0 },
        { top: "20%", right: "2%", size: 18, delay: 1 },
        { bottom: "10%", left: "5%", size: 20, delay: 0.5 },
        { bottom: "25%", right: "4%", size: 28, delay: 1.5 },
        { top: "60%", left: "1%", size: 14, delay: 0.8 },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-300 pointer-events-none hidden lg:block"
          style={{ top: s.top, bottom: "bottom" in s ? s.bottom : undefined, left: "left" in s ? s.left : undefined, right: "right" in s ? s.right : undefined, fontSize: s.size, opacity: 0.6 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: s.delay }}
        >
          ✦
        </motion.div>
      ))}
      {/* Circle blob decorations */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-teal-50/50 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-amber-100/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/20 pointer-events-none" />

      {/* Tent / camping icons background */}
      <svg className="absolute top-0 right-0 w-1/3 pointer-events-none select-none" style={{ opacity: 0.05 }} viewBox="0 0 400 300" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
        {/* Big tent */}
        <polygon points="200,20 360,280 40,280" />
        <polygon points="200,20 280,280 120,280" fill="#fbbf24" />
        {/* Door */}
        <path d="M175,280 Q200,230 225,280" fill="#f59e0b" />
        {/* Flag */}
        <line x1="200" y1="20" x2="200" y2="-5" stroke="#f59e0b" strokeWidth="3" />
        <polygon points="200,-5 225,10 200,25" fill="#fbbf24" />
      </svg>

      {/* Sunburst at bottom-left */}
      <svg className="absolute -bottom-20 -left-20 w-80 pointer-events-none select-none" style={{ opacity: 0.05 }} viewBox="0 0 300 300" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="55" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
          <line key={deg} x1="150" y1="150"
            x2={150 + Math.cos(deg * Math.PI / 180) * 145}
            y2={150 + Math.sin(deg * Math.PI / 180) * 145}
            stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
        ))}
      </svg>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Termíny a ceny
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-[#0f172a] leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontFamily: "var(--font-fredoka)" }}>
              Vyberte si termín. 🗓️
            </h2>
            <p className="text-gray-600 text-base max-w-sm leading-relaxed">
              Kurz angličtiny v hodnotě{" "}
              <CountUp to={8000} suffix=" Kč" duration={1500} className="text-[#14b8a6] font-bold" /> je součástí
              každého termínu. Bez příplatků.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6" style={{ perspective: 1200 }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                disabled={false}
                className={`flex flex-col relative rounded-2xl h-full ${
                  plan.highlight
                    ? "bg-[#14b8a6] shadow-xl shadow-cyan-200/60"
                    : "bg-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <motion.span
                      className="px-3 py-1 bg-[#fbbf24] text-[#111] text-[10px] font-black uppercase tracking-wider rounded-sm inline-block"
                      animate={{ rotate: [0, -2, 2, -1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    >
                      {plan.badge}
                    </motion.span>
                  </div>
                )}

                <div className="p-8 md:p-10 flex-1">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? "text-white/75" : "text-[#14b8a6]"}`}>
                    {plan.duration}
                  </p>
                  <h3 className={`text-2xl font-black mb-1 ${plan.highlight ? "text-white" : "text-[#0f172a]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-10 ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>
                    {plan.dates}
                  </p>

                  <div
                    className="mb-10 flex items-end gap-1.5 pb-8 border-b border-dashed"
                    style={{ borderColor: plan.highlight ? "rgba(255,255,255,0.2)" : "#fde68a" }}
                  >
                    <span
                      className={`font-black leading-none tabular-nums ${plan.highlight ? "text-white" : "text-[#0f172a]"}`}
                      style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                    >
                      <CountUp to={plan.price} duration={1600} />
                    </span>
                    <span className={`text-sm mb-1.5 font-bold ${plan.highlight ? "text-white/75" : "text-gray-500"}`}>
                      Kč
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3">
                        <CheckMark highlight={plan.highlight} />
                        <span className={`text-base ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <motion.a
                    href="#contact"
                    className={`block w-full py-4 text-center font-black text-sm uppercase tracking-wider rounded-lg ${
                      plan.highlight
                        ? "bg-[#fbbf24] text-[#111] hover:bg-[#f59e0b]"
                        : "bg-[#14b8a6] text-white hover:bg-[#0d9488]"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Přihlásit dítě →
                  </motion.a>
                </div>
              </TiltCard>
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
