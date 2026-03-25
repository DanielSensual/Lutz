export interface LUTPackage {
    id: string;
    name: string;
    tagline: string;
    description: string;
    persuasiveCopy: string[];
    price: number;
    features: string[];
    technicalDetails: string[];
    beforeImage: string;
    afterImage: string;
    demoVideoId: string;
    cubeFile: string;
    stripeLink?: string;
    accentColor: string;
    order: "imageFirst" | "textFirst";
}

export const PACKAGES: LUTPackage[] = [
    {
        id: "mediageekz-punchy",
        name: "Mediageekz Punchy",
        tagline: "Bold. Vibrant. Cinematic.",
        description: "High-contrast cinematic grading with rich, saturated colors and deep shadows. Designed for narrative filmmaking, music videos, and premium content that demands attention.",
        persuasiveCopy: [
            "Instantly transform flat S-Log3 into a rich, contrasty, cinematic look without having to dial in nodes.",
            "Say goodbye to tweaking curves for hours. Punchy delivers immediate impact with perfectly balanced rolloff.",
            "Protects skin tones natively while selectively boosting vibrant secondary colors to make your footage pop.",
            "This is the exact look we use to give high-end commercial work that expensive 'film' edge."
        ],
        price: 49,
        features: [
            ".CUBE format (33×33×33) for universal compatibility",
            "Works flawlessly in Premiere, DaVinci, FCPX",
            "Optimized for Sony S-Log3 & V-Log",
            "Advanced skin tone protection built-in",
            "Step-by-step installation guide included",
            "Lifetime updates as we refine the science"
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
        order: "imageFirst"
    },
    {
        id: "mediageekz-neutral",
        name: "Mediageekz Neutral",
        tagline: "Clean Base. True Color.",
        description: "A precise Slog3 to Rec.709 base conversion that delivers natural, broadcast-ready color. The perfect starting point before adding your own creative grade on top.",
        persuasiveCopy: [
            "Stop fighting Sony's color science. Neutral maps your colors naturally and instantly.",
            "Designed perfectly for documentaries, corporate interviews, and rapid broadcast delivery.",
            "A mathematically precise Rec.709 conversion straight from S-Log3/S-Gamut3.Cine.",
            "Provides an unopinionated, immaculate canvas for you to paint your own creative grades on."
        ],
        price: 49,
        features: [
            ".CUBE format (33×33×33) for universal compatibility",
            "Works flawlessly in Premiere, DaVinci, FCPX",
            "Sony S-Log3 → Rec.709 specific mapping",
            "Flawless white balance mapping algorithms",
            "Step-by-step installation guide included",
            "Lifetime updates as we refine the science"
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
        order: "textFirst"
    },
];
