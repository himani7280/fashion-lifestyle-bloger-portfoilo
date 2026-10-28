import React from "react";
import Image from "next/image";
import Link from "next/link";
import { thankYouData } from "@/data/fashionData";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Thank You — Tara Verma Haute Atelier",
  description: "Thank you for reaching out to Tara Verma. Your collaboration inquiry has been safely received by our atelier desk.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      
      {/* Hero Banner */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={thankYouData.bannerImage}
              alt="Tara Verma Inquiry Confirmation"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 25%" }}
              className="object-cover filter brightness-[0.55] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/60" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#C9A96E]/40 shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">{thankYouData.homeText}</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{thankYouData.bannerTitle}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              {thankYouData.bannerTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Confirmation Card */}
      <section className="py-14 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="relative bg-[#111111] border border-[#222222] rounded-3xl p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6 overflow-hidden">
            
            {/* Ambient Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C9A96E]/10 blur-3xl rounded-full pointer-events-none" />

            {/* Checkmark Crest */}
            <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-[#C9A96E]/25 via-[#DFC18A]/15 to-[#E5C583]/10 border border-[#C9A96E] flex items-center justify-center text-[#E5C583] text-3xl shadow-[0_0_35px_rgba(201,169,110,0.35)]">
              ✓
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {thankYouData.cardTitle}
              </h2>
              <p className="text-xl sm:text-2xl italic text-[#DFC18A] font-light">
                &ldquo;{thankYouData.quote}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#9CA3AF] font-light max-w-lg mx-auto leading-relaxed pt-1">
                {thankYouData.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="relative z-10 pt-2 pb-1 text-[14px] text-[#777] flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-t border-[#1C1C1C]">
              <span>{thankYouData.emailLabel} <span className="text-[#E5C583]">{thankYouData.email}</span></span>
              <span className="hidden sm:inline">·</span>
              <span>{thankYouData.phoneLabel} <span className="text-[#E5C583]">{thankYouData.phone}</span></span>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-3 flex items-center justify-center">
              <Link
                href={thankYouData.buttonLink}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[14px] uppercase tracking-[0.2em] px-9 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.55)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>{thankYouData.buttonText}</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
