"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { getProductBySlug, type Product } from "@/content/catalog";
import { getProductExperience } from "@/content/product-experience";
import { Breadcrumbs } from "./breadcrumbs";
import {
  DetailViewIcon,
  FrontViewIcon,
  SideViewIcon,
  StarIcon,
  WornViewIcon,
} from "./icons";
import { ProductCard } from "./product-card";
import { ProductPurchasePanel } from "./product-purchase-panel";
import { SectionHeading } from "./section-heading";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useScrollReveal } from "./use-scroll-reveal";

type ProductDetailPageProps = {
  product: Product;
  relatedProducts: Product[];
};

const productViews = [
  {
    label: "Front",
    caption: "Primary silhouette",
    Icon: FrontViewIcon,
  },
  {
    label: "Side",
    caption: "Profile and setting",
    Icon: SideViewIcon,
  },
  {
    label: "Detail",
    caption: "Stone close-up",
    Icon: DetailViewIcon,
  },
  {
    label: "Worn",
    caption: "Lifestyle perspective",
    Icon: WornViewIcon,
  },
] as const;

export function ProductDetailPage({
  product,
  relatedProducts,
}: ProductDetailPageProps) {
  const [activeView, setActiveView] = useState(0);
  const experience = getProductExperience(product);
  const pairedProducts = experience.pairedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((pairedProduct) => pairedProduct !== undefined)
    .slice(0, 3);
  const relatedRef = useScrollReveal<HTMLElement>();
  const detailsRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pt-28">
        <div className="luxury-shell py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              {
                label: product.categoryName,
                href: `/collections/${product.categorySlug}`,
              },
              { label: product.name },
            ]}
          />
        </div>

        <section className="luxury-shell pb-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
            <div className="space-y-4 lg:sticky lg:top-32 lg:self-start">
              <div className="relative aspect-video overflow-hidden rounded-4xl bg-(--surface)">
                <Image
                  src={product.image}
                  alt={`${product.name} ${productViews[activeView].label.toLowerCase()} view`}
                  fill
                  priority
                  loading="eager"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-white/10" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] tracking-[0.24em] text-white/80 uppercase backdrop-blur-sm">
                  {productViews[activeView].label}
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-black/40 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white/80 uppercase backdrop-blur-sm">
                  {activeView + 1} / {productViews.length}
                </div>
              </div>

              <div
                className="grid grid-cols-4 gap-3 sm:gap-4"
                aria-label="Product view selector"
              >
                {productViews.map(({ label, Icon }, index) => (
                  <button
                    key={`${product.slug}-view-${label}`}
                    type="button"
                    onClick={() => setActiveView(index)}
                    aria-label={`Show ${label.toLowerCase()} view`}
                    aria-pressed={activeView === index}
                    className={`rounded-[1.25rem] border p-3 text-left transition-all duration-200 ${
                      activeView === index
                        ? "border-(--gold) bg-(--surface) shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                        : "border-(--line) bg-white/70 hover:border-(--gold)/50 hover:bg-(--surface)"
                    }`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-(--line) bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,243,237,0.92))] text-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                    <p className="mt-3 text-[10px] tracking-[0.22em] uppercase text-(--text-muted)">
                      {label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="max-w-2xl">
                <p className="luxury-eyebrow text-xs font-medium">
                  {product.collectionLabel}
                </p>
                <h1 className="luxury-title mt-4 text-4xl md:text-5xl">
                  {product.name}
                </h1>
                <div className="mt-6">
                  <p className="text-3xl font-light tracking-wide">
                    {product.price}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.18em] uppercase text-(--text-muted)">
                    {product.shippingNote}
                  </p>
                </div>

                <p className="luxury-copy mt-8 text-base">
                  {product.shortDescription}
                </p>

                <ProductPurchasePanel product={product} />

                <div className="mt-10 grid gap-5 border-t border-(--line) pt-10 sm:grid-cols-2">
                  {product.badges.map((badge) => (
                    <div
                      key={badge.label}
                      className="rounded-3xl border border-(--line) bg-(--surface) p-5"
                    >
                      <p className="text-sm font-medium">{badge.label}</p>
                      <p className="mt-1 text-xs tracking-[0.12em] uppercase text-(--text-muted)">
                        {badge.value}
                      </p>
                    </div>
                  ))}
                </div>

                {experience.reviews.length > 0 ? (
                  <div className="mt-10 border-t border-(--line) pt-10">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.22em] uppercase text-(--text-muted)">
                          Client Reviews
                        </p>
                        <h2 className="luxury-title mt-3 text-3xl">
                          Highly considered, beautifully received.
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-(--gold)">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <StarIcon key={index} className="h-4 w-4" />
                        ))}
                        <span className="ml-2 text-sm text-(--text-muted)">
                          {experience.reviews.length} reviews
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4">
                      {experience.reviews.map((review) => (
                        <article
                          key={`${review.author}-${review.location}`}
                          className="rounded-3xl border border-(--line) bg-(--surface) p-5"
                        >
                          <div className="flex items-center gap-1 text-(--gold)">
                            {Array.from({ length: review.rating }).map(
                              (_, index) => (
                                <StarIcon key={index} className="h-4 w-4" />
                              ),
                            )}
                          </div>
                          <p className="mt-4 text-base leading-7">
                            {review.quote}
                          </p>
                          <p className="mt-4 text-xs tracking-[0.18em] uppercase text-(--text-muted)">
                            {review.author} · {review.location}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section ref={detailsRef} className="luxury-shell pb-24 md:pb-32">
          <div className="max-w-4xl space-y-16">
            <div className="reveal-on-scroll">
              <h2 className="luxury-title text-3xl">Description</h2>
              <div className="luxury-copy mt-6 space-y-4 text-base">
                {product.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="luxury-title text-3xl">Details</h2>
              <div className="mt-6 grid gap-x-12 gap-y-4 text-sm sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between gap-4 border-b border-(--line) py-3"
                  >
                    <span className="text-(--text-muted)">
                      {spec.label}
                    </span>
                    <span className="text-right font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="luxury-title text-3xl">Craftsmanship</h2>
              <div className="luxury-copy mt-6 space-y-4 text-base">
                {product.craftsmanship.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="luxury-title text-3xl">Delivery &amp; Care</h2>
              <div className="luxury-copy mt-6 space-y-4 text-base">
                {product.deliveryAndCare.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {pairedProducts.length > 0 ? (
              <div className="reveal-on-scroll">
                <h2 className="luxury-title text-3xl">
                  Frequently Paired With
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {pairedProducts.map((pairedProduct) => (
                    <Link
                      key={pairedProduct.slug}
                      href={`/products/${pairedProduct.slug}`}
                      className="rounded-full border border-(--line) bg-(--surface) px-4 py-3 text-xs tracking-[0.18em] uppercase transition hover:border-foreground hover:text-foreground"
                    >
                      {pairedProduct.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section
          ref={relatedRef}
          className="bg-(--surface) py-24 md:py-32"
        >
          <div className="luxury-shell">
            <SectionHeading
              eyebrow="Complete The Look"
              title="Pieces chosen to sit together beautifully."
              description="Each suggestion is drawn from the same design family, allowing you to build a cohesive collection with a consistent aesthetic language."
              align="center"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {relatedProducts.map((relatedProduct, index) => (
                <div
                  key={relatedProduct.slug}
                  className={`reveal-on-scroll reveal-delay-${index + 1}`}
                >
                  <ProductCard
                    name={relatedProduct.name}
                    price={relatedProduct.price}
                    image={relatedProduct.image}
                    href={`/products/${relatedProduct.slug}`}
                  />
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
