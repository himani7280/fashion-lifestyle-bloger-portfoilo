"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";
import { ServiceItem } from "@/data/fashionData";

export default function ServicesSection() {
  const services = fashionData.services as ServiceItem[];
  const [activeServiceId, setActiveServiceId] = useState(services[0]?.id || "bespoke-styling");

  const currentService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="py-[12px] px-4 sm:px-6 md:px-8 bg-[#090909] border-b border-[#1C1C1C] relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto my-[12px] py-[12px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold block mb-1 font-[family-name:var(--font-inter)]">
              ✦ Fashion &amp; Lifestyle Expertise
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl font-bold text-white leading-tight">
              Curated Services &amp;{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Collaborations
              </em>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg italic text-[#B0A696] max-w-md font-light leading-relaxed">
            Bringing refined aesthetic vision, timeless personal style, and luxury lifestyle direction to discerning clients and visionary houses.
          </p>
        </div>

        {/* ── LUXURY INTERACTIVE SPLIT SHOWCASE (NON-VCARD LAYOUT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Service Selector Rows (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {services.map((srv, idx) => {
              const isActive = srv.id === currentService.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveServiceId(srv.id)}
                  onMouseEnter={() => setActiveServiceId(srv.id)}
                  className={`cursor-pointer p-4 sm:p-5 transition-all duration-500 border rounded-xl ${
                    isActive
                      ? "bg-[#141414] border-[#C9A96E] shadow-2xl scale-[1.01]"
                      : "bg-[#0E0E0E] border-[#1E1E1E] hover:border-[#333] opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className={`text-xs font-mono font-bold tracking-widest ${
                        isActive ? "text-[#C9A96E]" : "text-[#555]"
                      }`}>
                        0{idx + 1}
                      </span>
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A96E] font-bold block mb-0.5">
                          {srv.subtitle}
                        </span>
                        <h3 className={`font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? "text-white" : "text-[#BBB]"
                        }`}>
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-base transition-transform duration-300 ${
                      isActive ? "text-[#C9A96E] translate-x-1" : "text-[#444]"
                    }`}>
                      →
                    </span>
                  </div>

                  {/* Expanded detail when active */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-[#222] space-y-2.5 animate-fade-in">
                      <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#D8CCA8] leading-relaxed">
                        {srv.desc}
                      </p>

                      {srv.highlights && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#999] pt-1">
                          {srv.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-[#C9A96E] text-xs">✦</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage with Photo, Floating Badges & Action (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between border border-[#222] bg-[#121212] rounded-xl overflow-hidden min-h-[380px] lg:min-h-0 shadow-2xl">
            {/* Visual Canvas */}
            <div className="absolute inset-0 z-0">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top filter brightness-[0.92] contrast-[1.04] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-95" />
            </div>

            {/* Top Floating Badge */}
            <div className="relative z-10 p-6 flex justify-between items-center">
              <span className="bg-[#0A0A0A]/90 backdrop-blur-md px-3.5 py-1.5 text-[9.5px] uppercase tracking-[0.25em] font-bold text-[#E5C583] border border-[#333]">
                ✦ Signature Expertise
              </span>
              <span className="text-2xl">{currentService.icon}</span>
            </div>

            {/* Bottom Overlay Info & Action */}
            <div className="relative z-10 p-8 sm:p-10 space-y-4 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-bold block">
                {currentService.subtitle}
              </span>
              <h4 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentService.title}
              </h4>
              <p className="font-[family-name:var(--font-cormorant)] text-base italic text-[#D8CCA8] line-clamp-2">
                {currentService.desc}
              </p>

              <div className="pt-2">
                <Link
                  href={`/contact?service=${currentService.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] to-[#DFC18A] hover:from-white hover:to-[#C9A96E] text-[#0A0A0A] px-7 py-3 text-[10.5px] uppercase tracking-[0.22em] font-bold transition-all shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                >
                  <span>Book This Consultation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
