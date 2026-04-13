"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/catalog";
import { collectionsCatalog } from "@/content/catalog";
import { ArrowIcon } from "./icons";
import { ProductCard } from "./product-card";
import { SectionHeading } from "./section-heading";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { useScrollReveal } from "./use-scroll-reveal";

type CollectionPageProps = {
  title: string;
  description: string;
  eyebrow: string;
  heroImage: string;
  feature: string;
  products: Product[];
  currentCollectionSlug?: string;
  searchQuery?: string;
};

export function CollectionPage({
  title,
  description,
  eyebrow,
  heroImage,
  products,
  currentCollectionSlug,
  searchQuery,
}: CollectionPageProps) {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <SiteHeader dark />
      <main id="main-content" className="bg-background">
        {/* ── Collection Hero ───────────────────────────────────── */}
        <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-end overflow-hidden pb-16 pt-32 md:min-h-[80vh] md:pb-24">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover motion-safe:animate-[heroScale_20s_ease-out_forwards]"
            />

            {/* Bottom transition gradient into the content block */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
          </div>

          <div className="luxury-shell relative z-10 w-full">
            <div className="mx-auto max-w-4xl text-center">
              <p className="luxury-eyebrow luxury-reveal mb-6 text-xs text-(--gold-pale) tracking-[0.3em] font-medium uppercase drop-shadow-md">
                {eyebrow}
              </p>
              <h1 className="luxury-title luxury-reveal luxury-delay-1 text-balance text-5xl md:text-6xl lg:text-7xl tracking-tight text-white drop-shadow-lg">
                {title}
              </h1>
              <p className="luxury-copy luxury-reveal luxury-delay-2 mx-auto mt-8 max-w-2xl text-base md:text-lg text-white drop-shadow">
                {description}
              </p>

              {/* Collection filter pills */}
              <div
                className="luxury-reveal luxury-delay-3 mt-12 flex flex-wrap justify-center gap-3"
                role="navigation"
                aria-label="Collection categories"
              >
                {collectionsCatalog.map((collection) => {
                  const active = collection.slug === currentCollectionSlug;
                  return (
                    <Link
                      key={collection.slug}
                      href={{
                        pathname: `/collections/${collection.slug}`,
                        query: searchQuery
                          ? { search: searchQuery }
                          : undefined,
                      }}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full border px-6 py-3 text-xs tracking-[0.22em] uppercase transition-all duration-300 backdrop-blur-md ${active
                          ? "bg-white text-black border-transparent shadow-lg"
                          : "bg-black/20 text-white/90 border-white/20 hover:bg-white/10 hover:border-white/40 hover:text-white"
                        }`}
                    >
                      {collection.shortName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Grid ──────────────────────────────────────── */}
        <section className="pb-24 pt-16 md:pb-32 md:pt-16">
          <div ref={gridRef} className="luxury-shell">
            <SectionHeading
              eyebrow="Product Edit"
              title="Pieces selected for modern heirlooms."
              description="Each work routes to a dedicated product narrative — with gallery, material specifications, and care guidance that reflects the Jawhar's commitment to transparency."
              align="center"
            />

            {/* Search results banner */}
            {searchQuery ? (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-(--line) bg-(--surface) px-5 py-4">
                <p className="text-sm text-(--text-muted)">
                  Showing results for{" "}
                  <span className="font-medium text-foreground">
                    &quot;{searchQuery}&quot;
                  </span>
                </p>
                <p className="text-xs tracking-[0.18em] uppercase text-(--text-muted)">
                  {products.length} piece{products.length === 1 ? "" : "s"}
                </p>
              </div>
            ) : null}

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={product.slug}
                  className={`group reveal-on-scroll reveal-delay-${Math.min((index % 3) + 1, 3)}`}
                >
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    href={`/products/${product.slug}`}
                  />
                  <div className="px-2 pt-4">
                    <p className="luxury-copy text-sm">
                      {product.shortDescription}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="luxury-button mt-4 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-foreground hover:text-(--gold)"
                    >
                      View Details
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {products.length === 0 ? (
              <div className="mt-14 rounded-4xl border border-(--line) bg-(--surface) px-6 py-14 text-center">
                <h3 className="luxury-title text-3xl">No matching pieces</h3>
                <p className="luxury-copy mx-auto mt-4 max-w-xl text-base">
                  Try a different keyword — such as a product name, collection
                  type, or material.
                </p>
                <Link
                  href="/collections"
                  className="luxury-button luxury-button-solid mt-8 inline-flex rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase"
                >
                  Browse All Collections
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
