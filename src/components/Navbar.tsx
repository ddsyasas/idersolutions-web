'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Home', useHash: true },
    { href: '/about', label: 'About', useHash: false },
    { href: '/services', label: 'Services', useHash: false },
    { href: '/portfolio', label: 'Portfolio', useHash: false },
    { href: '/blog', label: 'Blog', useHash: false },
    { href: '#faq', label: 'FAQ', useHash: true },
    { href: '/contact', label: 'Contact', useHash: false },
  ];

  // Helper to handle navigation
  const handleNavClick = (href: string, useHash: boolean) => {
    setIsMenuOpen(false);
    
    if (useHash && pathname === '/') {
      // On home, use hash for smooth scrolling
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (useHash && pathname !== '/') {
      // On other pages, go to home with hash
      router.push('/' + href);
    } else {
      // Use full URL navigation
      router.push(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 || isMenuOpen 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 bg-transparent border-none outline-none cursor-pointer"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <div className="w-10 h-10 bg-ider-yellow rounded-lg flex items-center justify-center font-bold text-white text-xl">
              I
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IDER SOLUTIONS</h1>
              <p className="text-xs text-gray-600 animate-fade-in animation-delay-500">
                We turn ideas into digital reality
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href, item.useHash)}
                className={`text-gray-900 hover:text-ider-yellow transition-colors duration-300 relative group ${
                  pathname === item.href ? 'text-ider-yellow' : ''
                }`}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-ider-yellow transition-all duration-300 group-hover:w-full ${
                  pathname === item.href ? 'w-full' : 'w-0'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('/contact', false)}
              className="bg-ider-yellow text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300 yellow-glow"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 hover:text-ider-yellow transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.useHash)}
                  className={`text-gray-900 hover:text-ider-yellow transition-colors duration-300 py-2 ${
                    pathname === item.href ? 'text-ider-yellow font-semibold' : ''
                  }`}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('/contact', false)}
                className="bg-ider-yellow text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300 inline-block text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 