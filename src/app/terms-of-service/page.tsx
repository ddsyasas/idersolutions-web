import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | IDER Solutions",
  description: "IDER Solutions terms and conditions for using our website and digital services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar scrollY={0} />
      <main className="pt-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold text-ider-yellow mb-2">TERMS & CONDITIONS</h1>
            <p className="text-xl text-gray-600 mb-2">IDER SOLUTIONS (PVT) LTD - Terms and Conditions</p>
            <p className="text-gray-500 mb-8">Last Updated: January 14, 2026</p>

            <p>Welcome to IDER Solutions. These Terms and Conditions govern your use of our website and the provision of digital marketing and development services. By accessing our website or engaging our services, you agree to comply with these terms. Please read them carefully before proceeding.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By using our website (idersolutions.com) or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy and Refund Policy.</p>
            <p>If you do not agree with any part of these terms, please do not use our website or services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to engage our services or enter into a contract with IDER Solutions.</li>
              <li>If you are representing a company or organization, you confirm that you have the authority to bind that entity to these Terms and Conditions.</li>
              <li>You are responsible for maintaining the confidentiality of your account information, including login credentials for any client portals or project management tools we provide.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Services Offered</h2>
            <p>IDER Solutions provides the following digital services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Digital Marketing Services:</strong> SEO, social media marketing, content creation, paid advertising campaigns</li>
              <li><strong>Web Development:</strong> Website design and development (WordPress, Shopify, Wix, custom solutions)</li>
              <li><strong>App Development:</strong> Mobile applications (iOS/Android), web applications, SaaS platforms</li>
              <li><strong>Design & Multimedia:</strong> Logo design, brand identity, UI/UX design, video editing, graphic design</li>
            </ul>
            <p>All services are provided based on the scope and deliverables outlined in individual project proposals, service agreements, or statements of work.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Service Agreements and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Proposal and Agreement:</strong> Before commencing any project, we will provide you with a detailed proposal outlining the scope, deliverables, timeline, and pricing. Your acceptance of the proposal constitutes a binding agreement.</li>
              <li><strong>Pricing:</strong> Prices are as stated in the proposal or on our Pricing page. We reserve the right to change our pricing at any time, but any changes will not affect active projects under contract.</li>
              <li><strong>Estimates and Quotes:</strong> All quotes and estimates are valid for 30 days unless otherwise stated.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Schedule:</strong> Payment terms are outlined in your service agreement. Typically:
                <ul className="list-disc pl-6 mt-2">
                  <li>50% upfront deposit for projects under Rs. 100,000</li>
                  <li>Milestone-based payments for larger projects</li>
                  <li>Monthly retainers billed at the beginning of each month</li>
                </ul>
              </li>
              <li><strong>Accepted Payment Methods:</strong> We accept bank transfers, credit/debit cards, and PayHere payments.</li>
              <li><strong>Late Payments:</strong> Late payments may result in suspension of services and incur a 2% monthly interest charge on overdue balances.</li>
              <li><strong>Currency:</strong> Payments are in Sri Lankan Rupees (LKR) for local clients or US Dollars (USD) for international clients, as specified in the invoice.</li>
              <li><strong>Refunds:</strong> All refunds will be processed to the original payment method used for the transaction. Please refer to our <a href="/refund-policy" className="text-ider-yellow hover:underline">Refund Policy</a> for detailed information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Client Responsibilities</h2>
            <p>To ensure successful project delivery, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, complete, and timely information, content, materials, and feedback.</li>
              <li>Grant necessary access to third-party accounts (website hosting, social media, analytics tools, etc.) required for service delivery.</li>
              <li>Respond to our requests for feedback and approvals within the agreed timelines.</li>
              <li>Ensure that all content, materials, and instructions provided to us do not infringe on third-party intellectual property rights or violate any laws.</li>
            </ul>
            <p>Delays caused by failure to meet these responsibilities may result in project timeline extensions and may incur additional fees.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Project Timelines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will make reasonable efforts to meet the timelines outlined in your service agreement.</li>
              <li>Timelines are estimates and may be subject to change due to unforeseen circumstances, scope changes, or delays caused by client-side dependencies.</li>
              <li>Any changes to the project scope may result in adjusted timelines and additional costs.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Revisions and Changes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Each project includes a specified number of revision rounds as outlined in your service agreement.</li>
              <li>Additional revisions beyond the agreed scope may be subject to additional fees.</li>
              <li>Major scope changes requested after project commencement will be treated as change requests and may incur additional costs and timeline extensions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Intellectual Property Rights</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Work Product Ownership:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upon full payment, you will own the final deliverables (website, app, designs, content, etc.) as specified in your service agreement.</li>
              <li>Until full payment is received, IDER Solutions retains ownership of all work product.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pre-existing Materials:</h3>
            <p>IDER Solutions retains ownership of any pre-existing frameworks, templates, tools, code libraries, or methodologies used in delivering your project.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Portfolio and Marketing:</h3>
            <p>We reserve the right to showcase completed projects in our portfolio, case studies, and marketing materials unless you request confidentiality in writing.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Assets:</h3>
            <p>Any third-party assets used in your project (stock images, fonts, plugins, etc.) are subject to their respective licensing terms. You are responsible for obtaining necessary licenses for ongoing use.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Confidentiality</h2>
            <p>We respect the confidentiality of your business information. Any confidential information shared with us during the project will be kept secure and used solely for the purpose of delivering services, unless:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disclosure is required by law</li>
              <li>Information becomes publicly available through no fault of ours</li>
              <li>You provide written consent for disclosure</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Quality:</h3>
            <p>We strive to deliver high-quality services and will make reasonable efforts to meet your expectations as outlined in the service agreement.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Guarantees:</h3>
            <p>We do not guarantee specific results from digital marketing campaigns, SEO rankings, website traffic, sales conversions, or app downloads. Results depend on numerous factors outside our control.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Services:</h3>
            <p>We are not responsible for the performance, reliability, or changes to third-party platforms (Google, Facebook, WordPress, Shopify, hosting providers, etc.) used in delivering our services.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No Warranty:</h3>
            <p>Our services are provided "as is" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IDER Solutions, its directors, employees, contractors, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.</li>
              <li>Our total liability for any claim related to our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.</li>
              <li>We are not liable for any loss of data, profits, revenue, business opportunities, or reputation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless IDER Solutions from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your breach of these Terms and Conditions</li>
              <li>Your use of our services</li>
              <li>Content, materials, or instructions you provide that infringe on third-party rights or violate laws</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">By Client:</h3>
            <p>You may terminate a project or monthly retainer service by providing written notice. Termination terms and refund eligibility are outlined in our <a href="/refund-policy" className="text-ider-yellow hover:underline">Refund Policy</a>.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">By IDER Solutions:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We reserve the right to terminate services if you breach these Terms and Conditions, fail to make payments, or engage in abusive or unlawful behavior.</li>
              <li>Upon termination, you will be invoiced for all work completed up to the termination date.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">15. Force Majeure</h2>
            <p>IDER Solutions shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government actions, pandemics, or internet/telecommunications failures.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">16. Governing Law and Dispute Resolution</h2>
            <p>These Terms and Conditions are governed by the laws of the Democratic Socialist Republic of Sri Lanka.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Dispute Resolution:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation.</li>
              <li>If negotiation fails, disputes shall be resolved through arbitration in accordance with the Arbitration Act of Sri Lanka.</li>
              <li>The venue for arbitration shall be Colombo, Sri Lanka.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">17. Amendments</h2>
            <p>We reserve the right to modify, update, or amend these Terms and Conditions at any time without prior notice. Any changes will be posted on this page with a revised "Last Updated" date.</p>
            <p>It is your responsibility to review these terms periodically. Continued use of our services after changes are made constitutes acceptance of the updated Terms and Conditions.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">18. Severability</h2>
            <p>If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">19. Entire Agreement</h2>
            <p>These Terms and Conditions, together with any service agreements, proposals, and our Privacy Policy and Refund Policy, constitute the entire agreement between you and IDER Solutions regarding the use of our services.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">20. Contact Information</h2>
            <p>For questions, concerns, or clarifications regarding these Terms and Conditions, please contact us:</p>
            <p><strong>IDER SOLUTIONS (PVT) LTD</strong><br />
              Email: yasas@idersolutions.com<br />
              Website: idersolutions.com</p>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-center">These Terms and Conditions are effective as of January 14, 2026 and apply to all services provided by IDER SOLUTIONS (PVT) LTD.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}