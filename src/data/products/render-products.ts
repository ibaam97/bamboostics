import type { Product } from "./types";

type RenderProductSeed = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  gallery?: string[];
};

const commonFeatures = [
  "Made from sustainably sourced bamboo",
  "Crafted for durability and daily use",
  "Natural finish with distinctive grain",
  "Suitable for residential and commercial projects",
];

function createMetaDescription(shortDescription: string): string {
  if (shortDescription.length <= 157) {
    return shortDescription;
  }

  return `${shortDescription.slice(0, 154).trimEnd()}...`;
}

function toRenderPath(fileName: string): string {
  return `/products/renders/${fileName}`;
}

function toProductImagePath(fileName: string): string {
  return fileName.startsWith("/ai-generated/") ? fileName : toRenderPath(fileName);
}

function generatedGalleryImages(slug: string, name: string) {
  return [2, 3].map((view) => ({
    src: `/ai-generated/${slug}-0${view}.jpg`,
    alt: `${name} AI-generated lifestyle view ${view - 1}.`,
  }));
}

const renderProductSeeds: RenderProductSeed[] = [
  {
    slug: "horizontal-culm-door",
    name: "Horizontal Culm Door",
    tagline: "Whole-culm texture, modern fit.",
    shortDescription:
      "Interior bamboo door built with horizontal culm sections for a distinctive natural pattern and strong visual character.",
    image: "/ai-generated/horizontal-culm-door.jpg",
    imageAlt: "A horizontal bamboo culm door shown in a finished interior setting.",
    imageFit: "contain",
    gallery: ["door-culm-horizontal-render-front.jpg", "door-culm-horizontal-render-close.jpg"],
  },
  {
    slug: "vertical-culm-door",
    name: "Vertical Culm Door",
    tagline: "Bold vertical lines in bamboo.",
    shortDescription:
      "A vertical culm door design that combines natural bamboo texture with a refined frame for contemporary interiors.",
    image: "/ai-generated/vertical-culm-door.jpg",
    imageAlt: "A vertical bamboo culm door in a light timber frame.",
    gallery: ["door-culm-vertical-render-front.jpg", "door-culm-vertical-render-close.jpg"],
  },
  {
    slug: "strip-door",
    name: "Strip Door",
    tagline: "Clean strip geometry, warm tone.",
    shortDescription:
      "Minimal bamboo strip door with linear detailing, designed for spaces that need warmth without visual clutter.",
    image: "/ai-generated/strip-door.jpg",
    imageAlt: "A bamboo strip door with slim vertical and horizontal strip sections.",
    gallery: ["door-strip-render-front.jpg", "door-strip-render-close.jpg"],
  },
  {
    slug: "slat-door",
    name: "Slat Door",
    tagline: "Natural slat finish for interiors.",
    shortDescription:
      "Interior door finished with tightly arranged bamboo slats for a consistent grain pattern and durable daily use.",
    image: "/ai-generated/slat-door.jpg",
    imageAlt: "A slat-pattern bamboo door with a satin lever handle.",
    gallery: ["door-slat-render-front.jpg", "door-slat-render-close.jpg"],
  },
  {
    slug: "wardrobe",
    name: "Wardrobe",
    tagline: "Large-format bamboo storage.",
    shortDescription:
      "Freestanding wardrobe concept finished in bamboo strips with culm accents, tailored for bedrooms and hospitality spaces.",
    image: "/ai-generated/wardrobe.jpg",
    imageAlt: "A freestanding bamboo wardrobe with multiple doors and brushed handles.",
    gallery: ["wardrobe-render-front.jpg", "wardrobe-render-close.jpg"],
  },
  {
    slug: "bookshelf",
    name: "Bookshelf",
    tagline: "Open shelving with culm accents.",
    shortDescription:
      "Open bamboo bookshelf with balanced proportions for books, décor and everyday display in modern living spaces.",
    image: "/ai-generated/bookshelf.jpg",
    imageAlt: "A tall open bookshelf with bamboo shelves and culm side accents.",
    gallery: ["bookshelf-render-front.jpg", "bookshelf-render-close.jpg"],
  },
  {
    slug: "open-shelf-800",
    name: "Open Shelf 800",
    tagline: "Wide open shelf for display.",
    shortDescription:
      "An 800 mm wide open shelf in bamboo and culm detailing, built for flexible storage and clean presentation.",
    image: "/ai-generated/open-shelf-800.jpg",
    imageAlt: "A wide open bamboo shelf unit with four levels.",
    gallery: ["open-shelf-800-render-front.jpg", "open-shelf-800-render-close.jpg"],
  },
  {
    slug: "open-shelf-400",
    name: "Open Shelf 400",
    tagline: "Slim storage footprint.",
    shortDescription:
      "A compact 400 mm open shelf for narrow spaces, combining practical storage with natural bamboo character.",
    image: "/ai-generated/open-shelf-400.jpg",
    imageAlt: "A narrow open shelf made with bamboo and culm supports.",
    gallery: ["open-shelf-400-render-front.jpg"],
  },
  {
    slug: "kitchen-wall-cabinet",
    name: "Kitchen Wall Cabinet",
    tagline: "Lightweight overhead storage.",
    shortDescription:
      "Wall-mounted bamboo kitchen cabinet with clean-lined doors and practical internal volume for daily essentials.",
    image: "/ai-generated/kitchen-wall-cabinet.jpg",
    imageAlt: "A wall-mounted bamboo kitchen cabinet with double doors.",
    gallery: [
      "kitchen-cabinet-render-front.jpg",
      "kitchen-cabinet-render-open.jpg",
      "kitchen-cabinet-render-close.jpg",
    ],
  },
  {
    slug: "wall-light-up-down",
    name: "Wall Light (Up & Down)",
    tagline: "Directional architectural lighting.",
    shortDescription:
      "Compact bamboo wall sconce with dual-direction beams that cast soft cones of light above and below.",
    image: "/ai-generated/wall-light-up-down.jpg",
    imageAlt: "A bamboo wall light casting beams upward and downward.",
    gallery: ["lamp-wall-up-down-render-day.jpg"],
  },
  {
    slug: "wall-light-slotted",
    name: "Wall Light (Slotted)",
    tagline: "Soft one-sided accent light.",
    shortDescription:
      "Single-direction bamboo wall light with slotted face detailing for warm ambient lighting on interior walls.",
    image: "/ai-generated/wall-light-slotted.jpg",
    imageAlt: "A slotted bamboo wall light with a warm upward glow.",
    gallery: ["lamp-wall-one-sided-render-day.jpg"],
  },
  {
    slug: "pendant-light",
    name: "Pendant Light",
    tagline: "Focused bamboo pendant glow.",
    shortDescription:
      "Suspended bamboo pendant designed to deliver focused light over dining tables, counters and hospitality settings.",
    image: "/ai-generated/pendant-light.jpg",
    imageAlt: "A hanging bamboo pendant light above a tabletop.",
    gallery: ["lamp-pendant-render-day.jpg"],
  },
  {
    slug: "culm-shelving",
    name: "Culm Shelving",
    tagline: "Shelving built from whole culms.",
    shortDescription:
      "Freestanding shelf concept that showcases full bamboo culms and open structure for breathable, lightweight storage.",
    image: "/ai-generated/culm-shelving.jpg",
    imageAlt: "Freestanding shelf made from whole bamboo culms and horizontal rails.",
    gallery: ["culm-shelving-render-close.jpg"],
  },
  {
    slug: "culm-shoe-rack",
    name: "Culm Shoe Rack",
    tagline: "Ventilated shoe storage.",
    shortDescription:
      "Low-profile shoe rack in full bamboo culm construction, designed to keep footwear aired and organised.",
    image: "/ai-generated/culm-shoe-rack.jpg",
    imageAlt: "A tiered bamboo shoe rack built from whole culm members.",
    gallery: ["culm-shoe-rack-render-close.jpg"],
  },
  {
    slug: "garment-rack",
    name: "Garment Rack",
    tagline: "Open rack for hanging wear.",
    shortDescription:
      "Freestanding bamboo garment rack with hanging rail and base shelf, ideal for bedrooms, boutiques and studios.",
    image: "/ai-generated/garment-rack.jpg",
    imageAlt: "A freestanding bamboo garment rack with upper hanging rail.",
    gallery: ["garment-rack-render-close.jpg"],
  },
  {
    slug: "plant-stand",
    name: "Plant Stand",
    tagline: "Tiered greenery display.",
    shortDescription:
      "Tiered bamboo stand for indoor plants, compact enough for apartments while still offering multiple display levels.",
    image: "/ai-generated/plant-stand.jpg",
    imageAlt: "A multi-level bamboo plant stand for indoor décor.",
    gallery: ["plant-stand-render-close.jpg"],
  },
  {
    slug: "towel-ladder",
    name: "Towel Ladder",
    tagline: "Lean and functional storage.",
    shortDescription:
      "Decorative leaning ladder crafted from bamboo culms, suitable for towels, throws and lightweight accessories.",
    image: "/ai-generated/towel-ladder.jpg",
    imageAlt: "A leaning bamboo ladder used as a towel holder.",
    gallery: ["towel-ladder-render-close.jpg"],
  },
  {
    slug: "kitchen-wall-organiser",
    name: "Kitchen Wall Organiser",
    tagline: "Vertical storage for daily tools.",
    shortDescription:
      "Wall-mounted bamboo organiser for spices, utensils and small kitchen items where counter space is limited.",
    image: "/ai-generated/kitchen-wall-organiser.jpg",
    imageAlt: "A wall-mounted bamboo kitchen organiser shelf.",
    gallery: ["kitchen-wall-organiser-render-close.jpg"],
  },
  {
    slug: "narrow-wheeled-rack",
    name: "Narrow Wheeled Rack",
    tagline: "Pull-out storage for tight gaps.",
    shortDescription:
      "Slim bamboo rack on wheels for narrow spaces beside appliances, pantries or utility areas.",
    image: "/ai-generated/narrow-wheeled-rack.jpg",
    imageAlt: "A narrow bamboo rack on caster wheels for compact storage.",
    gallery: ["narrow-wheeled-rack-render-close.jpg"],
  },
  {
    slug: "small-wall-shelf",
    name: "Small Wall Shelf",
    tagline: "Compact wall-mounted display.",
    shortDescription:
      "Compact bamboo wall shelf that adds practical storage and natural texture to kitchens, bedrooms or hallways.",
    image: "/ai-generated/small-wall-shelf.jpg",
    imageAlt: "A compact wall-mounted bamboo shelf with two levels.",
    gallery: ["small-wall-shelf-render-close.jpg"],
  },
  {
    slug: "wall-panel-modules",
    name: "Wall Panel Modules",
    tagline: "Modular bamboo partitioning.",
    shortDescription:
      "Bamboo wall module system for lightweight partitions, decorative zoning and visual texture indoors.",
    image: "/ai-generated/wall-panel-modules.jpg",
    imageAlt: "Modular bamboo wall panel units arranged as a partition system.",
    gallery: ["wall-panel-modules-render-close.jpg"],
  },
  {
    slug: "strip-ceiling",
    name: "Strip Ceiling",
    tagline: "Linear ceiling finish system.",
    shortDescription:
      "Suspended bamboo strip ceiling concept for warm overhead finishes in residential and commercial interiors.",
    image: "/ai-generated/strip-ceiling.jpg",
    imageAlt: "A bamboo strip ceiling installation in a clean interior.",
    gallery: ["strip-ceiling-render-close.jpg"],
  },
  {
    slug: "folding-room-divider",
    name: "Folding Room Divider",
    tagline: "Flexible spatial separation.",
    shortDescription:
      "Folding bamboo divider that creates temporary zones in open-plan rooms while maintaining visual lightness.",
    image: "/ai-generated/folding-room-divider.jpg",
    imageAlt: "A folding bamboo room divider with alternating strip panels.",
    gallery: ["folding-room-divider-render-close.jpg"],
  },
  {
    slug: "close-culm-fence",
    name: "Close Culm Fence",
    tagline: "Dense privacy with natural culms.",
    shortDescription:
      "Outdoor fence solution using closely arranged bamboo culms to improve privacy and define boundaries.",
    image: "/ai-generated/close-culm-fence.jpg",
    imageAlt: "Outdoor privacy fence formed from close-set vertical bamboo culms.",
    gallery: ["close-culm-fence-render-close.jpg"],
  },
  {
    slug: "outdoor-screen",
    name: "Outdoor Screen",
    tagline: "Freestanding external screening.",
    shortDescription:
      "Freestanding bamboo outdoor screen for patios, entryways and gardens where partial privacy is required.",
    image: "/ai-generated/outdoor-screen.jpg",
    imageAlt: "A freestanding bamboo outdoor screen with planter-style base.",
    gallery: ["outdoor-screen-render-close.jpg"],
  },
  {
    slug: "small-culm-items",
    name: "Small Culm Items",
    tagline: "Compact crafted accessories.",
    shortDescription:
      "Set of small bamboo culm accessories for home styling, utility storage and tabletop organisation.",
    image: "/ai-generated/small-culm-items.jpg",
    imageAlt: "An assortment of small bamboo culm accessories arranged on a shelf.",
    gallery: [
      "small-culm-items-render-close-candles.jpg",
      "small-culm-items-render-close-containers.jpg",
      "small-culm-items-render-close-holders.jpg",
    ],
  },
  {
    slug: "bath-mat",
    name: "Bath Mat",
    tagline: "Natural anti-slip platform.",
    shortDescription:
      "Bamboo bath mat with linear slats for quick drying, comfort underfoot and clean bathroom aesthetics.",
    image: "/ai-generated/bath-mat.jpg",
    imageAlt: "A bamboo bath mat placed on light bathroom tiles.",
    gallery: ["bath-mat-render-close.jpg"],
  },
  {
    slug: "bath-tray",
    name: "Bath Tray",
    tagline: "Relaxed bathside utility.",
    shortDescription:
      "Bamboo bath tray designed to hold toiletries and essentials safely across standard bathtub widths.",
    image: "/ai-generated/bath-tray.jpg",
    imageAlt: "A bamboo bath tray with toiletries and folded cloth.",
    gallery: ["bath-tray-render-close.jpg"],
  },
  {
    slug: "table-mat",
    name: "Table Mat",
    tagline: "Heat-safe bamboo tabletop layer.",
    shortDescription:
      "Woven bamboo table mat for dining and serving, adding natural texture while protecting surfaces.",
    image: "/ai-generated/table-mat.jpg",
    imageAlt: "A bamboo table mat rolled and arranged on a tabletop.",
    gallery: ["table-mat-render-close.jpg"],
  },
  {
    slug: "untreated-culms",
    name: "Untreated Culms",
    tagline: "Raw bamboo poles for fabrication.",
    shortDescription:
      "Naturally harvested untreated bamboo culms suitable for craft, prototyping and treatment workflows.",
    image: "/ai-generated/untreated-culms.jpg",
    imageAlt: "Raw untreated bamboo culms arranged in a bundle.",
  },
  {
    slug: "treated-culms",
    name: "Treated Culms",
    tagline: "Conditioned for longer service life.",
    shortDescription:
      "Treated bamboo culms prepared for improved durability and reliable use in outdoor and interior projects.",
    image: "/ai-generated/treated-culms.jpg",
    imageAlt: "Treated bamboo culms bundled for construction and design use.",
  },
  {
    slug: "rustic-strips",
    name: "Rustic Strips",
    tagline: "Textured strips for creative builds.",
    shortDescription:
      "Rustic bamboo strip stock with natural character for crafts, paneling and decorative assemblies.",
    image: "/ai-generated/rustic-strips.jpg",
    imageAlt: "Rustic bamboo strip pieces aligned for fabrication.",
  },
  {
    slug: "slats",
    name: "Slats",
    tagline: "Standard bamboo slat stock.",
    shortDescription:
      "Straight bamboo slats prepared for joinery, panel work and everyday fabrication tasks.",
    image: "/ai-generated/slats.jpg",
    imageAlt: "A set of smooth bamboo slats laid out by size.",
  },
  {
    slug: "culm-sections",
    name: "Culm Sections",
    tagline: "Cut sections for modular use.",
    shortDescription:
      "Uniform bamboo culm sections cut to usable lengths for décor, fittings and modular construction.",
    image: "/ai-generated/culm-sections.jpg",
    imageAlt: "Short bamboo culm sections in multiple diameters and lengths.",
  },
  {
    slug: "louvred-panel",
    name: "Louvred Panel",
    tagline: "Ventilated panel detailing.",
    shortDescription:
      "Louvred bamboo panel concept for breathable shading, decorative façades and screen partitions.",
    image: "/ai-generated/louvred-panel.jpg",
    imageAlt: "A tall bamboo louvred panel standing upright in an interior scene.",
  },
  {
    slug: "strip-panel",
    name: "Strip Panel (38 mm)",
    tagline: "Thick-panel bamboo composition.",
    shortDescription:
      "38 mm strip-panel concept composed from layered bamboo strips for robust furniture and panel applications.",
    image: "/ai-generated/strip-panel.jpg",
    imageAlt: "A thick laminated bamboo strip panel with visible layered construction.",
  },
  {
    slug: "lattice-bay-panel",
    name: "Lattice Bay Panel",
    tagline: "Single-bay outdoor trellis.",
    shortDescription:
      "Standalone lattice bay panel for gardens, outdoor zoning and climbing plant support applications.",
    image: "/ai-generated/lattice-bay-panel.jpg",
    imageAlt: "A single outdoor bamboo lattice bay panel mounted between posts.",
    gallery: ["lattice-bay-render-close.jpg"],
  },
];

export const renderProducts: Product[] = renderProductSeeds.map((seed) => ({
  slug: seed.slug,
  name: seed.name,
  tagline: seed.tagline,
  shortDescription: seed.shortDescription,
  metaDescription: createMetaDescription(seed.shortDescription),
  fullDescription: [
    seed.shortDescription,
    `Designed and manufactured by Bamboostic with a focus on sustainable materials, practical performance and clean contemporary presentation.`,
  ],
  keyFeatures: commonFeatures,
  idealFor: "Interior fit-outs, furniture projects, hospitality spaces and environmentally conscious developments.",
  image: toProductImagePath(seed.image),
  imageAlt: seed.imageAlt,
  imageFit: seed.imageFit,
  galleryImages: generatedGalleryImages(seed.slug, seed.name),
}));
