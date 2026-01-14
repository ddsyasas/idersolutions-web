import type { Metadata } from "next";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us | IDER Solutions - Our Story & Team",
  description: "Meet the team behind IDER Solutions. We combine data, strategy, and creativity to grow businesses. Founded 2023 in Sri Lanka, serving clients worldwide.",
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

  // Person Schema for all team members (SEO)
  const teamPersonSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sajana Yasas",
      "jobTitle": "Founder & Head of Development",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "url": "https://yasas.dev",
      "sameAs": [
        "https://linkedin.com/in/ddsyasas",
        "https://yasas.dev"
      ],
      "image": "https://idersolutions.com/Sajana Yasas.webp",
      "description": "7+ years of digital expertise with a science-driven approach. Leads development, architecting websites, web apps, and mobile solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Chanaka Sanjeewa",
      "jobTitle": "Co-Founder & Project Manager",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/chanakasanjeewa/"],
      "image": "https://idersolutions.com/Chanaka Sanjeewa.webp",
      "description": "Operational backbone managing all projects and the Sri Lankan office. Ensures on-time delivery."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jeewantha Gnanaranga",
      "jobTitle": "Head of SEO & Content Strategy",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/jeewantha-gnanaranga/"],
      "image": "https://idersolutions.com/Jeewantha.webp",
      "description": "Develops strategies that help clients climb Google rankings and turn visibility into conversions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sarah Caldera",
      "jobTitle": "Senior Content Lead",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/sarah-caldera-56967123b/"],
      "image": "https://idersolutions.com/Sarah Caldera.webp",
      "description": "Leads content writing with years of experience in web content and digital marketing."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mohamed Izad",
      "jobTitle": "HR Manager",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/mohamedizad/"],
      "image": "https://idersolutions.com/Mohamed Izad.webp",
      "description": "Manages team recruitment and development. The heart of our company culture."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nigunthan Prignaselvam",
      "jobTitle": "Social Media Strategist",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/nigunthan/"],
      "image": "https://idersolutions.com/Nigunthan Prignaselvam.webp",
      "description": "Develops strategies that build engaged communities and drive meaningful interactions."
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Chamath Ilangkoon",
      "jobTitle": "Creative Director",
      "worksFor": {
        "@type": "Organization",
        "name": "IDER Solutions"
      },
      "sameAs": ["https://www.linkedin.com/in/chamath-shyamantha/"],
      "image": "https://idersolutions.com/Chamath Ilangkoon.webp",
      "description": "Leads video editing, motion graphics, and multimedia that captures attention."
    }
  ];

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
      {/* Person Schema for each team member */}
      {teamPersonSchemas.map((personSchema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      ))}
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumbs - Hidden visually but available for SEO/screen readers */}
          <nav className="sr-only" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li><a href="/">Home</a></li>
              <li>/</li>
              <li>About Us</li>
            </ol>
          </nav>

          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
