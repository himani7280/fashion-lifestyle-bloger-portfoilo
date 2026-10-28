"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    sm: "h-10 sm:h-11 w-auto",
    md: "h-12 sm:h-14 md:h-16 w-auto",
    lg: "h-16 sm:h-20 md:h-24 w-auto",
    xl: "h-24 sm:h-28 md:h-32 w-auto",
  }[size];

  const content = (
    <div
      className={`inline-flex items-center select-none group transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <Image
        src="/logo-metallic.png"
        alt={`${name} — ${subtitle}`}
        width={380}
        height={120}
        priority
        className={`${sizeClasses} object-contain filter brightness-[1.02] contrast-[1.02] group-hover:brightness-110 transition-all duration-300`}
      />
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
