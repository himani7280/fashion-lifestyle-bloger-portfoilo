"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full max-w-full overflow-x-clip py-3 px-4 sm:px-6 md:px-8 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            : "bg-[#0A0A0A] border-b border-[#1A1A1A]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          
          {/* Tara Verma Logo */}
          <div className="shrink-0">
            <BrandLogo name="Tara Verma" subtitle="FASHION & LIFESTYLE" size="md" href="/" />
          </div>

          {/* Desktop Navigation Links — Responsive spacing without overflow */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[11.5px] uppercase tracking-[0.18em] font-[family-name:var(--font-poppins)] font-medium">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-[#C9A96E] font-semibold"
                      : "text-[#A69C8E] hover:text-[#E5C583]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A96E] to-[#E5C583] rounded-full shadow-[0_0_8px_rgba(201,169,110,0.6)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Direct Contact Button (Desktop) */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] px-5 sm:px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold font-[family-name:var(--font-poppins)] transition-all duration-300 shadow-[0_4px_15px_rgba(201,169,110,0.25)] hover:shadow-[0_6px_25px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Contact Us ✦
            </Link>
          </div>

          {/* Mobile Menu Hamburger (Visible below xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#C9A96E] hover:text-[#E5C583] transition-colors focus:outline-none shrink-0 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU SIDE DRAWER (Below xl) ── */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Off-canvas Side Drawer (Right side) */}
          <div className="xl:hidden fixed top-0 bottom-0 right-0 z-50 w-72 sm:w-80 bg-[#0E0E0E] border-l border-[#262626] p-6 flex flex-col justify-between shadow-[-10px_0_35px_rgba(0,0,0,0.85)] overflow-y-auto">
            {/* Drawer Header with Title and Close Button */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#222]">
                <div className="space-y-0.5">
                  <span className="font-[family-name:var(--font-playfair)] text-sm font-bold text-white tracking-wide block">
                    TARA VERMA
                  </span>
                  <span className="text-[8.5px] font-mono tracking-widest text-[#C9A96E] block">
                    HAUTE COUTURE &amp; LIFESTYLE
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#181818] border border-[#333] hover:border-[#C9A96E] text-[#C9A96E] hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-1 pt-4 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-poppins)]">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 border-b border-[#1A1A1A] flex items-center justify-between transition-colors ${
                      pathname === item.href
                        ? "text-[#C9A96E] font-bold"
                        : "text-[#A69C8E] hover:text-[#E5C583]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-[#C9A96E]">→</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer with Contact Us CTA */}
            <div className="pt-6 border-t border-[#222] space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] py-3 rounded-full text-center text-xs uppercase tracking-[0.2em] font-bold shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_25px_rgba(201,169,110,0.5)] transition-all cursor-pointer"
              >
                Contact Us ✦
              </Link>
              <p className="text-[9px] text-[#666] text-center font-mono">
                PARIS · MILAN · NEW YORK
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
