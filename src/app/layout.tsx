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
  title: "MediaGeekz LUTs | Punchy & Neutral — Cinematic Color Grading",
  description: "Two professional LUTs by MediaGeekz: Punchy for bold cinematic color and Neutral for clean Slog3 to Rec.709 conversion. Try them on your footage in-browser before you buy.",
  keywords: ["LUTs", "color grading", "Slog3 to Rec709", "cinematic LUT", "Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "MediaGeekz"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MediaGeekz LUTs | Punchy & Neutral — Cinematic Color Grading",
    description: "Two professional LUTs by MediaGeekz: Punchy for bold cinematic color and Neutral for clean Slog3 to Rec.709 conversion. Try them on your footage in-browser.",
    url: "https://luts.mediageekz.com",
    siteName: "MediaGeekz LUTs",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "MediaGeekz Punchy and Neutral LUTs preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaGeekz LUTs | Punchy & Neutral — Cinematic Color Grading",
    description: "Two professional LUTs by MediaGeekz: Punchy for bold cinematic color and Neutral for clean Slog3 to Rec.709 conversion. Try them in-browser.",
    images: ["/og"],
  },
  verification: {
    other: {
      'msvalidate.01': '9773A1790F85EB5ECA06D86D9C9E00A7'
    }
  }
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
