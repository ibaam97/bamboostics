const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    stat: "67%",
    title: "China's Grip Is Loosening",
    description:
      "China controls 67% of global processed bamboo exports. US tariffs, EUDR supply-chain scrutiny, and rising freight costs are pushing buyers to diversify. West Africa — same tropical latitude, deforestation-free by default — is the natural alternative origin. Bamboostic is already positioned to fill that gap.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: "Dec 2026",
    title: "EUDR Changes the Rules",
    description:
      "The EU Deforestation Regulation comes into full force in December 2026, requiring supply-chain due diligence for all forest-risk commodities. Bamboo is a grass — not a tree — making it inherently non-deforestation. Every Bamboostic shipment is clean-origin without the compliance overhead facing Chinese and Southeast Asian producers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    stat: "20M+",
    title: "Nigeria Needs 20 Million Homes",
    description:
      "Nigeria's housing deficit stands at over 20 million units — a ₦6.5 trillion construction opportunity. Most structural timber is imported, adding cost and lead time. Bamboo reaches structural maturity in 3–5 years versus 25+ for hardwood, offers comparable performance to steel in tensile applications, and can be sourced entirely within Nigeria.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    stat: "$122B",
    title: "Carbon Credentials, Real Returns",
    description:
      "Bamboo sequesters 35% more CO₂ than equivalent trees. Africa's carbon market is forecast to grow from $15B to $122B by 2033. Bamboostic's castor-bamboo intercropping model creates dual commercial income streams while improving soil health — giving buyers and investors measurable ESG value alongside every commercial order.",
  },
];

export default function WhyBamboo() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            The Case for Bamboo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
            Four Reasons the Market is Moving
          </h2>
          <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
            Bamboo isn&apos;t a trend — it&apos;s a structural shift in global materials supply.
            Regulation, geopolitics, and a 20-million-home deficit are all pointing the same direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-6 p-8 rounded-3xl bg-white border border-bamboo-100 hover:border-bamboo-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center">
                  {reason.icon}
                </div>
                <span className="text-xs font-bold text-bamboo-500 tracking-tight">{reason.stat}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bamboo-900 mb-2">{reason.title}</h3>
                <p className="text-bamboo-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
