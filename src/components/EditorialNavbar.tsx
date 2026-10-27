"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function EditorialNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Collections", href: "#collections" },
    { name: "The Brand", href: "#brand" },
    { name: "Lookbook", href: "#lookbook" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E2D8] py-4 shadow-[0_2px_20px_rgba(20,19,18,0.03)]"
            : "bg-gradient-to-b from-[#141312]/60 via-[#141312]/20 to-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* ── BRAND WORDMARK (LEFT) ── */}
          <Link
            href="#hero"
            className="group flex flex-col items-start transition-opacity hover:opacity-90"
          >
            <span
              className={`font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase leading-none transition-colors ${
                isScrolled ? "text-[#141312]" : "text-white"
              }`}
            >
              TARA VERMA
            </span>
            <span
              className={`text-[8px] sm:text-[9px] tracking-[0.45em] uppercase font-[family-name:var(--font-inter)] font-semibold mt-1 transition-colors ${
                isScrolled ? "text-[#8C8479]" : "text-[#E8E2D8]/80"
              }`}
            >
              FASHION &amp; LIFESTYLE
            </span>
          </Link>

          {/* ── DESKTOP NAVIGATION (CENTER) ── */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-[0.24em] uppercase font-[family-name:var(--font-inter)] font-medium transition-colors editorial-link ${
                  isScrolled
                    ? "text-[#403B35] hover:text-[#141312]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ── RIGHT ACTION CTA ── */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#contact"
              className={`text-[10px] tracking-[0.25em] uppercase font-[family-name:var(--font-inter)] font-semibold px-5 py-2.5 transition-all duration-300 border ${
                isScrolled
                  ? "border-[#141312] text-[#141312] hover:bg-[#141312] hover:text-[#FBF9F5]"
                  : "border-white/60 text-white hover:bg-white hover:text-[#141312]"
              }`}
            >
              Inquire Look
            </a>
          </div>

          {/* ── MOBILE HAMBURGER BUTTON ── */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-[#141312]" : "text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* ── POLISHED MOBILE NAVIGATION DRAWER ── */}
      <div
        className={`fixed inset-0 z-40 bg-[#141312]/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FBF9F5] shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Top */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E8E2D8]">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-lg font-bold tracking-[0.16em] uppercase text-[#141312] block">
                  TARA VERMA
                </span>
                <span className="text-[8px] tracking-[0.4em] uppercase text-[#8C8479] font-medium block">
                  FASHION &amp; LIFESTYLE
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#141312] hover:text-[#C5A880] transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 pt-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between text-sm tracking-[0.22em] uppercase font-[family-name:var(--font-inter)] text-[#2B2824] hover:text-[#C5A880] transition-colors py-2 border-b border-[#F0EAE1]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[10px] text-[#A38760] font-mono">0{idx + 1}</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-[#A38760] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom */}
          <div className="pt-8 border-t border-[#E8E2D8] space-y-4 text-center">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-[#141312] text-[#FBF9F5] py-3 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#C5A880] transition-colors"
            >
              Private Consultation ✦
            </a>
            <p className="text-[10px] tracking-[0.2em] text-[#8C8479] uppercase">
              Autumn / Winter Couture · 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
