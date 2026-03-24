import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { LutPreviewEngine } from "@/components/LutPreviewEngine";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/hero/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        {/* Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Gradient Orb */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 92, 43, 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: 'translateX(-50%)',
          }}
        />

        <div className="relative z-10 container-center max-w-3xl px-6">
          {/* Badge */}
          <div className="fade-up inline-block rounded-full bg-[var(--accent-soft)] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-bright)]">
            Professional Color Grading by MediaGeekz
          </div>

          <h1 className="fade-up fade-up-delay-1 mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl" style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
            Two Looks.
            <br />
            <span
              className="inline-block transition-all duration-300 cursor-default hover:drop-shadow-[0_0_30px_rgba(251,146,60,0.9)]"
              style={{
                background: 'linear-gradient(to right, #fb923c, #f97316, #facc15)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: 'none',
              }}
            >
              Infinite Possibilities.
            </span>
          </h1>

          <p className="fade-up fade-up-delay-2 mt-8 text-lg leading-relaxed text-white/90" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.7)' }}>
            <strong>Mediageekz Punchy</strong> for bold cinematic color and <strong>Mediageekz Neutral</strong> for clean Slog3→709 conversion. Try them on your own footage — right in the browser.
          </p>

          <div className="fade-up fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#packages" className="btn-primary">
              See the LUTs — $49 each
            </a>
            <a href="#try-it" className="btn-secondary">
              Try on Your Footage
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 animate-bounce opacity-40" style={{ transform: 'translateX(-50%)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Packages Section — 2 Cards */}
      <section id="packages" className="container-center max-w-5xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">Choose Your Grade</span>
          <h2 className="section-title">Two LUTs. Crafted for Filmmakers.</h2>
          <p className="section-desc container-center">
            Each LUT is hand-tuned by the MediaGeekz color team. Whether you need punchy cinematic impact or a clean broadcast base — we&apos;ve got you covered.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-4xl container-center">
          {PACKAGES.map((pack) => (
            <PackageCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      {/* Try It — LUT Preview Engine */}
      <section id="try-it" className="container-center max-w-5xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">Try Before You Buy</span>
          <h2 className="section-title">Preview on Your Own Footage</h2>
          <p className="section-desc container-center">
            Upload a short clip and see exactly how our LUTs transform your footage — all processed right in your browser. Nothing gets uploaded to any server.
          </p>
        </div>

        <div className="mt-14">
          <LutPreviewEngine />
        </div>
      </section>

      {/* About Our LUTs — Technical Section */}
      <section className="container-center max-w-4xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">The Technical Details</span>
          <h2 className="section-title">Built for Professional Workflows</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {/* Punchy */}
          <div className="glass-panel rounded-[var(--radius-lg)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-3 w-3 rounded-full" style={{ background: '#ff5c2b' }} />
              <h3 className="text-lg font-bold text-white">Mediageekz Punchy</h3>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)] mb-6">
              A custom S-curve contrast with selective saturation boost. Designed for narrative filmmaking, music videos, and premium content. Shadows are deep and rich, highlights roll off naturally, and skin tones are protected through the entire pipeline.
            </p>
            <div className="space-y-2">
              {['Input: S-Log3, V-Log, C-Log', 'Output: Rec.709 (punched)', 'Custom S-curve contrast', 'Selective saturation boost (+15%)'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5c2b]" />
                  <span className="font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral */}
          <div className="glass-panel rounded-[var(--radius-lg)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-3 w-3 rounded-full" style={{ background: '#3b82f6' }} />
              <h3 className="text-lg font-bold text-white">Mediageekz Neutral</h3>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)] mb-6">
              A precise base conversion from Sony S-Log3 / S-Gamut3.Cine to Rec.709. Delivers natural, broadcast-ready color with accurate white balance mapping. The perfect starting point before adding your own creative grade.
            </p>
            <div className="space-y-2">
              {['Input: Sony S-Log3 / S-Gamut3.Cine', 'Output: Rec.709 (neutral)', 'Standard broadcast gamma curve', 'ACES-informed color mapping'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />
                  <span className="font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container-center max-w-4xl px-6 py-32">
        <div className="glass-panel rounded-[var(--radius-lg)] p-10 sm:p-14">
          <div className="text-center">
            <span className="section-label">Every purchase includes</span>
            <h2 className="section-title">What&apos;s in the Box</h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: "📦",
                title: ".CUBE Files (33×33×33)",
                desc: "Industry-standard 3D LUT format compatible with all major editing software."
              },
              {
                icon: "📖",
                title: "Install Guide",
                desc: "Step-by-step setup for Premiere Pro, DaVinci Resolve, and Final Cut Pro."
              },
              {
                icon: "♾️",
                title: "Lifetime Access",
                desc: "Download anytime. Free updates as we refine the color science."
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-3xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container-center max-w-4xl px-6 py-32">
        <div className="text-center">
          <span className="section-label">Real Results</span>
          <h2 className="section-title">What Creators Say</h2>
          <p className="section-desc container-center">
            Join filmmakers using MediaGeekz LUTs to transform their footage.
          </p>
        </div>

        {/* Video Testimonial */}
        <div className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40 shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://streamable.com/e/fk1lvr?autoplay=0&loop=0&muted=0&nocontrols=0"
                className="h-full w-full"
                allowFullScreen
                allow="autoplay; fullscreen"
              />
            </div>
            {/* Video Label */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-xs font-medium text-white">Video Testimonial</span>
            </div>
          </div>
          {/* Client Attribution */}
          <div className="mt-6 text-center">
            <p className="text-base font-medium text-white">Erica Plazibat</p>
            <p className="text-sm text-[var(--muted)]">Assistant Director, Quest Star</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-center max-w-xs">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* FAQ Section */}
      <section className="container-center max-w-2xl px-6 py-32">
        <div className="text-center">
          <span className="section-label">Have Questions?</span>
          <h2 className="section-title">Frequently Asked</h2>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              q: "What's the difference between Punchy and Neutral?",
              a: "Mediageekz Punchy delivers a stylized cinematic grade with enhanced contrast and saturation — perfect for music videos, narrative content, and social media. Mediageekz Neutral is a clean Slog3 to Rec.709 base conversion that gives you broadcast-ready color as a starting point for your own creative grade."
            },
            {
              q: "Do I need to shoot in S-Log3?",
              a: "The LUTs are optimized for Sony S-Log3 footage, but they also work beautifully with V-Log (Panasonic), C-Log (Canon), and even standard Rec.709 footage. Results will always look best with LOG-format input."
            },
            {
              q: "What software are these compatible with?",
              a: "Both LUTs are standard .CUBE format (33×33×33) and work with Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, and any application that supports .cube files."
            },
            {
              q: "How does the in-browser preview work?",
              a: "We use FFmpeg WebAssembly to process your video entirely on your device. Your footage never leaves your computer — it's 100% private. Just upload a short clip, pick a LUT, and see the result in seconds."
            },
            {
              q: "Will these work with my camera?",
              a: "Yes! LUTs are camera-agnostic. They work with footage from Sony, Canon, Panasonic, Blackmagic, RED, iPhone, and any other source. For best results, shoot in a LOG profile."
            },
            {
              q: "Can I get a refund?",
              a: "Due to the digital nature of these products, we don't offer refunds once downloaded. That's exactly why we built the in-browser preview — so you can try them on your own footage before buying."
            }
          ].map((faq, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer items-center justify-between text-[15px] font-medium text-white">
                <span>{faq.q}</span>
                <span className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm text-[var(--accent)] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 pr-10 text-sm leading-relaxed text-[var(--muted)]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/[0.06] px-6 py-20 text-center">
        <div className="container-center max-w-md">
          <p className="text-2xl font-semibold text-white">
            Ready to elevate your footage?
          </p>
          <a href="#packages" className="btn-primary mt-6 inline-flex">
            Get Your LUTs — $49
          </a>
        </div>
        <div className="mt-12 space-y-2">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} MediaGeekz. All rights reserved.
          </p>
          <a
            href="https://mediageekz.com"
            className="inline-block text-xs text-[var(--muted)] opacity-60 transition hover:text-white hover:opacity-100"
          >
            ← Back to MediaGeekz.com
          </a>
        </div>
      </footer>
    </main>
  );
}
