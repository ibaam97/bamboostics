import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Bamboostics",
  description: "Get in touch with Bamboostics for quotes, wholesale inquiries, or general questions.",
};

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Us",
    detail: "hello@bamboostics.com",
    description: "For general inquiries and product questions",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Call Us",
    detail: "+1 (555) BAMBOO-1",
    description: "Mon-Fri, 8am to 6pm EST",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Visit Us",
    detail: "123 Bamboo Lane, Greenville",
    description: "Farm tours available by appointment",
  },
];

const faqs = [
  {
    q: "What's the minimum order quantity for raw materials?",
    a: "For most raw materials, our minimum order is 50 units or 100kg depending on the product. For wholesale accounts, we can discuss custom minimums that work for your business.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! We ship to over 30 countries worldwide. International shipping rates are calculated based on weight and destination. We handle all export documentation and phytosanitary certificates.",
  },
  {
    q: "Can I visit the bamboo farm?",
    a: "Absolutely! We offer guided farm tours every Saturday from 10am to 2pm. Private tours for business partners can be arranged on weekdays. Just contact us to schedule.",
  },
  {
    q: "What species of bamboo do you grow?",
    a: "We cultivate over 15 species including Moso (Phyllostachys edulis), Guadua angustifolia, Tonkin cane, Black Bamboo, and several ornamental varieties. Each is selected for specific commercial applications.",
  },
  {
    q: "Do you offer custom manufacturing?",
    a: "Yes, we can produce custom bamboo products to your specifications. Whether it's specific dimensions for raw materials or custom-designed finished products, our team can work with you from concept to delivery.",
  },
  {
    q: "Are your products certified sustainable?",
    a: "We are a certified B Corporation and our bamboo is grown using organic practices. Our processing facility is powered by 80% renewable energy, and we maintain FSC chain-of-custody certification for applicable products.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bamboo-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6">
            Let&apos;s Talk Bamboo
          </h1>
          <p className="text-xl text-bamboo-600 max-w-2xl mx-auto">
            Have a question, need a quote, or want to explore a partnership?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="p-8 rounded-3xl bg-white border border-bamboo-100 text-center hover:border-bamboo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center mx-auto mb-5">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-bamboo-900 mb-2">{method.title}</h3>
                <p className="text-bamboo-700 font-medium mb-1">{method.detail}</p>
                <p className="text-sm text-bamboo-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
                Send a Message
              </span>
              <h2 className="text-4xl font-bold text-bamboo-900 mb-6">
                We&apos;ll get back to you within 24 hours
              </h2>
              <p className="text-bamboo-600 leading-relaxed mb-8">
                Fill out the form and our team will reach out promptly. Whether you need pricing for bulk orders,
                want to schedule a farm tour, or have technical questions about our products — we&apos;re here to help.
              </p>
              <div className="bg-sage rounded-2xl p-8">
                <h3 className="font-bold text-bamboo-900 mb-4">Quick Response Times</h3>
                <div className="space-y-3">
                  {[
                    { label: "General Inquiries", time: "Within 24 hours" },
                    { label: "Quote Requests", time: "Within 4 hours" },
                    { label: "Wholesale Accounts", time: "Same business day" },
                    { label: "Technical Support", time: "Within 12 hours" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-bamboo-600">{item.label}</span>
                      <span className="text-bamboo-800 font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-3xl p-8 md:p-10 border border-bamboo-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-bamboo-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-bamboo-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bamboo-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-bamboo-800 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="quote">Product Quote</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="tour">Farm Tour</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bamboo-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-bamboo-200 bg-white text-bamboo-900 placeholder-bamboo-400 focus:outline-none focus:ring-2 focus:ring-bamboo-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-xl hover:bg-bamboo-600 transition-all duration-300 shadow-lg shadow-bamboo-500/20 hover:shadow-xl hover:shadow-bamboo-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-8 rounded-2xl bg-white border border-bamboo-100 hover:border-bamboo-200 transition-colors"
              >
                <h3 className="text-lg font-bold text-bamboo-900 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-bamboo-100 text-bamboo-600 flex items-center justify-center text-sm font-bold">
                    Q
                  </span>
                  {faq.q}
                </h3>
                <p className="text-bamboo-600 leading-relaxed ml-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
