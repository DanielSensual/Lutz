export interface LUTPackage {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    features: string[];
    technicalDetails: string[];
    beforeImage: string;
    afterImage: string;
    demoVideoId: string;
    cubeFile: string;
    stripeLink?: string;
    accentColor: string;
}

export const PACKAGES: LUTPackage[] = [
    {
        id: "mediageekz-punchy",
        name: "Mediageekz Punchy",
        tagline: "Bold. Vibrant. Cinematic.",
        description: "High-contrast cinematic grading with rich, saturated colors and deep shadows. Designed for narrative filmmaking, music videos, and premium content that demands attention.",
        price: 49,
        features: [
            ".CUBE format (33×33×33)",
            "Premiere Pro, DaVinci, FCPX",
            "Optimized for S-Log3 & V-Log",
            "Skin tone protection built-in",
            "Installation guide included",
            "Lifetime updates"
        ],
        technicalDetails: [
            "Input: S-Log3, V-Log, C-Log",
            "Output: Rec.709 (punched)",
            "Contrast curve: Custom S-curve",
            "Saturation: +15% selective boost"
        ],
        beforeImage: "/images/before-punchy.jpg",
        afterImage: "/images/after-punchy.jpg",
        demoVideoId: "oiahyp",
        cubeFile: "/luts/mediageekz-punchy.cube",
        stripeLink: process.env.NEXT_PUBLIC_STRIPE_PUNCHY,
        accentColor: "#ff5c2b",
    },
    {
        id: "mediageekz-neutral",
        name: "Mediageekz Neutral",
        tagline: "Clean Base. True Color.",
        description: "A precise Slog3 to Rec.709 base conversion that delivers natural, broadcast-ready color. The perfect starting point before adding your own creative grade on top.",
        price: 49,
        features: [
            ".CUBE format (33×33×33)",
            "Premiere Pro, DaVinci, FCPX",
            "Sony S-Log3 → Rec.709",
            "Accurate white balance mapping",
            "Installation guide included",
            "Lifetime updates"
        ],
        technicalDetails: [
            "Input: Sony S-Log3 / S-Gamut3.Cine",
            "Output: Rec.709 (neutral)",
            "Gamma: Standard broadcast curve",
            "Color science: ACES-informed mapping"
        ],
        beforeImage: "/images/before-neutral.jpg",
        afterImage: "/images/after-neutral.jpg",
        demoVideoId: "uls3qh",
        cubeFile: "/luts/mediageekz-neutral.cube",
        stripeLink: process.env.NEXT_PUBLIC_STRIPE_NEUTRAL,
        accentColor: "#3b82f6",
    },
];
