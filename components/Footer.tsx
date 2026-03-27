import Logo from "./Logo";

function PhoneIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 opacity-50">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 opacity-50">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #0d9488 100%)" }}>
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {["10%,15%", "85%,20%", "25%,70%", "70%,60%", "50%,40%", "90%,80%", "5%,85%"].map((pos, i) => {
          const [l, t] = pos.split(",");
          return (
            <span key={i} style={{ position: "absolute", left: l, top: t, fontSize: 12 + (i % 3) * 6, opacity: 0.2, color: "white" }}>✦</span>
          );
        })}
        <span style={{ position: "absolute", right: "8%", top: "30%", fontSize: 40, opacity: 0.15 }}>🏕️</span>
        <span style={{ position: "absolute", left: "3%", bottom: "20%", fontSize: 30, opacity: 0.15 }}>⭐</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div>
              <p className="text-white font-black text-base" style={{ fontFamily: "var(--font-fredoka)" }}>LITE camp 2026</p>
              <p className="text-white/60 text-xs">LITE camp, o.p.s. · Chrudim</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-center gap-2 text-sm text-white/70">
            <a href="tel:+420774650545" className="hover:text-white transition-colors">
              <PhoneIcon />774 650 545
            </a>
            <span className="hidden sm:inline mx-2 text-white/30">·</span>
            <a href="tel:+420739611714" className="hover:text-white transition-colors">
              <PhoneIcon />739 611 714
            </a>
            <span className="hidden sm:inline mx-2 text-white/30">·</span>
            <a href="mailto:hk@lite.cz" className="hover:text-white transition-colors">
              <MailIcon />hk@lite.cz
            </a>
          </div>

          <div className="text-sm text-white/60 md:text-right space-y-1">
            <p>Čáslavská 1162, 537 01 Chrudim</p>
            <p>© {new Date().getFullYear()} LITE camp, o.p.s.</p>
            <a href="https://inetio.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Vytvořilo inetio s.r.o.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
