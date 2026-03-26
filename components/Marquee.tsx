const ITEMS = [
  "🏕️ LÉTO 2026",
  "🌊 SÁZAVA",
  "⭐ ANGLIČTINA",
  "🏃 SPORT",
  "🔥 TÁBORÁK",
  "🎉 ZÁBAVA",
  "🏊 KOUPÁNÍ",
  "🎯 VÝSLEDKY",
  "💚 PŘÁTELSTVÍ",
  "🎮 HRY",
];

// Items duplicated for seamless infinite scroll
const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="bg-[#14b8a6] py-3.5 overflow-hidden select-none border-y border-teal-400/20">
      <div className="marquee-track">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-7 text-white font-black text-[11px] uppercase tracking-[0.25em] whitespace-nowrap"
          >
            {item}
            <span className="opacity-25 text-base leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
