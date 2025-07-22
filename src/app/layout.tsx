import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DefaultGoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Ider Solutions - Professional Web Development & Digital Solutions",
    template: "%s | Ider Solutions"
  },
  description: "Ider Solutions provides professional web development, digital solutions, and innovative technology services. We specialize in creating modern, responsive websites and applications that drive business growth.",
  keywords: [
    "web development",
    "digital solutions",
    "website design",
    "software development",
    "mobile apps",
    "e-commerce",
    "digital marketing",
    "technology consulting",
    "responsive design",
    "SEO optimization"
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idersolutions.com',
    siteName: 'Ider Solutions',
    title: 'Ider Solutions - Professional Web Development & Digital Solutions',
    description: 'Ider Solutions provides professional web development, digital solutions, and innovative technology services. We specialize in creating modern, responsive websites and applications that drive business growth.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ider Solutions - Professional Web Development & Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ider Solutions - Professional Web Development & Digital Solutions',
    description: 'Ider Solutions provides professional web development, digital solutions, and innovative technology services.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ider Solutions",
              "url": "https://idersolutions.com",
              "logo": "https://idersolutions.com/logo.svg",
              "description": "Professional web development and digital solutions company",
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
            })
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <DefaultGoogleAnalytics />
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
