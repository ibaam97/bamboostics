import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Bamboostics",
  description: "Browse our full range of raw bamboo materials and finished bamboo products.",
};

const rawMaterials = [
  {
    name: "Bamboo Poles",
    description: "Naturally dried and treated bamboo poles available in Moso, Guadua, and Tonkin varieties. Ideal for construction, landscaping, and decorative use.",
    specs: ["Lengths: 6ft – 20ft", "Diameters: 1\" – 6\"", "Kiln-dried & borate-treated"],
    price: "From $12/pole",
    emoji: "🎋",
    gradient: "from-bamboo-100 to-bamboo-200",
  },
  {
    name: "Bamboo Slats & Strips",
    description: "Precision-cut bamboo strips for weaving, laminating, and craft applications. Uniform thickness and consistent quality.",
    specs: ["Widths: 5mm – 30mm", "Thicknesses: 1mm – 5mm", "Natural or carbonized"],
    price: "From $8/bundle",
    emoji: "📏",
    gradient: "from-sage to-bamboo-100",
  },
  {
    name: "Bamboo Fiber",
    description: "Processed bamboo pulp and fiber for textile, paper, and composite manufacturing. Naturally antibacterial and UV-resistant.",
    specs: ["Viscose-grade fiber", "Mechanical pulp available", "Bulk orders from 100kg"],
    price: "From $25/kg",
    emoji: "🧵",
    gradient: "from-bamboo-100 to-sage",
  },
  {
    name: "Bamboo Charcoal",
    description: "High-temperature activated bamboo charcoal with exceptional absorption properties for filtration and purification.",
    specs: ["950°C activated", "Granular or powder form", "Food & industrial grade"],
    price: "From $18/kg",
    emoji: "⬛",
    gradient: "from-bamboo-200 to-bamboo-100",
  },
  {
    name: "Bamboo Veneer Sheets",
    description: "Paper-thin bamboo sheets with stunning grain patterns. Perfect for furniture surfaces, wall panels, and decorative laminates.",
    specs: ["0.3mm – 1.5mm thick", "4' × 8' sheets", "Natural & stained finishes"],
    price: "From $35/sheet",
    emoji: "📄",
    gradient: "from-earth-100 to-sage",
  },
  {
    name: "Bamboo Shoots (Industrial)",
    description: "Fresh and processed bamboo shoots for food processing and extract manufacturing. Harvested at optimal maturity.",
    specs: ["Fresh or dried", "Bulk supply available", "Food-safety certified"],
    price: "From $6/kg",
    emoji: "🌱",
    gradient: "from-bamboo-100 to-bamboo-200",
  },
];

const finishedProducts = [
  {
    name: "Strand-Woven Flooring",
    description: "Our flagship flooring product. Twice the hardness of oak with a gorgeous natural grain. Available in natural, carbonized, and tiger stripe finishes.",
    specs: ["Janka hardness: 3,000+", "Click-lock installation", "25-year warranty"],
    price: "From $4.50/sq ft",
    emoji: "🏠",
    gradient: "from-earth-100 to-earth-200",
  },
  {
    name: "Bamboo Furniture Collection",
    description: "Handcrafted dining sets, shelving units, bed frames, and accent pieces. Each piece showcases bamboo's natural beauty and strength.",
    specs: ["Dining sets from 4-piece", "Custom sizes available", "Indoor & outdoor options"],
    price: "From $290",
    emoji: "🪑",
    gradient: "from-earth-200 to-earth-100",
  },
  {
    name: "Bamboo Cutting Boards",
    description: "End-grain cutting boards that are gentle on knives and naturally resistant to bacteria. A kitchen essential that lasts decades.",
    specs: ["End-grain construction", "Multiple sizes", "FDA food-safe finish"],
    price: "From $35",
    emoji: "🔪",
    gradient: "from-earth-100 to-sage",
  },
  {
    name: "Bamboo Blinds & Shades",
    description: "Woven bamboo window treatments that filter light beautifully. Create a warm, natural atmosphere in any room.",
    specs: ["Roll-up & roman styles", "Custom widths to 96\"", "Light filtering & blackout"],
    price: "From $65",
    emoji: "🪟",
    gradient: "from-sage to-earth-100",
  },
  {
    name: "Bamboo Storage & Organizers",
    description: "Elegant storage baskets, drawer organizers, and shelving accessories. Sustainable organization for every room.",
    specs: ["Handwoven baskets", "Stackable designs", "Water-resistant finish"],
    price: "From $22",
    emoji: "🧺",
    gradient: "from-bamboo-100 to-earth-100",
  },
  {
    name: "Bamboo Decking Planks",
    description: "Weather-resistant outdoor decking that combines the beauty of bamboo with commercial-grade durability. Zero maintenance required.",
    specs: ["Hidden fastener system", "UV & moisture resistant", "20-year outdoor warranty"],
    price: "From $6.50/sq ft",
    emoji: "🏡",
    gradient: "from-earth-200 to-bamboo-100",
  },
];

function ProductCard({
  product,
}: {
  product: {
    name: string;
    description: string;
    specs: string[];
    price: string;
    emoji: string;
    gradient: string;
  };
}) {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white border border-bamboo-100 hover:border-bamboo-300 transition-all duration-300 hover:shadow-xl hover:shadow-bamboo-100/50 hover:-translate-y-1">
      <div
        className={`bg-gradient-to-br ${product.gradient} p-8 flex items-center justify-center h-40`}
      >
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {product.emoji}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-bamboo-900 mb-2">{product.name}</h3>
        <p className="text-bamboo-600 text-sm leading-relaxed mb-4">{product.description}</p>
        <ul className="space-y-1.5 mb-5">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-sm text-bamboo-500">
              <svg className="w-4 h-4 text-bamboo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {spec}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-4 border-t border-bamboo-100">
          <span className="text-lg font-bold text-bamboo-700">{product.price}</span>
          <Link
            href="/contact"
            className="text-sm font-medium text-bamboo-500 hover:text-bamboo-700 transition-colors flex items-center gap-1"
          >
            Inquire
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bamboo-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            Our Catalog
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6">
            Products & Materials
          </h1>
          <p className="text-xl text-bamboo-600 max-w-2xl mx-auto">
            From raw bamboo poles straight from our groves to beautifully crafted finished goods —
            everything you need, grown sustainably.
          </p>
        </div>
      </section>

      {/* Raw Materials */}
      <section id="raw" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-bamboo-900">Raw Materials</h2>
                <p className="text-bamboo-500">For manufacturers, builders, and artisans</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rawMaterials.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Finished Products */}
      <section id="finished" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-earth-100 text-earth-600 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-bamboo-900">Finished Products</h2>
                <p className="text-bamboo-500">Ready-to-use bamboo goods for home and business</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishedProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-20 bg-sage">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bamboo-900 mb-4">
            Need Bulk or Custom Orders?
          </h2>
          <p className="text-lg text-bamboo-600 mb-8 max-w-2xl mx-auto">
            We supply bamboo materials at scale to manufacturers, retailers, and contractors worldwide.
            Get competitive wholesale pricing tailored to your volume.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
          >
            Request Wholesale Pricing
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
