'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  // Helper to handle navigation
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (pathname === '/') {
      // On home, just scroll
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, go to home with hash
      router.push('/' + href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 || isMenuOpen 
          ? 'bg-ider-dark/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-ider-yellow to-yellow-400 rounded-lg flex items-center justify-center font-bold text-ider-dark text-xl">
              I
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">IDER SOLUTIONS</h1>
              <p className="text-xs text-ider-grey animate-fade-in animation-delay-500">
                We turn ideas into digital reality
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-ider-yellow transition-colors duration-300 relative group bg-transparent border-none outline-none cursor-pointer"
                style={{ background: 'none', border: 'none', padding: 0 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ider-yellow transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-ider-yellow text-ider-dark px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 yellow-glow"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-ider-yellow transition-colors duration-300"
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
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-ider-yellow transition-colors duration-300 py-2 bg-transparent border-none outline-none cursor-pointer"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-ider-yellow text-ider-dark px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 inline-block text-center"
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