import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      quote: 'IDER Solutions transformed our startup idea into a fully functional SaaS platform. Their technical expertise and creative approach exceeded our expectations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b796?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Digital Dynamics',
      quote: 'The team at IDER delivered our e-commerce platform ahead of schedule. The attention to detail and ongoing support has been exceptional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'GreenTech Solutions',
      quote: 'From branding to mobile app development, IDER Solutions handled everything seamlessly. Our app now has over 10,000 active users!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO',
      company: 'InnovateLab',
      quote: 'Working with IDER was a game-changer. They understood our vision and delivered a product that perfectly matched our requirements.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header - Text directly on dark background */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Client Testimonials
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonial Slider - Box-style */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-800/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-4 left-4 text-6xl text-ider-yellow/20 font-serif">&quot;</div>
            <div className="absolute bottom-4 right-4 text-6xl text-ider-yellow/20 font-serif rotate-180">&quot;</div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-ider-yellow text-2xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-ider-yellow"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/80">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-ider-yellow text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-ider-yellow text-ider-dark p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 group"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-ider-yellow text-ider-dark p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 group"
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-ider-yellow scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-white/80 mb-8">Trusted by companies of all sizes</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Company logos would go here - using placeholder text for now */}
            {['TechStart', 'Digital Dynamics', 'GreenTech', 'InnovateLab'].map((company, index) => (
              <div key={index} className="text-lg font-semibold text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 