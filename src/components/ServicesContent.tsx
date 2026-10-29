"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { services, servicesHero, servicesPageData, PortraitPlate, fonts } from "@/data/fashionData";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

const PORTRAIT_PLATES: PortraitPlate[] = servicesPageData.portraitArchives.items;

export default function ServicesContent() {
  const [selectedPlate, setSelectedPlate] = useState<PortraitPlate | null>(null);
  const marqueeList = [...PORTRAIT_PLATES, ...PORTRAIT_PLATES];
  const portraitReelRef = useRef<HTMLDivElement>(null);
  const portraitPausedRef = useRef(false);

  useEffect(() => {
    const el = portraitReelRef.current;
    if (!el) return;
    let rafId: number;
    let pos = 0;

    const tick = () => {
      if (!portraitPausedRef.current && el) {
        pos += 0.5;
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

  const currentPlateIndex = selectedPlate
    ? PORTRAIT_PLATES.findIndex((p) => p.id === selectedPlate.id)
    : -1;

  const handlePrevPlate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPlateIndex > -1) {
      const prevIdx = (currentPlateIndex - 1 + PORTRAIT_PLATES.length) % PORTRAIT_PLATES.length;
      setSelectedPlate(PORTRAIT_PLATES[prevIdx]);
    }
  };

  const handleNextPlate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPlateIndex > -1) {
      const nextIdx = (currentPlateIndex + 1) % PORTRAIT_PLATES.length;
      setSelectedPlate(PORTRAIT_PLATES[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPlate(null);
      } else if (e.key === "ArrowLeft") {
        if (currentPlateIndex > -1) {
          const prevIdx = (currentPlateIndex - 1 + PORTRAIT_PLATES.length) % PORTRAIT_PLATES.length;
          setSelectedPlate(PORTRAIT_PLATES[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        if (currentPlateIndex > -1) {
          const nextIdx = (currentPlateIndex + 1) % PORTRAIT_PLATES.length;
          setSelectedPlate(PORTRAIT_PLATES[nextIdx]);
        }
      }
    };
    if (selectedPlate) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPlate, currentPlateIndex]);

  const { intro, advantage, portraitArchives } = servicesPageData;

  return (
    <div className={`${fonts.body} bg-[#0A0A0A] text-[#F5F0E8] font-normal min-h-screen overflow-x-hidden`}>
      
      {/* Hero Banner */}
      <section className="relative w-full py-2 sm:py-3 border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={servicesHero.image}
              alt={`${servicesHero.title} — ${servicesHero.subtitle}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_20%] filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">{servicesHero.homeText}</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{servicesHero.breadcrumb}</span>
            </div>

            <h1 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {servicesHero.titleStart}{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                {servicesHero.titleHighlight}
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* Atelier Services */}
      <section className="relative w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto my-[12px] py-[12px] space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[14px] uppercase tracking-[0.35em] text-[#C9A96E] font-bold block">
              {intro.badge}
            </span>
            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {intro.titleStart}
              <em className="italic font-light text-[#E5C583]">
                {intro.titleHighlight}
              </em>
            </h2>
            <p className="text-base sm:text-lg italic text-[#B0A696] font-light max-w-2xl mx-auto">
              {intro.description}
            </p>
          </ScrollReveal>

          {/* Alternating Service Spreads */}
          <div className="space-y-5 sm:space-y-6">
            {services.map((srv, idx) => {
              const isEven = idx % 2 === 1;
              const romanNums = ["I", "II", "III", "IV"];
              const roman = romanNums[idx] || "I";

              return (
                <ScrollReveal
                  key={srv.id}
                  variant="fade-up"
                  className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0D0D0D] border border-[#222] hover:border-[#C9A96E]/60 transition-all duration-700 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Image Column */}
                    <div className={`lg:col-span-5 relative flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative w-full h-[280px] sm:h-[320px] lg:h-full min-h-[280px] lg:min-h-0 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.85)] border border-[#C9A96E]/30 group bg-[#161616] flex-1">
                        {/* Corner Accents */}
                        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A96E] z-20 pointer-events-none" />
                        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A96E] z-20 pointer-events-none" />

                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover object-[50%_20%] filter brightness-[0.92] contrast-[1.03] group-hover:scale-106 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent pointer-events-none" />

                        {/* Suite Badge */}
                        <div className={`${fonts.mono} absolute top-3 right-3 z-10 bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/50 text-[13px] sm:text-[14px] font-normal uppercase tracking-wider text-[#E5C583] whitespace-nowrap`}>
                          {servicesPageData.suitePrefix}{idx + 1}
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3.5 inset-x-6 z-10 flex justify-center">
                          <span className={`${fonts.mono} text-[12px] sm:text-[13px] font-normal uppercase tracking-wider text-[#C9A96E] bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#333] whitespace-nowrap max-w-[85%] truncate shadow-lg`}>
                            {srv.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 flex flex-col justify-between space-y-4 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      
                      {/* Roman Numeral & Subtitle */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-3xl sm:text-4xl italic text-[#C9A96E] font-light">
                          {roman}.
                        </span>
                        <span className={`${fonts.mono} text-[13px] sm:text-[14px] uppercase tracking-[0.12em] text-[#C9A96E] font-bold bg-[#141414] px-4 py-1.5 rounded-full border border-[#C9A96E]/30 whitespace-nowrap`}>
                          {srv.subtitle}
                        </span>
                      </div>

                      <h3 className={`${fonts.heading} text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight`}>
                        {srv.title}
                      </h3>

                      <p className="text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light border-l-2 border-[#C9A96E] pl-4">
                        &ldquo;{srv.desc}&rdquo;
                      </p>

                      {/* Action Buttons */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${srv.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.12em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap"
                        >
                          <span>{servicesPageData.exploreSuitePrefix}{idx + 1} ✦</span>
                          <span>→</span>
                        </Link>
                        <Link
                          href={`/contact?service=${srv.id}`}
                          className={`${fonts.mono} text-[14px] font-normal uppercase tracking-wider text-[#C9A96E] hover:text-white transition-colors underline underline-offset-4 py-2 px-1 whitespace-nowrap`}
                        >
                          {servicesPageData.directInquiryText}
                        </Link>
                      </div>

                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-[12px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-[12px] border-b border-[#1C1C1C]">
        <div className="my-[12px] py-[12px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Stylist Portrait */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group flex flex-col">
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-auto lg:h-full flex-1 min-h-[340px] lg:min-h-0 rounded-3xl overflow-hidden border border-[#2B2B2B] group-hover:border-[#C9A96E]/80 transition-colors shadow-[0_10px_35px_rgba(0,0,0,0.85)] bg-[#121212]">
              <Image
                src={advantage.image}
                alt={advantage.philosophyLabel}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[50%_15%] filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#C9A96E]/30 text-center shadow-xl">
                <span className="text-[14px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-0.5">
                  {advantage.philosophyLabel}
                </span>
                <p className={`${fonts.heading} text-[14px] sm:text-base font-bold text-white italic`}>
                  &ldquo;{advantage.philosophyQuote}&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Narrative & Metrics */}
          <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="inline-block w-fit self-start bg-[#141414] text-[#E5C583] text-[14px] uppercase tracking-[0.22em] font-semibold px-3.5 py-1 rounded-full border border-[#C9A96E]/30">
              {advantage.badge}
            </div>

            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {advantage.titleStart}
              <em className="italic font-light text-[#E5C583]">
                {advantage.titleHighlight}
              </em>
            </h2>

            <p className="text-lg sm:text-xl italic text-[#DFC18A] leading-relaxed font-light">
              &ldquo;{advantage.quote}&rdquo;
            </p>

            <p className="text-[14px] sm:text-base text-[#B3A99B] leading-relaxed font-light">
              {advantage.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-[#1C1C1C]">
              {advantage.stats.map((st) => (
                <div key={st.label} className="bg-[#121212] px-2.5 sm:px-3 py-3 rounded-xl border border-[#222222] text-center overflow-hidden">
                  <AnimatedCounter value={st.value} />
                  <span className="text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-wide sm:tracking-wider text-[#888] font-medium block mt-1 leading-snug">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={advantage.buttonLink}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.12em] px-6 sm:px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{advantage.buttonText}</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Portrait Archives Reel */}
      <section className="relative w-full py-[12px] border-b border-[#1C1C1C] bg-[#070707] overflow-hidden">
        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-[12px] py-[12px] space-y-4">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
            <div>
              <span className="text-[14px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-1">
                {portraitArchives.badge}
              </span>
              <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                {portraitArchives.titleStart}
                <em className="italic font-light text-[#E5C583]">
                  {portraitArchives.titleHighlight}
                </em>
              </h2>
            </div>
            <p className="text-sm sm:text-base italic text-[#B0A696] max-w-md font-light">
              {portraitArchives.description}
            </p>
          </div>

          {/* Header Tape */}
          <div className={`${fonts.mono} flex items-center justify-between text-[13px] sm:text-[14px] font-normal uppercase tracking-[0.16em] text-[#777] px-2`}>
            <span>{portraitArchives.headerTapeLeft}</span>
            <span>{PORTRAIT_PLATES.length} {portraitArchives.headerTapeCenterSuffix}</span>
            <span>{portraitArchives.headerTapeRight}</span>
          </div>

        </ScrollReveal>

        {/* Marquee Reel */}
        <ScrollReveal variant="fade-up" delay={120} className="w-full overflow-hidden select-none py-3">
          <div
            ref={portraitReelRef}
            onMouseEnter={() => { portraitPausedRef.current = true; }}
            onMouseLeave={() => { portraitPausedRef.current = false; }}
            className="flex overflow-x-hidden gap-2.5 sm:gap-3 px-3"
          >
            {marqueeList.map((plate, index) => (
              <div
                key={`${plate.id}-${index}`}
                onClick={() => setSelectedPlate(plate)}
                className="w-[180px] sm:w-[210px] md:w-[240px] shrink-0 group relative cursor-pointer flex flex-col space-y-2 transition-transform duration-500 hover:scale-[1.03]"
                title={`Click to view ${plate.title}`}
              >
                {/* Portrait Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#141414] border border-[#2B2B2B] group-hover:border-[#C9A96E] transition-all duration-500 shadow-xl">
                  <Image
                    src={plate.image}
                    alt={plate.title}
                    fill
                    sizes="(max-width: 768px) 210px, 240px"
                    className="object-cover object-[50%_18%] filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-106 transition-all duration-700 ease-out"
                  />

                  {/* Plate Number */}
                  <div className={`${fonts.mono} absolute top-2.5 left-2.5 z-10 bg-[#0A0A0A]/90 backdrop-blur-md text-[#C9A96E] text-[13px] sm:text-[14px] font-normal tracking-wider px-2.5 py-0.5 rounded border border-[#C9A96E]/40 shadow-md`}>
                    {plate.plateNumber}
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-[#0A0A0A]/80 border border-[#333] text-[#C9A96E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[13px]">
                    ↗
                  </div>

                  <div className="absolute inset-0 bg-black/25 group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Caption */}
                <div className="px-1 space-y-1">
                  <div className={`${fonts.mono} flex items-center justify-between text-[13px] sm:text-[14px] font-normal uppercase tracking-wider text-[#999]`}>
                    <span>{plate.location}</span>
                    <span>{plate.year}</span>
                  </div>
                  <h4 className={`${fonts.heading} text-[14px] sm:text-[15px] font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-1`}>
                    {plate.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer Tape */}
        <ScrollReveal variant="fade-up" delay={180} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2 pb-1">
          <div className={`${fonts.mono} flex items-center justify-between text-[13px] sm:text-[14px] font-normal uppercase tracking-[0.16em] text-[#777] border-t border-[#1C1C1C] pt-2.5`}>
            <span>{portraitArchives.footerTapeLeft}</span>
            <span>{portraitArchives.footerTapeCenter}</span>
            <span>{portraitArchives.footerTapeRight}</span>
          </div>
        </ScrollReveal>

      </section>

      {/* Lightbox Modal */}
      {selectedPlate && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fade-in select-none"
          onClick={() => setSelectedPlate(null)}
        >
          {/* Main Photo Container */}
          <div
            className="relative max-w-5xl w-full h-[82vh] sm:h-[88vh] rounded-3xl overflow-hidden border border-[#C9A96E]/40 bg-[#0E0E0E] shadow-[0_25px_70px_rgba(0,0,0,0.98)] flex items-center justify-center group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Active Image */}
            <div className="relative w-full h-full">
              <Image
                src={selectedPlate.image}
                alt={selectedPlate.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain sm:object-cover object-[50%_20%]"
              />
            </div>

            {/* Gradient Vignette */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Top Bar */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`${fonts.mono} bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/50 text-[13px] sm:text-[14px] font-normal uppercase tracking-wider text-[#E5C583]`}>
                  ✦ {currentPlateIndex + 1} / {PORTRAIT_PLATES.length}
                </span>
                <span className={`${fonts.mono} text-[13px] sm:text-[14px] font-normal text-white/90 hidden sm:inline-block bg-[#0A0A0A]/70 px-3 py-1 rounded-full border border-white/10`}>
                  {selectedPlate.title}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPlate(null)}
                className="w-10 h-10 rounded-full bg-[#0A0A0A]/90 border border-[#333] text-white hover:text-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-xl text-lg cursor-pointer"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Previous Arrow */}
            <button
              onClick={handlePrevPlate}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A96E]/60 text-[#E5C583] hover:text-[#0A0A0A] hover:bg-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-2xl text-2xl font-bold cursor-pointer hover:scale-110"
              aria-label="Previous artwork"
            >
              ‹
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNextPlate}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A96E]/60 text-[#E5C583] hover:text-[#0A0A0A] hover:bg-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-2xl text-2xl font-bold cursor-pointer hover:scale-110"
              aria-label="Next artwork"
            >
              ›
            </button>

            {/* Bottom Info Bar */}
            <div className={`${fonts.mono} absolute bottom-4 inset-x-4 z-30 flex items-center justify-between pointer-events-none text-[13px] sm:text-[14px] font-normal text-[#999]`}>
              <span className="bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
                {portraitArchives.lightboxNavigateHint}
              </span>
              <span className="bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
                {portraitArchives.lightboxCloseHint}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-[12px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-[12px] text-center">
        <ScrollReveal variant="zoom-in" className="py-4">
          <Link
            href={servicesPageData.bottomCtaLink}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px] uppercase tracking-[0.12em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(201,169,110,0.35)] hover:shadow-[0_6px_35px_rgba(201,169,110,0.6)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap max-w-[calc(100vw-32px)]"
          >
            <span>{servicesPageData.bottomCtaText}</span>
            <span>→</span>
          </Link>
        </ScrollReveal>
      </section>

    </div>
  );
}
