import { type Locale, isValidLocale, locales } from "@/lib/i18n/config";
import { getLegalTranslations } from "@/lib/i18n/legal";
import { getTranslations } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isValidLocale(localeParam) ? localeParam : "de";
  const legal = getLegalTranslations(locale);

  return {
    title: legal.terms.title,
    description: legal.terms.sections[0]?.content || "",
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : "de";
  const legal = getLegalTranslations(locale);
  const t = getTranslations(locale);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 py-4">
          <Link href={`/${locale}`} className="inline-block">
            <Image src="/chabis-logo.svg" alt="Chabis Logo" width={120} height={40} className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">{legal.terms.title}</h1>
        <p className="text-stone-500 mb-8">{legal.terms.lastUpdated}</p>

        <div className="space-y-8">
          {legal.terms.sections.map((section, index) => (
            <section key={index} className="prose prose-stone max-w-none">
              <h2 className="text-xl font-semibold text-stone-800 mb-3">{section.title}</h2>
              <p className="text-stone-600 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <Link href={`/${locale}`} className="text-lime-600 hover:text-lime-700 font-medium">
            ← {locale === "de" ? "Zurück zur Startseite" : locale === "fr" ? "Retour à l'accueil" : locale === "it" ? "Torna alla home" : "Back to Home"}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Chabis. {t.footer.tagline}
          </p>
        </div>
      </footer>
    </div>
  );
}
