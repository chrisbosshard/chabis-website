import type { Locale } from "@/lib/i18n/config";

interface SchemaProps {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
}

export function WebsiteSchema({ locale, meta }: SchemaProps) {
  const inLanguage = locale === "de" ? "de-CH" : "en";
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Chabis",
    alternateName: "Chabis App",
    url: `https://chabis.app/${locale}`,
    description: meta.description,
    inLanguage,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function SoftwareAppSchema({ locale, meta }: SchemaProps) {
  const offerDescription = locale === "de" ? "Kostenlos mit Premium-Option" : "Free with Premium option";
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chabis",
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    description: meta.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CHF",
      description: offerDescription,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Chabis",
      url: "https://chabis.app",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function OrganizationSchema({ meta }: Omit<SchemaProps, "locale">) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chabis",
    url: "https://chabis.app",
    logo: "https://chabis.app/chabis-logo.svg",
    description: meta.description,
    foundingCountry: "CH",
    sameAs: [],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
