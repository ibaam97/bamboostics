import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts, PRODUCT_IMAGE_WIDTH, PRODUCT_IMAGE_HEIGHT } from "@/data/products";

export const metadata: Metadata = {
  title: "Catalogue | Bamboostic",
  description:
    "Browse Bamboostic's finished bamboo and timber products — roll-up blinds, pen holders, lattice fencing and precision-milled strips, all made to order.",
};

const products = getAllProducts();

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
        </div>
      </section>
    </>
  );
}
