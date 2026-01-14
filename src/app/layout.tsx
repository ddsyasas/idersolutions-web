import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "IDER Solutions | Web Development, SEO & Digital Marketing Agency",
    template: "%s | IDER Solutions"
  },
  description: "IDER Solutions is a digital agency specializing in web development, SEO, social media marketing, app development and design services. Get a free consultation today. USA: +1 (646) 238-0875 | Sri Lanka: +94 71 767 3521",
  keywords: [
    "web development company",
    "digital marketing agency",
    "SEO services",
    "social media marketing",
    "website development",
    "app development",
    "logo design",
    "brand identity",
    "ecommerce website",
    "wordpress development",
    "Sri Lanka web design",
    "USA digital agency",
    "affordable web development",
    "professional SEO services"
  ],
  authors: [{ name: "IDER Solutions", url: "https://idersolutions.com" }],
  creator: "IDER Solutions",
  publisher: "IDER Solutions (PVT) LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://idersolutions.com'),
  alternates: {
    canonical: 'https://idersolutions.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#F5A623' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idersolutions.com',
    siteName: 'IDER Solutions',
    title: 'IDER Solutions | Web Development, SEO & Digital Marketing Agency',
    description: 'Professional web development, SEO, and digital marketing services. Transform your business with our data-driven digital solutions. Free consultation available.',
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IDER Solutions - Digital Agency',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IDER Solutions | Web Development, SEO & Digital Marketing',
    description: 'Professional web development, SEO, and digital marketing services. Transform your business with our data-driven solutions.',
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
  other: {
    'msapplication-TileColor': '#F5A623',
    'theme-color': '#ffffff',
  },
};

// Organization Schema - for business knowledge panel
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://idersolutions.com/#organization",
  "name": "IDER Solutions",
  "alternateName": "IDER Solutions (PVT) LTD",
  "url": "https://idersolutions.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://idersolutions.com/logo.svg",
    "width": 512,
    "height": 512
  },
  "image": "https://idersolutions.com/og-image.jpg",
  "description": "IDER Solutions is a full-service digital agency offering web development, SEO, social media marketing, app development, and design services.",
  "email": "yasas@idersolutions.com",
  "telephone": ["+1-646-238-0875", "+94-71-767-3521"],
  "foundingDate": "2023",
  "founder": {
    "@type": "Person",
    "name": "Sajana Yasas",
    "url": "https://yasas.dev",
    "sameAs": "https://linkedin.com/in/ddsyasas"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "New York"
    },
    {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressLocality": "Sri Lanka"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 0,
      "longitude": 0
    },
    "geoRadius": "50000"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer", "PayPal", "Stripe"],
  "currenciesAccepted": "USD, LKR",
  "sameAs": [
    "https://linkedin.com/company/idersolutions",
    "https://twitter.com/idersolutions",
    "https://facebook.com/idersolutions"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Professional website development including WordPress, Shopify, and custom solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve Google rankings and organic traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Social media management and marketing across all platforms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "App Development",
          "description": "Mobile app development for iOS and Android platforms"
        }
      }
    ]
  }
};

// Website Schema - for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://idersolutions.com/#website",
  "url": "https://idersolutions.com",
  "name": "IDER Solutions",
  "description": "Web Development, SEO & Digital Marketing Agency",
  "publisher": {
    "@id": "https://idersolutions.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://idersolutions.com/services?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// SiteNavigationElement Schema - for sitelinks
const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Services",
      "url": "https://idersolutions.com/services",
      "description": "Explore our web development, SEO, marketing, and design services"
    },
    {
      "@type": "WebPage",
      "name": "Pricing",
      "url": "https://idersolutions.com/pricing",
      "description": "Transparent pricing for all our digital services"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://idersolutions.com/contact",
      "description": "Get in touch for a free consultation"
    },
    {
      "@type": "WebPage",
      "name": "About",
      "url": "https://idersolutions.com/about",
      "description": "Learn about our team and company story"
    },
    {
      "@type": "WebPage",
      "name": "Careers",
      "url": "https://idersolutions.com/careers",
      "description": "Join our growing team"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon for all browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#F5A623" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Navigation Schema */}
        <Script
          id="navigation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema),
          }}
        />
        <DefaultGoogleAnalytics />
        <Script
          src="https://web3forms.com/client/script.js"
          strategy="afterInteractive"
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
