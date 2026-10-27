"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function EditorialFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F4EFEB] text-[#141312] border-t border-[#E8E2D8] pt-20 pb-12 font-[family-name:var(--font-inter)] text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── TOP GRAND WORDMARK (EDITORIAL SIGNATURE) ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-[#E8E2D8]">
          <div className="space-y-2">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[0.16em] uppercase text-[#141312] leading-none">
              TARA VERMA
            </h2>
            <span className="text-[10px] sm:text-xs tracking-[0.45em] uppercase text-[#8C8479] font-medium block">
              FASHION &amp; LIFESTYLE
            </span>
          </div>

          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#59534B] font-light max-w-md lg:text-right">
            &ldquo;Timeless elegance. Contemporary spirit. Wearable poetry for the modern woman.&rdquo;
          </p>
        </div>

        {/* ── MIDDLE NAV & DIRECTORY ── */}
        <div className="py-12 border-b border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A38760] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#59534B]">
              <li><a href="#hero" className="hover:text-[#141312] transition-colors">Home</a></li>
              <li><a href="#collections" className="hover:text-[#141312] transition-colors">Collections</a></li>
              <li><a href="#brand" className="hover:text-[#141312] transition-colors">The Brand</a></li>
              <li><a href="#lookbook" className="hover:text-[#141312] transition-colors">Lookbook</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A38760] font-semibold block">
              Collections
            </span>
            <ul className="space-y-2 text-xs text-[#59534B]">
              <li><a href="#collections" className="hover:text-[#141312] transition-colors">Ethnic Elegance</a></li>
              <li><a href="#collections" className="hover:text-[#141312] transition-colors">Modern Muse</a></li>
              <li><a href="#collections" className="hover:text-[#141312] transition-colors">Contemporary Classics</a></li>
              <li><a href="#collections" className="hover:text-[#141312] transition-colors">Festive Statements</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A38760] font-semibold block">
              Editorial
            </span>
            <ul className="space-y-2 text-xs text-[#59534B]">
              <li><a href="#journal" className="hover:text-[#141312] transition-colors">Fashion Journal</a></li>
              <li><a href="#journal" className="hover:text-[#141312] transition-colors">Wardrobe Philosophy</a></li>
              <li><a href="#brand" className="hover:text-[#141312] transition-colors">Atelier Vision</a></li>
              <li><a href="#contact" className="hover:text-[#141312] transition-colors">Private Viewings</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#A38760] font-semibold block">
              Atelier &amp; Legal
            </span>
            <div className="text-xs text-[#736B63] space-y-1">
              <p className="text-[#141312] font-medium">520 Broadway, SoHo</p>
              <p>New York, NY 10012, USA</p>
            </div>
            <div className="pt-2">
              <a href="mailto:xyz@gmail.com" className="text-xs text-[#A38760] hover:underline font-medium">
                xyz@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM COPYRIGHT & BACK TO TOP ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8479]">
          <p>© 2026 TARA VERMA FASHION &amp; LIFESTYLE. All Rights Reserved. Powered by lestow</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-[#141312] hover:text-[#A38760] transition-colors uppercase tracking-[0.2em] font-semibold"
            >
              <span>Back To Top</span>
              <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
