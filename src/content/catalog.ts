export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductOption = {
  label: string;
  values: string[];
  selected: string;
  helperText?: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  collectionLabel: string;
  price: string;
  shippingNote: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string[];
  craftsmanship: string[];
  deliveryAndCare: string[];
  specs: ProductSpec[];
  option?: ProductOption;
  badges: ProductSpec[];
  relatedSlugs: string[];
};

export type Collection = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  intro: string;
  heroImage: string;
  feature: string;
};

export const collectionsCatalog: Collection[] = [
  {
    slug: "necklaces-pendants",
    name: "Necklaces & Pendants",
    shortName: "Necklaces",
    description:
      "Sculpted chains, diamond pendants, and heirloom silhouettes designed to rest lightly against the skin.",
    intro:
      "This collection balances ceremony and ease, from line necklaces intended for evening dressing to pendants made for daily wear.",
    heroImage:
      "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2V8ZW58MHwwfDB8fHww",
    feature: "Layered gold, graduated diamonds, and clean proportions.",
  },
  {
    slug: "rings",
    name: "Rings",
    shortName: "Rings",
    description:
      "Engagement rings, cocktail settings, and signature bands cut for light, balance, and longevity.",
    intro:
      "Our rings pair exact stone setting with a quieter editorial aesthetic, allowing craftsmanship to lead the design language.",
    heroImage:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3N8ZW58MHx8MHx8fDA%3D",
    feature: "Solitaire architecture, halo settings, and hand-finished bands.",
  },
  {
    slug: "earrings",
    name: "Earrings",
    shortName: "Earrings",
    description:
      "Studs, drops, and chandelier forms composed to frame the face with movement and controlled brilliance.",
    intro:
      "From pared-back diamond studs to statement drops, this edit is tuned for proportion, not excess.",
    heroImage:
      "https://images.unsplash.com/photo-1684616289742-2e48aff416bf?auto=format&fit=crop&w=1200&q=80",
    feature: "Subtle swing, precise setting, and a softened high-jewelry mood.",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    shortName: "Bracelets",
    description:
      "Tennis bracelets, cuffs, and articulated links that feel substantial while remaining effortlessly fluid.",
    intro:
      "Each bracelet is designed to drape with ease and hold its line, whether worn alone or stacked.",
    heroImage:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhY2VsZXRzfGVufDB8MHwwfHx8Mg%3D%3D",
    feature:
      "Measured weight, flexible articulation, and polished closure details.",
  },
];

export const productsCatalog: Product[] = [
  {
    slug: "etoile-diamond-ring",
    name: "Etoile Diamond Ring",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Bridal Collection",
    price: "$18,500",
    shippingNote: "Free shipping worldwide",
    image:
      "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "A brilliant-cut center stone framed by a halo of smaller diamonds in 18k white gold.",
    description: [
      "The Etoile Diamond Ring is built around a 2-carat brilliant-cut center stone selected for exceptional clarity and cool white fire.",
      "A delicate halo amplifies the profile while keeping the setting light, creating a ring that feels ceremonial without becoming overly ornate.",
    ],
    craftsmanship: [
      "Each ring is hand-set over a six-week atelier process, with every claw aligned under magnification to preserve symmetry from every angle.",
      "The band is mirror-polished by hand, then inspected stone by stone so the finished piece feels refined in both touch and light reflection.",
    ],
    deliveryAndCare: [
      "Orders arrive in our signature presentation case and are sent by insured courier with white-glove packaging.",
      "To preserve brilliance, store the piece separately and clean occasionally with warm water, mild soap, and a lint-free cloth.",
    ],
    specs: [
      { label: "Material", value: "18K White Gold" },
      { label: "Center Stone", value: "2ct Diamond" },
      { label: "Diamond Clarity", value: "VVS1" },
      { label: "Diamond Color", value: "D (Colorless)" },
      { label: "Setting", value: "Halo Setting" },
      { label: "Certificate", value: "GIA Certified" },
    ],
    option: {
      label: "Ring Size",
      values: ["4", "5", "6", "7", "8", "9"],
      selected: "6",
      helperText: "Size Guide",
    },
    badges: [
      { label: "Free Shipping", value: "Worldwide delivery" },
      { label: "Lifetime Warranty", value: "Guaranteed forever" },
      { label: "Certified Diamonds", value: "GIA authenticated" },
      { label: "30-Day Returns", value: "Hassle-free policy" },
    ],
    relatedSlugs: ["lumiere-pendant", "celeste-earrings", "aurora-bracelet"],
  },
  {
    slug: "solstice-band",
    name: "Solstice Band",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Jawhar Signature",
    price: "$7,900",
    shippingNote: "Complimentary concierge delivery",
    image:
      "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "A diamond-set eternity silhouette with a quieter profile for everyday wear.",
    description: [
      "Solstice is designed as an all-day diamond band, balancing presence with restraint through a lower, more architectural setting.",
      "The profile sits close to the hand, making it ideal for stacking or as a refined standalone signature.",
    ],
    craftsmanship: [
      "Shared claws are filed by hand so each stone reads individually while the line remains uninterrupted.",
      "The inside of the band is comfort-rounded and polished for a soft, easy fit.",
    ],
    deliveryAndCare: [
      "Delivered in our embossed lacquer case with insured shipping included.",
      "We recommend removing the piece before weight training, swimming, or heavy impact activity.",
    ],
    specs: [
      { label: "Material", value: "18K Yellow Gold" },
      { label: "Stone Weight", value: "1.2ct Total" },
      { label: "Setting", value: "Shared Claw" },
      { label: "Finish", value: "High Polish" },
      { label: "Profile", value: "Low Comfort Fit" },
      { label: "Origin", value: "Handcrafted in Paris" },
    ],
    option: {
      label: "Ring Size",
      values: ["4", "5", "6", "7", "8", "9"],
      selected: "7",
      helperText: "Size Guide",
    },
    badges: [
      { label: "Jawhar Finish", value: "Hand polished" },
      { label: "Repair Service", value: "Annual inspection" },
      { label: "Complimentary Engraving", value: "Available on request" },
      { label: "Private Styling", value: "By appointment" },
    ],
    relatedSlugs: ["etoile-diamond-ring", "lumiere-pendant", "aurora-bracelet"],
  },
  {
    slug: "lumiere-pendant",
    name: "Lumiere Pendant",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "Necklace Collection",
    price: "$12,200",
    shippingNote: "Insured shipping included",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "A pear-shaped diamond pendant suspended from a fine articulated chain.",
    description: [
      "The Lumiere Pendant is designed to sit precisely at the collarbone, catching light through a balanced pear-shaped center stone.",
      "Its chain is engineered with a subtle fluidity so the pendant remains stable and elegant in motion.",
    ],
    craftsmanship: [
      "Each pendant basket is sculpted to hold the stone lightly, allowing as much light as possible through the pavilion.",
      "The chain links are solder-finished for durability while preserving a delicate visual rhythm.",
    ],
    deliveryAndCare: [
      "Your pendant arrives in a suede-lined case suitable for gifting or safekeeping.",
      "Avoid direct contact with perfume and lotions to maintain brilliance and polish.",
    ],
    specs: [
      { label: "Material", value: "18K White Gold" },
      { label: "Center Stone", value: "1.4ct Pear Diamond" },
      { label: "Chain Length", value: "16-18 in adjustable" },
      { label: "Clasp", value: "Jawhar lobster clasp" },
      { label: "Certificate", value: "GIA Certified" },
      { label: "Finish", value: "Mirror polish" },
    ],
    option: {
      label: "Chain Length",
      values: ["16 in", "17 in", "18 in"],
      selected: "17 in",
    },
    badges: [
      { label: "Insured Delivery", value: "Worldwide shipping" },
      { label: "Pendant Case", value: "Signature presentation" },
      { label: "Stone Sourcing", value: "Responsibly selected" },
      { label: "Aftercare", value: "Annual cleaning offered" },
    ],
    relatedSlugs: [
      "etoile-diamond-ring",
      "celeste-earrings",
      "seraphina-tennis-necklace",
    ],
  },
  {
    slug: "seraphina-tennis-necklace",
    name: "Seraphina Tennis Necklace",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "High Jewelry",
    price: "$28,600",
    shippingNote: "Private delivery arranged",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Graduated round diamonds set in a clean riviere line for evening dressing.",
    description: [
      "Seraphina is composed as a continuous line of graduating stones, calibrated for brightness without visual heaviness.",
      "The necklace rests close to the neck and is finished with an almost invisible clasp, allowing the stones to remain the focus.",
    ],
    craftsmanship: [
      "Each seat is cut individually to maintain consistent height and light return across the necklace.",
      "The articulation is tested extensively to ensure fluid movement and an even curve when worn.",
    ],
    deliveryAndCare: [
      "This piece is delivered by private insured courier and may be scheduled with a client advisor.",
      "Store flat in its case to preserve the line and prevent twisting between wears.",
    ],
    specs: [
      { label: "Material", value: "18K White Gold" },
      { label: "Total Carat Weight", value: "9.5ct" },
      { label: "Length", value: "15.5 in" },
      { label: "Closure", value: "Concealed clasp" },
      { label: "Setting", value: "Four-prong riviere" },
      { label: "Origin", value: "Atelier made" },
    ],
    option: {
      label: "Length",
      values: ["15 in", "15.5 in", "16 in"],
      selected: "15.5 in",
    },
    badges: [
      { label: "Private Delivery", value: "Scheduled handoff" },
      { label: "Insurance", value: "Included in transit" },
      { label: "Jawhar Service", value: "Clasp adjustment available" },
      { label: "Documentation", value: "Stone report enclosed" },
    ],
    relatedSlugs: ["lumiere-pendant", "celeste-earrings", "serein-timepiece"],
  },
  {
    slug: "celeste-earrings",
    name: "Celeste Earrings",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Evening Collection",
    price: "$9,800",
    shippingNote: "Complimentary shipping worldwide",
    image:
      "https://images.unsplash.com/photo-1684616289742-2e48aff416bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1684616289742-2e48aff416bf?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Diamond drop earrings with soft movement and a clean elongated line.",
    description: [
      "Celeste is designed to lengthen the profile of the face through a slender vertical drop and precisely matched stones.",
      "The silhouette feels polished rather than ornate, making it equally suited to black tie and pared-back evening wear.",
    ],
    craftsmanship: [
      "Pair-matching is done by hand for tone, brightness, and cut so both earrings read identically when worn.",
      "The articulated joints are balanced to create controlled motion instead of excessive swing.",
    ],
    deliveryAndCare: [
      "Each pair arrives in a fitted suede insert for secure storage during travel.",
      "Wipe the posts after wear and avoid storing alongside harder metals to protect the finish.",
    ],
    specs: [
      { label: "Material", value: "18K White Gold" },
      { label: "Stone Weight", value: "2.1ct Total" },
      { label: "Length", value: "34 mm" },
      { label: "Closure", value: "Locking post back" },
      { label: "Style", value: "Articulated drop" },
      { label: "Origin", value: "Paris atelier" },
    ],
    option: {
      label: "Finish",
      values: ["White Gold", "Yellow Gold"],
      selected: "White Gold",
    },
    badges: [
      { label: "Complimentary Shipping", value: "Worldwide delivery" },
      { label: "Matched Stones", value: "Selected in pairs" },
      { label: "Secure Closure", value: "Locking post back" },
      { label: "Jawhar Care", value: "Cleaning service offered" },
    ],
    relatedSlugs: ["lumiere-pendant", "etoile-diamond-ring", "aurora-bracelet"],
  },
  {
    slug: "sable-studs",
    name: "Sable Studs",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Everyday Icons",
    price: "$4,600",
    shippingNote: "Express insured delivery",
    image:
      "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1651160670627-2896ddf7822f?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "Diamond studs scaled for daily wear with a softly domed basket setting.",
    description: [
      "Sable Studs are designed as a permanent wardrobe piece, balancing brilliance with restraint.",
      "The basket is slightly domed to sit comfortably against the ear while still maximizing the visible spread of each stone.",
    ],
    craftsmanship: [
      "The setting walls are refined by hand so the silhouette remains delicate from profile view.",
      "Post placement is calibrated to keep the earrings upright and balanced once worn.",
    ],
    deliveryAndCare: [
      "Presented in a compact travel case with insured express delivery.",
      "We recommend storing earrings with backs attached to prevent unnecessary wear on the posts.",
    ],
    specs: [
      { label: "Material", value: "18K Yellow Gold" },
      { label: "Stone Weight", value: "0.9ct Total" },
      { label: "Diameter", value: "5 mm" },
      { label: "Closure", value: "Friction back" },
      { label: "Finish", value: "Hand polish" },
      { label: "Use", value: "Daily wear" },
    ],
    option: {
      label: "Finish",
      values: ["Yellow Gold", "White Gold", "Rose Gold"],
      selected: "Yellow Gold",
    },
    badges: [
      { label: "Express Shipping", value: "Insured delivery" },
      { label: "Travel Case", value: "Included" },
      { label: "Daily Wear", value: "Low-profile setting" },
      { label: "Aftercare", value: "Post tightening available" },
    ],
    relatedSlugs: ["celeste-earrings", "solstice-band", "lumiere-pendant"],
  },
  {
    slug: "aurora-bracelet",
    name: "Aurora Bracelet",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Bracelet Collection",
    price: "$15,400",
    shippingNote: "Secure worldwide delivery",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    ],
    shortDescription:
      "A flexible line bracelet with calibrated diamonds and a near-invisible clasp.",
    description: [
      "Aurora is a classic tennis bracelet refined to feel less conventional and more architectural in line.",
      "Its stones are spaced and seated to create a cleaner rhythm across the wrist, with enough weight to feel luxurious but never rigid.",
    ],
    craftsmanship: [
      "Each link is articulated for fluidity and checked for even tension so the bracelet drapes beautifully when worn.",
      "The clasp is integrated and hand-finished to keep the visual line uninterrupted.",
    ],
    deliveryAndCare: [
      "Delivered in a structured bracelet case with secure insured shipping.",
      "Store flat and clasped when not in use, and avoid twisting the bracelet during wear.",
    ],
    specs: [
      { label: "Material", value: "18K White Gold" },
      { label: "Total Carat Weight", value: "4.8ct" },
      { label: "Length", value: "6.75 in" },
      { label: "Closure", value: "Concealed double lock" },
      { label: "Setting", value: "Four-prong line" },
      { label: "Finish", value: "Mirror polish" },
    ],
    option: {
      label: "Length",
      values: ["6.5 in", "6.75 in", "7 in"],
      selected: "6.75 in",
    },
    badges: [
      { label: "Secure Delivery", value: "Insured shipping" },
      { label: "Integrated Clasp", value: "Double-lock closure" },
      { label: "Jawhar Service", value: "Length adjustment available" },
      { label: "30-Day Returns", value: "Eligible on unworn pieces" },
    ],
    relatedSlugs: [
      "etoile-diamond-ring",
      "celeste-earrings",
      "serein-timepiece",
    ],
  },
  {
    slug: "orion-cuff",
    name: "Orion Cuff",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Statement Bracelet",
    price: "$11,900",
    shippingNote: "Complimentary express delivery",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription:
      "A polished open cuff with tapered diamond-set ends and sculptural weight.",
    description: [
      "Orion reads as jewelry first, using a sculpted open silhouette that feels confident and deliberate on the wrist.",
      "Diamond-set terminals add brilliance without distracting from the purity of the form.",
    ],
    craftsmanship: [
      "The cuff is hollow-formed for comfort, then weighted strategically so it feels substantial rather than bulky.",
      "Terminal settings are finished flush to maintain the clean, uninterrupted edge line.",
    ],
    deliveryAndCare: [
      "Packed in a rigid case and shipped via insured express service.",
      "Avoid forcing the cuff open and closed repeatedly; for fit guidance, consult our advisor team.",
    ],
    specs: [
      { label: "Material", value: "18K Yellow Gold" },
      { label: "Stone Weight", value: "0.6ct Total" },
      { label: "Profile", value: "Open cuff" },
      { label: "Finish", value: "Satin exterior, polished interior" },
      { label: "Fit", value: "Small / Medium" },
      { label: "Origin", value: "Hand-finished" },
    ],
    option: {
      label: "Size",
      values: ["Small", "Medium", "Large"],
      selected: "Medium",
    },
    badges: [
      { label: "Express Service", value: "Insured delivery" },
      { label: "Fit Guidance", value: "Advisor assisted" },
      { label: "Jawhar Finish", value: "Hand brushed and polished" },
      { label: "Private Appointment", value: "Available" },
    ],
    relatedSlugs: ["aurora-bracelet", "solstice-band", "serein-timepiece"],
  },
  {
    slug: "classic-diamond-pendant",
    name: "Classic Diamond Pendant",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "Necklace Collection",
    price: "$4,500",
    shippingNote: "Free shipping worldwide",
    image:
      "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1724937721228-f7bf3df2a4d8?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription: "A minimalist round-cut diamond pendant.",
    description: [
      "This classic pendant features a flawless round diamond in a delicate setting.",
    ],
    craftsmanship: ["Hand-polished to ensure maximum brilliance."],
    deliveryAndCare: ["Ships in secure packaging. Polish gently."],
    specs: [{ label: "Material", value: "18K White Gold" }],
    badges: [{ label: "Certified", value: "GIA Certified" }],
    relatedSlugs: [],
  },
  {
    slug: "sapphire-teardrop-necklace",
    name: "Sapphire Teardrop Necklace",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "Necklace Collection",
    price: "$6,200",
    shippingNote: "Insured shipping",
    image:
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG5lY2tsYWNlfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG5lY2tsYWNlfGVufDB8fDB8fHww",
    ],
    shortDescription: "A striking deep blue sapphire teardrop.",
    description: [
      "A stunning deep blue sapphire mounted on an 18K white gold chain.",
    ],
    craftsmanship: ["Carefully bezel-set."],
    deliveryAndCare: ["Ships in a velvet box. Avoid chemicals."],
    specs: [{ label: "Stone", value: "Sapphire" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "gold-chain-collar",
    name: "Gold Chain Collar",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "Necklace Collection",
    price: "$3,800",
    shippingNote: "Express shipping",
    image:
      "https://images.unsplash.com/photo-1721807550979-6e662d370e92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNoYWlufGVufDB8MHwwfHx8Mg%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1721807550979-6e662d370e92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGNoYWlufGVufDB8MHwwfHx8Mg%3D%3D",
    ],
    shortDescription: "A bold, solid gold chain link collar.",
    description: ["Make a statement with this heavy gold chain collar."],
    craftsmanship: ["Solid cast links."],
    deliveryAndCare: ["Insured delivery."],
    specs: [{ label: "Material", value: "18K Yellow Gold" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "emerald-halo-pendant",
    name: "Emerald Halo Pendant",
    categorySlug: "necklaces-pendants",
    categoryName: "Necklaces & Pendants",
    collectionLabel: "Necklace Collection",
    price: "$5,900",
    shippingNote: "Complimentary delivery",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription: "A vibrant emerald surrounded by diamonds.",
    description: ["A rich green emerald framed by brilliant cut diamonds."],
    craftsmanship: ["Prong set with a delicate halo."],
    deliveryAndCare: ["Complimentary insured delivery."],
    specs: [{ label: "Center Stone", value: "Emerald" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "aurelia-solitaire-ring",
    name: "Aurelia Solitaire Ring",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Bridal Collection",
    price: "$14,000",
    shippingNote: "Free shipping worldwide",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmluZ3xlbnwwfDB8MHx8fDI%3D",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmluZ3xlbnwwfDB8MHx8fDI%3D",
    ],
    shortDescription:
      "A timeless solitaire diamond ring in an 18k yellow gold setting.",
    description: [
      "Classic and refined, the Aurelia Solitaire highlights a brilliant single stone.",
    ],
    craftsmanship: ["Hand-crafted to perfection."],
    deliveryAndCare: ["Insured shipping included. Clean with warm water."],
    specs: [{ label: "Material", value: "18K Yellow Gold" }],
    badges: [{ label: "Free Shipping", value: "Worldwide" }],
    relatedSlugs: [],
  },
  {
    slug: "luna-pave-band",
    name: "Luna Pavé Band",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Jawhar Signature",
    price: "$5,200",
    shippingNote: "Complimentary concierge delivery",
    image:
      "https://images.unsplash.com/photo-1591209627710-d2427565a41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpbmd8ZW58MHwwfDB8fHwy",
    gallery: [
      "https://images.unsplash.com/photo-1591209627710-d2427565a41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpbmd8ZW58MHwwfDB8fHwy",
    ],
    shortDescription:
      "A delicate band encrusted with perfectly matched pavé diamonds.",
    description: ["The Luna Pavé Band provides a continuous shimmer."],
    craftsmanship: ["Micro-pavé setting."],
    deliveryAndCare: ["Delivered in our lacquer case."],
    specs: [{ label: "Material", value: "18K White Gold" }],
    badges: [{ label: "Jawhar Finish", value: "Hand polished" }],
    relatedSlugs: [],
  },
  {
    slug: "nova-cluster-ring",
    name: "Nova Cluster Ring",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Evening Collection",
    price: "$9,800",
    shippingNote: "Free shipping worldwide",
    image:
      "https://images.unsplash.com/photo-1677948655785-898116437d92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpbmd8ZW58MHwwfDB8fHwy",
    gallery: [
      "https://images.unsplash.com/photo-1677948655785-898116437d92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpbmd8ZW58MHwwfDB8fHwy",
    ],
    shortDescription: "An asymmetrical cluster of varied cut diamonds.",
    description: ["A modern take on the cocktail ring."],
    craftsmanship: ["Expertly balanced setting."],
    deliveryAndCare: ["Insured delivery."],
    specs: [{ label: "Material", value: "Platinum" }],
    badges: [{ label: "Certified Diamonds", value: "GIA authenticated" }],
    relatedSlugs: [],
  },
  {
    slug: "stella-eternity-ring",
    name: "Stella Eternity Ring",
    categorySlug: "rings",
    categoryName: "Rings",
    collectionLabel: "Bridal Collection",
    price: "$11,500",
    shippingNote: "Complimentary delivery",
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJpbmd8ZW58MHwwfDB8fHwy",
    gallery: [
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJpbmd8ZW58MHwwfDB8fHwy",
    ],
    shortDescription: "A full eternity band with emerald-cut diamonds.",
    description: ["A statement of eternal commitment."],
    craftsmanship: ["Seamless emerald cuts."],
    deliveryAndCare: ["Signature presentation case."],
    specs: [{ label: "Material", value: "18K White Gold" }],
    badges: [{ label: "Lifetime Warranty", value: "Guaranteed forever" }],
    relatedSlugs: [],
  },
  {
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Evening Collection",
    price: "$2,400",
    shippingNote: "Insured shipping",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription: "Lustrous South Sea pearls suspended from diamonds.",
    description: ["Classic elegance defined by large, glowing pearls."],
    craftsmanship: ["Carefully matched pairs."],
    deliveryAndCare: ["Avoid perfume contact."],
    specs: [{ label: "Stone", value: "South Sea Pearl" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "diamond-hoops",
    name: "Diamond Hoops",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Everyday Icons",
    price: "$3,100",
    shippingNote: "Complimentary delivery",
    image:
      "https://images.unsplash.com/photo-1717086672283-0ddadd1e1036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVhcnJuZ3N8ZW58MHwwfDB8fHwy",
    gallery: [
      "https://images.unsplash.com/photo-1717086672283-0ddadd1e1036?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVhcnJuZ3N8ZW58MHwwfDB8fHwy",
    ],
    shortDescription: "Sleek gold hoops lined with diamonds.",
    description: ["A modern essential for every jewelry collection."],
    craftsmanship: ["Inside-out diamond setting."],
    deliveryAndCare: ["Ships in secure packaging."],
    specs: [{ label: "Material", value: "18K Yellow Gold" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "sapphire-studs",
    name: "Sapphire Studs",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Everyday Icons",
    price: "$1,800",
    shippingNote: "Express shipping",
    image:
      "https://images.unsplash.com/photo-1707195079736-ea85a2a22313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGVhcnJuZ3N8ZW58MHwwfDB8fHwy",
    gallery: [
      "https://images.unsplash.com/photo-1707195079736-ea85a2a22313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGVhcnJuZ3N8ZW58MHwwfDB8fHwy",
    ],
    shortDescription: "Deep blue sapphires in a minimalist setting.",
    description: ["A vibrant pop of color for everyday wear."],
    craftsmanship: ["Four-prong setting."],
    deliveryAndCare: ["Insured delivery."],
    specs: [{ label: "Stone", value: "Sapphire" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "emerald-chandelier-earrings",
    name: "Emerald Chandelier Earrings",
    categorySlug: "earrings",
    categoryName: "Earrings",
    collectionLabel: "Evening Collection",
    price: "$8,500",
    shippingNote: "Private courier service",
    image:
      "https://images.unsplash.com/photo-1589095053205-8fc842336f4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxlYXJybmdzfGVufDB8MHwwfHx8Mg%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1589095053205-8fc842336f4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxlYXJybmdzfGVufDB8MHwwfHx8Mg%3D%3D",
    ],
    shortDescription: "Dramatic cascading emerald and diamond earrings.",
    description: ["A show-stopping design for special occasions."],
    craftsmanship: ["Intricate articulated links."],
    deliveryAndCare: ["Delivered via white-glove service."],
    specs: [{ label: "Stone", value: "Emerald & Diamond" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "gold-link-bracelet",
    name: "Gold Link Bracelet",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Bracelet Collection",
    price: "$4,200",
    shippingNote: "Free worldwide delivery",
    image:
      "https://images.unsplash.com/photo-1655707063513-a08dad26440e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhY2VsZXRzfGVufDB8MHwwfHx8Mg%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1655707063513-a08dad26440e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhY2VsZXRzfGVufDB8MHwwfHx8Mg%3D%3D",
    ],
    shortDescription: "A bold, interlocking gold chain bracelet.",
    description: ["A modern interpretation of the classic curb chain."],
    craftsmanship: ["Solid cast gold links."],
    deliveryAndCare: ["Ships in secure packaging."],
    specs: [{ label: "Material", value: "18K Yellow Gold" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "golden-bangle",
    name: "Golden Bangle",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Statement Bracelet",
    price: "$6,800",
    shippingNote: "Complimentary delivery",
    image:
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJhbmdsZXxlbnwwfDB8MHx8fDI%3D",
    gallery: [
      "https://images.unsplash.com/photo-1758995116383-f51775896add?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJhbmdsZXxlbnwwfDB8MHx8fDI%3D",
    ],
    shortDescription: "A rigid gold bangle with a line of inset diamonds.",
    description: ["Sleek and stackable, perfect alone or layered."],
    craftsmanship: ["Hinged design for comfort."],
    deliveryAndCare: ["Insured shipping included."],
    specs: [{ label: "Material", value: "18K White Gold" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "sapphire-tennis-bracelet",
    name: "Sapphire Tennis Bracelet",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Bracelet Collection",
    price: "$12,000",
    shippingNote: "Private delivery",
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1200&q=80",
    ],
    shortDescription: "Alternating sapphire and diamond stones.",
    description: ["A colorful twist on the classic tennis bracelet."],
    craftsmanship: ["Secure box clasp with safety."],
    deliveryAndCare: ["Ships in signature ribbon-tied box."],
    specs: [{ label: "Stone", value: "Sapphire & Diamond" }],
    badges: [],
    relatedSlugs: [],
  },
  {
    slug: "pearl-cuff",
    name: "Pearl Cuff",
    categorySlug: "bracelets",
    categoryName: "Bracelets",
    collectionLabel: "Statement Bracelet",
    price: "$3,500",
    shippingNote: "Express shipping",
    image:
      "https://images.unsplash.com/photo-1704203355458-b36cb43eacf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyYWNlbGV0c3xlbnwwfDB8MHx8fDI%3D",
    gallery: [
      "https://images.unsplash.com/photo-1704203355458-b36cb43eacf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyYWNlbGV0c3xlbnwwfDB8MHx8fDI%3D",
    ],
    shortDescription: "An open gold cuff capped with twin pearls.",
    description: ["A contemporary design highlighting organic pearl forms."],
    craftsmanship: ["Hand-formed cuff wire."],
    deliveryAndCare: ["Avoid bending repeatedly."],
    specs: [{ label: "Material", value: "18K Yellow Gold & Pearl" }],
    badges: [],
    relatedSlugs: [],
  },
];

export function getCollectionBySlug(slug: string) {
  return collectionsCatalog.find((collection) => collection.slug === slug);
}

export function getProductsByCollection(slug: string) {
  return productsCatalog.filter((product) => product.categorySlug === slug);
}

export function getProductBySlug(slug: string) {
  return productsCatalog.find((product) => product.slug === slug);
}

export function searchProducts(products: Product[], rawQuery: string) {
  const query = rawQuery.trim().toLowerCase();

  if (!query) {
    return products;
  }

  return products.filter((product) => {
    const haystack = [
      product.name,
      product.categoryName,
      product.collectionLabel,
      product.shortDescription,
      ...product.description,
      ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
