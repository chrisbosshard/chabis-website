import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

const siteUrl = "https://chabis.app";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.meta.title,
      template: "%s | Chabis",
    },
    description: t.meta.description,
    keywords:
      locale === "de"
        ? ["Rezepte App", "AI Koch", "Schweizer Rezepte", "Personalisierte Rezepte", "Keto Rezepte", "Vegane Rezepte", "Allergien Kochen", "iOS Koch App"]
        : ["Recipe App", "AI Chef", "Swiss Recipes", "Personalized Recipes", "Keto Recipes", "Vegan Recipes", "Allergy Cooking", "iOS Cooking App"],
    authors: [{ name: "Chabis", url: siteUrl }],
    creator: "Chabis",
    publisher: "Chabis",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_CH" : "en_US",
      url: `${siteUrl}/${locale}`,
      siteName: "Chabis",
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og-image.png"],
      creator: "@chabisapp",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        de: `${siteUrl}/de`,
        en: `${siteUrl}/en`,
      },
    },
    category: "Food & Drink",
  };
}

export default async function LocaleLayout({ children }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
  return <>{children}</>;
}
