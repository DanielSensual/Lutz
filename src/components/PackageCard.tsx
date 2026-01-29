'use client';

import { useState } from 'react';
import { LUTPackage } from '@/data/packages';

interface PackageCardProps {
    pack: LUTPackage;
}

export function PackageCard({ pack }: PackageCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className="card group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsPlaying(false);
            }}
        >
            {/* Video/Thumbnail Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                {isPlaying ? (
                    <video
                        src={`https://api-f.streamable.com/api/v1/videos/${pack.demoVideoId}/mp4`}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        playsInline
                        muted
                    />
                ) : (
                    <>
                        <img
                            src={`https://cdn-cf-east.streamable.com/image/${pack.demoVideoId}.jpg?v=2`}
                            alt={pack.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Play Button */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            className={`absolute inset-0 z-10 grid place-items-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
                <button
                    className="btn-primary mt-5 w-full text-sm"
                    onClick={() => {
                        // TODO: Replace with actual Stripe link
                        alert('Stripe checkout coming soon!');
                    }}
                >
                    Buy Now
                </button>
            </div>
        </article>
    );
}
