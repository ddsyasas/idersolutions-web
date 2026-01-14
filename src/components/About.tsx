'use client';

import React from 'react';
import {
  Target,
  Users,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  BarChart3,
  Handshake,
  Award,
  Linkedin
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Transparency First',
      description: 'No hidden fees, no confusing jargon, no surprises. Clear communication, honest timelines, and straightforward pricing.',
    },
    {
      icon: Award,
      title: 'Quality Over Quantity',
      description: 'We\'d rather do fewer projects exceptionally well than many projects poorly. Every deliverable carries our reputation.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Opinions are valuable; data is invaluable. We back every recommendation with research, analytics, and measurable benchmarks.',
    },
    {
      icon: Handshake,
      title: 'Client Partnership',
      description: 'Your success is our success. We don\'t just take orders—we collaborate, advise, and push back when there\'s a better way.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'The digital landscape evolves constantly, and so do we. We stay ahead of trends and bring fresh insights to every project.',
    },
    {
      icon: Lightbulb,
      title: 'Integrity in Everything',
      description: 'We do what we say, deliver what we promise, and own our mistakes. Trust is the foundation of every lasting relationship.',
    },
  ];

  const team = [
    {
      name: 'Sajana Yasas',
      role: 'Founder, CEO & Head of Development',
      bio: 'The visionary behind IDER Solutions, Sajana brings 7+ years of digital expertise and a science-driven approach to every project. He personally leads the development team, architecting websites, web applications, and mobile solutions.',
      linkedin: 'https://linkedin.com/in/ddsyasas',
      initials: 'SY',
    },
    {
      name: 'Chanaka Sanjeewa',
      role: 'Co-Founder & Project Manager',
      bio: 'The operational backbone of IDER Solutions, managing all projects and overseeing the Sri Lankan office. His meticulous attention ensures every project is delivered on time.',
      initials: 'CS',
    },
    {
      name: 'Jeewantha',
      role: 'Head of SEO & Content Strategy',
      bio: 'Leading search optimization and content efforts, developing strategies that help clients climb Google rankings and turn visibility into conversions.',
      initials: 'J',
    },
    {
      name: 'Sarah Caldera',
      role: 'Senior Content Lead',
      bio: 'Heads the content writing team with years of experience in web content and digital marketing, ensuring every piece is engaging and SEO-optimized.',
      initials: 'SC',
    },
    {
      name: 'Mohamed Izad',
      role: 'HR Manager',
      bio: 'Manages the growing team, handling recruitment and team development. The heart of IDER Solutions\' company culture.',
      initials: 'MI',
    },
    {
      name: 'Nigunthan Prignaselvam',
      role: 'Social Media Strategist',
      bio: 'The creative force behind clients\' social media success, developing strategies that build engaged communities and drive meaningful interactions.',
      initials: 'NP',
    },
    {
      name: 'Chamath Ilangkoon',
      role: 'Creative Director (Video & Multimedia)',
      bio: 'Leads visual storytelling efforts, handling video editing, motion graphics, and multimedia content that captures attention.',
      initials: 'CI',
    },
  ];

  const stats = [
    { metric: '2023', label: 'Founded' },
    { metric: '7+', label: 'Years Experience' },
    { metric: '100+', label: 'Projects Delivered' },
    { metric: '15+', label: 'Countries Served' },
  ];

  const specializations = [
    'Small to Medium Businesses',
    'E-commerce & Retail',
    'Service-Based Businesses',
    'Startups & Entrepreneurs',
    'Local Businesses Going Digital',
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
              About IDER Solutions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Where science meets creativity. We engineer digital solutions rooted in precision,
              strategy, and measurable results.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-20 border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl md:text-4xl font-bold text-ider-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.metric}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Story */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    IDER Solutions was founded in <strong>2023</strong> by <strong>Sajana Yasas</strong>,
                    bringing together over seven years of freelancing experience in the digital space
                    with a scientific, data-driven approach to problem-solving.
                  </p>
                  <p>
                    With a background in science and hands-on expertise in digital branding, web development,
                    SEO, and content strategy, Sajana built IDER Solutions on a simple premise: that great
                    digital solutions should be rooted in <strong>precision, strategy, and measurable results</strong>.
                  </p>
                  <p>
                    His journey began during university years, where he honed project management and leadership
                    skills while building a freelance portfolio spanning brand development, website creation,
                    and search engine optimization. This dual experience—academic rigor and real-world
                    application—became the foundation for our methodology.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-ider-yellow rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    SY
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Sajana Yasas</h3>
                    <p className="text-gray-300">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  &ldquo;We started IDER Solutions to prove that world-class digital work can come from
                  Sri Lanka. Every business, regardless of size or budget, deserves access to professional,
                  results-driven digital solutions.&rdquo;
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/ddsyasas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-ider-yellow hover:opacity-80 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://yasas.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-ider-yellow hover:opacity-80 transition-opacity"
                  >
                    <Globe className="w-5 h-5" />
                    <span>yasas.dev</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="bg-gray-50 rounded-3xl p-12 mb-20 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ider-yellow mb-4">Our Philosophy</h2>
              <p className="text-2xl font-semibold text-gray-900">&ldquo;Science Meets Creativity&rdquo;</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ider-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Measure First, Create Second</h4>
                    <p className="text-gray-600">We treat every campaign like an experiment: hypothesis, testing, measurement, and optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ider-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Precision With a Human Touch</h4>
                    <p className="text-gray-600">Data informs creativity, not replaces it. Solutions that are analytically sound yet emotionally resonant.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ider-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Transparent Partnership</h4>
                    <p className="text-gray-600">We&apos;re an extension of your team, not a faceless service provider. You&apos;ll always know what, why, and what results to expect.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-ider-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Long-Term Growth Over Quick Wins</h4>
                    <p className="text-gray-600">No vanity metrics. Every strategy is designed for sustainable growth that compounds over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Why */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
              <p className="text-xl text-gray-600">Bridging the Gap Between Ambition and Digital Reality</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Democratizing Quality</h3>
                <p className="text-gray-600">Every business, regardless of size or budget, deserves access to professional, results-driven digital solutions.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Proving Local Excellence</h3>
                <p className="text-gray-600">Demonstrating that world-class digital work can come from Sri Lanka, building a team that competes globally.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Creating Real Impact</h3>
                <p className="text-gray-600">We measure success not by projects completed, but by businesses transformed and goals achieved.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ider-yellow mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The people behind your digital success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 bg-ider-yellow rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-ider-yellow font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-ider-yellow hover:opacity-80 mt-4 text-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Connect</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 mb-20 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-gray-300">We&apos;re industry-agnostic but results-focused</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {specializations.map((spec, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ider-yellow mb-4">The IDER Code</h2>
              <p className="text-xl text-gray-600">The values that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-ider-yellow rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/pricing"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300"
              >
                View Our Pricing
              </a>
              <a
                href="/contact"
                className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 yellow-glow"
              >
                Get in Touch →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;