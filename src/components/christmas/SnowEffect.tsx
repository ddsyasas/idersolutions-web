"use client";

/**
 * ❄️ CHRISTMAS EFFECT - Snow Falling Animation
 * 
 * This component creates a festive snow falling effect across the website.
 * 
 * TO REMOVE AFTER CHRISTMAS:
 * 1. Delete this entire file
 * 2. Remove the import and <ChristmasEffects /> from src/app/layout.tsx
 * 3. Delete the entire src/components/christmas folder
 */

import { useEffect, useState } from "react";

interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    animationDelay: number;
    size: number;
    opacity: number;
}

export function SnowEffect() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = [];
        const numFlakes = 50;

        for (let i = 0; i < numFlakes; i++) {
            flakes.push({
                id: i,
                left: Math.random() * 100,
                animationDuration: 5 + Math.random() * 10,
                animationDelay: Math.random() * 5,
                size: 3 + Math.random() * 7,
                opacity: 0.4 + Math.random() * 0.6,
            });
        }

        setSnowflakes(flakes);
    }, []);

    return (
        <>
            <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          25% {
            transform: translateY(25vh) translateX(10px);
          }
          50% {
            transform: translateY(50vh) translateX(-10px);
          }
          75% {
            transform: translateY(75vh) translateX(10px);
          }
          100% {
            transform: translateY(110vh) translateX(0);
          }
        }

        .snowflake {
          position: fixed;
          top: -10px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4);
          pointer-events: none;
          z-index: 9999;
          animation: snowfall linear infinite;
        }
      `}</style>

            <div
                className="fixed inset-0 pointer-events-none overflow-hidden"
                style={{ zIndex: 9999 }}
                aria-hidden="true"
            >
                {snowflakes.map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake"
                        style={{
                            left: `${flake.left}%`,
                            width: `${flake.size}px`,
                            height: `${flake.size}px`,
                            opacity: flake.opacity,
                            animationDuration: `${flake.animationDuration}s`,
                            animationDelay: `${flake.animationDelay}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}
