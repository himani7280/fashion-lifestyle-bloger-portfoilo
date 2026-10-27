"use client";

import React from "react";
import Image from "next/image";
import fashionData from "@/data/fashionData.json";
import { TestimonialItem } from "@/data/fashionData";

export default function TestimonialsSection() {
  const testimonials = fashionData.testimonials as TestimonialItem[];
  // Duplicate list to achieve a seamless, continuous infinite marquee reel
  const endorsementMarqueeList = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C] bg-[#070707] overflow-hidden select-none">
      {/* Endorsements Marquee Keyframe Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes endorsementLoopMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-endorsement-loop {
            display: flex;
            width: max-content;
            animation: endorsementLoopMarquee 36s linear infinite;
          }
          .animate-endorsement-loop:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-3 mb-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
          <div>
            <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block mb-0.5 font-[family-name:var(--font-inter)]">
              ✦ Industry Endorsements · Continuous Exhibition Reel
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              What Visionary{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Houses Say
              </em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic text-[#B0A696] max-w-md font-light">
            Testimonials from creative directors across Paris, Milan, London, and New Delhi. Hover to pause reel.
          </p>
        </div>

        {/* Film Edge Header Tape */}
        <div className="flex items-center justify-between text-[8.5px] uppercase tracking-[0.3em] text-[#555] font-mono px-1">
          <span>PREMIER FASHION HOUSES</span>
          <span className="hidden sm:inline">PARIS · MILAN · LONDON · NEW DELHI</span>
          <span>VERIFIED ENDORSEMENTS</span>
        </div>

      </div>

      {/* ── CONTINUOUS INFINITE CAROUSEL LOOP REEL ── */}
      <div className="w-full overflow-hidden select-none py-2" title="Continuous Marquee Reel (Hover to pause)">
        <div className="animate-endorsement-loop gap-4 sm:gap-6 px-4">
          {endorsementMarqueeList.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[280px] sm:w-[340px] shrink-0 bg-[#0E0E0E] border border-[#222] hover:border-[#C9A96E] p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] group"
            >
              <div>
                {/* Top Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[#C9A96E]/30 leading-none">
                    &ldquo;
                  </span>
                  <div className="flex items-center gap-1 text-[#C9A96E] text-[10px]">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic text-[#E5C583] leading-relaxed mb-4 font-light group-hover:text-white transition-colors line-clamp-3">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#1C1C1C]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9A96E]/50 shrink-0 bg-[#161616]">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C583] transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-[9.5px] uppercase tracking-wider text-[#C9A96E] font-medium line-clamp-1">
                    {t.role}
                  </p>
                  {t.city && (
                    <p className="text-[8.5px] uppercase tracking-wider text-[#777] font-mono">
                      {t.city}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Film Edge Footer Tape */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-3">
        <div className="flex items-center justify-between text-[8.5px] uppercase tracking-[0.3em] text-[#555] font-mono border-t border-[#1C1C1C] pt-2">
          <span>SAFETY ARCHIVE ◆ NO. 8840</span>
          <span>HOVER TO PAUSE REEL</span>
          <span>2026 EDITIONS</span>
        </div>
      </div>

    </section>
  );
}
