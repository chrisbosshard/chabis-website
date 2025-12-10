import Image from "next/image";

export default function Premium() {
  return (
    <section id="premium" className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 text-lime-400 opacity-10 text-6xl">✦</div>
      <div className="absolute bottom-40 left-10 text-yellow-300 opacity-10 text-4xl animate-wiggle">✦</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-lime-400 text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
            <span>Preise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-3 sm:mb-4">
            <span className="font-pacifico text-white">Kostenlos starten. </span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-400">Premium</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" fill="none">
                <path d="M2 4C25 2 75 2 98 4" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-pacifico text-white"> geniessen.</span>
          </h2>
          <p className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto px-2 sm:px-0">
            Jeder neue User erhält 3 Premium-Rezepte pro Woche geschenkt. Upgrade für unbegrenzte AI-Bilder, Nährwert-Analysen und den intelligentesten
            Koch-Assistenten.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Visual Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Free Recipe Card */}
            <div className="bg-stone-800/50 backdrop-blur rounded-3xl p-6 border border-stone-700">
              <div className="text-sm text-stone-400 uppercase tracking-wider mb-4">Gratis</div>
              <div className="bg-stone-700/50 rounded-2xl p-5">
                <h4 className="font-semibold text-lg mb-3">🍝 Cremiges Zitronen-Pasta</h4>
                <div className="text-stone-400 text-sm space-y-2">
                  <p>
                    <strong className="text-stone-300">Zutaten:</strong> Spaghetti, Zitrone, Parmesan, Butter, Knoblauch...
                  </p>
                  <p>
                    <strong className="text-stone-300">Zubereitung:</strong> Pasta kochen, Sauce anrühren, servieren...
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-600 text-stone-500 text-sm">Sauberes Text-Rezept</div>
              </div>
            </div>

            {/* Premium Recipe Card */}
            <div className="relative bg-gradient-to-br from-lime-500/20 to-yellow-300/20 backdrop-blur rounded-3xl p-6 border border-lime-500/30">
              <div className="absolute -top-3 right-6">
                <span className="px-3 py-1 bg-gradient-to-r from-lime-400 to-lime-500 text-stone-900 text-xs font-semibold rounded-full">✨ Premium</span>
              </div>
              <div className="text-sm text-lime-400 uppercase tracking-wider mb-4">Premium</div>
              <div className="bg-stone-800/80 rounded-2xl overflow-hidden">
                {/* AI Generated Image Placeholder */}
                <div className="h-32 bg-gradient-to-br from-yellow-300 to-lime-400 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl">🍝</span>
                    <p className="text-stone-800 text-xs mt-1 font-medium">AI-generiertes Bild</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2">Cremiges Zitronen-Pasta</h4>
                  {/* Macro Chart */}
                  <div className="flex gap-3 mb-3">
                    <div className="flex-1 bg-stone-700/50 rounded-lg p-2 text-center">
                      <div className="text-lime-400 font-bold">450</div>
                      <div className="text-stone-400 text-xs">kcal</div>
                    </div>
                    <div className="flex-1 bg-stone-700/50 rounded-lg p-2 text-center">
                      <div className="text-green-400 font-bold">18g</div>
                      <div className="text-stone-400 text-xs">Protein</div>
                    </div>
                    <div className="flex-1 bg-stone-700/50 rounded-lg p-2 text-center">
                      <div className="text-blue-400 font-bold">52g</div>
                      <div className="text-stone-400 text-xs">Carbs</div>
                    </div>
                    <div className="flex-1 bg-stone-700/50 rounded-lg p-2 text-center">
                      <div className="text-yellow-400 font-bold">22g</div>
                      <div className="text-stone-400 text-xs">Fett</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-lime-300">
                    <span>🧠</span>
                    <span>Smart Analysis verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <div className="bg-stone-800/50 backdrop-blur rounded-3xl p-8 border border-stone-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-stone-700 flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Gratis</h3>
                  <p className="text-stone-400 text-sm">Für immer kostenlos</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span className="text-stone-300">Unbegrenzte Rezepte</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span className="text-stone-300">Personalisierte Vorschläge</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span className="text-stone-300">Schritt-für-Schritt Modus</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span className="text-stone-300">Einkaufsliste</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <span className="text-stone-500">✗</span>
                  <span className="text-stone-500">AI-generierte Bilder</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <span className="text-stone-500">✗</span>
                  <span className="text-stone-500">Nährwert-Analyse</span>
                </li>
              </ul>
            </div>

            {/* Premium Tier */}
            <div className="relative bg-gradient-to-br from-lime-500/20 to-yellow-300/20 backdrop-blur rounded-3xl p-8 border border-lime-500/30">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-gradient-to-r from-lime-400 to-lime-500 text-stone-900 text-sm font-semibold rounded-full">Beliebt</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-400 to-lime-500 flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Premium</h3>
                  <p className="text-lime-300 text-sm">CHF 4.90/Monat</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Alles aus Gratis</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Unbegrenzte AI-Bilder</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Detaillierte Nährwert-Analyse</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Vitamine & Mineralstoffe</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Makro-Übersicht</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lime-400">✓</span>
                  <span>Prioritäts-Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://apps.apple.com/app/chabis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-lime-500 text-stone-900 font-semibold rounded-full hover:shadow-lg hover:shadow-lime-500/25 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Jetzt kostenlos starten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
