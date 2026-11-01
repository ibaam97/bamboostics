"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PRODUCT_IMAGE_WIDTH,
  PRODUCT_IMAGE_HEIGHT,
  type Product,
} from "@/data/products";

type CatalogueProduct = Product & { category: string };

const categoryIconPaths: Record<string, string> = {
  "All products": "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z M6 6h1 M17 6h1 M6 17h1 M17 17h1",
  "Doors": "M4 21V3h16v18 M7 21V6h10v15 M10 6v15 M13 6v15 M15 13h.5 M3 21h18",
  "Furniture & Storage": "M5 3v18 M19 3v18 M4 8h16 M4 14h16 M4 20h16 M9 4v4 M12 5v3 M15 10v4 M7 5h2 M17 16v4",
  "Lighting": "M12 2v5 M7 7h10l3 9H4z M8 7l-1 9 M12 7v9 M16 7l1 9 M10 16a2 2 0 0 0 4 0 M5 20l-1 2 M12 20v2 M19 20l1 2",
  "Screens & Fencing": "M3 4v17 M21 4v17 M3 6h18 M3 18h18 M6 6l12 12 M12 6l9 9 M3 9l9 9 M18 6L6 18 M12 6l-9 9 M21 9l-9 9",
  "Panels & Ceilings": "M3 5l9-3 9 3v14l-9 3-9-3z M3 5l9 3 9-3 M12 8v14 M6 6v14 M9 7v14 M15 7v14 M18 6v14",
  "Home Accessories": "M5 10c0-2 14-2 14 0v10c0 2-14 2-14 0z M5 10c0 2 14 2 14 0 M5 16c0 2 14 2 14 0 M9 10L7 3 M12 9V2 M15 10l3-7",
  "Bamboo Materials": "M5 22V4c0-2 4-2 4 0v18 M5 8h4 M5 16h4 M13 22V6c0-2 4-2 4 0v16 M13 11h4 M13 18h4 M9 5c5 0 8-3 12-2-1 4-5 6-8 5",
};

function CategoryIcon({ name }: { name: string }) {
  const path = categoryIconPaths[name];
  if (!path) {
    throw new Error(`Missing catalogue icon for "${name}".`);
  }
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
    >
      <path d={path} />
    </svg>
  );
}

export default function CatalogueProducts({
  products,
  categories,
}: {
  products: CatalogueProduct[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const visibleProducts = selectedCategory === null
    ? products
    : products.filter((product) => product.category === selectedCategory);
  const filters = [
    { name: "All products", value: null, count: products.length },
    ...categories.map((category) => ({
      name: category,
      value: category,
      count: products.filter((product) => product.category === category).length,
    })),
  ];

  return (
    <>
      <div className="mb-8 rounded-3xl border border-bamboo-100 bg-linear-to-br from-bamboo-50 to-cream p-3 sm:p-5">
        <p className="px-2 pb-3 text-xs font-semibold uppercase tracking-widest text-bamboo-600">
          Browse by type
        </p>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4" role="group" aria-label="Filter by product type">
          {filters.map((filter) => {
            const isSelected = selectedCategory === filter.value;
            return (
              <button
                key={filter.name}
                type="button"
                onClick={() => setSelectedCategory(filter.value)}
                aria-pressed={isSelected}
                aria-controls="catalogue-products"
                className={`flex min-h-14 items-center justify-between gap-2 rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition-all duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bamboo-600 sm:px-4 ${isSelected ? "border-bamboo-800 bg-bamboo-800 text-white shadow-md shadow-bamboo-900/15" : "border-transparent bg-white/60 text-bamboo-700 hover:border-bamboo-200 hover:bg-white hover:shadow-sm"}`}
              >
                <span className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <CategoryIcon name={filter.name} />
                  <span className="text-xs sm:text-sm">{filter.name}</span>
                </span>
                <span className={`flex h-6 min-w-6 shrink-0 items-center justify-center rounded-lg px-1.5 text-xs tabular-nums ${isSelected ? "bg-white/15 text-white" : "bg-bamboo-100/70 text-bamboo-600"}`}>
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-sm text-bamboo-600 mb-8" role="status">
        Showing {visibleProducts.length} {selectedCategory ?? "products"}
      </p>
      <div id="catalogue-products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/catalogue/${product.slug}`}
            className="group flex flex-col rounded-3xl overflow-hidden bg-cream border border-bamboo-100 hover:border-bamboo-300 transition-all duration-300 hover:shadow-xl hover:shadow-bamboo-100/50 hover:-translate-y-1"
          >
            <div className="relative aspect-3/2 overflow-hidden">
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={PRODUCT_IMAGE_WIDTH}
                height={PRODUCT_IMAGE_HEIGHT}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`w-full h-full ${product.imageFit === "contain" ? "object-contain bg-bamboo-50" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
              />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-bold text-bamboo-900 mb-1">{product.name}</h2>
              <p className="text-sm font-medium text-bamboo-500 mb-3">{product.tagline}</p>
              <p className="text-bamboo-600 text-sm leading-relaxed mb-4 flex-1">
                {product.shortDescription}
              </p>
              <div className="pt-4 border-t border-bamboo-100">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-bamboo-600 group-hover:text-bamboo-800 transition-colors group-hover:gap-2.5">
                  View details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
