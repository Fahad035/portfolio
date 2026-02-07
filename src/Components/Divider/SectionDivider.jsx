import React from 'react'

const SectionDivider = () => {
    return (
        <div className="relative w-full flex justify-center py-10">
          {/* The main glowing line */}
          <div className="h-0.5 w-3/4 bg-linear-to-r from-transparent via-[#f3349d] to-transparent shadow-[0_0_15px_rgba(243,52,157,0.8)]" />
          
          {/* Optional: Secondary wider glow for extra depth */}
          <div className="absolute h-px w-full bg-linear-to-r from-transparent via-[#f3349d]/30 to-transparent blur-sm" />
        </div>
      );
}

export default SectionDivider