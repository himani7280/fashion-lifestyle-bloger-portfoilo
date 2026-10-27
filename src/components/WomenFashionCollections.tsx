"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";
import { WomenCollection } from "@/data/fashionData";

export default function WomenFashionCollections() {
  const collections = (fashionData as unknown as { womenFashionCollections: WomenCollection[] })
    .womenFashionCollections || [];

  const [activeTab, setActiveTab] = useState(collections[0]?.id || "casual-wear");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const activeCollection = collections.find((c) => c.id === activeTab) || collections[0];

  return (
    <section id="explore-my-style" className="py-[12px] px-4 sm:px-6 md:px-8 bg-[#090909] border-b border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto my-[12px] py-[12px]">
        
        {/* Section Header: Explore My Style */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-2 font-[family-name:var(--font-inter)]">
            ✦ Curated Wardrobe &amp; Aesthetic Lookbooks
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-white mb-3">
            Explore My{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
              Style
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl italic text-[#B0A696] font-light">
            How Tara curates modern feminine style — from relaxed off-duty chic to evening galas, royal Banarasi silks, and global seasonal travel.
          </p>
        </div>

        {/* ── INTERACTIVE EXPANDING ACCORDION (SMOOTH HOVER STRETCH) ── */}
        <div className="mb-14">
          <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[460px] w-full">
            {collections.map((col) => {
              const isHovered = hoveredCard === col.id || (!hoveredCard && activeTab === col.id);
              return (
                <div
                  key={col.id}
                  onMouseEnter={() => {
                    setHoveredCard(col.id);
                    setActiveTab(col.id);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveTab(col.id)}
                  className={`relative overflow-hidden cursor-pointer border border-[#222] transition-all duration-700 ease-out flex flex-col justify-end p-6 ${
                    isHovered
                      ? "lg:flex-[3] border-[#C9A96E] shadow-2xl"
                      : "lg:flex-[1] opacity-75 hover:opacity-100"
                  } min-h-[280px] lg:min-h-0 bg-[#121212] group`}
                >
                  {/* Background Image of Diverse Women in Fashion Outfits */}
                  <Image
                    src={col.heroImage}
                    alt={col.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-top filter brightness-[0.88] group-hover:brightness-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90" />

                  {/* Card Content */}
                  <div className="relative z-10 space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] font-bold font-[family-name:var(--font-inter)] block">
                      {col.tagline}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#C9A96E] transition-colors">
                      {col.name}
                    </h3>
                    
                    {/* Expanded details shown when stretched */}
                    <div
                      className={`space-y-3 transition-all duration-500 overflow-hidden ${
                        isHovered ? "max-h-48 opacity-100 mt-2" : "max-h-0 opacity-0 lg:hidden"
                      }`}
                    >
                      <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#D8CCA8] line-clamp-2">
                        {col.description}
                      </p>
                      <div className="pt-2 flex items-center gap-3">
                        <Link
                          href={col.slug}
                          className="inline-flex items-center gap-2 bg-[#C9A96E] text-[#0A0A0A] px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
                        >
                          <span>Explore Collection</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE COLLECTION LOOKS SHOWCASE (3 STYLISH OUTFIT CARDS) ── */}
        {activeCollection && (
          <div className="bg-[#101010] border border-[#222] p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#222]">
              <div>
                <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold block font-[family-name:var(--font-inter)]">
                  Featured Looks · {activeCollection.name}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeCollection.tagline}
                </h3>
              </div>
              <Link
                href={activeCollection.slug}
                className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-white text-xs uppercase tracking-[0.22em] font-bold border-b border-[#C9A96E] pb-1 self-start sm:self-auto"
              >
                <span>View All {activeCollection.name}</span>
                <span>→</span>
              </Link>
            </div>

            {/* 3 Outfit Cards with Diverse Models in High-Fashion Dresses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeCollection.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141414] border border-[#222] hover:border-[#C9A96E] transition-all duration-500 overflow-hidden group flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top filter brightness-[0.94] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-85" />
                    
                    <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 text-[#C9A96E] text-[9px] uppercase tracking-[0.22em] px-3 py-1 font-semibold border border-[#333]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white group-hover:text-[#C9A96E] transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-[#AAA]">
                      {item.subtitle}
                    </p>
                    <div className="pt-3 border-t border-[#222] flex items-center justify-between">
                      <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#C9A96E] font-[family-name:var(--font-inter)] font-semibold">
                        Exclusive Edition
                      </span>
                      <Link
                        href={activeCollection.slug}
                        className="text-[9.5px] uppercase tracking-[0.2em] text-white hover:text-[#C9A96E] font-bold"
                      >
                        Inquire Look →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
