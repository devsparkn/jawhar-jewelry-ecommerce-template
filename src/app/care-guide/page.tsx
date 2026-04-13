import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Care Guide",
  description:
    "Jawhar care instructions for gold, diamonds, pearls, and treasured jewelry pieces.",
};

const careCards = [
  {
    title: "Gold",
    body: "Store pieces separately in their soft pouch and clean with warm water, a drop of gentle soap, and a lint-free cloth.",
  },
  {
    title: "Diamonds",
    body: "To preserve brilliance, avoid lotion build-up behind the setting and arrange a yearly atelier inspection for claw security.",
  },
  {
    title: "Pearls",
    body: "Pearls should be the last touch before leaving the house and removed before fragrance, water, or cosmetics touch the skin.",
  },
  {
    title: "Enamel & Lacquer",
    body: "Protect decorative finishes from abrasion and direct impact, and store them away from harder gemstone settings.",
  },
] as const;

export default function CareGuidePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <p className="luxury-eyebrow text-xs font-medium">Care Guide</p>
          <h1 className="luxury-title mt-5 max-w-4xl text-5xl md:text-6xl">
            Care, preservation, and the long life of a piece.
          </h1>
          <p className="luxury-copy mt-6 max-w-2xl text-base md:text-lg">
            Each material asks for a slightly different ritual. These notes help
            preserve finish, security, and daily beauty over time.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {careCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8"
              >
                <h2 className="luxury-title text-3xl">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                  {card.body}
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
