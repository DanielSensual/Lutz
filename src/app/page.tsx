import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { LutPreviewEngine } from "@/components/LutPreviewEngine";
import { ImageSlider } from "@/components/ImageSlider";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen bg-[#05060a] selection:bg-[var(--accent)] selection:text-white font-sans">
      {/* Hero Section */}
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

          <p className="fade-up fade-up-delay-2 mt-10 text-xl md:text-2xl leading-relaxed text-white/60 max-w-2xl mx-auto font-light" style={{ textWrap: 'balance' }}>
            Elevate your footage with the <strong className="font-medium text-white/90">Mediageekz Signature Collection.</strong> <br/>
            Get the exact looks we use for high-end commercial and narrative work.
          </p>

          <div className="fade-up fade-up-delay-3 mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="#collection" className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-10 py-5 text-sm font-bold tracking-widest uppercase text-black transition-transform hover:scale-[1.03] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-[var(--accent)] to-transparent" />
              Unlock The Collection
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#try-it" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-10 py-5 text-sm font-bold tracking-widest uppercase text-[var(--accent)] backdrop-blur-md transition-all hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/30">
              Try on Your Footage
            </a>
          </div>
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* The Master Collection Breakdown */}
      <section id="collection" className="relative container-center max-w-6xl px-6 py-40 z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">The Signature Collection</h2>
          <p className="mt-8 text-sm text-[var(--accent)] font-bold uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
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

      {/* Feature Focus / What's Included */}
      <section className="relative bg-[#05060a] py-40 overflow-hidden">
        <div className="container-center max-w-5xl px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
               Everything You Need. <br/><span className="text-[var(--accent)] drop-shadow-[0_0_20px_rgba(255,92,43,0.3)]">Nothing You Don&apos;t.</span>
             </h2>
             <p className="mt-8 text-xl text-white/50 font-light max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
               We stripped away the fluff and created two powerful tools that cover 99% of professional color grading scenarios.
             </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
             <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--accent)]/[0.05] transition-colors hover:bg-[var(--accent)]/[0.02] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🍿</div>
               <h3 className="text-xl font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Cinematic Contrast</h3>
               <p className="text-white/50 font-light leading-relaxed">Punchy delivers a custom S-Curve that rolls off highlights perfectly while maintaining deep, rich shadows.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--accent)]/[0.05] transition-colors hover:bg-[var(--accent)]/[0.02] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🎯</div>
               <h3 className="text-xl font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">True Skin Tones</h3>
               <p className="text-white/50 font-light leading-relaxed">Built from the ground up to protect skin tones. No more muddy faces or weird shifts when pushing saturation.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--accent)]/[0.05] transition-colors hover:bg-[var(--accent)]/[0.02] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">📺</div>
               <h3 className="text-xl font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Broadcast Ready</h3>
               <p className="text-white/50 font-light leading-relaxed">Neutral provides a mathematically precise Rec.709 conversion straight from S-Log3. The perfect clean base.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--accent)]/[0.05] transition-colors hover:bg-[var(--accent)]/[0.02] hover:border-[var(--accent)]/20 group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🎬</div>
               <h3 className="text-xl font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Industry Standard</h3>
               <p className="text-white/50 font-light leading-relaxed">High-quality 33x33x33 .CUBE files. Works instantly in DaVinci Resolve, Premiere Pro, and Final Cut.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/[0.01] border border-[var(--accent)]/[0.05] transition-colors hover:bg-[var(--accent)]/[0.02] hover:border-[var(--accent)]/20 lg:col-span-2 justify-center group">
               <div className="text-4xl mb-8 drop-shadow-md grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">♾️</div>
               <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase text-white group-hover:text-[var(--accent)] transition-colors duration-500">Lifetime Access</h3>
               <p className="text-white/50 font-light leading-relaxed max-w-lg mx-auto">Pay once. Keep them forever. You&apos;ll get free updates whenever we refine our color science and release new camera profiles.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* Visual Results Gallery */}
      <section id="results" className="relative container-center max-w-6xl px-6 py-40 z-10 flex flex-col items-center">
        <div className="text-center mb-20 flex flex-col items-center w-full">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">The Secret in Action</h2>
          <p className="mt-8 text-sm text-[var(--accent)] font-bold uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
            Drag the sliders to reveal the grade
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 w-full max-w-5xl mx-auto">
          <ImageSlider image="https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?auto=format&fit=crop&q=80&w=2000" title="Punchy / Neon City" />
          <ImageSlider image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" title="Neutral / Cinematic Red" />
          <ImageSlider image="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&q=80&w=2000" title="Punchy / Golden Hour" />
          <ImageSlider image="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" title="Neutral / Interior Setup" />
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="w-px h-32 bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent mx-auto" />

      {/* Try It — LUT Preview Engine */}
      <section id="try-it" className="relative container-center max-w-5xl px-6 py-40 z-10 flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] py-2 px-6 backdrop-blur-md mb-10 shadow-[0_0_20px_rgba(255,92,43,0.1)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Interactive Viewer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.05]">
            Stop Guessing. <br/><span className="text-[var(--accent)] drop-shadow-[0_0_20px_rgba(255,92,43,0.3)]">See The Results.</span>
          </h2>
          <p className="mt-8 text-xl text-white/50 font-light" style={{ textWrap: 'balance' }}>
            Upload your own S-Log3 footage and see the exact transformation right here in your browser. 100% private, no server uploads.
          </p>
        </div>

        <div className="w-full bg-white/[0.01] rounded-[2.5rem] p-4 sm:p-8 border border-[var(--accent)]/[0.1] shadow-[0_0_50px_rgba(255,92,43,0.05)]">
           <LutPreviewEngine />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative flex flex-col items-center justify-center py-48 px-6 text-center overflow-hidden border-t border-[var(--accent)]/[0.05] bg-gradient-to-t from-[var(--accent)]/[0.02] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_100%)] opacity-[0.03]" />
        
        <h2 className="relative z-10 text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter drop-shadow-2xl text-white">Upgrade Your Look.</h2>
        <p className="relative z-10 mt-10 text-xl text-white/50 font-light mb-16 max-w-xl mx-auto" style={{ textWrap: 'balance' }}>
          Join the creators using Mediageekz color science for their top-tier client work.
        </p>

        <a href="#collection" className="relative z-10 group inline-flex items-center justify-center gap-4 rounded-full bg-[var(--accent)] px-12 py-6 text-sm font-bold tracking-widest uppercase text-white shadow-[0_0_40px_rgba(255,92,43,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,92,43,0.6)] hover:bg-[#ff7a4d]">
          Get Instant Access
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-16 text-center border-t border-[var(--accent)]/[0.05]">
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
