"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { contactHero, contact } from "@/data/fashionData";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const router = useRouter();

  const categories = contact.categories;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: categories[0]?.label || "",
    subject: categories[0]?.subject || "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen overflow-x-hidden">
      
      {/* Hero Banner */}
      <section className="relative w-full py-2 sm:py-3 border-b border-[#1C1C1C]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={contactHero.image}
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
              <Link href="/" className="hover:text-white transition-colors">{contactHero.homeText}</Link>
              <span className="text-[#555]">/</span>
              <span className="text-white font-semibold">{contactHero.breadcrumb}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              {contactHero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Collaboration Form Section */}
      <section id="collaboration-form" className="py-6 md:py-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border-b border-[#1C1C1C]">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-5 space-y-1">
            <span className="text-[14px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block">
              {contact.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              {contact.sectionTitleStart}{" "}
              <em className="italic font-light text-[#E5C583]">
                {contact.sectionTitleHighlight}
              </em>
            </h2>
            <p className="text-sm italic text-[#B0A696] font-light max-w-xl mx-auto">
              {contact.sectionSubtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* Left Form */}
          <ScrollReveal variant="fade-left" className="lg:col-span-6 bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-4">
            
            <div className="space-y-1 border-b border-[#1C1C1C] pb-3">
              <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
                {contact.formBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {contact.formTitle}
              </h3>
            </div>

            {/* Category Pills */}
            <div className="space-y-1.5">
              <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                {contact.scopeLabel}
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
                  <span className="text-[#E5C583]">{contact.successTitle}</span>
                </div>
                <p className="text-[14px] text-[#A69C8E]">
                  {contact.successMessage}
                </p>
              </div>
            )}

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                    {contact.nameLabel} <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder={contact.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-email" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                    {contact.emailLabel} <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder={contact.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="contact-subject" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                  {contact.subjectLabel} <span className="text-[#C9A96E]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder={contact.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all placeholder:text-[#555]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="contact-message" className="block text-[14px] uppercase tracking-wider font-semibold text-[#D8CCA8]">
                  {contact.messageLabel} <span className="text-[#C9A96E]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  required
                  placeholder={contact.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#161616] border border-[#2B2B2B] focus:border-[#C9A96E] focus:bg-[#1A1A1A] outline-none text-[14px] text-white transition-all resize-none placeholder:text-[#555]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] disabled:opacity-50 text-[#0A0A0A] py-3.5 px-6 rounded-full text-[14px] uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.55)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>{isSubmitting ? contact.submittingText : contact.submitButtonText}</span>
                <span>→</span>
              </button>

            </form>

          </ScrollReveal>

          {/* Right Portrait */}
          <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-6 relative group flex flex-col">
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-[#C9A96E]/40 bg-[#141414] shadow-2xl flex-1">
              <Image
                src={contact.contactImage}
                alt={contact.contactImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectPosition: "50% 15%" }}
                className="object-cover filter brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </ScrollReveal>

        </div>

      </section>

      {/* Flagship Studio Map */}
      <section className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 pb-3 border-b border-[#1C1C1C]">
            <div>
              <span className="text-[14px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold block mb-0.5">
                {contact.mapBadge}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                {contact.mapTitleStart}{" "}
                <em className="italic font-light text-[#E5C583]">
                  {contact.mapTitleHighlight}
                </em>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-[14px] text-[#AAA]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{contact.flagshipCity}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Google Maps Frame */}
        <ScrollReveal variant="zoom-in" delay={100}>
          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-3xl overflow-hidden border border-[#2B2B2B] shadow-2xl bg-[#141414]">
            <iframe
              title={contact.flagshipAddress}
              src={contact.mapEmbedUrl}
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
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#C9A96E] font-bold block">
                  {contact.pinBadge}
                </span>
                <p className="text-sm font-bold text-white">
                  {contact.flagshipAddress}
                </p>
              </div>
              <a
                href={contact.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A96E] to-[#DFC18A] hover:brightness-110 text-[#0A0A0A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all shadow-sm shrink-0 cursor-pointer"
              >
                {contact.directionsText}
              </a>
            </div>
          </div>
        </ScrollReveal>

      </section>

    </div>
  );
}
