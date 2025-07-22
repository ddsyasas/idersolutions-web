import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ider-dark to-ider-darker text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-ider-yellow mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-ider-grey max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/"
            className="group bg-ider-yellow text-ider-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center space-x-2 yellow-glow"
          >
            <span>Back to Home</span>
            <span>→</span>
          </a>
          <button
            onClick={() => window.history.back()}
            className="group glass-effect px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
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