"use client";

import React, { useEffect, useRef, useState } from "react";
import { fonts } from "@/data/fashionData";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  className = "text-xl font-bold text-[#E5C583] block",
  duration = 1800,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse numeric target and prefix/suffix
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
    <span ref={elementRef} className={`${fonts.heading} lining-nums tabular-nums ${className}`}>
      {hasAnimated ? displayValue : `${prefix}0${suffix}`}
    </span>
  );
}
