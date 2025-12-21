import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | IDER Solutions - Join Our Team",
  description: "Join IDER Solutions and be part of an innovative team building cutting-edge digital solutions. Explore career opportunities in web development, digital marketing, and technology.",
  keywords: [
    "careers",
    "jobs",
    "employment opportunities",
    "web development jobs",
    "digital marketing careers",
    "tech jobs",
    "join our team",
    "IDER Solutions careers"
  ],
  openGraph: {
    title: "Careers | IDER Solutions",
    description: "Join IDER Solutions and be part of an innovative team building cutting-edge digital solutions.",
    url: "https://idersolutions.com/careers",
    images: [
      {
        url: 'https://idersolutions.com/og-image.jpg',
        width: 1200,
        height: 633,
        alt: 'IDER Solutions - Careers',
      },
    ],
  },
};

export default function CareersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://idersolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Careers",
        "item": "https://idersolutions.com/careers"
      }
    ]
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Content Writer",
    "description": "Are you a creative wordsmith who knows how to drive SEO results? We're seeking a Content Writer who can craft compelling content, optimise it for search, and use modern tools to deliver value.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "IDER Solutions",
      "value": "512840"
    },
    "datePosted": new Date().toISOString(),
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "IDER Solutions (Pvt) Ltd",
      "sameAs": "https://idersolutions.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Worldwide"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "LKR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 40000,
        "maxValue": 60000,
        "unitText": "MONTH"
      }
    },
    "url": "https://rooster.jobs/jobs/512840"
  };

  const openPositions = [
    {
      title: "Content Writer",
      type: "Full-time / Remote",
      department: "Content & Marketing",
      location: "Anywhere, Worldwide",
      salary: "LKR 40,000 - 60,000/month",
      description: "Are you a creative wordsmith who knows how to drive SEO results and enjoys working in a dynamic environment? At IDER Solutions, a forward-thinking digital solutions provider, we're seeking a Content Writer who can craft compelling content, optimise it for search, and use modern tools to deliver value.",
      responsibilities: [
        "Write and edit SEO-optimized articles, blogs, and web content",
        "Manage and upload content through WordPress",
        "Apply effective interlinking strategies to improve site navigation and SEO",
        "Use tools such as Grammarly to ensure clarity and accuracy",
        "Utilize AI tools to assist in generating reader-friendly and high-quality content",
        "Maintain consistency in tone, style, and quality across all published materials",
        "Utilize Zoho CRM to manage newsletter campaigns"
      ],
      requirements: [
        "Proven experience as a content writer, copywriter, or similar role",
        "Strong understanding of SEO best practices",
        "Proficiency in WordPress content management",
        "Familiarity with Grammarly, Hemingway, or similar writing tools",
        "Ability to use AI-assisted tools effectively for content generation",
        "Excellent command of English and attention to detail",
        "Experience using Zoho CRM is an added advantage"
      ],
      preferredSkills: [
        "Basic knowledge of on-page and off-page SEO",
        "Strong research and time management skills",
        "Ability to adapt writing style to different audiences and formats"
      ],
      applyUrl: "https://rooster.jobs/jobs/512840"
    }
  ];

  const benefits = [
    {
      icon: "🌍",
      title: "Remote First",
      description: "Work from anywhere in the world"
    },
    {
      icon: "💼",
      title: "Flexible Hours",
      description: "Work-life balance that fits your lifestyle"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Opportunities to learn and advance"
    },
    {
      icon: "🤝",
      title: "Great Team",
      description: "Collaborate with talented professionals"
    },
    {
      icon: "🎯",
      title: "Impactful Work",
      description: "Build solutions that make a difference"
    },
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "Fair compensation for your skills"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingSchema),
        }}
      />
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumbs - Hidden visually but available for SEO/screen readers */}
          <nav className="sr-only" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li><a href="/">Home</a></li>
              <li>/</li>
              <li>Careers</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Join the <span className="text-ider-yellow">IDER Solutions</span> Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of digital solutions. Join us and help transform ideas into powerful, scalable products that drive real business results.
            </p>
          </div>

          {/* Why Work With Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 border border-gray-200"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Open Positions</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-ider-yellow/10 text-ider-yellow rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                      <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm">
                        {position.department}
                      </span>
                      {position.location && (
                        <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                          📍 {position.location}
                        </span>
                      )}
                      {position.salary && (
                        <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                          💰 {position.salary}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{position.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {position.responsibilities && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <span className="text-ider-yellow mr-2 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      {position.requirements && (
                        <div className="mb-6">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((item, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <span className="text-ider-yellow mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {position.preferredSkills && (
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">Preferred Skills:</h4>
                          <ul className="space-y-2">
                            {position.preferredSkills.map((item, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <span className="text-ider-yellow mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-300">
                    <a
                      href={position.applyUrl || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-ider-yellow text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Apply Now on Rooster.jobs →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Don't See Your Role?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Even if you don't see a perfect match, we'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-ider-yellow text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/about"
                className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </section>

          {/* Internal Linking Section */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/" className="text-gray-600 hover:text-ider-yellow transition-colors">Home</a>
              <span className="text-gray-400">•</span>
              <a href="/about" className="text-gray-600 hover:text-ider-yellow transition-colors">About Us</a>
              <span className="text-gray-400">•</span>
              <a href="/services" className="text-gray-600 hover:text-ider-yellow transition-colors">Services</a>
              <span className="text-gray-400">•</span>
              <a href="/portfolio" className="text-gray-600 hover:text-ider-yellow transition-colors">Portfolio</a>
              <span className="text-gray-400">•</span>
              <a href="/contact" className="text-gray-600 hover:text-ider-yellow transition-colors">Contact</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
