import Link from 'next/link';

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can bring your vision to life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 yellow-glow"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="bg-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
            >
              View Our Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
