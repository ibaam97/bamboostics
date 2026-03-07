const testimonials = [
  {
    quote: "The bamboo flooring from Bamboostics completely transformed our home. It's stunning, durable, and we love knowing it's sustainably sourced.",
    name: "Sarah Chen",
    role: "Homeowner, Portland",
    avatar: "SC",
  },
  {
    quote: "As an architect, I need reliable materials. Bamboostics' raw bamboo poles are consistently high quality. They've become our go-to supplier for eco-builds.",
    name: "Michael Torres",
    role: "Architect, Austin",
    avatar: "MT",
  },
  {
    quote: "We switched our entire product line to bamboo fiber from Bamboostics. Our customers love the quality and the sustainability story behind it.",
    name: "Priya Patel",
    role: "Textile Manufacturer, LA",
    avatar: "PP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bamboo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-6">
            Loved by Builders & Dreamers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-3xl bg-white border border-bamboo-100 hover:shadow-xl hover:shadow-bamboo-100/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-earth-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-bamboo-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bamboo-500 text-white flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-bamboo-900">{t.name}</div>
                  <div className="text-sm text-bamboo-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
