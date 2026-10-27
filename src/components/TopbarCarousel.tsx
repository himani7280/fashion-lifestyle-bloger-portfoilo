"use client";

import React from "react";
import Link from "next/link";

const TOPBAR_MESSAGES = [
  "CASUAL WEAR & RELAXED SILHOUETTES",
  "OFFICE & EXECUTIVE POWER TAILORING",
  "PARTY & COCKTAIL NOIR COUTURE",
  "WESTERN CONTEMPORARY MINIMALISM",
  "ETHNIC WEAR & HERITAGE WEAVES",
  "WEDDING & FESTIVE ROYAL ATELIER",
  "SEASONAL CAPSULE COLLECTIONS",
  "LUXURY LIFESTYLE & TRAVEL CHRONICLES",
  "RED CARPET GALA & HIGH GLAMOUR",
  "HAUTE COUTURE RUNWAY DIRECTION",
  "BESPOKE WARDROBE ARCHITECTURE",
  "PARIS · MILAN · NEW YORK · NEW DELHI",
];

export default function TopbarCarousel() {
  // Duplicate list to achieve a perfectly seamless infinite scrolling loop
  const marqueeList = [...TOPBAR_MESSAGES, ...TOPBAR_MESSAGES];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes topbarMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-topbar-marquee {
            display: flex;
            width: max-content;
            animation: topbarMarquee 38s linear infinite;
          }
          .animate-topbar-marquee:hover {
            animation-play-state: paused;
          }
        `,
        }}
      />

      <div
        className="w-full max-w-full overflow-hidden bg-gradient-to-r from-[#B88F47] via-[#E8CF96] to-[#B88F47] border-b border-[#A67E36] py-2.5 px-4 sm:px-6 md:px-8 text-[#0A0A0A] select-none shadow-[0_2px_12px_rgba(184,143,71,0.25)] relative z-50"
        title="Tara Verma Haute Atelier Directives (Hover to pause)"
      >
        <div className="flex animate-topbar-marquee items-center gap-8 md:gap-12">
          {marqueeList.map((item, idx) => (
            <Link
              key={idx}
              href="/services"
              className="inline-flex items-center gap-3 shrink-0 group transition-transform hover:scale-105"
            >
              {/* Gold Diamond / Star Separator */}
              <span className="text-[#3A2D15] text-[11px] font-bold">✦</span>

              {/* Pure High-Fashion Wordmark — Zero Background Pill */}
              <span className="font-[family-name:var(--font-playfair)] text-[11.5px] sm:text-xs md:text-[13px] font-bold tracking-[0.24em] text-[#0A0A0A] group-hover:text-black">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
