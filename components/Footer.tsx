export default function Footer() {
  return (
    <footer className="bg-[#060f09] text-white/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f5a623] to-[#e8941a] rounded-xl flex items-center justify-center font-black text-[#1a1a1a] text-lg shadow-lg">
              L
            </div>
            <div>
              <p className="text-white font-black text-base">LITE camp</p>
              <p className="text-white/30 text-xs">LITE camp, o.p.s.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row md:justify-center gap-3 text-sm">
            <a href="tel:+420774650545" className="hover:text-white transition-colors">774 650 545</a>
            <span className="hidden sm:inline">·</span>
            <a href="tel:+420739611714" className="hover:text-white transition-colors">739 611 714</a>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:hk@lite.cz" className="hover:text-white transition-colors">hk@lite.cz</a>
          </div>

          {/* Address + copyright */}
          <div className="text-xs text-right space-y-1">
            <p className="text-white/30">Čáslavská 1162, 537 01 Chrudim</p>
            <p>© {new Date().getFullYear()} LITE camp, o.p.s.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
