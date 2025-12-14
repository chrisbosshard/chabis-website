"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

interface NavbarProps {
  t: {
    features: string;
    testimonials: string;
    faq: string;
  };
  locale: Locale;
}

export default function Navbar({ t, locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.features, href: "#features" },
    { label: t.testimonials, href: "#testimonials" },
    { label: t.faq, href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center">
            <Image src="/chabis-logo.svg" alt="Chabis Logo" width={120} height={40} className="h-8 md:h-10 w-auto" />
          </a>

          {/* Right side - Navigation Links + Language Switcher */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-stone-600 hover:text-lime-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 text-sm">
              {(["de", "en"] as const).map((lang, index) => (
                <span key={lang} className="flex items-center">
                  {index > 0 && <span className="text-stone-300 mx-0.5">|</span>}
                  <a
                    href={`/${lang}`}
                    className={`px-1.5 py-1 rounded transition-colors ${
                      locale === lang ? "text-lime-600 font-semibold" : "text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </a>
                </span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-stone-600 hover:text-lime-600 hover:bg-lime-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
