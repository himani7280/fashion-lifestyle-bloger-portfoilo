"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { homeHero, HeroSlide, fonts, getObjectPosClass } from "@/data/fashionData";

const HERO_SLIDES: HeroSlide[] = homeHero.slides;

export default function PersonalHero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Auto-advance carousel every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = HERO_SLIDES[currentIdx];

  return (
    <section className="relative w-full">
      {/* Hero Container */}
      <div className="relative w-full overflow-hidden bg-black shadow-2xl h-[380px] sm:h-[440px] md:h-[490px] flex items-end">
        
        {/* Carousel Slides */}
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = currentIdx === idx;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 z-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover ${getObjectPosClass(slide.objectPosition)} w-full h-full transition-transform duration-7000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Bottom Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 md:h-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none z-20" />

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIdx(i)}
              aria-label={`Switch to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIdx === i
                  ? "w-8 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] shadow-[0_0_12px_rgba(201,169,110,0.8)]"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Slide Title */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-16 pb-6 sm:pb-10 md:pb-12 flex items-end justify-start pointer-events-none">
          <h1
            key={currentIdx}
            className={`${fonts.heading} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.96] text-left select-none pointer-events-auto bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] animate-fade-in transition-all duration-700`}
          >
            {activeSlide.line1}<br />
            {activeSlide.line2}
          </h1>
        </div>

      </div>
    </section>
  );
}
