import Link from "next/link";

const models = [
  {
    number: "01",
    title: "Finance an Operation",
    description:
      "Back a specific processing line or harvest cycle with a defined return profile and agreed repayment timeline. The capital goes into a named operation — strip processing, pole treatment, or a full harvest cycle — with clear inputs, outputs, and duration.",
    suitedFor: ["Private investors", "Family offices", "Impact funds"],
  },
  {
    number: "02",
    title: "Set Up Your Own Farm",
    description:
      "You provide land or capital. Narbattan plants, manages, and harvests. You receive an exclusive offtake agreement and a negotiated share of processed output. Full technical and operational management handled by Narbattan Springs Ltd — you own the asset, we run it.",
    suitedFor: ["Landowners", "Agricultural investors", "Diaspora capital"],
  },
  {
    number: "03",
    title: "Join the Supply Network",
    description:
      "Establish your own bamboo operation — cultivation, processing, or both — within the Bamboostic supply ecosystem. We provide the technical blueprint, market access, and procurement aggregation. You remain independently owned and operated, with Bamboostic as your market channel.",
    suitedFor: ["Agribusiness operators", "Cooperatives", "Entrepreneurs"],
  },
  {
    number: "04",
    title: "Propose Your Own Structure",
    description:
      "Distribution partnerships, export joint ventures, OEM supply agreements, carbon credit co-development — if none of the above fits what you have in mind, tell us what does. We are at an early enough stage to shape arrangements around the right partner, not just the most familiar template.",
    suitedFor: ["Strategic partners", "Export buyers", "Anyone with a better idea"],
  },
];

export default function InvestPartner() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Dark card wrapper */}
        <div className="bg-bamboo-900 rounded-3xl px-8 py-16 md:px-16">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-bamboo-800 text-bamboo-300 rounded-full text-sm font-medium mb-5">
              Invest &amp; Partner
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Four Ways to Be Part of{" "}
              <span className="text-bamboo-400">
                Nigeria&apos;s Bamboo Story.
              </span>
            </h2>
            <p className="text-lg text-bamboo-300 max-w-2xl mx-auto">
              Narbattan Springs Ltd is building the first vertically integrated
              bamboo operation in Nigeria. The window to structure involvement
              on favourable terms is open now — before the commercial scale is
              fully established.
            </p>
          </div>

          {/* Models grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {models.map((model) => (
              <div
                key={model.number}
                className="bg-bamboo-800 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="flex items-start justify-between">
                  <span className="text-bamboo-500 text-sm font-bold uppercase tracking-widest">
                    {model.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{model.title}</h3>
                <p className="text-bamboo-300 leading-relaxed text-sm flex-1">
                  {model.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-bamboo-700">
                  {model.suitedFor.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-bamboo-900 text-bamboo-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* How it starts */}
          <div className="bg-bamboo-800 rounded-2xl p-8 mb-12">
            <h3 className="text-base font-bold text-bamboo-300 uppercase tracking-widest mb-5">
              How conversations typically begin
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  label: "Send an enquiry",
                  note: "Tell us which model interests you, or describe what you have in mind.",
                },
                {
                  step: "2",
                  label: "Receive a brief",
                  note: "We will send you a relevant project brief, financial overview, or structure proposal within 48 hours.",
                },
                {
                  step: "3",
                  label: "Agree the terms",
                  note: "We work through the structure together — no pressure, no templates forced onto situations they do not fit.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-bamboo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{s.label}</p>
                    <p className="text-bamboo-400 text-xs leading-relaxed mt-1">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bamboo-900 font-semibold rounded-full hover:bg-bamboo-50 transition-colors"
            >
              Start a Conversation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about#sustainability"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-bamboo-600 text-bamboo-300 font-semibold rounded-full hover:border-bamboo-400 hover:text-bamboo-200 transition-colors"
            >
              Our ESG Credentials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
