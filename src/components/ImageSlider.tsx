'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

interface ImageSliderProps {
  image: string;
  title: string;
  lutNumber?: string;
  subtitle?: string;
}

export function ImageSlider({ image, title, lutNumber, subtitle }: ImageSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Simulate 'log' footage on the before image using CSS filters
  const logFilter = "saturate(0.2) contrast(0.65) brightness(1.15) sepia(0.05)";

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* LUT Label */}
      {(lutNumber || title) && (
        <div className="mb-6 flex flex-col items-center text-center">
          {lutNumber && (
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-2">
              LUT // {lutNumber}
            </span>
          )}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
            {title}
          </h3>
        </div>
      )}

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden select-none bg-black border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] cursor-ew-resize"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{ touchAction: 'pan-y' }}
      >
        {/* After image (background — graded) */}
        <img src={image} alt="Graded" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} />

        {/* Before image (clipped foreground — log) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={image} alt="Log" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: logFilter }} draggable={false} />
        </div>

        {/* BEFORE / AFTER Labels — Reilin style (bottom corners) */}
        <div
          className="absolute bottom-6 left-6 z-30 text-sm font-bold tracking-[0.2em] text-white uppercase pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ opacity: sliderPos > 10 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          BEFORE
        </div>
        <div
          className="absolute bottom-6 right-6 z-30 text-sm font-bold tracking-[0.2em] text-white uppercase pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          style={{ opacity: sliderPos < 90 ? 1 : 0, transition: 'opacity 0.2s' }}
        >
          AFTER
        </div>

        {/* Custom Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/80 z-10 pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtitle / Credibility pill */}
      {subtitle && (
        <div className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] py-3 px-8 backdrop-blur-sm">
          <span className="text-sm text-white/60 font-light italic">{subtitle}</span>
        </div>
      )}
    </div>
  );
}
