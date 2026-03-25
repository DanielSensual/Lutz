'use client';
import { useState } from 'react';

export function ImageSlider({ image, title }: { image: string, title: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  // We simulate 'log' footage on the before image using CSS filters
  // This strips contrast and saturation just like S-Log3 straight out of camera
  const logFilter = "saturate(0.2) contrast(0.65) brightness(1.15) sepia(0.05)";

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden group select-none bg-black border border-white/10 shadow-2xl">
      {/* Label */}
      <div className="absolute top-4 left-4 z-30 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] text-white border border-white/10 uppercase">
        {title}
      </div>
      
      {/* After image (background) */}
      <img src={image} alt="Graded" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* Before image (clipped foreground) */}
      <div 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={image} alt="Log" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: logFilter }} />
      </div>

      {/* Slider Range */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        style={{ touchAction: 'pan-y' }}
      />

      {/* Custom Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.8)]"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
      </div>
      
      {/* Badges */}
      <div className="absolute bottom-4 left-4 z-30 text-white text-xs font-bold tracking-widest uppercase pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        Before (S-Log3)
      </div>
      <div className="absolute bottom-4 right-4 z-30 text-white text-xs font-bold tracking-widest uppercase pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        After (Graded)
      </div>
    </div>
  );
}
