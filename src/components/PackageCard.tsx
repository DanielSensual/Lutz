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
            onMouseLeave={() => {
                setIsPlaying(false);
            }}
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

                {/* Price Badge - More Prominent */}
                <div className="absolute right-3 top-3 z-20 rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-bold text-white shadow-xl shadow-[var(--accent)]/30">
                    ${pack.price}
                </div>
            </div>

            {/* Content - Enhanced Typography */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold tracking-tight text-white">{pack.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                    {pack.description}
                </p>

                {/* Features - Refined Badges */}
                <ul className="mt-5 flex flex-wrap gap-2">
                    {pack.features.slice(0, 2).map((feature, i) => (
                        <li
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--muted)]"
                        >
                            <svg className="h-3.5 w-3.5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Buy Button - Pushed to bottom */}
                <div className="mt-auto pt-6">
                    {canPurchase ? (
                        <a className="btn-primary w-full" href={pack.stripeLink}>
                            Buy Now
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
