import type { Metadata } from "next";
import CatalogueProducts from "@/components/CatalogueProducts";
import { getAllProducts } from "@/data/products";
import { getProductCategory, productCategories } from "@/data/products/categories";

export const metadata: Metadata = {
  title: "Catalogue | Bamboostic",
  description:
    "Browse Bamboostic's finished bamboo and timber products — roll-up blinds, pen holders, lattice fencing and precision-milled strips, all made to order.",
};

const products = getAllProducts().map((product) => ({
  ...product,
  category: getProductCategory(product.slug),
}));

export default function CataloguePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-bamboo-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-6">
              Catalogue
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6 leading-tight">
              Finished Bamboo, Made to Order.
            </h1>
            <p className="text-xl text-bamboo-600 leading-relaxed">
              Handcrafted, sustainably harvested products — from natural shade and desk
              organisers to garden screening and precision-milled strips. Every item is
              built to last and made to your specification.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CatalogueProducts
            products={products}
            categories={productCategories.map((category) => category.name)}
          />
        </div>
      </section>
    </>
  );
}
