import React from 'react';
import { quickStats } from '../data/data';
import { FaGraduationCap, FaCodeBranch, FaCertificate, FaLayerGroup } from 'react-icons/fa';

const STAT_ICONS = [
  <FaGraduationCap className="text-cyan-500 text-2xl" />,
  <FaCodeBranch className="text-blue-500 text-2xl" />,
  <FaCertificate className="text-amber-500 text-2xl" />,
  <FaLayerGroup className="text-purple-500 text-2xl" />,
];

const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-4">
      {quickStats.map((stat, index) => (
        <div
          key={index}
          className="glass-card p-4 sm:p-5 relative overflow-hidden group hover:border-cyan-400/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Subtle glow orb */}
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/15 group-hover:scale-110 transition-transform duration-300">
              {STAT_ICONS[index % STAT_ICONS.length]}
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {stat.value}
            </div>
          </div>
          <div className="font-semibold text-slate-800 dark:text-gray-200 text-sm">
            {stat.label}
          </div>
          <div className="text-xs text-slate-500 dark:text-gray-400 truncate mt-0.5">
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
