"use client";

/**
 * 🎅 CHRISTMAS EFFECT - Flying Santa Animation
 * 
 * This component creates a Santa with reindeer flying across the screen.
 * 
 * TO REMOVE AFTER CHRISTMAS:
 * 1. Delete this entire file
 * 2. Remove the import and <ChristmasEffects /> from src/app/layout.tsx
 * 3. Delete the entire src/components/christmas folder
 */

import { useEffect, useState } from "react";

export function SantaEffect() {
    const [isVisible, setIsVisible] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        // Start the first animation after a short delay
        const initialDelay = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Repeat the animation every 30-45 seconds
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setAnimationKey((prev) => prev + 1);
                setIsVisible(true);
            }, 500);
        }, 30000 + Math.random() * 15000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <style jsx global>{`
        @keyframes flyAcross {
          0% {
            transform: translateX(-200px) translateY(0);
          }
          25% {
            transform: translateX(25vw) translateY(-15px);
          }
          50% {
            transform: translateX(50vw) translateY(10px);
          }
          75% {
            transform: translateX(75vw) translateY(-10px);
          }
          100% {
            transform: translateX(calc(100vw + 200px)) translateY(0);
          }
        }

        @keyframes bobUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .santa-container {
          position: fixed;
          top: 80px;
          left: 0;
          pointer-events: none;
          z-index: 9998;
          animation: flyAcross 12s ease-in-out forwards;
        }

        .santa-sleigh {
          display: flex;
          align-items: center;
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
          animation: bobUpDown 0.8s ease-in-out infinite;
        }

        .reindeer {
          margin-right: -8px;
          animation: bobUpDown 0.6s ease-in-out infinite;
          animation-delay: 0.1s;
        }

        .santa {
          font-size: 2.8rem;
        }

        .trail {
          position: absolute;
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 8px;
          opacity: 0.6;
        }

        .sparkle {
          font-size: 0.8rem;
          animation: twinkle 0.5s ease-in-out infinite alternate;
        }

        .sparkle:nth-child(2) {
          animation-delay: 0.1s;
        }

        .sparkle:nth-child(3) {
          animation-delay: 0.2s;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

            <div key={animationKey} className="santa-container" aria-hidden="true">
                <div className="santa-sleigh">
                    <span className="trail">
                        <span className="sparkle">✨</span>
                        <span className="sparkle">⭐</span>
                        <span className="sparkle">✨</span>
                    </span>
                    <span className="reindeer">🦌</span>
                    <span className="reindeer">🦌</span>
                    <span className="santa">🎅</span>
                    <span style={{ marginLeft: "-10px" }}>🛷</span>
                </div>
            </div>
        </>
    );
}
