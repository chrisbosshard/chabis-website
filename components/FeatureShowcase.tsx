"use client";

import Image from "next/image";
import { Download, Camera, ChefHat, Globe, Sparkles, Target, Clock, Heart } from "lucide-react";

// ============================================
// Types
// ============================================

interface FeatureSectionData {
  label: string;
  title: string;
  description: string;
  features: string[];
  image1: string;
  image2: string;
}

interface FeatureShowcaseProps {
  features: FeatureSectionData[];
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

// Feature icons mapping
const featureIcons = [Download, Camera, ChefHat, Globe, Sparkles, Target, Clock, Heart];

const FeatureContent = ({ data }: { data: FeatureSectionData }) => (
  <div className="mx-10 sm:mx-16 lg:max-w-lg lg:mx-0">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-pacifico lg:text-5xl font-medium text-stone-800 mt-2 mb-4 text-center lg:text-left">{data.title}</h2>
    <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-center md:text-left">{data.description}</p>
    <ul className="mt-8 lg:mt-0 space-y-3 md:space-y-4">
      {data.features.map((feature, index) => {
        const Icon = featureIcons[index % featureIcons.length];
        return (
          <li key={index} className="flex items-center gap-3">
            <span className="text-lime-500 shrink-0">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-stone-700 text-sm md:text-base">{feature}</span>
          </li>
        );
      })}
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
// Main Component
// ============================================

export default function FeatureShowcase({ features }: FeatureShowcaseProps) {
  return (
    <section className="bg-white">
      {features.map((feature, index) => (
        <FeatureSection key={index} data={feature} imageOnLeft={index % 2 === 0} />
      ))}
    </section>
  );
}
