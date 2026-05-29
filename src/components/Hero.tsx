import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bamboo-50 via-cream to-sage" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232e6e23' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated decorative bamboo stalks — ladder style */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.12] hidden lg:block">
        <svg viewBox="0 0 400 900" fill="none" className="h-full w-full" preserveAspectRatio="xMaxYMid slice">
          <defs>
            {/* Stalk grow-down animation */}
            <style>{`
              @keyframes growDown {
                from { stroke-dashoffset: 900; }
                to   { stroke-dashoffset: 0; }
              }
              @keyframes fadeLeaf {
                0%   { opacity: 0; transform: scale(0.4) rotate(-12deg); }
                70%  { opacity: 0; transform: scale(0.4) rotate(-12deg); }
                100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
              }
              @keyframes nodeGlow {
                0%   { opacity: 0; }
                50%  { opacity: 0.6; }
                100% { opacity: 0.35; }
              }
              .stalk1 { stroke-dasharray: 900; animation: growDown 2.4s ease-out forwards; }
              .stalk2 { stroke-dasharray: 900; animation: growDown 2.0s ease-out 0.3s forwards; stroke-dashoffset: 900; }
              .stalk3 { stroke-dasharray: 900; animation: growDown 2.8s ease-out 0.6s forwards; stroke-dashoffset: 900; }
              .node    { animation: nodeGlow 1.8s ease-out forwards; }
              .node-d1 { animation-delay: 1.0s; }
              .node-d2 { animation-delay: 1.4s; }
              .node-d3 { animation-delay: 1.8s; }
              .node-d4 { animation-delay: 2.2s; }
              .leaf    { transform-origin: center; animation: fadeLeaf 3s ease-out forwards; }
              .leaf-d1 { animation-delay: 2.2s; }
              .leaf-d2 { animation-delay: 2.5s; }
              .leaf-d3 { animation-delay: 2.8s; }
              .leaf-d4 { animation-delay: 3.1s; }
            `}</style>
          </defs>

          {/* Vertical bamboo stalks — grow down */}
          <line className="stalk1" x1="100" y1="0" x2="100" y2="900" stroke="#2e6e23" strokeWidth="8" strokeLinecap="round" />
          <line className="stalk2" x1="200" y1="0" x2="200" y2="900" stroke="#2e6e23" strokeWidth="12" strokeLinecap="round" />
          <line className="stalk3" x1="300" y1="0" x2="300" y2="900" stroke="#2e6e23" strokeWidth="6" strokeLinecap="round" />

          {/* Node rings on stalks */}
          {[
            { cx: 100, cy: 180, rx: 14, ry: 4, cls: "node-d1" },
            { cx: 200, cy: 330, rx: 18, ry: 5, cls: "node-d2" },
            { cx: 100, cy: 480, rx: 14, ry: 4, cls: "node-d3" },
            { cx: 300, cy: 620, rx: 12, ry: 3, cls: "node-d3" },
            { cx: 200, cy: 760, rx: 18, ry: 5, cls: "node-d4" },
          ].map((n, i) => (
            <ellipse key={i} className={`node ${n.cls}`} cx={n.cx} cy={n.cy} rx={n.rx} ry={n.ry} fill="#2e6e23" opacity="0" />
          ))}

          {/* Leaves that unfurl after stalks arrive */}
          <path className="leaf leaf-d1" d="M200 200 Q230 175 265 200 Q230 188 200 200Z" fill="#3d8b2f" opacity="0" />
          <path className="leaf leaf-d2" d="M200 200 Q170 175 135 195 Q170 188 200 200Z" fill="#3d8b2f" opacity="0" />
          <path className="leaf leaf-d3" d="M100 480 Q130 455 160 475 Q130 468 100 480Z" fill="#3d8b2f" opacity="0" />
          <path className="leaf leaf-d4" d="M300 620 Q270 595 240 615 Q270 608 300 620Z" fill="#3d8b2f" opacity="0" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bamboo-100 text-bamboo-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-bamboo-500 animate-pulse" />
            Nigeria&apos;s Pioneering Bamboo Company · Lagos &amp; Abeokuta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-bamboo-900 leading-[1.1] tracking-tight mb-8">
            The World Is Running{" "}
            <span className="relative">
              <span className="relative z-10 text-bamboo-600">Out of Timber.</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-bamboo-200/60 -z-0 rounded" />
            </span>
            <br />
            We Grow the Alternative.
          </h1>

          <p className="text-xl md:text-2xl text-bamboo-700/80 leading-relaxed mb-12 max-w-2xl">
            Bamboostic cultivates and precision-processes bamboo into premium timber alternatives
            and industrial raw materials — built for Nigeria&apos;s construction boom,
            positioned for a <strong className="text-bamboo-700 font-semibold">$79 billion global market</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-bamboo-500 rounded-full hover:bg-bamboo-600 transition-all duration-300 shadow-lg shadow-bamboo-500/25 hover:shadow-xl hover:shadow-bamboo-500/30 hover:-translate-y-0.5"
            >
              Explore Our Products
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-bamboo-700 bg-white rounded-full hover:bg-bamboo-50 transition-all duration-300 border border-bamboo-200 hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "$79B", label: "Global Bamboo Market" },
              { value: "96 ha", label: "Certified JV Farmland" },
              { value: "20M+", label: "Nigeria Housing Deficit" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-bamboo-600">{stat.value}</div>
                <div className="text-sm text-bamboo-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
