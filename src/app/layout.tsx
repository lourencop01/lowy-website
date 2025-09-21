import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-body`}
      >
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
            logo: "/logo_black.png"
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
