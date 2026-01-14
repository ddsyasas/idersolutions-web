'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does IDER Solutions offer?',
      answer: 'We offer comprehensive digital services including: Digital Marketing (SEO, social media management, content creation, paid ads), Web Development (landing pages, service websites, e-commerce, custom web applications), App Development (iOS, Android, SaaS platforms), and Design & Branding (logo design, brand identity, UI/UX design, video editing). All our services are available with transparent pricing on our Pricing page.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is transparent and designed to fit various budgets. For example, landing pages start at Rs. 50,000 ($170), service websites at Rs. 120,000 ($400), and SEO packages from Rs. 45,000/month ($150/month). We offer both LKR pricing for Sri Lankan clients and USD for international clients. Visit our Pricing page for complete details, or contact us for a custom quote.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Timelines vary based on scope and complexity. Typical timelines: Landing pages (1-2 weeks), Service websites (2-4 weeks), E-commerce sites (4-6 weeks), Mobile apps (8-12 weeks), and Complex web applications (12+ weeks). We pride ourselves on fast delivery without compromising quality. Contact us for a detailed timeline for your specific project.',
    },
    {
      question: 'Do you work with clients worldwide?',
      answer: 'Yes! IDER Solutions serves clients globally with a remote-first approach. We have offices in both Sri Lanka and the USA, with team members across multiple time zones. We\'ve successfully worked with clients in 15+ countries and provide support to accommodate different time zones. You can reach us at +1 (646) 238-0875 (USA) or +94 71 767 3521 (Sri Lanka).',
    },
    {
      question: 'What makes IDER Solutions different from other agencies?',
      answer: 'We combine the analytical rigor of a consultancy with the creative energy of a boutique agency. Our "Science Meets Creativity" philosophy means we measure first and create second—every strategy is backed by data and research. Unlike larger agencies, you work directly with our founder and senior team, ensuring personalized attention and faster communication.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including: React, Next.js, Node.js for web development; React Native and Flutter for mobile apps; WordPress, Shopify, and Wix for CMS solutions; AWS, Firebase, and modern cloud infrastructure; and tools like Figma, Adobe Creative Suite for design. We stay updated with the latest industry standards and choose the best technology for each project\'s specific needs.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'For projects under Rs. 100,000 ($350): 50% upfront, 50% upon completion. For larger projects: Milestone-based payments. Monthly retainers are billed at the beginning of each month. We accept bank transfers, PayHere, credit/debit cards, PayPal, and Stripe. Exchange rates are locked at the time of agreement.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We provide post-launch support included with most packages: Landing pages (1 week), Service websites (30 days), E-commerce (60 days), and Custom/Enterprise solutions (90 days to 3 months). We also offer ongoing maintenance packages for continued support, updates, and optimization.',
    },
    {
      question: 'Can I get a free consultation?',
      answer: 'Absolutely! We offer a free 30-minute consultation where we\'ll discuss your project requirements, goals, and provide expert advice on the best approach. This helps us understand your needs and gives you a chance to see if we\'re the right fit. Schedule your free consultation through our contact form or call us directly.',
    },
    {
      question: 'What\'s not included in your pricing?',
      answer: 'Our prices typically exclude: Domain and hosting costs (we can arrange these at cost), third-party licenses or premium plugins, paid advertising budgets (for social media/Google Ads), stock photos/videos (unless specified), and currency conversion or international transaction fees. We\'re always transparent about what\'s included before starting any project.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="faq">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ider-yellow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. Find everything you need to know about working with IDER Solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:bg-gray-100"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-ider-yellow focus:ring-offset-2 rounded-2xl"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-ider-yellow" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pricing"
              className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition-all duration-300"
            >
              View Pricing
            </a>
            <a
              href="#contact"
              className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
            >
              <span>Contact Us</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
