import React from 'react';

/**
 * Photorealistic Precision Laptop Base & Keyboard Mockup
 * Mathematically proportioned vector rendering of a modern workstation laptop base.
 * Eliminates perspective warping and vertical stretching for an authentic hardware appearance.
 */
const LaptopKeyboard = () => {
  // Key row specifications (x, width, label)
  const fnRow = [
    { label: 'esc', w: 46 },
    { label: 'F1', w: 46 },
    { label: 'F2', w: 46 },
    { label: 'F3', w: 46 },
    { label: 'F4', w: 46 },
    { label: 'F5', w: 46 },
    { label: 'F6', w: 46 },
    { label: 'F7', w: 46 },
    { label: 'F8', w: 46 },
    { label: 'F9', w: 46 },
    { label: 'F10', w: 46 },
    { label: 'F11', w: 46 },
    { label: 'F12', w: 46 },
    { label: '⌽', w: 46, isPower: true },
  ];

  const numRow = [
    { label: '`', w: 45 },
    { label: '1', w: 45 },
    { label: '2', w: 45 },
    { label: '3', w: 45 },
    { label: '4', w: 45 },
    { label: '5', w: 45 },
    { label: '6', w: 45 },
    { label: '7', w: 45 },
    { label: '8', w: 45 },
    { label: '9', w: 45 },
    { label: '0', w: 45 },
    { label: '-', w: 45 },
    { label: '=', w: 45 },
    { label: 'delete', w: 69 },
  ];

  const qweRow = [
    { label: 'tab', w: 66 },
    { label: 'Q', w: 45 },
    { label: 'W', w: 45 },
    { label: 'E', w: 45 },
    { label: 'R', w: 45 },
    { label: 'T', w: 45 },
    { label: 'Y', w: 45 },
    { label: 'U', w: 45 },
    { label: 'I', w: 45 },
    { label: 'O', w: 45 },
    { label: 'P', w: 45 },
    { label: '[', w: 45 },
    { label: ']', w: 45 },
    { label: '\\', w: 48 },
  ];

  const asdRow = [
    { label: 'caps', w: 76 },
    { label: 'A', w: 45 },
    { label: 'S', w: 45 },
    { label: 'D', w: 45 },
    { label: 'F', w: 45 },
    { label: 'G', w: 45 },
    { label: 'H', w: 45 },
    { label: 'J', w: 45 },
    { label: 'K', w: 45 },
    { label: 'L', w: 45 },
    { label: ';', w: 45 },
    { label: "'", w: 45 },
    { label: 'return', w: 83 },
  ];

  const zxcRow = [
    { label: 'shift', w: 96 },
    { label: 'Z', w: 45 },
    { label: 'X', w: 45 },
    { label: 'C', w: 45 },
    { label: 'V', w: 45 },
    { label: 'B', w: 45 },
    { label: 'N', w: 45 },
    { label: 'M', w: 45 },
    { label: ',', w: 45 },
    { label: '.', w: 45 },
    { label: '/', w: 45 },
    { label: 'shift', w: 109 },
  ];

  const modRow = [
    { label: 'fn', w: 44 },
    { label: 'control', w: 48 },
    { label: 'option', w: 48 },
    { label: 'command ⌘', w: 60 },
    { label: '', w: 242, isSpace: true },
    { label: 'command ⌘', w: 60 },
    { label: 'option', w: 48 },
    { label: '◀', w: 32 },
    { label: '▲▼', w: 32 },
    { label: '▶', w: 32 },
  ];

  const renderKeyRow = (keys, startX, y, h) => {
    let currentX = startX;
    return keys.map((key, idx) => {
      const x = currentX;
      currentX += key.w + 4; // 4px gap

      return (
        <g key={`key-${y}-${idx}`}>
          {/* Keycap base with subtle shadow */}
          <rect
            x={x}
            y={y}
            width={key.w}
            height={h}
            rx="2.5"
            className="fill-slate-900 dark:fill-[#151922] stroke-slate-700/60 dark:stroke-[#252c3c]"
            strokeWidth="0.8"
          />
          {/* Top specular highlight on keycap */}
          <line
            x1={x + 1}
            y1={y + 1}
            x2={x + key.w - 1}
            y2={y + 1}
            stroke="#ffffff"
            strokeOpacity="0.08"
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
              className="fill-slate-400 dark:fill-slate-300 font-mono text-[8px] select-none pointer-events-none"
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
    <div className="relative w-full select-none -mt-0.5">
      <svg
        viewBox="0 0 1000 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        <defs>
          {/* Light Mode Aluminum Body Gradient */}
          <linearGradient id="chassis-light" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dbe2ea" />
            <stop offset="5%" stopColor="#cbd5e1" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Dark Mode Aluminum Body Gradient */}
          <linearGradient id="chassis-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="5%" stopColor="#182234" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#080d16" />
          </linearGradient>

          {/* Inset Keyboard Well Gradient */}
          <linearGradient id="well-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a0d14" />
            <stop offset="100%" stopColor="#101520" />
          </linearGradient>

          {/* Glass Trackpad Gradient */}
          <linearGradient id="trackpad-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.05" />
          </linearGradient>

          {/* Laser-drilled Acoustic Speaker Dot Pattern */}
          <pattern id="speaker-holes" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.75" className="fill-slate-600/50 dark:fill-black/60" />
          </pattern>
        </defs>

        {/* ======================================================== */}
        {/* 1. MAIN ALUMINUM LAPTOP BASE CHASSIS */}
        {/* ======================================================== */}
        {/* Natural tapered perspective (wider at back, slightly tapered at front) */}
        <path
          d="M 6,0 L 994,0 Q 1000,0 998,14 L 980,204 Q 975,220 955,220 L 45,220 Q 25,220 20,204 L 2,14 Q 0,0 6,0 Z"
          className="fill-[url(#chassis-light)] dark:fill-[url(#chassis-dark)] stroke-slate-300 dark:stroke-slate-700/80"
          strokeWidth="1.2"
        />

        {/* Top Chamfer Specular Highlight Line */}
        <line
          x1="8"
          y1="1"
          x2="992"
          y2="1"
          stroke="#ffffff"
          strokeOpacity="0.4"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 2. ACOUSTIC SPEAKER GRILLES (LEFT & RIGHT) */}
        {/* ======================================================== */}
        <rect
          x="44"
          y="18"
          width="64"
          height="106"
          rx="3"
          fill="url(#speaker-holes)"
          opacity="0.85"
        />
        <rect
          x="892"
          y="18"
          width="64"
          height="106"
          rx="3"
          fill="url(#speaker-holes)"
          opacity="0.85"
        />

        {/* ======================================================== */}
        {/* 3. INSET KEYBOARD WELL */}
        {/* ======================================================== */}
        <rect
          x="128"
          y="14"
          width="744"
          height="114"
          rx="7"
          fill="url(#well-grad)"
          className="stroke-black/50"
          strokeWidth="1"
        />
        {/* Inner Shadow Simulation */}
        <line
          x1="130"
          y1="15"
          x2="870"
          y2="15"
          stroke="#000000"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />

        {/* ======================================================== */}
        {/* 4. CHICLET KEYS (6 ROWS - AUTHENTIC MACBOOK PRO LAYOUT) */}
        {/* ======================================================== */}
        {/* Row 0: Function Keys */}
        {renderKeyRow(fnRow, 136, 19, 10)}

        {/* Row 1: Number Keys */}
        {renderKeyRow(numRow, 136, 33, 14)}

        {/* Row 2: QWERTY Row */}
        {renderKeyRow(qweRow, 136, 51, 14)}

        {/* Row 3: ASDF Row */}
        {renderKeyRow(asdRow, 136, 69, 14)}

        {/* Row 4: ZXCV Row */}
        {renderKeyRow(zxcRow, 136, 87, 14)}

        {/* Row 5: Modifiers & Spacebar */}
        {renderKeyRow(modRow, 136, 105, 14)}

        {/* ======================================================== */}
        {/* 5. EXPANSIVE FORCE TOUCH GLASS TRACKPAD */}
        {/* ======================================================== */}
        <rect
          x="370"
          y="136"
          width="260"
          height="68"
          rx="8"
          fill="url(#trackpad-grad)"
          className="stroke-slate-400/35 dark:stroke-slate-600/40"
          strokeWidth="1"
        />
        {/* Trackpad subtle top shadow */}
        <line
          x1="372"
          y1="137"
          x2="628"
          y2="137"
          stroke="#000000"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* ======================================================== */}
        {/* 6. FRONT ERGONOMIC THUMB SCOOP / OPENING NOTCH */}
        {/* ======================================================== */}
        <rect
          x="440"
          y="213"
          width="120"
          height="6"
          rx="3"
          className="fill-slate-500/50 dark:fill-black"
        />
      </svg>
    </div>
  );
};

export default LaptopKeyboard;

