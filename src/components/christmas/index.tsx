"use client";

/**
 * 🎄 CHRISTMAS EFFECTS BUNDLE
 * 
 * This file bundles all Christmas-themed effects for easy management.
 * 
 * ============================================
 * TO REMOVE ALL CHRISTMAS EFFECTS AFTER THE HOLIDAYS:
 * ============================================
 * 
 * 1. In src/app/layout.tsx:
 *    - Remove: import { ChristmasEffects } from "@/components/christmas";
 *    - Remove: <ChristmasEffects />
 * 
 * 2. Delete the entire folder: src/components/christmas/
 * 
 * That's it! Two simple steps to remove all holiday decorations. 🎅
 * ============================================
 */

import { SnowEffect } from "./SnowEffect";
import { SantaEffect } from "./SantaEffect";

export function ChristmasEffects() {
    return (
        <>
            {/* ❄️ Falling Snow Animation */}
            <SnowEffect />

            {/* 🎅 Flying Santa Animation */}
            <SantaEffect />
        </>
    );
}

// Re-export individual effects if needed
export { SnowEffect } from "./SnowEffect";
export { SantaEffect } from "./SantaEffect";
