import type { Metadata } from "next";
import Link from "next/link";
import Team from "@/components/Team";
import Sustainability from "@/components/Sustainability";
import InvestPartner from "@/components/InvestPartner";

export const metadata: Metadata = {
  title: "About — Bamboostic",
  description: "Bamboostic is the consumer brand of Narbattan Springs Ltd — Nigeria's pioneering bamboo cultivation and processing company, building the future of sustainable materials from Lagos, Abeokuta and Ago-Owu.",
};

const timeline = [
  {
    year: "2022",
    title: "Research & Development Begins",
    description: "Narbattan Springs Ltd begins intensive R&D and cultivation trials, exploring bamboo as a vertically integrated industrial crop with real commercial potential for Nigeria and export markets.",
  },
  {
    year: "2025 — Q1",
    title: "First Farm Sites Established",
    description: "Approximately 25 hectares brought under active bamboo cultivation at two sites — FUNAAB, Abeokuta and Ago-Owu, Ogun State. Processing trials underway, confirming commercial-grade output quality.",
  },
  {
    year: "Aug 2025",
    title: "96-Hectare JV Signed at FUNAAB",
    description: "A landmark joint venture agreement is signed for 96 hectares of farmland at the Federal University of Agriculture, Abeokuta — the operational heartland of the Bamboostic model. 35,000+ culms now ready for harvest.",
  },
  {
    year: "2026",
    title: "Full Commercial Operations Launch",
    description: "With approximately one million metres of bamboo strip ready for processing and strip capacity of 16,000m per day, Bamboostic enters full commercial operation. Independently valued at ₦600–650 million.",
  },
];

const problems = [
  {
    stat: "₦30B+",
    label: "Castor oil Nigeria imports annually",
    description:
      "Despite being the world's third-largest castor seed producer, Nigeria imports over ₦30 billion of castor oil derivatives each year — a direct import substitution opportunity Bamboostic is positioned to capture.",
  },
  {
    stat: "10B",
    label: "Net trees lost globally every year",
    description:
      "15 billion trees are harvested annually worldwide, but only 5 billion are planted. This net loss of 10 billion trees per year makes fast-growing, no-replanting-required bamboo increasingly critical.",
  },
  {
    stat: "6%",
    label: "Nigeria's remaining forest cover",
    description:
      "Nigeria's forest cover has fallen from 10% of land area in 1996 to just 6% today. Bamboo cultivation directly addresses this deforestation crisis while generating strong commercial returns.",
  },
  {
    stat: "EUDR",
    label: "EU Deforestation Regulation — in force",
    description:
      "The EU Deforestation Regulation now restricts timber imports linked to deforestation, creating immediate structural demand for certified deforestation-free alternatives. Bamboo is inherently compliant.",
  },
];

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Vertically Integrated",
    description:
      "From cultivation through treatment, precision processing, and finished products — all under one operation. This integration ensures quality control, full traceability, and maximum value capture at every stage.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Import Substitution",
    description:
      "Nigeria imports materials it has the natural capacity to produce at scale. Bamboostic directly displaces imported timber alternatives and castor oil derivatives with domestically produced, often superior, products.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
    title: "Export Ready",
    description:
      "Processed bamboo strips and boards meet international quality standards. With US tariffs on Chinese furniture rising sharply in 2025 and buyers actively seeking alternative suppliers, Bamboostic is positioned to enter global supply chains.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Agroforestry Innovation",
    description:
      "Our castor-bamboo intercropping model at FUNAAB generates short-term annual cash flow from castor while building long-term bamboo inventory — a flagship model for industrial agroforestry designed to scale across Southwest Nigeria.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-linear-to-b from-sage to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-6">
              About Bamboostic
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6 leading-tight">
              Nigeria&apos;s Bamboo Pioneer.{" "}
              <span className="text-bamboo-600">Africa&apos;s Next Export Story.</span>
            </h1>
            <p className="text-xl text-bamboo-600 leading-relaxed">
              Bamboostic is the consumer brand of Narbattan Springs Ltd — a vertically integrated
              bamboo cultivation and processing company operating from Lagos, Abeokuta and Ago-Owu, built to
              serve Nigeria&apos;s industrial demand and position Africa in a $79 billion global market.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
              The World Has a Timber Problem. Nigeria Has It Worse.
            </h2>
            <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
              Multiple converging crises are creating urgent, structural demand for bamboo — and Nigeria
              sits at the centre of both the problem and the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((p) => (
              <div
                key={p.label}
                className="p-8 rounded-3xl bg-cream border border-bamboo-100 hover:border-bamboo-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl font-bold text-bamboo-600 mb-2">{p.stat}</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-bamboo-500 mb-4">{p.label}</div>
                <p className="text-bamboo-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900">
              From Idea to Industry, Since 2022
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-bamboo-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-bamboo-500 border-4 border-cream -translate-x-1/2 z-10" />
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span className="text-bamboo-500 font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-bold text-bamboo-900 mt-1">{item.title}</h3>
                    <p className="text-bamboo-600 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
              What Sets Bamboostic Apart
            </h2>
            <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
              Four structural advantages that no Nigerian competitor currently replicates at our scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-cream border border-bamboo-100 hover:border-bamboo-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-bamboo-900 mb-3">{pillar.title}</h3>
                <p className="text-bamboo-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & ESG */}
      <Sustainability />

      {/* Team */}
      <Team />

      {/* Invest & Partner */}
      <InvestPartner />

      {/* Traction Numbers */}
      <section className="py-24 bg-bamboo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bamboostic by the Numbers</h2>
            <p className="text-xl text-bamboo-300 max-w-2xl mx-auto">
              Real traction. Real assets. Real market.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "96 ha", label: "JV Farmland at FUNAAB" },
              { value: "35,000+", label: "Culms Ready to Harvest" },
              { value: "~1M m", label: "Bamboo Strip Ready" },
              { value: "₦600M+", label: "Independent Valuation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-bamboo-300 mb-2">{stat.value}</div>
                <div className="text-bamboo-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bamboo-900 mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-bamboo-600 mb-8">
            Whether you&apos;re a manufacturer, procurement buyer, developer, or investor —
            we&apos;re open to discussion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bamboo-300 text-bamboo-700 font-semibold rounded-full hover:bg-bamboo-50 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


