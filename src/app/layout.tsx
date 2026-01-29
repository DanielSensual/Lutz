import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LUTs by MediaGeekz | Cinematic Color Grading Packs",
  description: "Professional LUT packs and cinematic color grading presets for Premiere Pro, DaVinci Resolve, and Final Cut Pro. Transform your footage instantly.",
  keywords: ["LUTs", "color grading", "video editing", "cinematic", "Premiere Pro", "DaVinci Resolve"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
