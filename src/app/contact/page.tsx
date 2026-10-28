"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Brand Campaign",
    subject: "Fashion Brand & Campaign Collaboration",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { label: "Brand Campaign", subject: "Fashion Brand & Campaign Collaboration" },
    { label: "Editorial & Photo", subject: "Editorial Direction & Photoshoot Collaboration" },
    { label: "Ambassadorship", subject: "Global Brand Ambassador & Runway Booking" },
    { label: "Bespoke Styling", subject: "Bespoke Wardrobe & Red Carpet Curation" },
    { label: "General Inquiry", subject: "General Collaboration & Press Inquiry" },
  ];

  const handleSelectCategory = (cat: { label: string; subject: string }) => {
    setFormData((prev) => ({
      ...prev,
      category: cat.label,
      subject: cat.subject,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/thank-you");
    }, 400);
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden font-[family-name:var(--font-poppins)]">
      
      {/* ── 01: BREADCRUMB BANNER IMAGE HERO ── */}
      <section className="relative w-full py-2 sm:py-3 border-b border-[#1C1C1C]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/model-blazer.jpg"
              alt="Tara Verma Contact"
              fill
              priority
              sizes="100vw"
              style={{ objectPosition: "50% 20%" }}
              className="object-cover filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/40 shadow-lg">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">Contact</span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          COLLABORATION INQUIRY: LEFT = FORM, RIGHT = GORGEOUS TARA IMAGE
          ══════════════════════════════════════════════════════════════ */}

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2: LEFT = COMPACT FORM, RIGHT = GORGEOUS TARA IMAGE (ALIGNED LEFT-RIGHT)
          ══════════════════════════════════════════════════════════════ */}
      <section id="collaboration-form" className="py-6 md:py-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 space-y-1">
          <span className="text-[14px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block">
            ✦ Direct Collaboration Desk
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            Send an Inquiry to{" "}
            <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
              Tara Verma
            </em>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-sm italic text-[#B0A696] font-light max-w-xl mx-auto">
            Directly connect with Tara Verma for wardrobe styling, red-carpet appearances, or campaign direction.
          </p>
        </div>

        {/* 2-Column Balanced Grid: Left = Compact Form (6 cols), Right = Gorgeous Image of Tara (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* LEFT: COMPACT FORM (6 cols) */}
          <div className="lg:col-span-6 bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-4">
            
            <div className="space-y-1 border-b border-[#1C1C1C] pb-3">
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
                ✦ Project Specification
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
                Collaboration Brief
              </h3>
            </div>

            {/* Category Quick Select Pills */}
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                Select Scope:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => handleSelectCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium transition-all cursor-pointer ${
                      formData.category === cat.label
                        ? "bg-gradient-to-r from-[#C9A96E] to-[#E5C583] text-[#0A0A0A] font-bold shadow-md"
                        : "bg-[#161616] border border-[#2B2B2B] text-[#A69C8E] hover:border-[#C9A96E] hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submission Alert */}
            {submitted && (
              <div className="p-4 bg-[#161616] border border-[#C9A96E] rounded-2xl space-y-1 animate-fade-in shadow-[0_0_20px_rgba(201,169,110,0.25)]">
                <div className="flex items-center gap-2 text-white font-bold text-[14px]">
                  <span className="w-5 h-5 rounded-full bg-[#C9A96E] text-[#0A0A0A] flex items-center justify-center text-[14px] font-black">
                    ✓
                  </span>
                  <span className="text-[#E5C583]">Inquiry Successfully Dispatched</span>
                </div>
                <p className="text-[14px] text-[#A69C8E]">
                  Tara and her atelier management will respond within 24 business hours.
                </p>
              </div>
            )}

            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                    Your Name / Maison <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Maya Sen"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                    Email Address <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="e.g. maya@luxe.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="space-y-1">
                <label htmlFor="contact-subject" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                  Collaboration Subject <span className="text-[#C9A96E]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="e.g. Red Carpet Wardrobe Styling / Editorial Campaign"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-1">
                <label htmlFor="contact-message" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                  Project Scope &amp; Dates <span className="text-[#C9A96E]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Share aesthetic vision, dates, location, and key deliverables..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all resize-none placeholder:text-[#555]"
                />
              </div>

              {/* Unified Luxury Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] disabled:opacity-50 text-[#0A0A0A] py-3.5 px-6 rounded-full text-[14px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.55)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>{isSubmitting ? "Dispatching..." : "Submit Inquiry ✦"}</span>
                <span>→</span>
              </button>

            </form>

          </div>

          {/* RIGHT: GORGEOUS TARA VERMA IMAGE (6 cols - EQUAL HEIGHT & ALIGNED) */}
          <div className="lg:col-span-6 relative group flex flex-col">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-[#C9A96E]/40 bg-[#141414] shadow-2xl flex-1">
              <Image
                src="/images/model-contact.jpg"
                alt="Tara Verma — Direct Atelier Booking"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectPosition: "50% 15%" }}
                className="object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3: FULL WIDTH USA STUDIO GOOGLE MAP (AT THE BOTTOM)
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 pb-3 border-b border-[#1C1C1C]">
          <div>
            <span className="text-[14px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block mb-0.5 font-mono">
              ✦ Global Atelier Presence · USA Flagship
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Flagship Atelier &amp;{" "}
              <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#E5C583]">
                Showroom
              </em>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-mono text-[#AAA]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SoHo, New York</span>
          </div>
        </div>

        {/* Full Width Google Maps Frame (Reduced Height) */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-3xl overflow-hidden border border-[#2B2B2B] shadow-2xl bg-[#141414]">
          <iframe
            title="Tara Verma USA Studio Map - SoHo New York"
            src="https://maps.google.com/maps?q=520%20Broadway%2C%20SoHo%2C%20New%20York%2C%20NY%2010012%2C%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(95%) brightness(90%)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          {/* Floating Map Pin Badge */}
          <div className="absolute bottom-3 left-3 right-3 sm:left-5 sm:right-auto sm:max-w-md p-3.5 bg-[#0A0A0A]/95 backdrop-blur-md rounded-2xl border border-[#C9A96E]/50 shadow-2xl flex items-center justify-between gap-4">
            <div>
              <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#C9A96E] font-bold block font-mono">
                ✦ Flagship Atelier
              </span>
              <p className="font-[family-name:var(--font-playfair)] text-sm font-bold text-white">
                520 Broadway, SoHo · New York, NY 10012
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=520+Broadway,+New+York,+NY+10012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] to-[#DFC18A] hover:brightness-110 text-[#0A0A0A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all shadow-sm shrink-0 cursor-pointer"
            >
              Directions ↗
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
