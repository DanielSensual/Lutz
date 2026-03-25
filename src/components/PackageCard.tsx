'use client';

import { useState } from 'react';
import { LUTPackage } from '@/data/packages';

interface PackageCardProps {
    pack: LUTPackage;
}

export function PackageCard({ pack }: PackageCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://cdn-cf-east.streamable.com/image/${pack.demoVideoId}.jpg?v=2`;
    const videoUrl = `https://api-f.streamable.com/api/v1/videos/${pack.demoVideoId}/mp4`;
    const canPurchase = Boolean(pack.stripeLink);

    const isImageFirst = pack.order === 'imageFirst';

    return (
        <article
            className="group relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full rounded-[2.5rem] p-6 lg:p-12 border border-white/5 bg-gradient-to-b from-[#0a0c14] to-[#05060a] hover:border-white/10 transition-all duration-700 shadow-2xl"
            style={{ '--card-accent': pack.accentColor } as React.CSSProperties}
            onMouseLeave={() => setIsPlaying(false)}
        >
            {/* Visual Side */}
            <div className={`w-full lg:w-1/2 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] bg-black shadow-2xl flex-shrink-0 border border-white/[0.05] ${isImageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                {isPlaying ? (
                    <>
                        <video
                            src={videoUrl}
                            className="absolute inset-0 h-full w-full object-cover"
                            autoPlay
                            loop
                            playsInline
                            muted
                            preload="none"
                            poster={thumbnailUrl}
                        />
                        <button
                            type="button"
                            onClick={() => setIsPlaying(false)}
                            className="absolute right-6 top-6 z-20 grid h-12 w-12 place-items-center rounded-full bg-black/60 backdrop-blur-md text-lg font-semibold text-white transition-all duration-300 hover:bg-black/90 hover:scale-110 border border-white/20"
                            aria-label={`Stop preview for ${pack.name}`}
                        >
                            ✕
                        </button>
                    </>
                ) : (
                    <>
                        <img
                            src={thumbnailUrl}
                            alt={pack.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Dramatic Cinematic Vignette */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_150%)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                        <button
                            onClick={() => setIsPlaying(true)}
                            type="button"
                            className="absolute inset-0 z-10 grid place-items-center transition-opacity duration-500"
                            aria-label={`Preview ${pack.name}`}
                        >
                            <span className="grid h-24 w-24 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-3xl text-white shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">
                                <svg className="ml-2 w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                        </button>
                    </>
                )}
            </div>

            {/* Content Side - Perfectly Centered for Cinematic Look */}
            <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-8 ${isImageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
                
                {/* Accent Tag */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-2 px-5 mb-8 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ background: pack.accentColor, color: pack.accentColor }} />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] opacity-90 text-white">
                        {pack.tagline}
                    </span>
                </div>

                <h3 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 uppercase leading-[0.9] drop-shadow-2xl">
                    {pack.name.replace('Mediageekz ', '')}
                </h3>
                
                <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/70 mb-10 max-w-lg mx-auto" style={{ textWrap: 'balance' }}>
                    {pack.description}
                </p>

                {/* Vertical Divider */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto mb-10" />

                {/* Persuasive Marketing Copy - Centered List */}
                <div className="space-y-6 mb-12 max-w-lg mx-auto">
                    {pack.persuasiveCopy?.map((point, i) => (
                        <p key={i} className="text-[1.1rem] text-white/90 leading-relaxed font-light">
                            {point}
                        </p>
                    ))}
                </div>

                {/* Feature Tags Grid - Centered items */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-14 max-w-md mx-auto">
                    {pack.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white-[0.05] text-[11px] font-mono tracking-widest uppercase text-[var(--muted)]">
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: pack.accentColor }} />
                            {feature}
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-md mx-auto mt-auto">
                    {canPurchase ? (
                        <a 
                          href={pack.stripeLink}
                          className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-10 py-6 text-xl font-black uppercase tracking-[0.1em] text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_currentColor]"
                          style={{ color: 'black' }}
                        >
                            <span 
                              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                              style={{ background: `linear-gradient(45deg, transparent, ${pack.accentColor}40, transparent)` }} 
                            />
                            UNLOCK NOW — ${pack.price}
                        </a>
                    ) : (
                        <button className="flex w-full items-center justify-center rounded-full bg-white/5 border border-white/10 px-10 py-6 text-xl font-bold uppercase tracking-[0.1em] text-white/30 cursor-not-allowed" type="button" disabled>
                            Coming Soon
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}
