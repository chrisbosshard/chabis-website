"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Hobby-Köchin",
    avatar: "👩‍🍳",
    rating: 5,
    text: "Endlich eine App die versteht, dass ich kein Gluten essen kann! Jedes Rezept ist perfekt auf meine Bedürfnisse abgestimmt.",
  },
  {
    name: "Marco L.",
    role: "Fitness-Enthusiast",
    avatar: "🧑‍🍳",
    rating: 5,
    text: "Die Makro-Berechnung ist genial. Ich gebe mein Proteinziel ein und bekomme passende Rezepte. Game changer für mein Meal Prep!",
  },
  {
    name: "Elena K.",
    role: "Mutter von 3",
    avatar: "👨‍🍳",
    rating: 5,
    text: "Mit 3 Kindern und verschiedenen Vorlieben war Kochen ein Albtraum. Chabis findet Rezepte die allen schmecken!",
  },
  {
    name: "Thomas B.",
    role: "Keto-Anhänger",
    avatar: "🧑‍🍳",
    rating: 5,
    text: "Strikte Keto-Diät war nie einfacher. Die App kennt meine Regeln und liefert immer Low-Carb Optionen.",
  },
  {
    name: "Julia S.",
    role: "Vegane Köchin",
    avatar: "👩‍🍳",
    rating: 5,
    text: "Als Veganerin finde ich endlich kreative Rezepte ohne stundenlang zu suchen. Die KI versteht wirklich was vegan bedeutet!",
  },
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-lime-50/50 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
            <span className="font-pacifico">Was unsere </span>
            <span className="relative inline-block">
              <span className="font-pacifico text-lime-500">Köche</span>
            </span>
            <span className="font-pacifico"> sagen</span>
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto px-2 sm:px-0">
            Tausende von Hobbyköchen nutzen Chabis täglich für perfekte Rezepte.
          </p>
        </div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-stone-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-stone-800">{testimonial.name}</div>
                  <div className="text-sm text-stone-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-stone-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-2xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-stone-800">{testimonial.name}</div>
                        <div className="text-sm text-stone-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-lime-500" : "bg-stone-300"}`}
              />
            ))}
          </div>
        </div>

        {/* App Store Rating */}
      </div>
    </section>
  );
}
