import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const Testimonials = () => {
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

  // Duplicate testimonials multiple times for seamless infinite scroll (no visible jump)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] sm:w-[400px] md:w-[450px] bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 mx-3 hover:scale-[1.02]">
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-ider-yellow text-ider-yellow" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.avatar}
          alt={`Photo of ${testimonial.name}, ${testimonial.position} at ${testimonial.company}`}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full border-2 border-ider-yellow object-cover flex-shrink-0"
          loading="lazy"
          unoptimized={testimonial.avatar.startsWith('https://')}
        />
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold text-gray-900 truncate">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600 truncate">
            {testimonial.position}
          </div>
          <div className="text-sm text-ider-yellow truncate">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Scrolling Row */}
        <div className="relative">
          <div className="overflow-hidden mask-fade">
            <div className="flex animate-scroll-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 