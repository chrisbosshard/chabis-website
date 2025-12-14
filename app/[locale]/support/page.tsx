import { type Locale, isValidLocale } from "@/lib/i18n/config";
import { getSupportTranslations } from "@/lib/i18n/support";
import { getTranslations } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isValidLocale(localeParam) ? localeParam : "de";
  const support = getSupportTranslations(locale);

  return {
    title: support.title,
    description: support.contactEmail,
  };
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : "de";
  const support = getSupportTranslations(locale);
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
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">{support.title}</h1>
        <p className="text-stone-500 mb-8">{support.lastUpdated}</p>

        {/* Contact Section */}
        <section className="bg-lime-50 border border-lime-200 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-stone-800 mb-3">{support.contactTitle}</h2>
          <p className="text-stone-600 mb-2">
            {support.contactEmail.split("**").map((part, i) =>
              i % 2 === 1 ? (
                <a key={i} href={`mailto:${part}`} className="font-semibold text-lime-600 hover:text-lime-700">
                  {part}
                </a>
              ) : (
                part
              )
            )}
          </p>
          <p className="text-stone-600">{support.contactResponse}</p>
        </section>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-stone-800 mb-6">{support.faqTitle}</h2>

        <div className="space-y-10">
          {support.sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3 className="text-lg font-semibold text-stone-800 mb-4 pb-2 border-b border-stone-200">{section.title}</h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h4 className="font-medium text-stone-800 mb-2">{item.question}</h4>
                    <p className="text-stone-600 leading-relaxed whitespace-pre-line">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Privacy & Legal */}
        <section className="mt-12 pt-8 border-t border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">{support.privacyLegal}</h3>
          <ul className="space-y-2">
            <li>
              <Link href={`/${locale}/privacy`} className="text-lime-600 hover:text-lime-700">
                {support.privacyLink}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/terms`} className="text-lime-600 hover:text-lime-700">
                {support.termsLink}
              </Link>
            </li>
          </ul>
        </section>

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
