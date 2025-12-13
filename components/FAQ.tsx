"use client";

import { useState } from "react";

interface FAQProps {
  t: {
    title1: string;
    titleHighlight: string;
    contactText: string;
    contactLink: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-stone-800 mb-3 sm:mb-4">
              <span className="font-pacifico">{t.title1}</span>
              <span className="relative inline-block">
                <span className="font-pacifico text-lime-500">{t.titleHighlight}</span>
              </span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {t.items.map((faq, index) => (
              <div key={index} className="border border-stone-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all hover:border-lime-200">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white hover:bg-lime-50/50 transition-colors"
                >
                  <span className="font-semibold text-stone-800 pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index ? "bg-lime-500 rotate-180" : "bg-stone-100"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${openIndex === index ? "text-white" : "text-stone-600"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}>
                  <div className="p-4 sm:p-6 pt-0 text-stone-600 leading-relaxed text-sm sm:text-base">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">{t.contactText}</p>
            <a href="mailto:info@chabis.ai" className="inline-flex items-center gap-2 text-lime-600 font-semibold hover:text-lime-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t.contactLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
