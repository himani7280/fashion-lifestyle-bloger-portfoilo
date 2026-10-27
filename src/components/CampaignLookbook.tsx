"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface LookbookPhoto {
  id: string;
  title: string;
  campaign: string;
  category: string;
  location: string;
  image: string;
  details: string;
  aspect: string;
}

const lookbookPhotos: LookbookPhoto[] = [
  {
    id: "look-1",
    title: "The Balcony Reverie",
    campaign: "Autumn Paris Couture",
    category: "Full-Length Gown",
    location: "Paris, France",
    image: "/images/model-hero.jpg",
    details: "Floor-sweeping black ruffled evening dress with architectural shoulder drapes against historic stonework.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "look-2",
    title: "Sculpted Sartorial Lines",
    campaign: "Modern Executive",
    category: "Power Blazer",
    location: "Milan, Italy",
    image: "/images/model-blazer.jpg",
    details: "Structured pure white double-breasted tailoring paired with minimalist fine gold accents.",
    aspect: "aspect-[4/5]",
  },
  {
    id: "look-3",
    title: "Liquid Sunset Backlight",
    campaign: "Editorial Digitals",
    category: "Silk Slip Dress",
    location: "New Delhi, India",
    image: "/images/model-contact.jpg",
    details: "Sensual low-back slip silhouette catching late afternoon golden hour illumination.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "look-4",
    title: "Off-Duty Cashmere Ease",
    campaign: "Daytime Atelier",
    category: "Chunky Knit",
    location: "Milan, Italy",
    image: "/images/model-blazer.jpg",
    details: "Relaxed cream knitwear off the shoulder celebrating tactile warmth and radiant skin.",
    aspect: "aspect-[4/5]",
  },
  {
    id: "look-5",
    title: "The Grand Crimson Staircase",
    campaign: "Royale Couture",
    category: "Ball Gown",
    location: "Versailles, France",
    image: "/images/tara-pillar-chromatics.jpg",
    details: "Cascading scarlet silk-satin gown with sweeping pleated volume across neoclassical marble stairs.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "look-6",
    title: "Behind The Atelier Lights",
    campaign: "Studio Production",
    category: "Backstage High Fashion",
    location: "New York, USA",
    image: "/images/model-studio.jpg",
    details: "Intimate frame capturing the choreography of studio lighting and haute couture lace detailing.",
    aspect: "aspect-[16/10]",
  },
  {
    id: "look-7",
    title: "Palace Steps Tuxedo",
    campaign: "Modern Muse",
    category: "Tailored Power Suit",
    location: "Udaipur, India",
    image: "/images/model-suit.jpg",
    details: "Relaxed open black tailored tuxedo suit celebrating gender-fluid elegance on ancient sandstone.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "look-8",
    title: "White Rose Romance",
    campaign: "Fragrance & Flora",
    category: "Beauty Close-Up",
    location: "Grasse, France",
    image: "/images/model-roses.jpg",
    details: "Lush botanical close-up celebrating fresh garden roses, dewy skin, and effortless feminine aura.",
    aspect: "aspect-[4/5]",
  },
];

export default function CampaignLookbook() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! > 0 ? prev! - 1 : lookbookPhotos.length - 1));
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! < lookbookPhotos.length - 1 ? prev! + 1 : 0));
  }, [activeIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handlePrev, handleNext]);

  return (
    <section id="lookbook" className="py-24 md:py-36 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E2D8]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#A38760] font-semibold">
                Visual Campaign · 2026
              </span>
              <span className="w-10 h-[1px] bg-[#C5A880]/60" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-normal text-[#141312]">
              THE EDITORIAL{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#A38760]">
                LOOKBOOK
              </span>
            </h2>
          </div>
          
          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#59534B] font-light max-w-md">
            Click any image to view high-resolution editorial details in full-screen frame.
          </p>
        </div>

        {/* ── ASYMMETRIC MAGAZINE MASONRY GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {lookbookPhotos.map((photo, idx) => {
            // Apply subtle visual rhythm with staggered heights
            const isWide = idx === 5;
            return (
              <div
                key={photo.id}
                onClick={() => setActiveIndex(idx)}
                className={`group cursor-pointer relative overflow-hidden bg-[#E8E2D8] border border-[#E8E2D8] shadow-[0_8px_30px_rgba(20,19,18,0.04)] ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image */}
                <div className={`relative ${isWide ? "aspect-[16/9]" : photo.aspect} w-full overflow-hidden`}>
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-[#141312]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Overlay Details */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-[0.25em] uppercase font-mono bg-white/20 backdrop-blur-md px-2.5 py-1 text-white border border-white/20">
                        {String(idx + 1).padStart(2, "0")} / {lookbookPhotos.length}
                      </span>
                      <Maximize2 size={16} className="text-white/80" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-[#EAD8BF] font-semibold block">
                        {photo.category} · {photo.location}
                      </span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold leading-tight">
                        {photo.title}
                      </h3>
                      <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-white/80 line-clamp-2">
                        {photo.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtitle Caption Underneath */}
                <div className="p-3 bg-[#FBF9F5] border-t border-[#E8E2D8] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] text-[#736B63]">
                  <span className="font-semibold text-[#141312] truncate max-w-[70%]">{photo.title}</span>
                  <span className="text-[#A38760]">{photo.campaign.split(" ")[0]}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ── KEYBOARD-ACCESSIBLE FULL-SCREEN LIGHTBOX ── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 z-20 text-white/80 hover:text-white p-2 border border-white/20 rounded-full transition-colors bg-[#141312]/50"
            aria-label="Close Lightbox (Esc)"
          >
            <X size={22} />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-3 border border-white/20 rounded-full transition-colors bg-[#141312]/50"
            aria-label="Previous Look (Left Arrow)"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white p-3 border border-white/20 rounded-full transition-colors bg-[#141312]/50"
            aria-label="Next Look (Right Arrow)"
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Main Card */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#1A1918] border border-[#C5A880]/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Viewport */}
            <div className="relative flex-1 min-h-[380px] md:min-h-[600px] bg-[#0E0E0D]">
              <Image
                src={lookbookPhotos[activeIndex].image}
                alt={lookbookPhotos[activeIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain"
              />
            </div>

            {/* Sidebar Editorial Information */}
            <div className="p-8 md:p-10 md:w-88 flex flex-col justify-between bg-[#141312] text-white border-t md:border-t-0 md:border-l border-[#2B2824]">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#C5A880] pb-3 border-b border-[#2B2824]">
                  <span>{lookbookPhotos[activeIndex].campaign}</span>
                  <span>{String(activeIndex + 1).padStart(2, "0")} / {lookbookPhotos.length}</span>
                </div>

                <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAD8BF] block font-[family-name:var(--font-inter)] font-semibold">
                  {lookbookPhotos[activeIndex].category}
                </span>

                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold leading-tight">
                  {lookbookPhotos[activeIndex].title}
                </h3>

                <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#C9BFB2] leading-relaxed">
                  {lookbookPhotos[activeIndex].details}
                </p>

                <div className="pt-4 border-t border-[#2B2824] space-y-1 text-xs text-[#8C8479] font-[family-name:var(--font-inter)]">
                  <div>Location: <span className="text-white">{lookbookPhotos[activeIndex].location}</span></div>
                  <div>Creative Direction: <span className="text-white">Tara Verma Atelier</span></div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#2B2824]">
                <a
                  href="#contact"
                  onClick={() => setActiveIndex(null)}
                  className="block w-full text-center bg-[#C5A880] text-[#141312] hover:bg-white py-3 text-xs tracking-[0.24em] uppercase font-bold transition-colors"
                >
                  Request Look Availability ✦
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
