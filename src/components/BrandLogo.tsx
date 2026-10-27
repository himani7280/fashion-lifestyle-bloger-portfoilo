"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  name?: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  theme?: "dark" | "light";
}

export default function BrandLogo({
  name = "Tara Verma",
  subtitle = "FASHION & LIFESTYLE",
  size = "md",
  href = "/",
  className = "",
}: BrandLogoProps) {
  const sizeClasses = {
    sm: {
      wrap: "gap-0.5",
      title: "text-lg sm:text-xl tracking-[0.06em]",
      subtitle: "text-[7.5px] sm:text-[8px] tracking-[0.32em]",
    },
    md: {
      wrap: "gap-0.5",
      title: "text-2xl sm:text-[26px] tracking-[0.07em]",
      subtitle: "text-[8.5px] sm:text-[9.5px] tracking-[0.34em]",
    },
    lg: {
      wrap: "gap-1",
      title: "text-3xl sm:text-4xl md:text-5xl tracking-[0.09em]",
      subtitle: "text-xs tracking-[0.4em]",
    },
    xl: {
      wrap: "gap-1.5",
      title: "text-4xl sm:text-6xl md:text-7xl tracking-[0.1em]",
      subtitle: "text-xs sm:text-sm tracking-[0.45em]",
    },
  }[size];

  const content = (
    <div
      className={`inline-flex flex-col items-center justify-center select-none group transition-transform duration-300 ${sizeClasses.wrap} ${className}`}
    >
      <span
        className={`font-[family-name:var(--font-playfair)] font-medium text-center block ${sizeClasses.title} text-white group-hover:text-[#E5C583] transition-colors`}
      >
        {name}
      </span>

      {/* Subtitle with gold flourish */}
      <div className="flex items-center gap-2 w-full justify-center">
        <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-r from-transparent to-[#C9A96E]" />
        <span
          className={`font-[family-name:var(--font-poppins)] font-medium uppercase text-center block ${sizeClasses.subtitle} text-[#C9A96E]`}
        >
          {subtitle}
        </span>
        <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-l from-transparent to-[#C9A96E]" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label={`${name} ${subtitle}`}>
        {content}
      </Link>
    );
  }

  return content;
}
