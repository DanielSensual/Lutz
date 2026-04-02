'use client';

import { PACKAGES } from '@/data/packages';

export function PricingComparison() {
  const punchy = PACKAGES.find(p => p.id === 'mediageekz-punchy');
  const neutral = PACKAGES.find(p => p.id === 'mediageekz-neutral');

  if (!punchy || !neutral) return null;

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container-center max-w-5xl px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Instant Access</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">
            Choose Your LUT
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Punchy Card — Featured */}
          <div className="relative p-8 rounded-3xl border-2 border-[#ff5c2b]/40 bg-gradient-to-b from-[#ff5c2b]/[0.08] to-transparent shadow-[0_0_60px_rgba(255,92,43,0.1)] flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white uppercase mb-2 text-center">Punchy</h3>
            <p className="text-white/40 text-sm text-center mb-6 font-light">Bold. Vibrant. Cinematic.</p>

            <div className="text-center mb-8">
              <span className="text-5xl font-black text-white">${punchy.price}</span>
              <span className="text-white/30 text-sm ml-2">one-time</span>
            </div>

            <div className="space-y-3 mb-10 flex-1">
              {punchy.features.slice(0, 5).map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-white/70 text-sm font-light">{f}</span>
                </div>
              ))}
            </div>

            {punchy.stripeLink ? (
              <a
                href={punchy.stripeLink}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 py-5 text-sm font-bold tracking-widest uppercase text-white shadow-[0_0_30px_rgba(255,92,43,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,92,43,0.6)]"
              >
                UNLOCK PUNCHY
              </a>
            ) : (
              <button className="w-full rounded-full bg-white/5 border border-white/10 px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/30 cursor-not-allowed" disabled>
                Coming Soon
              </button>
            )}
          </div>

          {/* Neutral Card */}
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col">
            <h3 className="text-2xl font-black tracking-tight text-white uppercase mb-2 text-center">Neutral</h3>
            <p className="text-white/40 text-sm text-center mb-6 font-light">Clean Base. True Color.</p>

            <div className="text-center mb-8">
              <span className="text-5xl font-black text-white">${neutral.price}</span>
              <span className="text-white/30 text-sm ml-2">one-time</span>
            </div>

            <div className="space-y-3 mb-10 flex-1">
              {neutral.features.slice(0, 5).map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span className="text-white/70 text-sm font-light">{f}</span>
                </div>
              ))}
            </div>

            {neutral.stripeLink ? (
              <a
                href={neutral.stripeLink}
                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-white/10 border border-white/20 px-8 py-5 text-sm font-bold tracking-widest uppercase text-white transition-all hover:bg-white/20 hover:scale-[1.03]"
              >
                UNLOCK NEUTRAL
              </a>
            ) : (
              <button className="w-full rounded-full bg-white/5 border border-white/10 px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/30 cursor-not-allowed" disabled>
                Coming Soon
              </button>
            )}
          </div>
        </div>

        {/* Bundle option */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm font-light">
            Want both? Save by purchasing individually — lifetime updates included on every LUT.
          </p>
        </div>
      </div>
    </section>
  );
}
