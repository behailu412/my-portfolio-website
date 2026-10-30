import React, { useState, useEffect, useRef } from 'react';
import {
  FaSun,
  FaMoon,
  FaHome,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaEnvelope,
  FaChevronRight,
  FaPaperPlane
} from 'react-icons/fa';
import { navLinks } from '../data/data';
import { useTheme } from '../context/ThemeContext.jsx';

const NAV_ICONS = {
  home: FaHome,
  skills: FaCode,
  journey: FaGraduationCap,
  projects: FaLaptopCode,
  certifications: FaCertificate,
  contact: FaEnvelope,
};

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (href) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Outside click & touch handling (out of box handling)
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideTouchOrClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideTouchOrClick);
    document.addEventListener('touchstart', handleOutsideTouchOrClick, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideTouchOrClick);
      document.removeEventListener('touchstart', handleOutsideTouchOrClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Auto-close menu when scrolling or resizing to desktop
  useEffect(() => {
    if (!isOpen) return;

    const initialScrollY = window.scrollY;
    const handleScrollClose = () => {
      if (Math.abs(window.scrollY - initialScrollY) > 50) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScrollClose, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* Fullscreen Backdrop for outside touch / click handling */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-950/45 dark:bg-black/65 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        onTouchStart={closeMenu}
        aria-hidden="true"
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:shadow-black/25 border-b border-slate-200/90 dark:border-gray-800'
            : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-sm dark:backdrop-blur-none border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-2.5 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg tracking-tight">BY</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 dark:text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Behailu Yifru
                </span>
                <span className="text-[11px] text-slate-500 dark:text-gray-400 font-medium hidden sm:block -mt-1">
                  Full-Stack Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
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
                    className={`relative text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base ${
                      activeSection === link.id ? 'text-cyan-600 dark:text-cyan-400 font-semibold' : ''
                    } group py-1`}
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

              {/* Theme Toggle Button */}
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

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white/80 text-amber-500 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-800/80 dark:text-amber-300"
                aria-label={theme === 'night' ? 'Switch to bright mode' : 'Switch to night mode'}
              >
                {theme === 'night' ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
              </button>

              {/* Animated Hamburger Toggle Button */}
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className={`relative w-10 h-10 flex flex-col items-center justify-center rounded-xl border transition-all duration-300 focus:outline-none ${
                  isOpen
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-600 dark:text-cyan-400 shadow-md shadow-cyan-500/20'
                    : 'bg-white/80 dark:bg-gray-800/80 border-slate-200/90 dark:border-gray-700 text-slate-800 dark:text-white hover:border-cyan-400/50'
                }`}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
              >
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform ${
                    isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 transform ${
                    isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        <div
          ref={menuRef}
          className={`md:hidden px-3 sm:px-6 transition-all duration-300 ease-out transform origin-top ${
            isOpen
              ? 'opacity-100 max-h-[500px] pb-3 translate-y-0 pointer-events-auto'
              : 'opacity-0 max-h-0 pb-0 -translate-y-2 pointer-events-none overflow-hidden'
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-2xl border border-slate-200/90 dark:border-gray-800 shadow-2xl shadow-slate-900/10 dark:shadow-black/60 overflow-hidden">
            {/* Top Cyan-to-Purple Accent Line */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />

            <div className="p-3 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = NAV_ICONS[link.id] || FaHome;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`group flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-transparent text-cyan-600 dark:text-cyan-400 font-semibold border-l-4 border-cyan-500 shadow-sm'
                        : 'text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100/80 dark:hover:bg-gray-800/60 font-medium'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                            : 'bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 group-hover:bg-cyan-500/15 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                        }`}
                      >
                        <IconComponent className="text-sm" />
                      </div>
                      <span className="text-sm tracking-tight">{link.name}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {isActive && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                          Active
                        </span>
                      )}
                      <FaChevronRight
                        className={`text-xs transition-transform duration-200 ${
                          isActive
                            ? 'text-cyan-500 translate-x-0.5'
                            : 'text-slate-400 dark:text-gray-500 group-hover:text-cyan-500 group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Quick Action Card */}
            <div className="border-t border-slate-200/80 dark:border-gray-800/80 p-3 bg-slate-50/70 dark:bg-gray-950/40 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Open for opportunities
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-700 transition-all active:scale-95"
              >
                <span>Hire Me</span>
                <FaPaperPlane className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
