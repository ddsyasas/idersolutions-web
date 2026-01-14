import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | IDER Solutions",
  description: "IDER Solutions privacy policy - how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold text-ider-yellow mb-2">PRIVACY POLICY</h1>
            <p className="text-xl text-gray-600 mb-2">IDER SOLUTIONS (PVT) LTD - Privacy Policy</p>
            <p className="text-gray-500 mb-8">Last Updated: January 14, 2026</p>

            <p>At IDER Solutions, we are committed to protecting the privacy and security of our clients&apos; personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage our services. By using our website and services, you consent to the practices described in this policy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Information We Collect</h2>
            <p>When you visit our website or engage our services, we may collect certain information about you, including:</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Identification Information</h3>
            <p>Name, email address, phone number, and company details provided voluntarily during the contact form submission, consultation booking, or service engagement process.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment and Billing Information</h3>
            <p>Payment and billing information necessary to process your service fees, including credit card details, bank account information, or PayHere transaction data, which are securely handled by trusted third-party payment processors (PayHere, Stripe, PayPal).</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Project-Related Information</h3>
            <p>Information you provide about your business, website, social media accounts, branding materials, content, and other details necessary to deliver our digital marketing and development services.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Browsing Information</h3>
            <p>Your IP address, browser type, device information, pages visited, and time spent on our website, collected automatically using cookies and similar technologies.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communication Records</h3>
            <p>Records of correspondence via email, phone calls, video meetings, or messaging platforms related to your projects and service inquiries.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Use of Information</h2>
            <p>We may use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver and fulfill the digital marketing, web development, app development, and design services you have contracted.</li>
              <li>To communicate with you regarding your projects, provide updates, request feedback, and respond to inquiries or support requests.</li>
              <li>To process payments and issue invoices for services rendered.</li>
              <li>To personalize our service recommendations based on your business needs and goals.</li>
              <li>To improve our services, website functionality, and client experience based on feedback and usage patterns.</li>
              <li>To send you relevant updates, newsletters, case studies, or promotional content (you may opt out at any time).</li>
              <li>To detect and prevent fraud, unauthorized access, and abuse of our services.</li>
              <li>To comply with legal obligations and enforce our Terms and Conditions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Information Sharing</h2>
            <p>We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Trusted Service Providers</h3>
            <p>We may share your information with third-party service providers who assist us in operating our business, such as payment processors (PayHere, Stripe, PayPal), hosting providers, email marketing platforms, project management tools, and analytics services. These providers are contractually obligated to handle your data securely and confidentially.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Platforms (With Your Authorization)</h3>
            <p>When delivering our services, we may require access to your third-party accounts such as Google Analytics, Google Search Console, Facebook Business Manager, WordPress, Shopify, social media platforms, and other tools. We will only access these accounts with your explicit permission and will use them solely for service delivery.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Legal Requirements</h3>
            <p>We may disclose your information if required to do so by law, court order, or in response to valid legal requests from government authorities.</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, provided they agree to uphold this Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal and business information from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure socket layer (SSL) encryption for data transmission</li>
              <li>Password-protected systems and restricted access to sensitive information</li>
              <li>Regular security audits and updates</li>
              <li>Secure cloud storage with reputable providers</li>
            </ul>
            <p>However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Client Data and Project Files</h2>
            <p>For projects involving website development, app development, SEO, or content creation, we may store your project files, designs, code, content, and other materials on secure cloud platforms (Google Drive, Dropbox, GitHub, etc.) for the duration of the project and a reasonable period thereafter for support purposes.</p>
            <p>Upon project completion and final payment, we will:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide you with all final deliverables and source files</li>
              <li>Retain backup copies for 90 days for support purposes</li>
              <li>Permanently delete project files upon your request (subject to legal retention requirements)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> To track conversions and measure advertising effectiveness</li>
            </ul>
            <p>You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our website.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your personal data (subject to legal obligations)</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Withdraw consent for data processing where consent is the legal basis</li>
            </ul>
            <p>To exercise these rights, please contact us at yasas@idersolutions.com.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fulfill the purposes outlined in this Privacy Policy</li>
              <li>Comply with legal, accounting, or reporting requirements</li>
              <li>Resolve disputes and enforce our agreements</li>
            </ul>
            <p>Project-related data is retained for 90 days after project completion unless you request earlier deletion.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Third-Party Links</h2>
            <p>Our website may contain links to third-party websites, tools, or platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have collected information from a child, please contact us immediately.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">International Data Transfers</h2>
            <p>As we serve clients globally, your information may be transferred to and processed in countries outside of Sri Lanka. We ensure that such transfers comply with applicable data protection laws and that your information receives adequate protection.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Privacy Policy</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.</p>
            <p>Continued use of our website and services after changes are made constitutes acceptance of the updated Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us:</p>
            <p><strong>IDER SOLUTIONS (PVT) LTD</strong><br />
              Email: yasas@idersolutions.com<br />
              Website: idersolutions.com</p>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-center">This Privacy Policy is effective as of January 14, 2026 and applies to all services provided by IDER SOLUTIONS (PVT) LTD.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}