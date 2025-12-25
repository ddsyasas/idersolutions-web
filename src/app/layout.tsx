import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";
// 🎄 CHRISTMAS EFFECTS - Remove this import after Christmas
import { ChristmasEffects } from "@/components/christmas";

export const metadata: Metadata = {
  title: {
    default: "IDER Solutions | Digital Solutions that Scale & Lead",
    template: "%s | IDER Solutions"
  },
  description: "We turn digital strategy into measurable business growth. We build high-performance, revenue-focused web platforms and AI-driven marketing strategies that measurably scale your revenue and efficiency.",
  keywords: [
    "revenue-focused web design",
    "custom software development",
    "AI business automation",
    "ROI-driven digital marketing",
    "enterprise SEO strategy",
    "high-performance web architecture",
    "digital transformation consulting",
    "scalable cloud solutions",
    "lead generation systems",
    "data-driven growth"
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
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions | Digital Solutions that Scale & Lead',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDER Solutions | Digital Solutions that Scale & Lead',
    description: 'IDER Solutions engineers scalable web systems, AI-ready SEO, and growth-focused digital frameworks to future-proof your brand and accelerate performance.',
    images: ['https://idersolutions.com/og-image.jpg'],
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
    google: '5toB--Itz_Zyji8oJfGnR9EdIZTgXWYCNi8Gb4enPQg',
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
    "email": "yasas@idersolutions.com"
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
          strategy="afterInteractive"
        />
        <TooltipProvider>
          {/* 🎄 CHRISTMAS EFFECTS - Remove this line after Christmas */}
          <ChristmasEffects />
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
