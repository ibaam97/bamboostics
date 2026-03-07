import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-[2rem] overflow-hidden bg-bamboo-900 px-8 py-20 md:px-16 md:py-24">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bamboo-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bamboo-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build with the World&apos;s Most Sustainable Material?
            </h2>
            <p className="text-lg md:text-xl text-bamboo-300 mb-10 leading-relaxed">
              Whether you need raw bamboo for manufacturing or finished products for retail,
              we deliver quality and sustainability at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-bamboo-900 bg-white rounded-full hover:bg-bamboo-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-bamboo-400 rounded-full hover:bg-bamboo-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
