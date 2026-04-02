'use client';

export function TrustBar() {
  // NLE software logos your LUTs work with
  const tools = [
    { name: "DaVinci Resolve", icon: "🎨" },
    { name: "Premiere Pro", icon: "Pr" },
    { name: "Final Cut Pro", icon: "🎬" },
    { name: "S-Log3 / Sony", icon: "α" },
    { name: "V-Log / Panasonic", icon: "V" },
    { name: "C-Log / Canon", icon: "C" },
  ];

  return (
    <div className="w-full py-10 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="container-center max-w-5xl px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-6">
          Works Instantly With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-center gap-2 text-white/25 hover:text-white/50 transition-colors duration-500">
              <span className="text-xl font-black">{tool.icon}</span>
              <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
