import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { navLinks } from '../data/data';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (href) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200/90 dark:border-gray-800'
          : 'bg-white/30 dark:bg-transparent backdrop-blur-[2px] dark:backdrop-blur-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/25">
              <span className="text-white font-bold text-xl">BY</span>
            </div>
            <span className="text-slate-900 dark:text-white font-semibold text-lg hidden sm:inline tracking-tight">
              Behailu Yifru
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            <div className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium ${
                    activeSection === link.id ? 'text-cyan-600 dark:text-cyan-400' : ''
                  } group`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transform transition-transform duration-300 ${
                      activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 text-amber-500 shadow-sm transition hover:border-cyan-400/50 hover:bg-cyan-50/80 dark:border-gray-600 dark:bg-gray-800/80 dark:text-amber-300 dark:hover:border-cyan-500/50 dark:hover:bg-gray-800"
              aria-label={theme === 'night' ? 'Switch to bright mode' : 'Switch to night mode'}
              title={theme === 'night' ? 'Bright mode' : 'Night mode'}
            >
              {theme === 'night' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 text-amber-500 dark:border-gray-600 dark:bg-gray-800/80 dark:text-amber-300"
              aria-label={theme === 'night' ? 'Switch to bright mode' : 'Switch to night mode'}
            >
              {theme === 'night' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-slate-800 dark:text-white text-2xl focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-[73px] left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-slate-200 dark:border-gray-800 transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 py-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium ${
                  activeSection === link.id ? 'text-cyan-600 dark:text-cyan-400' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
