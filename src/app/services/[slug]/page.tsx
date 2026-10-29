import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceDetailsList, serviceDetailsData, ServiceDetailItem, fonts } from "@/data/fashionData";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICE_DETAILS: Record<string, ServiceDetailItem> = Object.fromEntries(
  serviceDetailsList.map((item) => [item.id, item])
);

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return { title: "Suite Not Found" };
  return {
    title: `${detail.title} — ${detail.suiteNumber} | Tara Verma Atelier`,
    description: detail.leadDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}

async function ServiceDetailContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className={`${fonts.body} bg-[#0A0A0A] text-[#F5F0E8] font-normal min-h-screen overflow-x-hidden`}>
      
      {/* Hero Banner */}
      <section className="relative w-full py-[12px] border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="relative w-full overflow-hidden h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-[#0A0A0A] shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src={detail.heroImage}
              alt={detail.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_15%] filter brightness-[0.92] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 text-center space-y-2">
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[12px] md:text-[14px] uppercase tracking-[0.08em] sm:tracking-[0.15em] md:tracking-[0.2em] text-[#C9A96E] font-medium bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-[#C9A96E]/40 shadow-lg max-w-full whitespace-nowrap overflow-hidden">
              <Link href="/" className="hover:text-white transition-colors shrink-0">{serviceDetailsData.homeText}</Link>
              <span className="text-[#555] shrink-0">/</span>
              <Link href="/services" className="hover:text-white transition-colors shrink-0">{serviceDetailsData.servicesBreadcrumb}</Link>
              <span className="text-[#555] shrink-0">/</span>
              <span className="text-white font-semibold truncate">{detail.title}</span>
            </div>

            <h1 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
              {detail.title.split(" ").slice(0, -1).join(" ")}{" "}
              <em className="font-normal italic bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] bg-clip-text text-transparent">
                {detail.title.split(" ").slice(-1)[0]}
              </em>
            </h1>
          </div>
        </div>
      </section>

      {/* Editorial Feature Split */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full my-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Portrait */}
            <ScrollReveal variant="fade-left" className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#C9A96E]/50 bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2.5">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161616]">
                  <Image
                    src={detail.heroImage}
                    alt={detail.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[50%_15%] filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />

                  {/* Bottom Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-3 bg-[#0A0A0A]/90 backdrop-blur-md rounded-2xl border border-[#333] flex items-center justify-between">
                    <span className={`${fonts.mono} text-[14px] uppercase text-[#C9A96E] font-semibold`}>
                      {detail.subtitle}
                    </span>
                    <span className={`${fonts.mono} text-[14px] uppercase text-[#888]`}>
                      {serviceDetailsData.floatingBadge}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Prelude & Specs */}
            <ScrollReveal variant="fade-right" delay={120} className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="space-y-2">
                <div className={`${fonts.mono} inline-flex items-center gap-2 bg-[#141414] text-[#E5C583] text-[14px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#C9A96E]/40`}>
                  <span>{serviceDetailsData.preludeBadge}</span>
                </div>
                <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                  {detail.title}
                </h2>
              </div>

              {/* Lead Description */}
              {detail.leadDescription && (
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light">
                  {detail.leadDescription}
                </p>
              )}

              {/* Quote */}
              {detail.taraQuote && (
                <div className="border-l-2 border-[#C9A96E] pl-4 py-1.5 space-y-1">
                  <p className="text-base sm:text-lg italic text-[#DFC18A] leading-relaxed font-light">
                    &ldquo;{detail.taraQuote}&rdquo;
                  </p>
                  <span className={`${fonts.mono} text-[14px] uppercase tracking-widest text-[#888] block`}>
                    {serviceDetailsData.quoteCredit}
                  </span>
                </div>
              )}

              {/* Author Byline */}
              <div className="inline-flex items-center gap-3.5 bg-transparent w-fit pt-1">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#C9A96E]/50 bg-[#161616] shrink-0">
                  <Image
                    src={serviceDetailsData.authorAvatar}
                    alt={serviceDetailsData.authorName}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[14px] font-bold text-white block leading-tight">{serviceDetailsData.authorName}</span>
                  <span className={`${fonts.mono} text-[14px] uppercase tracking-wider text-[#A69C8E] block`}>
                    {serviceDetailsData.authorRole}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={`/contact?service=${detail.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#DFC18A] to-[#E5C583] hover:from-[#DFC18A] hover:to-[#E5C583] text-[#0A0A0A] font-semibold text-[14px] uppercase tracking-[0.12em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_6px_30px_rgba(201,169,110,0.5)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer whitespace-nowrap max-w-full"
                >
                  <span>{serviceDetailsData.ctaButtonText}</span>
                  <span>→</span>
                </Link>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {detail.sections && detail.sections.length > 0 && (
        <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
            {detail.sections.map((section, sIdx) => (
              <ScrollReveal key={sIdx} variant="fade-up" className="space-y-2.5 w-full">
                
                {/* Section Heading */}
                <div className="space-y-1">
                  <h3 className={`${fonts.heading} text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug`}>
                    {section.heading}
                  </h3>
                  <div className="w-14 h-[2px] bg-[#C9A96E]" />
                </div>

                {/* Section Text */}
                <p className="text-sm sm:text-base text-[#C4BCB3] leading-relaxed font-light max-w-4xl">
                  {section.text}
                </p>

                {/* Wide Plate */}
                {section.wideImage && (
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[420px] w-full rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl my-[12px] flex items-center justify-center">
                    <Image
                      src={section.wideImage}
                      alt={section.heading}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      className="object-cover object-[50%_18%] filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className={`${fonts.mono} absolute bottom-3 left-4 text-[14px] tracking-widest text-white/80 uppercase`}>
                      {serviceDetailsData.plateCaption}
                    </div>
                  </div>
                )}

                {/* Dual Image Grid */}
                {section.images && section.images.length === 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-[12px] w-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[0]}
                        alt={section.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover object-[50%_15%] filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-xl flex items-center justify-center">
                      <Image
                        src={section.images[1]}
                        alt={section.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover object-[50%_15%] filter brightness-[0.96] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                )}

              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Core Principles */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto w-full my-[12px]">
          <ScrollReveal variant="fade-up">
            <div className="bg-[#0E0E0E] rounded-3xl border border-[#262626] p-4 sm:p-6 space-y-3.5 shadow-2xl w-full">
              <div className="flex items-center justify-between border-b border-[#1E1E1E] pb-2.5">
                <span className={`${fonts.mono} text-[14px] uppercase tracking-[0.28em] text-[#C9A96E] font-bold`}>
                  {serviceDetailsData.principlesSection.badgeLeft}
                </span>
                <span className={`${fonts.mono} text-[14px] uppercase tracking-wider text-[#777]`}>
                  {serviceDetailsData.principlesSection.badgeRight}
                </span>
              </div>

              <div className="text-center max-w-xl mx-auto space-y-1">
                <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                  {serviceDetailsData.principlesSection.title}
                </h2>
                <p className="text-sm italic text-[#AAA]">
                  {serviceDetailsData.principlesSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {serviceDetailsData.principlesSection.items.map((item, idx) => (
                  <ScrollReveal key={idx} variant="zoom-in" delay={idx * 100}>
                    <div className="bg-[#141414] p-4 rounded-2xl border border-[#222] hover:border-[#C9A96E]/50 transition-colors space-y-1.5 h-full">
                      <span className={`${fonts.mono} text-[14px] uppercase tracking-widest text-[#E5C583] block`}>
                        {item.rule}
                      </span>
                      <h4 className={`${fonts.heading} font-bold text-base text-white`}>
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#999] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full py-[12px] px-4 sm:px-6 md:px-8 bg-[#0A0A0A]">
        <ScrollReveal variant="fade-up">
          <div className="max-w-7xl mx-auto w-full space-y-4 my-[12px]">
            <div className="flex items-center justify-between">
              <h2 className={`${fonts.heading} text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight`}>
                {serviceDetailsData.moreHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services
                .filter((s) => s.id !== detail.id)
                .slice(0, 2)
                .map((rs) => (
                  <Link
                    key={rs.id}
                    href={`/services/${rs.id}`}
                    className="group bg-[#111] rounded-2xl border border-[#222] hover:border-[#C9A96E] p-4 flex gap-4 items-center transition-all shadow-md"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#161616]">
                      <Image
                        src={rs.image}
                        alt={rs.title}
                        fill
                        sizes="80px"
                        className="object-cover object-[50%_15%] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className={`${fonts.mono} text-[14px] uppercase tracking-wider text-[#C9A96E] block`}>
                        ✦ {rs.subtitle}
                      </span>
                      <h4 className={`${fonts.heading} text-sm sm:text-base font-bold text-white group-hover:text-[#E5C583] transition-colors line-clamp-2 leading-snug`}>
                        {rs.title}
                      </h4>
                      <span className={`${fonts.mono} text-[14px] text-[#A69C8E] block`}>
                        {rs.desc?.slice(0, 70)}...
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
