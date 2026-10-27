import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  id: string;
  label: string;
  subtitle: string;
  icon?: string;
  image: string;
  href: string;
  count: string;
  variants?: { name: string; color?: string }[];
}

export default function CategoryCard({ label, subtitle, icon = "✦", image, href, count, variants }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden block cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top transition-all duration-700 ease-out filter brightness-[0.95] group-hover:brightness-105 opacity-90 group-hover:opacity-100"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        {/* Icon + Count */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#C9A96E] text-base">{icon}</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-[family-name:var(--font-inter)] bg-white/10 backdrop-blur-sm px-2 py-0.5">
            {count}
          </span>
        </div>
        {/* Label */}
        <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white leading-snug mb-1">
          {label}
        </h3>
        {/* Subtitle — slides up on hover */}
        <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.15em] text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {subtitle}
        </p>
        {variants && variants.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            {variants.map((v, i) => (
              <span
                key={i}
                title={v.name}
                className="w-2.5 h-2.5 rounded-full border border-white/20"
                style={{ backgroundColor: v.color || "#C9A96E" }}
              />
            ))}
          </div>
        )}
        {/* Gold underline */}
        <div className="mt-2 w-6 h-[1.5px] bg-[#C9A96E] group-hover:w-12 transition-all duration-500" />
      </div>
    </Link>
  );
}
