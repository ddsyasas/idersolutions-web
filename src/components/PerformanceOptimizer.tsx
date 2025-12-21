'use client';

import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  preloadImages?: string[];
  prefetchUrls?: string[];
  preconnectDomains?: string[];
  dnsPrefetchDomains?: string[];
}

export default function PerformanceOptimizer({
  preloadImages = [],
  prefetchUrls = [],
  preconnectDomains = [],
  dnsPrefetchDomains = []
}: PerformanceOptimizerProps) {
  useEffect(() => {
    // Add preload links for critical images
    preloadImages.forEach((image) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
    });

    // Add prefetch links for likely navigation
    prefetchUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });

    // Add preconnect links for external domains
    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Add DNS prefetch links
    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      // Remove added links on cleanup
      const links = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"], link[rel="preconnect"], link[rel="dns-prefetch"]');
      links.forEach((link) => {
        if (link.getAttribute('href') && 
            (preloadImages.includes(link.getAttribute('href')!) ||
             prefetchUrls.includes(link.getAttribute('href')!) ||
             preconnectDomains.includes(link.getAttribute('href')!) ||
             dnsPrefetchDomains.includes(link.getAttribute('href')!))) {
          link.remove();
        }
      });
    };
  }, [preloadImages, prefetchUrls, preconnectDomains, dnsPrefetchDomains]);

  return null;
}

// Default performance optimizations for Ider Solutions
export function DefaultPerformanceOptimizer() {
  return (
    <PerformanceOptimizer
      preloadImages={[
        '/og-image.jpg',
        '/logo.svg'
      ]}
      prefetchUrls={[
        'https://idersolutions.com/#about',
        'https://idersolutions.com/#services',
        'https://idersolutions.com/#contact'
      ]}
      preconnectDomains={[
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com'
      ]}
      dnsPrefetchDomains={[
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ]}
    />
  );
} 