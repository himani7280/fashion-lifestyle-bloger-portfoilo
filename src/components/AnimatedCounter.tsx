"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "7+", "200+", "50+", "100%", "250K+", "14+", "120+"
  className?: string;
  duration?: number; // duration in ms, default 1800ms
}

export default function AnimatedCounter({
  value,
  className = "font-[family-name:var(--font-playfair)] text-xl font-bold text-[#E5C583] block",
  duration = 1800,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse numeric target and suffix/prefix from string
  // Examples:
  // "7+" -> target: 7, prefix: "", suffix: "+"
  // "100%" -> target: 100, prefix: "", suffix: "%"
  // "250K+" -> target: 250, prefix: "", suffix: "K+"
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    const el = elementRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();

            const step = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Ease Out Quart: 1 - (1 - t)^4
              const easeOut = 1 - Math.pow(1 - progress, 4);
              const currentNum = Math.floor(easeOut * targetNumber);

              setDisplayValue(`${prefix}${currentNum}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, targetNumber, prefix, suffix, value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
}
