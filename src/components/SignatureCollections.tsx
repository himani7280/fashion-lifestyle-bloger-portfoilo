"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Sparkles } from "lucide-react";

interface CollectionItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  fabrics: string;
  image: string;
  tag: string;
  aspect: string;
  colSpan: string;
}

const collectionsData: CollectionItem[] = [
  {
    id: "ethnic-elegance",
    number: "N° 01",
    name: "Ethnic Elegance",
    subtitle: "Heirloom Silks & Royal Drapes",
    description:
      "Hand-loomed Banarasi drapes, intricate heritage zardozi embroideries, and sculptured silhouettes honoring regal Indian craftsmanship.",
    fabrics: "Pure Mulberry Silk, Kanjivaram Brocade, Organza",
    image: "/images/ethnic-lehengas.webp",
    tag: "Heritage Craft",
    aspect: "aspect-[4/5]",
    colSpan: "lg:col-span-7",
  },
  {
    id: "modern-muse",
    number: "N° 02",
    name: "Modern Muse",
    subtitle: "Architectural Fluidity & Power Suiting",
    description:
      "Sharp tailored lapels meeting sensual silk slip underlays. Designed for the woman who commands every room with effortless poise.",
    fabrics: "Italian Wool Crepe, Duchess Satin, Liquid Silk",
    image: "/images/model-suit.jpg",
    tag: "Runway Edit",
    aspect: "aspect-[3/4]",
    colSpan: "lg:col-span-5",
  },
  {
    id: "contemporary-classics",
    number: "N° 03",
    name: "Contemporary Classics",
    subtitle: "Sartorial Precision & Clean Tailoring",
    description:
      "Double-breasted statement blazers, fluid high-rise trousers, and crisp structured daytime silhouettes built to outlive trends.",
    fabrics: "Super 120s Wool, French Linen, Structured Crepe",
    image: "/images/model-blazer.jpg",
    tag: "Sartorial",
    aspect: "aspect-[3/4]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "everyday-sophistication",
    number: "N° 04",
    name: "Everyday Sophistication",
    subtitle: "Off-Duty Luxury & Minimalist Ease",
    description:
      "Effortless day dresses, organic cotton poplin shirting, and fluid bias-cut midi skirts tailored for comfortable elegance.",
    fabrics: "Organic Cotton, Washed Silk, Silk-Linen Blends",
    image: "/images/casual-dresses.webp",
    tag: "Daytime Chic",
    aspect: "aspect-[4/5]",
    colSpan: "lg:col-span-4",
  },
  {
    id: "festive-statements",
    number: "N° 05",
    name: "Festive Statements",
    subtitle: "Ceremonial Radiance & Red Carpet Opulence",
    description:
      "Voluminous flared evening gowns, dramatic cascading trains, and subtle champagne metallic threadwork for momentous celebrations.",
    fabrics: "Crimson Silk Satin, Gold Threadwork, Chiffon Flare",
    image: "/images/tara-pillar-chromatics.jpg",
    tag: "High Glamour",
    aspect: "aspect-[4/5]",
    colSpan: "lg:col-span-4",
  },
];

export default function SignatureCollections() {
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);

  return (
    <section id="collections" className="py-24 md:py-36 bg-[#F4EFEB] text-[#141312] border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E8E2D8]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#A38760] font-semibold">
                Couture Portfolio
              </span>
              <span className="w-10 h-[1px] bg-[#C5A880]/60" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-normal text-[#141312]">
              SIGNATURE{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#A38760]">
                COLLECTIONS
              </span>
            </h2>
          </div>
          
          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#59534B] font-light max-w-md">
            Five distinctive visual expressions of feminine strength, artisanal heritage, and contemporary form.
          </p>
        </div>

        {/* ── ASYMMETRIC EDITORIAL COLLECTION TILES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {collectionsData.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className={`${col.colSpan} group cursor-pointer flex flex-col justify-between`}
            >
              {/* Image Frame */}
              <div className={`relative ${col.aspect} w-full overflow-hidden bg-[#E8E2D8] shadow-[0_12px_40px_rgba(20,19,18,0.05)] border border-[#E8E2D8] transition-all duration-700`}>
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/75 via-[#141312]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#FBF9F5]/90 backdrop-blur-md px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-mono font-bold text-[#141312] border border-[#E8E2D8]">
                    {col.number}
                  </span>
                  <span className="bg-[#141312]/80 backdrop-blur-md text-[#EAD8BF] px-2.5 py-1 text-[8.5px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-semibold">
                    {col.tag}
                  </span>
                </div>

                {/* Bottom Overlay Title & Peek */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-2 text-white">
                  <span className="text-[9.5px] tracking-[0.3em] uppercase text-[#EAD8BF] font-[family-name:var(--font-inter)] font-medium block">
                    {col.subtitle}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-normal tracking-[0.02em] leading-tight text-white group-hover:text-[#EAD8BF] transition-colors">
                    {col.name}
                  </h3>
                  <div className="pt-2 flex items-center gap-2 text-[10px] tracking-[0.24em] uppercase text-white/80 group-hover:text-white transition-colors">
                    <span>Explore Look Notes</span>
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Minimal Caption Underneath */}
              <div className="pt-4 flex items-center justify-between text-xs text-[#736B63] font-[family-name:var(--font-inter)]">
                <span className="line-clamp-1 italic font-[family-name:var(--font-cormorant)] text-sm text-[#59534B]">
                  {col.fabrics}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#A38760] font-semibold">
                  Visual Edit
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── REFINED "DISCOVER ALL COLLECTIONS" CTA ── */}
        <div className="mt-20 text-center pt-10 border-t border-[#E8E2D8]">
          <a
            href="#lookbook"
            className="group inline-flex items-center gap-4 border border-[#141312] bg-[#FBF9F5] hover:bg-[#141312] text-[#141312] hover:text-[#FBF9F5] px-10 py-4 text-[11px] tracking-[0.28em] uppercase font-[family-name:var(--font-inter)] font-bold transition-all duration-300 shadow-sm"
          >
            <span>Discover All Collections In Lookbook</span>
            <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* ── LIGHTBOX / CURATED LOOK MODAL ── */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="relative bg-[#FBF9F5] border border-[#C5A880]/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative md:w-1/2 min-h-[340px] md:min-h-[520px] bg-[#E8E2D8]">
              <Image
                src={selectedCollection.image}
                alt={selectedCollection.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            {/* Modal Info */}
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono font-bold text-[#A38760]">
                    {selectedCollection.number} · {selectedCollection.tag}
                  </span>
                  <button
                    onClick={() => setSelectedCollection(null)}
                    className="p-1 text-[#141312] hover:text-[#A38760] transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#141312]">
                  {selectedCollection.name}
                </h3>
                
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#A38760]">
                  {selectedCollection.subtitle}
                </p>

                <p className="font-[family-name:var(--font-inter)] text-sm text-[#59534B] leading-relaxed">
                  {selectedCollection.description}
                </p>

                <div className="pt-4 border-t border-[#E8E2D8] space-y-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#8C8479] font-semibold block">
                    Curated Materials &amp; Weaves
                  </span>
                  <p className="text-xs font-[family-name:var(--font-inter)] text-[#141312]">
                    {selectedCollection.fabrics}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D8] flex items-center gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedCollection(null)}
                  className="w-full text-center bg-[#141312] hover:bg-[#A38760] text-[#FBF9F5] py-3 text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                >
                  Inquire Bespoke Piece
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
