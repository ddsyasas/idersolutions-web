import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Ider Solutions collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  keywords: ['privacy policy', 'data protection', 'personal information', 'GDPR', 'privacy'],
  openGraph: {
    title: 'Privacy Policy - Ider Solutions',
    description: 'Learn about how Ider Solutions collects, uses, and protects your personal information.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ider-dark to-ider-darker text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-ider-darker/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-ider-primary">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-gray-400 mb-8 text-center">
            Last updated: January 2024
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">1. Introduction</h2>
              <p className="mb-4">
                Ider Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://idersolutions.com/ or use our services.
              </p>
              <p>
                By using our website and services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and user experience</li>
                <li>To send newsletters and marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With trusted service providers who assist us in operating our website and services</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">6. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">7. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to access and receive a copy of your personal data</li>
                <li>Right to rectify inaccurate personal data</li>
                <li>Right to erasure of your personal data</li>
                <li>Right to restrict processing of your personal data</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">8. Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">9. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">10. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">11. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-ider-dark/50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> privacy@idersolutions.com</p>
                <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
                <p><strong>Website:</strong> https://idersolutions.com</p>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/"
              className="inline-block bg-ider-primary hover:bg-ider-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 