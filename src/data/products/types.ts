export interface ProductSize {
  size: string;
  grade: string;
  applications: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  /** Meta description derived from the short description, kept under 160 characters. */
  metaDescription: string;
  fullDescription: string[];
  keyFeatures: string[];
  idealFor: string;
  image: string;
  imageAlt: string;
  /** Only present for products supplied in graded sizes (Precision Bamboo Strips). */
  sizes?: ProductSize[];
}

/** Shared source dimensions for every product image (WebP + JPEG fallback). */
export const PRODUCT_IMAGE_WIDTH = 1536;
export const PRODUCT_IMAGE_HEIGHT = 1024;
