"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WomenCollection } from "@/data/fashionData";

interface CategoryCollectionPageProps {
  collection: WomenCollection;
}

export default function CategoryCollectionPage({ collection }: CategoryCollectionPageProps) {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      
      {/* ── BREADCRUMB HERO BANNER (SINGLE TITLE ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={collection.heroImage}
              alt={collection.name}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top filter brightness-[0.50] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium bg-[#0A0A0A]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span>Women&apos;s Collections</span>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{collection.name}</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {collection.name}
            </h1>
          </div>
        </div>
      </section>

      {/* ── 3 EDITORIAL OUTFIT CARDS (DIVERSE STYLISH MODELS) ── */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-10 border-b border-[#1A1A1A]">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-1 font-[family-name:var(--font-inter)]">
            ✦ Signature Outfits &amp; Ensembles
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
            Explore the {collection.name} Silhouette
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#E5C583] font-light">
            &ldquo;{collection.tagline}&rdquo;
          </p>
          <p className="text-xs text-[#A69C8E] max-w-xl mx-auto leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collection.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#111] border border-[#222] hover:border-[#C9A96E] transition-all duration-500 overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#181818]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top filter brightness-[0.95] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-85" />
                
                <span className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#C9A96E] text-[9.5px] uppercase tracking-[0.22em] px-3 py-1 font-semibold border border-[#333]">
                  0{idx + 1} ✦ {item.tag}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] font-[family-name:var(--font-inter)] font-bold block">
                  Couture Edit
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white group-hover:text-[#C9A96E] transition-colors">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#D8CCA8]">
                  {item.subtitle}
                </p>

                <div className="pt-4 border-t border-[#222] flex items-center justify-between">
                  <span className="text-[10px] text-[#777] font-[family-name:var(--font-inter)]">
                    Women&apos;s Fashion
                  </span>
                  <Link
                    href={`/contact?collection=${collection.id}&look=${item.id}`}
                    className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#C9A96E] hover:text-white transition-colors"
                  >
                    <span>Inquire Look</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STYLING CONSULTATION BANNER ── */}
      <section className="py-16 bg-[#0E0E0E] border-b border-[#1A1A1A] text-center px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block font-[family-name:var(--font-inter)]">
            ✦ Personal Styling &amp; Fitting
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white">
            Looking for Custom Tailoring or Private Viewing?
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#AAA]">
            Schedule a private consultation with our styling team and explore customized fits for your upcoming occasions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Connect with Stylist ✦</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
