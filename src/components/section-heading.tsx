type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="luxury-eyebrow text-xs font-medium">{eyebrow}</p>
      <h2 className="luxury-title mt-4 text-4xl md:text-5xl">{title}</h2>
      <p className="luxury-copy mt-5 text-base md:text-lg">{description}</p>
    </div>
  );
}
