"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#060606] border-t border-[#1F1F1F] py-20 md:py-28 relative overflow-hidden">
      {/* ── AMBIENT GOLD VIGNETTE ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A96E]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* ── DISTINCT VIP MEMBERSHIP CARD (Double gold frame, velvet luxury styling) ── */}
        <div className="border-2 border-[#C9A96E]/40 p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#111] via-[#0D0D0D] to-[#0A0A0A] shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative text-center">
          {/* 4 Ornate corner motifs */}
          <span className="absolute top-2 left-2 text-[#C9A96E] text-xs font-serif">✦</span>
          <span className="absolute top-2 right-2 text-[#C9A96E] text-xs font-serif">✦</span>
          <span className="absolute bottom-2 left-2 text-[#C9A96E] text-xs font-serif">✦</span>
          <span className="absolute bottom-2 right-2 text-[#C9A96E] text-xs font-serif">✦</span>

          {/* Inner border line */}
          <div className="absolute inset-2 border border-[#C9A96E]/20 pointer-events-none" />

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E] font-semibold font-[family-name:var(--font-inter)]">
              08 ✦ The Atelier Salon VIP Circle
            </span>
            <span className="w-8 h-px bg-[#C9A96E]" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Never Miss a{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#C9A96E]">
              Couture Moment
            </em>
          </h2>

          <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#B0A696] mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Weekly dress drops, body silhouette styling secrets, royal bridal inspiration aur private collection invitations seedhe aapke inbox mein.
          </p>

          {/* 3 VIP Member Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto text-left font-[family-name:var(--font-inter)] text-xs">
            <div className="bg-[#141414] border border-[#222] p-4">
              <span className="text-[#C9A96E] text-sm block mb-1">✦</span>
              <p className="text-white font-semibold text-[11px]">Private Stylist</p>
              <p className="text-[10px] text-[#777]">Direct WhatsApp advice</p>
            </div>
            <div className="bg-[#141414] border border-[#222] p-4">
              <span className="text-[#C9A96E] text-sm block mb-1">◈</span>
              <p className="text-white font-semibold text-[11px]">Secret Drops</p>
              <p className="text-[10px] text-[#777]">48h early runway access</p>
            </div>
            <div className="bg-[#141414] border border-[#222] p-4">
              <span className="text-[#C9A96E] text-sm block mb-1">◇</span>
              <p className="text-white font-semibold text-[11px]">15% Courtesy</p>
              <p className="text-[10px] text-[#777]">On your first bespoke dress</p>
            </div>
          </div>

          {subscribed ? (
            <div className="bg-[#141414] border border-[#C9A96E] p-6 max-w-md mx-auto text-center animate-fade-in">
              <span className="text-[#C9A96E] text-2xl block mb-2">✦</span>
              <p className="font-[family-name:var(--font-playfair)] text-xl text-white font-bold mb-1">
                Welcome to the Atelier Salon!
              </p>
              <p className="text-xs text-[#AAA] font-[family-name:var(--font-inter)] mb-3">
                Your 15% VIP discount voucher is:
              </p>
              <div className="bg-[#0A0A0A] border border-[#333] py-2 px-4 font-mono text-[#C9A96E] text-sm font-bold tracking-widest inline-block mb-4">
                MAISON15
              </div>
              <p className="text-[10.5px] text-[#777] font-[family-name:var(--font-inter)]">
                Applied automatically at atelier checkout or via our stylist WhatsApp.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-[#333] focus-within:border-[#C9A96E] transition-colors shadow-2xl"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for 15% off…"
                className="flex-1 bg-[#121212] text-white placeholder-[#555] px-5 py-4 text-xs font-[family-name:var(--font-inter)] outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#C9A96E] via-[#E2CCA3] to-[#C9A96E] text-[#0A0A0A] px-8 py-4 text-[10.5px] uppercase tracking-[0.22em] font-bold font-[family-name:var(--font-inter)] hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Join Salon ✦
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-6 text-[10px] text-[#555] uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
            <span>Weekly Style Edits</span>
            <span>·</span>
            <span>Zero Spam</span>
            <span>·</span>
            <Link href="/contact" className="hover:text-[#C9A96E] transition-colors">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
