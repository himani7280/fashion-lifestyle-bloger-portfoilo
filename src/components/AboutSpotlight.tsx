"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutSpotlight() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-t border-[#1C1C1C] bg-[#0A0A0A] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ── EDITORIAL STYLIST & CREATIVE CONSULTANT (HOME SPOTLIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-stretch">
          
          {/* Left: Large Stylist Portrait (Flush Left with Header) */}
          <div className="lg:col-span-5 relative group flex flex-col justify-start">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-full min-h-[300px] lg:min-h-[350px] rounded-3xl overflow-hidden border border-[#C9A96E]/40 group-hover:border-[#C9A96E] transition-colors shadow-[0_12px_45px_rgba(0,0,0,0.9)] bg-[#121212]">
              <Image
                src="/images/model-hero.jpg"
                alt="Tara Verma — Editorial Stylist & Creative Consultant"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectPosition: "50% 15%" }}
                className="object-cover filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>

          {/* Right: Narrative Story & Credentials (Flush Right with Header) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
            <div className="space-y-3">
              <div className="inline-block bg-[#141414] text-[#E5C583] text-[10px] uppercase tracking-[0.22em] font-semibold px-3.5 py-1 rounded-full border border-[#C9A96E]/30">
                ✦ Editorial Stylist &amp; Creative Consultant
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                The Journey of Sartorial Storytelling
              </h2>

              <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light border-l-2 border-[#C9A96E] pl-3.5">
                &ldquo;Fashion styling is the deliberate art of visual storytelling through cut, drape, and structural harmony.&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-[13px] text-[#B3A99B] leading-relaxed font-light">
              Over seven years of creative direction across Paris, Milan, and New Delhi, Tara Verma curates bespoke capsule wardrobes, red carpet appearances, and high-impact editorials defined by razor-sharp tailoring and timeless elegance.
            </p>

            {/* Credentials Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-[#1C1C1C]">
              <div className="p-2.5 rounded-xl bg-[#111111] border border-[#222222] text-center">
                <AnimatedCounter value="7+" />
                <span className="text-[9px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Years Styling</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111111] border border-[#222222] text-center">
                <AnimatedCounter value="200+" />
                <span className="text-[9px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Outfits Curated</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111111] border border-[#222222] text-center">
                <AnimatedCounter value="50+" />
                <span className="text-[9px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Brand Campaigns</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111111] border border-[#222222] text-center">
                <AnimatedCounter value="100%" />
                <span className="text-[9px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Bespoke Curation</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Contact Tara ✦</span>
                <span>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1C1C1C] text-[#E5C583] hover:text-white border border-[#C9A96E]/40 font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
              >
                <span>View Portfolio</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
