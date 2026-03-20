"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#why", label: "Proč LITE camp" },
    { href: "#pricing", label: "Termíny & ceny" },
    { href: "#program", label: "Program" },
    { href: "#location", label: "Místo" },
    { href: "#parents", label: "Pro rodiče" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3" : "py-5"
    }`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? "lg:px-6" : "lg:px-8"
      }`}>
        <div className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d3320]/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-0"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#f5a623] to-[#e8941a] rounded-xl flex items-center justify-center font-black text-[#1a1a1a] text-lg shadow-lg group-hover:scale-105 transition-transform">
              L
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-tight">LITE camp</span>
              <span className="text-white/40 text-[10px] font-medium tracking-widest uppercase">2026</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+420774650545"
              className="text-white/60 hover:text-white text-sm transition-colors hidden lg:block"
            >
              774 650 545
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#f5a623] hover:bg-[#e8941a] text-[#1a1a1a] font-bold text-sm rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#f5a623]/30"
            >
              Přihlásit dítě →
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-[#0d3320]/98 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-2xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3 bg-[#f5a623] hover:bg-[#e8941a] text-[#1a1a1a] font-bold rounded-xl transition-colors"
              >
                Přihlásit dítě →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
