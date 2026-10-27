"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, Clock, BookOpen } from "lucide-react";

interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  preview: string;
  image: string;
  content: string[];
  keyQuote: string;
}

const journalArticles: JournalArticle[] = [
  {
    id: "art-of-everyday-styling",
    title: "The Art of Everyday Styling",
    category: "Styling Essentials",
    readTime: "5 min read",
    date: "Autumn 2026",
    preview:
      "True style is not about reinventing yourself every morning; it is the art of curating elevated foundations that move with intuitive grace.",
    image: "/images/casual-banner.webp",
    keyQuote:
      "A wardrobe should never complicate life; it should clarify your intention.",
    content: [
      "Everyday luxury begins in the nuance of texture. When choosing daytime silhouettes, prioritize natural fibers that breathe and drape effortlessly—fine Egyptian cotton poplin, washed silk twill, and structured linen blends.",
      "The secret to modern elegance is balanced contrast: pairing a crisp tailored blazer with fluid wide-leg trousers, or anchoring a delicate silk camisole with architectural denim. By investing in timeless foundations rather than fleeting micro-trends, everyday dressing transforms into a meditative art.",
      "Consider the silhouette from all angles. Allow clothing to skim the body rather than constrict it, giving each movement an unforced ease that defines contemporary sophistication.",
    ],
  },
  {
    id: "finding-your-personal-style",
    title: "Finding Your Personal Style",
    category: "Wardrobe Philosophy",
    readTime: "6 min read",
    date: "Autumn 2026",
    preview:
      "Moving beyond fashion cycles to discover the signature silhouettes, textures, and color palettes that authentically reflect your persona.",
    image: "/images/model-contact.jpg",
    keyQuote:
      "Style is an intimate self-portrait. Wear what resonates with your rhythm.",
    content: [
      "Finding your personal aesthetic requires quiet discernment. It starts by auditing not what is currently fashionable on social feeds, but what makes you feel centered, poised, and commanding when you walk into a room.",
      "Identify your signature anchors: is it the clean architecture of monochrome suiting, the fluid romance of bias-cut silks, or the heritage richness of hand-loomed textiles? Once you understand your aesthetic anchor, trends become optional flourishes rather than strict mandates.",
      "A personal style is an evolving dialogue. As your aspirations, travels, and perspectives mature, your wardrobe naturally distills into a curated gallery of intentional pieces.",
    ],
  },
  {
    id: "modern-guide-to-occasion-wear",
    title: "A Modern Guide to Occasion Wear",
    category: "Couture & Evening",
    readTime: "7 min read",
    date: "Autumn 2026",
    preview:
      "From black-tie galas to intimate royal celebrations, mastering the etiquette of contemporary gala dressing and bespoke festive drapes.",
    image: "/images/party-banner.webp",
    keyQuote:
      "Occasion wear should evoke emotion, capture celebration, and celebrate grandeur.",
    content: [
      "Occasion dressing has entered a liberating new era. Traditional formalities are harmoniously marrying contemporary lightness, replacing stiff structures with fluid liquid satins, gossamer organzas, and handcrafted zardozi motifs.",
      "For grand evening events, monochromatic purity commands effortless attention. A floor-sweeping crimson gown or an understated black velvet column dress with sculptured neckline allows jewelry and presence to shine.",
      "When styling royal ethnic ensembles, respect the heritage of the weave. An authentic hand-loomed Banarasi saree requires minimal adornment—let the golden zari threads catch the ambient candlelight, speaking of centuries of royal tradition.",
    ],
  },
];

export default function FashionJournal() {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const leadArticle = journalArticles[0];
  const sideArticles = journalArticles.slice(1);

  return (
    <section id="journal" className="py-24 md:py-36 bg-[#F4EFEB] text-[#141312] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E2D8]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#A38760] font-semibold">
                Editorial Dispatch
              </span>
              <span className="w-10 h-[1px] bg-[#C5A880]/60" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-normal text-[#141312]">
              FASHION{" "}
              <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#A38760]">
                JOURNAL
              </span>
            </h2>
          </div>

          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#59534B] font-light max-w-md">
            Thoughtful essays, sartorial wisdom, and wardrobe philosophies curated by the atelier.
          </p>
        </div>

        {/* ── VARIED EDITORIAL GRID (LEAD FEATURE + 2 SECONDARY STORIES) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Lead Article (7 cols) */}
          <article
            onClick={() => setSelectedArticle(leadArticle)}
            className="lg:col-span-7 bg-[#FBF9F5] border border-[#E8E2D8] shadow-[0_8px_30px_rgba(20,19,18,0.03)] group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E2D8]">
                <Image
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#141312] text-[#FBF9F5] px-3 py-1 text-[9px] tracking-[0.25em] uppercase font-semibold">
                  Featured Story
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-4">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.25em] uppercase text-[#A38760] font-semibold">
                  <span>{leadArticle.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-[#736B63]">
                    <Clock size={12} />
                    {leadArticle.readTime}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-normal text-[#141312] group-hover:text-[#A38760] transition-colors leading-snug">
                  {leadArticle.title}
                </h3>

                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#59534B] leading-relaxed">
                  {leadArticle.preview}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 pt-0">
              <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-[family-name:var(--font-inter)] font-semibold text-[#141312] group-hover:text-[#A38760] transition-colors border-b border-[#141312] group-hover:border-[#A38760] pb-1">
                <span>Read Story</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </article>

          {/* Secondary Articles Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-[#FBF9F5] border border-[#E8E2D8] p-6 sm:p-8 group cursor-pointer flex flex-col sm:flex-row gap-6 items-center shadow-[0_8px_30px_rgba(20,19,18,0.03)] flex-1 justify-between"
              >
                <div className="relative w-full sm:w-44 aspect-[3/4] sm:aspect-[4/5] flex-shrink-0 overflow-hidden bg-[#E8E2D8]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#A38760] font-semibold block">
                      {article.category} · {article.readTime}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] text-xl font-normal text-[#141312] group-hover:text-[#A38760] transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#59534B] line-clamp-2">
                      {article.preview}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-semibold text-[#141312] group-hover:text-[#A38760] transition-colors pt-2 border-b border-transparent group-hover:border-[#A38760] self-start">
                    <span>Read Story →</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>

      {/* ── EDITORIAL ARTICLE DETAIL MODAL ── */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#141312]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative bg-[#FBF9F5] border border-[#C5A880]/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 md:p-16 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#141312] hover:text-[#A38760] transition-colors border border-[#E8E2D8] rounded-full"
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            {/* Article Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#A38760] font-semibold">
                <BookOpen size={14} />
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-normal text-[#141312] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E8E2D8] my-6">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Pull Quote */}
              <blockquote className="border-l-2 border-[#C5A880] pl-6 py-2 my-8 font-[family-name:var(--font-cormorant)] text-2xl italic text-[#141312] font-light leading-snug">
                &ldquo;{selectedArticle.keyQuote}&rdquo;
              </blockquote>

              {/* Story Body Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base font-[family-name:var(--font-inter)] text-[#403B35] leading-relaxed font-light">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#8C8479]">
                <span>Tara Verma Atelier Editorial</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-[#141312] font-semibold hover:text-[#A38760] uppercase tracking-wider text-[11px]"
                >
                  Close Article ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
