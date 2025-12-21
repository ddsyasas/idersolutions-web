import React, { useState, useEffect, useCallback } from 'react';
import { Zap, Users, Globe, Code } from 'lucide-react';

const WhyChooseUs = () => {
  const [, setCurrentIndex] = useState(0);

  const reasons = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast turnaround times without compromising on quality or attention to detail.',
      color: 'from-orange-400 to-orange-500',
      glowColor: 'rgba(251, 146, 60, 0.6)',
    },
    {
      icon: Users,
      title: 'Results-Focused',
      description: 'Every project is designed with your business goals in mind, ensuring measurable outcomes.',
      color: 'from-purple-400 to-blue-500',
      glowColor: 'rgba(168, 85, 247, 0.6)',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Remote-first approach allows us to serve clients worldwide, 24/7 support included.',
      color: 'from-green-400 to-green-500',
      glowColor: 'rgba(74, 222, 128, 0.6)',
    },
    {
      icon: Code,
      title: 'Creative + Technical',
      description: 'Perfect blend of creative design and technical expertise for outstanding results.',
      color: 'from-pink-400 to-red-500',
      glowColor: 'rgba(236, 72, 153, 0.6)',
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reasons.length - 1 ? 0 : prevIndex + 1
    );
  }, [reasons.length]);

  // const prevTestimonial = () => {
  //   setCurrentIndex((prevIndex) => 
  //     prevIndex === 0 ? reasons.length - 1 : prevIndex - 1
  //   );
  // };

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
            Why Choose IDER?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We combine speed, creativity, and technical excellence to deliver exceptional digital solutions
          </p>
        </div>

        {/* Reasons Grid - Box-style cards with colorful icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 text-center group hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200"
              onMouseEnter={(e) => {
                const iconElement = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconElement) {
                  iconElement.style.boxShadow = `0 0 25px ${reason.glowColor}`;
                  iconElement.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.1))';
                }
              }}
              onMouseLeave={(e) => {
                const iconElement = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconElement) {
                  iconElement.style.boxShadow = 'none';
                  iconElement.style.filter = 'none';
                }
              }}
            >
              {/* Icon with colorful background and glow effect */}
              <div 
                className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 icon-container`}
                style={{
                  boxShadow: 'none',
                  filter: 'none'
                }}
              >
                <reason.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Box-style */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-ider-yellow">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join 50+ satisfied clients who have successfully launched their digital products with IDER Solutions.
            </p>
            <a
              href="#contact"
              className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
            >
              <span>Let&apos;s Build Together</span>
              <span>🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 