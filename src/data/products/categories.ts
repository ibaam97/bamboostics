export const productCategories = [
  {
    name: "Doors",
    slugs: ["horizontal-culm-door", "vertical-culm-door", "strip-door", "slat-door"],
  },
  {
    name: "Furniture & Storage",
    slugs: [
      "wardrobe",
      "bookshelf",
      "open-shelf-800",
      "open-shelf-400",
      "kitchen-wall-cabinet",
      "culm-shelving",
      "culm-shoe-rack",
      "garment-rack",
      "plant-stand",
      "towel-ladder",
      "kitchen-wall-organiser",
      "narrow-wheeled-rack",
      "small-wall-shelf",
    ],
  },
  {
    name: "Lighting",
    slugs: ["wall-light-up-down", "wall-light-slotted", "pendant-light"],
  },
  {
    name: "Screens & Fencing",
    slugs: [
      "wooden-lattice-fence",
      "bamboo-roll-up-blinds",
      "folding-room-divider",
      "close-culm-fence",
      "outdoor-screen",
      "lattice-bay-panel",
    ],
  },
  {
    name: "Panels & Ceilings",
    slugs: ["wall-panel-modules", "strip-ceiling", "louvred-panel", "strip-panel"],
  },
  {
    name: "Home Accessories",
    slugs: ["bamboo-pen-holders", "small-culm-items", "bath-mat", "bath-tray", "table-mat"],
  },
  {
    name: "Bamboo Materials",
    slugs: [
      "precision-bamboo-strips",
      "untreated-culms",
      "treated-culms",
      "rustic-strips",
      "slats",
      "culm-sections",
    ],
  },
];

export function getProductCategory(slug: string): string {
  const matches = productCategories.filter((category) => category.slugs.includes(slug));
  if (matches.length !== 1) {
    throw new Error(`Product "${slug}" must belong to exactly one catalogue type.`);
  }
  return matches[0].name;
}
