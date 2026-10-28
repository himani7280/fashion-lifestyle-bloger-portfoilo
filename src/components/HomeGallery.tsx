"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, PortfolioItem } from "@/data/fashionData";

export default function HomeGallery() {
  const portfolio = portfolioItems;
  // Exactly 2 rows of varied "chota-bda" Bento images:
  // Row 1: Item 0 (col-span-2 bda) + Item 1 (col-span-1 chota) = 3 cols
  // Row 2: Item 2 (col-span-1 chota) + Item 3 (col-span-2 bda) = 3 cols
  const galleryItems = portfolio.slice(0, 4);

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const currentIndex = selectedItem
    ? galleryItems.findIndex((p) => p.id === selectedItem.id)
    : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const prevIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      setSelectedItem(galleryItems[prevIdx]);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const nextIdx = (currentIndex + 1) % galleryItems.length;
      setSelectedItem(galleryItems[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > -1) {
          const prevIdx = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
          setSelectedItem(galleryItems[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex > -1) {
          const nextIdx = (currentIndex + 1) % galleryItems.length;
          setSelectedItem(galleryItems[nextIdx]);
        }
      }
    };
    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem, currentIndex, galleryItems]);

  const getHomeCardSpan = (idx: number) => {
    // Row 1: Bda (col-span-2) + Chota (col-span-1)
    // Row 2: Chota (col-span-1) + Bda (col-span-2)
    return idx % 2 === 0
      ? idx === 0
        ? "md:col-span-2"
        : "md:col-span-1"
      : idx === 1
      ? "md:col-span-1"
      : "md:col-span-2";
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-t border-[#1C1C1C] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="border-b border-[#1C1C1C] pb-2.5">
          <span className="text-[14px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-1 font-[family-name:var(--font-inter)]">
            ✦ SARTORIAL ARCHIVE · 2026
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            Curated Style{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
              Gallery
            </em>
          </h2>
        </div>

        {/* ── 2 ROWS BENTO GALLERY GRID (COMPACT CHOTA-BDA IMAGE LAYOUT) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {galleryItems.map((item, idx) => {
            const spanClass = getHomeCardSpan(idx);
            return (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`${spanClass} h-[240px] sm:h-[280px] md:h-[320px] group relative cursor-pointer rounded-2xl overflow-hidden bg-[#121212] border border-[#1E1E1E] hover:border-[#C9A96E] transition-all duration-500 shadow-xl hover:shadow-[0_12px_35px_rgba(0,0,0,0.85)] flex flex-col`}
              >
                <div className="relative w-full h-full overflow-hidden bg-[#161616]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={spanClass.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    style={{ objectPosition: item.objectPosition || "50% 20%" }}
                    className="object-cover filter brightness-[0.92] contrast-[1.03] group-hover:brightness-105 group-hover:scale-106 transition-all duration-700 ease-out"
                  />
                  
                  {/* Vignette - appears on hover only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Expand Indicator */}
                  <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-[#0A0A0A]/80 border border-[#333] text-[#C9A96E] flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </div>

                  {/* Number tag top-left */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#0A0A0A]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#333] text-[9px] font-mono text-[#E5C583]">
                    0{idx + 1}
                  </div>

                  {/* Single Title on Image - Appears on Hover Only */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Gallery Action */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1C1C1C]">
          <span className="text-[14px] uppercase tracking-[0.2em] text-[#888] font-mono hidden sm:inline-block">
            ✦ SARTORIAL ARCHIVE
          </span>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[14px] uppercase tracking-[0.16em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.55)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>View All Archives ✦</span>
            <span>→</span>
          </Link>
          <span className="text-[14px] uppercase tracking-[0.2em] text-[#888] font-mono hidden sm:inline-block">
            2026 EDITION
          </span>
        </div>

      </div>

      {/* ── 03: FULL-SCREEN DARKROOM IMAGE-ONLY CAROUSEL LIGHTBOX ── */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fade-in select-none"
          onClick={() => setSelectedItem(null)}
        >
          {/* Main Photo Container (Pure Image Showcase) */}
          <div
            className="relative max-w-5xl w-full h-[82vh] sm:h-[88vh] rounded-3xl overflow-hidden border border-[#C9A96E]/40 bg-[#0E0E0E] shadow-[0_25px_70px_rgba(0,0,0,0.98)] flex items-center justify-center group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The Image (No text pane, full high-fashion visual focus) */}
            <div className="relative w-full h-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                style={{ objectPosition: selectedItem.objectPosition || "50% 20%" }}
                className="object-cover"
              />
            </div>

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Top Bar: Counter & Title on left, Close on right */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/50 text-[10px] uppercase font-mono tracking-widest text-[#E5C583]">
                  ✦ {currentIndex + 1} / {galleryItems.length}
                </span>
                <span className="text-xs font-mono text-white/90 hidden sm:inline-block bg-[#0A0A0A]/70 px-3 py-1 rounded-full border border-white/10">
                  {selectedItem.title}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 rounded-full bg-[#0A0A0A]/90 border border-[#333] text-white hover:text-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-xl text-lg cursor-pointer"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Left Carousel Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A96E]/60 text-[#E5C583] hover:text-[#0A0A0A] hover:bg-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-2xl text-2xl font-bold cursor-pointer hover:scale-110"
              aria-label="Previous artwork"
            >
              ‹
            </button>

            {/* Right Carousel Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A96E]/60 text-[#E5C583] hover:text-[#0A0A0A] hover:bg-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-2xl text-2xl font-bold cursor-pointer hover:scale-110"
              aria-label="Next artwork"
            >
              ›
            </button>

            {/* Bottom Floating Minimal Bar */}
            <div className="absolute bottom-4 inset-x-4 z-30 flex items-center justify-between pointer-events-none text-[10px] font-mono text-[#888]">
              <span className="bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
                Use ← / → keys to navigate
              </span>
              {selectedItem.variants && selectedItem.variants.length > 0 && (
                <div className="hidden sm:flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 pointer-events-auto">
                  <span className="text-[#C9A96E]">Palette:</span>
                  <div className="flex items-center gap-1.5">
                    {selectedItem.variants.map((v, i) => (
                      <span
                        key={i}
                        title={v.name}
                        className="w-3 h-3 rounded-full border border-white/30"
                        style={{ backgroundColor: v.color || "#C9A96E" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <span className="bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
                ESC to close
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
