"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";
import { ServiceItem } from "@/data/fashionData";
import AnimatedCounter from "@/components/AnimatedCounter";

interface PortraitPlate {
  id: string;
  plateNumber: string;
  title: string;
  location: string;
  year: string;
  image: string;
  quote: string;
}

const PORTRAIT_PLATES: PortraitPlate[] = [
  {
    id: "p1",
    plateNumber: "PLATE 01",
    title: "The Noir Tuxedo Edit",
    location: "Paris Atelier",
    year: "2026",
    image: "/images/model-suit.jpg",
    quote: "Power dressing redefined through sharp architectural lines and commanding presence.",
  },
  {
    id: "p2",
    plateNumber: "PLATE 02",
    title: "Crimson Velvet Drama",
    location: "Milan Runway",
    year: "2026",
    image: "/images/tara-pillar-chromatics.jpg",
    quote: "Unapologetic scarlet drapery celebrating rich tactile fabrics and gala grandeur.",
  },
  {
    id: "p3",
    plateNumber: "PLATE 03",
    title: "Damask Rose & Velvet",
    location: "London Editorial",
    year: "2025",
    image: "/images/model-roses.jpg",
    quote: "Capturing ethereal radiance, subtle mystery, and high-fashion floral beauty.",
  },
  {
    id: "p4",
    plateNumber: "PLATE 04",
    title: "Classic Monochrome",
    location: "Rome Studio",
    year: "2025",
    image: "/images/model-about.jpg",
    quote: "Subtlety is the ultimate sophistication in modern high-fashion portraiture.",
  },
  {
    id: "p5",
    plateNumber: "PLATE 05",
    title: "Golden Hour Lifestyle Muse",
    location: "Amalfi Coast",
    year: "2026",
    image: "/images/model-contact.jpg",
    quote: "Natural Mediterranean light and effortless cosmopolitan living.",
  },
  {
    id: "p6",
    plateNumber: "PLATE 06",
    title: "Studio Fine Portraiture",
    location: "New Delhi Atelier",
    year: "2025",
    image: "/hero-slide-1.jpg",
    quote: "Where the camera meets stillness, presence, and expressive sartorial poise.",
  },
  {
    id: "p7",
    plateNumber: "PLATE 07",
    title: "The Signature Muse Portrait",
    location: "Paris Fashion Week",
    year: "2026",
    image: "/hero-slide-3.jpg",
    quote: "A definitive portrait capturing haute couture poise and timeless feminine grace.",
  },
  {
    id: "p8",
    plateNumber: "PLATE 08",
    title: "Couture Velvet Evening Poise",
    location: "Milan Fashion Archive",
    year: "2026",
    image: "/images/model-roses.jpg",
    quote: "Sculpting visual poetry through intentional silhouette harmony and presence.",
  },
];

export default function ServicesContent() {
  const services = fashionData.services as ServiceItem[];

  // Interchanged component: Portrait Plates Carousel
  const [selectedPlate, setSelectedPlate] = useState<PortraitPlate | null>(null);
  const marqueeList = [...PORTRAIT_PLATES, ...PORTRAIT_PLATES];

  const currentPlateIndex = selectedPlate
    ? PORTRAIT_PLATES.findIndex((p) => p.id === selectedPlate.id)
    : -1;

  const handlePrevPlate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPlateIndex > -1) {
      const prevIdx = (currentPlateIndex - 1 + PORTRAIT_PLATES.length) % PORTRAIT_PLATES.length;
      setSelectedPlate(PORTRAIT_PLATES[prevIdx]);
    }
  };

  const handleNextPlate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPlateIndex > -1) {
      const nextIdx = (currentPlateIndex + 1) % PORTRAIT_PLATES.length;
      setSelectedPlate(PORTRAIT_PLATES[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPlate(null);
      } else if (e.key === "ArrowLeft") {
        if (currentPlateIndex > -1) {
          const prevIdx = (currentPlateIndex - 1 + PORTRAIT_PLATES.length) % PORTRAIT_PLATES.length;
          setSelectedPlate(PORTRAIT_PLATES[prevIdx]);
        }
      } else if (e.key === "ArrowRight") {
        if (currentPlateIndex > -1) {
          const nextIdx = (currentPlateIndex + 1) % PORTRAIT_PLATES.length;
          setSelectedPlate(PORTRAIT_PLATES[nextIdx]);
        }
      }
    };
    if (selectedPlate) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPlate, currentPlateIndex]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BANNER (SINGLE TITLE & BREADCRUMBS ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/model-suit.jpg"
              alt="Tara Verma Fashion & Lifestyle Services"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover filter brightness-[0.88] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium bg-[#0A0A0A]/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Services</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Fashion Styling &amp;{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                Creative Direction
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: 4 ATELIER SERVICES (ELEGANT Z-PATTERN EDITORIAL MAGAZINE SPREAD) ── */}
      <section className="relative w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto my-[12px] py-[12px] space-y-12 sm:space-y-16">
          
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-bold font-[family-name:var(--font-inter)] block">
              ✦ HAUTE ATELIER SUITES · CURATED STYLING SERVICES
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Bespoke Sartorial{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Offerings
              </em>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#B0A696] font-light max-w-2xl mx-auto">
              Four tailored creative engagements sculpted to elevate personal presence, brand visibility, and visual storytelling.
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              4 ALTERNATING MAGAZINE SPREADS (RHYTHMIC Z-PATTERN)
             ══════════════════════════════════════════════════════════════ */}
          <div className="space-y-12 sm:space-y-16">
            {services.map((srv, idx) => {
              const isEven = idx % 2 === 1;
              const romanNums = ["I", "II", "III", "IV"];
              const roman = romanNums[idx] || "I";

              return (
                <div
                  key={srv.id}
                  className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0D0D0D] border border-[#222] hover:border-[#C9A96E]/60 transition-all duration-700 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Visual Column (Equal Height to Content Column) */}
                    <div className={`lg:col-span-5 relative flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative w-full h-[280px] sm:h-[320px] lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.85)] border border-[#C9A96E]/30 group bg-[#161616] flex-1">
                        {/* Gold Corner Accents */}
                        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A96E] z-20 pointer-events-none" />
                        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A96E] z-20 pointer-events-none" />

                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          style={{ objectPosition: "50% 20%" }}
                          className="object-cover filter brightness-[0.92] contrast-[1.03] group-hover:scale-106 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Suite Badge */}
                        <div className="absolute top-3 right-3 z-10 bg-[#0A0A0A]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A96E]/50 text-[9.5px] uppercase font-mono tracking-widest text-[#E5C583]">
                          ✦ SUITE 0{idx + 1}
                        </div>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-3 inset-x-3 z-10 text-center">
                          <span className="text-[10px] uppercase tracking-wider text-[#C9A96E] bg-[#0A0A0A]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#333] inline-block font-mono">
                            {srv.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Editorial Narrative Column */}
                    <div className={`lg:col-span-7 space-y-4 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      
                      {/* Watermark Roman Numeral */}
                      <div className="flex items-center gap-3">
                        <span className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl italic text-[#C9A96E] font-light">
                          {roman}.
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-bold font-mono bg-[#141414] px-3 py-1 rounded-full border border-[#C9A96E]/30">
                          {srv.subtitle}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                        {srv.title}
                      </h3>

                      <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light border-l-2 border-[#C9A96E] pl-4">
                        &ldquo;{srv.desc}&rdquo;
                      </p>

                      {/* Action Buttons: Specific Suite Page + Inquire */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${srv.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                        >
                          <span>Explore Suite 0{idx + 1} ✦</span>
                          <span>→</span>
                        </Link>
                        <Link
                          href={`/contact?service=${srv.id}`}
                          className="text-xs uppercase tracking-wider text-[#C9A96E] hover:text-white transition-colors underline underline-offset-4 font-mono py-2 px-1"
                        >
                          Direct Inquiry →
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 03: WHY PARTNER WITH TARA VERMA (COMPACT HEIGHT) ── */}
      <section className="py-[12px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-[12px] border-b border-[#1C1C1C]">
        <div className="my-[12px] py-[12px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Stylist Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl overflow-hidden border border-[#2B2B2B] group-hover:border-[#C9A96E]/80 transition-colors shadow-[0_10px_35px_rgba(0,0,0,0.85)] bg-[#121212]">
              <Image
                src="/images/model-contact.jpg"
                alt="Tara Verma — The Sartorial Advantage"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                style={{ objectPosition: "50% 15%" }}
                className="object-cover filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#C9A96E]/30 text-center shadow-xl">
                <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block mb-0.5">
                  Tara Verma Philosophy
                </span>
                <p className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-bold text-white italic">
                  &ldquo;True fashion is the harmony of silhouette, confidence, and soulful living.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Story & Metrics */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block bg-[#141414] text-[#E5C583] text-[10.5px] uppercase tracking-[0.22em] font-semibold px-3.5 py-1 rounded-full border border-[#C9A96E]/30">
              ✦ The Tara Verma Advantage
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Authentic High-Fashion &amp;{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Lifestyle Direction
              </em>
            </h2>

            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl italic text-[#DFC18A] leading-relaxed font-light">
              &ldquo;With commanding aesthetic presence, international front-row exposure, and intuitive mastery of silhouettes, Tara transforms every collaboration into a timeless work of art.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#B3A99B] leading-relaxed font-light">
              Whether styling high-profile appearances, creating seasonal lookbooks for global luxury fashion houses, or directing editorial campaigns across Paris, Milan, and New Delhi, Tara delivers an uncompromising standard of sartorial excellence.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-[#1C1C1C]">
              <div className="bg-[#121212] p-3 rounded-xl border border-[#222222] text-center">
                <AnimatedCounter value="250K+" />
                <span className="text-[9.5px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Community</span>
              </div>
              <div className="bg-[#121212] p-3 rounded-xl border border-[#222222] text-center">
                <AnimatedCounter value="50+" />
                <span className="text-[9.5px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Luxury Brands</span>
              </div>
              <div className="bg-[#121212] p-3 rounded-xl border border-[#222222] text-center">
                <AnimatedCounter value="120+" />
                <span className="text-[9.5px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Lookbooks</span>
              </div>
              <div className="bg-[#121212] p-3 rounded-xl border border-[#222222] text-center">
                <AnimatedCounter value="14+" />
                <span className="text-[9.5px] uppercase tracking-wider text-[#888] font-medium block mt-0.5">Fashion Weeks</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Inquire for Collaboration ✦</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 04: PERSONAL PORTRAIT ARCHIVES (INTERCHANGED COMPONENT - CONTINUOUS EXHIBITION CAROUSEL REEL) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1C1C1C] bg-[#070707] overflow-hidden">
        {/* Carousel Loop Animation Keyframes */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes portraitLoopMarquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-portrait-loop {
              display: flex;
              width: max-content;
              animation: portraitLoopMarquee 42s linear infinite;
            }
            .animate-portrait-loop:hover {
              animation-play-state: paused;
            }
          `,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-[12px] py-[12px] space-y-4">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#1C1C1C]">
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block mb-0.5 font-[family-name:var(--font-inter)]">
                ✦ Archival Fine Art Portraiture · Continuous Exhibition Reel
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-white">
                Personal Portrait{" "}
                <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                  Archives
                </em>
              </h2>
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic text-[#B0A696] max-w-md font-light">
              Continuous 35mm archival loop. Hover to pause the reel, click any plate to open full-screen viewer.
            </p>
          </div>

          {/* Film Edge Header Tape */}
          <div className="flex items-center justify-between text-[8.5px] uppercase tracking-[0.3em] text-[#555] font-mono px-2">
            <span>KODAK TRI-X 400 · CONTINUOUS EXHIBITION REEL</span>
            <span>8 ARCHIVAL PORTRAIT PLATES</span>
            <span>PARIS · MILAN · LONDON · NEW DELHI</span>
          </div>

        </div>

        {/* ── CONTINUOUS INFINITE CAROUSEL LOOP REEL ── */}
        <div className="w-full overflow-hidden select-none py-3">
          <div className="animate-portrait-loop gap-5 sm:gap-6 px-4">
            {marqueeList.map((plate, index) => (
              <div
                key={`${plate.id}-${index}`}
                onClick={() => setSelectedPlate(plate)}
                className="w-[170px] sm:w-[200px] md:w-[230px] shrink-0 group relative cursor-pointer flex flex-col space-y-2 transition-transform duration-500 hover:scale-[1.03]"
                title={`Click to view ${plate.title}`}
              >
                {/* 35mm Compact Portrait Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#141414] border border-[#2B2B2B] group-hover:border-[#C9A96E] transition-all duration-500 shadow-xl">
                  <Image
                    src={plate.image}
                    alt={plate.title}
                    fill
                    sizes="(max-width: 768px) 200px, 230px"
                    style={{ objectPosition: "50% 18%" }}
                    className="object-cover filter grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-106 transition-all duration-700 ease-out"
                  />

                  {/* Negative Plate Number Marker */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#0A0A0A]/85 backdrop-blur-md text-[#C9A96E] text-[8px] font-mono tracking-widest px-2 py-0.5 rounded border border-[#C9A96E]/40 shadow-md">
                    {plate.plateNumber}
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-2.5 right-2.5 z-10 w-6 h-6 rounded-full bg-[#0A0A0A]/80 border border-[#333] text-[#C9A96E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                    ↗
                  </div>

                  <div className="absolute inset-0 bg-black/25 group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Museum Exhibition Caption Underneath */}
                <div className="px-1 space-y-0.5">
                  <div className="flex items-center justify-between text-[8.5px] uppercase tracking-wider text-[#888] font-mono">
                    <span>{plate.location}</span>
                    <span>{plate.year}</span>
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-1">
                    {plate.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Film Edge Footer Tape */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2 pb-1">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-[#555] font-mono border-t border-[#1C1C1C] pt-2">
            <span>SAFETY FILM ◆ NO. 4022</span>
            <span>HOVER TO PAUSE LOOP · CLICK TO EXPAND</span>
            <span>EXHIBITION ARCHIVES 2026</span>
          </div>
        </div>

      </section>

      {/* ── 05: FULL-SCREEN DARKROOM IMAGE-ONLY CAROUSEL LIGHTBOX MODAL ── */}
      {selectedPlate && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fade-in select-none"
          onClick={() => setSelectedPlate(null)}
        >
          {/* Main Photo Container (Pure Image Showcase) */}
          <div
            className="relative max-w-5xl w-full h-[82vh] sm:h-[88vh] rounded-3xl overflow-hidden border border-[#C9A96E]/40 bg-[#0E0E0E] shadow-[0_25px_70px_rgba(0,0,0,0.98)] flex items-center justify-center group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The Image (No text pane, full high-fashion visual focus) */}
            <div className="relative w-full h-full">
              <Image
                src={selectedPlate.image}
                alt={selectedPlate.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                style={{ objectPosition: "50% 20%" }}
                className="object-contain sm:object-cover"
              />
            </div>

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Top Bar: Counter & Title on left, Close on right */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/50 text-[10px] uppercase font-mono tracking-widest text-[#E5C583]">
                  ✦ {currentPlateIndex + 1} / {PORTRAIT_PLATES.length}
                </span>
                <span className="text-xs font-mono text-white/90 hidden sm:inline-block bg-[#0A0A0A]/70 px-3 py-1 rounded-full border border-white/10">
                  {selectedPlate.title}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPlate(null)}
                className="w-10 h-10 rounded-full bg-[#0A0A0A]/90 border border-[#333] text-white hover:text-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-xl text-lg cursor-pointer"
                aria-label="Close Lightbox"
              >
                ✕
              </button>
            </div>

            {/* Left Carousel Arrow Button */}
            <button
              onClick={handlePrevPlate}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A96E]/60 text-[#E5C583] hover:text-[#0A0A0A] hover:bg-[#C9A96E] hover:border-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-2xl text-2xl font-bold cursor-pointer hover:scale-110"
              aria-label="Previous artwork"
            >
              ‹
            </button>

            {/* Right Carousel Arrow Button */}
            <button
              onClick={handleNextPlate}
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
              <span className="bg-[#0A0A0A]/80 px-3 py-1 rounded-full border border-white/10 pointer-events-auto">
                ESC to close
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── 06: BOTTOM CTA TO CONTACT (COMPACT) ── */}
      <section className="py-[12px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto my-[12px] text-center">
        <div className="py-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(201,169,110,0.35)] hover:shadow-[0_6px_35px_rgba(201,169,110,0.6)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Book Private Styling Appointment ✦</span>
            <span>→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
