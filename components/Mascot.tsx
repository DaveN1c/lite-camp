"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Mascot({ size = 130 }: { size?: number }) {
  const armControls = useAnimation();

  useEffect(() => {
    armControls
      .start({
        rotate: [0, -50, -15, -55, -15, -50, 0],
        transition: { duration: 2.8, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1], ease: "easeInOut" },
      })
      .then(() => {
        armControls.start({
          rotate: [0, -12, 0],
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        });
      });
  }, [armControls]);

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: size, flexShrink: 0 }}
    >
      <svg viewBox="0 0 100 145" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible" }}>
        {/* Camp hat brim */}
        <ellipse cx="50" cy="38" rx="26" ry="5.5" fill="#fbbf24" />
        {/* Hat body */}
        <path d="M28 38 L50 10 L72 38 Z" fill="#f59e0b" />
        {/* Hat band */}
        <rect x="26" y="35" width="48" height="6" rx="3" fill="#fbbf24" />
        {/* Star on hat */}
        <text x="50" y="30" fontSize="8" textAnchor="middle" dominantBaseline="middle">⭐</text>

        {/* Head */}
        <circle cx="50" cy="63" r="23" fill="#FDDBB4" />

        {/* Hair */}
        <path d="M28 53 Q50 38 72 53 Q70 43 50 40 Q30 43 28 53Z" fill="#7C4D2C" />

        {/* Eyes (big, happy) */}
        <circle cx="42" cy="60" r="5" fill="white" />
        <circle cx="58" cy="60" r="5" fill="white" />
        <circle cx="42.5" cy="61" r="3" fill="#2d2d2d" />
        <circle cx="58.5" cy="61" r="3" fill="#2d2d2d" />
        {/* Eye shine */}
        <circle cx="44" cy="59.5" r="1.2" fill="white" />
        <circle cx="60" cy="59.5" r="1.2" fill="white" />

        {/* Eyebrows (friendly arc) */}
        <path d="M37 53.5 Q42 51 47 53.5" stroke="#7C4D2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M53 53.5 Q58 51 63 53.5" stroke="#7C4D2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Big smile */}
        <path d="M40 70 Q50 79 60 70" stroke="#E8956D" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* Cheek blush */}
        <ellipse cx="36" cy="68" rx="7" ry="5" fill="#FFB3B3" fillOpacity="0.45" />
        <ellipse cx="64" cy="68" rx="7" ry="5" fill="#FFB3B3" fillOpacity="0.45" />

        {/* Body / t-shirt (teal) */}
        <rect x="32" y="84" width="36" height="32" rx="6" fill="#14b8a6" />

        {/* Collar */}
        <path d="M44 84 L50 90 L56 84" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Left arm (static, slightly angled down) */}
        <path d="M32 88 Q20 96 22 108" stroke="#FDDBB4" strokeWidth="11" strokeLinecap="round" fill="none" />
        {/* Left hand */}
        <circle cx="22" cy="109" r="7" fill="#FDDBB4" />

        {/* Right arm (WAVING — animated) */}
        <motion.g
          animate={armControls}
          style={{ originX: "68px", originY: "88px" } as React.CSSProperties}
        >
          <path d="M68 88 Q80 78 84 66" stroke="#FDDBB4" strokeWidth="11" strokeLinecap="round" fill="none" />
          <circle cx="84" cy="64" r="7" fill="#FDDBB4" />
        </motion.g>

        {/* Legs */}
        <rect x="37" y="114" width="11" height="22" rx="5" fill="#1e3a5f" />
        <rect x="52" y="114" width="11" height="22" rx="5" fill="#1e3a5f" />

        {/* Shoes */}
        <ellipse cx="42.5" cy="138" rx="10" ry="5" fill="#1a1a2e" />
        <ellipse cx="57.5" cy="138" rx="10" ry="5" fill="#1a1a2e" />
      </svg>
    </motion.div>
  );
}
