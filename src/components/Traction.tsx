import Link from "next/link";

const traction = [
  {
    value: "96 ha",
    label: "Certified JV Farmland",
    context:
      "Secured with FUNAAB — Nigeria's leading agricultural university — in Abeokuta, Ogun State",
  },
  {
    value: "35,000+",
    label: "Culms Planted",
    context:
      "Active crop growing across Phase 1 farmland, with further planting cycles underway",
  },
  {
    value: "~1M m",
    label: "Strip/Year Capacity",
    context:
      "16,000 m/day strip line operational today, scaling to 24–30,000 m/day by 2027",
  },
  {
    value: "₦600M+",
    label: "Independent Valuation",
    context:
      "March 2026 third-party valuation of Narbattan Springs Ltd / Bamboostic — pre-commercial launch",
  },
];

const market = [
  {
    value: "$79B",
    label: "Global Bamboo Market",
    context: "2024 market size — projected to reach $100–130B by 2033 at ~6% CAGR",
  },
  {
    value: "20M+",
    label: "Nigeria Housing Deficit",
    context:
      "Structural shortfall driving massive domestic demand for affordable, sustainable building materials",
  },
  {
    value: "67%",
    label: "China's Export Share",
    context:
      "China dominates global bamboo supply — US tariff pressures and EUDR create space for African alternatives",
  },
  {
    value: "Dec 2026",
    label: "EUDR Enforcement",
    context:
      "EU Deforestation Regulation fully in force. Bamboo requires no land clearing — inherently compliant from day one",
  },
];

export default function Traction() {
  return (
    <section className="py-24 bg-bamboo-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-800 text-bamboo-300 rounded-full text-sm font-medium tracking-wide mb-5">
            The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Real Traction.
            <br />
            <span className="text-bamboo-300">Real Opportunity.</span>
          </h2>
          <p className="text-lg text-bamboo-400 leading-relaxed">
            Bamboostic is not a concept. We are a growing operation backed by
            verified land, active processing capacity, and a market that needs
            exactly what we supply.
          </p>
        </div>

        {/* Our Traction */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-bamboo-500 mb-5">
            Our Traction
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {traction.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-bamboo-800 border border-bamboo-700"
              >
                <p className="text-4xl font-black text-white mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-bamboo-200 mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-bamboo-400 leading-relaxed">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-bamboo-700 mb-10" />

        {/* The Market */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-earth-500 mb-5">
            The Market Opportunity
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {market.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-bamboo-800 border border-bamboo-700"
              >
                <p className="text-4xl font-black text-earth-300 mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-earth-200 mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-bamboo-400 leading-relaxed">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bamboo-900 font-semibold rounded-full hover:bg-bamboo-50 transition-colors text-sm"
          >
            Our Full Story
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-bamboo-600 text-bamboo-200 font-semibold rounded-full hover:border-bamboo-400 hover:text-white transition-colors text-sm"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
