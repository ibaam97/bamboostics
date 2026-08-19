import type { Product } from "./types";
import { bambooRollUpBlinds } from "./bamboo-roll-up-blinds";
import { bambooPenHolders } from "./bamboo-pen-holders";
import { woodenLatticeFence } from "./wooden-lattice-fence";
import { precisionBambooStrips } from "./precision-bamboo-strips";

export type { Product, ProductSize } from "./types";
export { PRODUCT_IMAGE_WIDTH, PRODUCT_IMAGE_HEIGHT } from "./types";

export const products: Product[] = [
  bambooRollUpBlinds,
  bambooPenHolders,
  woodenLatticeFence,
  precisionBambooStrips,
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
