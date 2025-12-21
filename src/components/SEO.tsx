'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = 'Ider Solutions - Professional Web Development & Digital Solutions',
  description = 'Ider Solutions provides professional web development, digital solutions, and innovative technology services. We specialize in creating modern, responsive websites and applications that drive business growth.',
  keywords = ['web development', 'digital solutions', 'website design'],
  image = '/og-image.jpg',
  url = 'https://idersolutions.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Ider Solutions Team',
  section,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes('Ider Solutions') ? title : `${title} | Ider Solutions`;
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://idersolutions.com${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ider Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://idersolutions.com${image}`} />
      <meta name="twitter:site" content="@idersolutions" />
      <meta name="twitter:creator" content="@idersolutions" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data for Articles */}
      {type === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": fullTitle,
              "description": description,
              "image": `https://idersolutions.com${image}`,
              "author": {
                "@type": "Organization",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Ider Solutions",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://idersolutions.com/logo.svg"
                }
              },
              "datePublished": publishedTime,
              "dateModified": modifiedTime || publishedTime,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
              }
            })
          }}
        />
      )}
    </Head>
  );
} 