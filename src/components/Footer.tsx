"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#080808] text-[#F5EDE5] border-t border-[#1C1C1C] py-5 sm:py-6 px-4 sm:px-6 md:px-8 font-[family-name:var(--font-poppins)] text-xs">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-5">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 md:gap-6 items-start pb-4 md:pb-5 border-b border-[#1C1C1C]">
          
          {/* Column 1: Logo & Mission (5 cols) */}
          <div className="sm:col-span-2 md:col-span-5 space-y-2">
            <BrandLogo name="Tara Verma" subtitle="FASHION & LIFESTYLE" size="md" href="/" />
            <p className="text-xs text-[#A69C8E] font-light leading-relaxed max-w-sm">
              An internationally celebrated luxury fashion &amp; lifestyle portfolio honoring haute couture tailoring, bespoke wardrobe architecture, and effortless presence.
            </p>
            <div className="pt-0.5 flex flex-wrap items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-[#C9A96E]">
              <span>✦ PARIS</span>
              <span>·</span>
              <span>MILAN</span>
              <span>·</span>
              <span>NEW YORK</span>
              <span>·</span>
              <span>NEW DELHI</span>
            </div>
          </div>

          {/* Column 2: Atelier Address from Map (4 cols) */}
          <div className="sm:col-span-1 md:col-span-4 space-y-1.5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C9A96E] font-mono block">
              ✦ Flagship Showroom &amp; Atelier
            </span>
            <div className="space-y-0.5 text-xs text-[#C4BCB3] font-light">
              <p className="font-semibold text-white">520 Broadway, SoHo</p>
              <p>New York, NY 10012, United States</p>
              <p className="text-[#888] pt-0.5">
                <span className="text-[#E5C583]">Email:</span>{" "}
                <a href="mailto:xyz@gmail.com" className="hover:text-white transition-colors">
                  xyz@gmail.com
                </a>
              </p>
              <p className="text-[#888]">
                <span className="text-[#E5C583]">Phone:</span> +1 00000 00000
              </p>
            </div>
          </div>

          {/* Column 3: 4 Social Icons with Default Links (3 cols) */}
          <div className="sm:col-span-1 md:col-span-3 space-y-2 sm:text-left md:text-right">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C9A96E] font-mono block">
              ✦ Connect &amp; Follow
            </span>
            <p className="text-[#888] text-[11px] font-light">
              Follow Tara Verma for daily front-row lookbooks &amp; styling chronicles.
            </p>
            
            {/* 4 Social Icons with Default Links */}
            <div className="flex items-center sm:justify-start md:justify-end gap-2.5 pt-0.5 flex-nowrap overflow-x-visible">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 shrink-0 rounded-full bg-[#141414] border border-[#2B2B2B] hover:border-[#C9A96E] hover:text-[#0A0A0A] hover:bg-[#C9A96E] text-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Navigation Links */}
        <div className="py-1.5 border-b border-[#1A1A1A] flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-1.5 text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888] text-center">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#C9A96E] transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Copyright Only (4 Links Removed) */}
        <div className="flex items-center justify-center text-[11px] text-[#666] text-center">
          <p>© 2026 Tara Verma — Fashion &amp; Lifestyle. All Rights Reserved. Powered by lestow</p>
        </div>

      </div>
    </footer>
  );
}
