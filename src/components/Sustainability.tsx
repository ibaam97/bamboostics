const pillars = [
  {
    stat: "35%",
    statLabel: "More CO₂ sequestered vs. trees",
    title: "Climate-Positive by Design",
    body: "Bamboo sequesters 35% more CO₂ than an equivalent stand of trees — while producing significantly more harvestable material per hectare. Because bamboo regrows from its root system after harvest, there is no replanting cycle, no soil disruption, and no gap in carbon sequestration. The land keeps working.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    stat: "EUDR",
    statLabel: "Compliant — inherently",
    title: "Bamboo Is a Grass, Not a Tree",
    body: "The EU Deforestation Regulation restricts imports tied to deforestation. Bamboo is classified as a grass — growing it does not constitute deforestation under EUDR. No special certification. No compliance overhead. Chinese timber and wood-product exporters face mounting documentation burdens and scrutiny; Bamboostic supply chains do not.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    stat: "$122B",
    statLabel: "Africa carbon market by 2033",
    title: "Carbon Credits as a Revenue Stream",
    body: "Africa's voluntary carbon market is projected to grow from $15 billion today to $122 billion by 2033 — driven by accelerating corporate net-zero commitments and tightening regulatory frameworks. Bamboostic's cultivation operations are being structured from the outset to generate verified carbon credits as a parallel, non-dilutive revenue stream alongside product sales.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    stat: "₦30B+",
    statLabel: "Castor oil Nigeria imports annually",
    title: "The Castor-Bamboo Intercrop",
    body: "Our flagship agroforestry model at FUNAAB grows castor and bamboo on the same land. Castor generates annual cash flow while the bamboo inventory builds over three to five years. Castor suppresses weeds, fixes nitrogen, and improves soil health — reducing input costs across both crops. Nigeria is the world's third-largest castor seed producer, yet imports over ₦30 billion in castor oil derivatives every year. Bamboostic captures both sides.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            Sustainability & ESG
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-5">
            Clean Supply. Carbon Returns.{" "}
            <span className="text-bamboo-600">Compliance Built In.</span>
          </h2>
          <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
            Bamboostic&apos;s ESG credentials are not retrofitted onto a legacy
            operation — they are structural properties of the crop itself and the
            way we farm it.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-3xl bg-white border border-bamboo-100 hover:border-bamboo-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon + stat row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-bamboo-700">
                    {pillar.stat}
                  </div>
                  <div className="text-xs text-bamboo-500 mt-0.5 max-w-40">
                    {pillar.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-bamboo-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-bamboo-600 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 rounded-2xl bg-bamboo-900 text-center">
          <p className="text-bamboo-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Narbattan Springs Ltd is pursuing gasification infrastructure as a
            downstream extension — converting bamboo waste into clean energy as
            part of a zero-waste processing model.
          </p>
        </div>
      </div>
    </section>
  );
}
