"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-left" | "fade-right" | "zoom-in";
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenClasses = {
    "fade-up": "opacity-0 translate-y-5",
    "fade-left": "opacity-0 -translate-x-5",
    "fade-right": "opacity-0 translate-x-5",
    "zoom-in": "opacity-0 scale-[0.97]",
  }[variant];

  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  const delayClass =
    delay >= 300
      ? "delay-300"
      : delay >= 200
      ? "delay-200"
      : delay >= 100
      ? "delay-100"
      : "";

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${delayClass} ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
    >
      {children}
    </div>
  );
}

