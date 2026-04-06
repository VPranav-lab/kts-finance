import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KTS Finance | Protezione, Crescita e Fiducia",
  description: "Da anni KTS Finance è al fianco di privati, famiglie e aziende per proteggere il tuo futuro con soluzioni su misura e un approccio consulenziale.",
  keywords: ["Assicurazione", "Polizze", "Cyber Risk", "Previdenza", "Auto", "KTS Finance", "Brescia"],
  openGraph: {
    title: "KTS Finance | Assicurazioni e Consulenza",
    description: "Il traguardo è costruire un futuro sicuro per te, la tua famiglia e il tuo business. Scopri le polizze KTS Finance.",
    url: "https://www.ktsfinance.com",
    siteName: "KTS Finance",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KTS Finance | Assicurazioni su Misura",
    description: "La nostra missione è proteggerti da ogni rischio, offrendo soluzioni assicurative personalizzate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LLM and Google Search structured data definition
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "KTS Finance",
    "url": "https://www.ktsfinance.com",
    "logo": "https://www.ktsfinance.com/wp-content/uploads/2023/09/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Aldo Moro 13, Palazzo Mercurio",
      "addressLocality": "Brescia",
      "addressRegion": "Lombardia",
      "postalCode": "25124",
      "addressCountry": "IT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-030-1387-7410",
      "contactType": "Customer Service",
      "email": "commerciale@ktsfinance.com"
    },
    "sameAs": [
      "https://www.facebook.com/ktsfinance",
      "https://www.linkedin.com/company/kts-finance"
    ]
  };

  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-primary-white text-primary-black font-sans selection:bg-secondary selection:text-white">
        {/* JSON-LD injection for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
