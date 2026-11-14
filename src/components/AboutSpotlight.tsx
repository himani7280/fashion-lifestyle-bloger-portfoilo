"use client";


import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { personalBrand, fonts, getObjectPosClass } from "@/data/fashionData";

export default function AboutSpotlight() {
  const objectPos = personalBrand.objectPosition || "50% 28%";
  return (
    <section className="w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-3.5 sm:pb-5 md:pb-6 lg:pb-7 px-2 sm:px-3 md:px-5 border-t border-[#1C1C1C] bg-[#0A0A0A] text-[#F5F0E8] overflow-hidden">
      <div className="w-full">
        
        {/* Spotlight Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 items-stretch pb-4 sm:pb-6 md:pb-8">
          
          {/* Left Portrait */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group flex flex-col">
            <div className="relative w-full h-[220px] min-[420px]:h-[260px] sm:h-[320px] md:h-[380px] lg:h-full min-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C9A96E]/40 group-hover:border-[#C9A96E] transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.85)] bg-[#121212] flex-1">
              <Image
                src={personalBrand.heroImage}
                alt={`${personalBrand.name} — Editorial Stylist`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectPosition: objectPos }}
                className={`object-cover ${getObjectPosClass(objectPos)} filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right Narrative */}
          <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-3.5 text-left">
            <div className="space-y-1.5 sm:space-y-2">
              <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                {personalBrand.spotlightTitleStart}{" "}
                <em className="italic font-light text-[#E5C583]">
                  {personalBrand.spotlightTitleHighlight}
                </em>
              </h2>

              <p className="text-xs sm:text-sm md:text-base italic text-[#DFC18A] leading-relaxed font-light border-l-2 border-[#C9A96E] pl-2.5 py-0.5">
                &ldquo;{personalBrand.spotlightQuote}&rdquo;
              </p>
            </div>

            <div className="space-y-2 sm:space-y-2.5">
              {personalBrand.spotlightParagraphs.map((para, idx) => (
                <p key={idx} className="text-[13px] sm:text-[14px] md:text-[15px] text-[#C4BCB3] leading-relaxed font-light text-left sm:text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href={personalBrand.primaryButtonLink}
                className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] px-4.5 sm:px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(201,169,110,0.25)] hover:shadow-[0_6px_25px_rgba(201,169,110,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{personalBrand.primaryButtonText}</span>
                <span>→</span>
              </Link>
              <Link
                href={personalBrand.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-1.5 bg-[#141414] hover:bg-[#1C1C1C] text-[#E5C583] hover:text-white border border-[#C9A96E]/40 font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.08em] px-4.5 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <span>{personalBrand.secondaryButtonText}</span>
                <span>→</span>
              </Link>
            </div>

          </ScrollReveal>

        </div>

        {/* Stats Grid */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#1C1C1C] w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full">
            {personalBrand.spotlightStats.map((stat, idx) => (
              <ScrollReveal
                key={stat.label}
                variant="fade-up"
                delay={idx * 100}
                className="px-3 sm:px-4 py-4 sm:py-6 md:py-7 min-h-[95px] sm:min-h-[115px] md:min-h-[130px] rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#C9A96E]/50 transition-colors text-center flex flex-col justify-center items-center shadow-[0_4px_20px_rgba(0,0,0,0.4)] group overflow-hidden"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E5C583] group-hover:text-white transition-colors block leading-none"
                />
                <span className="text-[11px] sm:text-[13px] lg:text-[14px] uppercase tracking-wide sm:tracking-wider text-[#C4BCB3] font-semibold block mt-2 sm:mt-2.5 leading-snug text-center max-w-full">
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
