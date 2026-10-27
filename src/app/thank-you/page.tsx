import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You — Tara Verma Haute Atelier",
  description: "Thank you for reaching out to Tara Verma. Your collaboration inquiry has been safely received by our atelier desk.",
};

export default function ThankYouPage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: COMPACT BANNER (SINGLE TITLE & BREADCRUMB ONLY) ── */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A]">
        <div className="relative w-full overflow-hidden h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/model-contact.jpg"
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
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Thank You</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              Thank You
            </h1>
          </div>
        </div>
      </section>

      {/* ── 02: SIMPLE & ATTRACTIVE CONFIRMATION CARD ── */}
      <section className="py-14 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative bg-[#111111] border border-[#222222] rounded-3xl p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-6 overflow-hidden">
          
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C9A96E]/10 blur-3xl rounded-full pointer-events-none" />

          {/* Golden Checkmark Crest */}
          <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-tr from-[#C9A96E]/25 via-[#DFC18A]/15 to-[#E5C583]/10 border border-[#C9A96E] flex items-center justify-center text-[#E5C583] text-3xl shadow-[0_0_35px_rgba(201,169,110,0.35)]">
            ✓
          </div>

          {/* Typography */}
          <div className="relative z-10 space-y-3">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Inquiry Received
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#DFC18A] font-light">
              &ldquo;Every sartorial transformation begins with a single conversation.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[#9CA3AF] font-light max-w-lg mx-auto leading-relaxed pt-1">
              Thank you for reaching out to Tara Verma Haute Atelier. Your consultation brief has been safely received. Our creative team will review your requirements and reach out within 24 hours.
            </p>
          </div>

          {/* Minimalist Contact Line */}
          <div className="relative z-10 pt-2 pb-1 text-xs font-mono text-[#777] flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-t border-[#1C1C1C]">
            <span>Direct Desk: <span className="text-[#E5C583]">xyz@gmail.com</span></span>
            <span className="hidden sm:inline">·</span>
            <span>Phone: <span className="text-[#E5C583]">+1 00000 00000</span></span>
          </div>

          {/* Attractive Action Button */}
          <div className="relative z-10 pt-3 flex items-center justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-xs uppercase tracking-[0.2em] px-9 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.55)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Return to Home</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
