import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - 404 Error',
  description: 'The page you are looking for could not be found. Please check the URL or return to our homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ider-dark to-ider-darker text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-ider-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you are looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-ider-primary hover:bg-ider-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Return to Homepage
          </Link>
          
          <div className="text-sm text-gray-400">
            <p>Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/#services" className="hover:text-ider-primary transition-colors">
                Our Services
              </Link>
              <Link href="/#portfolio" className="hover:text-ider-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/#about" className="hover:text-ider-primary transition-colors">
                About Us
              </Link>
              <Link href="/#contact" className="hover:text-ider-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-xs text-gray-500">
          <p>If you believe this is an error, please contact us at{' '}
            <a href="mailto:contact@idersolutions.com" className="text-ider-primary hover:underline">
              contact@idersolutions.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 