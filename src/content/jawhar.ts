export const navItems = [
  { label: "Collections", href: "#collections" },
  { label: "Heritage", href: "#story" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Journal", href: "#journal" },
] as const;

export const collections = [
  {
    title: "Bridal",
    description: "Architectural solitaires and intimate diamond settings.",
    href: "/collections/rings",
    image:
      "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "High Jewelry",
    description: "Gem-led statements designed for ceremony and gala nights.",
    href: "/collections/necklaces-pendants",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Everyday Icons",
    description: "Quiet luxury for daily rituals, layered with intention.",
    href: "/collections/earrings",
    image:
      "https://images.unsplash.com/photo-1684616289742-2e48aff416bf?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const signaturePieces = [
  {
    name: "Etoile Diamond Ring",
    price: "$18,500",
    image:
      "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lumiere Pendant",
    price: "$12,200",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Celeste Earrings",
    price: "$9,800",
    image:
      "https://images.unsplash.com/photo-1684616289742-2e48aff416bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Aurora Bracelet",
    price: "$15,400",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The finish, the weight, the restraint. It feels like something collected, not merely bought.",
    author: "Isabella M.",
    location: "New York",
  },
  {
    quote:
      "Every surface catches light beautifully. The entire experience feels composed with real taste.",
    author: "Sophia L.",
    location: "London",
  },
  {
    quote:
      "Jawhar delivers the kind of quiet confidence luxury rarely gets right online.",
    author: "Charlotte R.",
    location: "Paris",
  },
] as const;

export const metrics = [
  { value: "1892", label: "Founded in Place Vendome" },
  { value: "47", label: "Master artisans in residence" },
  { value: "1/1", label: "Gem selection done by hand" },
] as const;

export const journalNotes = [
  {
    title: "Stone by Stone",
    body: "Emeralds are chosen for depth and glow before they are chosen for size.",
  },
  {
    title: "Precision Setting",
    body: "Each claw is adjusted under magnification to preserve clarity and silhouette.",
  },
  {
    title: "Final Polish",
    body: "Surfaces are finished to reflect candlelight softly, never harshly.",
  },
] as const;
