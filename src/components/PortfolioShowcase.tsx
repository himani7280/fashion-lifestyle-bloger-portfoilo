"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";
import { PortfolioItem } from "@/data/fashionData";

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = fashionData.portfolioCategories;
  const portfolio = fashionData.portfolio as PortfolioItem[];

  const filteredItems = portfolio.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-[12px] px-4 sm:px-6 md:px-8 bg-[#0A0A0A] border-b border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto my-[12px] py-[12px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-2 font-[family-name:var(--font-inter)]">
              ✦ Selected Works &amp; Runway Archives
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-white">
              Tara&apos;s Runway &amp;{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Editorial Portfolio
              </em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl italic text-[#B0A696] max-w-md font-light">
            Haute couture, international magazine covers, fine jewellery and bespoke brand campaigns starring Tara Verma.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-[#1A1A1A]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10.5px] uppercase tracking-[0.2em] font-[family-name:var(--font-inter)] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#C9A96E] text-[#0A0A0A] font-bold shadow-[0_0_15px_rgba(201,169,110,0.3)]"
                  : "bg-[#121212] border border-[#222] text-[#888] hover:text-white hover:border-[#C9A96E]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── ASYMMETRIC EDITORIAL BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.slice(0, 6).map((item, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative cursor-pointer border border-[#222] bg-[#111] overflow-hidden hover:border-[#C9A96E] transition-all duration-500 shadow-xl ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Frame */}
                <div
                  className={`relative ${
                    isWide ? "aspect-[16/9] sm:aspect-[16/10]" : "aspect-[3/4]"
                  } overflow-hidden bg-[#161616]`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={isWide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                    style={{ objectPosition: item.objectPosition || "50% 20%" }}
                    className="object-cover filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Vignette overlay - on hover only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A0A0A]/90 text-[#E5C583] text-[9.5px] uppercase tracking-[0.25em] px-3 py-1 font-bold border border-[#333] shadow-md">
                      ✦ {item.tag}
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-2">
                    <div className="flex items-center justify-between text-[9.5px] uppercase tracking-[0.22em] text-[#C9A96E] font-[family-name:var(--font-inter)] font-semibold">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic text-[#D8CCA8] line-clamp-2">
                      {item.description}
                    </p>
                    <div className="pt-2 text-[10px] uppercase tracking-[0.2em] text-[#888] font-[family-name:var(--font-inter)] group-hover:text-white flex items-center gap-1.5 transition-colors">
                      <span>Click to view details</span>
                      <span className="text-[#C9A96E]">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Portfolio Link */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A96E] to-[#DFC18A] hover:from-white hover:to-[#C9A96E] text-[#0A0A0A] px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-[0_0_20px_rgba(201,169,110,0.3)]"
          >
            <span>Explore All 24+ Editorial Archives</span>
            <span>✦</span>
          </Link>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#121212] border border-[#333] max-w-5xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#333] text-white hover:text-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all text-xl"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Image Frame */}
            <div className="relative aspect-[3/4] md:w-1/2 bg-[#0A0A0A] min-h-[380px] md:min-h-[550px]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectPosition: selectedItem.objectPosition || "50% 20%" }}
                className="object-cover"
              />
            </div>

            {/* Modal Details Panel */}
            <div className="p-8 md:p-10 md:w-1/2 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold font-[family-name:var(--font-inter)] block">
                  {selectedItem.category} · {selectedItem.year}
                </span>

                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedItem.title}
                </h3>

                <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#D8CCA8] font-light leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Editorial Credits */}
                <div className="space-y-2 border-t border-[#222] pt-4 font-[family-name:var(--font-inter)] text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1A1A1A]">
                    <span className="text-[#777] uppercase tracking-wider">Model</span>
                    <span className="text-white font-semibold">Tara Verma</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1A1A1A]">
                    <span className="text-[#777] uppercase tracking-wider">Photographer</span>
                    <span className="text-white">{selectedItem.photographer}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1A1A1A]">
                    <span className="text-[#777] uppercase tracking-wider">Designer / Maison</span>
                    <span className="text-white">{selectedItem.designer}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#777] uppercase tracking-wider">Location</span>
                    <span className="text-white">{selectedItem.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Link
                  href={`/contact?inquiry=${selectedItem.id}`}
                  className="bg-[#C9A96E] hover:bg-white text-[#0A0A0A] px-6 py-2.5 text-[10.5px] uppercase tracking-[0.2em] font-bold transition-colors"
                >
                  Inquire for Lookbook ✦
                </Link>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-xs text-[#888] hover:text-white uppercase tracking-wider"
                >
                  Close View
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
