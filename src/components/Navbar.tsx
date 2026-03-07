"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-bamboo-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-bamboo-500 flex items-center justify-center group-hover:bg-bamboo-600 transition-colors">
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
            <span className="text-2xl font-bold text-bamboo-800 tracking-tight">
              Bamboo<span className="text-bamboo-500">stics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-bamboo-700 rounded-full hover:bg-bamboo-100 hover:text-bamboo-900 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-bamboo-500 rounded-full hover:bg-bamboo-600 transition-colors shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-bamboo-700 hover:text-bamboo-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-lg border-t border-bamboo-100">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-bamboo-700 font-medium rounded-xl hover:bg-bamboo-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 text-center text-white bg-bamboo-500 rounded-xl font-semibold hover:bg-bamboo-600 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
