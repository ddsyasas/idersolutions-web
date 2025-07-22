'use client';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'service' | 'localBusiness';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type.charAt(0).toUpperCase() + type.slice(1),
    };

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          name: data.name || "Ider Solutions",
          url: data.url || "https://idersolutions.com",
          logo: data.logo || "https://idersolutions.com/logo.png",
          description: data.description || "Professional web development and digital solutions company",
          address: {
            "@type": "PostalAddress",
            addressCountry: data.addressCountry || "US"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: data.email || "contact@idersolutions.com"
          },
          sameAs: data.socialLinks || [
            "https://twitter.com/idersolutions",
            "https://linkedin.com/company/idersolutions",
            "https://facebook.com/idersolutions"
          ]
        };

      case 'website':
        return {
          ...baseData,
          "@type": "WebSite",
          name: data.name || "Ider Solutions",
          url: data.url || "https://idersolutions.com",
          description: data.description || "Professional web development and digital solutions",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://idersolutions.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'article':
        return {
          ...baseData,
          "@type": "Article",
          headline: data.headline,
          description: data.description,
          image: data.image,
          author: {
            "@type": "Organization",
            name: data.author || "Ider Solutions Team"
          },
          publisher: {
            "@type": "Organization",
            name: "Ider Solutions",
            logo: {
              "@type": "ImageObject",
              url: "https://idersolutions.com/logo.png"
            }
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url
          }
        };

      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Ider Solutions"
          },
          areaServed: data.areaServed || "Worldwide",
          serviceType: data.serviceType || "Web Development"
        };

      case 'localBusiness':
        return {
          ...baseData,
          "@type": "LocalBusiness",
          name: data.name || "Ider Solutions",
          description: data.description || "Professional web development and digital solutions",
          url: data.url || "https://idersolutions.com",
          telephone: data.telephone,
          email: data.email || "contact@idersolutions.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: data.streetAddress,
            addressLocality: data.addressLocality,
            addressRegion: data.addressRegion,
            postalCode: data.postalCode,
            addressCountry: data.addressCountry || "US"
          },
          geo: data.geo && {
            "@type": "GeoCoordinates",
            latitude: data.geo.latitude,
            longitude: data.geo.longitude
          },
          openingHours: data.openingHours || "Mo-Fr 09:00-17:00"
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
} 