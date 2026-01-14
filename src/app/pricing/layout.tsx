import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transparent Pricing & Packages | IDER Solutions",
    description: "Clear, upfront pricing for all our digital growth services. Marketing, applications, SEO, and content solutions. Find the right package for your business.",
    keywords: [
        "pricing",
        "digital marketing pricing",
        "web development pricing",
        "SEO pricing",
        "affordable web design",
        "marketing packages"
    ],
    openGraph: {
        title: "Transparent Pricing & Packages | IDER Solutions",
        description: "Clear, upfront pricing for all our digital growth services. Find the right package for your business.",
        url: "https://idersolutions.com/pricing",
        images: [
            {
                url: 'https://idersolutions.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'IDER Solutions - Pricing',
            },
        ],
    },
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
