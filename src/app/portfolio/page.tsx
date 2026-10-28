"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, PortfolioItem } from "@/data/fashionData";

function PortfolioContent() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const portfolio = portfolioItems;

  const currentIndex = selectedItem
    ? portfolio.findIndex((p) => p.id === selectedItem.id)
    : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const prevIdx = (currentIndex - 1 + portfolio.length) % portfolio.length;
      setSelectedItem(portfolio[prevIdx]);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > -1) {
      const nextIdx = (currentIndex + 1) % portfolio.length;
      setSelectedItem(portfolio[nextIdx]);
    }
  };

  // Keyboard navigation: Escape to close, ArrowLeft for prev, ArrowRight for next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > -1) {
          const prevIdx = (currentIndex - 1 + portfolio.length) % portfolio.length;
          setSelectedItem(portfolio[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex > -1) {
          const nextIdx = (currentIndex + 1) % portfolio.length;
          setSelectedItem(portfolio[nextIdx]);
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
  }, [selectedItem, currentIndex, portfolio]);

  const getCardLayout = (index: number) => {
    const pattern12 = [
      { colSpan: "md:col-span-2", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-2", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-2", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
      { colSpan: "md:col-span-1", height: "h-[240px] sm:h-[280px] md:h-[320px]" },
    ];
    return pattern12[index % 12];
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BREADCRUMB & HEADER BANNER (FULL WIDTH & PROMINENT) ── */}
      <section className="relative w-full py-2 sm:py-3 border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/tara-pillar-global.jpg"
              alt="Tara Verma Fashion & Lifestyle Gallery"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Gallery</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Fashion &amp; Lifestyle{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                Gallery
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: ROW-BALANCED BENTO GALLERY (CHOTA-BDA IMAGE · BOTTOM SE 100% ALIGNED · NO FILTER) ── */}
      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8">
        
        {/* Structured row-aligned Bento Grid — every row is 3 columns, bottom is 100% flush aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {portfolio.map((item, idx) => {
            const layout = getCardLayout(idx);
              return (
                <article
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`${layout.colSpan} ${layout.height} group relative cursor-pointer rounded-2xl overflow-hidden bg-[#121212] border border-[#1E1E1E] hover:border-[#C9A96E] transition-all duration-500 shadow-xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex flex-col`}
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#161616]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes={layout.colSpan.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      style={{ objectPosition: item.objectPosition || "50% 20%" }}
                      className="object-cover filter brightness-[0.92] contrast-[1.03] group-hover:brightness-105 group-hover:scale-106 transition-all duration-700 ease-out"
                    />
                    
                    {/* Subtle vignette gradient at bottom - appears on hover only */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                    {/* Elegant Expand Indicator on Hover */}
                    <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-[#0A0A0A]/80 border border-[#333] text-[#C9A96E] flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </div>

                    {/* ONLY ONE TITLE ON THE IMAGE - APPEARS ON HOVER ONLY */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-snug drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        {/* Gallery Bottom Alignment Hairline & Archive Tape */}
        <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-[13px] sm:text-[14px] uppercase tracking-[0.18em] text-[#888] font-mono">
          <span>✦ TARA VERMA SARTORIAL ARCHIVE</span>
          <span>CURATED PORTFOLIO · 2026</span>
          <span className="hidden sm:inline-block">CLICK ANY FRAME TO EXPAND</span>
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
                  ✦ {currentIndex + 1} / {portfolio.length}
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

    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#F5F0E8]">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[14px] uppercase tracking-[0.2em] text-[#C9A96E]">
              Loading Portfolio Gallery...
            </p>
          </div>
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
