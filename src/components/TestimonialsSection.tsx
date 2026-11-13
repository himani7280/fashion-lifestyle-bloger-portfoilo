"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials, testimonialsSectionData, fonts } from "@/data/fashionData";

export default function TestimonialsSection() {
  // Duplicate list for seamless marquee
  const endorsementMarqueeList = [...testimonials, ...testimonials];
  const reelRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;
    let rafId: number;
    let pos = 0;

    const tick = () => {
      if (!pausedRef.current && el) {
        pos += 0.6;
        if (pos >= el.scrollWidth / 2) {
          pos = 0;
        }
        el.scrollLeft = pos;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-10 md:py-12 px-2 sm:px-3 md:px-5 border-b border-[#1C1C1C] bg-[#070707] overflow-hidden select-none">
      <ScrollReveal variant="fade-up" className="w-full space-y-3 mb-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
          <div>
            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {testimonialsSectionData.titleStart}
              <em className="italic font-light text-[#E5C583]">
                {testimonialsSectionData.titleHighlight}
              </em>
            </h2>
          </div>
          <p className="text-[14px] sm:text-base italic text-[#B0A696] max-w-md font-light">
            {testimonialsSectionData.description}
          </p>
        </div>

      </ScrollReveal>

      {/* Marquee Reel */}
      <ScrollReveal variant="fade-up" delay={120} className="w-full overflow-hidden select-none py-2 sm:py-3 min-w-0">
        <div
          ref={reelRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          className="flex overflow-x-hidden overflow-y-hidden gap-3.5 sm:gap-5 px-2 py-3 w-full max-w-full"
          title="Continuous Marquee Reel (Hover to pause)"
        >
          {endorsementMarqueeList.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-[#0E0E0E]/90 border border-[#222] hover:border-[#C9A96E]/50 p-4 sm:p-5 md:p-6 rounded-2xl flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.01] group min-h-[200px]"
            >
              <div className="space-y-3">
                <span className={`${fonts.heading} text-3xl sm:text-4xl text-[#C9A96E]/30 leading-none select-none block`}>
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="text-[14px] sm:text-[15px] md:text-base italic text-[#D8CFBF] leading-relaxed font-light group-hover:text-white transition-colors">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1C1C1C] mt-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C9A96E]/40 shrink-0 bg-[#161616]">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className={`${fonts.heading} text-[15px] sm:text-base font-bold text-white group-hover:text-[#E5C583] transition-colors leading-tight truncate`}>
                    {t.author}
                  </h4>
                  <p className="text-[12px] uppercase tracking-wider text-[#C9A96E] font-medium leading-tight truncate mt-0.5">
                    {t.role}
                  </p>
                  {t.city && (
                    <p className={`${fonts.mono} text-[11px] font-normal uppercase tracking-widest text-[#777] leading-none mt-1`}>
                      {t.city}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </ScrollReveal>

    </section>
  );
}
