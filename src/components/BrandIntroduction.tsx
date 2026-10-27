"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandIntroduction() {
  return (
    <section id="brand" className="py-24 md:py-36 bg-[#FBF9F5] text-[#141312] relative overflow-hidden border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── ASYMMETRICAL EDITORIAL GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Brand Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Minimal Decorative Label */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#A38760] font-semibold">
                N° 01 · Editorial Vision
              </span>
              <span className="w-12 h-[1px] bg-[#C5A880]/60" />
            </div>

            {/* Main Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#141312]">
              BEYOND TRENDS.{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#A38760] block mt-1">
                INTO TIMELESS STYLE.
              </span>
            </h2>

            {/* Sophisticated Brand Statement */}
            <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#4A443D] leading-relaxed font-light">
              &ldquo;Fashion is the silent poetry of presence. We craft garments that speak before you say a word—rooted in modern grace, refined architectural cuts, and lasting feminine poise.&rdquo;
            </p>

            <p className="font-[family-name:var(--font-inter)] text-xs sm:text-sm text-[#736B63] leading-relaxed font-light">
              At Tara Verma Fashion &amp; Lifestyle, contemporary garments are created as wearable art. Each piece celebrates harmonious drape, thoughtful proportions, and the effortless transition between daytime casual and evening couture.
            </p>

            {/* Understated Link */}
            <div className="pt-2">
              <a
                href="#collections"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.24em] uppercase font-[family-name:var(--font-inter)] font-semibold text-[#141312] border-b border-[#141312] pb-1 hover:text-[#A38760] hover:border-[#A38760] transition-colors"
              >
                <span>View The Philosophy In Motion</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Overlapping Asymmetric Photographs (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Background Soft Cream Accent Mat */}
            <div className="absolute -inset-4 md:-inset-8 bg-[#F4EFEB] -z-10 rounded-sm pointer-events-none" />

            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* One Large Primary Fashion Photograph (8 cols) */}
              <div className="col-span-12 sm:col-span-8 relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E2D8] shadow-[0_12px_40px_rgba(20,19,18,0.06)] border border-[#E8E2D8]/80 group">
                  <Image
                    src="/images/model-blazer.jpg"
                    alt="Tara Verma Fashion Editorial Muse"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    style={{ objectPosition: "50% 20%" }}
                    className="object-cover filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle Corner Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#FBF9F5]/90 backdrop-blur-md px-3 py-1.5 border border-[#E8E2D8]">
                    <span className="text-[9px] tracking-[0.25em] uppercase font-[family-name:var(--font-inter)] text-[#141312] font-semibold">
                      Autumn Atelier · Look 04
                    </span>
                  </div>
                </div>
              </div>

              {/* Smaller Complementary Overlapping Photograph (4 cols) */}
              <div className="col-span-12 sm:col-span-4 sm:-ml-6 relative mt-6 sm:mt-0 z-10">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E2D8] shadow-[0_16px_50px_rgba(20,19,18,0.12)] border-2 border-[#FBF9F5] group">
                  <Image
                    src="/images/model-contact.jpg"
                    alt="Tara Verma High-Fashion Silhouette"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectPosition: "50% 20%" }}
                    className="object-cover filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-3 right-3 bg-[#141312] text-[#FBF9F5] px-2.5 py-1 text-[8.5px] tracking-[0.2em] uppercase font-mono font-bold">
                    Pure Silk
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
