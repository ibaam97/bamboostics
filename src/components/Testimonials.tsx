const signals = [
  {
    stat: "Dec 2026",
    source: "EU Deforestation Regulation",
    headline: "A Compliance Cliff for Chinese Exporters",
    body: "The EUDR comes into full force December 2026. Bamboo is a grass — not a tree — and is inherently exempt. African suppliers operating without deforestation risk are being positioned as the cleanest alternative in the global supply chain. Chinese exporters, who account for 67% of global bamboo trade, face growing scrutiny they cannot easily resolve.",
  },
  {
    stat: "₦6.5T",
    source: "Nigeria Construction Industry",
    headline: "The Biggest Building Market on the Continent",
    body: "Nigeria's construction industry is valued at over ₦6.5 trillion, underpinned by a housing deficit exceeding 20 million units. Steel and concrete costs have risen sharply. Bamboo — structurally competitive, faster-growing, and locally sourced — is not a substitute being forced on the market. It is a substitute the market is pulling toward.",
  },
  {
    stat: "$122B",
    source: "Africa Carbon Market — Projected 2033",
    headline: "Carbon Is Becoming a Revenue Line, Not a Side Note",
    body: "Africa's voluntary carbon market is projected to grow from $15 billion to $122 billion by 2033. Bamboostic's cultivation model — bamboo sequesters 35% more CO₂ than most trees, regrows from existing root systems without replanting — is structured to generate verifiable carbon credits as a secondary revenue stream alongside commercial bamboo supply.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-5">
            Market Signals
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-5 leading-tight">
            The thesis is validated.
            <br />
            <span className="text-bamboo-600">The execution is what remains.</span>
          </h2>
          <p className="text-bamboo-600 leading-relaxed">
            Bamboostic is in its commercial launch phase. Rather than invent
            the stories, here are the forces already shaping the market we are
            entering.
          </p>
        </div>

        {/* Signal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {signals.map((s) => (
            <div
              key={s.stat}
              className="bg-white rounded-3xl p-8 border border-bamboo-100 hover:border-bamboo-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <div className="text-4xl font-bold text-bamboo-700 mb-1">
                  {s.stat}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-bamboo-400">
                  {s.source}
                </div>
              </div>
              <h3 className="text-lg font-bold text-bamboo-900 mb-3">
                {s.headline}
              </h3>
              <p className="text-sm text-bamboo-600 leading-relaxed flex-1">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Honest footnote */}
        <div className="bg-bamboo-900 rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-bamboo-800 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-bamboo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-sm text-bamboo-300 leading-relaxed">
            <span className="text-bamboo-100 font-semibold">A note on transparency:</span>{" "}
            Bamboostic enters commercial operations in 2026. We have no
            fabricated customer reviews. What we have is a working operation,
            a verified joint venture, an independent valuation, and a market
            timing that is difficult to ignore. We would rather earn your
            trust with facts than ask for it with fiction.
          </p>
        </div>
      </div>
    </section>
  );
}
