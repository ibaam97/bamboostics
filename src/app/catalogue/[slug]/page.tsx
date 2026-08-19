import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getAllProducts,
  getProductBySlug,
  PRODUCT_IMAGE_WIDTH,
  PRODUCT_IMAGE_HEIGHT,
} from "@/data/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found | Bamboostic" };
  }
  return {
    title: `${product.name} | Bamboostic`,
    description: product.metaDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: [product.image],
    category: "Bamboo & timber products",
    brand: {
      "@type": "Brand",
      name: "Bamboostic",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-28 pb-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-bamboo-500" aria-label="Breadcrumb">
            <Link href="/catalogue" className="hover:text-bamboo-700 transition-colors">
              Catalogue
            </Link>
            <span className="mx-2 text-bamboo-300">/</span>
            <span className="text-bamboo-700">{product.name}</span>
          </nav>

          {/* Name + tagline */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-bamboo-500 font-medium">{product.tagline}</p>
          </header>

          {/* Hero image (above the fold — eager) */}
          <div className="relative aspect-3/2 rounded-3xl overflow-hidden border border-bamboo-100 shadow-sm mb-12">
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={PRODUCT_IMAGE_WIDTH}
              height={PRODUCT_IMAGE_HEIGHT}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Full description */}
            <div className="lg:col-span-2 space-y-5">
              {product.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-lg text-bamboo-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key features */}
            <aside className="lg:col-span-1">
              <div className="rounded-3xl bg-white border border-bamboo-100 p-6 lg:sticky lg:top-28">
                <h2 className="text-xs font-bold uppercase tracking-widest text-bamboo-500 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-bamboo-700">
                      <svg
                        className="w-4 h-4 mt-0.5 text-bamboo-400 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Ideal for */}
          <div className="mt-12 rounded-3xl bg-sage border border-bamboo-100 p-6 md:p-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-bamboo-600 mb-2">
              Ideal For
            </h2>
            <p className="text-lg text-bamboo-800 leading-relaxed">{product.idealFor}</p>
          </div>

          {/* Sizes table (only where present) */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-bamboo-900 mb-6">
                Available Sizes &amp; Applications
              </h2>
              <div className="overflow-x-auto rounded-3xl border border-bamboo-100">
                <table className="w-full min-w-140 border-collapse text-left">
                  <thead>
                    <tr className="bg-bamboo-500 text-white">
                      <th scope="col" className="px-5 py-4 text-sm font-semibold whitespace-nowrap">
                        Size
                      </th>
                      <th scope="col" className="px-5 py-4 text-sm font-semibold whitespace-nowrap">
                        Grade
                      </th>
                      <th scope="col" className="px-5 py-4 text-sm font-semibold">
                        Typical Applications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((size, index) => (
                      <tr
                        key={size.size}
                        className={index % 2 === 0 ? "bg-white" : "bg-cream"}
                      >
                        <td className="px-5 py-4 text-sm font-bold text-bamboo-900 whitespace-nowrap">
                          {size.size}
                        </td>
                        <td className="px-5 py-4 text-sm text-bamboo-600 whitespace-nowrap">
                          {size.grade}
                        </td>
                        <td className="px-5 py-4 text-sm text-bamboo-700">{size.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Call to action */}
          <div className="mt-16 rounded-3xl bg-linear-to-br from-bamboo-500 to-bamboo-700 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Interested in {product.name}?
            </h2>
            <p className="text-bamboo-50 max-w-xl mx-auto mb-8">
              Made to order in the sizes and finishes you need. Send us your requirements and
              we&apos;ll prepare a quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bamboo-700 font-semibold rounded-full hover:bg-bamboo-50 transition-colors shadow-lg"
            >
              Enquire About This Product
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
