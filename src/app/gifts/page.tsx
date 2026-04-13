import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Gifts",
  description:
    "Curated Jawhar gifts for milestones, anniversaries, and ceremonial occasions.",
};

const giftEdits = [
  {
    title: "Under $10,000",
    body: "Quiet signatures for birthdays, anniversaries, and first heirloom gifts.",
    href: "/collections/earrings",
  },
  {
    title: "Ceremonial Pieces",
    body: "Diamond-led styles chosen for vows, formal evenings, and milestone celebrations.",
    href: "/collections/rings",
  },
  {
    title: "Private Gifting",
    body: "Concierge-led selections with wrapping, note cards, and delivery scheduling.",
    href: "/appointments",
  },
] as const;

export default function GiftsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <SectionHeading
            eyebrow="Gifts"
            title="Gift selections composed with occasion in mind."
            description="Browse curated edits for anniversaries, weddings, birthdays, and private celebrations."
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {giftEdits.map((edit) => (
              <article
                key={edit.title}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8"
              >
                <h2 className="luxury-title text-3xl">{edit.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                  {edit.body}
                </p>
                <Link
                  href={edit.href}
                  className="luxury-button mt-6 inline-flex text-xs tracking-[0.2em] uppercase text-[color:var(--foreground)] hover:text-[color:var(--gold)]"
                >
                  Explore Edit
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
