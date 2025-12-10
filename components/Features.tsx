"use client";

import PainSolution from "@/components/PainSolution";

export const FEATURES_ID = "features";

export default function Features() {
  return (
    <section id="features" className="pb-24 pt-52 lg:pt-30 xl:pt-52 bg-linear-to-b from-white to-lime-50/30 relative overflow-hidden scroll-mt-20">
      <div className="grid grid-cols-3">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">Kochen, was zu </span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-500">dir</span>
            </span>
            <span className="font-pacifico"> passt</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">
            Egal ob komplexe Diätpläne, strikte Unverträglichkeiten oder ein voller Kühlschrank: Chabis liefert dir nicht nur Rezepte, sondern massgeschneiderte
            Antworten
          </p>
        </div>

        <PainSolution />
      </div>
    </section>
  );
}
