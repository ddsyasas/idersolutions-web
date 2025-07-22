import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    width: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
    opacity: number;
  }>>([]);
  
  const [mouseTrail, setMouseTrail] = useState<Array<{ x: number; y: number; timestamp: number }>>([]);
  const heroRef = useRef<HTMLElement>(null);
  const [isMouseInHero, setIsMouseInHero] = useState(false);
  const [heroDimensions, setHeroDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  
  // Typing animation states
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'From Idea to Digital Reality';

  // Set client flag to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    if (!isClient) return;
    
    const generateParticles = () => {
      const newParticles = [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 3}px`,
        height: `${Math.random() * 6 + 3}px`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${8 + Math.random() * 6}s`,
        opacity: Math.random() * 0.5 + 0.3,
      }));
      setParticles(newParticles);
    };

    // Delay particle generation to ensure hydration is complete
    const timer = setTimeout(generateParticles, 100);
    return () => clearTimeout(timer);
  }, [isClient]);

  // Mouse trail effect
  useEffect(() => {
    if (!isClient) return;
    
    const updateHeroDimensions = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setHeroDimensions({ width: rect.width, height: rect.height });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only add point if it's within the hero section
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setIsMouseInHero(true);
        setMouseTrail(prev => {
          const newTrail = [...prev, { x, y, timestamp: Date.now() }];
          // Keep only the last 12 points for smooth trail
          return newTrail.slice(-12);
        });
      } else {
        setIsMouseInHero(false);
      }
    };

    const handleMouseLeave = () => {
      setIsMouseInHero(false);
      setMouseTrail([]);
    };

    // Update dimensions on mount and resize
    updateHeroDimensions();
    window.addEventListener('resize', updateHeroDimensions);

    // Clean up old trail points
    const cleanupInterval = setInterval(() => {
      setMouseTrail(prev => {
        const now = Date.now();
        return prev.filter(point => now - point.timestamp < 800); // Remove points older than 800ms
      });
    }, 50);

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', updateHeroDimensions);
      clearInterval(cleanupInterval);
    };
  }, [isClient]);

  // Typing animation effect
  useEffect(() => {
    if (!isClient) return;
    
    let index = 0;
    let timer: NodeJS.Timeout;

    const animate = () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        timer = setTimeout(animate, 100);
      } else {
        // Animation finished, hide cursor
        setShowCursor(false);
      }
    };

    animate();

    return () => clearTimeout(timer);
  }, [isClient, fullText]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating particles */}
      {isClient && (
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.width,
                height: particle.height,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse trail effect */}
      {isClient && (
        <svg 
          className="absolute inset-0 pointer-events-none" 
          style={{ zIndex: 5 }}
          width={heroDimensions.width}
          height={heroDimensions.height}
          viewBox={`0 0 ${heroDimensions.width} ${heroDimensions.height}`}
        >
          <defs>
            <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="16.66%" stopColor="#feca57" />
              <stop offset="33.33%" stopColor="#48dbfb" />
              <stop offset="50%" stopColor="#0abde3" />
              <stop offset="66.66%" stopColor="#ff9ff3" />
              <stop offset="83.33%" stopColor="#f368e0" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          {mouseTrail.length > 1 && (
            <path
              d={mouseTrail.map((point, index) => 
                `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
              ).join(' ')}
              stroke="url(#rainbow)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              style={{
                filter: 'blur(0.5px)',
              }}
            />
          )}
          {/* Debug: Show current mouse position */}
          {isMouseInHero && mouseTrail.length > 0 && (
            <circle
              cx={mouseTrail[mouseTrail.length - 1].x}
              cy={mouseTrail[mouseTrail.length - 1].y}
              r="3"
              fill="#ff6b6b"
              opacity="0.9"
            />
          )}
        </svg>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-ider-yellow">
            {isClient ? (
              <>
                {displayedText}
                {showCursor && <span className="animate-blink">|</span>}
              </>
            ) : (
              'From Idea to Digital Reality'
            )}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            We help you design, build, and scale your business or idea in digital space that drive results you want.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="group bg-ider-yellow text-ider-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center space-x-2 yellow-glow"
            >
              <span>🚀 Start Your Growth</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#portfolio"
              className="group bg-gray-800/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-2"
            >
              <Globe className="w-5 h-5" />
              <span>Explore Our Capabilities</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Happy Clients' },
              { number: '100+', label: 'Projects Completed' },
              { number: '24/7', label: 'Support' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-ider-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ider-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ider-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 