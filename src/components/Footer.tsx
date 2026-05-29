import Link from "next/link";

const footerLinks = {
  Products: [
    { label: "Processing Pipeline", href: "/products#pipeline" },
    { label: "Raw & Treated Poles", href: "/products" },
    { label: "Strips & Laminated Boards", href: "/products" },
    { label: "Finished Goods", href: "/products" },
  ],
  Company: [
    { label: "About Bamboostic", href: "/about" },
    { label: "FUNAAB Joint Venture", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  "Work With Us": [
    { label: "Supply & Procurement", href: "/contact" },
    { label: "Export & Trade", href: "/contact" },
    { label: "Invest / Partner", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
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
                Bamboo<span className="text-bamboo-400">stic</span>
              </span>
            </Link>
            <p className="text-bamboo-300 leading-relaxed max-w-sm mb-5">
              Nigeria&apos;s vertically integrated bamboo company — from 96 ha of certified
              farmland in Abeokuta to processed supply for manufacturers, builders,
              and international buyers worldwide.
            </p>
            <address className="not-italic text-sm text-bamboo-500 leading-relaxed mb-8">
              10, Memunat Ayodeji Crescent<br />
              Oregun, Lagos, Nigeria<br />
              <a
                href="mailto:info@nabattansprings.com"
                className="hover:text-bamboo-300 transition-colors"
              >
                info@nabattansprings.com
              </a>
            </address>
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
            &copy; {new Date().getFullYear()} Narbattan Springs Ltd. Bamboostic&trade; is a registered brand.
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
