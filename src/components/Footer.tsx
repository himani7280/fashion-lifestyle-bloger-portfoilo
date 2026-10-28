"use client";


import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { footerData } from "@/data/fashionData";

const FOOTER_LINKS = footerData.footerLinks;

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: footerData.socialLinks.instagram,
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
    href: footerData.socialLinks.twitter,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: footerData.socialLinks.facebook,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: footerData.socialLinks.youtube,
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
    <footer className="w-full max-w-full overflow-hidden bg-[#080808] text-[#F5EDE5] border-t border-[#1C1C1C] py-6 sm:py-8 px-4 sm:px-6 md:px-8 text-[14px]">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 items-start pb-5 md:pb-6 border-b border-[#1C1C1C]">
          
          {/* Brand Info */}
          <ScrollReveal variant="fade-up" className="sm:col-span-2 md:col-span-5 space-y-2.5">
            <BrandLogo size="lg" href="/" />
            <p className="text-[14px] text-[#A69C8E] font-light leading-relaxed max-w-sm">
              {footerData.description}
            </p>
            <div className="pt-0.5 flex flex-wrap items-center gap-2.5 text-[14px] uppercase tracking-wider text-[#C9A96E]">
              {footerData.locations.map((loc, idx) => (
                <span key={loc} className="inline-flex items-center gap-2.5">
                  <span>{idx === 0 ? `✦ ${loc}` : loc}</span>
                  {idx < footerData.locations.length - 1 && <span>·</span>}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Atelier Address */}
          <ScrollReveal variant="fade-up" delay={100} className="sm:col-span-1 md:col-span-4 space-y-2">
            <span className="text-[14px] uppercase tracking-[0.2em] font-semibold text-[#C9A96E] block">
              {footerData.address.title}
            </span>
            <div className="space-y-1 text-[14px] text-[#C4BCB3] font-light">
              <p className="font-semibold text-white">{footerData.address.line1}</p>
              <p>{footerData.address.line2}</p>
              <p className="text-[#888] pt-0.5">
                <span className="text-[#E5C583]">{footerData.address.emailLabel}</span>{" "}
                <a href={`mailto:${footerData.address.email}`} className="hover:text-white transition-colors">
                  {footerData.address.email}
                </a>
              </p>
              <p className="text-[#888]">
                <span className="text-[#E5C583]">{footerData.address.phoneLabel}</span> {footerData.address.phone}
              </p>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal variant="fade-up" delay={200} className="sm:col-span-1 md:col-span-3 space-y-2.5 sm:text-left md:text-right">
            <span className="text-[14px] uppercase tracking-[0.2em] font-semibold text-[#C9A96E] block">
              {footerData.connectTitle}
            </span>
            <p className="text-[#888] text-[14px] font-light">
              {footerData.connectDescription}
            </p>
            
            {/* Social Icons */}
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
          </ScrollReveal>

        </div>

        {/* Navigation Links */}
        <ScrollReveal variant="fade-up" delay={120} className="py-2 border-b border-[#1A1A1A] flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[14px] uppercase tracking-[0.14em] text-[#A69C8E] text-center font-medium">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#C9A96E] transition-colors">
              {item.name}
            </Link>
          ))}
        </ScrollReveal>

        {/* Copyright */}
        <ScrollReveal variant="fade-up" delay={180} className="flex items-center justify-center text-[14px] text-[#888] text-center">
          <p>{footerData.copyright}</p>
        </ScrollReveal>

      </div>
    </footer>
  );
}
