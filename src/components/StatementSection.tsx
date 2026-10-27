"use client";

import React from "react";
import Image from "next/image";

export default function StatementSection() {
  return (
    <section className="py-28 md:py-44 bg-[#0F0E0D] text-[#FBF9F5] relative overflow-hidden">
      
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Folio Header (Magazine Spread Style) */}
        <div className="flex items-center justify-between pb-8 mb-12 md:mb-20 border-b border-white/10 text-[9.5px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#C5A880]">
          <span>Folio N° 48 · The Manifesto</span>
          <span>Tara Verma Fashion &amp; Lifestyle</span>
        </div>

        {/* ── LUXURY MAGAZINE SPREAD LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Oversized Statement Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880] block font-mono font-bold">
              ✦ Statement Quote
            </span>

            <blockquote className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-white tracking-[0.01em]">
              &ldquo;CONFIDENCE IS THE{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#EAD8BF] block sm:inline">
                MOST BEAUTIFUL
              </span>{" "}
              THING YOU CAN WEAR.&rdquo;
            </blockquote>

            <div className="pt-4 space-y-4 max-w-lg">
              <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#BFA37C] font-light leading-relaxed">
                Garments should never overshadow the woman who wears them; they should elevate her innate grace and celebrate her distinctive presence.
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <span className="w-12 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-inter)] font-semibold text-white/90">
                  Tara Verma
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Complementary High-Fashion Photograph (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#1A1918] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/model-contact.jpg"
                alt="Tara Verma Editorial Statement"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectPosition: "50% 20%" }}
                className="object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-transparent to-transparent opacity-40" />

              {/* Minimal Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F0E0D]/90 backdrop-blur-md border border-white/10 text-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
                  Couture Silhouette · Paris Sunset
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Folio Footer */}
        <div className="flex items-center justify-between pt-12 mt-12 md:mt-20 border-t border-white/10 text-[9px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] text-white/40">
          <span>Printed Autumn 2026</span>
          <span>Curated in Paris &amp; New Delhi</span>
        </div>

      </div>
    </section>
  );
}
