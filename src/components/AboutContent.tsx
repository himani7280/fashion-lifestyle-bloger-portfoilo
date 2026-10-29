"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutHero, aboutPageData, contact, Pillar, CuratedSphere, fonts } from "@/data/fashionData";

const PILLARS: Pillar[] = aboutPageData.pillarsSection.items;
const TARA_SPHERES: CuratedSphere[] = aboutPageData.spheresSection.items;

export default function AboutContent() {
  return (
    <div className={`${fonts.body} bg-[#0A0A0A] text-[#F5F0E8] font-normal min-h-screen overflow-x-hidden`}>
      
      {/* Hero Banner */}
      <section className="relative w-full py-2 sm:py-3 border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={aboutHero.image}
              alt={`${aboutHero.title} — ${aboutHero.subtitle}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_28%] filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">{aboutHero.homeText}</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{aboutHero.breadcrumb}</span>
            </div>

            <h1 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {aboutHero.titleStart}{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                {aboutHero.titleHighlight}
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* About & Mission */}
      <section className="relative py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-b border-[#1C1C1C]">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-10 sm:mb-14 space-y-1.5">
          <span className={`${fonts.mono} text-[14px] uppercase tracking-[0.22em] text-[#C9A96E] font-medium block`}>
            {aboutPageData.sectionBadge}
          </span>
          <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
            {aboutPageData.sectionTitle}
          </h2>
        </ScrollReveal>

        {/* Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-stretch">
          
          {/* Left Portrait */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-auto lg:h-full flex-1 min-h-[320px] lg:min-h-0 overflow-hidden rounded-2xl bg-[#111111] border border-[#262626] shadow-[0_16px_50px_rgba(0,0,0,0.85)] group">
              <Image
                src={aboutPageData.image}
                alt={aboutPageData.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[50%_18%] filter grayscale contrast-[1.08] brightness-[0.96] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right Narrative */}
          <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {aboutPageData.missionTitle}
            </h2>

            {aboutPageData.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[14px] sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                {para}
              </p>
            ))}

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href={aboutPageData.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{aboutPageData.primaryButtonText}</span>
                <span>→</span>
              </Link>
              <Link
                href={aboutPageData.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1C1C1C] text-[#E5C583] hover:text-white border border-[#C9A96E]/40 font-semibold text-[13px] sm:text-[14px] uppercase tracking-[0.14em] px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                <span>{aboutPageData.secondaryButtonText}</span>
                <span>→</span>
              </Link>
            </div>

          </ScrollReveal>

        </div>

        {/* Curated Spheres */}
        <div className="pt-12 sm:pt-16 border-t border-[#1C1C1C] space-y-8 mt-12">
          
          <ScrollReveal variant="fade-up" className="text-center max-w-xl mx-auto space-y-1">
            <span className={`${fonts.mono} text-[14px] uppercase tracking-[0.28em] text-[#C9A96E] font-medium block`}>
              {aboutPageData.spheresSection.badge}
            </span>
            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {aboutPageData.spheresSection.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
            {TARA_SPHERES.map((sphere, idx) => (
              <ScrollReveal
                key={sphere.title}
                variant="zoom-in"
                delay={idx * 120}
                className="flex flex-col items-center group"
              >
                
                {/* Circular Portrait */}
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-[#161616] border-2 border-[#242424] group-hover:border-[#C9A96E] transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.85)] cursor-pointer">
                  <Image
                    src={sphere.image}
                    alt={sphere.title}
                    fill
                    sizes="(max-width: 768px) 160px, 180px"
                    className="object-cover filter grayscale contrast-[1.08] brightness-[0.95] group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-108 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Title */}
                <h4 className={`${fonts.heading} text-xl sm:text-2xl font-bold text-white mt-5 mb-1.5 tracking-tight group-hover:text-[#E5C583] transition-colors`}>
                  {sphere.title}
                </h4>

                {/* Tagline */}
                <span className={`${fonts.mono} text-[14px] uppercase tracking-[0.2em] text-[#C9A96E] font-semibold mb-2.5 block`}>
                  ✦ {sphere.tagline}
                </span>

                {/* Description */}
                <p className="text-[14px] text-[#9CA3AF] font-light leading-relaxed max-w-xs mb-4 px-1">
                  {sphere.desc}
                </p>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 mt-auto pt-1">
                  <a
                    href={contact.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tara Verma Twitter"
                    className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#C9A96E] hover:text-white hover:border-[#C9A96E] hover:scale-115 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={contact.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tara Verma Instagram"
                    className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#C9A96E] hover:text-white hover:border-[#C9A96E] hover:scale-115 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={contact.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tara Verma Facebook"
                    className="w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-[#C9A96E] hover:text-white hover:border-[#C9A96E] hover:scale-115 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                </div>

              </ScrollReveal>
            ))}
          </div>

        </div>

      </section>

      {/* Four Style Pillars */}
      <section className="relative w-full py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
          
          {/* Section Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#C9A96E] font-bold block">
              {aboutPageData.pillarsSection.badge}
            </span>
            <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {aboutPageData.pillarsSection.titleStart}
              <em className="italic font-light text-[#E5C583]">
                {aboutPageData.pillarsSection.titleHighlight}
              </em>
            </h2>
            <p className="text-base sm:text-lg italic text-[#B0A696] font-light max-w-2xl mx-auto">
              {aboutPageData.pillarsSection.subtitle}
            </p>
          </ScrollReveal>

          {/* Alternating Pillar Spreads */}
          <div className="space-y-10 sm:space-y-14">
            {PILLARS.map((pillar, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={pillar.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Image Column */}
                  <ScrollReveal
                    variant={isEven ? "fade-right" : "fade-left"}
                    className={`lg:col-span-6 relative flex flex-col ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-auto lg:h-full flex-1 min-h-[280px] lg:min-h-0 w-full overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-[#C9A96E]/30 group">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover filter brightness-[0.92] contrast-[1.04] group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-80" />
                      
                      {/* Code Badge */}
                      <div className={`${fonts.mono} absolute top-4 left-4 z-10 bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A96E]/50 text-[10px] font-normal uppercase tracking-[0.2em] text-[#E5C583]`}>
                        {aboutPageData.pillarsSection.codePrefix} {pillar.number}
                      </div>

                      {/* Tagline Badge */}
                      <div className="absolute bottom-4 left-4 z-10 max-w-fit">
                        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C9A96E] bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#333] inline-block whitespace-nowrap">
                          {pillar.tagline}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Narrative Column */}
                  <ScrollReveal
                    variant={isEven ? "fade-left" : "fade-right"}
                    delay={120}
                    className={`lg:col-span-6 flex flex-col justify-between space-y-5 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    
                    {/* Roman Numeral Watermark */}
                    <div className="relative">
                      <span className={`${fonts.heading} text-7xl sm:text-8xl lg:text-9xl font-black text-white/5 select-none absolute -top-12 -left-4 pointer-events-none`}>
                        {pillar.roman}
                      </span>
                      
                      <div className="relative z-10 space-y-2">
                        <span className={`${fonts.mono} text-[14px] uppercase tracking-[0.25em] text-[#C9A96E] font-bold block`}>
                          {aboutPageData.pillarsSection.pillarPrefix} {pillar.number} {aboutPageData.pillarsSection.pillarSuffix}
                        </span>
                        <h3 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    {/* Philosophy Quote */}
                    <p className="text-xl sm:text-2xl italic text-[#DFC18A] font-light leading-relaxed border-l-2 border-[#C9A96E] pl-4">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#B8AEA3] font-light leading-relaxed">
                      {pillar.description}
                    </p>

                  </ScrollReveal>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
