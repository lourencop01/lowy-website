import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleAnalyticsRouteTracker } from "@/components/GoogleAnalyticsRouteTracker";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lowy — Websites e SEO que geram resultados",
  description: "Criamos websites rápidos e estratégias de SEO que aumentam a visibilidade e geram clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <Script
          id="ga-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              // Default-deny all categories per Consent Mode v2
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted'
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-body`}
      >
        <CookieConsentProvider>
          <GoogleAnalytics />
          <Suspense fallback={null}>
            <GoogleAnalyticsRouteTracker />
          </Suspense>
          <CookieConsentBanner />
          <Script id="organization-structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lowy",
            description:
              "Criamos websites rápidos e estratégias de SEO que aumentam a visibilidade e geram clientes.",
            sameAs: [
              "https://www.instagram.com/lowy_digital/"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+351 915 662 413",
                email: "lowydigitalseo@gmail.com",
                contactType: "customer support",
                areaServed: "PT",
                availableLanguage: ["pt-PT"]
              }
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lisboa",
              addressCountry: "PT"
            },
            logo: "/logo_black_nobg.webp"
          })}
        </Script>
          {children}
        </CookieConsentProvider>
      </body>
    </html>
  );
}
