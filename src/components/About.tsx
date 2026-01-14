'use client';

import React from 'react';
import Image from 'next/image';
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
  const team = [
    {
      name: 'Sajana Yasas',
      role: 'Founder & Head of Development',
      bio: '7+ years of digital expertise with a science-driven approach. Leads development, architecting websites, web apps, and mobile solutions.',
      linkedin: 'https://linkedin.com/in/ddsyasas',
      image: '/Sajana Yasas.webp',
    },
    {
      name: 'Chanaka Sanjeewa',
      role: 'Co-Founder & Project Manager',
      bio: 'Operational backbone managing all projects and the Sri Lankan office. Ensures on-time delivery.',
      linkedin: 'https://www.linkedin.com/in/chanakasanjeewa/',
      image: '/Chanaka Sanjeewa.webp',
    },
    {
      name: 'Jeewantha',
      role: 'Head of SEO & Content Strategy',
      bio: 'Develops strategies that help clients climb Google rankings and turn visibility into conversions.',
      linkedin: 'https://www.linkedin.com/in/jeewantha-gnanaranga/',
      image: '/Jeewantha.webp',
    },
    {
      name: 'Sarah Caldera',
      role: 'Senior Content Lead',
      bio: 'Leads content writing with years of experience in web content and digital marketing.',
      linkedin: 'https://www.linkedin.com/in/sarah-caldera-56967123b/',
      image: '/Sarah Caldera.webp',
    },
    {
      name: 'Mohamed Izad',
      role: 'HR Manager',
      bio: 'Manages team recruitment and development. The heart of our company culture.',
      linkedin: 'https://www.linkedin.com/in/mohamedizad/',
      image: '/Mohamed Izad.webp',
    },
    {
      name: 'Nigunthan Prignaselvam',
      role: 'Social Media Strategist',
      bio: 'Develops strategies that build engaged communities and drive meaningful interactions.',
      linkedin: 'https://www.linkedin.com/in/nigunthan/',
      image: '/Nigunthan Prignaselvam.webp',
    },
    {
      name: 'Chamath Ilangkoon',
      role: 'Creative Director',
      bio: 'Leads video editing, motion graphics, and multimedia that captures attention.',
      linkedin: 'https://www.linkedin.com/in/chamath-shyamantha/',
      image: '/Chamath Ilangkoon.webp',
    },
  ];

  const values = [
    { icon: Shield, title: 'Transparency', desc: 'No hidden fees or surprises' },
    { icon: Award, title: 'Quality', desc: 'Excellence over quantity' },
    { icon: BarChart3, title: 'Data-Driven', desc: 'Decisions backed by research' },
    { icon: Handshake, title: 'Partnership', desc: 'Your success is our success' },
    { icon: TrendingUp, title: 'Growth', desc: 'Long-term over quick wins' },
    { icon: Lightbulb, title: 'Integrity', desc: 'We deliver what we promise' },
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ider-yellow">
              About IDER Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Where Science Meets Creativity
            </p>
          </div>

          {/* Founder Section - Lighter colors and better mobile padding */}
          <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl overflow-hidden mb-16 border border-gray-200">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 sm:gap-6 mb-8">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-ider-yellow flex-shrink-0">
                    <Image
                      src="/Sajana Yasas.webp"
                      alt="Sajana Yasas - Founder of IDER Solutions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Sajana Yasas</h2>
                    <p className="text-ider-yellow font-medium">Founder</p>
                    <div className="flex gap-4 mt-2">
                      <a href="https://linkedin.com/in/ddsyasas" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ider-yellow transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://yasas.dev" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ider-yellow transition-colors">
                        <Globe className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-ider-yellow pl-4 sm:pl-6">
                  &ldquo;We&apos;re here to prove that exceptional digital solutions can come from Sri Lanka,
                  and that every business deserves a partner who delivers results, not excuses.&rdquo;
                </blockquote>
              </div>

              <div className="bg-white/60 p-6 sm:p-10 lg:p-12">
                <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {[
                    { value: '2023', label: 'Founded' },
                    { value: '7+', label: 'Years Experience' },
                    { value: '100+', label: 'Projects' },
                    { value: '15+', label: 'Countries' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-ider-yellow">{stat.value}</div>
                      <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Founded in 2023, IDER Solutions brings together over seven years of freelancing experience
                  with a scientific, data-driven approach. We treat every campaign like an experiment—hypothesis,
                  testing, measurement, and optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy + Purpose */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { icon: BarChart3, title: 'Measure First, Create Second', desc: 'Every strategy backed by data and research.' },
                  { icon: Users, title: 'Precision With Human Touch', desc: 'Analytically sound, emotionally resonant.' },
                  { icon: Handshake, title: 'Transparent Partnership', desc: 'An extension of your team, not a vendor.' },
                  { icon: TrendingUp, title: 'Long-Term Growth', desc: 'Sustainable strategies over vanity metrics.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ider-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ider-yellow rounded-3xl p-6 sm:p-10 text-white">
              <h2 className="text-2xl font-bold mb-8">Our Purpose</h2>
              <div className="space-y-6">
                {[
                  { icon: Globe, title: 'Democratizing Quality', desc: 'Professional solutions for every budget.' },
                  { icon: Award, title: 'Proving Local Excellence', desc: 'World-class work from Sri Lanka.' },
                  { icon: Target, title: 'Creating Real Impact', desc: 'Businesses transformed, goals achieved.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <item.icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section - With photos and LinkedIn */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-ider-yellow transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-ider-yellow transition-colors flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900 truncate">{member.name}</h3>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-ider-yellow transition-colors flex-shrink-0"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-ider-yellow text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values + Industries */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">The IDER Code</h2>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-ider-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium hover:bg-ider-yellow hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base">
                We&apos;re industry-agnostic but results-focused. Our data-driven approach adapts to your specific market dynamics.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/pricing" className="bg-gray-200 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-300 transition-all">
                View Our Pricing
              </a>
              <a href="/contact" className="bg-ider-yellow text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-all yellow-glow">
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