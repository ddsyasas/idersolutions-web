import React from 'react';
import { Globe, Code, Zap, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your online presence',
      features: [
        'SEO optimization & keyword research',
        'Social media management & paid ads',
        'Content creation & video editing',
        'Blog content & infographics',
      ],
      color: 'from-blue-400 to-purple-500',
      glowColor: 'rgba(59, 130, 246, 0.6)',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites that convert visitors into customers',
      features: [
        'WordPress, Wix & Shopify stores',
        'Custom responsive websites',
        'CRM integration & lead generation',
        'Fast-loading & SEO optimized',
      ],
      color: 'from-green-400 to-teal-500',
      glowColor: 'rgba(34, 197, 94, 0.6)',
    },
    {
      icon: Code,
      title: 'App Development',
      description: 'Mobile and web applications built for scale',
      features: [
        'iOS & Android mobile apps',
        'Custom SaaS platforms',
        'Internal dashboards & CRMs',
        'API development & integrations',
      ],
      color: 'from-orange-400 to-red-500',
      glowColor: 'rgba(251, 146, 60, 0.6)',
    },
    {
      icon: Image,
      title: 'Design & Multimedia',
      description: 'Visual identity and multimedia content that stands out',
      features: [
        'Logo design & brand identity',
        'Marketing banners & graphics',
        'Video editing & social media reels',
        'UI/UX design for web & mobile',
      ],
      color: 'from-pink-400 to-violet-500',
      glowColor: 'rgba(236, 72, 153, 0.6)',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header - Text directly on dark background */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital solutions to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid - Box-style cards with colorful icons */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 group hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200"
              onMouseEnter={(e) => {
                const iconElement = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                if (iconElement) {
                  iconElement.style.boxShadow = `0 0 25px ${service.glowColor}`;
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
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 icon-container`}
                style={{
                  boxShadow: 'none',
                  filter: 'none'
                }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-ider-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  className="text-ider-yellow hover:opacity-80 font-semibold inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Get Started</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We&apos;d love to discuss your project.
          </p>
          <a
            href="#contact"
            className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
          >
            <span>Start Your Project</span>
            <span>🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 