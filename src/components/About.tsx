import React from 'react';
import { Users, Zap, Globe, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast turnaround without compromising quality',
      color: 'from-orange-400 to-orange-500',
      glowColor: 'rgba(251, 146, 60, 0.6)',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience',
      color: 'from-blue-400 to-purple-500',
      glowColor: 'rgba(59, 130, 246, 0.6)',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with remote-first approach',
      color: 'from-green-400 to-teal-500',
      glowColor: 'rgba(34, 197, 94, 0.6)',
    },
    {
      icon: Code,
      title: 'Modern Tech',
      description: 'Cutting-edge technologies and best practices',
      color: 'from-pink-400 to-red-500',
      glowColor: 'rgba(236, 72, 153, 0.6)',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Text directly on dark background */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
              About IDER Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We&apos;re your trusted partner in transforming ideas into powerful digital solutions. 
              From concept to launch, we guide you through every step of your digital journey.
            </p>
          </div>

          {/* Mission Statement - Large box with light background */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-16 text-center max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-ider-yellow">Our Mission</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower individuals, startups, and established companies by turning their innovative 
              ideas into scalable digital products that drive real business results and create lasting impact.
            </p>
          </div>

          {/* Features Grid - Four boxes in a row with colorful icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 text-center group hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200"
                onMouseEnter={(e) => {
                  const iconElement = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                  if (iconElement) {
                    iconElement.style.boxShadow = `0 0 25px ${feature.glowColor}`;
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
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 icon-container`}
                  style={{
                    boxShadow: 'none',
                    filter: 'none'
                  }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-12 text-gray-900">
              Trusted by <span className="text-ider-yellow">50+</span> Companies Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: '100+', label: 'Projects Delivered' },
                { metric: '50+', label: 'Happy Clients' },
                { metric: '15+', label: 'Countries Served' },
                { metric: '99%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl font-bold text-ider-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 