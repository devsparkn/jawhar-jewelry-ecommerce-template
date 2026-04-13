import type { MetadataRoute } from "next";
import { collectionsCatalog, productsCatalog } from "@/content/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/appointments",
    "/bespoke",
    "/care-guide",
    "/collections",
    "/contact",
    "/faq",
    "/gifts",
    "/journal",
    "/lookbook",
    "/sustainability",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `https://jawhar.example${route}`,
    lastModified: new Date(),
  }));

  const collectionEntries = collectionsCatalog.map((collection) => ({
    url: `https://jawhar.example/collections/${collection.slug}`,
    lastModified: new Date(),
  }));

  const productEntries = productsCatalog.map((product) => ({
    url: `https://jawhar.example/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...collectionEntries, ...productEntries];
}
