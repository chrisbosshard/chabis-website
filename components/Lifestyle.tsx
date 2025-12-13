// ============================================
// Types
// ============================================

interface LifestyleProps {
  t: {
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    items: Array<{
      image: string;
      label: string;
      description: string;
    }>;
  };
}

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

export default function Lifestyle({ t }: LifestyleProps) {
  return (
    <section className="py-12 sm:py-16 md:pt-24 bg-linear-to-b from-white to-lime-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">{t.title1}</span>
            <span className="font-pacifico text-lime-500">{t.titleHighlight}</span>
            <span className="font-pacifico">{t.title2}</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">{t.subtitle}</p>
        </div>

        {/* Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-6 mb-12 sm:mb-0">
          {t.items.map((lifestyle, index) => (
            <LifestyleCard key={index} {...lifestyle} />
          ))}
        </div>
      </div>
    </section>
  );
}
