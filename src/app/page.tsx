'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Portfolio from '@/components/Portfolio';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
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
      <SEO 
        title="Ider Solutions - Professional Web Development & Digital Solutions"
        description="Ider Solutions provides professional web development, digital solutions, and innovative technology services. We specialize in creating modern, responsive websites and applications that drive business growth."
        keywords={[
          "web development",
          "digital solutions", 
          "website design",
          "software development",
          "mobile apps",
          "e-commerce",
          "digital marketing",
          "technology consulting"
        ]}
        url="https://idersolutions.com"
        type="website"
      />
      
      <StructuredData 
        type="organization"
        data={{
          name: "Ider Solutions",
          url: "https://idersolutions.com",
          description: "Professional web development and digital solutions company",
          email: "contact@idersolutions.com",
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
          name: "Ider Solutions",
          url: "https://idersolutions.com",
          description: "Professional web development and digital solutions"
        }}
      />
      
      <DefaultPerformanceOptimizer />
      
      <div className="min-h-screen bg-gradient-to-b from-ider-dark to-ider-darker text-white overflow-x-hidden">
        <AnimatedBackground />
        <Navbar scrollY={scrollY} />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="why-us">
            <WhyChooseUs />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="testimonials">
            <Testimonials />
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
