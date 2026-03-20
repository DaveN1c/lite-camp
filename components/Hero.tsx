"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="gradient-hero relative min-h-screen flex items-center overflow-hidden noise">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#f5a623]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#1a5c38]/30 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              Přihlášky pro rok 2026 jsou otevřené
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              14 dní
              <br />
              zážitků.
              <br />
              <span className="text-gradient">Angličtina</span>
              <br />
              na celý život.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
            >
              Letní tábor s výukou angličtiny na ostrově na řece Sázavě.
              Vaše dítě se vrátí s úsměvem, novými kamarády a angličtinou, která mu zůstane.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#f5a623] hover:bg-[#e8941a] text-[#1a1a1a] font-bold rounded-2xl transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#f5a623]/30 text-base"
              >
                Přihlásit dítě
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-2xl transition-all duration-200 backdrop-blur-sm text-base"
              >
                Termíny a ceny
              </a>
            </motion.div>
          </div>

          {/* Right – stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "13 000 Kč", label: "Celý tábor (2 týdny)", icon: "💰" },
              { value: "8 900 Kč", label: "Jeden týden", icon: "📅" },
              { value: "8 000 Kč", label: "Kurz angličtiny v ceně", icon: "🎓" },
              { value: "7–17 let", label: "Věk dětí", icon: "👦" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-xs font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="lg:hidden grid grid-cols-3 gap-3 mt-12"
        >
          {[
            { value: "7–17", label: "let věk" },
            { value: "14 dní", label: "tábor" },
            { value: "8 000 Kč", label: "kurz v ceně" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 text-center">
              <div className="text-xl font-black text-[#f5a623]">{s.value}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 100L1440 100L1440 50C1080 0 720 100 360 50C180 25 90 60 0 50L0 100Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
