import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";

interface FooterProps {
  t: {
    tagline: string;
    support: string;
    legal: string;
    faq: string;
    contact: string;
    privacy: string;
    terms: string;
    appStoreBadge: string;
  };
  locale: Locale;
}

export default function Footer({ t, locale }: FooterProps) {
  const footerLinks = {
    support: [
      { label: t.faq, href: "#faq" },
      { label: t.contact, href: `/${locale}/support` },
    ],
    legal: [
      { label: t.privacy, href: `/${locale}/privacy` },
      { label: t.terms, href: `/${locale}/terms` },
    ],
  };

  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Image src="/chabis-logo.svg" alt="Chabis Logo" width={140} height={48} className="h-8 sm:h-10 w-auto mb-3 sm:mb-4 brightness-0 invert" />
            <p className="text-stone-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">{t.tagline}</p>

            {/* App Store Badges */}
            <a href="https://apps.apple.com/app/chabis" target="_blank" rel="noopener noreferrer">
              <img src={t.appStoreBadge} alt="Download on the App Store" className="h-10 sm:h-12" />
            </a>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{t.support}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-stone-400 hover:text-lime-400 transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{t.legal}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-stone-400 hover:text-lime-400 transition-colors text-xs sm:text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
