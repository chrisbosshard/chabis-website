import { MetadataRoute } from "next";
import { locales, mainLocales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chabis.app";

  const routes: MetadataRoute.Sitemap = [];

  // Add main pages (DE/EN only)
  for (const locale of mainLocales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
  }

  // Add support, privacy, terms for all locales
  for (const locale of locales) {
    routes.push({
      url: `${baseUrl}/${locale}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
    routes.push({
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
    routes.push({
      url: `${baseUrl}/${locale}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return routes;
}
