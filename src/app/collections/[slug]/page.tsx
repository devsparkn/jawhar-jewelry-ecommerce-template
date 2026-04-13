import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionPage } from "@/components/collection-page";
import {
  collectionsCatalog,
  getCollectionBySlug,
  getProductsByCollection,
  searchProducts,
} from "@/content/catalog";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ search?: string | string[] }>;
};

export async function generateStaticParams() {
  return collectionsCatalog.map((collection) => ({
    slug: collection.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
    };
  }

  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionSlugPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const collection = getCollectionBySlug(slug);
  const rawSearch = resolvedSearchParams?.search;
  const searchQuery =
    typeof rawSearch === "string" ? rawSearch : rawSearch?.[0] ?? "";

  if (!collection) {
    notFound();
  }

  return (
    <CollectionPage
      title={collection.name}
      description={collection.intro}
      eyebrow="Collection"
      heroImage={collection.heroImage}
      feature={collection.feature}
      products={searchProducts(getProductsByCollection(collection.slug), searchQuery)}
      currentCollectionSlug={collection.slug}
      searchQuery={searchQuery}
    />
  );
}
