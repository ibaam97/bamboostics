import Link from "next/link";
import Image from "next/image";
import {
  getProductBySlug,
  PRODUCT_IMAGE_WIDTH,
  PRODUCT_IMAGE_HEIGHT,
} from "@/data/products";

const featuredProductSlugs = [
  "horizontal-culm-door",
  "wooden-lattice-fence",
  "outdoor-screen",
  "small-culm-items",
  "bath-tray",
  "culm-shelving",
];
const featuredProducts = featuredProductSlugs.map((slug) => {
  const product = getProductBySlug(slug);
  if (!product) {
    throw new Error(`Featured product "${slug}" is not present in the catalogue.`);
  }
  return product;
});

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
            From Grove to Goods
          </h2>
          <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
            Explore our latest bamboo products, from handcrafted interiors to durable outdoor
            solutions built for long-term use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/catalogue/${product.slug}`}
              className="group rounded-3xl overflow-hidden bg-cream border border-bamboo-100 hover:border-bamboo-300 transition-all duration-300 hover:shadow-xl hover:shadow-bamboo-100/50 hover:-translate-y-1"
            >
              <div className="relative h-52">
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
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-bamboo-500">
                  Catalogue
                </span>
                <h3 className="text-xl font-bold text-bamboo-900 mt-2 mb-3">{product.name}</h3>
                <p className="text-bamboo-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {product.shortDescription}
                </p>
                <div className="pt-4 border-t border-bamboo-100">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-bamboo-600 group-hover:text-bamboo-800 transition-colors group-hover:gap-2.5">
                    View details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
          >
            View Full Catalogue
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
