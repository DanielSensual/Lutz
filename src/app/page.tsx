import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

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
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        {/* Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-black/30" />

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
            Professional Color Grading
          </div>

          <h1 className="fade-up fade-up-delay-1 mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl" style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
            Cinematic Color.
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
              Instant Results.
            </span>
          </h1>

          <p className="fade-up fade-up-delay-2 mt-8 text-lg leading-relaxed text-white/90" style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.7)' }}>
            Professional LUT packs designed for filmmakers and content creators. One-click color grading that makes your footage look like a movie.
          </p>

          <div className="fade-up fade-up-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="#packages" className="btn-primary">
              Browse Packs — $49 each
            </a>
            <a href="#demo" className="btn-secondary">
              See the Difference
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

      {/* Before/After Demo Section */}
      <section id="demo" className="container-center max-w-4xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">Drag to compare</span>
          <h2 className="section-title">See the Transformation</h2>
          <p className="section-desc container-center">
            Our LUTs enhance your footage while preserving natural skin tones and details.
          </p>
        </div>

        <div className="mt-14">
          <BeforeAfterSlider
            beforeSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop&sat=-100"
            afterSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop"
            alt="Before and after LUT comparison"
          />
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="container-center max-w-6xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">All packs $49</span>
          <h2 className="section-title">Choose Your Look</h2>
          <p className="section-desc container-center">
            Each pack is crafted for a specific mood. Find the one that matches your creative vision.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pack) => (
            <PackageCard key={pack.id} pack={pack} />
          ))}
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
                title: ".CUBE Files",
                desc: "Industry-standard format compatible with all major software."
              },
              {
                icon: "📖",
                title: "Install Guide",
                desc: "Step-by-step tutorials for Premiere, Resolve, and FCPX."
              },
              {
                icon: "♾️",
                title: "Lifetime Access",
                desc: "Download anytime. Free updates included."
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
            Join hundreds of filmmakers using MediaGeekz LUTs to transform their footage.
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
          <p className="section-desc container-center">
            Everything you need to know about our LUT packs.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              q: "What software are these compatible with?",
              a: "Our LUTs work seamlessly with all major editing software including Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, and any application that supports .cube files."
            },
            {
              q: "Will these work with my camera?",
              a: "Absolutely! LUTs are camera-agnostic and work beautifully with footage from any source — iPhone, Sony, Canon, Blackmagic, RED, and more."
            },
            {
              q: "Do I need technical skills to use LUTs?",
              a: "Not at all. Simply drag and drop the .cube file into your editing software and apply it to your footage. Each pack includes step-by-step installation guides for every major platform."
            },
            {
              q: "Can I get a refund?",
              a: "Due to the digital nature of these products, we don't offer refunds once downloaded. We encourage you to preview all demos thoroughly before purchasing."
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
            Get Started — $49
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
