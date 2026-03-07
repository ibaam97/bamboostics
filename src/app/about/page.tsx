import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Bamboostics",
  description: "Learn about our mission to make bamboo the world's preferred sustainable material.",
};

const timeline = [
  { year: "2015", title: "Seeds of an Idea", description: "Founded with a mission to promote bamboo as a sustainable alternative to hardwood and plastics." },
  { year: "2017", title: "First Harvest", description: "Our first bamboo grove reached maturity. We began supplying raw poles to local builders and craftspeople." },
  { year: "2019", title: "Processing Facility", description: "Opened our state-of-the-art processing plant, enabling us to offer bamboo flooring, fiber, and charcoal." },
  { year: "2021", title: "National Distribution", description: "Expanded to nationwide shipping and launched our finished products line for direct-to-consumer sales." },
  { year: "2023", title: "500 Acres & Growing", description: "Reached 500 acres of managed bamboo groves. Became a certified B Corporation for social and environmental impact." },
  { year: "2025", title: "Global Reach", description: "Now serving customers in 30+ countries with both raw materials and finished bamboo products." },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Planet First",
    description: "Every decision we make considers its environmental impact. Bamboo is inherently sustainable, and we amplify that by using renewable energy and zero-waste processing.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Community Impact",
    description: "We provide fair-wage employment to over 200 rural families. Our farming cooperatives share profits and provide agricultural training.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5a2.25 2.25 0 010 3.182l-2.121 2.121a2.25 2.25 0 01-3.182 0L12 17.306l-2.497 2.497a2.25 2.25 0 01-3.182 0l-2.12-2.121a2.25 2.25 0 010-3.182L8.25 10.5" />
      </svg>
    ),
    title: "Quality Obsessed",
    description: "From seed selection to final finishing, we maintain rigorous quality standards. Our bamboo is tested for strength, moisture content, and durability at every stage.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation Driven",
    description: "We constantly explore new applications for bamboo — from bio-composites to nano-cellulose research. The future of bamboo is full of possibilities.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sage to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-bamboo-900 mb-6 leading-tight">
              Growing a Greener Future, One Bamboo at a Time
            </h1>
            <p className="text-xl text-bamboo-600 leading-relaxed">
              What started as a small bamboo nursery has grown into a vertically integrated operation — 
              from planting and harvesting to processing and crafting. We believe bamboo is the answer 
              to many of the world&apos;s sustainability challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section id="farm" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-bamboo-200 via-bamboo-300 to-bamboo-400 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-30" fill="none">
                  {/* Bamboo grove illustration */}
                  {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
                    <g key={x}>
                      <line x1={x} y1={300} x2={x} y2={30 + (i % 3) * 20} stroke="white" strokeWidth={4 + (i % 3) * 2} />
                      {[100, 180, 250].map((y) => (
                        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={6 + (i % 2) * 3} ry={2} fill="white" opacity="0.5" />
                      ))}
                    </g>
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">🎋</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-bamboo-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-bamboo-200 text-sm">Acres of Bamboo Groves</div>
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
                Our Farm
              </span>
              <h2 className="text-4xl font-bold text-bamboo-900 mb-6">
                Where It All Begins
              </h2>
              <div className="space-y-4 text-bamboo-600 leading-relaxed">
                <p>
                  Nestled in the fertile valleys where conditions are perfect for bamboo cultivation,
                  our 500+ acre farm is home to over 15 species of bamboo — each selected for specific
                  qualities and applications.
                </p>
                <p>
                  Our farming practices go beyond organic. We use companion planting, natural pest management,
                  and water recycling to ensure our groves thrive while enriching the surrounding ecosystem.
                  The bamboo we grow helps prevent soil erosion and creates habitat for local wildlife.
                </p>
                <p>
                  Harvesting is done selectively by hand to promote continued growth and maintain grove health.
                  Only mature culms (3-5 years old) are harvested, ensuring maximum strength and quality in
                  every piece of bamboo we sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900">A Decade of Growth</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-bamboo-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-bamboo-500 border-4 border-cream -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-bamboo-500 font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-bold text-bamboo-900 mt-1">{item.title}</h3>
                    <p className="text-bamboo-600 mt-2">{item.description}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="sustainability" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">What We Stand For</h2>
            <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
              Sustainability isn&apos;t just a buzzword for us — it&apos;s the foundation of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-3xl bg-cream border border-bamboo-100 hover:border-bamboo-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-bamboo-100 text-bamboo-600 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-bamboo-900 mb-3">{value.title}</h3>
                <p className="text-bamboo-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Numbers */}
      <section className="py-24 bg-bamboo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Bamboostics by the Numbers</h2>
            <p className="text-xl text-bamboo-300 max-w-2xl mx-auto">
              A decade of sustainable growth, measurable impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Acres of Bamboo" },
              { value: "200+", label: "Families Employed" },
              { value: "10K+", label: "Products Delivered" },
              { value: "30+", label: "Countries Served" },
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
            Want to Partner With Us?
          </h2>
          <p className="text-lg text-bamboo-600 mb-8">
            Whether you&apos;re a retailer, manufacturer, or fellow sustainability advocate — 
            we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bamboo-500 text-white font-semibold rounded-full hover:bg-bamboo-600 transition-colors shadow-lg shadow-bamboo-500/20"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
