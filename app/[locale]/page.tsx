import { type Locale, isValidMainLocale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Lifestyle from "@/components/Lifestyle";
import { WebsiteSchema, SoftwareAppSchema, OrganizationSchema, FAQSchema } from "@/components/StructuredData";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  
  // Redirect FR/IT to German
  if (!isValidMainLocale(localeParam)) {
    redirect("/de");
  }
  
  const locale: Locale = localeParam;
  const t = getTranslations(locale);

  return (
    <>
      {/* Structured Data for SEO */}
      <WebsiteSchema locale={locale} meta={t.meta} />
      <SoftwareAppSchema locale={locale} meta={t.meta} />
      <OrganizationSchema meta={t.meta} />
      <FAQSchema faqs={t.faq.items} />

      <main className="overflow-hidden">
        <Navbar t={t.nav} locale={locale} />
        <Hero t={t.hero} />
        <Features t={t.features} painSolutionT={t.painSolution} />
        <Lifestyle t={t.lifestyle} />
        <FeatureShowcase features={t.featureShowcase} />
        <SocialProof t={t.socialProof} />
        <FAQ t={t.faq} />
        <Footer t={t.footer} locale={locale} />
      </main>
    </>
  );
}
