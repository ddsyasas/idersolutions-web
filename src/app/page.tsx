'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { DefaultPerformanceOptimizer } from '@/components/PerformanceOptimizer';

// Dynamically import AnimatedBackground to prevent hydration issues
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => null,
});

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <StructuredData
        type="organization"
        data={{
          name: "IDER Solutions",
          url: "https://idersolutions.com",
          description: "Professional web development and digital solutions company",
          email: "yasas@idersolutions.com",
          socialLinks: [
            "https://twitter.com/idersolutions",
            "https://linkedin.com/company/idersolutions",
            "https://facebook.com/idersolutions"
          ]
        }}
      />

      <StructuredData
        type="website"
        data={{
          name: "IDER Solutions",
          url: "https://idersolutions.com",
          description: "Professional web development and digital solutions"
        }}
      />

      {/* Aggregate Rating for Testimonials */}
      <StructuredData
        type="aggregateRating"
        data={{
          datePublished: "5",
          postalCode: "4"
        }}
      />

      {/* Service Structured Data */}
      <StructuredData
        type="service"
        data={{
          name: "Web Development",
          description: "Custom websites that convert visitors into customers. WordPress, Wix & Shopify stores, custom responsive websites, CRM integration & lead generation, fast-loading & SEO optimized.",
          areaServed: "Worldwide",
          serviceType: "Web Development"
        }}
      />
      <StructuredData
        type="service"
        data={{
          name: "Digital Marketing",
          description: "Complete digital marketing solutions to grow your online presence. SEO optimization & keyword research, social media management & paid ads, content creation & video editing, blog content & infographics.",
          areaServed: "Worldwide",
          serviceType: "Digital Marketing"
        }}
      />
      <StructuredData
        type="service"
        data={{
          name: "App Development",
          description: "Mobile and web applications built for scale. iOS & Android mobile apps, custom SaaS platforms, internal dashboards & CRMs, API development & integrations.",
          areaServed: "Worldwide",
          serviceType: "App Development"
        }}
      />
      <StructuredData
        type="service"
        data={{
          name: "Design & Multimedia",
          description: "Visual identity and multimedia content that stands out. Logo design & brand identity, marketing banners & graphics, video editing & social media reels, UI/UX design for web & mobile.",
          areaServed: "Worldwide",
          serviceType: "Design & Multimedia"
        }}
      />

      {/* Contact Page Structured Data */}
      <StructuredData
        type="contactPage"
        data={{
          name: "Contact Us",
          description: "Get in touch with IDER Solutions for your digital project needs",
          url: "https://idersolutions.com/#contact"
        }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://idersolutions.com"
              }
            ]
          })
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does IDER Solutions offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IDER Solutions offers comprehensive digital services including Web Development (WordPress, Wix, Shopify, custom websites), Digital Marketing (SEO, social media management, paid ads, content creation), App Development (iOS, Android, SaaS platforms, dashboards, APIs), and Design & Multimedia (logo design, brand identity, UI/UX design, video editing)."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to complete a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines vary based on scope and complexity. We pride ourselves on fast delivery without compromising quality. Simple websites typically take 2-4 weeks, while complex applications may take 8-12 weeks. Contact us for a detailed timeline for your specific project."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with clients worldwide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, IDER Solutions serves clients globally with a remote-first approach. We have experience working with companies in 15+ countries and provide 24/7 support to accommodate different time zones."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use cutting-edge technologies and best practices including React, Node.js, React Native, Flutter, Vue.js, Python, MongoDB, PostgreSQL, AWS, Firebase, and modern design tools like Figma, Illustrator, and Photoshop. We stay updated with the latest industry standards."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get started with a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started is easy! Contact us via email at yasas@idersolutions.com or use our contact form. We offer free consultations to discuss your project requirements, goals, and provide expert advice on the best approach for your digital solution."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide ongoing support after project completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide ongoing support and maintenance services. Our commitment to client success extends beyond project delivery, and we offer various support packages to ensure your digital solution continues to perform optimally."
                }
              }
            ]
          })
        }}
      />

      {/* Review Structured Data for Testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IDER Solutions",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "4",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sarah Johnson"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "IDER Solutions transformed our startup idea into a fully functional SaaS platform. Their technical expertise and creative approach exceeded our expectations."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Michael Chen"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "The team at IDER delivered our e-commerce platform ahead of schedule. The attention to detail and ongoing support has been exceptional."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Emily Rodriguez"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "From branding to mobile app development, IDER Solutions handled everything seamlessly. Our app now has over 10,000 active users!"
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "David Park"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Working with IDER was a game-changer. They understood our vision and delivered a product that perfectly matched our requirements."
              }
            ]
          })
        }}
      />

      <DefaultPerformanceOptimizer />

      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <AnimatedBackground />
        <Navbar scrollY={scrollY} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutPreview />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="why-us">
            <WhyChooseUs />
          </section>
          {/* TEMPORARILY HIDDEN - Uncomment to restore 
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="blog">
            <Blog />
          </section>
          */}
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
