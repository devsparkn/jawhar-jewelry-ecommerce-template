import type { Metadata } from "next";
import { CollectionPage } from "@/components/collection-page";
import { productsCatalog, searchProducts } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore the full Jawhar collection — necklaces, rings, earrings, bracelets, and heirloom watches across five curated categories.",
};

type Props = {
  searchParams?: Promise<{ search?: string | string[] }>;
};

export default async function CollectionsIndexPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const rawSearch = resolvedSearchParams?.search;
  const searchQuery =
    typeof rawSearch === "string" ? rawSearch : rawSearch?.[0] ?? "";

  return (
    <CollectionPage
      title="Collections shaped around modern heirlooms."
      description="Explore the full Jawhar across necklaces and pendants, rings, earrings, bracelets, and jewelry-led watches. Each collection carries its own rhythm, material language, and occasion."
      eyebrow="All Collections"
      heroImage="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1400&q=80"
      feature="Discover category-led edits that move from broad collection stories into intimate product detail."
      products={searchProducts(productsCatalog, searchQuery)}
      searchQuery={searchQuery}
    />
  );
}
