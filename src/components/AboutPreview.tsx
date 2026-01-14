'use client';

import React from 'react';
import { Zap, Users, Globe, Code } from 'lucide-react';

const AboutPreview = () => {
    const features = [
        {
            icon: Zap,
            title: 'Fast Delivery',
            description: 'Lightning-fast turnaround without compromising quality',
            color: 'from-orange-400 to-orange-500',
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Skilled professionals with years of industry experience',
            color: 'from-blue-400 to-purple-500',
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Serving clients in 15+ countries worldwide',
            color: 'from-green-400 to-teal-500',
        },
        {
            icon: Code,
            title: 'Modern Tech',
            description: 'Cutting-edge technologies and best practices',
            color: 'from-pink-400 to-red-500',
        },
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
                            Why IDER Solutions?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            We&apos;re your trusted partner in transforming ideas into powerful digital solutions.
                            Data-driven strategies, creative execution, real results.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-3xl p-8 text-center group hover:bg-gray-100 transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { metric: '100+', label: 'Projects Delivered' },
                                { metric: '50+', label: 'Happy Clients' },
                                { metric: '15+', label: 'Countries Served' },
                                { metric: '99%', label: 'Client Satisfaction' },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-bold text-ider-yellow mb-1">{stat.metric}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 text-ider-yellow font-semibold hover:opacity-80 transition-opacity"
                        >
                            Learn more about us →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
