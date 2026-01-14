import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Refund Policy | IDER Solutions",
    description: "IDER Solutions refund policy for digital marketing, web development, app development, and design services.",
    robots: {
        index: true,
        follow: true,
    },
};

export default function RefundPolicyPage() {
    return (
        <>
            <Navbar scrollY={0} />
            <main className="pt-24 bg-white min-h-screen">
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <h1 className="text-4xl font-bold text-ider-yellow mb-2">REFUND POLICY</h1>
                        <p className="text-xl text-gray-600 mb-2">IDER SOLUTIONS (PVT) LTD - Refund Policy</p>
                        <p className="text-gray-500 mb-8">Last Updated: January 14, 2026</p>

                        <p>At IDER Solutions, we are committed to delivering high-quality digital solutions and ensuring customer satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be issued for our services.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. General Refund Policy</h2>
                        <p>All refund requests will be evaluated on a case-by-case basis. We strive to resolve any concerns or issues before processing a refund. Refunds, when approved, will be processed according to the terms outlined in this policy.</p>
                        <p><strong>Important:</strong> All refunds will be processed to the original payment method used for the transaction. Refunds will not be issued to third-party accounts or alternative payment methods.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Service-Based Projects (Web Development, App Development, Design)</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Before Project Commencement:</h3>
                        <p>If you cancel before work begins, you are eligible for a full refund minus a 10% administrative fee.</p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">During Project Development:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Refunds are based on project milestones completed and approved by the client.</li>
                            <li>If you cancel mid-project, you will be charged only for the completed milestones/work delivered.</li>
                            <li>Any upfront payment will be adjusted against completed work. Remaining balance (if any) will be refunded.</li>
                            <li>No refund is available for milestones that have been completed and approved by the client.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">After Project Completion:</h3>
                        <p>Once a project has been completed, delivered, and approved by the client, no refunds will be issued.</p>
                        <p>If you are dissatisfied with the final deliverable, we will work with you to address concerns through revisions as outlined in your service agreement.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Monthly Retainer Services (SEO, Social Media Marketing, Content Marketing)</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cancellation Policy:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You may cancel your monthly retainer at any time with 30 days written notice.</li>
                            <li>No refunds will be issued for the current billing month once services have commenced.</li>
                            <li>Pro-rated refunds may be issued for the unused portion of the month if services are cancelled mid-cycle and work has not been delivered.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Dissatisfaction:</h3>
                        <p>If you are dissatisfied with our monthly services, please contact us within the first 14 days of the billing cycle. We will work with you to address concerns.</p>
                        <p>Refunds for monthly retainers are issued only in exceptional circumstances at the sole discretion of IDER Solutions management.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. One-Time Services (Logo Design, Content Creation, Video Editing)</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Before Delivery:</h3>
                        <p>If you cancel before the first draft/concept is delivered, you are eligible for a full refund minus a 15% administrative fee.</p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">After First Draft Delivery:</h3>
                        <p>No refunds will be issued once the first draft or concept has been delivered.</p>
                        <p>We will work with you through the agreed-upon revision rounds to ensure your satisfaction.</p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">After Final Delivery:</h3>
                        <p>Once final files have been delivered and approved, no refunds will be issued.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Non-Refundable Costs</h2>
                        <p>The following costs are non-refundable under any circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Third-party expenses incurred on your behalf (domain registration, hosting, premium plugins/themes, stock media, advertising spend)</li>
                            <li>Setup fees for integrations or third-party services</li>
                            <li>Consultation fees</li>
                            <li>Completed and delivered work</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Refund Processing Timeline</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Approved refunds will be processed within 7-14 business days from the date of approval.</li>
                            <li>All refunds will be issued to the original payment method used for the transaction (credit/debit card, bank account, or PayHere wallet).</li>
                            <li>You will receive an email confirmation once the refund has been processed.</li>
                            <li>Please note that depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to reflect in your account.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. How to Request a Refund</h2>
                        <p>To request a refund, please contact us at:</p>
                        <p><strong>Email:</strong> yasas@idersolutions.com<br />
                            <strong>Subject Line:</strong> Refund Request - [Your Name/Project Name]</p>
                        <p>Please include the following information in your request:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your full name and contact details</li>
                            <li>Invoice number or payment reference</li>
                            <li>Reason for refund request</li>
                            <li>Any supporting documentation</li>
                        </ul>
                        <p>Our team will review your request and respond within 2-3 business days.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Dispute Resolution</h2>
                        <p>If you are dissatisfied with our services or have concerns about billing, we encourage you to contact us first. We are committed to resolving issues amicably and to your satisfaction.</p>
                        <p>If we are unable to resolve a dispute internally, disputes may be escalated through legal channels in accordance with the laws of Sri Lanka.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to This Refund Policy</h2>
                        <p>IDER Solutions reserves the right to update or modify this Refund Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes are made constitutes acceptance of the updated policy.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Information</h2>
                        <p>For questions or concerns regarding this Refund Policy, please contact us:</p>
                        <p><strong>IDER SOLUTIONS (PVT) LTD</strong><br />
                            Email: yasas@idersolutions.com<br />
                            Website: idersolutions.com</p>

                        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                            <p className="text-gray-600 text-center">This Refund Policy is effective as of January 14, 2026 and applies to all services provided by IDER SOLUTIONS (PVT) LTD.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
