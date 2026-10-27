import React from "react";
import PersonalHero from "@/components/PersonalHero";
import AboutSpotlight from "@/components/AboutSpotlight";
import HomeGallery from "@/components/HomeGallery";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Tara Verma — Fashion Style & Luxury Lifestyle",
  description:
    "Official high-fashion and lifestyle portfolio of Tara Verma. High-fashion styling, wardrobe curation, global aesthetics, and bespoke editorial direction.",
};

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      {/* 01: Hero Banner Section */}
      <PersonalHero />

      {/* 02: About Spotlight Section (Concise with Contact CTA) */}
      <AboutSpotlight />

      {/* 03: 2-Row Curated Style Gallery */}
      <HomeGallery />

      {/* 04: What Visionary Houses Say */}
      <TestimonialsSection />
    </div>
  );
}
