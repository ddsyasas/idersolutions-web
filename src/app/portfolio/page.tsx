import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Portfolio | IDER Solutions - Our Work & Case Studies",
  description: "Explore our portfolio of successful web development projects, mobile apps, and digital marketing campaigns. See how we've helped businesses grow with custom digital solutions.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "mobile app projects",
    "digital marketing examples",
    "website examples",
    "our work"
  ],
  openGraph: {
    title: "Portfolio | IDER Solutions",
    description: "Explore our portfolio of successful web development projects, mobile apps, and digital marketing campaigns.",
    url: "https://idersolutions.com/portfolio",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - Portfolio',
      },
    ],
  },
};

export default function PortfolioPage() {
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
        "name": "Portfolio",
        "item": "https://idersolutions.com/portfolio"
      }
    ]
  };

  return (
    <>
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
              <li className="text-gray-900 font-medium">Portfolio</li>
            </ol>
          </nav>
          
          <Portfolio />
          
          {/* Internal Linking Section */}
          <section className="mt-16 py-12 bg-gray-50 rounded-lg">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
              <p className="text-gray-600 mb-6">Let's discuss how we can help bring your vision to life.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-ider-yellow text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
                >
                  Get in Touch
                </a>
                <a 
                  href="/services" 
                  className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                >
                  Our Services
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
