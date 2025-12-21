import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "IDER Solutions | Digital Solutions that Scale & Lead",
    template: "%s | IDER Solutions"
  },
  description: "IDER Solutions engineers scalable web systems, AI-ready SEO, and growth-focused digital frameworks to future-proof your brand and accelerate performance.",
  keywords: [
    "digital solutions",
    "scalable web platforms",
    "custom web architecture",
    "intelligent SEO",
    "AI-powered SEO",
    "digital growth strategy",
    "performance marketing",
    "growth-driven design",
    "future-ready websites",
    "innovation consulting",
    "digital leadership",
    "custom development",
    "scalable platforms",
    "future-ready web solutions",
    "strategic web design",
    "business transformation"
  ],
  authors: [{ name: "Ider Solutions Team" }],
  creator: "Ider Solutions",
  publisher: "Ider Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://idersolutions.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'theme-color': '#ffffff',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idersolutions.com',
    siteName: 'IDER Solutions',
    title: 'IDER Solutions | Digital Solutions that Scale & Lead',
    description: 'IDER Solutions engineers scalable web systems, AI-ready SEO, and growth-focused digital frameworks to future-proof your brand and accelerate performance.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'IDER Solutions | Digital Solutions that Scale & Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDER Solutions | Digital Solutions that Scale & Lead',
    description: 'IDER Solutions engineers scalable web systems, AI-ready SEO, and growth-focused digital frameworks to future-proof your brand and accelerate performance.',
    images: ['/og-image.svg'],
    creator: '@idersolutions',
    site: '@idersolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ider Solutions",
  "url": "https://idersolutions.com",
  "logo": "https://idersolutions.com/logo.svg",
  "description": "IDER Solutions engineers scalable web systems, AI-ready SEO, and growth-focused digital frameworks to future-proof your brand and accelerate performance.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@idersolutions.com"
  },
  "sameAs": [
    "https://twitter.com/idersolutions",
    "https://linkedin.com/company/idersolutions",
    "https://facebook.com/idersolutions"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <DefaultGoogleAnalytics />
        <Script
          src="https://web3forms.com/client/script.js"
          strategy="lazyOnload"
          async
          defer
        />
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
