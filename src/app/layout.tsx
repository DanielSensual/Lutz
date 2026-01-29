import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luts.mediageekz.com"),
  title: "LUTs by MediaGeekz | Cinematic Color Grading Packs",
  description: "Professional LUT packs and cinematic color grading presets for Premiere Pro, DaVinci Resolve, and Final Cut Pro. Transform your footage instantly.",
  keywords: ["LUTs", "color grading", "video editing", "cinematic", "Premiere Pro", "DaVinci Resolve"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LUTs by MediaGeekz | Cinematic Color Grading Packs",
    description: "Professional LUT packs and cinematic color grading presets for Premiere Pro, DaVinci Resolve, and Final Cut Pro. Transform your footage instantly.",
    url: "https://luts.mediageekz.com",
    siteName: "MediaGeekz LUTs",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "MediaGeekz LUT packs preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUTs by MediaGeekz | Cinematic Color Grading Packs",
    description: "Professional LUT packs and cinematic color grading presets for Premiere Pro, DaVinci Resolve, and Final Cut Pro. Transform your footage instantly.",
    images: ["/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
