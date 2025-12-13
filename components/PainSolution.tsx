"use client";

import Image from "next/image";

// ============================================
// Feature Card Component
// ============================================

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-3 sm:mb-4 md:mb-6 w-40 h-40 md:w-40 md:h-40 p-3 sm:p-4 bg-white rounded-full shadow-soft">
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
    </div>
    <h2 className="text-xl md:text-xl lg:text-xl xl:text-3xl text-stone-800 my-2 md:my-3 font-bold">{title}</h2>
    <p className="text-sm md:text-sm text-stone-600 leading-relaxed max-w-xs px-2 sm:px-0">{description}</p>
  </div>
);

// ============================================
// Main Component
// ============================================

interface PainSolutionProps {
  items: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export default function PainSolution({ items }: PainSolutionProps) {
  return (
    <section className="pb-4 sm:pb-8 lg:pb-20 xl:pb-12 pt-2 sm:pt-4 lg:pt-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 md:gap-8 lg:gap-16">
          {items.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} image={feature.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
