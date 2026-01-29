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
            {/* Video/Thumbnail Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
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
                            className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 group-hover:opacity-100 focus-visible:opacity-100"
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
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Play Button */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            type="button"
                            className="absolute inset-0 z-10 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                            aria-label={`Preview ${pack.name}`}
                        >
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-lg font-bold text-[var(--bg)] shadow-2xl transition-transform duration-300 hover:scale-110">
                                ▶
                            </span>
                        </button>
                    </>
                )}

                {/* Price Badge */}
                <div className="absolute right-3 top-3 z-20 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-white shadow-lg">
                    ${pack.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-base font-semibold text-white">{pack.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)] line-clamp-2">
                    {pack.description}
                </p>

                {/* Features - Compact */}
                <ul className="mt-4 flex flex-wrap gap-2">
                    {pack.features.slice(0, 2).map((feature, i) => (
                        <li
                            key={i}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] text-[var(--muted)]"
                        >
                            <svg className="h-3 w-3 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Buy Button */}
                {canPurchase ? (
                    <a className="btn-primary mt-5 w-full text-sm" href={pack.stripeLink}>
                        Buy Now
                    </a>
                ) : (
                    <button className="btn-primary btn-disabled mt-5 w-full text-sm" type="button" disabled>
                        Coming Soon
                    </button>
                )}
            </div>
        </article>
    );
}
