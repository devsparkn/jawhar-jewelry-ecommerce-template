import type { Product, ProductOption } from "@/content/catalog";

export type ProductAvailability = {
  label: string;
  detail: string;
  tone: "limited" | "made-to-order" | "available";
};

export type ProductReview = {
  author: string;
  location: string;
  rating: number;
  quote: string;
};

type ProductExperience = {
  availability: ProductAvailability;
  options: ProductOption[];
  reviews: ProductReview[];
  pairedSlugs: string[];
};

const productExperienceBySlug: Record<string, ProductExperience> = {
  "etoile-diamond-ring": {
    availability: {
      label: "Only 2 remaining",
      detail: "Ready to ship this week from the Paris atelier.",
      tone: "limited",
    },
    options: [
      {
        label: "Ring Size",
        values: ["4", "5", "6", "7", "8", "9"],
        selected: "6",
        helperText: "Complimentary resizing on first adjustment",
      },
      {
        label: "Metal",
        values: ["18K White Gold", "18K Yellow Gold", "18K Rose Gold"],
        selected: "18K White Gold",
      },
      {
        label: "Center Stone",
        values: ["2ct Diamond", "2.5ct Diamond", "3ct Diamond"],
        selected: "2ct Diamond",
      },
    ],
    reviews: [
      {
        author: "Amelia R.",
        location: "New York",
        rating: 5,
        quote:
          "The proportions are exquisite in person. It feels airy, bright, and incredibly refined on the hand.",
      },
      {
        author: "Nina S.",
        location: "Dubai",
        rating: 5,
        quote:
          "The concierge service was immaculate and the setting has that quiet confidence luxury should have.",
      },
      {
        author: "Claire T.",
        location: "Paris",
        rating: 5,
        quote:
          "Elegant rather than ostentatious. Exactly the kind of piece that becomes part of a family story.",
      },
    ],
    pairedSlugs: ["lumiere-pendant", "celeste-earrings", "aurora-bracelet"],
  },
  "solstice-band": {
    availability: {
      label: "Made to order",
      detail:
        "Crafted to size in 4 to 6 weeks with atelier engraving available.",
      tone: "made-to-order",
    },
    options: [
      {
        label: "Ring Size",
        values: ["4", "5", "6", "7", "8", "9"],
        selected: "7",
        helperText: "Half sizes available through concierge",
      },
      {
        label: "Metal",
        values: ["18K Yellow Gold", "18K White Gold", "Platinum"],
        selected: "18K Yellow Gold",
      },
      {
        label: "Diamond Line",
        values: ["Classic", "Graduated", "Full Eternity"],
        selected: "Classic",
      },
    ],
    reviews: [
      {
        author: "Vivienne M.",
        location: "London",
        rating: 5,
        quote:
          "Beautifully low-profile and comfortable. It layers effortlessly with an engagement ring.",
      },
      {
        author: "Elise B.",
        location: "Milan",
        rating: 5,
        quote:
          "The finish is superb and the engraving service made it feel deeply personal.",
      },
    ],
    pairedSlugs: ["etoile-diamond-ring", "aurora-bracelet", "lumiere-pendant"],
  },
  "lumiere-pendant": {
    availability: {
      label: "In atelier stock",
      detail: "Insured dispatch within 48 hours, boxed for gifting.",
      tone: "available",
    },
    options: [
      {
        label: "Metal",
        values: ["18K Yellow Gold", "18K White Gold", "18K Rose Gold"],
        selected: "18K Yellow Gold",
      },
      {
        label: "Chain Length",
        values: ['16"', '18"', '20"'],
        selected: '18"',
      },
      {
        label: "Stone Accent",
        values: ["Diamond Pavé", "Sapphire Halo", "No Halo"],
        selected: "Diamond Pavé",
      },
    ],
    reviews: [
      {
        author: "Helena C.",
        location: "Singapore",
        rating: 5,
        quote:
          "It catches light beautifully without feeling overdone. A true day-to-evening piece.",
      },
      {
        author: "Margot D.",
        location: "Toronto",
        rating: 5,
        quote:
          "The chain length options made all the difference. It sits exactly where I wanted it.",
      },
    ],
    pairedSlugs: [
      "etoile-diamond-ring",
      "celeste-earrings",
      "serein-timepiece",
    ],
  },
  "celeste-earrings": {
    availability: {
      label: "Only a few pairs available",
      detail: "Reserved in limited quantities for the current season.",
      tone: "limited",
    },
    options: [
      {
        label: "Metal",
        values: ["18K White Gold", "18K Yellow Gold"],
        selected: "18K White Gold",
      },
      {
        label: "Drop Length",
        values: ["Petite", "Classic", "Evening"],
        selected: "Classic",
      },
      {
        label: "Stone Finish",
        values: ["Diamond", "Diamond + Sapphire", "Diamond + Emerald"],
        selected: "Diamond",
      },
    ],
    reviews: [
      {
        author: "Sofia N.",
        location: "Madrid",
        rating: 5,
        quote:
          "They move beautifully and frame the face in a very flattering way.",
      },
      {
        author: "Camille J.",
        location: "Paris",
        rating: 5,
        quote:
          "Light enough for an entire evening, but still unmistakably special.",
      },
    ],
    pairedSlugs: ["lumiere-pendant", "etoile-diamond-ring", "orion-cuff"],
  },
  "aurora-bracelet": {
    availability: {
      label: "Concierge delivery available",
      detail: "Book a private appointment for fit guidance and styling.",
      tone: "available",
    },
    options: [
      {
        label: "Bracelet Size",
        values: ["Small", "Medium", "Large"],
        selected: "Medium",
      },
      {
        label: "Metal",
        values: ["18K Yellow Gold", "18K Rose Gold"],
        selected: "18K Yellow Gold",
      },
      {
        label: "Stone Accent",
        values: ["Diamond", "Diamond + Onyx", "Diamond + Mother of Pearl"],
        selected: "Diamond",
      },
    ],
    reviews: [
      {
        author: "Isabelle P.",
        location: "Geneva",
        rating: 5,
        quote:
          "The clasp feels incredibly secure and the bracelet has a beautiful golden warmth.",
      },
      {
        author: "Naomi F.",
        location: "Los Angeles",
        rating: 5,
        quote:
          "Exactly the sort of polished finishing touch that elevates everything else you wear.",
      },
    ],
    pairedSlugs: ["etoile-diamond-ring", "lumiere-pendant", "celeste-earrings"],
  },
};

function buildFallbackOptions(product: Product): ProductOption[] {
  if (product.option) {
    return [product.option];
  }

  return [
    {
      label: "Metal",
      values: ["18K Yellow Gold", "18K White Gold", "18K Rose Gold"],
      selected: "18K Yellow Gold",
    },
  ];
}

export function getProductExperience(product: Product) {
  const explicitExperience = productExperienceBySlug[product.slug];

  return {
    availability: explicitExperience?.availability ?? {
      label: "Available by appointment",
      detail: product.shippingNote,
      tone: "available" as const,
    },
    options: explicitExperience?.options ?? buildFallbackOptions(product),
    reviews: explicitExperience?.reviews ?? [],
    pairedSlugs: explicitExperience?.pairedSlugs ?? product.relatedSlugs,
  };
}
