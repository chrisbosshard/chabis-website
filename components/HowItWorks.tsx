const steps = [
  {
    number: "1",
    title: "Sag Chabis, worauf du Lust hast",
    description: 'Tippe einfach, was du essen möchtest – zum Beispiel "I want pasta but healthy".',
    mockup: (
      <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[240px] border border-stone-100">
        <div className="flex items-center gap-2 bg-lime-50 rounded-xl px-4 py-3 border border-lime-100">
          <span className="text-lime-500">💬</span>
          <span className="text-stone-600 text-sm">I want pasta but healthy...</span>
        </div>
      </div>
    ),
  },
  {
    number: "2",
    title: "Erhalte das perfekte Rezept",
    description: "In Sekunden generiert Chabis ein massgeschneidertes Rezept mit allen Details.",
    mockup: (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[240px] border border-stone-100">
        <div className="h-24 bg-gradient-to-br from-yellow-200 to-lime-300 flex items-center justify-center">
          <span className="text-3xl">🥗</span>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-lime-100 text-lime-700 text-xs rounded-full font-medium">Premium</span>
          </div>
          <h4 className="font-semibold text-stone-800 text-sm">Zucchini-Spaghetti Bowl</h4>
          <p className="text-xs text-stone-500 mt-1">20 Min • Einfach • 450 kcal</p>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "Koche mit Zuversicht",
    description: "Folge der klaren Schritt-für-Schritt Anleitung mit Mise-en-place Phase für perfekte Vorbereitung.",
    mockup: (
      <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[240px] border border-stone-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold text-sm">1</div>
          <span className="text-sm font-medium text-stone-800">Mise en Place</span>
          <span className="ml-auto px-2 py-0.5 bg-lime-100 text-lime-700 text-xs rounded-full">Aktiv</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span>🔪</span>
            <span>Zucchini spiralisieren</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span>🧄</span>
            <span>Knoblauch hacken</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span>🧀</span>
            <span>Parmesan reiben</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-lime-50/50 to-white relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 text-lime-400 opacity-20 text-5xl animate-float">✦</div>
      <div className="absolute bottom-40 right-20 opacity-30">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-400 animate-wiggle">
          <path d="M10 20 L20 10 L30 20 L20 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-lime-600 text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-lime-500" />
            <span>So funktioniert&apos;s</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">So einfach </span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-600">geht&apos;s</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 80 6" fill="none">
                <path d="M2 4C20 2 60 2 78 4" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 px-2 sm:px-0">In 3 Schritten zum perfekten Gericht</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 text-white font-bold text-xl mb-4 shadow-lg shadow-lime-500/30">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-3">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Mockup */}
              <div className="flex-1 flex justify-center">
                <div className="transform hover:scale-105 transition-transform duration-300">{step.mockup}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
