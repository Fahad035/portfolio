import React from 'react';

const SectionDivider = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-12 overflow-hidden">
      {/* 1. The Long Fading Line */}
      <div className="absolute h-px w-4/5 bg-linear-to-r from-transparent via-[#f3349d]/50 to-transparent" />

      {/* 2. The Inner Bright "Core" Line */}
      <div className="absolute h-0.5 w-1/3 bg-linear-to-r from-transparent via-[#57cef1] to-transparent shadow-[0_0_20px_#57cef1]" />

      {/* 3. The Central Decorative Diamond */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute w-8 h-8 bg-[#f3349d]/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* The Diamond Shape */}
        <div className="w-3 h-3 rotate-45 border border-[#57cef1] bg-[#0a0a0a] shadow-[0_0_10px_#57cef1]"></div>
      </div>

      {/* 4. Ambient Background Glow (optional, very subtle) */}
      <div className="absolute w-64 h-24 bg-[#b80dec]/5 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default SectionDivider;