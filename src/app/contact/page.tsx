import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bamboostic",
  description:
    "Get in touch with Bamboostic — Narbattan Springs Ltd. Supply enquiries, export partnerships, investment discussions, and farm visits.",
};

const contactMethods = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Email",
    detail: "info@nabattansprings.com",
    description: "For supply, export, investment, and general enquiries",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    title: "Lagos Office",
    detail: "10, Memunat Ayodeji Crescent",
    description: "Oregun, Lagos, Nigeria",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21l1.5-4.5m0 0A9 9 0 1118.75 5.25M3.75 16.5A9 9 0 005.25 18.75m13.5-13.5a9 9 0 010 12.75"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    title: "Farm & Cultivation Sites",
    detail: "FUNAAB, Abeokuta · Ago-Owu, Ogun State",
    description: "~25 ha across two active sites — visits by appointment",
  },
];

const enquiryTypes = [
  {
    value: "",
    label: "Select enquiry type",
  },
  {
    value: "supply",
    label: "Supply & Procurement",
  },
  {
    value: "export",
    label: "Export & International Trade",
  },
  {
    value: "investment",
    label: "Partnership & Investment",
  },
  {
    value: "visit",
    label: "Farm / Facility Visit",
  },
  {
    value: "general",
    label: "General Enquiry",
  },
];

const faqs = [
  {
    q: "What products are available for commercial supply?",
    a: "We supply across seven processing stages — from raw untreated poles and treated whole bamboo through to precision-cut strips, solid laminated boards, strand-woven panels, and finished products. Each stage suits different manufacturing or construction applications. Visit our Products page for full specifications.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "MOQs depend on product stage and form. We work primarily with B2B buyers and are happy to discuss volume requirements and lead times directly. Send us an enquiry with your specification and we will respond within one business day.",
  },
  {
    q: "Do you export internationally?",
    a: "Yes. Bamboostic is actively pursuing export markets — particularly Europe, the Middle East, and North America. Our bamboo is grown without deforestation, making it fully compliant with the EU Deforestation Regulation (EUDR) in force from December 2026. We handle export documentation and phytosanitary certification.",
  },
  {
    q: "How does the FUNAAB joint venture work?",
    a: "Narbattan Springs Ltd entered a joint venture with FUNAAB (Federal University of Agriculture, Abeokuta) to establish and manage bamboo farmland across a 96-hectare site. FUNAAB provides land and agricultural oversight; Narbattan provides capital, processing infrastructure, and commercial operations. We also operate a second active cultivation site at Ago-Owu, Ogun State — together accounting for approximately 25 hectares currently under cultivation. This JV structure validates our agronomic credentials and supports ongoing R&D.",
  },
  {
    q: "How can I invest in or partner with Bamboostic?",
    a: "We offer several partnership structures: financing a specific operation, setting up your own farm managed by Narbattan with an offtake agreement, establishing a standalone operation within the Bamboostic supply network, or proposing your own structure. Reach out via the form below and we will arrange a conversation.",
  },
  {
    q: "Are your products EUDR-compliant?",
    a: "Yes — and inherently so. Bamboo is a grass, not a tree. Growing bamboo does not constitute deforestation under the EUDR. Our FUNAAB farmland has full land-use documentation. We are positioned to be a clean-supply alternative to Chinese exporters who face increasing compliance scrutiny.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-bamboo-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-5">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6 leading-tight">
              Let&apos;s Start a
              <br />
              Conversation.
            </h1>
            <p className="text-xl text-bamboo-600 leading-relaxed">
              Whether you are sourcing bamboo at scale, exploring a partnership,
              or looking to invest — we want to hear from you. We respond to
              every serious enquiry within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="p-8 rounded-3xl bg-white border border-bamboo-100 hover:border-bamboo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center mb-5">
                  {method.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-bamboo-500 mb-2">
                  {method.title}
                </h3>
                <p className="text-bamboo-900 font-semibold mb-1">
                  {method.detail}
                </p>
                <p className="text-sm text-bamboo-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-5">
                Send a Message
              </span>
              <h2 className="text-4xl font-bold text-bamboo-900 mb-5 leading-tight">
                Tell us what you need.
                <br />
                <span className="text-bamboo-500">We will take it from there.</span>
              </h2>
              <p className="text-bamboo-600 leading-relaxed mb-8">
                Use the form to tell us about your supply requirement, export
                interest, investment enquiry, or anything else. The more context
                you give us, the faster we can come back to you with something
                useful.
              </p>

              {/* Who should reach out */}
              <div className="bg-sage rounded-2xl p-8 space-y-5">
                <h3 className="font-bold text-bamboo-900">
                  Who reaches out to us
                </h3>
                {[
                  {
                    label: "Manufacturers & OEMs",
                    note: "Seeking raw or semi-processed bamboo inputs",
                  },
                  {
                    label: "Builders & Developers",
                    note: "Specification-grade bamboo for construction",
                  },
                  {
                    label: "International Buyers",
                    note: "Export procurement, EUDR-compliant supply chains",
                  },
                  {
                    label: "Investors & Partners",
                    note: "Farm finance, JV structures, offtake agreements",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-bamboo-200 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-bamboo-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-bamboo-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-bamboo-500">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-cream rounded-3xl p-8 md:p-10 border border-bamboo-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-bamboo-800 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-bamboo-800 mb-2"
                    >
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-bamboo-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry"
                    className="block text-sm font-medium text-bamboo-800 mb-2"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiry"
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-bamboo-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirement, project, or question…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-bamboo-600 text-white font-semibold rounded-xl hover:bg-bamboo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-bamboo-400 text-center">
                  Narbattan Springs Ltd · Bamboostic · Lagos, Nigeria
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-5">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900">
              Common Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="p-8 rounded-2xl bg-white border border-bamboo-100 hover:border-bamboo-200 transition-colors"
              >
                <h3 className="text-base font-bold text-bamboo-900 mb-3 flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-bamboo-100 text-bamboo-600 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-bamboo-600 leading-relaxed ml-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
