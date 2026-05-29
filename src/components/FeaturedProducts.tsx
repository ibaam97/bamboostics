import Link from "next/link";

const products = [
  {
    name: "Raw Bamboo Poles",
    category: "Raw Materials",
    description: "Premium dried bamboo poles in various lengths and diameters. Perfect for construction, fencing, and crafts.",
    image: "🎋",
    gradient: "from-bamboo-100 to-bamboo-200",
  },
  {
    name: "Bamboo Flooring Planks",
    category: "Finished Products",
    description: "Strand-woven bamboo flooring with superior durability and a stunning natural grain pattern.",
    image: "🏠",
    gradient: "from-earth-100 to-earth-200",
  },
  {
    name: "Bamboo Fiber Sheets",
    category: "Raw Materials",
    description: "Processed bamboo fibers ready for textile manufacturing. Naturally antibacterial and breathable.",
    image: "🧵",
    gradient: "from-sage to-bamboo-100",
  },
  {
    name: "Bamboo Furniture Set",
    category: "Finished Products",
    description: "Handcrafted bamboo dining set featuring a table and four chairs. Elegant and eco-friendly.",
    image: "🪑",
    gradient: "from-earth-100 to-sage",
  },
  {
    name: "Bamboo Charcoal",
    category: "Raw Materials",
    description: "Activated bamboo charcoal for filtration, deodorizing, and agricultural applications.",
    image: "⬛",
    gradient: "from-bamboo-200 to-bamboo-100",
  },
  {
    name: "Bamboo Cutting Boards",
    category: "Finished Products",
    description: "Premium end-grain bamboo cutting boards. Knife-friendly, durable, and naturally antimicrobial.",
    image: "🔪",
    gradient: "from-earth-200 to-earth-100",
  },
];

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
            Whether you need raw bamboo materials for your next project or ready-made products
            for your home, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-3xl overflow-hidden bg-cream border border-bamboo-100 hover:border-bamboo-300 transition-all duration-300 hover:shadow-xl hover:shadow-bamboo-100/50 hover:-translate-y-1"
            >
              <div className={`bg-linear-to-br ${product.gradient} p-8 flex items-center justify-center h-48`}>
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-bamboo-500">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-bamboo-900 mt-2 mb-3">{product.name}</h3>
                <p className="text-bamboo-600 text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="pt-4 border-t border-bamboo-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-bamboo-600 hover:text-bamboo-800 transition-colors group-hover:gap-2.5"
                  >
                    Enquire
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
