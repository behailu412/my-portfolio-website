import React from 'react';

/**
 * Professional Monogram Logo for Behailu Yifru (BY)
 * Crafted with precision geometry, gradient illumination, and modern tech aesthetics.
 */
const Logo = ({ size = 'md', className = '' }) => {
  // Dimensions map
  const sizeMap = {
    sm: { box: 'w-8 h-8', svg: 32, text: 'text-xs' },
    md: { box: 'w-10 h-10', svg: 40, text: 'text-sm' },
    lg: { box: 'w-12 h-12', svg: 48, text: 'text-base' }
  };

  const config = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative ${config.box} flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-[1.5px] shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500/30 group-hover:ring-cyan-400 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300 ${className}`}
    >
      {/* Ambient Internal Glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-600/20 opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Vector Monogram Icon */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 p-1"
      >
        <defs>
          {/* Main Primary Gradient: Cyan to Electric Blue to Indigo */}
          <linearGradient id="by-primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Accent Glow Gradient */}
          <linearGradient id="by-accent-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="by-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#06b6d4" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Outer Tech Accents / Corner Code Brackets */}
        <path
          d="M 6 12 L 6 8 C 6 6.9 6.9 6 8 6 L 12 6"
          stroke="url(#by-primary-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        <path
          d="M 38 32 L 38 36 C 38 37.1 37.1 38 36 38 L 32 38"
          stroke="url(#by-primary-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />

        {/* Monogram Glyph Group */}
        <g filter="url(#by-glow-filter)">
          {/* Letter 'B' Geometry (Modern Architectural Spine & Curved Lobes) */}
          {/* Left Vertical Spine */}
          <line
            x1="12"
            y1="10"
            x2="12"
            y2="34"
            stroke="url(#by-primary-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Upper Lobe of B */}
          <path
            d="M 12 11.5 H 19.5 C 22.8 11.5 25 13.5 25 16.5 C 25 19.5 22.8 21.5 19.5 21.5 H 12"
            stroke="url(#by-primary-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Lower Lobe of B */}
          <path
            d="M 12 21.5 H 20.5 C 24.2 21.5 26.5 23.8 26.5 27.2 C 26.5 30.6 24.2 32.5 20.5 32.5 H 12"
            stroke="url(#by-primary-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter 'Y' Dynamic Modern Branch */}
          {/* Upper Left Branch of Y */}
          <path
            d="M 27 10 L 32.5 18.5"
            stroke="url(#by-accent-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Upper Right Branch of Y */}
          <path
            d="M 38 10 L 32.5 18.5"
            stroke="url(#by-accent-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Vertical Stem of Y */}
          <path
            d="M 32.5 18.5 L 32.5 34"
            stroke="url(#by-accent-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* Futuristic Status Pulse Dot */}
        <circle cx="38" cy="8" r="1.5" fill="#22d3ee" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default Logo;

