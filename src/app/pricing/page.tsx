'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, MessageCircle, Zap, Globe, Code, Palette } from 'lucide-react';

type Currency = 'LKR' | 'USD';

interface PriceInfo {
    lkr: string;
    usd: string;
    period?: string;
}

interface Package {
    name: string;
    price: PriceInfo;
    description?: string;
    features: string[];
    popular?: boolean;
    custom?: boolean;
    cta?: string;
}

interface ServiceCategory {
    id: string;
    icon: React.ElementType;
    title: string;
    color: string;
    packages: Package[];
}

// Pricing Data
const pricingData: ServiceCategory[] = [
    {
        id: 'digital-marketing',
        icon: Zap,
        title: 'Digital Marketing Services',
        color: 'from-blue-500 to-purple-600',
        packages: [
            // SEO Services
            {
                name: 'Starter SEO Package',
                price: { lkr: 'Rs. 45,000', usd: '$150', period: '/month' },
                features: [
                    'Comprehensive keyword research & strategy',
                    'On-page SEO optimization (up to 10 pages)',
                    '4 SEO-optimized blog posts per month',
                    'Monthly performance reports',
                    'Basic competitor analysis',
                    'Google Search Console & Analytics setup',
                ],
            },
            {
                name: 'Growth SEO Package',
                price: { lkr: 'Rs. 85,000', usd: '$280', period: '/month' },
                popular: true,
                features: [
                    'Everything in Starter Package',
                    'Advanced keyword research & content strategy',
                    '8 SEO-optimized blog posts per month',
                    'Link building & outreach (5 quality backlinks/month)',
                    'Technical SEO audit & fixes',
                    'Monthly strategy calls',
                ],
            },
            {
                name: 'Enterprise SEO Solution',
                price: { lkr: 'Custom', usd: 'Custom' },
                custom: true,
                cta: 'Contact us for a quote',
                features: [
                    'Dedicated SEO specialist',
                    'Unlimited pages optimization',
                    '8+ blog posts per month',
                    'Advanced link building campaigns',
                    'Comprehensive technical SEO',
                    'Competitor tracking & market analysis',
                    'Priority support & weekly calls',
                ],
            },
            // Social Media
            {
                name: 'Essential Social Package',
                price: { lkr: 'Rs. 35,000', usd: '$120', period: '/month' },
                features: [
                    'Management of 2 social platforms',
                    '12 posts per month (3 per week)',
                    'Content calendar planning',
                    'Organic growth strategies',
                    'Monthly analytics report',
                ],
            },
            {
                name: 'Premium Social Package',
                price: { lkr: 'Rs. 75,000', usd: '$250', period: '/month' },
                popular: true,
                features: [
                    'Management of 3-4 social platforms',
                    '20 posts per month (5 per week)',
                    'Paid ads campaign management (budget not included)',
                    'Community engagement & response management',
                    'Stories, reels, and video content',
                    'Bi-weekly performance reports',
                ],
            },
            {
                name: 'Full-Service Social Media',
                price: { lkr: 'Rs. 150,000+', usd: '$500+', period: '/month' },
                custom: true,
                cta: 'Starting from',
                features: [
                    'Complete social media management (all platforms)',
                    'Daily posting & engagement',
                    'Advanced paid advertising campaigns',
                    'Influencer outreach & collaboration',
                    'Social media strategy & consulting',
                    'Dedicated account manager',
                ],
            },
            // Content Creation
            {
                name: 'Blog & Article Writing',
                price: { lkr: 'Rs. 3/word', usd: '$0.02/word' },
                description: 'Professional SEO-optimized content',
                features: [
                    '500 words: Rs. 1,500 | $10',
                    '1,000 words: Rs. 3,000 | $20',
                    '1,500 words: Rs. 4,500 | $30',
                    '2,000 words: Rs. 6,000 | $40',
                    'Bulk discounts: 4 articles (10% off), 8 articles (20% off)',
                    'Includes keyword research, SEO optimization, 1 revision',
                ],
            },
            {
                name: 'Social Media Content Package',
                price: { lkr: 'Rs. 25,000', usd: '$85', period: '/month' },
                features: [
                    '15 graphics/posts designed',
                    'Captions & hashtags included',
                    'Platform-optimized formats',
                ],
            },
            {
                name: 'Video Editing & Multimedia',
                price: { lkr: 'Rs. 8,000+', usd: '$27+' },
                features: [
                    'Short-form video (under 60s): Rs. 8,000 | $27',
                    'Long-form video editing: Rs. 15,000+ | $50+',
                    'Custom package pricing available',
                ],
            },
        ],
    },
    {
        id: 'development',
        icon: Globe,
        title: 'Web & Application Development',
        color: 'from-green-500 to-teal-600',
        packages: [
            {
                name: 'Landing Page',
                price: { lkr: 'Rs. 50,000', usd: '$170' },
                features: [
                    'Single page responsive design',
                    'Contact form integration',
                    'Mobile-optimized',
                    'SEO basics included',
                    '1 round of revisions',
                ],
            },
            {
                name: 'Service-Based Website',
                price: { lkr: 'Rs. 120,000', usd: '$400' },
                popular: true,
                features: [
                    'Up to 7 pages',
                    'Custom responsive design',
                    'Contact forms & lead capture',
                    'SEO-optimized structure',
                    'CMS integration (WordPress/Wix)',
                    '2 rounds of revisions',
                    '30 days post-launch support',
                ],
            },
            {
                name: 'E-Commerce Platform',
                price: { lkr: 'Rs. 200,000', usd: '$670' },
                features: [
                    'WordPress/Shopify/Wix setup',
                    'Up to 50 products',
                    'Payment gateway integration (PayHere, Stripe, PayPal)',
                    'Shopping cart & checkout optimization',
                    'Inventory management',
                    'Mobile-responsive design',
                    '2 rounds of revisions',
                    '60 days post-launch support',
                ],
            },
            {
                name: 'Enterprise Custom Website',
                price: { lkr: 'Rs. 350,000+', usd: '$1,200+' },
                custom: true,
                cta: 'Starting from',
                features: [
                    'Fully custom design & development',
                    'Advanced features & integrations',
                    'Custom CRM/dashboard',
                    'API integrations',
                    'Unlimited pages',
                    'Dedicated project manager',
                    '90 days post-launch support',
                ],
            },
            {
                name: 'Mobile App Development',
                price: { lkr: 'Rs. 350,000+', usd: '$1,200+' },
                custom: true,
                cta: 'Starting from',
                features: [
                    'iOS and/or Android app',
                    'Custom UI/UX design',
                    'Up to 10 core features',
                    'Admin dashboard',
                    'API integration',
                    'App store submission assistance',
                    '3 months post-launch support',
                ],
            },
            {
                name: 'Web Application / SaaS Platform',
                price: { lkr: 'Rs. 250,000+', usd: '$850+' },
                custom: true,
                cta: 'Starting from',
                features: [
                    'Custom web application',
                    'User authentication & management',
                    'Database design & setup',
                    'Admin panel',
                    'Responsive design',
                    'Cloud hosting setup',
                    '3 months post-launch support',
                ],
            },
            {
                name: 'Custom Enterprise Solutions',
                price: { lkr: 'Custom', usd: 'Custom' },
                custom: true,
                cta: 'Contact us for detailed quote',
                features: [
                    'Complex business logic',
                    'Multiple integrations',
                    'Advanced security features',
                    'Scalable architecture',
                    'Dedicated development team',
                    'Ongoing maintenance packages available',
                ],
            },
        ],
    },
    {
        id: 'design',
        icon: Palette,
        title: 'Design & Branding Services',
        color: 'from-pink-500 to-violet-600',
        packages: [
            {
                name: 'Basic Logo Design',
                price: { lkr: 'Rs. 15,000', usd: '$50' },
                features: [
                    '3 initial concepts',
                    '2 rounds of revisions',
                    'Final files in multiple formats',
                ],
            },
            {
                name: 'Premium Logo Package',
                price: { lkr: 'Rs. 35,000', usd: '$120' },
                popular: true,
                features: [
                    '5 initial concepts',
                    'Unlimited revisions',
                    'Brand guidelines document',
                    'All file formats included',
                    'Social media profile versions',
                ],
            },
            {
                name: 'Brand Identity Package',
                price: { lkr: 'Rs. 75,000+', usd: '$250+' },
                cta: 'Starting from',
                features: [
                    'Complete logo design',
                    'Color palette & typography',
                    'Business card design',
                    'Social media templates',
                    'Brand style guide',
                ],
            },
            {
                name: 'Mobile App UI Design',
                price: { lkr: 'Rs. 50,000+', usd: '$170+' },
                cta: 'Starting from',
                features: [
                    'Complete app screen designs',
                    'Interactive prototypes',
                    'Design system components',
                    'Developer handoff files',
                ],
            },
            {
                name: 'Web App UI Design',
                price: { lkr: 'Rs. 65,000+', usd: '$220+' },
                cta: 'Starting from',
                features: [
                    'Dashboard and page designs',
                    'Responsive layouts',
                    'Component library',
                    'Interactive prototypes',
                ],
            },
            {
                name: 'Complete Design System',
                price: { lkr: 'Custom', usd: 'Custom' },
                custom: true,
                cta: 'Contact us for quote',
                features: [
                    'Full UI component library',
                    'Design tokens & variables',
                    'Documentation',
                    'Figma/Sketch files',
                    'Developer documentation',
                ],
            },
        ],
    },
];

export default function PricingPage() {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [scrollY, setScrollY] = useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getPrice = (price: PriceInfo) => {
        const value = currency === 'LKR' ? price.lkr : price.usd;
        return value + (price.period || '');
    };

    return (
        <>
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Pricing - IDER Solutions",
                        "description": "Transparent pricing for web development, digital marketing, app development, and design services.",
                        "url": "https://idersolutions.com/pricing",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://idersolutions.com" },
                                { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://idersolutions.com/pricing" }
                            ]
                        }
                    })
                }}
            />

            <Navbar scrollY={scrollY} />

            <main className="pt-24 bg-white min-h-screen">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Pricing & Service Packages
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Transform your business with transparent, value-driven pricing
                        </p>

                        {/* Currency Toggle */}
                        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-4">
                            <button
                                onClick={() => setCurrency('LKR')}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${currency === 'LKR'
                                        ? 'bg-ider-yellow text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                🇱🇰 LKR
                            </button>
                            <button
                                onClick={() => setCurrency('USD')}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${currency === 'USD'
                                        ? 'bg-ider-yellow text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                🌍 USD
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">
                            {currency === 'LKR'
                                ? 'Prices shown in Sri Lankan Rupees for local clients'
                                : 'Prices shown in US Dollars for international clients'}
                        </p>
                    </div>
                </section>

                {/* Pricing Sections */}
                {pricingData.map((category) => (
                    <section
                        key={category.id}
                        id={category.id}
                        className="py-16 border-b border-gray-100"
                    >
                        <div className="container mx-auto px-6">
                            {/* Category Header */}
                            <div className="flex items-center justify-center gap-4 mb-12">
                                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {category.title}
                                </h2>
                            </div>

                            {/* Pricing Cards Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {category.packages.map((pkg, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pkg.popular
                                                ? 'border-ider-yellow shadow-lg'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {/* Popular Badge */}
                                        {pkg.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                                <span className="bg-ider-yellow text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                                    Popular
                                                </span>
                                            </div>
                                        )}

                                        {/* Package Name */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {pkg.name}
                                        </h3>

                                        {/* Description if exists */}
                                        {pkg.description && (
                                            <p className="text-sm text-gray-500 mb-3">{pkg.description}</p>
                                        )}

                                        {/* Price */}
                                        <div className="mb-4">
                                            {pkg.cta && !pkg.custom && (
                                                <span className="text-sm text-gray-500">{pkg.cta} </span>
                                            )}
                                            <span className={`text-2xl font-bold ${pkg.custom ? 'text-ider-yellow' : 'text-gray-900'}`}>
                                                {getPrice(pkg.price)}
                                            </span>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {pkg.features.map((feature, fidx) => (
                                                <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <a
                                            href={pkg.custom ? '/contact' : '/contact'}
                                            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${pkg.popular
                                                    ? 'bg-ider-yellow text-white hover:opacity-90'
                                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                }`}
                                        >
                                            {pkg.custom ? 'Get Quote' : 'Get Started'}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* Additional Information Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Additional Information
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {/* Currency & Conversion */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3">💱 Currency & Conversion</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Sri Lankan clients invoiced in LKR</li>
                                    <li>• International clients invoiced in USD</li>
                                    <li>• Exchange rates locked at agreement</li>
                                    <li>• Prices exclude applicable taxes</li>
                                </ul>
                            </div>

                            {/* Payment Terms */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3">💳 Payment Terms</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 50% upfront, 50% upon completion</li>
                                    <li>• Milestone-based for large projects</li>
                                    <li>• Monthly retainers billed upfront</li>
                                    <li>• Bank, PayHere, Cards, PayPal, Stripe</li>
                                </ul>
                            </div>

                            {/* What's Not Included */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3">📋 What&apos;s Not Included</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Domain & hosting costs</li>
                                    <li>• Third-party licenses/plugins</li>
                                    <li>• Paid advertising budget</li>
                                    <li>• Stock photos/videos</li>
                                </ul>
                            </div>

                            {/* Custom Quotes */}
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3">✨ Custom Solutions</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Every business is unique</li>
                                    <li>• Custom quotes available</li>
                                    <li>• Free 30-min consultation</li>
                                    <li>• Tailored to your needs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <MessageCircle className="w-16 h-16 text-ider-yellow mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Not Sure What You Need?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Schedule a free 30-minute consultation where we&apos;ll discuss your goals and recommend the best solution for your business.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 yellow-glow"
                        >
                            Get Your Free Consultation
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-8 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <p className="text-center text-sm text-gray-500">
                            All prices are starting rates and may vary based on project complexity, timeline, and specific requirements.
                            Prices listed are exclusive of applicable taxes. We reserve the right to adjust pricing with 30 days&apos; notice for new projects.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
