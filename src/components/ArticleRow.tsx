import Image from "next/image";

interface ArticleRowProps {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  reverse?: boolean;
  featured?: boolean;
}

export default function ArticleRow({
  category,
  date,
  title,
  excerpt,
  image,
  readTime,
  reverse = false,
  featured = false,
}: ArticleRowProps) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center group cursor-pointer ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <div className={`${featured ? "lg:col-span-7" : "lg:col-span-5"} relative overflow-hidden ${reverse ? "[direction:ltr]" : ""}`}>
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-top filter brightness-[0.95] group-hover:brightness-105 transition-all duration-500"
          />
          {/* Gold overlay shimmer on hover */}
          <div className="absolute inset-0 bg-[#C9A96E]/0 group-hover:bg-[#C9A96E]/5 transition-colors duration-500" />
        </div>
        {/* Category badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#0A0A0A] text-[#C9A96E] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 font-[family-name:var(--font-inter)] font-semibold">
              ✦ Featured
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`${featured ? "lg:col-span-5" : "lg:col-span-7"} space-y-4 ${reverse ? "[direction:ltr]" : ""}`}>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] font-[family-name:var(--font-inter)]">
          <span className="text-[#C9A96E] font-semibold">{category}</span>
          <span className="text-[#444]">·</span>
          <span className="text-[#888]">{date}</span>
          <span className="text-[#444]">·</span>
          <span className="text-[#888]">{readTime} read</span>
        </div>

        <h3
          className={`font-[family-name:var(--font-playfair)] font-bold text-white leading-snug group-hover:text-[#C9A96E] transition-colors duration-300 ${
            featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
          }`}
        >
          {title}
        </h3>

        <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#A89880] leading-relaxed font-light">
          {excerpt}
        </p>

        <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-[family-name:var(--font-inter)] text-white border-b border-[#C9A96E] pb-0.5 hover:text-[#C9A96E] transition-colors mt-2">
          Read More
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}
