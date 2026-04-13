import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { StorefrontProvider } from "@/components/storefront-provider";
import { StorefrontSidebar } from "@/components/storefront-sidebar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jawhar.example"),
  title: {
    default: "Jawhar | Fine Jewelry",
    template: "%s | Jawhar",
  },
  description:
    "Jawhar — fine jewelry Jawhar since 1892. Discover exceptional rings, necklaces, and heirloom pieces designed for private collections.",
  keywords: [
    "fine jewelry",
    "luxury jewelry",
    "diamond rings",
    "high jewelry",
    "jawhar",
    "heirloom pieces",
  ],
  authors: [{ name: "Jawhar" }],
  creator: "Jawhar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jawhar",
    url: "/",
    title: "Jawhar | Fine Jewelry",
    description:
      "Fine jewelry Jawhar since 1892. Exceptional rings, necklaces, and heirloom pieces.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598218940656-7126545fd283?auto=format&fit=crop&w=1800&q=80",
        width: 1800,
        height: 1200,
        alt: "Jawhar fine jewelry campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawhar | Fine Jewelry",
    description:
      "Fine jewelry Jawhar since 1892. Exceptional rings, necklaces, and heirloom pieces.",
    images: [
      "https://images.unsplash.com/photo-1598218940656-7126545fd283?auto=format&fit=crop&w=1800&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${jost.variable}`}
    >
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[color:var(--gold)] focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:text-white focus:uppercase focus:outline-none"
        >
          Skip to content
        </a>
        <StorefrontProvider>
          {children}
          <StorefrontSidebar />
        </StorefrontProvider>
      </body>
    </html>
  );
}
