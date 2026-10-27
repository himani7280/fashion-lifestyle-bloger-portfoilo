import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fashionData from "@/data/fashionData.json";
import { BlogPostItem } from "@/data/fashionData";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = fashionData.blogPosts as BlogPostItem[];
  return posts.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = (fashionData.blogPosts as BlogPostItem[]).find((p) => p.id === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} — Tara Verma Fashion Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const posts = fashionData.blogPosts as BlogPostItem[];
  const currentIndex = posts.findIndex((p) => p.id === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const post = posts[currentIndex];

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BANNER (SINGLE TITLE & BREADCRUMB ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 25%" }}
              className="object-cover filter brightness-[0.85] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Journal</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Story</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Style Chronicles
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: EDITORIAL FEATURE SPLIT (LEFT IMAGE, RIGHT STYLISH PRELUDE & SPECS) ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: FEATURED EDITORIAL PHOTOGRAPH (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C9A96E]/50 bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2.5">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 text-[9.5px] uppercase font-mono tracking-widest text-[#E5C583]">
                  ✦ {post.category} · EDITORIAL STUDY
                </div>

                {/* Floating Bottom Metadata */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#333] flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono text-[#C9A96E] font-semibold">
                    {post.date}
                  </span>
                  <span className="text-[9.5px] uppercase font-mono text-[#888]">
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CURATORIAL PRELUDE & AUTHOR SPECS (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#141414] text-[#E5C583] text-[9.5px] uppercase font-mono tracking-widest px-3.5 py-1 rounded-full border border-[#C9A96E]/40">
                <span>✦ CURATORIAL PRELUDE</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {post.title}
              </h2>
            </div>

            {/* Curatorial Thesis / Quote */}
            <div className="border-l-2 border-[#C9A96E] pl-4 py-2 space-y-1">
              <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light">
                &ldquo;{post.quote || post.intro || post.excerpt}&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#888] block">
                — Tara Verma · Fashion Stylist
              </span>
            </div>

            {/* Author Byline Box */}
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
                <span className="text-xs font-bold text-white block">By {post.author || "Tara Verma"}</span>
                <span className="text-[9.5px] uppercase tracking-wider text-[#999] font-mono">
                  Fashion Stylist &amp; Atelier Creative Director
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Curate Look with Stylist ✦</span>
                <span>→</span>
              </Link>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-wider text-[#C9A96E] hover:text-white transition-colors underline underline-offset-4 font-mono py-2"
              >
                ← Back to All Stories
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ── 03: IN-DEPTH SARTORIAL ESSAYS & PHOTOGRAPHIC SPREADS ── */}
      {post.sections && post.sections.length > 0 && (
        <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] space-y-12">
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {post.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                
                {/* Heading with Gold Accent Hairline */}
                <div className="space-y-1.5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {section.heading}
                  </h3>
                  <div className="w-14 h-[2px] bg-[#C9A96E]" />
                </div>

                {/* Section Narrative */}
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                  {section.text}
                </p>

                {/* Wide Photographic Plate — Centered with Non-Breaking Dimensions */}
                {section.wideImage && (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[460px] w-full rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl my-5 flex items-center justify-center">
                    <Image
                      src={section.wideImage}
                      alt={section.heading}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover object-center filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 text-[9px] font-mono tracking-widest text-white/70 uppercase">
                      ✦ Editorial Plate · Styled by Tara Verma
                    </div>
                  </div>
                )}

                {/* Dual Photographic Comparison Grid — Centered and Balanced */}
                {section.images && section.images.length === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[0]}
                        alt="Editorial detail 1"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-center filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[1]}
                        alt="Editorial detail 2"
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover object-center filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </section>
      )}

      {/* ── 04: CORE SARTORIAL PRINCIPLES (EQUAL 7XL CONTAINER WIDTH) ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A]">
        <div className="bg-[#0E0E0E] rounded-3xl border border-[#262626] p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-3">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="bg-[#141414] p-5 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-2">
              <span className="text-[9.5px] uppercase tracking-widest text-[#E5C583] font-mono block">
                Rule 01 · Proportions
              </span>
              <h4 className="font-bold text-sm text-white font-[family-name:var(--font-playfair)]">
                Architectural Silhouette
              </h4>
              <p className="text-xs text-[#999] leading-relaxed font-light">
                Anchor every outfit with one strong structured piece to maintain intentional balance and visual line.
              </p>
            </div>

            <div className="bg-[#141414] p-5 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-2">
              <span className="text-[9.5px] uppercase tracking-widest text-[#E5C583] font-mono block">
                Rule 02 · Tactility
              </span>
              <h4 className="font-bold text-sm text-white font-[family-name:var(--font-playfair)]">
                Intentional Texture Clash
              </h4>
              <p className="text-xs text-[#999] leading-relaxed font-light">
                Juxtapose matte surfaces like boiled wool and denim with liquid satins and raw mulberries.
              </p>
            </div>

            <div className="bg-[#141414] p-5 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-2">
              <span className="text-[9.5px] uppercase tracking-widest text-[#E5C583] font-mono block">
                Rule 03 · Discipline
              </span>
              <h4 className="font-bold text-sm text-white font-[family-name:var(--font-playfair)]">
                Tonal Restraint
              </h4>
              <p className="text-xs text-[#999] leading-relaxed font-light">
                Restrict each look to two complementary tones to achieve effortless, timeless quiet luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06: MORE FROM THE JOURNAL ── */}
      <section className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
              More Curations from the Journal
            </h3>
            <Link href="/blog" className="text-xs text-[#C9A96E] hover:text-white font-mono uppercase tracking-wider">
              All Stories →
            </Link>
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
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] font-mono block">
                      ✦ {rp.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-2 leading-snug">
                      {rp.title}
                    </h4>
                    <span className="text-[9px] text-[#777] font-mono block">
                      {rp.readTime}
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
