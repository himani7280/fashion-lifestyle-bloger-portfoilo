"use client";

import React, { useState } from "react";
import Link from "next/link";
import fashionData from "@/data/fashionData.json";

const MODEL_FAQS = [
  {
    q: "How can designers and creative directors book Tara Verma for fashion weeks?",
    a: "Booking requests can be made directly through Tara's primary agencies in Paris (Elite Model Management), New York (IMG Models Worldwide), or New Delhi (Tara Verma Representation), or by submitting the casting form on this site. Please provide show dates, call times, fitting schedules, and garment concepts.",
    cat: "Bookings"
  },
  {
    q: "What are Tara's official runway and casting measurements?",
    a: "Tara's verified model measurements: Height: 5' 10\" (178 cm), Bust: 34\" (86 cm), Waist: 24\" (61 cm), Hips: 35\" (89 cm), Dress size: 2-4 US / 34-36 EU, Shoe: 8.5 US / 39 EU, Eyes: Hazel Brown, Hair: Dark Brunette Silk.",
    cat: "Specifications"
  },
  {
    q: "Does Tara travel internationally for location shoots and campaigns?",
    a: "Yes. Tara frequently travels across Europe, North America, the Middle East, and Asia for editorial covers, brand campaigns, and commercial film productions with full visa clearances for the Schengen zone, UK, US, and India.",
    cat: "Travel"
  },
  {
    q: "How can brands request an official comp card or high-res digitals?",
    a: "High-resolution agency digitals and official comp cards can be requested directly via xyz@gmail.com or through the Contact page form.",
    cat: "Comp Card"
  },
  {
    q: "What commercial usage rights and brand exclusivity options are available?",
    a: "Campaign options range from 6-month regional digital rights to 2-year worldwide multi-media exclusivity for luxury skincare, jewellery, and couture apparel maisons.",
    cat: "Usage & Rights"
  }
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      
      {/* ── BREADCRUMB HERO (SINGLE TITLE ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium bg-[#141414] px-3.5 py-1 rounded-full border border-[#C9A96E]/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Casting FAQ</span>
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Frequently Asked{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                Questions
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 md:px-10">
        <div className="space-y-4">
          {MODEL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#222] bg-[#111] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-[family-name:var(--font-playfair)] text-xl font-bold text-white hover:text-[#C9A96E] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[#C9A96E] font-mono text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#1C1C1C] text-[#BBB] font-[family-name:var(--font-inter)] text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-8 bg-[#141414] border border-[#C9A96E]/40 text-center space-y-3">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
            Have a Specific Production Inquiry?
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#999]">
            Our agency booking desks in Paris and New York are on standby.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Contact Booking Desk ✦</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
