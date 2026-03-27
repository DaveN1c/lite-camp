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
  "🌿 PŘÍRODA",
  "🎨 TVOŘENÍ",
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function Marquee() {
  return (
    <div className="bg-[#14b8a6] py-4 overflow-hidden select-none border-b-4 border-[#0d9488]">
      <div className="marquee-track">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-8 text-white font-black whitespace-nowrap"
            style={{ fontSize: "0.95rem", letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            {item}
            <span className="opacity-30 text-xl leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
