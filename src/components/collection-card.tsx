import Image from "next/image";

type CollectionCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export function CollectionCard({
  title,
  description,
  image,
  href,
}: CollectionCardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-4xl border border-(--line) bg-(--surface)"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="space-y-3 p-8">
        <h3 className="luxury-title text-3xl transition group-hover:text-(--gold)">
          {title}
        </h3>
        <p className="luxury-copy text-sm">{description}</p>
      </div>
    </a>
  );
}
