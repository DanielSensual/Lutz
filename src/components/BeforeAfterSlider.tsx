'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    alt?: string;
}

export function BeforeAfterSlider({ beforeSrc, afterSrc, alt = "Before and after comparison" }: BeforeAfterSliderProps) {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setPosition(percentage);
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    }, [handleMove]);

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleClick = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={containerRef}
            className="comparison-slider aspect-video w-full select-none"
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            onClick={handleClick}
            role="slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={alt}
            tabIndex={0}
        >
            {/* Before Image (Bottom layer - full) */}
            <div className="before">
                <img
                    src={beforeSrc}
                    alt="Before"
                    className="h-full w-full object-cover"
                    draggable={false}
                />
            </div>

            {/* After Image (Top layer, clipped) */}
            <div
                className="after"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <img
                    src={afterSrc}
                    alt="After"
                    className="h-full w-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Labels */}
            <span
                className="absolute left-4 top-4 z-20 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm"
                style={{ opacity: position > 15 ? 1 : 0, transition: 'opacity 0.2s' }}
            >
                Before
            </span>
            <span
                className="absolute right-4 top-4 z-20 rounded-lg bg-[var(--accent)]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                style={{ opacity: position < 85 ? 1 : 0, transition: 'opacity 0.2s' }}
            >
                After
            </span>

            {/* Divider Line */}
            <div
                className="divider"
                style={{ left: `${position}%` }}
            />

            {/* Drag Handle */}
            <div
                className="handle"
                style={{ left: `${position}%` }}
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#05060a" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 8L22 12L18 16" />
                    <path d="M6 8L2 12L6 16" />
                </svg>
            </div>
        </div>
    );
}
