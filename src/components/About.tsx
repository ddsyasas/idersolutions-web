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
      role: 'Founder, CEO & Head of Development',
      highlight: true,
    },
    {
      name: 'Chanaka Sanjeewa',
      role: 'Co-Founder & Project Manager',
    },
    {
      name: 'Jeewantha',
      role: 'Head of SEO & Content Strategy',
    },
    {
      name: 'Sarah Caldera',
      role: 'Senior Content Lead',
    },
    {
      name: 'Mohamed Izad',
      role: 'HR Manager',
    },
    {
      name: 'Nigunthan Prignaselvam',
      role: 'Social Media Strategist',
    },
    {
      name: 'Chamath Ilangkoon',
      role: 'Creative Director (Video & Multimedia)',
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
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero Section with Founder */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ider-yellow">
                About IDER Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Where Science Meets Creativity
              </p>
            </div>

            {/* Founder Section - Consolidated */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left - Photo & Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-ider-yellow flex-shrink-0">
                      <Image
                        src="/Sajana Yasas.webp"
                        alt="Sajana Yasas - Founder of IDER Solutions"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Sajana Yasas</h2>
                      <p className="text-ider-yellow font-medium">Founder & CEO</p>
                      <div className="flex gap-4 mt-2">
                        <a
                          href="https://linkedin.com/in/ddsyasas"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-ider-yellow transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="https://yasas.dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-ider-yellow transition-colors"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-ider-yellow pl-6">
                    &ldquo;We started IDER Solutions to prove that world-class digital work can come from Sri Lanka.
                    Every business deserves access to professional, results-driven solutions.&rdquo;
                  </blockquote>
                </div>

                {/* Right - Story & Stats */}
                <div className="bg-white/5 p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ider-yellow">2023</div>
                      <div className="text-gray-400 text-sm">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ider-yellow">7+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ider-yellow">100+</div>
                      <div className="text-gray-400 text-sm">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ider-yellow">15+</div>
                      <div className="text-gray-400 text-sm">Countries</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Founded in 2023, IDER Solutions brings together over seven years of freelancing experience
                    with a scientific, data-driven approach. We treat every campaign like an experiment—hypothesis,
                    testing, measurement, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy + Purpose - Combined */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Philosophy */}
              <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-ider-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Measure First, Create Second</h4>
                      <p className="text-gray-600 text-sm">Every strategy backed by data and research.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-ider-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Precision With Human Touch</h4>
                      <p className="text-gray-600 text-sm">Analytically sound, emotionally resonant.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-ider-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Partnership</h4>
                      <p className="text-gray-600 text-sm">An extension of your team, not a vendor.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-ider-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Long-Term Growth</h4>
                      <p className="text-gray-600 text-sm">Sustainable strategies over vanity metrics.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div className="bg-ider-yellow rounded-3xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Our Purpose</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Democratizing Quality</h4>
                      <p className="text-white/80 text-sm">Professional solutions for every budget.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Proving Local Excellence</h4>
                      <p className="text-white/80 text-sm">World-class work from Sri Lanka.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Creating Real Impact</h4>
                      <p className="text-white/80 text-sm">Businesses transformed, goals achieved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section - Clean Lines Design */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
            <div className="border-t border-gray-200">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-5 border-b border-gray-200 group hover:bg-gray-50 px-4 -mx-4 transition-colors ${member.highlight ? 'bg-gray-50' : ''
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${member.highlight ? 'bg-ider-yellow' : 'bg-gray-300 group-hover:bg-ider-yellow'} transition-colors`} />
                    <div>
                      <h3 className={`font-semibold ${member.highlight ? 'text-ider-yellow' : 'text-gray-900'}`}>
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm text-right">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values + Industries - Combined Row */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* The IDER Code */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The IDER Code</h2>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-ider-yellow transition-colors">
                        <value.icon className="w-5 h-5 text-ider-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{value.title}</h4>
                        <p className="text-gray-500 text-xs">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                <div className="flex flex-wrap gap-3">
                  {specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ider-yellow hover:text-white transition-colors cursor-default"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  We&apos;re industry-agnostic but results-focused. Our data-driven approach adapts to your specific market dynamics.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/pricing"
                className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                View Our Pricing
              </a>
              <a
                href="/contact"
                className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 yellow-glow"
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