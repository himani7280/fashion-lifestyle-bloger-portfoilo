"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/fashionData";

export default function TestimonialsSection() {
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

      <div className="max-w-7xl mx-auto w-full space-y-3 mb-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
          <div>
            <span className="text-[14px] sm:text-[15px] uppercase tracking-[0.22em] text-[#C9A96E] font-semibold block mb-0.5 font-[family-name:var(--font-inter)]">
              ✦ Industry Endorsements · Continuous Exhibition Reel
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              What Visionary{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Houses Say
              </em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-[14px] sm:text-base italic text-[#B0A696] max-w-md font-light">
            Testimonials from creative directors across Paris, Milan, London, and New Delhi. Hover to pause reel.
          </p>
        </div>

        {/* Film Edge Header Tape */}
        <div className="flex items-center justify-between text-[14px] uppercase tracking-[0.2em] text-[#666] font-mono px-1">
          <span>PREMIER FASHION HOUSES</span>
          <span className="hidden sm:inline">PARIS · MILAN · LONDON · NEW DELHI</span>
          <span>VERIFIED ENDORSEMENTS</span>
        </div>

      </div>

      {/* ── CONTINUOUS INFINITE CAROUSEL LOOP REEL ── */}
      <div className="w-full overflow-hidden select-none py-1 sm:py-2" title="Continuous Marquee Reel (Hover to pause)">
        <div className="animate-endorsement-loop gap-3.5 sm:gap-4 px-4">
          {endorsementMarqueeList.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 bg-[#0E0E0E] border border-[#222] hover:border-[#C9A96E] p-3.5 sm:p-4 rounded-xl flex flex-col justify-between shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] group"
            >
              <div>
                {/* Top Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-[#C9A96E]/40 leading-none">
                    &ldquo;
                  </span>
                  <div className="flex items-center gap-0.5 text-[#C9A96E] text-[14px]">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                  </div>
                </div>

                {/* Quote Body — Full text displayed cleanly in compact proportions */}
                <blockquote className="font-[family-name:var(--font-cormorant)] text-[15px] sm:text-[16px] italic text-[#E5C583] leading-snug mb-2.5 font-light group-hover:text-white transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info — Compact and refined */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-[#1C1C1C]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9A96E]/50 shrink-0 bg-[#161616]">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-[family-name:var(--font-playfair)] text-[15px] sm:text-[16px] font-bold text-white group-hover:text-[#E5C583] transition-colors leading-tight truncate">
                    {t.author}
                  </h4>
                  <p className="text-[14px] uppercase tracking-wider text-[#C9A96E] font-medium leading-tight truncate">
                    {t.role}
                  </p>
                  {t.city && (
                    <p className="text-[14px] uppercase tracking-wider text-[#888] font-mono leading-none mt-1">
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
      <div className="max-w-7xl mx-auto w-full pt-3">
        <div className="flex items-center justify-between text-[14px] uppercase tracking-[0.3em] text-[#777] font-mono border-t border-[#1C1C1C] pt-2">
          <span>SAFETY ARCHIVE ◆ NO. 8840</span>
          <span>HOVER TO PAUSE REEL</span>
          <span>2026 EDITIONS</span>
        </div>
      </div>

    </section>
  );
}
