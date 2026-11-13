import React from 'react';

/**
 * Professional Monogram Logo for Behailu Yifru (BY)
 * High visibility design with radiant cyan-blue gradient background
 * and crisp, bold white geometric monogram.
 */
const Logo = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8 rounded-lg', stroke: 3, text: 'text-xs' },
    md: { box: 'w-10 h-10 rounded-xl', stroke: 3.2, text: 'text-sm' },
    lg: { box: 'w-12 h-12 rounded-2xl', stroke: 3.6, text: 'text-base' }
  };

  const config = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative ${config.box} flex items-center justify-center bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 shadow-md shadow-cyan-500/30 border border-white/25 group-hover:scale-105 group-hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Subtle Radiant Highlight Sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />

      {/* Vector Monogram Icon */}
      <svg
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 p-1.5"
      >
        <defs>
          <filter id="by-white-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Minimalist Code Corner Accents */}
        <path
          d="M 6 12 L 6 8 C 6 6.9 6.9 6 8 6 L 12 6"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M 40 34 L 40 38 C 40 39.1 39.1 40 38 40 L 34 40"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />

        {/* Monogram Glyph Group (Clean, Bold, High Contrast White) */}
        <g filter="url(#by-white-glow)">
          {/* --- Letter 'B' --- */}
          {/* B Spine */}
          <line
            x1="12"
            y1="10"
            x2="12"
            y2="34"
            stroke="#ffffff"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* B Upper Lobe */}
          <path
            d="M 12 11.5 H 19.5 C 23 11.5 25 13.5 25 16.5 C 25 19.5 23 21.5 19.5 21.5 H 12"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* B Lower Lobe */}
          <path
            d="M 12 21.5 H 20.5 C 24.2 21.5 26.5 23.8 26.5 27.2 C 26.5 30.6 24.2 32.5 20.5 32.5 H 12"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* --- Letter 'Y' --- */}
          {/* Y Upper Left Diagonal */}
          <path
            d="M 27 10 L 33 19"
            stroke="#ffffff"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* Y Upper Right Diagonal */}
          <path
            d="M 39 10 L 33 19"
            stroke="#ffffff"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          {/* Y Lower Vertical Stem */}
          <path
            d="M 33 19 L 33 34"
            stroke="#ffffff"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
        </g>

        {/* Small Active Spark Accent */}
        <circle cx="39" cy="7" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};

export default Logo;
