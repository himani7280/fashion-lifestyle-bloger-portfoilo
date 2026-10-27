"use client";

import React, { useState, useEffect } from "react";
import fashionData from "@/data/fashionData.json";

export default function BrandPartnersTicker() {
  const brands = [
    ...fashionData.brandPartners,
    {
      name: "GUCCI",
      category: "High Fashion Campaigns",
      location: "Florence",
      quote: "Commanding screen presence and unmistakable contemporary edge.",
    },
    {
      name: "PRADA",
      category: "Architectural Runway",
      location: "Milan",
      quote: "Sculptural precision and effortless modern sophistication.",
    },
    {
      name: "BVLGARI",
      category: "High Jewellery",
      location: "Rome",
      quote: "The embodiment of radiant Mediterranean luxury and regal grace.",
    },
    {
      name: "YSL",
      category: "Paris Fashion Week",
      location: "Paris",
      quote: "Magnetic intensity and breathtaking tailoring silhouette.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [brands.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % brands.length);
  };

  return (
    <section className="py-16 md:py-20 bg-[#080808] border-b border-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-1 font-[family-name:var(--font-inter)]">
            ✦ Runway &amp; Editorial Collaborations
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
            Trusted by the World&apos;s Premier Maisons
          </h3>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-[#121212] border border-[#2B2B2B] hover:border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0A0A] flex items-center justify-center transition-all shadow-md focus:outline-none"
            aria-label="Previous brand"
          >
            ‹
          </button>
          <span className="text-xs text-[#888] font-mono px-2">
            {String(activeIndex + 1).padStart(2, "0")} / {String(brands.length).padStart(2, "0")}
          </span>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#121212] border border-[#2B2B2B] hover:border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0A0A] flex items-center justify-center transition-all shadow-md focus:outline-none"
            aria-label="Next brand"
          >
            ›
          </button>
        </div>
      </div>

      {/* ── LUXURY BRAND CAROUSEL / GRID DISPLAY ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Spotlight Featured Slide */}
        <div className="bg-[#0E0E0E] border border-[#222] hover:border-[#C9A96E]/60 p-8 sm:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-500 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold font-[family-name:var(--font-inter)] block">
              {brands[activeIndex].location} · {brands[activeIndex].category}
            </span>
            <h4 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-widest group-hover:text-[#E5C583] transition-colors">
              {brands[activeIndex].name}
            </h4>
          </div>

          <blockquote className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#D8CCA8] font-light max-w-xl text-center md:text-right z-10 leading-relaxed">
            &ldquo;{brands[activeIndex].quote}&rdquo;
          </blockquote>
        </div>

        {/* Brand Selector Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map((b, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 text-[10.5px] uppercase tracking-[0.2em] font-[family-name:var(--font-inter)] transition-all duration-300 border ${
                activeIndex === i
                  ? "bg-gradient-to-r from-[#C9A96E] to-[#E5C583] text-[#0A0A0A] font-bold border-[#C9A96E] shadow-[0_0_15px_rgba(201,169,110,0.35)] scale-105"
                  : "bg-[#0E0E0E] border-[#1F1F1F] text-[#888] hover:text-white hover:border-[#C9A96E]/50"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
