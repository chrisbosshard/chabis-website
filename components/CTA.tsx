import Image from "next/image";

// ============================================
// Data
// ============================================

const lifestyles = [
  {
    image: "/beginner_cook.png",
    label: "Effizient kochen",
    description: "Ich möchte mit dem kochen, was ich zuhause habe und neue Rezepte entdecken.",
  },
  {
    image: "/teacher_cook.png",
    label: "Kochen lernen",
    description: "Ich lerne gerade kochen und brauche einfache Rezepte mit Schritt-für-Schritt-Anleitungen.",
  },
  {
    image: "/coach_cook.png",
    label: "Muskeln aufbauen",
    description: "Ich optimiere meine Ernährung für Training, Muskelaufbau und sportliche Leistung.",
  },
  {
    image: "/health_cook.png",
    label: "Gesund ernähren",
    description: "Ich achte auf Nährwerte und möchte ausgewogene, gesunde Mahlzeiten kochen.",
  },
  {
    image: "/expert_cook.png",
    label: "Inspiration finden",
    description: "Ich koche gerne und suche kreative Inspiration für neue Gerichte.",
  },
];

// ============================================
// Subcomponents
// ============================================

const LifestyleCard = ({ image, label, description }: { image: string; label: string; description: string }) => (
  <div className="flex flex-col items-center text-center group px-8 sm:px-0 mb-2 md:mb-8">
    <div className="relative mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105 rounded-2xl overflow-hidden w-full md:h-auto">
      <img src={image} alt={label} className="relative z-10 w-full h-full object-contain" />
    </div>
    <h3 className="font-bold text-stone-800 text-xl mb-1">{label}</h3>
    <p className="text-stone-500 text-sm md:max-w-none">{description}</p>
  </div>
);

// ============================================
// Main Component
// ============================================

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:pt-24 bg-linear-to-b from-white to-lime-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800   mb-3 sm:mb-4">
            <span className="font-pacifico">Für jeden </span>
            <span className="font-pacifico text-lime-500">Lifestyle</span>
            <span className="font-pacifico"> das passende Rezept</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">
            Egal ob Anfänger oder Profi, Fitness-Fan oder Familienmensch – Chabis passt sich deinem Kochstil an.
          </p>
        </div>

        {/* Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-6 mb-12 sm:mb-0">
          {lifestyles.map((lifestyle, index) => (
            <LifestyleCard key={index} {...lifestyle} />
          ))}
        </div>
      </div>
    </section>
  );
}
