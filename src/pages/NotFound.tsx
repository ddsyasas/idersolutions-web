import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-ider-yellow mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group bg-ider-yellow text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center space-x-2 yellow-glow"
          >
            <span>Back to Home</span>
            <span>→</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg text-gray-900 hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 