import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/fashionData";

export const metadata = {
  title: "Style Chronicles & Lifestyle Journal — Tara Verma",
  description:
    "Curated fashion reflections, capsule wardrobe blueprints, and destination travel diaries from Tara Verma.",
};

export default function BlogPage() {
  const posts = blogPosts;

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BANNER (100% ALIGNED WITH HEADER) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="relative w-full overflow-hidden h-[260px] sm:h-[300px] md:h-[340px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/model-roses.jpg"
              alt="Tara Verma Style Chronicles & Lifestyle Journal"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 text-center space-y-2.5">
            <div className="inline-flex items-center flex-wrap justify-center gap-2 text-[12px] sm:text-[14px] uppercase tracking-[0.16em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40 shadow-lg max-w-full">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Journal</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Style Chronicles &amp;{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                Lifestyle Journal
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: EDITORIAL TIMELINE WITH CENTER LINE & ALTERNATING ZIG-ZAG (UNIFORM 12PX SPACING) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto w-full relative my-[12px]">
          
          {/* Central Vertical Gold Axis Line (Visible on md+) */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#C9A96E]/10 via-[#C9A96E]/40 to-[#C9A96E]/10 z-0 pointer-events-none" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20 relative z-10">
            {posts.map((post, idx) => {
              const isEven = idx % 2 === 0;

              const imageCard = (
                <Link
                  href={`/blog/${post.id}`}
                  className="group block relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#141414] border border-[#262626] hover:border-[#C9A96E] transition-all duration-700 shadow-2xl hover:shadow-[0_20px_50px_rgba(201,169,110,0.25)] cursor-pointer"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectPosition: "50% 15%" }}
                    className="object-cover object-top filter brightness-[0.94] contrast-[1.03] group-hover:scale-106 group-hover:brightness-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Bottom Metadata Only (Entry Badge Removed Per User Request) */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center">
                    <span className="bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[12px] sm:text-[13px] font-mono text-[#C4BCB3] whitespace-nowrap">
                      {post.date}
                    </span>
                  </div>
                </Link>
              );

              const contentCard = (
                <div className="space-y-4">
                  {/* Category & Date Pill Row — Non-Breaking Single Line */}
                  <div className="flex items-center flex-wrap gap-2.5 sm:gap-3">
                    <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-[#C9A96E] font-bold font-mono bg-[#141414] px-3.5 py-1 rounded-full border border-[#C9A96E]/30 whitespace-nowrap inline-block">
                      ✦ {post.category}
                    </span>
                    <span className="text-[13px] sm:text-[14px] text-[#A69C8E] font-mono whitespace-nowrap">
                      {post.date}
                    </span>
                  </div>

                  <Link href={`/blog/${post.id}`} className="group block">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="font-[family-name:var(--font-cormorant)] text-[15px] sm:text-base italic text-[#D8CCA8] font-light leading-relaxed border-l-2 border-[#C9A96E] pl-3.5">
                    &ldquo;{post.excerpt}&rdquo;
                  </p>

                  {/* Author Pill & Action Button — Fully Responsive Single Line */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.12em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap max-w-full"
                    >
                      <span>Read Chronicle ✦</span>
                      <span>→</span>
                    </Link>

                    <div className="flex items-center gap-2 text-[13px] sm:text-[14px] font-mono text-[#888] whitespace-nowrap">
                      <span>By {post.author || "Tara Verma"}</span>
                    </div>
                  </div>
                </div>
              );

              return (
                <div
                  key={post.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center relative"
                >
                  {/* Center Node Diamond on Timeline (Visible on md+) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0A0A0A] border border-[#C9A96E] items-center justify-center text-[#E5C583] text-[14px] shadow-[0_0_15px_rgba(201,169,110,0.5)]">
                    ✦
                  </div>

                  {/* Alternating Layout:
                      If Even: Left = Image, Right = Content
                      If Odd:  Left = Content, Right = Image */}
                  {isEven ? (
                    <>
                      <div className="order-1 md:order-1">{imageCard}</div>
                      <div className="order-2 md:order-2">{contentCard}</div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1">{contentCard}</div>
                      <div className="order-1 md:order-2">{imageCard}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 03: CONSULTATION BANNER (UNIFORM 12PX SPACING & RESPONSIVE BUTTON) ── */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full my-[12px]">
          <div className="bg-[#0E0E0E] rounded-3xl border border-[#222] p-5 sm:p-8 text-center space-y-3.5 shadow-2xl">
            <span className="text-[13px] sm:text-[14px] uppercase font-mono tracking-[0.25em] text-[#C9A96E] block font-semibold">
              ✦ Private Wardrobe Styling &amp; Consultation
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Curate Your Signature{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Sartorial Identity
              </em>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-[15px] sm:text-base italic text-[#B0A696] max-w-lg mx-auto font-light leading-relaxed">
              Collaborate directly with Tara Verma on personal wardrobe capsules, red-carpet appearances, or brand creative direction.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.12em] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap max-w-[calc(100vw-32px)]"
              >
                <span>Connect with Stylist ✦</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
