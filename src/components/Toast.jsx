import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Toast = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2.5 px-5 py-3 rounded-xl bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 backdrop-blur-md shadow-2xl border border-cyan-500/30 animate-bounce">
      <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
};

export default Toast;
