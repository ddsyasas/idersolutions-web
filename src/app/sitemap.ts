import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://idersolutions.com'
  const currentDate = new Date()

  return [
    // HIGH PRIORITY - Main pages (for Google Sitelinks)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // LOWER PRIORITY - Legal pages (noindex in search but needed in sitemap)
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    // TEMPORARILY HIDDEN - Uncomment when ready
    // {
    //   url: `${baseUrl}/portfolio`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}