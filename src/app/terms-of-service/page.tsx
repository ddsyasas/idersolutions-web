import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service to understand the terms and conditions for using Ider Solutions services and website.',
  keywords: ['terms of service', 'terms and conditions', 'legal', 'agreement', 'service terms'],
  openGraph: {
    title: 'Terms of Service - Ider Solutions',
    description: 'Read our terms of service to understand the terms and conditions for using Ider Solutions services.',
    type: 'website',
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ider-dark to-ider-darker text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-ider-darker/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-ider-primary">
            Terms of Service
          </h1>
          
          <div className="text-sm text-gray-400 mb-8 text-center">
            Last updated: January 2024
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the website https://idersolutions.com/ and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">2. Description of Service</h2>
              <p className="mb-4">
                Ider Solutions provides web development, digital solutions, and technology consulting services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Website design and development</li>
                <li>Mobile application development</li>
                <li>E-commerce solutions</li>
                <li>Digital marketing services</li>
                <li>Technology consulting</li>
                <li>SEO optimization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">3. User Responsibilities</h2>
              <p className="mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
                <li>Respect intellectual property rights</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">4. Intellectual Property Rights</h2>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Ider Solutions and is protected by copyright and other intellectual property laws.
              </p>
              <p className="mb-4">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">5. Payment Terms</h2>
              <p className="mb-4">
                For paid services, the following terms apply:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment is due upon receipt of invoice unless otherwise agreed</li>
                <li>All prices are subject to change with prior notice</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are handled on a case-by-case basis</li>
                <li>All payments are non-refundable unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">6. Service Availability</h2>
              <p className="mb-4">
                We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">7. Limitation of Liability</h2>
              <p className="mb-4">
                Ider Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">8. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify and hold harmless Ider Solutions from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">9. Privacy Policy</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">10. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">11. Governing Law</h2>
              <p className="mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-ider-primary">13. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-ider-dark/50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:yasas@idersolutions.com" className="text-ider-primary hover:underline">yasas@idersolutions.com</a></p>
                <p className="mb-2"><strong>General Inquiries:</strong> <a href="mailto:info@idersolutions.com" className="text-ider-primary hover:underline">info@idersolutions.com</a></p>
                <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
                <p><strong>Website:</strong> https://idersolutions.com</p>
              </div>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-block bg-ider-primary hover:bg-ider-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 