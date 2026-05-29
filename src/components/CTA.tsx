import Link from "next/link";

const partnerTypes = [
  { label: "Finance an operation", note: "Fund a processing line or harvest cycle with a defined return" },
  { label: "Set up your own farm", note: "Managed by Narbattan, with an exclusive offtake agreement" },
  { label: "Join the supply network", note: "Standalone operation within the Bamboostic ecosystem" },
  { label: "Propose your own structure", note: "We are open to conversations we haven't had yet" },
];

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-bamboo-900 px-8 py-20 md:px-16 md:py-24">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bamboo-800 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bamboo-800 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 bg-bamboo-700 text-bamboo-200 rounded-full text-sm font-medium mb-5">
                Partner With Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                The Bamboo Industry Is Being
                <br />
                <span className="text-bamboo-400">Built Right Now.</span>
              </h2>
              <p className="text-lg text-bamboo-300 max-w-2xl mx-auto leading-relaxed">
                Narbattan Springs Ltd is Nigeria&apos;s first vertically integrated bamboo company.
                We are early — which means the opportunity to shape the supply chain, secure
                offtake, or deploy capital is still open.
              </p>
            </div>

            {/* Partner structures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {partnerTypes.map((type) => (
                <div
                  key={type.label}
                  className="flex items-start gap-3 bg-bamboo-800 rounded-2xl px-6 py-5"
                >
                  <div className="w-5 h-5 rounded-full bg-bamboo-500 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{type.label}</p>
                    <p className="text-xs text-bamboo-400 mt-0.5">{type.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-bamboo-900 bg-white rounded-full hover:bg-bamboo-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-bamboo-400 rounded-full hover:bg-bamboo-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
