import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Editorial notes from Jawhar on gemstones, craftsmanship, and ceremonial dressing.",
};

const entries = [
  {
    slug: "the-language-of-light",
    title: "The Language of Light",
    excerpt:
      "How diamond proportion and setting height alter the mood of a piece long before the first fitting.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "inside-the-atelier",
    title: "Inside the Atelier",
    excerpt:
      "A closer look at the finishing rituals that give a polished piece its final softness and clarity.",
    image:
      "https://images.unsplash.com/photo-1567425601800-c084c6cd374e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "gifting-with-intention",
    title: "Gifting With Intention",
    excerpt:
      "Jawhar's guide to choosing jewelry for milestones, vows, and inherited celebrations.",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <p className="luxury-eyebrow text-xs font-medium">Journal</p>
          <h1 className="luxury-title mt-5 max-w-4xl text-5xl md:text-6xl">
            Editorial notes from Jawhar.
          </h1>
          <p className="luxury-copy mt-6 max-w-2xl text-base md:text-lg">
            Essays on gemstones, styling, atelier ritual, and the emotional life
            of the pieces we make.
          </p>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="luxury-shell grid gap-8 lg:grid-cols-3">
            {entries.map((entry) => (
              <article
                key={entry.slug}
                className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h2 className="luxury-title text-3xl">{entry.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                    {entry.excerpt}
                  </p>
                  <Link
                    href="/appointments"
                    className="luxury-button mt-6 inline-flex text-xs tracking-[0.2em] uppercase text-[color:var(--foreground)] hover:text-[color:var(--gold)]"
                  >
                    Continue Reading
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
