"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#why", label: "Proč LITE camp" },
    { href: "#pricing", label: "Termíny" },
    { href: "#program", label: "Program" },
    { href: "#location", label: "Místo" },
    { href: "#parents", label: "Pro rodiče" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2e2c]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo size={34} />
          <span className="text-[#f5a623] text-[10px] font-bold uppercase tracking-widest">
            2026
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-[0.12em] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+420774650545"
            className="text-white/40 hover:text-white/80 text-xs transition-colors"
          >
            774 650 545
          </a>
          <a
            href="#contact"
            className="px-4 py-2.5 bg-[#f5a623] text-[#111] font-black text-xs uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            Přihlásit dítě →
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="square" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a2e2c] border-t border-white/10">
          <div className="px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-white/70 hover:text-white text-sm font-semibold border-b border-white/10 last:border-0 transition-colors"
              >
                {l.label}
                <span className="text-white/30 text-xs">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 mb-2 py-3.5 bg-[#f5a623] text-[#111] font-black text-sm text-center uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Přihlásit dítě →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
