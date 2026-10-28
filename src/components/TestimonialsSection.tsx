"use client";


import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials, testimonialsSectionData, fonts } from "@/data/fashionData";

export default function TestimonialsSection() {
  // Duplicate list for seamless marquee
  const endorsementMarqueeList = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C] bg-[#070707] overflow-hidden select-none">
      {/* Marquee Keyframes */}
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

      <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto w-full space-y-3 mb-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
          <div>
            <span className="text-[14px] sm:text-[15px] uppercase tracking-[0.22em] text-[#C9A96E] font-semibold block mb-0.5">
              {testimonialsSectionData.badge}
            </span>
            <h2 style={{ fontFamily: fonts.heading }} className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
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

        {/* Header Tape */}
        <div style={{ fontFamily: fonts.mono }} className="flex items-center justify-between text-[14px] font-normal uppercase tracking-[0.2em] text-[#666] px-1">
          <span>{testimonialsSectionData.headerTapeLeft}</span>
          <span className="hidden sm:inline">{testimonialsSectionData.headerTapeCenter}</span>
          <span>{testimonialsSectionData.headerTapeRight}</span>
        </div>

      </ScrollReveal>

      {/* Marquee Reel */}
      <ScrollReveal variant="fade-up" delay={120} className="w-full overflow-hidden select-none py-1 sm:py-2">
        <div className="animate-endorsement-loop gap-3.5 sm:gap-4 px-4" title="Continuous Marquee Reel (Hover to pause)">
          {endorsementMarqueeList.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 bg-[#0E0E0E] border border-[#222] hover:border-[#C9A96E] p-3.5 sm:p-4 rounded-xl flex flex-col justify-between shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.02] group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-1.5">
                  <span style={{ fontFamily: fonts.heading }} className="text-xl sm:text-2xl font-normal text-[#C9A96E]/40 leading-none">
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

                {/* Quote */}
                <blockquote className="text-[15px] sm:text-[16px] italic text-[#E5C583] leading-snug mb-2.5 font-light group-hover:text-white transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
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
                  <h4 style={{ fontFamily: fonts.heading }} className="text-[15px] sm:text-[16px] font-bold text-white group-hover:text-[#E5C583] transition-colors leading-tight truncate">
                    {t.author}
                  </h4>
                  <p className="text-[14px] uppercase tracking-wider text-[#C9A96E] font-medium leading-tight truncate">
                    {t.role}
                  </p>
                  {t.city && (
                    <p style={{ fontFamily: fonts.mono }} className="text-[14px] font-normal uppercase tracking-wider text-[#888] leading-none mt-1">
                      {t.city}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Footer Tape */}
      <ScrollReveal variant="fade-up" delay={200} className="max-w-7xl mx-auto w-full pt-3">
        <div style={{ fontFamily: fonts.mono }} className="flex items-center justify-between text-[14px] font-normal uppercase tracking-[0.3em] text-[#777] border-t border-[#1C1C1C] pt-2">
          <span>{testimonialsSectionData.footerTapeLeft}</span>
          <span>{testimonialsSectionData.footerTapeCenter}</span>
          <span>{testimonialsSectionData.footerTapeRight}</span>
        </div>
      </ScrollReveal>

    </section>
  );
}
