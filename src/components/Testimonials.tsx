'use client';

interface Testimonial {
  name: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "JORDAN MILES",
    date: "02/15/2026",
    quote: "I've tried dozens of LUT packs over the years and always ended up tweaking everything from scratch. The Punchy LUT just works — drop it on, minor adjustments, and I'm delivering to clients within the hour. Complete game changer for my turnaround time."
  },
  {
    name: "SARAH CHEN",
    date: "01/28/2026",
    quote: "The Neutral LUT is exactly what I needed for my corporate work. Clean Rec.709 conversion that doesn't fight Sony's color science. I layer my own creative grade on top and the results are consistently broadcast-ready."
  },
  {
    name: "MARCUS REED",
    date: "03/05/2026",
    quote: "What sets these apart is the skin tone protection. I shoot a lot of documentary work with diverse subjects and these LUTs handle every skin tone beautifully without the weird color shifts I get from other packs."
  },
  {
    name: "ALEX TORRES",
    date: "12/10/2025",
    quote: "Switched from a popular $200 LUT pack to MediaGeekz and honestly the results are better. The Punchy look gives my music videos that expensive film quality that my artists love. Worth every penny."
  },
];

export function Testimonials() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container-center max-w-6xl px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase drop-shadow-lg">
            What Creators Say
          </h2>
          <p className="mt-6 text-sm text-[var(--accent)] font-bold uppercase tracking-[0.3em]">
            Real feedback from real filmmakers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[var(--accent)]/20 transition-all duration-500 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-black tracking-wider text-white uppercase">{t.name}</span>
                <span className="text-xs text-white/30 font-mono">{t.date}</span>
              </div>
              <p className="text-white/60 font-light leading-relaxed text-[1.05rem]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
