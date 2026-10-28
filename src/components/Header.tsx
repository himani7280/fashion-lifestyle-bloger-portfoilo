"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, fonts } from "@/data/fashionData";

const NAV_LINKS = navigation.navLinks.map((item) => ({
  name: item.name,
  href: item.path,
}));

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

  const scrollToTopImmediately = () => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Reset scroll on route change
  useEffect(() => {
    scrollToTopImmediately();

    const t0 = setTimeout(() => {
      setMobileMenuOpen(false);
      scrollToTopImmediately();
    }, 0);
    const t1 = setTimeout(scrollToTopImmediately, 30);
    const t2 = setTimeout(scrollToTopImmediately, 100);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    scrollToTopImmediately();
    setTimeout(scrollToTopImmediately, 30);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full max-w-full overflow-x-clip py-1 sm:py-1.5 px-4 sm:px-6 md:px-8 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222222] shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            : "bg-[#0A0A0A] border-b border-[#1A1A1A]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <BrandLogo size="md" href="/" />
          </div>

          {/* Desktop Navigation */}
          <nav style={{ fontFamily: fonts.body }} className="hidden xl:flex items-center gap-8 xl:gap-9 2xl:gap-12 text-[14px] uppercase tracking-[0.14em] font-medium">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`transition-colors relative py-1.5 ${
                    isActive
                      ? "text-[#C9A96E] font-semibold"
                      : "text-[#C4BCB3] hover:text-[#E5C583]"
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

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href={navigation.button.link}
              onClick={handleNavClick}
              style={{ fontFamily: fonts.body }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] px-5 sm:px-6 py-2 rounded-full text-[13px] sm:text-[14px] uppercase tracking-[0.14em] font-bold transition-all duration-300 shadow-[0_4px_15px_rgba(201,169,110,0.25)] hover:shadow-[0_6px_25px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              {navigation.button.text}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Side Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="xl:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Side Drawer */}
          <div className="xl:hidden fixed top-0 bottom-0 right-0 z-50 w-72 sm:w-80 bg-[#0E0E0E] border-l border-[#262626] p-6 flex flex-col justify-between shadow-[-10px_0_35px_rgba(0,0,0,0.85)] overflow-y-auto">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#222]">
                <BrandLogo size="sm" href="/" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#181818] border border-[#333] hover:border-[#C9A96E] text-[#C9A96E] hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav style={{ fontFamily: fonts.body }} className="flex flex-col gap-1 pt-4 text-[14px] font-medium uppercase tracking-[0.14em]">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`py-3.5 border-b border-[#1A1A1A] flex items-center justify-between transition-colors ${
                      pathname === item.href
                        ? "text-[#C9A96E] font-bold"
                        : "text-[#C4BCB3] hover:text-[#E5C583]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-sm text-[#C9A96E]">→</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-[#222] space-y-3">
              <Link
                href={navigation.button.link}
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] py-3.5 rounded-full text-center text-[14px] uppercase tracking-[0.14em] font-bold shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_25px_rgba(201,169,110,0.5)] transition-all cursor-pointer"
              >
                {navigation.button.text}
              </Link>
              <p style={{ fontFamily: fonts.mono }} className="text-[14px] font-normal text-[#888] text-center">
                {navigation.locationsText}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
