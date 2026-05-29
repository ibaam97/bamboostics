import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Bamboostic",
  description:
    "From untreated poles to finished bamboo boards — Bamboostic's vertically integrated processing pipeline, ready for B2B buyers and international procurement.",
};

const stages = [
  {
    number: "01",
    name: "Untreated Bamboo Poles",
    category: "Raw Output",
    description:
      "Freshly harvested culms from our 96-hectare FUNAAB farmland, matured 3–5 years for optimal fibre density. Delivered whole, straight from the grove.",
    specs: [
      "Diameters: 80–140 mm",
      "Lengths: up to 10 m",
      "Species: Bambusa vulgaris & Dendrocalamus",
      "Seasonal harvest: April – November",
    ],
    uses: "Construction scaffolding · Structural poles · Landscaping & fencing · Nursery stock",
    gradient: "from-bamboo-50 to-bamboo-100",
    accent: "text-bamboo-600",
    border: "border-bamboo-200",
  },
  {
    number: "02",
    name: "Treated Whole Bamboo",
    category: "Processed Poles",
    description:
      "Culms subjected to our proprietary borate pressure-treatment — borer-resistant, mould-proof, and structurally stable for 20+ years outdoors.",
    specs: [
      "Borate pressure-treatment",
      "Moisture content < 12%",
      "Kiln-dried or air-dried options",
      "Graded & sorted by diameter class",
    ],
    uses: "Structural construction · Fencing & gates · Pergolas & pavilions · B2B export",
    gradient: "from-bamboo-100 to-bamboo-200",
    accent: "text-bamboo-700",
    border: "border-bamboo-200",
  },
  {
    number: "03",
    name: "Rustic Splits & Slats",
    category: "Split Processing",
    description:
      "Poles quartered and split along the grain to produce flat, rough-surfaced slats — the first stage of panel and composite manufacture, and ideal for woven screens and artisan supply.",
    specs: [
      "Widths: 20–80 mm",
      "Thicknesses: 5–15 mm",
      "Natural or carbonised finish",
      "Bundled in 50 or 100-piece lots",
    ],
    uses: "Woven screens · Artisan supply · Furniture frames · Export crating",
    gradient: "from-bamboo-100 to-sage",
    accent: "text-bamboo-700",
    border: "border-bamboo-200",
  },
  {
    number: "04",
    name: "Precision-Cut Strips",
    category: "Strip Line",
    description:
      "Machine-planed strips cut to tight tolerances on our 16,000 m/day strip line — scaling to 24,000–30,000 m/day by 2027. The primary feedstock for laminated boards and strand-woven products.",
    specs: [
      "Width: 20 mm | Thickness: 5 mm (standard)",
      "Current capacity: ~16,000 m/day",
      "2027 target: 24,000–30,000 m/day",
      "Moisture content < 8%",
    ],
    uses: "Laminated boards · Strand-woven feedstock · Composite panels · OEM supply",
    gradient: "from-sage to-bamboo-100",
    accent: "text-bamboo-600",
    border: "border-bamboo-200",
  },
  {
    number: "05a",
    name: "Solid Laminated Boards",
    category: "Board Products",
    description:
      "Strips laminated under high pressure into dimensionally stable boards — strong, flat, and ready for CNC routing or direct use in cabinetry, flooring, and structural panels.",
    specs: [
      "Standard sheets: 2440 × 1220 mm",
      "Thicknesses: 8–40 mm",
      "E0 / low-formaldehyde adhesive",
      "Natural or carbonised finish",
    ],
    uses: "Cabinetry · Work surfaces · Structural panels · Furniture manufacturers",
    gradient: "from-earth-50 to-earth-100",
    accent: "text-earth-700",
    border: "border-earth-200",
  },
  {
    number: "05b",
    name: "Strand-Woven Bamboo",
    category: "High-Density Product",
    description:
      "Strips shredded, resin-impregnated, and compressed at extreme pressure. The result is a material with twice the hardness of oak — ideal for heavy-duty flooring, worktops, and structural cladding.",
    specs: [
      "Janka hardness: 3,200+ lbf",
      "Density: 1,100–1,250 kg/m³",
      "Available: planks, blocks, and sheets",
      "Natural, carbonised & tiger-stripe",
    ],
    uses: "Premium flooring · Worktops & countertops · Heavy-traffic commercial surfaces",
    gradient: "from-earth-100 to-earth-200",
    accent: "text-earth-700",
    border: "border-earth-200",
  },
  {
    number: "07",
    name: "Finished Products",
    category: "End-Use Goods",
    description:
      "Flooring planks, structural cladding, decking, and bespoke panel systems — manufactured to order for developers, interior contractors, and retail buyers worldwide.",
    specs: [
      "Click-lock flooring planks",
      "T&G decking profiles",
      "Custom panel systems",
      "OEM white-label available",
    ],
    uses: "Residential flooring · Commercial fit-out · Façade cladding · Export retail",
    gradient: "from-bamboo-200 to-bamboo-100",
    accent: "text-bamboo-800",
    border: "border-bamboo-300",
  },
];

const audiences = [
  {
    title: "Manufacturers & OEMs",
    description:
      "Consistent strip and board supply at scale, with spec sheets and certificates of analysis. Source the bamboo feedstock your production line needs.",
    icon: "🏭",
  },
  {
    title: "Builders & Developers",
    description:
      "Treated poles, decking, and structural panels for residential and commercial projects — EUDR-compliant and deforestation-free by design.",
    icon: "🏗️",
  },
  {
    title: "International Buyers",
    description:
      "Nigeria-origin bamboo with full chain-of-custody traceability. Ready for EU, UK, and US procurement standards — and competitive against China on price.",
    icon: "🌍",
  },
  {
    title: "Retail & Distribution",
    description:
      "White-label finished goods — flooring, panels, and accessories — for your brand, your packaging, your market.",
    icon: "📦",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-b from-bamboo-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-6">
              Our Products
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6 leading-tight">
              From Grove to Global Market.
            </h1>
            <p className="text-xl text-bamboo-600 leading-relaxed mb-8">
              Bamboostic operates a vertically integrated processing pipeline — from harvesting
              on our 96-hectare FUNAAB farmland to finished boards ready for international
              buyers. Every stage is a supply point.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
              >
                Request a Quote
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="#pipeline"
                className="inline-flex items-center gap-2 px-8 py-4 border border-bamboo-300 text-bamboo-700 font-semibold rounded-full hover:bg-bamboo-50 transition-colors"
              >
                See the Pipeline
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Supply */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="p-6 rounded-2xl bg-cream border border-bamboo-100"
              >
                <span className="text-3xl mb-4 block">{a.icon}</span>
                <h3 className="text-lg font-bold text-bamboo-900 mb-2">{a.title}</h3>
                <p className="text-sm text-bamboo-600 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Pipeline */}
      <section id="pipeline" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              Processing Pipeline
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-4">
              Seven Stages. One Source.
            </h2>
            <p className="text-lg text-bamboo-600">
              Our pipeline moves bamboo from raw culm to finished product entirely within
              Nigeria — reducing supply risk, ensuring quality, and building Nigerian export
              value at every step.
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`rounded-3xl border ${stage.border} overflow-hidden`}
              >
                <div className={`bg-linear-to-r ${stage.gradient} p-8 md:p-10`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 w-20">
                      <span className="text-5xl font-black text-bamboo-900/10 leading-none block">
                        {stage.number}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${stage.accent} mt-1 block`}
                      >
                        {stage.category}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-bamboo-900 mb-3">
                        {stage.name}
                      </h3>
                      <p className="text-bamboo-700 leading-relaxed mb-6">
                        {stage.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-bamboo-500 mb-2">
                            Specifications
                          </p>
                          <ul className="space-y-1.5">
                            {stage.specs.map((spec) => (
                              <li
                                key={spec}
                                className="flex items-center gap-2 text-sm text-bamboo-700"
                              >
                                <svg
                                  className="w-4 h-4 text-bamboo-400 shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-bamboo-500 mb-2">
                            Common Uses
                          </p>
                          <p className="text-sm text-bamboo-700 leading-relaxed">
                            {stage.uses}
                          </p>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-bamboo-600 hover:text-bamboo-800 transition-colors"
                          >
                            Enquire about this stage
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < stages.length - 1 && (
                  <div className="flex justify-center py-3 bg-white/60">
                    <svg
                      className="w-5 h-5 text-bamboo-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EUDR & Compliance */}
      <section className="py-20 bg-bamboo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                EUDR-Ready. Deforestation-Free by Design.
              </h2>
              <p className="text-bamboo-200 leading-relaxed mb-4">
                The EU Deforestation Regulation comes into full force in December 2026. Bamboo
                is a grass — it regenerates from its root system without clearing a single
                tree. Our FUNAAB farmland provides a clean, traceable chain of custody that
                satisfies EUDR due-diligence requirements out of the box.
              </p>
              <p className="text-bamboo-200 leading-relaxed">
                As Chinese exporters face US tariff headwinds and European buyers scramble to
                verify supply chains, Nigeria-origin Bamboostic bamboo offers a compliant,
                competitively priced alternative with no regulatory risk.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bamboo-900 font-semibold rounded-full hover:bg-bamboo-50 transition-colors"
              >
                Discuss Your Supply Need
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bamboo-700 text-bamboo-200 font-semibold rounded-full hover:border-bamboo-500 transition-colors"
              >
                Our Story &amp; Credentials
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
