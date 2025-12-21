import React from 'react';
import { Mail, Globe, Code, Zap, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const services = [
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'Graphic Design',
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
    { label: 'Terms of Service', href: '/terms-of-service', icon: FileText },
  ];

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: 'mailto:yasas@idersolutions.com', label: 'Email' },
    { icon: Code, href: '#', label: 'GitHub' },
    { icon: Zap, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-50 relative overflow-hidden border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-ider-yellow to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-ider-yellow to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-ider-yellow to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-ider-yellow rounded-lg flex items-center justify-center font-bold text-white text-xl">
                  I
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">IDER SOLUTIONS</h3>
                  <p className="text-gray-600 text-sm">We turn ideas into digital reality</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Your trusted partner in transforming innovative ideas into powerful digital solutions.
                From concept to launch, we guide you through every step of your digital journey.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-ider-yellow hover:bg-ider-yellow/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-600 hover:text-ider-yellow transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-ider-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-ider-yellow transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-ider-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>


            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-ider-yellow transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <link.icon className="w-4 h-4 text-ider-yellow/60 group-hover:text-ider-yellow transition-colors duration-300" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Additional Legal Info */}
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h5 className="text-gray-900 font-semibold mb-2 text-sm">Security</h5>
                <p className="text-gray-600 text-xs leading-relaxed">
                  We prioritize the security and privacy of our clients. 
                  All data is protected with industry-standard encryption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 text-sm">
                © 2025 IDER SOLUTIONS (PVT) LTD. All rights reserved.
              </div>
              <div className="flex items-center space-x-1 text-gray-600 text-sm">
                <span>Made with</span>
                <span className="text-ider-yellow animate-pulse">❤️</span>
                <span>by IDER SOLUTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 