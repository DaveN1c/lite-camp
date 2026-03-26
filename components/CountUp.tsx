"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ to, suffix = "", duration = 1800, className }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(to * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString("cs-CZ")}
      {suffix}
    </span>
  );
}
