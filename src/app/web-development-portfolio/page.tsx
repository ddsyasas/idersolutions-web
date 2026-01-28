import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata: Metadata = {
  title: "Web Development Portfolio | IDER Solutions",
  description: "Explore our web development projects including e-commerce stores, SaaS platforms, custom web applications, and corporate websites. See how we've helped businesses in USA and Sri Lanka achieve their digital goals.",
  keywords: [
    "web development portfolio",
    "web development projects",
    "e-commerce development",
    "custom web applications",
    "SaaS development",
    "WordPress development",
    "Shopify development",
    "IDER Solutions portfolio"
  ],
  openGraph: {
    title: "Web Development Portfolio | IDER Solutions",
    description: "Custom digital solutions crafted for businesses worldwide. Explore our web development projects.",
    url: "https://idersolutions.com/web-development-portfolio",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - Web Development Portfolio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDevelopmentPortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://idersolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development Portfolio",
        "item": "https://idersolutions.com/web-development-portfolio"
      }
    ]
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Web Development Portfolio",
    "description": "Explore our web development projects including e-commerce stores, SaaS platforms, and custom web applications.",
    "url": "https://idersolutions.com/web-development-portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "SyncSEO",
          "url": "https://idersolutions.com/web-development-portfolio/syncseo"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Founders Path",
          "url": "https://idersolutions.com/web-development-portfolio/founderspath"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "My Golf Essentials",
          "url": "https://idersolutions.com/web-development-portfolio/mygolfessentials"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "My Golf Essentials Shop",
          "url": "https://idersolutions.com/web-development-portfolio/mygolfessentials-shop"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Traci Sanderson Artist",
          "url": "https://idersolutions.com/web-development-portfolio/tracisandersonartist"
        }
      ]
    }
  };

  return (
    <>
      <StructuredData
        type="organization"
        data={{
          name: "IDER Solutions",
          description: "Web development and digital solutions agency"
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        {/* Breadcrumbs - Hidden visually but available for SEO/screen readers */}
        <nav className="sr-only" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li><a href="/">Home</a></li>
            <li>/</li>
            <li>Web Development Portfolio</li>
          </ol>
        </nav>

        <PortfolioHero />
        <ProjectGrid />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
