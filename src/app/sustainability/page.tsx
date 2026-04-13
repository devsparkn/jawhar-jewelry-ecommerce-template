import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Learn about Jawhar sourcing, responsible materials, and considered packaging.",
};

const pillars = [
  {
    title: "Responsible Sourcing",
    body: "We prioritise traceable stones, long-standing supplier relationships, and small-batch buying over speculative volume.",
  },
  {
    title: "Atelier Longevity",
    body: "Pieces are created to be maintained over decades through resizing, inspection, clasp repair, and stone resetting.",
  },
  {
    title: "Measured Packaging",
    body: "Presentation materials are designed for permanence and reuse, with outer packaging kept minimal and recyclable.",
  },
] as const;

export default function SustainabilityPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <p className="luxury-eyebrow text-xs font-medium">Sustainability</p>
          <h1 className="luxury-title mt-5 max-w-4xl text-5xl md:text-6xl">
            Luxury shaped with responsibility and long-term care.
          </h1>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-(--line) bg-(--surface) p-8"
              >
                <h2 className="luxury-title text-3xl">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-(--text-muted)">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
