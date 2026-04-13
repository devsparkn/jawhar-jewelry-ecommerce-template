import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Jawhar shipping, sizing, returns, and private appointments.",
};

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "In-stock pieces generally leave Jawhar within 48 hours, while made-to-order and bespoke work follows the timeline noted on the product or commission brief.",
  },
  {
    question: "Do you offer resizing?",
    answer: "Yes. Many rings include a first resizing through the atelier, and additional fit adjustments can be arranged through client care.",
  },
  {
    question: "Can I book a private appointment?",
    answer: "Appointments are available in person and virtually for bridal consultations, gifting, and bespoke commissions.",
  },
  {
    question: "What is your returns policy?",
    answer: "Eligible pieces may be returned within 30 days provided they remain unworn and in their presentation condition. Bespoke work is final sale.",
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <section className="luxury-shell py-16 md:py-20">
          <p className="luxury-eyebrow text-xs font-medium">FAQ</p>
          <h1 className="luxury-title mt-5 max-w-4xl text-5xl md:text-6xl">
            Questions often asked by private clients.
          </h1>
          <div className="mt-14 grid gap-5">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8"
              >
                <h2 className="luxury-title text-3xl">{item.question}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
                  {item.answer}
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
