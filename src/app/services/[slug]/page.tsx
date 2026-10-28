import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/fashionData";

interface ServiceSection {
  heading: string;
  text: string;
  wideImage?: string;
  images?: string[];
}

interface ServiceDetailData {
  id: string;
  suiteNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  leadDescription: string;
  taraQuote: string;
  sections: ServiceSection[];
}

const SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  "bespoke-styling": {
    id: "bespoke-styling",
    suiteNumber: "SUITE 01",
    title: "Bespoke Wardrobe Styling",
    subtitle: "Capsule Curation & Silhouette Architecture",
    tagline: "Where personal presence meets impeccable sartorial intention.",
    heroImage: "/images/model-suit.jpg",
    leadDescription:
      "An intimate creative engagement engineered to define your signature sartorial language. We audit your wardrobe, eliminate noise, and curate a high-impact capsule tailored to your lifestyle and public appearances.",
    taraQuote:
      "True personal style is the deliberate discipline of knowing what silhouettes, fabrics, and proportions command your presence.",
    sections: [
      {
        heading: "01. Wardrobe Architecture & High-Impact Editing",
        text: "Every bespoke engagement begins with a ruthless deconstruction of your existing wardrobe rotation. We isolate core investment pieces, eliminate stylistic noise, and identify structural silhouette gaps. The result is a refined foundation where every garment serves an intentional purpose in commanding presence.",
        wideImage: "/images/model-red-gown-clean.jpg",
      },
      {
        heading: "02. The Modular Capsule Matrix & Atelier Sourcing",
        text: "We engineer a cohesive 10 to 15 piece modular wardrobe where every garment harmonizes across texture, cut, and chromatic depth. With private direct access to premier European ateliers in Paris and Milan, rare virgin wools and liquid silks are tailored to your precise measurements.",
        images: [
          "/images/model-blazer.jpg",
          "/images/model-contact.jpg",
        ],
      },
      {
        heading: "03. Precision Master Fitting & Digital Lookbook",
        text: "Private fitting sessions ensure every lapel break, hemline, and drape conforms flawlessly to your posture. We deliver a custom high-definition digital lookbook featuring over 40 distinct styling combinations ready for immediate deployment across business, galas, and travel.",
        wideImage: "/images/model-studio.jpg",
      },
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
    sections: [
      {
        heading: "01. International Fashion Week Ambassadorship",
        text: "Front-row appearances, live runway diaries, and bespoke street-style moments across Paris, Milan, and New York Fashion Weeks. Tara delivers sophisticated cultural alignment and authentic brand visibility among global fashion tastemakers and discerning clientele.",
        wideImage: "/images/tara-pillar-global.jpg",
      },
      {
        heading: "02. Cinematic Lookbook & Garment Direction",
        text: "Directing exclusive co-branded seasonal lookbooks that frame signature couture garments with sculptural poise, elevated lighting, and narrative depth. We produce compelling editorial imagery designed to captivate high-net-worth audiences.",
        images: [
          "/images/model-roses.jpg",
          "/images/model-suit.jpg",
        ],
      },
      {
        heading: "03. High-Conversion Commercial Endorsements",
        text: "Authentic multi-platform creative collaborations connecting fine jewelry, luxury accessories, and haute couture to an engaged community of over 250K fashion aficionados with verifiable commercial impact.",
        wideImage: "/images/model-hero.jpg",
      },
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
    sections: [
      {
        heading: "01. Publication Covers & Master Spreads",
        text: "Conceptualizing and directing print and digital magazine cover stories defined by evocative narrative tension, avant-garde tailoring, and storytelling depth. From visual treatment decks to final spread layouts, every frame is crafted to leave an indelible impression.",
        wideImage: "/images/tara-pillar-chromatics.jpg",
      },
      {
        heading: "02. On-Set Garment Pacing & Drapery Sculpting",
        text: "Orchestrating live movement, architectural drape pinning, and silhouette tension during fast-paced studio and location shoots with top international fashion photographers and crews.",
        images: [
          "/images/model-blazer.jpg",
          "/images/model-red-gown-clean.jpg",
        ],
      },
      {
        heading: "03. Chromatic Synchronization & Spread Sequencing",
        text: "Aligning fabric sheen, spatial architecture, and natural lighting to achieve chromatic harmony across every spread. We sequence the final narrative with typography hierarchy that commands global editorial respect.",
        wideImage: "/images/model-studio.jpg",
      },
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
    sections: [
      {
        heading: "01. Destination Wardrobe Architecture",
        text: "Selecting sun-washed lightweight linens, fluid silk slips, and effortless evening resortwear engineered for Mediterranean itineraries and coastal living. We harmonize your silhouette with maritime breezes, stone terraces, and golden sunset light.",
        wideImage: "/hero-slide-3.jpg",
      },
      {
        heading: "02. Luxury Hospitality & Coastal Diaries",
        text: "Crafting atmospheric visual chronicles celebrating boutique villas, private yachts, and heritage hospitality properties through sophisticated style narratives that embody the romance of effortless global living.",
        images: [
          "/images/model-roses.jpg",
          "/images/model-contact.jpg",
        ],
      },
      {
        heading: "03. Artisanal Textile Expeditions",
        text: "Documenting regional master weavers, hand-dyed silks, and ancestral crafts from Amalfi to New Delhi—integrating genuine artisanal soul and cultural depth into contemporary resort fashion collections.",
        wideImage: "/hero-slide-1.jpg",
      },
    ],
  },
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
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
      
      {/* ── 01: BANNER (COMPACT & 100% ALIGNED WITH HEADER) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="relative w-full overflow-hidden h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={detail.heroImage}
              alt={detail.title}
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 15%" }}
              className="object-cover filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 text-center space-y-2.5">
            <div className="inline-flex items-center flex-wrap justify-center gap-2 text-[12px] sm:text-[14px] uppercase tracking-[0.16em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40 shadow-lg max-w-full">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{detail.title}</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {detail.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: EDITORIAL FEATURE SPLIT (UNIFORM 12PX TOP/BOTTOM SPACING) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full my-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* LEFT: FEATURED EDITORIAL PHOTOGRAPH (5 cols - Flush with Header Logo) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C9A96E]/50 bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2.5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616]">
                  <Image
                    src={detail.heroImage}
                    alt={detail.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    style={{ objectPosition: "50% 15%" }}
                    className="object-cover object-top filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />

                  {/* Floating Bottom Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#333] flex items-center justify-between">
                    <span className="text-[13px] sm:text-[14px] uppercase font-mono text-[#C9A96E] font-semibold">
                      {detail.subtitle}
                    </span>
                    <span className="text-[13px] sm:text-[14px] uppercase font-mono text-[#888]">
                      ✦ BESPOKE DIRECTION
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CURATORIAL PRELUDE & SPECS (7 cols - Flush with Header Contact Button) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#141414] text-[#E5C583] text-[13px] sm:text-[14px] uppercase font-mono tracking-widest px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
                  <span>✦ CURATORIAL PRELUDE</span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {detail.title}
                </h2>
              </div>

              {/* Lead Narrative Description */}
              {detail.leadDescription && (
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                  {detail.leadDescription}
                </p>
              )}

              {/* Curatorial Thesis / Quote */}
              {detail.taraQuote && (
                <div className="border-l-2 border-[#C9A96E] pl-4 py-1.5 space-y-1">
                  <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light">
                    &ldquo;{detail.taraQuote}&rdquo;
                  </p>
                  <span className="text-[13px] sm:text-[14px] font-mono uppercase tracking-widest text-[#888] block">
                    — Tara Verma · Fashion Stylist
                  </span>
                </div>
              )}

              {/* Author Byline (Transparent & Content-Width Aligned) */}
              <div className="inline-flex items-center gap-3.5 bg-transparent w-fit pt-1">
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
                  <span className="text-[14px] font-bold text-white block leading-tight">By Tara Verma</span>
                  <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#A69C8E] font-mono block">
                    Fashion Stylist &amp; Atelier Creative Director
                  </span>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="pt-2">
                <Link
                  href={`/contact?service=${detail.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.12em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap max-w-full"
                >
                  <span>Curate Look with Stylist ✦</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 03: IN-DEPTH SARTORIAL ESSAYS & PHOTOGRAPHIC SPREADS (UNIFORM 12PX SPACING) ── */}
      {detail.sections && detail.sections.length > 0 && (
        <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
            {detail.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2.5 w-full">
                
                {/* Heading with Gold Accent Hairline */}
                <div className="space-y-1">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                    {section.heading}
                  </h3>
                  <div className="w-14 h-[2px] bg-[#C9A96E]" />
                </div>

                {/* Section Narrative */}
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light max-w-4xl">
                  {section.text}
                </p>

                {/* Wide Photographic Plate — Top-Anchored (No Head/Face Cut) */}
                {section.wideImage && (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[420px] w-full rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl my-[12px] flex items-center justify-center">
                    <Image
                      src={section.wideImage}
                      alt={section.heading}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      style={{ objectPosition: "50% 18%" }}
                      className="object-cover filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 text-[10px] sm:text-[12px] font-mono tracking-widest text-white/80 uppercase">
                      ✦ Editorial Plate · Styled by Tara Verma
                    </div>
                  </div>
                )}

                {/* Dual Photographic Comparison Grid — Clean High-Fashion Photos (No Magazine Text) */}
                {section.images && section.images.length === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-[12px] w-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[0]}
                        alt="Editorial detail 1"
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        style={{ objectPosition: "50% 15%" }}
                        className="object-cover filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[1]}
                        alt="Editorial detail 2"
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        style={{ objectPosition: "50% 15%" }}
                        className="object-cover filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 04: CORE SARTORIAL PRINCIPLES (UNIFORM 12PX SPACING) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full my-[12px]">
          <div className="bg-[#0E0E0E] rounded-3xl border border-[#262626] p-4 sm:p-6 space-y-3.5 shadow-2xl w-full">
            <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-2.5">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#C9A96E] font-mono font-bold">
                ✦ Tara Verma Editorial Notes
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#777] font-mono">
                CURATORIAL CHECKLIST
              </span>
            </div>

            <div className="text-center max-w-xl mx-auto space-y-1">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
                Core Sartorial Principles
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-[#AAA]">
                Key architectural rules distilled from this styling study:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="bg-[#141414] p-4 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-1.5">
                <span className="text-[14px] uppercase tracking-widest text-[#E5C583] font-mono block">
                  Rule 01 · Proportions
                </span>
                <h4 className="font-bold text-base text-white font-[family-name:var(--font-playfair)]">
                  Architectural Silhouette
                </h4>
                <p className="text-[14px] text-[#999] leading-relaxed font-light">
                  Anchor every outfit with one strong structured piece to maintain intentional balance and visual line.
                </p>
              </div>

              <div className="bg-[#141414] p-4 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-1.5">
                <span className="text-[14px] uppercase tracking-widest text-[#E5C583] font-mono block">
                  Rule 02 · Tactility
                </span>
                <h4 className="font-bold text-base text-white font-[family-name:var(--font-playfair)]">
                  Intentional Texture Clash
                </h4>
                <p className="text-[14px] text-[#999] leading-relaxed font-light">
                  Juxtapose matte surfaces like boiled wool and denim with liquid satins and raw mulberries.
                </p>
              </div>

              <div className="bg-[#141414] p-4 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-1.5">
                <span className="text-[14px] uppercase tracking-widest text-[#E5C583] font-mono block">
                  Rule 03 · Discipline
                </span>
                <h4 className="font-bold text-base text-white font-[family-name:var(--font-playfair)]">
                  Tonal Restraint
                </h4>
                <p className="text-[14px] text-[#999] leading-relaxed font-light">
                  Restrict each look to two complementary tones to achieve effortless, timeless quiet luxury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05: MORE FROM THE ATELIER (UNIFORM 12PX SPACING) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
              More Curations from the Atelier
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services
              .filter((s) => s.id !== detail.id)
              .slice(0, 2)
              .map((rs) => (
                <Link
                  key={rs.id}
                  href={`/services/${rs.id}`}
                  className="group bg-[#111] rounded-2xl border border-[#222] hover:border-[#C9A96E] p-4 flex gap-4 items-center transition-all shadow-md"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#161616]">
                    <Image
                      src={rs.image}
                      alt={rs.title}
                      fill
                      sizes="80px"
                      style={{ objectPosition: "50% 15%" }}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] font-mono block">
                      ✦ {rs.subtitle || "Atelier Suite"}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] text-sm sm:text-base font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-2 leading-snug">
                      {rs.title}
                    </h4>
                    <span className="text-[14px] text-[#A69C8E] font-mono block">
                      {rs.desc?.slice(0, 70)}...
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

    </div>
  );
}
