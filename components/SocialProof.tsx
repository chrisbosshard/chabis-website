"use client";

import { useState, useEffect } from "react";

// ============================================
// Types
// ============================================

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

interface SocialProofProps {
  t: {
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    testimonials: Testimonial[];
  };
}

// ============================================
// Subcomponents
// ============================================

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, className = "" }: TestimonialCardProps) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-stone-100 ${className}`}>
    <StarRating rating={testimonial.rating} />
    <p className="text-stone-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-2xl">{testimonial.avatar}</div>
      <div>
        <div className="font-semibold text-stone-800">{testimonial.name}</div>
        <div className="text-sm text-stone-500">{testimonial.role}</div>
      </div>
    </div>
  </div>
);

// ============================================
// Main Component
// ============================================

export default function SocialProof({ t }: SocialProofProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % t.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.length]);

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-lime-50/50 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">{t.title1}</span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-500">{t.titleHighlight}</span>
            </span>
            <span className="font-pacifico">{t.title2}</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">{t.subtitle}</p>
        </div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          {t.testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} className="hover:shadow-lg transition-shadow" />
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {t.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {t.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-lime-500" : "bg-stone-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
