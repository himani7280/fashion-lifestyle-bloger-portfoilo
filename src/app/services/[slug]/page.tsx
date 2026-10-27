import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fashionData from "@/data/fashionData.json";
import { ServiceItem } from "@/data/fashionData";

interface ServiceDetailData {
  id: string;
  suiteNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  leadDescription: string;
  taraQuote: string;
  pillars: {
    tag: string;
    title: string;
    subtitle: string;
    image: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  deliverables: string[];
}

const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  "bespoke-styling": {
    id: "bespoke-styling",
    suiteNumber: "SUITE 01",
    title: "Bespoke Wardrobe Styling",
    subtitle: "Capsule Curation & Silhouette Architecture",
    tagline: "Where personal presence meets impeccable sartorial intention.",
    heroImage: "/images/model-about.jpg",
    leadDescription:
      "An intimate creative engagement engineered to define your signature sartorial language. We audit your wardrobe, eliminate noise, and curate a high-impact capsule tailored to your lifestyle and public appearances.",
    taraQuote:
      "True personal style is the deliberate discipline of knowing what silhouettes, fabrics, and proportions command your presence.",
    pillars: [
      {
        tag: "ARCHITECTURAL EDIT",
        title: "Wardrobe Audit & Editing",
        subtitle: "Deconstructing your rotation to retain investment pieces.",
        image: "/images/model-red-gown-clean.jpg",
      },
      {
        tag: "CAPSULE MATRIX",
        title: "Bespoke Capsule Architecture",
        subtitle: "10 to 15 versatile pieces creating 40+ effortless looks.",
        image: "/images/model-blazer.jpg",
      },
      {
        tag: "PRIVATE SOURCING",
        title: "Atelier Sourcing & Fittings",
        subtitle: "Direct access to premier European ateliers and bespoke tailors.",
        image: "/images/model-studio.jpg",
      },
    ],
    process: [
      { step: "01", title: "Silhouette Diagnosis", desc: "Analyzing body architecture, lifestyle demands, and aesthetic goals." },
      { step: "02", title: "Tonal Harmonization", desc: "Curating a disciplined chromatic palette that flatters your skin tone." },
      { step: "03", title: "Atelier Sourcing", desc: "Hand-sourcing bespoke garments and artisanal handcrafted textiles." },
      { step: "04", title: "Master Fitting", desc: "Private fitting session and high-definition digital lookbook curation." },
    ],
    deliverables: [
      "Custom Digital Lookbook (40+ photographed outfits)",
      "Seasonal Wardrobe Audit & Edit Catalog",
      "Private Atelier Access in Paris, Milan & New Delhi",
      "VIP On-Demand Styling Advice Support",
    ],
  },
  "brand-campaigns": {
    id: "brand-campaigns",
    suiteNumber: "SUITE 02",
    title: "Luxury Brand Partnerships",
    subtitle: "Creative Ambassadorship & High-Fashion Alignment",
    tagline: "Bridging storied haute couture houses with contemporary global audiences.",
    heroImage: "/images/model-hero.jpg",
    leadDescription:
      "Elevating luxury houses through high-impact visual storytelling, runway front-row ambassadorship, and refined digital lookbooks that engage discerning international clientele.",
    taraQuote:
      "A luxury collaboration must embody the genuine romance of craftsmanship, silhouette harmony, and cultural heritage.",
    pillars: [
      {
        tag: "RUNWAY FRONT-ROW",
        title: "Fashion Week Ambassadorship",
        subtitle: "Front-row appearances and social diaries for Paris & Milan Fashion Weeks.",
        image: "/images/tara-pillar-global.jpg",
      },
      {
        tag: "CO-BRANDED EDITORIAL",
        title: "Digital Lookbook Creation",
        subtitle: "Directing exclusive seasonal lookbooks spotlighting signature garments.",
        image: "/images/model-roses.jpg",
      },
      {
        tag: "COMMERCIAL CONVERSION",
        title: "Bespoke Endorsements",
        subtitle: "Authentic luxury endorsements connecting high jewelry and couture.",
        image: "/images/tara-collab-brands.jpg",
      },
    ],
    process: [
      { step: "01", title: "Brand Alignment", desc: "Deep-dive analysis of heritage and campaign objectives." },
      { step: "02", title: "Editorial Moodboarding", desc: "Developing bespoke photographic concepts and location scouting." },
      { step: "03", title: "Production Direction", desc: "High-definition photo and cinema production with top-tier crews." },
      { step: "04", title: "Global Rollout", desc: "Strategic multi-channel rollout across fashion channels and VIP networks." },
    ],
    deliverables: [
      "Full Commercial Campaign Assets (Photo & 4K Cinema Video)",
      "Dedicated Social Media Feature Across 250K+ Luxury Community",
      "Red Carpet / Gala Product Placement & Media Interviews",
      "Detailed Performance Analytics & Audience Sentiment Report",
    ],
  },
  "editorial-direction": {
    id: "editorial-direction",
    suiteNumber: "SUITE 03",
    title: "Editorial Creative Direction",
    subtitle: "Concept, Styling & Master Visual Storytelling",
    tagline: "Sculpting visual poetry through intentional light, cut, and motion.",
    heroImage: "/images/model-suit.jpg",
    leadDescription:
      "Full-spectrum creative direction for publications, lookbooks, and high-fashion ateliers. From concept moodboards to on-set garment pacing and final spread sequencing.",
    taraQuote:
      "Creative direction is the choreography of beauty — aligning posture, garment tension, and shadow to stop the world.",
    pillars: [
      {
        tag: "PUBLICATION EDITORIAL",
        title: "Magazine Cover & Spreads",
        subtitle: "Directing high-concept covers and multi-page editorial spreads.",
        image: "/images/model-suit.jpg",
      },
      {
        tag: "ON-SET MASTERY",
        title: "Garment Pacing & Drapery",
        subtitle: "Sculpting live drape, tailoring breaks, and movement during shoots.",
        image: "/images/model-blazer.jpg",
      },
      {
        tag: "CHROMATIC SYNC",
        title: "Color & Light Harmonization",
        subtitle: "Aligning fabric sheen, architecture, and natural golden hour lighting.",
        image: "/images/tara-pillar-chromatics.jpg",
      },
    ],
    process: [
      { step: "01", title: "Concept Genesis", desc: "Crafting the core visual thesis and thematic moodboards." },
      { step: "02", title: "Talent Curation", desc: "Casting models and sourcing archive couture pieces." },
      { step: "03", title: "On-Set Direction", desc: "Directing models, photographer, and lighting crew for flawless execution." },
      { step: "04", title: "Layout Sequencing", desc: "Sequencing spreads, typography hierarchy, and color grading." },
    ],
    deliverables: [
      "Complete Editorial Concept Treatment & Moodboard Deck",
      "On-Set Styling Direction & Garment Architecture",
      "Print-Ready High-Resolution Master Spreads",
      "Comprehensive Behind-The-Scenes Creative Assets",
    ],
  },
  "lifestyle-travel": {
    id: "lifestyle-travel",
    suiteNumber: "SUITE 04",
    title: "Lifestyle & Travel Aesthetics",
    subtitle: "Destination & Resort Wardrobe Curation",
    tagline: "The art of effortless elegance across the world's most breathtaking destinations.",
    heroImage: "/hero-slide-1.jpg",
    leadDescription:
      "Curating destination wardrobes, luxury hospitality partnerships, and jet-set visual stories that capture effortless global living from Amalfi to Paris.",
    taraQuote:
      "Travel styling is harmonizing your silhouette with sea breezes, stone terraces, and golden sunset light.",
    pillars: [
      {
        tag: "RESORT CAPSULE",
        title: "Destination Wardrobe Edits",
        subtitle: "Sun-bleached linens, liquid silk slips, and evening resortwear.",
        image: "/hero-slide-1.jpg",
      },
      {
        tag: "LUXURY HOSPITALITY",
        title: "Boutique Villa Features",
        subtitle: "Visual diaries celebrating high-end architecture and coastal living.",
        image: "/images/casual-banner.webp",
      },
      {
        tag: "TEXTILE HERITAGE",
        title: "Artisanal Textile Expeditions",
        subtitle: "Spotlighting indigenous handlooms and regional master craftspeople.",
        image: "/images/seasonal-banner.webp",
      },
    ],
    process: [
      { step: "01", title: "Itinerary Audit", desc: "Evaluating destination climate, maritime conditions, and event calendars." },
      { step: "02", title: "Day-to-Night Blueprint", desc: "Curating breathable, crease-resistant luxury fabrics." },
      { step: "03", title: "Visual Story Production", desc: "Capturing organic lifestyle moments in natural Mediterranean light." },
      { step: "04", title: "Chronicle Publishing", desc: "Publishing a comprehensive style guide and lookbook." },
    ],
    deliverables: [
      "Luggage-Optimized Capsule Wardrobe Packing Blueprint",
      "High-Definition Visual Travel Diary Assets",
      "Luxury Destination Recommendations & Atelier Contacts",
      "Editorial Publishing Across Digital Channels",
    ],
  },
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = fashionData.services as ServiceItem[];
  return services.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return { title: "Suite Not Found" };
  return {
    title: `${detail.title} — ${detail.suiteNumber} | Tara Verma Atelier`,
    description: detail.leadDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BANNER (SINGLE SHORT TITLE & BREADCRUMB ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={detail.heroImage}
              alt={detail.title}
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover filter brightness-[0.85] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Suite</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Sartorial Services
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: EDITORIAL FEATURE SPLIT (LEFT 5 COLS IMAGE, RIGHT 7 COLS PRELUDE & SPECS) ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: MASTER SUITE FEATURE IMAGE (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C9A96E]/50 bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2.5">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616]">
                <Image
                  src={detail.heroImage}
                  alt={detail.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 text-[9.5px] uppercase font-mono tracking-widest text-[#E5C583]">
                  ✦ {detail.suiteNumber} · Atelier Master Suite
                </div>

                {/* Floating Bottom Subtitle */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#333] flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono text-[#C9A96E] font-semibold">
                    {detail.subtitle}
                  </span>
                  <span className="text-[9px] uppercase font-mono text-[#888]">
                    Paris · Milan · NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CURATORIAL PRELUDE & SUITE DETAILS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#141414] text-[#E5C583] text-[9.5px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full border border-[#C9A96E]/40">
                <span>✦ SARTORIAL ATELIER SPECIFICATION</span>
                <span>·</span>
                <span>{detail.suiteNumber}</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {detail.title}
              </h2>
            </div>

            {/* Curatorial Thesis / Quote */}
            <div className="border-l-2 border-[#C9A96E] pl-4 py-2 space-y-1">
              <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light">
                &ldquo;{detail.taraQuote || detail.tagline}&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888] block">
                — Tara Verma · The Atelier Director
              </span>
            </div>

            {/* Author / Director Byline Box */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111] border border-[#222]">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C9A96E]/50 bg-[#161616] shrink-0">
                <Image
                  src="/images/tara-contact-hero.jpg"
                  alt="Tara Verma"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Curated by Tara Verma</span>
                <span className="text-[9.5px] uppercase tracking-wider text-[#999] font-mono">
                  Haute Couture Stylist &amp; Atelier Creative Director
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Link
                href={`/contact?service=${detail.id}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Book This Suite with Tara ✦</span>
                <span>→</span>
              </Link>
              <Link
                href="/services"
                className="text-xs uppercase tracking-wider text-[#C9A96E] hover:text-white transition-colors underline underline-offset-4 font-mono py-2"
              >
                ← Back to All Services
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 03: IN-DEPTH SARTORIAL SUITE PILLARS & EDITORIAL PLATES ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] space-y-12">
        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Section Introduction */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block font-mono">
              ✦ Atelier Suite Core Architecture
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white leading-snug">
              The Fundamental Elements of {detail.title}
            </h3>
            <div className="w-14 h-[2px] bg-[#C9A96E]" />
            <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light pt-2">
              {detail.leadDescription}
            </p>
          </div>

          {/* Pillars Spread */}
          {detail.pillars.map((pillar, pIdx) => (
            <div key={pillar.title} className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-[9.5px] uppercase font-mono tracking-widest text-[#E5C583] block">
                  ✦ Element 0{pIdx + 1} · {pillar.tag}
                </span>
                <h4 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white leading-snug">
                  {pillar.title}
                </h4>
                <div className="w-10 h-[2px] bg-[#C9A96E]/70" />
              </div>

              <p className="text-sm text-[#C4BCB3] leading-relaxed font-light">
                {pillar.subtitle}
              </p>

              {/* Wide Photographic Plate with Centered, Non-Breaking Framing */}
              {pillar.image && (
                <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[460px] w-full rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl my-5 group flex items-center justify-center">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover object-center filter brightness-[0.96] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-[9px] font-mono tracking-widest text-white/80 uppercase">
                    ✦ Atelier Suite Plate · {pillar.title}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Package Deliverables Checklist Box */}
          <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-[#222] space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-mono font-bold block">
              ✦ Guaranteed Suite Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {detail.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#DDD]">
                  <span className="text-[#C9A96E] font-bold text-sm leading-none shrink-0">✦</span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 04: 4-PHASE JOURNEY METHODOLOGY ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A]">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block font-mono">
            ✦ Execution Framework
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white">
            The 4-Phase Atelier Journey
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {detail.process.map((step) => (
            <div
              key={step.step}
              className="bg-[#0E0E0E] p-5 rounded-2xl border border-[#222] hover:border-[#C9A96E]/40 transition-colors space-y-2"
            >
              <div className="w-8 h-8 rounded-full bg-[#161616] border border-[#C9A96E]/40 text-[#E5C583] flex items-center justify-center font-mono text-xs font-bold">
                {step.step}
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-base font-bold text-white">
                {step.title}
              </h4>
              <p className="text-xs text-[#9E9484] font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
