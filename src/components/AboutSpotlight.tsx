"use client";


import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { personalBrand, fonts } from "@/data/fashionData";

export default function AboutSpotlight() {
  return (
    <section className="w-full pt-10 sm:pt-12 md:pt-14 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 border-t border-[#1C1C1C] bg-[#0A0A0A] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Spotlight Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* Left Portrait */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group flex flex-col justify-start">
            <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full min-h-[360px] lg:min-h-0 rounded-3xl overflow-hidden border border-[#C9A96E]/40 group-hover:border-[#C9A96E] transition-colors shadow-[0_12px_45px_rgba(0,0,0,0.9)] bg-[#121212]">
              <Image
                src={personalBrand.heroImage}
                alt={`${personalBrand.name} — Editorial Stylist & Creative Consultant`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectPosition: "50% 15%" }}
                className="object-cover filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right Narrative */}
          <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-4.5 text-left">
            <div className="space-y-2.5">
              <div className="inline-block bg-[#141414] text-[#E5C583] text-[12px] sm:text-[13px] uppercase tracking-[0.16em] font-semibold px-3.5 py-1 rounded-full border border-[#C9A96E]/30">
                {personalBrand.badge}
              </div>

              <h2 style={{ fontFamily: fonts.heading }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {personalBrand.spotlightTitleStart}
                <em className="italic font-light text-[#E5C583]">
                  {personalBrand.spotlightTitleHighlight}
                </em>
              </h2>

              <p className="text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light border-l-2 border-[#C9A96E] pl-3.5">
                &ldquo;{personalBrand.spotlightQuote}&rdquo;
              </p>
            </div>

            {personalBrand.spotlightParagraphs.map((para, idx) => (
              <p key={idx} className="text-[14px] sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                {para}
              </p>
            ))}

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href={personalBrand.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{personalBrand.primaryButtonText}</span>
                <span>→</span>
              </Link>
              <Link
                href={personalBrand.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1C1C1C] text-[#E5C583] hover:text-white border border-[#C9A96E]/40 font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <span>{personalBrand.secondaryButtonText}</span>
                <span>→</span>
              </Link>
            </div>

          </ScrollReveal>

        </div>

        {/* Stats Grid */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#1C1C1C] w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
            {personalBrand.spotlightStats.map((stat, idx) => (
              <ScrollReveal
                key={stat.label}
                variant="fade-up"
                delay={idx * 100}
                className="px-4 py-5 sm:py-6 md:py-7 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#C9A96E]/50 transition-colors text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] group"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E5C583] group-hover:text-white transition-colors block leading-none"
                />
                <span className="text-[14px] sm:text-[15px] md:text-[16px] uppercase tracking-wider text-[#C4BCB3] font-semibold block mt-2.5 whitespace-nowrap">
                  {stat.label}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
