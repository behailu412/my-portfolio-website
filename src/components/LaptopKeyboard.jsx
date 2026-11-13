import React from 'react';

/**
 * Photorealistic 3D Vector Laptop Base & Keyboard
 * Engineered with true forward-projecting perspective, 3D front chassis thickness,
 * layered 3D chiclet keycaps, hardware side profiles, and flush hinge integration.
 */
const LaptopKeyboard = () => {
  // Key row specifications (width, label, special properties)
  const fnRow = [
    { label: 'esc', w: 46 },
    { label: 'F1', w: 45 },
    { label: 'F2', w: 45 },
    { label: 'F3', w: 45 },
    { label: 'F4', w: 45 },
    { label: 'F5', w: 45 },
    { label: 'F6', w: 45 },
    { label: 'F7', w: 45 },
    { label: 'F8', w: 45 },
    { label: 'F9', w: 45 },
    { label: 'F10', w: 45 },
    { label: 'F11', w: 45 },
    { label: 'F12', w: 45 },
    { label: '⌽', w: 46, isPower: true },
  ];

  const numRow = [
    { label: '`', w: 44 },
    { label: '1', w: 44 },
    { label: '2', w: 44 },
    { label: '3', w: 44 },
    { label: '4', w: 44 },
    { label: '5', w: 44 },
    { label: '6', w: 44 },
    { label: '7', w: 44 },
    { label: '8', w: 44 },
    { label: '9', w: 44 },
    { label: '0', w: 44 },
    { label: '-', w: 44 },
    { label: '=', w: 44 },
    { label: 'delete', w: 68 },
  ];

  const qweRow = [
    { label: 'tab', w: 64 },
    { label: 'Q', w: 44 },
    { label: 'W', w: 44 },
    { label: 'E', w: 44 },
    { label: 'R', w: 44 },
    { label: 'T', w: 44 },
    { label: 'Y', w: 44 },
    { label: 'U', w: 44 },
    { label: 'I', w: 44 },
    { label: 'O', w: 44 },
    { label: 'P', w: 44 },
    { label: '[', w: 44 },
    { label: ']', w: 44 },
    { label: '\\', w: 48 },
  ];

  const asdRow = [
    { label: 'caps', w: 74 },
    { label: 'A', w: 44 },
    { label: 'S', w: 44 },
    { label: 'D', w: 44 },
    { label: 'F', w: 44 },
    { label: 'G', w: 44 },
    { label: 'H', w: 44 },
    { label: 'J', w: 44 },
    { label: 'K', w: 44 },
    { label: 'L', w: 44 },
    { label: ';', w: 44 },
    { label: "'", w: 44 },
    { label: 'return', w: 82 },
  ];

  const zxcRow = [
    { label: 'shift', w: 94 },
    { label: 'Z', w: 44 },
    { label: 'X', w: 44 },
    { label: 'C', w: 44 },
    { label: 'V', w: 44 },
    { label: 'B', w: 44 },
    { label: 'N', w: 44 },
    { label: 'M', w: 44 },
    { label: ',', w: 44 },
    { label: '.', w: 44 },
    { label: '/', w: 44 },
    { label: 'shift', w: 108 },
  ];

  const modRow = [
    { label: 'fn', w: 42 },
    { label: 'control', w: 46 },
    { label: 'option', w: 46 },
    { label: 'command ⌘', w: 58 },
    { label: '', w: 246, isSpace: true },
    { label: 'command ⌘', w: 58 },
    { label: 'option', w: 46 },
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
          {/* Key Base Drop Shadow (Creates 3D elevation from the well) */}
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
    <div className="relative w-full select-none -mt-1 sm:-mt-1.5 z-20">
      <svg
        viewBox="0 0 1000 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
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

          {/* Left Side Profile Gradient */}
          <linearGradient id="side-profile-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#05070c" />
            <stop offset="100%" stopColor="#1e293b" />
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
          x="280"
          y="0"
          width="440"
          height="7"
          rx="2"
          className="fill-slate-950 stroke-slate-700/80"
          strokeWidth="0.8"
        />
        <line
          x1="290"
          y1="1.5"
          x2="710"
          y2="1.5"
          stroke="#38bdf8"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        {/* ======================================================== */}
        {/* 2. MAIN 3D KEYBOARD TOP SURFACE (FORWARD PERSPECTIVE) */}
        {/* Rear is 860px (x: 70..930), Front is 970px (x: 15..985) */}
        {/* ======================================================== */}
        <path
          d="M 68,0 L 932,0 Q 940,0 938,8 L 986,220 Q 983,230 970,230 L 30,230 Q 17,230 14,220 L 62,8 Q 60,0 68,0 Z"
          className="fill-[url(#deck-light)] dark:fill-[url(#deck-dark)] stroke-slate-300 dark:stroke-slate-700/80"
          strokeWidth="1.2"
        />

        {/* Top Chamfer Light Reflection Line */}
        <line
          x1="70"
          y1="1"
          x2="930"
          y2="1"
          stroke="#ffffff"
          strokeOpacity="0.45"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 3. HARDWARE SIDE PORTS (LEFT CHASSIS PROFILE) */}
        {/* Shows physical 3D thickness with USB-C and MagSafe slots */}
        {/* ======================================================== */}
        <g opacity="0.65">
          {/* MagSafe Power Slot */}
          <rect
            x="24"
            y="70"
            width="3"
            height="11"
            rx="1.5"
            transform="rotate(13 24 70)"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
          {/* Thunderbolt USB-C Port 1 */}
          <rect
            x="21"
            y="94"
            width="3"
            height="9"
            rx="1.5"
            transform="rotate(13 21 94)"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
          {/* Thunderbolt USB-C Port 2 */}
          <rect
            x="18"
            y="114"
            width="3"
            height="9"
            rx="1.5"
            transform="rotate(13 18 114)"
            className="fill-slate-950 stroke-slate-600/80"
            strokeWidth="0.5"
          />
        </g>

        {/* ======================================================== */}
        {/* 4. ACOUSTIC SPEAKER GRILLES (LEFT & RIGHT OF KEYBOARD) */}
        {/* ======================================================== */}
        <polygon
          points="46,20 118,20 120,126 38,126"
          fill="url(#speaker-mesh)"
          opacity="0.85"
        />
        <polygon
          points="882,20 954,20 962,126 880,126"
          fill="url(#speaker-mesh)"
          opacity="0.85"
        />

        {/* ======================================================== */}
        {/* 5. INSET KEYBOARD WELL (SLIGHTLY ANGLE-EXPANDED) */}
        {/* ======================================================== */}
        <polygon
          points="140,15 860,15 868,128 132,128"
          fill="url(#keyboard-well-grad)"
          className="stroke-black/60"
          strokeWidth="1.2"
        />
        {/* Deep Recessed Shadow at Top of Well */}
        <line
          x1="140"
          y1="16"
          x2="860"
          y2="16"
          stroke="#000000"
          strokeOpacity="0.8"
          strokeWidth="2"
        />

        {/* ======================================================== */}
        {/* 6. CHICLET KEYS WITH 3D DROP SHADOWS & SPECULAR TOPS */}
        {/* ======================================================== */}
        {/* Row 0: Function Keys */}
        {render3DKeyRow(fnRow, 142, 20, 10)}

        {/* Row 1: Number Keys */}
        {render3DKeyRow(numRow, 141, 35, 14)}

        {/* Row 2: QWERTY Row */}
        {render3DKeyRow(qweRow, 140, 54, 14)}

        {/* Row 3: ASDF Row */}
        {render3DKeyRow(asdRow, 139, 73, 14)}

        {/* Row 4: ZXCV Row */}
        {render3DKeyRow(zxcRow, 138, 92, 14)}

        {/* Row 5: Modifiers & Spacebar */}
        {render3DKeyRow(modRow, 137, 111, 14)}

        {/* ======================================================== */}
        {/* 7. FORCE TOUCH GLASS TRACKPAD (PROPORTIONAL 3D) */}
        {/* ======================================================== */}
        <rect
          x="365"
          y="146"
          width="270"
          height="72"
          rx="8"
          fill="url(#glass-trackpad)"
          className="stroke-slate-400/40 dark:stroke-slate-600/50"
          strokeWidth="1"
        />
        {/* Top Rim Specular Shadow */}
        <line
          x1="367"
          y1="147"
          x2="633"
          y2="147"
          stroke="#000000"
          strokeOpacity="0.25"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 8. 3D FRONT THICKNESS LIP (FACING THE VIEWER) */}
        {/* This 24px vertical face gives the laptop tangible physical depth! */}
        {/* ======================================================== */}
        <path
          d="M 14,220 Q 17,230 30,230 L 970,230 Q 983,230 986,220 L 991,244 Q 989,258 974,258 L 26,258 Q 11,258 9,244 Z"
          className="fill-[url(#front-lip-light)] dark:fill-[url(#front-lip-dark)] stroke-slate-400 dark:stroke-slate-700/60"
          strokeWidth="1"
        />

        {/* Front Edge Specular Chamfer Highlight Line */}
        <line
          x1="28"
          y1="230.5"
          x2="972"
          y2="230.5"
          stroke="#ffffff"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />

        {/* Centered Ergonomic Thumb Opening Notch */}
        <path
          d="M 432,230.5 Q 432,243 446,243 L 554,243 Q 568,243 568,230.5 Z"
          className="fill-[#080b12] stroke-black/80"
          strokeWidth="1"
        />
        {/* Thumb Notch Top Specular Accent */}
        <line
          x1="446"
          y1="243"
          x2="554"
          y2="243"
          stroke="#ffffff"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        {/* Bottom Desk Contact Shadow Under Front Lip */}
        <line
          x1="35"
          y1="258"
          x2="965"
          y2="258"
          stroke="#000000"
          strokeOpacity="0.6"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
};

export default LaptopKeyboard;
