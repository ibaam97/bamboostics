import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Raw Bamboo", href: "/products#raw" },
    { label: "Bamboo Flooring", href: "/products#flooring" },
    { label: "Bamboo Furniture", href: "/products#furniture" },
    { label: "Bamboo Textiles", href: "/products#textiles" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Farm", href: "/about#farm" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Careers", href: "/contact" },
  ],
  Support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Shipping", href: "/contact" },
    { label: "Wholesale", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bamboo-900 text-bamboo-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-bamboo-500 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2v20M12 2c-2 4-2 8 0 10M12 2c2 4 2 8 0 10M12 12c-2 4-2 8 0 10M12 12c2 4 2 8 0 10" />
                  <path d="M8 6h8M8 12h8M8 18h8" strokeDasharray="2 2" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Bamboo<span className="text-bamboo-400">stics</span>
              </span>
            </Link>
            <p className="text-bamboo-300 leading-relaxed max-w-sm mb-8">
              Growing the future with sustainable bamboo. From our farms to your hands — premium bamboo
              raw materials and finished products crafted with care for people and planet.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-bamboo-800 flex items-center justify-center text-bamboo-400 hover:bg-bamboo-700 hover:text-white transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-bamboo-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-bamboo-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-bamboo-500">
            &copy; {new Date().getFullYear()} Bamboostics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-bamboo-500">
            <a href="#" className="hover:text-bamboo-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bamboo-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
