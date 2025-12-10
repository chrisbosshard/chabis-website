"use client";

import Image from "next/image";
import { Download, Camera, ChefHat, Globe, Sparkles, Target, Clock, Heart } from "lucide-react";

// ============================================
// Types
// ============================================

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface FeatureSectionData {
  label: string;
  title: string;
  description: string;
  features: FeatureItem[];
  image1: string;
  image2: string;
}

const PhoneMockup = ({ image1, image2, alt }: { image1: string; image2: string; alt: string }) => (
  <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[500px]">
    {/* Lime glow behind mockups */}
    <div className="absolute inset-0 bg-lime-400/60 blur-3xl rounded-full scale-75 -z-10" />
    {/* Single image on mobile, overlapping on larger screens */}
    <div className="relative w-1/2 left-[5%] md:w-auto">
      <Image src={image1} alt={alt} width={280} height={560} className="absolute left-1/2 drop-shadow-2xl -translate-x-1/4 rotate-5" />
      <Image src={image2} alt={alt} width={280} height={560} className="relative drop-shadow-2xl -translate-x-1/3 -rotate-5" />
    </div>
  </div>
);

const FeatureContent = ({ data }: { data: FeatureSectionData }) => (
  <div className="mx-10 sm:mx-16 lg:max-w-lg lg:mx-0">
    {/* <span className="text-lime-500 font-medium tracking-wide">{data.label}</span> */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-pacifico lg:text-5xl font-medium text-stone-800 mt-2 mb-4 text-center lg:text-left">{data.title}</h2>
    <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-center md:text-left">{data.description}</p>
    <ul className="mt-8 lg:mt-0 space-y-3 md:space-y-4">
      {data.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-lime-500 shrink-0">{feature.icon}</span>
          <span className="text-stone-700 text-sm md:text-base">{feature.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ============================================
// Feature Section Component
// ============================================

interface FeatureSectionProps {
  data: FeatureSectionData;
  imageOnLeft: boolean;
}

const FeatureSection = ({ data, imageOnLeft }: FeatureSectionProps) => (
  <div className="py-10 sm:py-12 md:py-16 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center ${imageOnLeft ? "" : "lg:[direction:rtl]"}`}>
        {/* Phone */}
        <div className={imageOnLeft ? "" : "lg:[direction:ltr]"}>
          <PhoneMockup image1={data.image1} image2={data.image2} alt={data.title} />
        </div>

        {/* Content */}
        <div className={imageOnLeft ? "" : "lg:[direction:ltr]"}>
          <FeatureContent data={data} />
        </div>
      </div>
    </div>
  </div>
);

// ============================================
// Features Data
// ============================================

const featuresData: FeatureSectionData[] = [
  {
    label: "Individuell angepasst",
    title: "Perfekt auf dich zugeschnitten",
    description: "Jedes Rezept wird automatisch an deine Diät, Allergien und Vorlieben angepasst. Nie mehr manuell Zutaten austauschen.",
    features: [
      { icon: <Download className="w-5 h-5" />, text: "Diäten: Keto, Vegan, Low-Carb & mehr" },
      { icon: <Download className="w-5 h-5" />, text: "Auf deine Ziele angepasst" },
      { icon: <Camera className="w-5 h-5" />, text: "Allergene automatisch ausfiltern" },
      { icon: <ChefHat className="w-5 h-5" />, text: "Portionsgrössen anpassen" },
      { icon: <Globe className="w-5 h-5" />, text: "Geschmackspräferenzen merken" },
    ],
    image1: "/mockup-onboarding.png",
    image2: "/mockup-onboarding-2.png",
  },
  {
    label: "Rezepte generieren",
    title: "Neue Rezepte in Sekunden generieren",
    description: "Sag Chabis einfach, was du kochen möchtest oder welche Zutaten du hast. Unser AI-Koch generiert dir in Sekunden das perfekte Rezept.",
    features: [
      { icon: <Sparkles className="w-5 h-5" />, text: "AI-generierte Rezepte in Sekunden" },
      { icon: <Target className="w-5 h-5" />, text: "Basierend auf deinen Vorlieben" },
      { icon: <Clock className="w-5 h-5" />, text: "Zeitoptimiert für deinen Alltag" },
      { icon: <Heart className="w-5 h-5" />, text: "Unbegrenzte Variationen möglich" },
      { icon: <Heart className="w-5 h-5" />, text: "Automatische Einkaufsliste immer dabei" },
    ],
    image1: "/mockup-generation.png",
    image2: "/mockup-generation-2.png",
  },
  {
    label: "Nährwerte",
    title: "Vollständige Nährwertanalyse",
    description: "Erhalte detaillierte Informationen zu allen Nährwerten, Makros und Mikronährstoffen. Perfekt für gesundheitsbewusste Ernährung.",
    features: [
      { icon: <Target className="w-5 h-5" />, text: "Komplettes Makro-Profil (Protein, Fett, Kohlenhydrate)" },
      { icon: <Sparkles className="w-5 h-5" />, text: "Detaillierte Aminosäuren-Übersicht" },
      { icon: <Heart className="w-5 h-5" />, text: "Vitamine & Mineralstoffe" },
      { icon: <Globe className="w-5 h-5" />, text: "Allergene & Unverträglichkeiten gekennzeichnet" },
    ],
    image1: "/mockup-nutrients.png",
    image2: "/mockup-nutrients-2.png",
  },
  {
    label: "Kochen",
    title: "Schritt für Schritt zum Erfolg",
    description: "Folge den klaren Anleitungen mit Timer, Umrechnungen und hilfreichen Tipps. Kochen war noch nie so einfach.",
    features: [
      { icon: <Download className="w-5 h-5" />, text: "Klare Schritt-für-Schritt Anleitungen" },
      { icon: <Download className="w-5 h-5" />, text: "Perfekt auf dein Koch-Niveau angepasst" },
      { icon: <ChefHat className="w-5 h-5" />, text: "Automatische Mengenumrechnung" },
      { icon: <Globe className="w-5 h-5" />, text: "Jederzeit Profi-Tipps vom AI-Koch" },
    ],
    image1: "/mockup-cooking.png",
    image2: "/mockup-cooking-2.png",
  },
  {
    label: "Speichern",
    title: "Deine Lieblingsrezepte immer dabei",
    description: "Speichere deine generierten Rezepte und greife jederzeit darauf zu. Organisiere sie in Kategorien und teile sie mit Familie.",
    features: [
      { icon: <Download className="w-5 h-5" />, text: "Favoriten markieren und organisieren" },
      { icon: <Camera className="w-5 h-5" />, text: "In Sammlungen gruppieren" },
      { icon: <ChefHat className="w-5 h-5" />, text: "Mit Familie & Freunden teilen" },
      { icon: <Globe className="w-5 h-5" />, text: "Cloud-Sync auf allen Geräten" },
    ],
    image1: "/mockup-others.png",
    image2: "/mockup-others-2.png",
  },
];

// ============================================
// Main Component
// ============================================

export default function FeatureShowcase() {
  return (
    <section className="bg-white">
      {featuresData.map((feature, index) => (
        <FeatureSection key={index} data={feature} imageOnLeft={index % 2 === 0} />
      ))}
    </section>
  );
}
