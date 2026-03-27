"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#why", label: "Proč LITE camp" },
  { href: "#pricing", label: "Termíny & ceny" },
  { href: "#program", label: "Program" },
  { href: "#location", label: "Místo" },
  { href: "#gallery", label: "Galerie" },
  { href: "#reviews", label: "Reference" },
  { href: "#parents", label: "Pro rodiče" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-teal-100 transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-teal-50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <Logo size={34} />
          <span className="text-[#14b8a6] text-[10px] font-bold uppercase tracking-widest">
            2026
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-gray-600 hover:text-[#14b8a6] text-[13px] font-extrabold transition-colors group"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#14b8a6] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+420774650545"
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#14b8a6] text-xs transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/>
            </svg>
            774 650 545
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#fbbf24] text-[#111] font-black text-xs uppercase tracking-wider hover:bg-[#f59e0b] transition-colors"
          >
            Přihlásit dítě →
          </a>
        </div>

        {/* Mobile — phone + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+420774650545"
            className="text-[#14b8a6] p-1"
            aria-label="Zavolat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
          <button
            className="text-gray-600 p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h10M4 17h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-teal-100 overflow-hidden"
          >
            <div className="px-6 py-3">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.18 }}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-gray-600 hover:text-[#14b8a6] text-sm font-semibold border-b border-gray-100 last:border-0 transition-colors"
                >
                  {l.label}
                  <span className="text-gray-300 text-xs">→</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 mb-2 py-3.5 bg-[#fbbf24] text-[#111] font-black text-sm text-center uppercase tracking-wider hover:bg-[#f59e0b] transition-colors"
              >
                Přihlásit dítě →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
