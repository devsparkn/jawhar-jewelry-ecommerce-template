import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySlug, productsCatalog } from "@/content/catalog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return productsCatalog.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = product.relatedSlugs
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter((relatedProduct) => relatedProduct !== undefined);

  return (
    <ProductDetailPage product={product} relatedProducts={relatedProducts} />
  );
}
