interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} space-y-3 mb-12 md:mb-16`}>
      <span
        className={`text-[10px] uppercase tracking-[0.35em] font-semibold font-[family-name:var(--font-inter)] block ${
          light ? "text-[#C9A96E]" : "text-[#C9A96E]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
        {italic && (
          <>
            {" "}
            <em className="font-[family-name:var(--font-cormorant)] italic font-light text-[#C9A96E]">
              {italic}
            </em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={`font-[family-name:var(--font-cormorant)] text-xl italic font-light leading-relaxed ${
            center ? "max-w-xl mx-auto" : "max-w-lg"
          } ${light ? "text-[#A89880]" : "text-[#A89880]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
