import React from 'react';

/**
 * Photorealistic 3D Vector Laptop Base & Keyboard
 * Symmetrically aligned with exact edge-to-edge width matching the screen lid (0 to 1000).
 * Features 3D front chassis thickness, layered 3D chiclet keycaps, hardware side profiles,
 * and seamless flush hinge integration.
 */
const LaptopKeyboard = () => {
  // Key row specifications (width, label, special properties)
  const fnRow = [
    { label: 'esc', w: 48 },
    { label: 'F1', w: 48 },
    { label: 'F2', w: 48 },
    { label: 'F3', w: 48 },
    { label: 'F4', w: 48 },
    { label: 'F5', w: 48 },
    { label: 'F6', w: 48 },
    { label: 'F7', w: 48 },
    { label: 'F8', w: 48 },
    { label: 'F9', w: 48 },
    { label: 'F10', w: 48 },
    { label: 'F11', w: 48 },
    { label: 'F12', w: 48 },
    { label: '⌽', w: 48, isPower: true },
  ];

  const numRow = [
    { label: '`', w: 47 },
    { label: '1', w: 47 },
    { label: '2', w: 47 },
    { label: '3', w: 47 },
    { label: '4', w: 47 },
    { label: '5', w: 47 },
    { label: '6', w: 47 },
    { label: '7', w: 47 },
    { label: '8', w: 47 },
    { label: '9', w: 47 },
    { label: '0', w: 47 },
    { label: '-', w: 47 },
    { label: '=', w: 47 },
    { label: 'delete', w: 70 },
  ];

  const qweRow = [
    { label: 'tab', w: 68 },
    { label: 'Q', w: 47 },
    { label: 'W', w: 47 },
    { label: 'E', w: 47 },
    { label: 'R', w: 47 },
    { label: 'T', w: 47 },
    { label: 'Y', w: 47 },
    { label: 'U', w: 47 },
    { label: 'I', w: 47 },
    { label: 'O', w: 47 },
    { label: 'P', w: 47 },
    { label: '[', w: 47 },
    { label: ']', w: 47 },
    { label: '\\', w: 50 },
  ];

  const asdRow = [
    { label: 'caps', w: 78 },
    { label: 'A', w: 47 },
    { label: 'S', w: 47 },
    { label: 'D', w: 47 },
    { label: 'F', w: 47 },
    { label: 'G', w: 47 },
    { label: 'H', w: 47 },
    { label: 'J', w: 47 },
    { label: 'K', w: 47 },
    { label: 'L', w: 47 },
    { label: ';', w: 47 },
    { label: "'", w: 47 },
    { label: 'return', w: 85 },
  ];

  const zxcRow = [
    { label: 'shift', w: 98 },
    { label: 'Z', w: 47 },
    { label: 'X', w: 47 },
    { label: 'C', w: 47 },
    { label: 'V', w: 47 },
    { label: 'B', w: 47 },
    { label: 'N', w: 47 },
    { label: 'M', w: 47 },
    { label: ',', w: 47 },
    { label: '.', w: 47 },
    { label: '/', w: 47 },
    { label: 'shift', w: 110 },
  ];

  const modRow = [
    { label: 'fn', w: 44 },
    { label: 'control', w: 48 },
    { label: 'option', w: 48 },
    { label: 'command ⌘', w: 60 },
    { label: '', w: 256, isSpace: true },
    { label: 'command ⌘', w: 60 },
    { label: 'option', w: 48 },
    { label: '◀', w: 32 },
    { label: '▲▼', w: 32 },
    { label: '▶', w: 32 },
  ];

  const render3DKeyRow = (keys, startX, y, h) => {
    let currentX = startX;
    return keys.map((key, idx) => {
      const x = currentX;
      currentX += key.w + 4; // 4px spacing

      return (
        <g key={`key-${y}-${idx}`}>
          {/* Key Base Drop Shadow */}
          <rect
            x={x}
            y={y + 1.2}
            width={key.w}
            height={h}
            rx="2.5"
            fill="#06080d"
            opacity="0.9"
          />

          {/* Raised Keycap Face */}
          <rect
            x={x}
            y={y}
            width={key.w}
            height={h}
            rx="2.5"
            className="fill-slate-900 dark:fill-[#151922] stroke-slate-700/60 dark:stroke-[#262e3e]"
            strokeWidth="0.8"
          />

          {/* Top Specular Edge Highlight */}
          <line
            x1={x + 1.5}
            y1={y + 0.8}
            x2={x + key.w - 1.5}
            y2={y + 0.8}
            stroke="#ffffff"
            strokeOpacity="0.14"
            strokeWidth="0.8"
          />

          {/* Keycap Legend Text */}
          {key.isPower ? (
            <circle
              cx={x + key.w / 2}
              cy={y + h / 2}
              r="2.8"
              fill="none"
              stroke="#64748b"
              strokeWidth="1"
            />
          ) : key.label ? (
            <text
              x={x + key.w / 2}
              y={y + h / 2 + 2.8}
              textAnchor="middle"
              className="fill-slate-300 dark:fill-slate-200 font-mono select-none pointer-events-none font-medium"
              style={{ fontSize: key.label.length > 5 ? '6.5px' : '7.5px' }}
            >
              {key.label}
            </text>
          ) : null}
        </g>
      );
    });
  };

  return (
    <div className="relative w-full select-none -mt-0.5 z-20">
      <svg
        viewBox="0 0 1000 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl overflow-visible block"
      >
        <defs>
          {/* Top Surface Light Mode Aluminum Gradient */}
          <linearGradient id="deck-light" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="75%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Top Surface Dark Mode Aluminum Gradient */}
          <linearGradient id="deck-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="20%" stopColor="#172233" />
            <stop offset="75%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#090d16" />
          </linearGradient>

          {/* Front 3D Bevel Lip Gradient (Facing viewer - highlights thickness) */}
          <linearGradient id="front-lip-light" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="15%" stopColor="#94a3b8" />
            <stop offset="85%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="front-lip-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#384761" />
            <stop offset="20%" stopColor="#1e293b" />
            <stop offset="85%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#05070c" />
          </linearGradient>

          {/* Inset Keyboard Well Gradient */}
          <linearGradient id="keyboard-well-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06080d" />
            <stop offset="100%" stopColor="#0f1420" />
          </linearGradient>

          {/* Glass Trackpad Gradient */}
          <linearGradient id="glass-trackpad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
          </linearGradient>

          {/* Acoustic Speaker Holes Pattern */}
          <pattern id="speaker-mesh" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" className="fill-slate-600/50 dark:fill-black/70" />
          </pattern>
        </defs>

        {/* ======================================================== */}
        {/* 1. SEAMLESS RECESSED HINGE PIVOT (CONNECTS TO SCREEN) */}
        {/* ======================================================== */}
        <rect
          x="240"
          y="0"
          width="520"
          height="6"
          rx="2"
          className="fill-slate-950 stroke-slate-700/80"
          strokeWidth="0.8"
        />
        <line
          x1="250"
          y1="1.5"
          x2="750"
          y2="1.5"
          stroke="#38bdf8"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        {/* ======================================================== */}
        {/* 2. MAIN 3D KEYBOARD TOP SURFACE (EXACT FULL WIDTH: 0..1000) */}
        {/* Matches the screen lid width 100% with exact border alignment */}
        {/* ======================================================== */}
        <path
          d="M 0,0 L 1000,0 L 1000,214 Q 1000,224 984,224 L 16,224 Q 0,224 0,214 Z"
          className="fill-[url(#deck-light)] dark:fill-[url(#deck-dark)] stroke-slate-700/80"
          strokeWidth="1.2"
        />

        {/* Top Chamfer Light Reflection Line */}
        <line
          x1="0"
          y1="0.5"
          x2="1000"
          y2="0.5"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 3. HARDWARE SIDE PORTS (LEFT CHASSIS PROFILE) */}
        {/* ======================================================== */}
        <g opacity="0.65">
          {/* MagSafe Power Slot */}
          <rect
            x="2"
            y="65"
            width="3"
            height="11"
            rx="1.5"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
          {/* Thunderbolt USB-C Port 1 */}
          <rect
            x="2"
            y="90"
            width="3"
            height="9"
            rx="1.5"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
          {/* Thunderbolt USB-C Port 2 */}
          <rect
            x="2"
            y="110"
            width="3"
            height="9"
            rx="1.5"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
        </g>

        {/* ======================================================== */}
        {/* 4. ACOUSTIC SPEAKER GRILLES (LEFT & RIGHT OF KEYBOARD) */}
        {/* ======================================================== */}
        <rect
          x="30"
          y="18"
          width="74"
          height="112"
          rx="4"
          fill="url(#speaker-mesh)"
          opacity="0.85"
        />
        <rect
          x="896"
          y="18"
          width="74"
          height="112"
          rx="4"
          fill="url(#speaker-mesh)"
          opacity="0.85"
        />

        {/* ======================================================== */}
        {/* 5. INSET KEYBOARD WELL (CENTERED: 120..880, WIDTH = 760) */}
        {/* ======================================================== */}
        <rect
          x="120"
          y="14"
          width="760"
          height="120"
          rx="7"
          fill="url(#keyboard-well-grad)"
          className="stroke-black/60"
          strokeWidth="1.2"
        />
        {/* Deep Recessed Shadow at Top of Well */}
        <line
          x1="122"
          y1="15"
          x2="878"
          y2="15"
          stroke="#000000"
          strokeOpacity="0.8"
          strokeWidth="2"
        />

        {/* ======================================================== */}
        {/* 6. CHICLET KEYS WITH 3D DROP SHADOWS & SPECULAR TOPS */}
        {/* ======================================================== */}
        {/* Row 0: Function Keys */}
        {render3DKeyRow(fnRow, 138, 19, 10)}

        {/* Row 1: Number Keys */}
        {render3DKeyRow(numRow, 133.5, 34, 14)}

        {/* Row 2: QWERTY Row */}
        {render3DKeyRow(qweRow, 133, 53, 14)}

        {/* Row 3: ASDF Row */}
        {render3DKeyRow(asdRow, 136, 72, 14)}

        {/* Row 4: ZXCV Row */}
        {render3DKeyRow(zxcRow, 139, 91, 14)}

        {/* Row 5: Modifiers & Spacebar */}
        {render3DKeyRow(modRow, 152, 110, 14)}

        {/* ======================================================== */}
        {/* 7. FORCE TOUCH GLASS TRACKPAD (CENTERED: 360..640, W = 280) */}
        {/* ======================================================== */}
        <rect
          x="360"
          y="144"
          width="280"
          height="68"
          rx="8"
          fill="url(#glass-trackpad)"
          className="stroke-slate-400/40 dark:stroke-slate-600/50"
          strokeWidth="1"
        />
        {/* Top Rim Specular Shadow */}
        <line
          x1="362"
          y1="145"
          x2="638"
          y2="145"
          stroke="#000000"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 8. 3D FRONT THICKNESS LIP (FACING THE VIEWER: 0..1000) */}
        {/* Exact full width matching the top deck and screen */}
        {/* ======================================================== */}
        <path
          d="M 0,214 Q 0,224 16,224 L 984,224 Q 1000,224 1000,214 L 1000,236 Q 1000,246 982,246 L 18,246 Q 0,246 0,236 Z"
          className="fill-[url(#front-lip-light)] dark:fill-[url(#front-lip-dark)] stroke-slate-700/80"
          strokeWidth="1"
        />

        {/* Front Edge Specular Chamfer Highlight Line */}
        <line
          x1="16"
          y1="224"
          x2="984"
          y2="224"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />

        {/* Centered Ergonomic Thumb Opening Notch */}
        <path
          d="M 425,224 Q 425,236 440,236 L 560,236 Q 575,236 575,224 Z"
          className="fill-[#080b12] stroke-black/80"
          strokeWidth="1"
        />
        {/* Thumb Notch Top Specular Accent */}
        <line
          x1="440"
          y1="236"
          x2="560"
          y2="236"
          stroke="#ffffff"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        {/* Bottom Desk Contact Shadow Under Front Lip */}
        <line
          x1="20"
          y1="246"
          x2="980"
          y2="246"
          stroke="#000000"
          strokeOpacity="0.6"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
};

export default LaptopKeyboard;
