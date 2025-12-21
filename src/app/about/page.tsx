import type { Metadata } from "next";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | IDER Solutions",
  description: "Learn about IDER Solutions - your trusted partner in transforming ideas into powerful digital solutions. Expert team delivering fast, modern, and scalable web development, digital marketing, and technology services.",
  keywords: [
    "about ider solutions",
    "digital solutions company",
    "web development team",
    "digital marketing agency",
    "technology experts",
    "software development company"
  ],
  openGraph: {
    title: "About Us | IDER Solutions",
    description: "Learn about IDER Solutions - your trusted partner in transforming ideas into powerful digital solutions.",
    url: "https://idersolutions.com/about",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - About Us',
      },
    ],
  },
};

export default function AboutPage() {
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
        "name": "About Us",
        "item": "https://idersolutions.com/about"
      }
    ]
  };

  return (
    <>
      <StructuredData 
        type="organization"
        data={{
          name: "IDER Solutions",
          url: "https://idersolutions.com",
          description: "Your trusted partner in transforming ideas into powerful digital solutions",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600">
            <ol className="flex space-x-2">
              <li><a href="/" className="hover:text-ider-yellow transition-colors">Home</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">About Us</li>
            </ol>
          </nav>
          
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
