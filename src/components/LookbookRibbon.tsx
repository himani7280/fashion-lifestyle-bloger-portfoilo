"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";

export default function LookbookRibbon() {
  const brand = fashionData.personalBrand;
  const images = [
    { src: "/images/model-hero.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · Paris Haute Couture` },
    { src: "/images/tara-pillar-chromatics.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · Milan Editorial` },
    { src: "/images/model-contact.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · Golden Hour Portrait` },
    { src: "/images/model-blazer.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · London Fashion Week` },
    { src: "/images/model-suit.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · Power Suit Edit` },
    { src: "/images/model-roses.jpg", tag: `@${brand.name.toLowerCase().replace(/\s+/g, "")} · Grasse Perfume Muse` },
  ];

  return (
    <section className="bg-[#0A0A0A] border-b border-[#1C1C1C] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold block font-[family-name:var(--font-inter)]">
            ✦ Social &amp; Runway Highlights
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
            Follow {brand.name}&apos;s Fashion Journey
          </h3>
        </div>
        <a
          href={fashionData.contact.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#121212] border border-[#2B2B2B] hover:border-[#C9A96E] text-[10px] uppercase tracking-[0.22em] text-[#C9A96E] hover:text-white px-5 py-2.5 transition-all"
        >
          <span>Follow on Instagram</span>
          <span>↗</span>
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 px-2 max-w-[1600px] mx-auto">
        {images.map((item, idx) => (
          <div key={idx} className="relative aspect-[3/4] overflow-hidden group bg-[#111] border border-[#1A1A1A]">
            <Image
              src={item.src}
              alt="Tara Verma Look"
              fill
              sizes="(max-width: 768px) 50vw, 16vw"
              className="object-cover object-top filter brightness-[0.92] group-hover:brightness-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex items-end p-3">
              <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] font-bold font-[family-name:var(--font-inter)]">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
