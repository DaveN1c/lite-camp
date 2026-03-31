"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CountUp from "@/components/CountUp";

const schedule = [
  { time: "Ráno", activity: "Budíček & rozcvička", detail: "Protažení, cvičení a ranní hry", emoji: "🌅", color: "#fef9c3" },
  { time: "Snídaně", activity: "Snídaně + úklid chatky", detail: "Ranní hygiena a úklid", emoji: "🥞", color: "#fff" },
  { time: "Dopoledne", activity: "Angličtina", detail: "Konverzace, hry a aktivity — výuka přirozenou formou", emoji: "🗣️", color: "#ccfbf1" },
  { time: "Poledne", activity: "Oběd + polední klid", detail: "", emoji: "🍽️", color: "#fff" },
  { time: "Odpoledne", activity: "Táborový program", detail: "Hry, soutěže, výlety, koupání, tvořivé aktivity", emoji: "🏊", color: "#e0f9f5" },
  { time: "Večer", activity: "Večeře", detail: "", emoji: "🍕", color: "#fff" },
  { time: "Před večerkou", activity: "Anglické čtení", detail: "Čtení pohádek a příběhů v angličtině", emoji: "📖", color: "#fef3c7" },
];

function CheckMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Program() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="program" className="py-16 md:py-24 bg-[#f0fdf9] relative overflow-hidden">
      {/* Circle blob decorations */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-teal-200/30 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-white/50 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-teal-100/20 pointer-events-none" />

      {/* Sunrise / sun rays background element */}
      <svg className="absolute -bottom-10 -left-10 w-96 pointer-events-none select-none" style={{ opacity: 0.06 }} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="80" fill="#14b8a6" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
          <line key={deg} x1="200" y1="200"
            x2={200 + Math.cos(deg * Math.PI / 180) * 190}
            y2={200 + Math.sin(deg * Math.PI / 180) * 190}
            stroke="#14b8a6" strokeWidth="6" strokeLinecap="round" />
        ))}
      </svg>

      {/* Floating emoji */}
      {[
        { top: "12%", left: "1%",  content: "🗣️", size: 20, delay: 0.3, dur: 4.8 },
        { top: "40%", right: "1%", content: "📚", size: 18, delay: 1.2, dur: 5.2 },
        { top: "65%", left: "2%",  content: "🌞", size: 20, delay: 0.7, dur: 4.4 },
        { bottom: "10%", right: "2%", content: "🎵", size: 16, delay: 1.8, dur: 5.6 },
        { top: "85%", left: "4%",  content: "🏃", size: 18, delay: 2.1, dur: 4.0 },
      ].map((f, i) => (
        <motion.div key={i} className="absolute pointer-events-none select-none flex items-center justify-center"
          style={{ top: f.top, bottom: "bottom" in f ? f.bottom : undefined, left: "left" in f ? f.left : undefined, right: "right" in f ? f.right : undefined, fontSize: f.size }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {f.content}
        </motion.div>
      ))}

      {/* Wavy water lines */}
      <svg className="absolute top-0 right-0 w-1/2 pointer-events-none select-none" style={{ opacity: 0.05 }} viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[20,50,80,110,140,170].map((y, i) => (
          <path key={i} d={`M0,${y} C75,${y-20} 150,${y+20} 225,${y} C300,${y-20} 375,${y+20} 450,${y} C525,${y-20} 575,${y} 600,${y}`}
            stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />
        ))}
      </svg>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="mb-16">
          <p className="text-[#14b8a6] text-xs font-bold uppercase tracking-[0.3em] mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#14b8a6] inline-block" />
            Program
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-[#0f172a] leading-tight" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontFamily: "var(--font-fredoka)" }}>
              Jak vypadá typický den? ☀️
            </h2>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden h-44 md:h-52">
                <Image
                  src="/fotky/water-fight.jpg"
                  alt="Děti na LiteCamp táboře"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-gray-600 text-base leading-relaxed max-w-md">
                Každý den je nabitý — ráno angličtina, odpoledne dobrodružství, večer pohádky v angličtině.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Schedule table */}
          <div className="border border-teal-200 rounded-xl overflow-hidden bg-white shadow-sm shadow-teal-50">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="flex items-stretch border-b border-teal-100 last:border-b-0 hover:brightness-95 transition-all"
                style={{ background: item.color }}
              >
                <div className="flex-1 px-5 py-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-2xl mr-2 flex-shrink-0">{item.emoji}</span>
                    <span className="text-[10px] text-[#14b8a6] font-bold uppercase tracking-wider w-20 flex-shrink-0">
                      {item.time}
                    </span>
                    <span className="font-black text-base text-[#0f172a]" style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.05rem" }}>
                      {item.activity}
                    </span>
                  </div>
                  {item.detail && (
                    <p className="text-sm text-gray-500 mt-0.5 ml-[6.75rem]">
                      {item.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* English course box — colorful card, not dark */}
            <div className="bg-[#14b8a6] p-8 md:p-10 rounded-xl">
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Kurz angličtiny
              </p>
              <ul className="space-y-4">
                {(
                  [
                    "Rozřazovací test pro každé dítě",
                    "Přirozená forma výuky",
                    "Konverzace, hry a aktivity",
                    <>Hodnota kurzu <CountUp to={8000} suffix=" Kč" duration={1500} /> v ceně</>,
                  ] as React.ReactNode[]
                ).map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckMark />
                    <span className="text-white/90 text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities photos */}
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
              {[
                { src: "/fotky/football.jpg", label: "Sport a hry" },
                { src: "/fotky/campfire.jpg", label: "Táborák" },
                { src: "/fotky/instructor-group.jpg", label: "Vedoucí tábora" },
                { src: "/fotky/cards-grass.jpg", label: "Angličtina venku" },
              ].map((item) => (
                <div key={item.src} className="relative overflow-hidden group" style={{ aspectRatio: "1/1" }}>
                  <Image src={item.src} alt={item.label} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 20vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
