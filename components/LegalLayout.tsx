import Image from "next/image";
import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <Image src="/chabis-logo.svg" alt="Chabis Logo" width={120} height={40} className="h-8 sm:h-10 w-auto" />
            </Link>
            <Link href="/" className="text-sm text-stone-600 hover:text-lime-600 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Zurück zur Startseite</span>
              <span className="sm:hidden">Zurück</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 font-pacifico">{title}</h1>
            <p className="text-xs sm:text-sm text-stone-500">Zuletzt aktualisiert: {lastUpdated}</p>
          </div>

          {/* Sections */}
          <div className="prose prose-stone max-w-none space-y-6 sm:space-y-8">{children}</div>

          {/* Footer */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link href="/" className="text-lime-600 hover:text-lime-700 font-medium text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zurück zur Startseite
              </Link>
              <div className="flex gap-4 text-xs sm:text-sm text-stone-500">
                <Link href="/privacy" className="hover:text-stone-700 transition-colors">
                  Datenschutz
                </Link>
                <Link href="/terms" className="hover:text-stone-700 transition-colors">
                  Nutzungsbedingungen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable section component for consistent styling
export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 sm:mb-3">{title}</h2>
      {children}
    </section>
  );
}

// Reusable paragraph component
export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-sm sm:text-base text-stone-600 leading-relaxed">{children}</p>;
}

// Reusable list component
export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-stone-600 space-y-2">{children}</ul>;
}

// Reusable link component
export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-lime-600 hover:text-lime-700 underline underline-offset-2 transition-colors">
      {children}
    </a>
  );
}
