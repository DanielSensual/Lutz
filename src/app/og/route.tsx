import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#05060a",
          color: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255, 92, 43, 0.35) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(255, 122, 77, 0.25) 0%, transparent 60%)",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.3em", textTransform: "uppercase", color: "#ff7a4d" }}>
          MediaGeekz LUTs
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 28 }}>
          Cinematic Color Grading Packs
        </div>
        <div style={{ fontSize: 32, maxWidth: 900, marginTop: 24, color: "#c2c7d2" }}>
          Professional LUT packs for Premiere Pro, DaVinci Resolve, and Final Cut Pro.
        </div>
        <div
          style={{
            marginTop: 50,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 28px",
            borderRadius: 999,
            backgroundColor: "#ff5c2b",
            fontSize: 26,
            fontWeight: 600,
            width: 320,
          }}
        >
          Browse Packs
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
