"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";
import { BlogPostItem } from "@/data/fashionData";

export default function FeaturedBlogSection() {
  const posts = fashionData.blogPosts as BlogPostItem[];
  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#080808] border-b border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-2 font-[family-name:var(--font-inter)]">
              ✦ Tara&apos;s Fashion &amp; Lifestyle Journal
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-white">
              Latest Articles &amp;{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Style Chronicles
              </em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#141414] border border-[#2B2B2B] hover:border-[#C9A96E] text-[10.5px] uppercase tracking-[0.24em] font-[family-name:var(--font-inter)] text-[#C9A96E] hover:text-white px-6 py-3 transition-all shadow-md group"
          >
            <span>View All Stories</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* ── MAGAZINE EDITORIAL SPREAD LAYOUT (1 LARGE HERO + 2 STACKED) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Cover Feature (Left 7 cols) */}
          {featuredPost && (
            <article className="lg:col-span-7 border border-[#222] bg-[#0E0E0E] hover:border-[#C9A96E] transition-all duration-500 shadow-2xl flex flex-col justify-between group overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#161616]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top filter brightness-[0.92] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-85" />
                
                {/* Category Pill */}
                <span className="absolute top-4 left-4 bg-[#0A0A0A]/90 text-[#E5C583] text-[9.5px] uppercase tracking-[0.25em] px-3.5 py-1.5 font-bold border border-[#333] shadow-lg">
                  ✦ {featuredPost.category} · COVER FEATURE
                </span>
              </div>

              <div className="p-8 sm:p-10 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] font-[family-name:var(--font-inter)] text-[#888]">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span className="text-[#C9A96E]">By Tara Verma</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl italic text-[#D8CCA8] font-light leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C9A96E] hover:text-white transition-colors"
                  >
                    <span>Read Full Story</span>
                    <span>→</span>
                  </Link>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
                    Editorial Issue #24
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Secondary Stacked Articles (Right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryPosts.map((post, idx) => (
              <article
                key={post.id}
                className="border border-[#222] bg-[#0E0E0E] hover:border-[#C9A96E] transition-all duration-500 shadow-xl flex flex-col sm:flex-row lg:flex-col justify-between group overflow-hidden flex-1"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/8] overflow-hidden bg-[#161616] sm:w-1/2 lg:w-full shrink-0">
                  <Image
                    src={idx === 0 ? "/images/tara-pillar-chromatics.jpg" : "/images/model-roses.jpg"}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top filter brightness-[0.92] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 text-[#C9A96E] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 font-semibold border border-[#333]">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#777] mb-2 font-[family-name:var(--font-inter)]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white group-hover:text-[#E5C583] transition-colors leading-snug">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#A69C8E] line-clamp-2 mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1A1A1A]">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.2em] font-bold text-[#C9A96E] hover:text-white transition-colors"
                    >
                      <span>Explore Article</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
