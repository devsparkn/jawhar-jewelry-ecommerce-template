import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the Jawhar story, from Place Vendome beginnings to the present-day atelier.",
};

const timeline = [
  {
    year: "1892",
    title: "Founded in Place Vendome",
    body: "Edouard Lumiere opened the first salon with a devotion to measured proportions, hand-finishing, and gem light above spectacle.",
  },
  {
    year: "1928",
    title: "First private client salon",
    body: "Jawhar began hosting discreet fittings for collectors seeking one-of-a-kind commissions and ceremonial jewelry.",
  },
  {
    year: "1974",
    title: "Atelier restoration",
    body: "A new generation of goldsmiths restored the archives and reintroduced house signatures in polished gold, diamond pave, and softened geometry.",
  },
  {
    year: "Today",
    title: "Modern heirlooms",
    body: "Jawhar continues to create pieces intended for daily intimacy, milestone gifting, and quiet permanence.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-8">
        <section className="luxury-shell py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-xl">
              <p className="luxury-eyebrow text-xs font-medium">Heritage</p>
              <h1 className="luxury-title mt-5 text-5xl md:text-6xl">
                A Jawhar built on patience, proportion, and light.
              </h1>
              <p className="luxury-copy mt-6 max-w-2xl text-base md:text-lg">
                Since 1892, Jawhar has pursued a restrained view of luxury:
                stones chosen for depth, settings refined by hand, and pieces
                designed to gather meaning over time.
              </p>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:max-h-[560px] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1567425601800-c084c6cd374e?auto=format&fit=crop&w=1400&q=80"
                alt="Jawhar atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--surface)] py-20 md:py-24">
          <div className="luxury-shell">
            <SectionHeading
              eyebrow="Jawhar Story"
              title="A line of continuity from founder to atelier."
              description="Each chapter of Jawhar deepened the same core discipline: elegance achieved by subtraction, not excess."
              align="center"
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {timeline.map((item) => (
                <article
                  key={item.year}
                  className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8"
                >
                  <p className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold)]">
                    {item.year}
                  </p>
                  <h2 className="luxury-title mt-4 text-3xl">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
