import Image from "next/image";

interface LookCardProps {
  number: string;
  category: string;
  title: string;
  image: string;
  pieces: string[];
  occasion: string;
  tip: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function LookCard({
  number,
  category,
  title,
  image,
  pieces,
  occasion,
  tip,
  isActive = false,
  onClick,
}: LookCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="relative aspect-[3/4]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="25vw"
            className="object-cover object-top filter brightness-[0.95] group-hover:brightness-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
          {/* Active gold border */}
          {isActive && (
            <div className="absolute inset-0 border border-[#C9A96E]/60 pointer-events-none" />
          )}
        </div>
        {/* Number */}
        <div className="absolute top-4 left-4">
          <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white/20 select-none">
            {number}
          </span>
        </div>
        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-[family-name:var(--font-inter)] font-semibold">
            {category}
          </span>
          <h4 className="font-[family-name:var(--font-playfair)] text-base font-bold text-white mt-0.5 leading-snug">
            {title}
          </h4>
          {isActive && (
            <div className="mt-3 space-y-1.5">
              {pieces.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <span className="w-2 h-px bg-[#C9A96E]" />
                  <span className="text-[10px] text-white/70 font-[family-name:var(--font-inter)]">{p}</span>
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-[10px] text-[#C9A96E] uppercase tracking-widest font-[family-name:var(--font-inter)] mb-1">
                  Styling Tip
                </p>
                <p className="text-[11px] text-white/60 font-[family-name:var(--font-cormorant)] italic leading-snug">
                  {tip}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Occasion tag below */}
      <div className="mt-3 flex items-center gap-2">
        <span className="w-3 h-px bg-[#C9A96E]" />
        <span className="text-[10px] uppercase tracking-widest text-[#888] font-[family-name:var(--font-inter)]">
          {occasion}
        </span>
      </div>
    </div>
  );
}
