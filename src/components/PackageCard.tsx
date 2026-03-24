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

    return (
        <article
            className="card group"
            style={{ '--card-accent': pack.accentColor } as React.CSSProperties}
            onMouseLeave={() => setIsPlaying(false)}
        >
            {/* Video/Thumbnail Container - 9:16 Portrait */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-t-xl bg-black">
                {isPlaying ? (
                    <>
                        <video
                            src={videoUrl}
                            className="h-full w-full object-cover"
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
                            className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 backdrop-blur-sm text-sm font-semibold text-white opacity-0 transition-all duration-300 hover:bg-black/80 hover:scale-110 group-hover:opacity-100 focus-visible:opacity-100"
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
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                        {/* Play Button with Glow */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            type="button"
                            className="absolute inset-0 z-10 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                            aria-label={`Preview ${pack.name}`}
                        >
                            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-xl font-bold text-[var(--bg)] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                                ▶
                            </span>
                        </button>
                    </>
                )}

                {/* Price Badge */}
                <div
                    className="absolute right-3 top-3 z-20 rounded-full px-4 py-1.5 text-sm font-bold text-white shadow-xl"
                    style={{ background: pack.accentColor, boxShadow: `0 8px 24px ${pack.accentColor}40` }}
                >
                    ${pack.price}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                {/* Tagline */}
                <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: pack.accentColor }}>
                    {pack.tagline}
                </p>

                <h3 className="text-xl font-bold tracking-tight text-white">{pack.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">
                    {pack.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2">
                    {pack.features.map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-[var(--muted)]"
                        >
                            <svg className="h-4 w-4 flex-shrink-0" style={{ color: pack.accentColor }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Technical Details */}
                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Specs</p>
                    <div className="space-y-1">
                        {pack.technicalDetails.map((detail, i) => (
                            <p key={i} className="text-[11px] font-mono text-[var(--muted)] opacity-70">
                                {detail}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Buy Button */}
                <div className="mt-auto pt-6">
                    {canPurchase ? (
                        <a className="btn-primary w-full" href={pack.stripeLink}>
                            Buy Now — ${pack.price}
                        </a>
                    ) : (
                        <button className="btn-primary btn-disabled w-full" type="button" disabled>
                            Coming Soon
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}
