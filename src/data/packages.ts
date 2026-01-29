export interface LUTPackage {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
    beforeImage: string;
    afterImage: string;
    // Using Streamable videos from MediaGeekz as demo content
    demoVideoId: string;
    stripeLink?: string;
}

export const PACKAGES: LUTPackage[] = [
    {
        id: "cinematic-essentials",
        name: "Cinematic Essentials",
        description: "The foundation of any professional grade. Warm shadows, smooth highlights, and that unmistakable film look.",
        price: 49,
        features: [
            "15 .cube LUT files",
            "Premiere Pro, DaVinci, FCPX compatible",
            "Installation guide included",
            "Lifetime updates"
        ],
        beforeImage: "/images/before-cinematic.jpg",
        afterImage: "/images/after-cinematic.jpg",
        demoVideoId: "oiahyp", // Using existing Streamable
    },
    {
        id: "miami-heat",
        name: "Miami Heat",
        description: "Vibrant teal and orange tones inspired by tropical sunsets. Perfect for travel, lifestyle, and summer content.",
        price: 49,
        features: [
            "12 .cube LUT files",
            "Optimized for outdoor footage",
            "Works with any camera",
            "Color matching guide"
        ],
        beforeImage: "/images/before-miami.jpg",
        afterImage: "/images/after-miami.jpg",
        demoVideoId: "uls3qh",
    },
    {
        id: "moody-noir",
        name: "Moody Noir",
        description: "Desaturated tones with lifted blacks and dramatic contrast. For dark, atmospheric storytelling.",
        price: 49,
        features: [
            "10 .cube LUT files",
            "Low-light optimized",
            "Includes LOG conversions",
            "Dark theme presets"
        ],
        beforeImage: "/images/before-noir.jpg",
        afterImage: "/images/after-noir.jpg",
        demoVideoId: "q3o595",
    },
    {
        id: "clean-commercial",
        name: "Clean Commercial",
        description: "Bright, punchy, and professional. The go-to for corporate videos, product shoots, and branded content.",
        price: 49,
        features: [
            "18 .cube LUT files",
            "Skin tone protection",
            "White balance correction",
            "Versatile for any brand"
        ],
        beforeImage: "/images/before-commercial.jpg",
        afterImage: "/images/after-commercial.jpg",
        demoVideoId: "57bmd5",
    },
];
