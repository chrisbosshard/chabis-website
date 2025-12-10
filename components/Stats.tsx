"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: "🍳",
    value: 50000,
    suffix: "+",
    label: "Rezepte generiert",
  },
  {
    icon: "🥕",
    value: 200000,
    suffix: "+",
    label: "Zutaten verarbeitet",
  },
  {
    icon: "👨‍🍳",
    value: 10000,
    suffix: "+",
    label: "Zufriedene Köche",
  },
  {
    icon: "⭐",
    value: 4.9,
    suffix: "",
    label: "App Store Bewertung",
    decimals: 1,
  },
];

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setDisplayValue(value * easeOut);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    if (num >= 1000) {
      return Math.floor(num).toLocaleString("de-CH");
    }
    return Math.floor(num).toString();
  };

  return <span ref={ref}>{formatNumber(displayValue)}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-lime-500 to-lime-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </div>
              <div className="text-lime-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
