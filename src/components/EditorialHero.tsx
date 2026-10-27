"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function EditorialHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-end justify-between overflow-hidden bg-[#141312] text-white"
    >
      {/* ── FULL-BLEED EDITORIAL PHOTOGRAPHY ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/model-hero.jpg"
          alt="Tara Verma High-Fashion Editorial"
          fill
          priority
          sizes="100vw"
          quality={95}
          style={{ objectPosition: "50% 20%" }}
          className="object-cover filter brightness-[0.88] contrast-[1.05] scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Scrim for perfect typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/95 via-[#141312]/40 to-[#141312]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141312]/60 via-transparent to-[#141312]/30 pointer-events-none" />
      </div>

      {/* ── VERTICAL SIDE LABELS (EDITORIAL MAGAZINE TREATMENT) ── */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-10 items-center gap-4 text-[9px] tracking-[0.4em] uppercase text-[#FBF9F5]/70 font-[family-name:var(--font-inter)] select-none">
        <span className="w-8 h-[1px] bg-[#C5A880]" />
        <span>Tara Verma Haute Couture</span>
        <span className="text-[#C5A880]">·</span>
        <span>Vol. XXIV Edit</span>
      </div>

      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right z-10 items-center gap-4 text-[9px] tracking-[0.4em] uppercase text-[#FBF9F5]/70 font-[family-name:var(--font-inter)] select-none">
        <span>Paris · Milan · New Delhi</span>
        <span className="w-8 h-[1px] bg-[#C5A880]" />
      </div>

      {/* ── MAIN EDITORIAL HEADLINE & CONTENT (BOTTOM COMPOSITION) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-14 md:pb-20 pt-36 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        
        {/* Left Headline Area */}
        <div className="max-w-2xl space-y-4">
          
          {/* Small Editorial Badge */}
          <div className="inline-flex items-center gap-3 bg-[#FBF9F5]/10 backdrop-blur-md px-3.5 py-1.5 border border-white/20 text-[#E5D7C3] text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>The New Fashion Edit</span>
          </div>

          {/* Core Brand Headline */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[0.02em] leading-[1.08] text-[#FBF9F5] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            STYLE IS A FORM OF{" "}
            <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#EAD8BF] block sm:inline">
              SELF-EXPRESSION.
            </span>
          </h1>

          {/* Supporting Line */}
          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#D8CCA8] font-light max-w-lg leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Timeless elegance. Contemporary spirit.
          </p>

        </div>

        {/* Right CTA Area & Slide Marker */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-6 lg:gap-8">
          
          <div className="flex items-center gap-4 text-xs font-[family-name:var(--font-inter)] text-[#C5A880] tracking-[0.2em] uppercase">
            <span className="font-mono text-sm font-bold text-white">01</span>
            <span className="w-12 h-[1px] bg-[#C5A880]/60" />
            <span className="text-white/60">05</span>
          </div>

          <a
            href="#collections"
            className="group inline-flex items-center gap-4 bg-[#FBF9F5] text-[#141312] hover:bg-[#C5A880] hover:text-white px-8 py-4 text-[11px] tracking-[0.28em] uppercase font-[family-name:var(--font-inter)] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <span>Explore The Collection</span>
            <ArrowDown size={14} className="transform group-hover:translate-y-1 transition-transform" />
          </a>

        </div>

      </div>

      {/* Bottom Sub-border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/40 to-transparent pointer-events-none" />
    </section>
  );
}
