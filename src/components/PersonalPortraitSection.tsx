"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PortraitItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  quote: string;
}

const PORTRAITS: PortraitItem[] = [
  {
    id: "noir-tuxedo",
    title: "The Noir Tuxedo Edit",
    subtitle: "Architectural Tailoring & Pure Poise",
    category: "Haute Couture Studio",
    year: "2026",
    image: "/images/model-blazer.jpg",
    quote: "Power dressing redefined through sharp masculine lines softened with feminine grace.",
  },
  {
    id: "crimson-gala",
    title: "Crimson Velvet Drama",
    subtitle: "Draped Couture for Evening Galas",
    category: "Runway & Gala",
    year: "2026",
    image: "/images/tara-pillar-chromatics.jpg",
    quote: "Unapologetic scarlet drama celebrating rich textures and timeless silhouette architecture.",
  },
  {
    id: "damask-rose",
    title: "Damask Rose & Velvet",
    subtitle: "High Beauty & Editorial Fragrance",
    category: "Editorial Cover",
    year: "2025",
    image: "/images/model-roses.jpg",
    quote: "Capturing ethereal radiance, subtle mystery, and delicate floral storytelling.",
  },
  {
    id: "classic-monochrome",
    title: "Classic Monochrome",
    subtitle: "Minimalist Studio Silhouette",
    category: "Paris Atelier",
    year: "2025",
    image: "/images/model-suit.jpg",
    quote: "Subtlety is the ultimate sophistication in contemporary high-fashion portraiture.",
  },
  {
    id: "golden-hour",
    title: "Golden Hour Lifestyle Muse",
    subtitle: "European Travel & Sunkissed Living",
    category: "Lifestyle Journal",
    year: "2026",
    image: "/images/model-contact.jpg",
    quote: "Natural light, authentic emotion, and effortless cosmopolitan living.",
  },
  {
    id: "studio-mastery",
    title: "Studio Fine Portraiture",
    subtitle: "Editorial Lighting & Intimate Grace",
    category: "Fine Art Portrait",
    year: "2025",
    image: "/images/model-studio.jpg",
    quote: "Where the camera meets stillness, presence, and expressive sartorial dialogue.",
  },
];

export default function PersonalPortraitSection() {
  const [activePortrait, setActivePortrait] = useState<PortraitItem | null>(null);

  return (
    <section id="personal-portraits" className="w-full py-[12px] px-4 sm:px-6 md:px-8 bg-[#080808] border-b border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto my-[12px] py-[12px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#1A1A1A]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-2 font-[family-name:var(--font-inter)]">
              ✦ Fine Art Photography &amp; Editorial Moods
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-white">
              Personal Portrait{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Exhibition
              </em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl italic text-[#B0A696] max-w-md font-light leading-relaxed">
            A curated gallery exhibition capturing Tara Verma through the lenses of international fashion photographers.
          </p>
        </div>

        {/* ── PORTRAIT GALLERY GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTRAITS.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => setActivePortrait(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#222] hover:border-[#C9A96E] bg-[#121212] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161616]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectPosition: "50% 20%" }}
                  className="object-cover filter brightness-[0.92] contrast-[1.04] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#0A0A0A]/90 backdrop-blur-md text-[#E5C583] text-[9.5px] uppercase tracking-[0.2em] px-3 py-1 font-bold rounded-full border border-[#C9A96E]/40 shadow-md">
                    Plate 0{idx + 1}
                  </span>
                </div>

                {/* Expand Trigger Button */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#0A0A0A]/80 border border-[#333] text-[#C9A96E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  ↗
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1.5 z-10">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium font-[family-name:var(--font-inter)]">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-[#D8CCA8] line-clamp-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ── INTERACTIVE LIGHTBOX MODAL ── */}
      {activePortrait && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActivePortrait(null)}
        >
          <div
            className="relative bg-[#121212] rounded-3xl border border-[#C9A96E]/40 shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePortrait(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0A0A0A]/90 border border-[#333] text-white hover:text-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-colors shadow-md text-base"
              aria-label="Close Portrait Lightbox"
            >
              ✕
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 relative min-h-[380px] md:min-h-[520px] bg-[#161616]">
              <Image
                src={activePortrait.image}
                alt={activePortrait.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectPosition: "50% 20%" }}
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-[#C9A96E] text-[#0A0A0A] text-[9.5px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full">
                    {activePortrait.category}
                  </span>
                  <span className="bg-[#1C1C1C] text-[#A69C8E] text-[9.5px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-full border border-[#2B2B2B]">
                    {activePortrait.year}
                  </span>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
                    {activePortrait.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] font-medium mt-1 font-[family-name:var(--font-inter)]">
                    {activePortrait.subtitle}
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-[#171717] border border-[#2B2B2B]">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#E5C583] block">
                    Editorial Philosophy
                  </span>
                  <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#EAE2D5] leading-relaxed font-light">
                    &ldquo;{activePortrait.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-[#777]">
                <span>Tara Verma Portraiture</span>
                <button
                  onClick={() => setActivePortrait(null)}
                  className="text-xs uppercase tracking-wider text-[#C9A96E] hover:underline"
                >
                  Close Viewer ✕
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
