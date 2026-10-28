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
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-[#080808] text-[#F5EDE5] border-t border-[#1C1C1C] py-6 sm:py-8 px-4 sm:px-6 md:px-8 font-[family-name:var(--font-poppins)] text-[14px]">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 items-start pb-5 md:pb-6 border-b border-[#1C1C1C]">
          
          {/* Column 1: Logo & Mission (5 cols) */}
          <div className="sm:col-span-2 md:col-span-5 space-y-2.5">
            <BrandLogo size="lg" href="/" />
            <p className="text-[14px] text-[#A69C8E] font-light leading-relaxed max-w-sm">
              An internationally celebrated luxury fashion &amp; lifestyle portfolio honoring haute couture tailoring, bespoke wardrobe architecture, and effortless presence.
            </p>
            <div className="pt-0.5 flex flex-wrap items-center gap-2.5 text-[14px] uppercase font-mono tracking-wider text-[#C9A96E]">
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
          <div className="sm:col-span-1 md:col-span-4 space-y-2">
            <span className="text-[14px] uppercase tracking-[0.2em] font-semibold text-[#C9A96E] font-mono block">
              ✦ Flagship Showroom &amp; Atelier
            </span>
            <div className="space-y-1 text-[14px] text-[#C4BCB3] font-light">
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
          <div className="sm:col-span-1 md:col-span-3 space-y-2.5 sm:text-left md:text-right">
            <span className="text-[14px] uppercase tracking-[0.2em] font-semibold text-[#C9A96E] font-mono block">
              ✦ Connect &amp; Follow
            </span>
            <p className="text-[#888] text-[14px] font-light">
              Follow Tara Verma for daily front-row lookbooks &amp; styling chronicles.
            </p>
            
            {/* 4 Social Icons with Default Links */}
            <div className="flex items-center sm:justify-start md:justify-end gap-2.5 pt-1 flex-nowrap overflow-x-visible">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 shrink-0 rounded-full bg-[#141414] border border-[#2B2B2B] hover:border-[#C9A96E] hover:text-[#0A0A0A] hover:bg-[#C9A96E] text-[#C9A96E] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Navigation Links — 14px font size */}
        <div className="py-2 border-b border-[#1A1A1A] flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[14px] uppercase tracking-[0.14em] text-[#A69C8E] text-center font-medium">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#C9A96E] transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Bottom Copyright — 14px font size */}
        <div className="flex items-center justify-center text-[14px] text-[#888] text-center">
          <p>© 2026 Tara Verma — Fashion &amp; Lifestyle. All Rights Reserved. Powered by lestow</p>
        </div>

      </div>
    </footer>
  );
}
