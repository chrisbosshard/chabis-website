"use client";

import { Leaf, ShieldAlert, Refrigerator } from "lucide-react";
import Image from "next/image";

// ============================================
// Blob SVG Shapes
// ============================================

const BlobShape1 = () => (
  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-28" viewBox="0 0 120 100" fill="none">
    <path d="M60 5C85 2 110 20 115 50C118 75 95 95 65 98C35 101 10 85 5 55C0 25 25 8 60 5Z" fill="#F5F5F4" />
  </svg>
);

const BlobShape2 = () => (
  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-32" viewBox="0 0 100 120" fill="none">
    <path d="M50 5C80 0 95 25 98 55C101 85 85 110 50 115C15 120 0 90 3 55C6 20 20 10 50 5Z" fill="#F5F5F4" />
  </svg>
);

const BlobShape3 = () => (
  <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-28 rotate-12" viewBox="0 0 110 95" fill="none">
    <path d="M55 3C90 -2 108 25 105 55C102 85 75 93 45 95C15 97 -5 75 3 45C11 15 25 8 55 3Z" fill="#F5F5F4" />
  </svg>
);

// ============================================
// Feature Card Component
// ============================================

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  blob: React.ReactNode;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-3 sm:mb-4 md:mb-6 w-40 h-40 md:w-40 md:h-40 p-3 sm:p-4 bg-white rounded-full shadow-soft">
      {/* {blob} */}
      <div className="relative w-full h-full">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>
      {/* <div className="relative z-10 w-full h-full flex items-center justify-center">{icon}</div> */}
    </div>
    <h2 className="text-xl md:text-xl lg:text-xl xl:text-3xl text-stone-800 my-2 md:my-3 font-bold">{title}</h2>
    <p className="text-sm md:text-sm text-stone-600 leading-relaxed max-w-xs px-2 sm:px-0">{description}</p>
  </div>
);

// ============================================
// Features Data
// ============================================

const features = [
  {
    image: "/actions/prep.svg",
    icon: <Leaf className="w-10 h-10 text-lime-500" strokeWidth={2} />,
    title: "Strikte Diät? Kein Problem",
    description: "Egal ob Keto, Vegan oder Pescetarisch. Chabis kennt deine Regeln und bricht sie nie.",
    blob: <BlobShape1 />,
  },
  {
    image: "/actions/mix.svg",
    icon: <ShieldAlert className="w-10 h-10 text-lime-500" strokeWidth={2} />,
    title: "Allergien im Griff",
    description: "Laktose? Gluten? Nüsse? Der AI-Chef filtert unsichere Zutaten automatisch heraus.",
    blob: <BlobShape2 />,
  },
  {
    image: "/actions/chill.svg",
    icon: <Refrigerator className="w-10 h-10 text-lime-500" strokeWidth={2} />,
    title: "Nie mehr Reste wegwerfen",
    description: "Sag Chabis, was noch im Kühlschrank liegt, und er zaubert dir ein Rezept daraus.",
    blob: <BlobShape3 />,
  },
];

// ============================================
// Main Component
// ============================================

export default function PainSolution() {
  return (
    <section className="pb-4 sm:pb-8 lg:pb-20 xl:pb-12 pt-2 sm:pt-4 lg:pt-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 md:gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} blob={feature.blob} image={feature.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
