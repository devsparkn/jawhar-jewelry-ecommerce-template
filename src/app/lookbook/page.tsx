import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Explore the Jawhar lookbook through full-bleed campaign imagery and seasonal styling notes.",
};

const frames = [
  {
    title: "Noir Riviera",
    body: "Black enamel and warm gold compose a sharper evening mood.",
    image:
      "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Salon Light",
    body: "Pearled light, diamond lines, and silhouettes that frame the neck softly.",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Atelier Gold",
    body: "Hand-finished settings photographed with intimacy and restraint.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export default function LookbookPage() {
  return (
    <>
      <SiteHeader dark />
      <main
        id="main-content"
        className="bg-[color:var(--surface-dark)] pt-28 text-white"
      >
        <section className="luxury-shell py-16 md:py-20">
          <p className="luxury-eyebrow text-xs font-medium text-[color:var(--gold-pale)]">
            Lookbook
          </p>
          <h1 className="luxury-title mt-5 max-w-5xl text-5xl md:text-6xl">
            A campaign diary in gold, shadow, and ceremony.
          </h1>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="space-y-10">
            {frames.map((frame, index) => (
              <article
                key={frame.title}
                className={`luxury-shell grid gap-8 ${index % 2 === 0 ? "lg:grid-cols-[1.15fr_0.85fr]" : "lg:grid-cols-[0.85fr_1.15fr]"}`}
              >
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={frame.image}
                    alt={frame.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div className={`flex items-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="max-w-xl">
                    <p className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-pale)]">
                      Chapter {index + 1}
                    </p>
                    <h2 className="luxury-title mt-5 text-4xl md:text-5xl">
                      {frame.title}
                    </h2>
                    <p className="mt-6 text-base leading-8 text-white/72">
                      {frame.body}
                    </p>
                  </div>
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
