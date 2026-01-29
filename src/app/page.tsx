import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-32 text-center">
        {/* Gradient Orb */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] opacity-40"
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

          <h1 className="fade-up fade-up-delay-1 mt-8 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
            Cinematic Color.
            <br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)] bg-clip-text text-transparent">
              Instant Results.
            </span>
          </h1>

          <p className="fade-up fade-up-delay-2 mt-8 text-lg leading-relaxed text-[var(--muted)]">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pack) => (
            <PackageCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container-center max-w-4xl px-6 py-24">
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

      {/* FAQ Section */}
      <section className="container-center max-w-2xl px-6 py-24">
        <div className="text-center">
          <span className="section-label">Got questions?</span>
          <h2 className="section-title">FAQ</h2>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              q: "What software are these compatible with?",
              a: "Our LUTs work with Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, and any software that supports .cube files."
            },
            {
              q: "Will these work with my camera?",
              a: "Yes! LUTs work with footage from any camera — iPhone, Sony, Canon, Blackmagic, RED, and more."
            },
            {
              q: "Do I need technical skills to use LUTs?",
              a: "Not at all. Simply import the .cube file into your editing software and apply it. We include step-by-step guides."
            },
            {
              q: "Can I get a refund?",
              a: "Due to the digital nature of these products, we don't offer refunds. Preview the demos before purchasing."
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
      <footer className="border-t border-white/[0.06] px-6 py-16 text-center">
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
