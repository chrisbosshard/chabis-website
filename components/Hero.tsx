"use client";

// ============================================
// Icons
// ============================================

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-stone-300"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ============================================
// Background Components
// ============================================

const PatternBackground = () => (
  <div
    className="absolute inset-0 opacity-20 bg-amber-50"
    style={{
      backgroundImage: "url('/pattern.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "495px",
    }}
  />
);

const GradientOverlay = () => <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/60" />;

// ============================================
// Content Components
// ============================================

const AppStoreBadges = () => (
  <div
    className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up"
    style={{ animationDelay: "0.2s" }}
  >
    <a href="https://apps.apple.com/app/chabis" target="_blank" rel="noopener noreferrer">
      <img src="/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg" alt="Download on the App Store" className="h-12" />
    </a>
  </div>
);

const StarRating = ({ rating = 4 }: { rating?: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

const SocialProofBadge = () => (
  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
    <StarRating rating={4} />
    <span className="text-stone-600 text-sm">4.8 rating on Apple App Store</span>
  </div>
);

// ============================================
// Layout Components
// ============================================

const ContentSection = () => (
  <div className="text-center lg:text-left pt-20 sm:pt-24 md:pt-28 lg:pt-32 col-span-12 lg:col-span-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-stone-800 font-medium text-center lg:text-left mb-4 sm:mb-6 md:mb-10 animate-fade-in-up leading-tight">
      <span className="font-pacifico">Dein </span>{" "}
      <span className="relative inline-block">
        <span className="font-pacifico text-lime-500 italic">KI Chefkoch</span>
      </span>
      <br />
      <span className="font-pacifico"> für die Hosentasche</span>
    </h1>
    <p
      className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-800 font-medium mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up px-2 sm:px-0"
      style={{ animationDelay: "0.1s" }}
    >
      Dein persönlicher AI-Koch versteht deine Bedürfnisse und kreiert Rezepte, die perfekt zu deinem Lifestyle passen
    </p>
    <AppStoreBadges />
    <SocialProofBadge />
  </div>
);

const PhoneMockup = () => (
  <div className="hidden lg:flex z-100 col-span-6 w-full h-full items-center">
    {/* Cook peeking from behind phones */}
    <img src="/phone_mockup_cook.png" alt="Chabis App" className="scale-140 relative z-10 drop-shadow-2xl xl:translate-y-1/3" />
  </div>
);

// Mobile Phone Mockup - Simplified version for smaller screens
const MobilePhoneMockup = () => (
  <div className="lg:hidden flex justify-center mt-20 sm:mt-32 w-full col-span-12 mb-8 sm:mb-12">
    <img src="/phone_mockup.png" alt="Chabis App" className="scale-140 md:w-[65%] drop-shadow-2xl" />
  </div>
);

// ============================================
// Main Hero Component
// ============================================

export default function Hero() {
  return (
    <section className="relative flex items-start pt-16 sm:pt-20 -mb-20 bg-stone-100">
      {/* Background layers */}
      <PatternBackground />
      <GradientOverlay />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 pt-0 pb-8 sm:pb-12 lg:pb-32 xl:pb-52 relative z-10">
        <div className="grid grid-cols-12  gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          <ContentSection />
          <MobilePhoneMockup />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
