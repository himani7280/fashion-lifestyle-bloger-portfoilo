"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function EditorialContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "Bespoke Styling",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please provide your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Please share a brief note about your inquiry.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate instant client-side feedback without pretend server lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        interest: "Bespoke Styling",
        message: "",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FBF9F5] text-[#141312] border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ── SECTION HEADER ── */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.35em] uppercase font-[family-name:var(--font-inter)] text-[#A38760] font-semibold">
              Private Concierge &amp; Inquiries
            </span>
            <span className="w-10 h-[1px] bg-[#C5A880]/60" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl font-normal leading-[1.1] text-[#141312]">
            LET&apos;S CREATE{" "}
            <span className="font-[family-name:var(--font-cormorant)] italic font-light text-[#A38760]">
              SOMETHING BEAUTIFUL.
            </span>
          </h2>

          <p className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl italic text-[#59534B] font-light">
            We welcome inquiries for bespoke wardrobe curation, private showroom viewings, and high-fashion editorial collaborations.
          </p>
        </div>

        {/* ── TWO-COLUMN EDITORIAL FORM & CONCIERGE INFO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Form Area (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4EFEB] p-8 sm:p-12 border border-[#E8E2D8] shadow-[0_8px_30px_rgba(20,19,18,0.03)]">
            {isSuccess ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EAD8BF] text-[#A38760] flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#141312]">
                  Thank You for Reaching Out
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#59534B] max-w-md mx-auto">
                  Your inquiry has been received. Our concierge team will review your message and connect with you directly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs uppercase tracking-[0.24em] font-semibold text-[#141312] border-b border-[#141312] pb-1 hover:text-[#A38760] hover:border-[#A38760] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-inter)] font-semibold text-[#59534B] block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full bg-[#FBF9F5] border ${
                      errors.name ? "border-red-400" : "border-[#E8E2D8]"
                    } focus:border-[#141312] text-sm text-[#141312] p-4 outline-none transition-colors font-[family-name:var(--font-inter)]`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-600 font-[family-name:var(--font-inter)] block">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-inter)] font-semibold text-[#59534B] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className={`w-full bg-[#FBF9F5] border ${
                      errors.email ? "border-red-400" : "border-[#E8E2D8]"
                    } focus:border-[#141312] text-sm text-[#141312] p-4 outline-none transition-colors font-[family-name:var(--font-inter)]`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-600 font-[family-name:var(--font-inter)] block">{errors.email}</span>
                  )}
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-inter)] font-semibold text-[#59534B] block">
                    Inquiry Nature
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#FBF9F5] border border-[#E8E2D8] focus:border-[#141312] text-sm text-[#141312] p-4 outline-none transition-colors font-[family-name:var(--font-inter)]"
                  >
                    <option value="Bespoke Styling">Bespoke Styling Consultation</option>
                    <option value="Couture Viewing">Private Showroom Viewing</option>
                    <option value="Editorial Collaboration">Editorial &amp; Runway Collaboration</option>
                    <option value="Brand Partnership">Brand Ambassadorship</option>
                    <option value="General Inquiry">General Atelier Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] font-[family-name:var(--font-inter)] font-semibold text-[#59534B] block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your occasion, preferred collection, or concept..."
                    className={`w-full bg-[#FBF9F5] border ${
                      errors.message ? "border-red-400" : "border-[#E8E2D8]"
                    } focus:border-[#141312] text-sm text-[#141312] p-4 outline-none transition-colors font-[family-name:var(--font-inter)]`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 font-[family-name:var(--font-inter)] block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#141312] text-[#FBF9F5] hover:bg-[#A38760] transition-colors py-4 px-8 text-xs tracking-[0.28em] uppercase font-[family-name:var(--font-inter)] font-bold flex items-center justify-center gap-3 shadow-md"
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit Inquiry ✦"}</span>
                    {!isSubmitting && <ArrowRight size={14} />}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Concierge Details & Showroom (5 cols) */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#141312]">
                Atelier Showroom &amp; Appointments
              </h3>
              
              <div className="space-y-4 text-xs font-[family-name:var(--font-inter)] text-[#59534B]">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#A38760] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white bg-[#141414] px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold">USA Flagship Atelier</span>
                    <p className="text-sm font-medium text-[#141312] mt-1">520 Broadway, SoHo</p>
                    <p className="text-xs text-[#736B63]">New York, NY 10012, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#A38760] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#8C8479] block">Private Concierge</span>
                    <span className="text-sm font-semibold text-[#141312] font-mono">+1 00000 00000</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#A38760] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#8C8479] block">Written Correspondences</span>
                    <span className="text-sm font-semibold text-[#141312]">xyz@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="pt-8 border-t border-[#E8E2D8] space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C8479] font-semibold block">
                Digital Portfolios &amp; Presences
              </span>
              <div className="flex items-center gap-4 text-xs font-[family-name:var(--font-inter)]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 border border-[#E8E2D8] hover:border-[#141312] bg-[#F4EFEB] hover:text-[#A38760] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[10px] tracking-wider uppercase font-semibold">Instagram</span>
                </a>
                <a
                  href="https://vogue.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 border border-[#E8E2D8] hover:border-[#141312] bg-[#F4EFEB] hover:text-[#A38760] transition-colors"
                  aria-label="Vogue Profile"
                >
                  <Globe size={16} />
                  <span className="text-[10px] tracking-wider uppercase font-semibold">Vogue Profile</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
