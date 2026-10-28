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
      {/* Hero Banner */}
      <PersonalHero />

      {/* About Spotlight */}
      <AboutSpotlight />

      {/* Curated Gallery */}
      <HomeGallery />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
