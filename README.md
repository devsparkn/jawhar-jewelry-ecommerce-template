# Jawhar

Jawhar is a premium, $10,000-tier Next.js luxury e-commerce website template for high-end jewelry brands, fashion boutiques, and modern artisans.

## Overview

Jawhar ships with a complete luxury e-commerce frontend experience:

- Home page (Editorial Landing Page)
- Collections & Category pages
- Product details page
- Lookbook page
- About & Sustainability pages
- Bespoke & Appointments pages
- Contact & FAQ pages
- Journal pages
- Checkout & Account UI

The design language focuses on an elegant, editorial aesthetic with high-contrast neutrals, subtle gold accents, sophisticated scroll-triggered reveal animations, and a premium "modern heirlooms" brand tone.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Native CSS Scroll Animations (IntersectionObserver)
- Custom SVG Icons

## Project Structure

```text
jawhar/
  src/
    app/
      about/
      account/
      appointments/
      bespoke/
      care-guide/
      checkout/
      collections/
      contact/
      faq/
      gifts/
      journal/
      lookbook/
      products/
      sustainability/
      globals.css
      layout.tsx
      page.tsx
    components/
      brand-mark.tsx
      collection-page.tsx
      product-card.tsx
      product-detail-page.tsx
      site-header.tsx
      site-footer.tsx
      ...
    content/
      catalog.ts
      jawhar.ts
      product-experience.ts
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the app

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Customization Guide

### Branding

Update the following areas to adapt the template to your jewelry or fashion brand:

- Brand navigation and settings in `src/content/jawhar.ts`
- Logos and brand marks in `src/components/brand-mark.tsx`
- General site metadata in `src/app/layout.tsx`

### Theme

Jawhar ships with a highly refined luxury aesthetic. Color theme settings and core CSS tokens (like the subtle grain overlay and signature gold palette) are defined in:

- `src/app/globals.css`

### Content & Catalog

Product data, collections, and editorial storytelling are strictly organized to make swapping content seamless:

- The main product and collections catalog: `src/content/catalog.ts`
- Details for product craftsmanship and materials: `src/content/product-experience.ts`
- Site-wide copy and navigation arrays: `src/content/jawhar.ts`

## Notes

- Animations are handled via lightweight vanilla CSS and IntersectionObservers found in `use-scroll-reveal.ts` and `globals.css` to maximize performance.
- E-commerce logic (cart, wishlist) is handled by React Context in `src/components/storefront-provider.tsx` and is ready to be wired up to your backend (e.g., Shopify, Medusa).

## Deployment

You can deploy Jawhar to any platform that supports Next.js, including:

- Vercel
- Netlify

For a production build:

```bash
npm run build
npm run start
```

## License

This template is licensed under the **9abel Commercial Template License**.

See `LICENSE.md` for full details.
