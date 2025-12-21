import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | IDER Solutions - Get in Touch",
  description: "Get in touch with IDER Solutions for your digital needs. Contact us for web development, digital marketing, mobile app development, and custom software solutions.",
  keywords: [
    "contact ider solutions",
    "get in touch",
    "web development contact",
    "digital marketing contact",
    "software development consultation",
    "project inquiry"
  ],
  openGraph: {
    title: "Contact Us | IDER Solutions",
    description: "Get in touch with IDER Solutions for your digital needs. Contact us for web development, digital marketing, and custom software solutions.",
    url: "https://idersolutions.com/contact",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - Contact Us',
      },
    ],
  },
};

export default function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://idersolutions.com/contact"
      }
    ]
  };

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IDER Solutions",
    "description": "Get in touch with IDER Solutions for digital solutions",
    "url": "https://idersolutions.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "IDER Solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "yasas@idersolutions.com",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPointSchema),
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
              <li>Contact Us</li>
            </ol>
          </nav>
          
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
