import type { Metadata } from "next";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Growth Services | IDER Solutions",
  description: "Data-driven digital marketing, custom applications, SEO, social media, and brand strategy. Solutions designed for measurable growth. Explore our services.",
  keywords: [
    "web development services",
    "digital marketing services",
    "mobile app development",
    "SEO services",
    "website design",
    "custom software development",
    "social media marketing",
    "brand identity design"
  ],
  openGraph: {
    title: "Services | IDER Solutions",
    description: "Comprehensive digital solutions including web development, mobile apps, digital marketing, and design services.",
    url: "https://idersolutions.com/services",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - Services',
      },
    ],
  },
};

export default function ServicesPage() {
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
        "name": "Services",
        "item": "https://idersolutions.com/services"
      }
    ]
  };

  return (
    <>
      <StructuredData
        type="service"
        data={{
          name: "Digital Solutions Services",
          description: "Comprehensive digital solutions including web development, mobile apps, digital marketing, and design services",
          areaServed: "Worldwide",
          serviceType: "Digital Solutions"
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
          {/* Breadcrumbs - Hidden visually but available for SEO/screen readers */}
          <nav className="sr-only" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li><a href="/">Home</a></li>
              <li>/</li>
              <li>Services</li>
            </ol>
          </nav>

          <Services />

          {/* Internal Linking Section */}
          <section className="mt-16 py-12 bg-gray-50 rounded-lg">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Ready to Get Started?</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-ider-yellow text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/pricing"
                  className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  View Pricing
                </a>
                <a
                  href="/portfolio"
                  className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  View Our Portfolio
                </a>
                <a
                  href="/about"
                  className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
