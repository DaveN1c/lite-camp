"use client";

import { useEffect } from "react";

const COLORS = ["#14b8a6", "#fbbf24", "#f97316", "#ec4899", "#8b5cf6"];

export default function CursorSparkle() {
  useEffect(() => {
    // Only on pointer devices (not touch-only)
    if (!window.matchMedia("(hover: hover)").matches) return;

    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 45) return;
      lastTime = now;

      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = 5 + Math.random() * 7;
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 18;
      const isSquare = Math.random() > 0.55;

      const el = document.createElement("div");
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        width: ${size}px;
        height: ${size}px;
        border-radius: ${isSquare ? "2px" : "50%"};
        background: ${color};
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        will-change: transform, opacity;
        transition: transform 0.55s cubic-bezier(0.2, 0, 0.8, 1), opacity 0.55s ease;
        opacity: 0.85;
      `;

      document.body.appendChild(el);

      requestAnimationFrame(() => {
        el.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`;
        el.style.opacity = "0";
      });

      setTimeout(() => el.remove(), 650);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
