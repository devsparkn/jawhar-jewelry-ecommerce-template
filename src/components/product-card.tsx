import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  href?: string;
};

export function ProductCard({ name, price, image, href }: ProductCardProps) {
  const content = (
    <article className="group">
      <div className="relative aspect-3/4 overflow-hidden rounded-[1.75rem] bg-(--surface)">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-6 text-center">
        <h3 className="luxury-title text-2xl transition group-hover:text-(--gold)">
          {name}
        </h3>
        <p className="mt-2 text-sm tracking-[0.18em] text-(--text-muted) uppercase">
          {price}
        </p>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
