import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/fashionData";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = blogPosts;
  return posts.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} — Tara Verma Fashion Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const posts = blogPosts;
  const currentIndex = posts.findIndex((p) => p.id === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = posts[currentIndex];

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BANNER (COMPACT & 100% ALIGNED WITH HEADER) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="relative w-full overflow-hidden h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
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
              <Link href="/blog" className="hover:text-white transition-colors">Journal</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{post.category}</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {post.title}
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
                    src={post.image}
                    alt={post.title}
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
                      {post.date}
                    </span>
                    <span className="text-[13px] sm:text-[14px] uppercase font-mono text-[#888]">
                      ✦ {post.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CURATORIAL PRELUDE & AUTHOR SPECS (7 cols - Flush with Header Contact Button) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#141414] text-[#E5C583] text-[13px] sm:text-[14px] uppercase font-mono tracking-widest px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
                  <span>✦ CURATORIAL PRELUDE</span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {post.title}
                </h2>
              </div>

              {/* Lead Narrative Description */}
              {post.intro && (
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                  {post.intro}
                </p>
              )}

              {/* Curatorial Thesis / Quote */}
              {(post.quote || post.excerpt) && (
                <div className="border-l-2 border-[#C9A96E] pl-4 py-1.5 space-y-1">
                  <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light">
                    &ldquo;{post.quote || post.excerpt}&rdquo;
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
                  <span className="text-[14px] font-bold text-white block leading-tight">By {post.author || "Tara Verma"}</span>
                  <span className="text-[12px] sm:text-[13px] uppercase tracking-wider text-[#A69C8E] font-mono block">
                    Fashion Stylist &amp; Atelier Creative Director
                  </span>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
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
      {post.sections && post.sections.length > 0 && (
        <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
            {post.sections.map((section, sIdx) => (
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

                {/* Wide Photographic Plate — Top-Anchored objectPosition (Head & Face Never Cut) */}
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

                {/* Dual Photographic Comparison Grid — 2 Images in 1 Row (Top-Anchored Face Framing) */}
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

      {/* ── 05: MORE FROM THE JOURNAL (UNIFORM 12PX SPACING) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
              More Curations from the Journal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {posts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.id}`}
                  className="group bg-[#111] rounded-2xl border border-[#222] hover:border-[#C9A96E] p-4 flex gap-4 items-center transition-all shadow-md"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#161616]">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      sizes="80px"
                      style={{ objectPosition: "50% 15%" }}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] font-mono block">
                      ✦ {rp.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] text-sm sm:text-base font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-2 leading-snug">
                      {rp.title}
                    </h4>
                    <span className="text-[14px] text-[#A69C8E] font-mono block">
                      {rp.date}
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
