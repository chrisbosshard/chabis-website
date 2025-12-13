import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const siteUrl = "https://chabis.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#84cc16",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chabis - Dein Schweizer AI-Koch | Personalisierte Rezepte",
    template: "%s | Chabis",
  },
  description:
    "Entdecke Chabis, die Schweizer AI-Koch-App. Generiere personalisierte Rezepte basierend auf deinem Kühlschrank, deiner Diät und Allergien. Kostenlos für iOS.",
  keywords: [
    "Rezepte App",
    "AI Koch",
    "Schweizer Rezepte",
    "Personalisierte Rezepte",
    "Keto Rezepte",
    "Vegane Rezepte",
    "Allergien Kochen",
    "iOS Koch App",
    "Künstliche Intelligenz Kochen",
    "Meal Prep",
    "Diät Rezepte",
    "Glutenfrei Kochen",
    "Laktosefrei Rezepte",
  ],
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
    locale: "de_CH",
    url: siteUrl,
    siteName: "Chabis",
    title: "Chabis - Dein Schweizer AI-Koch",
    description: "Generiere personalisierte Rezepte basierend auf deinem Kühlschrank, deiner Diät und Allergien. In Sekunden.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chabis - Dein Schweizer AI-Koch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chabis - Dein Schweizer AI-Koch",
    description: "Generiere personalisierte Rezepte basierend auf deinem Kühlschrank, deiner Diät und Allergien.",
    images: ["/og-image.png"],
    creator: "@chabisapp",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Food & Drink",
  appLinks: {
    ios: {
      url: "https://apps.apple.com/app/chabis/idYOUR_APP_STORE_ID",
      app_name: "Chabis",
    },
  },
  other: {
    "apple-itunes-app": "app-id=YOUR_APP_STORE_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>{children}</body>
    </html>
  );
}
