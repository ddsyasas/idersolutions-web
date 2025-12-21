'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does IDER Solutions offer?',
      answer: 'IDER Solutions offers comprehensive digital services including Web Development (WordPress, Wix, Shopify, custom websites), Digital Marketing (SEO, social media management, paid ads, content creation), App Development (iOS, Android, SaaS platforms, dashboards, APIs), and Design & Multimedia (logo design, brand identity, UI/UX design, video editing).',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on scope and complexity. We pride ourselves on fast delivery without compromising quality. Simple websites typically take 2-4 weeks, while complex applications may take 8-12 weeks. Contact us for a detailed timeline for your specific project.',
    },
    {
      question: 'Do you work with clients worldwide?',
      answer: 'Yes, IDER Solutions serves clients globally with a remote-first approach. We have experience working with companies in 15+ countries and provide 24/7 support to accommodate different time zones.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies and best practices including React, Node.js, React Native, Flutter, Vue.js, Python, MongoDB, PostgreSQL, AWS, Firebase, and modern design tools like Figma, Illustrator, and Photoshop. We stay updated with the latest industry standards.',
    },
    {
      question: 'How can I get started with a project?',
      answer: 'Getting started is easy! Contact us via email at yasas@idersolutions.com or use our contact form. We offer free consultations to discuss your project requirements, goals, and provide expert advice on the best approach for your digital solution.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we provide ongoing support and maintenance services. Our commitment to client success extends beyond project delivery, and we offer various support packages to ensure your digital solution continues to perform optimally.',
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
          <a
            href="#contact"
            className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 inline-flex items-center space-x-2 yellow-glow"
          >
            <span>Contact Us</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
