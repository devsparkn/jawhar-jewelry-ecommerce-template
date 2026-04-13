import Link from "next/link";
import Image from "next/image";

type BrandMarkProps = {
  dark?: boolean;
  href?: string;
  className?: string;
  compact?: boolean;
  onClick?: () => void;
};

export function BrandMark({
  dark = false,
  href = "/",
  className = "",
  compact = false,
  onClick,
}: BrandMarkProps) {
  const textTone = dark ? "text-white" : "text-[color:var(--foreground)]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center ${textTone} ${className}`.trim()}
      aria-label="Jawhar home"
    >
      <Image src="/logo.png" alt="logo" height={50} width={50} />
      <span
        className={`luxury-title leading-none tracking-[0.12em] ${
          compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
        }`}
      >
        Jawhar
      </span>
    </Link>
  );
}
