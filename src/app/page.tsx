"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  collections,
  journalNotes,
  metrics,
  signaturePieces,
  testimonials,
} from "@/content/jawhar";
import { ArrowIcon } from "@/components/icons";
import { CollectionCard } from "@/components/collection-card";
import { ProductCard } from "@/components/product-card";
import { QuoteCard } from "@/components/quote-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useScrollReveal } from "@/components/use-scroll-reveal";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1598218940656-7126545fd283?auto=format&fit=crop&w=1800&q=80",
    eyebrow: "High Jewelry Jawhar · Est. 1892",
    title: "Timeless elegance, shaped with restraint.",
    body: "An editorial Jawhar of exceptional rings, necklaces, and heirloom pieces designed to endure across generations.",
    ctaHref: "/collections",
    ctaLabel: "Explore Collections",
    secondaryHref: "/lookbook",
    secondaryLabel: "View Lookbook",
    capsule: "Noir Riviera",
    capsuleBody:
      "Black enamel, warm gold, and diamonds cut to read beautifully under evening light.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1762537132897-f6b577190e80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcyfHxqZXdlbHJ5fGVufDB8MHwwfHx8Mg%3D%3D",
    eyebrow: "Private Client Appointments",
    title: "Jewels composed for ceremony and gifting.",
    body: "Discover the signatures of Jawhar through private fittings, bridal consultations, and seasonal capsule access.",
    ctaHref: "/collections",
    ctaLabel: "Explore Collections",
    secondaryHref: "/appointments",
    secondaryLabel: "Book Appointment",
    capsule: "Salon Services",
    capsuleBody:
      "Private styling, stone consultation, and made-to-order commissions guided by the atelier.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567425601800-c084c6cd374e?auto=format&fit=crop&w=1800&q=80",
    eyebrow: "Atelier Journal",
    title: "A house where material stories are told quietly.",
    body: "Read Jawhar's editorial notes on craftsmanship, gemstone light, and the rituals that give jewelry lasting presence.",
    ctaHref: "/collections",
    ctaLabel: "Explore Collections",
    secondaryHref: "/journal",
    secondaryLabel: "Read Journal",
    capsule: "Atelier Note",
    capsuleBody:
      "Each setting is adjusted by hand so the stone appears to float, never sit heavily in the metal.",
  },
] as const;

export default function HomePage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const collectionsRef = useScrollReveal<HTMLElement>();
  const storyRef = useScrollReveal<HTMLElement>();
  const signatureRef = useScrollReveal<HTMLElement>();
  const craftsmanshipRef = useScrollReveal<HTMLElement>();
  const privateClientRef = useScrollReveal<HTMLElement>();
  const activeSlide = heroSlides[activeHeroSlide];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveHeroSlide(
        (currentSlide) => (currentSlide + 1) % heroSlides.length,
      );
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <SiteHeader dark />
      <main id="main-content" className="overflow-hidden">
        <section className="relative min-h-screen">
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-all duration-1600 ease-out ${
                  index === activeHeroSlide
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="luxury-shell relative flex min-h-screen items-end py-28 md:py-20">
            <div className="grid w-full gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
              <div className="max-w-4xl">
                <h1 className="luxury-title luxury-reveal luxury-delay-1 mt-6 max-w-4xl text-5xl leading-none text-white sm:text-6xl lg:text-[clamp(3.5rem,7vw,7rem)]">
                  {activeSlide.title}
                </h1>
                <p className="luxury-reveal luxury-delay-2 mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
                  {activeSlide.body}
                </p>
                <div className="luxury-reveal luxury-delay-3 mt-10 flex flex-wrap gap-4">
                  <Link
                    href={activeSlide.ctaHref}
                    className="luxury-button inline-flex items-center gap-3 rounded-full border border-(--gold-pale) bg-white px-7 py-3 text-xs tracking-[0.24em] uppercase text-white shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:border-white"
                  >
                    {activeSlide.ctaLabel}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href={activeSlide.secondaryHref}
                    className="luxury-button inline-flex items-center gap-3 rounded-full border border-white/40 bg-[rgba(255,255,255,0.18)] px-7 py-3 text-xs tracking-[0.24em] uppercase text-white! shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:border-white hover:bg-[rgba(255,255,255,0.3)] hover:text-white!"
                  >
                    {activeSlide.secondaryLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="collections"
          ref={collectionsRef}
          className="py-24 md:py-32"
        >
          <div className="luxury-shell">
            <SectionHeading
              eyebrow="Collections"
              title="A wardrobe of signatures."
              description="Three curated worlds - Bridal, High Jewelry, and Everyday Icons - each with its own visual grammar and emotional register."
              align="center"
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {collections.map((collection, index) => (
                <div
                  key={collection.title}
                  className={`reveal-on-scroll reveal-delay-${index + 1}`}
                >
                  <CollectionCard {...collection} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" ref={storyRef} className="py-24 md:py-32">
          <div className="luxury-shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Since 1892"
                title="A house built on patience, proportion, and light."
                description="Founded in Place Vendome by master goldsmith Edouard Lumiere, Jawhar has spent over a century refining a single conviction: that a piece of jewelry should feel inevitable, as though it could not have been made any other way."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`reveal-on-scroll reveal-delay-${index + 1} rounded-3xl border border-(--line) bg-(--surface) p-5`}
                  >
                    <p className="luxury-title text-3xl">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-(--text-muted)">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="#craftsmanship"
                className="luxury-button mt-10 inline-flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-foreground hover:text-(--gold)"
              >
                Discover the atelier
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="reveal-on-scroll relative aspect-4/5 overflow-hidden rounded-4xl">
              <Image
                src="https://images.unsplash.com/photo-1567425601800-c084c6cd374e?auto=format&fit=crop&w=1400&q=80"
                alt="Jewelry craftsmanship - artisan setting a diamond"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/20 bg-black/35 p-6 text-white backdrop-blur-md">
                <p className="text-xs tracking-[0.24em] uppercase text-white/65">
                  Atelier Note
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Each setting is adjusted by hand so the stone appears to
                  float, not sit heavily in the metal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={signatureRef} className="bg-(--surface) py-24 md:py-32">
          <div className="luxury-shell">
            <SectionHeading
              eyebrow="Signature Pieces"
              title="Icons for the private collection."
              description="Twelve enduring forms - designed to be worn daily, gifted with intention, and passed between generations without losing their character."
              align="center"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {signaturePieces.map((piece, index) => (
                <div
                  key={piece.name}
                  className={`reveal-on-scroll reveal-delay-${index + 1}`}
                >
                  <ProductCard
                    name={piece.name}
                    price={piece.price}
                    image={piece.image}
                    href={
                      piece.name === "Etoile Diamond Ring"
                        ? "/products/etoile-diamond-ring"
                        : piece.name === "Lumiere Pendant"
                          ? "/products/lumiere-pendant"
                          : piece.name === "Celeste Earrings"
                            ? "/products/celeste-earrings"
                            : "/products/aurora-bracelet"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="craftsmanship"
          ref={craftsmanshipRef}
          className="py-24 md:py-32"
        >
          <div className="luxury-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-white reveal-on-scroll rounded-4xl p-8 md:p-10">
              <p className="luxury-eyebrow text-xs font-medium">
                Craftsmanship
              </p>
              <h2 className="luxury-title mt-4 text-4xl">
                Material stories, told quietly.
              </h2>
              <p className="luxury-copy mt-6 text-base">
                Every Jawhar piece is made slowly and deliberately - with
                materials chosen for their depth and longevity, not their
                spectacle. The result is jewelry that feels considered from
                every angle.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {journalNotes.map((note, index) => (
                <article
                  key={note.title}
                  className={`reveal-on-scroll reveal-delay-${index + 1} rounded-[1.75rem] border border-(--line) bg-[rgba(255,250,243,0.78)] p-7`}
                >
                  <p className="text-xs tracking-[0.24em] uppercase text-(--gold)">
                    {note.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-(--text-muted)">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="journal"
          ref={privateClientRef}
          className="bg-(--surface-dark) py-24 text-white md:py-32"
        >
          <div className="luxury-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal-on-scroll">
              <p className="luxury-eyebrow text-xs font-medium text-(--gold-pale)">
                Private Client
              </p>
              <h2 className="luxury-title mt-4 text-4xl md:text-5xl">
                Styling by appointment, gifting by season.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Our private client programme offers personal styling sessions,
                bespoke commissions, and first access to seasonal capsule
                releases. Reserved for those who understand that the finest
                jewelry is experienced, not simply purchased.
              </p>
              <Link
                href="/appointments"
                className="luxury-button mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-white hover:text-foreground"
              >
                Enquire privately
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((item, index) => (
                <div
                  key={item.author}
                  className={`reveal-on-scroll reveal-delay-${index + 1}`}
                >
                  <QuoteCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
