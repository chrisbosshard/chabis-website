"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Wie viel kostet Chabis?",
    answer:
      "Chabis ist grundsätzlich kostenlos. Zum Start schenken wir dir jede Woche 3 Premium-Rezepte (inklusive AI-Bildern und detaillierten Nährwerten). Wenn du mehr möchtest, kannst du auf Chabis Premium upgraden für unbegrenzte Generierung und den smartesten AI-Modus. Die Standard-Rezept-Funktion bleibt dauerhaft gratis.",
  },
  {
    question: "Funktioniert Chabis auch offline?",
    answer:
      "Jein. Da unsere künstliche Intelligenz die Rezepte live für dich berechnet, benötigst du für die Generierung eine Internetverbindung. Aber: Alle Rezepte, die du in deinem Kochbuch gespeichert hast, sind auch offline verfügbar, damit du im Supermarkt oder im Funkloch problemlos kochen kannst.",
  },
  {
    question: "Welche Diäten werden unterstützt?",
    answer:
      "Fast alle. Chabis versteht komplexe Ernährungsformen wie Vegan, Vegetarisch, Pescetarisch, Keto, Low Carb und Paleo. Das Besondere: Die AI kombiniert dies automatisch mit deinen Allergien (z.B. Gluten, Laktose, Nüsse) und persönlichen Abneigungen (z.B. 'Kein Koriander').",
  },
  {
    question: "Ist meine Daten sicher?",
    answer:
      "Absolut. Als Schweizer App hat Datenschutz für uns höchste Priorität. Deine Gesundheitsdaten, Allergien und Vorlieben werden sicher verschlüsselt gespeichert und niemals an Werbepartner verkauft. Wir nutzen diese Daten ausschliesslich, um die Rezepte perfekt auf dich abzustimmen.",
  },
  {
    question: "Auf welchen Geräten funktioniert Chabis?",
    answer:
      "Chabis ist aktuell exklusiv für das iPhone (iOS) optimiert und im Apple App Store verfügbar. Wir konzentrieren uns darauf, das beste Erlebnis für iOS zu bieten, bevor wir andere Plattformen erschliessen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
              <span className="font-pacifico">Häufig gestellte </span>
              <span className="relative inline-block">
                <span className="font-pacifico text-lime-500">Fragen</span>
              </span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-stone-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all hover:border-lime-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-lime-50/50 transition-colors"
                >
                  <span className="font-semibold text-stone-800 pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index ? "bg-lime-500 rotate-180" : "bg-stone-100"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${openIndex === index ? "text-white" : "text-stone-600"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-4 sm:p-6 pt-0 text-stone-600 leading-relaxed text-sm sm:text-base">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">Hast du noch Fragen?</p>
            <a href="mailto:info@chabis.ai" className="inline-flex items-center gap-2 text-lime-600 font-semibold hover:text-lime-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Kontaktiere uns
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
