'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Globe } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced analytics and payment integration',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'app',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Node.js'],
      link: '#',
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity package for tech startup including logo and guidelines',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      tech: ['Figma', 'Illustrator', 'Photoshop'],
      link: '#',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Analytics dashboard for SaaS platform with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
      link: '#',
    },
    {
      id: 5,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      description: 'Comprehensive digital marketing strategy that increased ROI by 300%',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      tech: ['Google Ads', 'Facebook Ads', 'Analytics'],
      link: '#',
    },
    {
      id: 6,
      title: 'IoT Management System',
      category: 'app',
      description: 'Smart home management application with IoT device integration',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      tech: ['Flutter', 'AWS IoT', 'MongoDB'],
      link: '#',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'app', label: 'Mobile Apps' },
    { key: 'design', label: 'Design' },
    { key: 'marketing', label: 'Marketing' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header - Text directly on dark background */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped clients transform their ideas into successful digital products
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.key
                  ? 'bg-ider-yellow text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Box-style cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:bg-gray-100 transition-all duration-300 border border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.description} - IDER Solutions portfolio project`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  unoptimized={project.image.startsWith('https://')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ider-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="bg-ider-yellow text-white p-3 rounded-full hover:opacity-90 transition-colors duration-300"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-ider-yellow/20 text-ider-yellow text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center space-x-2 text-ider-yellow hover:opacity-80 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
          >
            <span>🔎 View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 