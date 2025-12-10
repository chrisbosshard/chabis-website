import Image from "next/image";

const footerLinks = {
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "mailto:support@chabis.app" },
  ],
  legal: [
    { label: "Datenschutz", href: "/privacy" },
    { label: "AGB", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Image src="/chabis-logo.svg" alt="Chabis Logo" width={140} height={48} className="h-8 sm:h-10 w-auto mb-3 sm:mb-4 brightness-0 invert" />
            <p className="text-stone-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Dein AI-Koch für individuelle Rezepte. Perfekt abgestimmt auf deine Diät, Allergien und Zutaten.
            </p>

            {/* App Store Badges */}
            <a href="https://apps.apple.com/app/chabis" target="_blank" rel="noopener noreferrer">
              <img src="/Download_on_the_App_Store_Badge_DE_RGB_wht_092917.svg" alt="Download on the App Store" className="h-10 sm:h-12" />
            </a>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
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
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h4>
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
