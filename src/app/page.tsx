import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { LutPreviewEngine } from "@/components/LutPreviewEngine";
import { ImageSlider } from "@/components/ImageSlider";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { PricingComparison } from "@/components/PricingComparison";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen bg-[#05060a] selection:bg-[var(--accent)] selection:text-white font-sans">

      {/* ═══════════════════════════════════════
          SOCIAL PROOF BAR — Above everything
          ═══════════════════════════════════════ */}
      <div className="relative z-20 flex items-center justify-center gap-3 py-3 bg-[var(--accent)]/[0.06] border-b border-[var(--accent)]/10">
        <span className="text-[var(--accent)] text-sm">★★★★★</span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          Trusted by <span className="text-white">500+</span> Filmmakers
        </span>
        <span className="text-[var(--accent)] text-lg">⚡️</span>
      </div>

      {/* ═══════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-40 text-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/hero/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05060a_100%)] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060a]/60 via-[#05060a]/20 to-[#05060a]" />

        <div className="relative z-10 container-center max-w-4xl px-6 flex flex-col items-center text-center">
          <div className="fade-up inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] py-2 px-6 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(255,92,43,0.1)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">The Secret to Cinematic Color</span>
          </div>

          <h1 className="fade-up fade-up-delay-1 text-5xl font-black leading-[1.1] tracking-tighter text-white sm:text-7xl md:text-8xl drop-shadow-2xl uppercase max-w-4xl mx-auto">
            Professional Grades.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#ffad85] drop-shadow-[0_0_30px_rgba(255,92,43,0.4)]">
              Zero Guesswork.
            </span>
          </h1>

          <p className="fade-up fade-up-delay-2 mt-10 text-xl md:text-2xl leading-relaxed text-white/60 max-w-2xl mx-auto font-light" style={{ textWrap: 'balance' as const }}>
            Elevate your footage with the <strong className="font-medium text-white/90">Mediageekz Signature Collection.</strong> <br/>
            Get the exact looks we use for high-end commercial and narrative work.
          </p>

          <div className="fade-up fade-up-delay-3 mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="#collection" className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-[var(--accent)] px-12 py-6 text-sm font-bold tracking-widest uppercase text-white transition-all hover:scale-[1.03] shadow-[0_0_40px_rgba(255,92,43,0.4)] hover:shadow-[0_0_60px_rgba(255,92,43,0.6)]">
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r from-white to-transparent" />
              Unlock The Collection
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#try-it" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-10 py-5 text-sm font-bold tracking-widest uppercase text-white/70 backdrop-blur-md transition-all hover:bg-white/[0.06] hover:border-white/20 hover:text-white">
              Try on Your Footage
            </a>
          </div>

          {/* Payment Icons */}
          <div className="fade-up fade-up-delay-3 mt-10 flex items-center justify-center gap-4 opacity-30">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">Instant Download</span>
            <span className="text-white/20">•</span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">Lifetime Updates</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR — Compatible Software
          ═══════════════════════════════════════ */}
      <TrustBar />

      {/* ═══════════════════════════════════════
          SECTION: "Consistent Cinematic Colors"
          Hero-sized Before/After Sliders (like Secret Sauce)
          ═══════════════════════════════════════ */}
      <section id="results" className="relative py-40 z-10">
        <div className="container-center max-w-6xl px-6 flex flex-col items-center">
          <div className="text-center mb-6 flex flex-col items-center w-full">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Instant Access // No Advanced Experience Required</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">
              Consistent Cinematic Colors,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#ffad85]">Without The Guesswork</span>
            </h2>
          </div>

          <p className="text-center text-white/40 text-sm font-bold uppercase tracking-[0.3em] mb-24">
            Drag the sliders to reveal the grade
          </p>

          {/* Full-width sliders — one per look, stacked vertically like Secret Sauce */}
          <div className="flex flex-col gap-28 w-full max-w-5xl">
            <ImageSlider
              image="https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?auto=format&fit=crop&q=80&w=2000"
              title="NEON CITY"
              lutNumber="01"
              subtitle="Used on our cinematic Miami nightlife commercial — Punchy LUT"
            />
            <ImageSlider
              image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000"
              title="CINEMATIC RED"
              lutNumber="02"
              subtitle="Used for narrative film work and music video grading — Punchy LUT"
            />
            <ImageSlider
              image="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&q=80&w=2000"
              title="GOLDEN HOUR"
              lutNumber="03"
              subtitle="Our go-to for outdoor commercial and real estate work — Punchy LUT"
            />
            <ImageSlider
              image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000"
              title="STUDIO CLEAN"
              lutNumber="04"
              subtitle="Perfect for interviews, corporate, and broadcast delivery — Neutral LUT"
            />
          </div>
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          "NOT JUST ANOTHER LUT PACK" Section
          ═══════════════════════════════════════ */}
      <section className="relative bg-[#05060a] py-40 overflow-hidden">
        <div className="container-center max-w-5xl px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 flex flex-col items-center">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1]">
               Not Just<br/><span className="text-[var(--accent)] drop-shadow-[0_0_20px_rgba(255,92,43,0.3)]">Another LUT Pack.</span>
             </h2>
             <p className="mt-8 text-xl text-white/50 font-light max-w-2xl mx-auto" style={{ textWrap: 'balance' as const }}>
               Built from real feedback, tested on diverse footage, and focused on what actually works on real projects.
             </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🎯</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Designed for Real Use</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">Just 2 refined LUTs: no fluff, no overwhelm. These are the exact looks used on real client work and passion projects.</p>
             </div>
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">💰</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Save Money, Save Time</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">No more separate purchases for different looks. Everything you need to cover cinematic and broadcast work — in one place.</p>
             </div>
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">📷</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Works With Any Camera</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">Tested across Sony, Canon, Panasonic, and Blackmagic cameras. Convert to Rec.709 — plug and play.</p>
             </div>
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🧪</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Tested, Refined, Proven</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">Every look was developed and tested on real footage from dozens of filmmakers and refined through hundreds of projects.</p>
             </div>
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🎨</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">True Skin Tones</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">Built from the ground up to protect skin tones. No more muddy faces or weird shifts when pushing saturation.</p>
             </div>
             <div className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/[0.01] border border-white/[0.05] transition-all duration-500 hover:bg-[var(--accent)]/[0.03] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">♾️</div>
               <h3 className="text-lg font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Lifetime Updates</h3>
               <p className="text-white/50 font-light leading-relaxed text-sm">Pay once. Keep them forever. Every update, improvement, and camera profile refinement — free, forever.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          FIRST PRICING SECTION
          ═══════════════════════════════════════ */}
      <PricingComparison />

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          THE COLLECTION — Deep Dive Cards
          ═══════════════════════════════════════ */}
      <section id="collection" className="relative container-center max-w-6xl px-6 py-40 z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Deep Dive</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">The Signature Collection</h2>
          <p className="mt-8 text-sm text-white/40 font-bold uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
            2 Premium LUTs <span className="mx-2 opacity-40 text-white">•</span> Instant Download <span className="mx-2 opacity-40 text-white">•</span> Lifetime Updates
          </p>
        </div>

        <div className="flex flex-col gap-32 relative w-full items-center">
          {PACKAGES.map((pack) => (
            <PackageCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════ */}
      <Testimonials />

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          Try It — LUT Preview Engine
          ═══════════════════════════════════════ */}
      <section id="try-it" className="relative container-center max-w-5xl px-6 py-40 z-10 flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] py-2 px-6 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(255,92,43,0.1)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Interactive Viewer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05]">
            Stop Guessing. <br/><span className="text-[var(--accent)] drop-shadow-[0_0_20px_rgba(255,92,43,0.3)]">See The Results.</span>
          </h2>
          <p className="mt-8 text-xl text-white/50 font-light" style={{ textWrap: 'balance' as const }}>
            Upload your own S-Log3 footage and see the exact transformation right here in your browser. 100% private, no server uploads.
          </p>
        </div>

        <div className="w-full bg-white/[0.01] rounded-[2.5rem] p-4 sm:p-8 border border-[var(--accent)]/[0.1] shadow-[0_0_50px_rgba(255,92,43,0.05)]">
           <LutPreviewEngine />
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* ═══════════════════════════════════════
          SECOND PRICING CTA (Repeated — like Secret Sauce)
          ═══════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center py-48 px-6 text-center overflow-hidden border-t border-[var(--accent)]/[0.05] bg-gradient-to-t from-[var(--accent)]/[0.02] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-[0.03]" />
        
        <span className="relative z-10 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-6">Instant Access</span>
        <h2 className="relative z-10 text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl text-white">Upgrade Your Look.</h2>
        <p className="relative z-10 mt-10 text-xl text-white/50 font-light mb-16 max-w-xl mx-auto" style={{ textWrap: 'balance' as const }}>
          Join the creators using Mediageekz color science for their top-tier client work.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
          <a href="#collection" className="group inline-flex items-center justify-center gap-4 rounded-full bg-[var(--accent)] px-12 py-6 text-sm font-bold tracking-widest uppercase text-white shadow-[0_0_40px_rgba(255,92,43,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,92,43,0.6)] hover:bg-[#ff7a4d]">
            Get Instant Access
          </a>
          <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Starting at $49</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="bg-black px-6 py-16 text-center border-t border-white/[0.04]">
        <div className="container-center max-w-6xl flex flex-col items-center gap-8">
          <a
            href="https://mediageekz.com"
            className="text-[10px] text-[var(--accent)]/60 font-bold uppercase tracking-[0.3em] hover:text-[var(--accent)] transition-colors"
          >
            MediaGeekz.com ↗
          </a>
          <p className="text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} MediaGeekz. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
