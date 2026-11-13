import React, { useState, useEffect } from 'react';
import LaptopKeyboard from './LaptopKeyboard';
import { 
  FaJava, 
  FaPlay, 
  FaPause, 
  FaStepForward, 
  FaStepBackward, 
  FaCheckCircle,
  FaTimes
} from 'react-icons/fa';
import { 
  SiPython, 
  SiJavascript, 
  SiCplusplus, 
  SiPhp, 
  SiHtml5, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiLaravel, 
  SiVite, 
  SiGit, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiAndroid, 
  SiDocker
} from 'react-icons/si';

// Strictly separated categories: Languages with languages, Frameworks with frameworks, Tools with tools
const CATEGORIES = [
  {
    id: 'languages',
    sceneNumber: '01',
    title: 'Programming Languages',
    subtitle: 'Core Computational Foundations, Algorithms & High-Performance Logic',
    accentColor: 'from-cyan-400 to-sky-300',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    badgeColor: 'bg-white/20 border-white/30 text-white',
    skills: [
      {
        name: 'Python',
        icon: <SiPython className="text-amber-300" />,
        tag: 'AI & Data Scripts',
        description: 'Intelligent AI agents, data modeling with Pandas/NumPy, system automation & algorithms.',
        features: ['AI Fundamentals', 'Automation Scripts', 'Object-Oriented Logic']
      },
      {
        name: 'Java',
        icon: <FaJava className="text-red-400" />,
        tag: 'Core & Android',
        description: 'Enterprise Object-Oriented patterns, multithreaded systems, and native Android application development.',
        features: ['OOP Architecture', 'Android Studio Native', 'Data Structures']
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-300" />,
        tag: 'Full-Stack Web',
        description: 'Modern asynchronous ES6+, reactive event architecture, and cross-platform frontend engines.',
        features: ['Modern ES6+', 'Async / Await', 'DOM Architecture']
      },
      {
        name: 'C++',
        icon: <SiCplusplus className="text-sky-300" />,
        tag: 'Systems & Algorithms',
        description: 'Low-level memory optimization, algorithmic problem solving, and computational efficiency.',
        features: ['Memory Optimization', 'Algorithmic Complexity', 'Data Structures']
      },
      {
        name: 'PHP',
        icon: <SiPhp className="text-indigo-200" />,
        tag: 'Server Backend',
        description: 'Server-side data processing, dynamic page generation, and backend REST endpoints.',
        features: ['REST API Endpoints', 'Session Management', 'Relational Web Backend']
      },
      {
        name: 'HTML5 & CSS3',
        icon: <SiHtml5 className="text-orange-400" />,
        tag: 'Semantic & UI',
        description: 'Accessible semantic structure, responsive modern layouts, and fluid micro-animations.',
        features: ['Semantic Markup', 'Flexbox & CSS Grid', 'Responsive Design']
      }
    ]
  },
  {
    id: 'frameworks',
    sceneNumber: '02',
    title: 'Modern Frameworks',
    subtitle: 'Production-Grade Scalable Web, Reactive UI & Full-Stack Architectures',
    accentColor: 'from-sky-300 via-cyan-300 to-indigo-200',
    glowColor: 'rgba(99, 102, 241, 0.35)',
    badgeColor: 'bg-white/20 border-white/30 text-white',
    skills: [
      {
        name: 'React',
        icon: <SiReact className="text-cyan-300 animate-spin-slow" />,
        tag: 'Frontend Engine',
        description: 'Component-driven declarative architectures, reactive state hooks, and dynamic client interfaces.',
        features: ['Component Lifecycle', 'State Management', 'Virtual DOM']
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-white" />,
        tag: 'Full-Stack SSR',
        description: 'Server-side rendering, App Router, hybrid static generation, and high-speed Vercel deployments.',
        features: ['App Router', 'Server Actions', 'Vercel Edge Cloud']
      },
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="text-emerald-300" />,
        tag: 'Backend Runtime',
        description: 'Event-driven asynchronous backend services, Express REST APIs, and microservice integration.',
        features: ['Express Routing', 'Event Loop', 'JSON REST APIs']
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-300" />,
        tag: 'Design Systems',
        description: 'Utility-first rapid prototyping, responsive design tokens, and smooth dark/light mode interfaces.',
        features: ['Custom Themes', 'Responsive Tokens', 'Modern UI Accents']
      },
      {
        name: 'Laravel',
        icon: <SiLaravel className="text-rose-300" />,
        tag: 'MVC Architecture',
        description: 'Structured web application development with Eloquent ORM, authentication, and database migrations.',
        features: ['Eloquent ORM', 'MVC Routing', 'Secure Authentication']
      },
      {
        name: 'Vite',
        icon: <SiVite className="text-purple-300" />,
        tag: 'Build Tooling',
        description: 'Blazing fast instant server start, lightning HMR, and optimized production rollups.',
        features: ['Lightning HMR', 'Optimized Rollup', 'Next-Gen Bundling']
      }
    ]
  },
  {
    id: 'tools',
    sceneNumber: '03',
    title: 'Tools & Databases',
    subtitle: 'Persistent Data Modeling, Version Control, Mobile SDK & DevOps Workflows',
    accentColor: 'from-emerald-300 via-teal-300 to-cyan-300',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    badgeColor: 'bg-white/20 border-white/30 text-white',
    skills: [
      {
        name: 'MySQL',
        icon: <SiMysql className="text-sky-300" />,
        tag: 'Relational Database',
        description: 'Relational database schema modeling, query optimization, indexing, and transactional integrity.',
        features: ['ACID Compliance', 'Index Optimization', 'Foreign Key Relational Schemas']
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-emerald-300" />,
        tag: 'NoSQL Document',
        description: 'Flexible JSON document schemas, high-throughput collections, and aggregation pipelines.',
        features: ['Document Schema', 'Aggregation Pipelines', 'Dynamic Queries']
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-blue-300" />,
        tag: 'Advanced SQL',
        description: 'Enterprise relational database systems, advanced SQL syntax, and ACID reliability.',
        features: ['Enterprise SQL', 'Relational Constraints', 'High Reliability']
      },
      {
        name: 'Git & GitHub',
        icon: <SiGit className="text-orange-300" />,
        tag: 'Version Control',
        description: 'Branching strategies, collaborative workflows, commit conventions, and repository maintenance.',
        features: ['Branching Strategies', 'GitHub Workflows', 'Version History']
      },
      {
        name: 'Android SDK',
        icon: <SiAndroid className="text-emerald-300" />,
        tag: 'Mobile Development',
        description: 'Native Android application builds, XML layout structuring, and APK distribution.',
        features: ['Native APK Build', 'Material Layouts', 'Telegram Distribution']
      },
      {
        name: 'Docker',
        icon: <SiDocker className="text-sky-300" />,
        tag: 'Containerization',
        description: 'Isolated runtime environments, multi-stage Dockerfiles, and reproducible dev setups.',
        features: ['Isolated Images', 'Reproducible Envs', 'Container Deployments']
      }
    ]
  }
];

const Skills = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100 within current category
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const activeCategory = CATEGORIES[currentCategoryIndex];

  // Base duration per category scene: 7.5 seconds
  const sceneDuration = 7500;

  // Video playback & timeline progress loop
  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50; // update progress every 50ms for smooth bar
    const progressIncrement = (intervalStep / sceneDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Transition to next category
          setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % CATEGORIES.length);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, intervalStep);

    return () => clearInterval(interval);
  }, [isPlaying, sceneDuration, currentCategoryIndex]);

  const handleSelectCategory = (index) => {
    setCurrentCategoryIndex(index);
    setProgress(0);
    setHoveredSkill(null);
  };

  const handlePrev = () => {
    setCurrentCategoryIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
    setProgress(0);
    setHoveredSkill(null);
  };

  const handleNext = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % CATEGORIES.length);
    setProgress(0);
    setHoveredSkill(null);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // Duplicate items only within THIS exact category for continuous smooth marquee
  const streamItemsRow1 = [...activeCategory.skills, ...activeCategory.skills, ...activeCategory.skills];
  const streamItemsRow2 = [...activeCategory.skills].reverse().concat([...activeCategory.skills].reverse(), [...activeCategory.skills].reverse());

  return (
    <section className="py-14 sm:py-24 px-3 sm:px-6 relative select-none">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <span>Interactive Tech Workstation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-gray-300 text-xs sm:text-base max-w-2xl mx-auto">
            Dynamic showcase playing out on a realistic workstation laptop — watch technologies stream across the screen or hover over any card for details.
          </p>
        </div>

        {/* ======================================================== */}
        {/* REALISTIC 3D ANGLED LAPTOP WORKSTATION */}
        {/* ======================================================== */}
        <div 
          className="relative mx-auto max-w-4xl lg:max-w-5xl [perspective:1800px] py-4"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dynamic Ambient Glow Behind Screen */}
          <div
            className="absolute -inset-2 sm:-inset-6 rounded-3xl blur-3xl opacity-35 dark:opacity-60 transition-colors duration-1000 -z-20 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 45% 45%, ${activeCategory.glowColor} 0%, transparent 70%)`
            }}
          />

          {/* 3D Tilted Hardware Chassis Wrapper */}
          <div
            className="relative transition-transform duration-500 ease-out will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-6.5 + mouseOffset.x * 4}deg) rotateX(${5.5 - mouseOffset.y * 3}deg) rotateZ(0.5deg)`
            }}
          >
            {/* ------------------------------------------------------ */}
            {/* 1. LAPTOP SCREEN (LID) - PROPORTIONED REAL DISPLAY */}
            {/* ------------------------------------------------------ */}
            <div className="relative rounded-t-xl sm:rounded-t-3xl bg-slate-950 p-1.5 sm:p-3.5 pb-2 border-2 sm:border-[3px] border-slate-700/80 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5),-12px_20px_40px_rgba(0,0,0,0.35)]">
            
            {/* Top Display Bezel: Centered Camera & Traffic Lights */}
            <div className="flex items-center justify-between px-2 sm:px-3 py-1 text-xs mb-1">
              {/* Window dots */}
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Centered Camera Notch */}
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-black border border-slate-700 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-cyan-900" />
                </div>
                <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              </div>

              {/* Minimal Clean Status */}
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                {activeCategory.sceneNumber} / 03
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* INNER DISPLAY: USER-FRIENDLY BLUE BACKGROUND */}
            {/* ------------------------------------------------------ */}
            <div className="relative rounded-md sm:rounded-xl overflow-hidden bg-gradient-to-br from-[#1d4ed8] via-[#1e40af] to-[#0c2461] border border-blue-400/30 text-white min-h-[250px] sm:min-h-[330px] md:min-h-[380px] flex flex-col justify-between shadow-inner">
              
              {/* Ambient Radial Blue/Cyan Screen Wallpaper Highlight */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-1000 z-0 opacity-40"
                style={{
                  background: 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.35) 0%, transparent 65%)'
                }}
              />

              {/* Realistic 3D Diagonal Glass Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none z-20" />

              {/* Screen Top: Category Title & Tabs (Responsive on Mobile & Desktop) */}
              <div className="relative z-10 px-3 sm:px-6 pt-3 sm:pt-4 pb-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2 border-b border-white/20 pb-2">
                  <div>
                    <div className="flex items-center space-x-2 mb-0.5">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] font-mono font-bold tracking-wider border ${activeCategory.badgeColor}`}>
                        {activeCategory.sceneNumber} // {activeCategory.id.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                      {activeCategory.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-blue-100/85 font-medium line-clamp-1 hidden sm:block">
                      {activeCategory.subtitle}
                    </p>
                  </div>

                  {/* Clean Category Selector Tabs */}
                  <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 self-start sm:self-center">
                    {CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(idx)}
                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
                          currentCategoryIndex === idx
                            ? 'bg-cyan-400 text-slate-950 font-bold shadow-sm shadow-cyan-400/40'
                            : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                        }`}
                      >
                        {cat.id === 'languages' ? 'Languages' : cat.id === 'frameworks' ? 'Frameworks' : 'Tools'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screen Middle: Clean Moving Logo Tracks */}
              <div className="relative z-10 px-2 sm:px-5 py-1.5 sm:py-2 my-auto pause-on-hover">
                
                {/* TRACK 1: Moving Smoothly Across Screen (Leftwards) */}
                <div className="relative overflow-hidden py-1 mb-1.5 sm:mb-2.5">
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#1d4ed8] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#1d4ed8] to-transparent z-10 pointer-events-none" />

                  <div className="animate-marquee-left gap-2 sm:gap-3.5">
                    {streamItemsRow1.map((skill, idx) => (
                      <div
                        key={`r1-${skill.name}-${idx}`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
                        className={`shrink-0 flex items-center space-x-2 sm:space-x-2.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/15 hover:bg-white/25 border transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md transform hover:scale-105 ${
                          hoveredSkill?.name === skill.name
                            ? 'border-cyan-300 bg-white/30 shadow-lg shadow-cyan-400/30 ring-1 ring-cyan-300'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <span className="text-lg sm:text-2xl flex items-center justify-center p-1 rounded-lg bg-black/30">
                          {skill.icon}
                        </span>
                        <div className="flex flex-col text-left">
                          <span className="font-bold text-xs sm:text-sm text-white tracking-tight drop-shadow-sm">
                            {skill.name}
                          </span>
                          <span className="text-[9px] sm:text-[11px] text-blue-100/90 font-medium">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TRACK 2: Moving Smoothly Across Screen (Rightwards) */}
                <div className="relative overflow-hidden py-1">
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#1d4ed8] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#1d4ed8] to-transparent z-10 pointer-events-none" />

                  <div className="animate-marquee-right gap-2 sm:gap-3.5">
                    {streamItemsRow2.map((skill, idx) => (
                      <div
                        key={`r2-${skill.name}-${idx}`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
                        className={`shrink-0 flex items-center space-x-2 sm:space-x-2.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/15 hover:bg-white/25 border transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md transform hover:scale-105 ${
                          hoveredSkill?.name === skill.name
                            ? 'border-cyan-300 bg-white/30 shadow-lg shadow-cyan-400/30 ring-1 ring-cyan-300'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <span className="text-lg sm:text-2xl flex items-center justify-center p-1 rounded-lg bg-black/30">
                          {skill.icon}
                        </span>
                        <div className="flex flex-col text-left">
                          <span className="font-bold text-xs sm:text-sm text-white tracking-tight drop-shadow-sm">
                            {skill.name}
                          </span>
                          <span className="text-[9px] sm:text-[11px] text-blue-100/90 font-medium">
                            {skill.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* -------------------------------------------------- */}
                {/* FLOATING DETAIL CARD OVERLAY (NEVER BREAKS SCREEN HEIGHT) */}
                {/* -------------------------------------------------- */}
                {hoveredSkill && (
                  <div className="absolute inset-x-2 sm:inset-x-6 bottom-10 sm:bottom-12 z-30 p-3 sm:p-3.5 rounded-xl bg-slate-950/95 border border-cyan-400/60 shadow-2xl backdrop-blur-xl animate-fadeIn flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
                    <button
                      type="button"
                      onClick={() => setHoveredSkill(null)}
                      className="sm:hidden absolute top-2 right-2 p-1 text-slate-400 hover:text-white"
                      title="Dismiss"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                    <div className="flex items-center space-x-2.5 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-slate-800 border border-slate-700 text-xl sm:text-2xl">
                        {hoveredSkill.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-extrabold text-xs sm:text-sm text-white">
                            {hoveredSkill.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {hoveredSkill.tag}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 max-w-lg line-clamp-2 sm:line-clamp-none">
                          {hoveredSkill.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1 self-start sm:self-center">
                      {hoveredSkill.features.map((feat, fidx) => (
                        <span
                          key={fidx}
                          className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1"
                        >
                          <FaCheckCircle className="text-cyan-400 text-[8px]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Screen Bottom: Sleek Video Player Controls */}
              <div className="relative z-10 bg-[#0c1f54]/90 border-t border-white/15 px-3 sm:px-6 py-2 backdrop-blur-md">
                
                {/* Real Scrub Progress Bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    setProgress(newProgress);
                  }}
                  className="relative w-full h-1 sm:h-1.5 bg-white/25 hover:h-2 rounded-full overflow-hidden cursor-pointer group transition-all mb-1.5"
                  title="Click to scrub scene"
                >
                  <div
                    className={`h-full bg-gradient-to-r ${activeCategory.accentColor} transition-all duration-75 relative`}
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm shadow-cyan-400" />
                  </div>
                </div>

                {/* Minimal Player Toolbar */}
                <div className="flex items-center justify-between text-xs text-white/80">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-1 sm:p-1.5 rounded-md bg-white/10 hover:text-white hover:bg-white/20 transition"
                      title="Previous Category"
                    >
                      <FaStepBackward className="text-[9px] sm:text-[10px]" />
                    </button>
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1 sm:p-1.5 px-2 sm:px-2.5 rounded-md bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 font-bold hover:scale-105 transition shadow-sm"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <FaPause className="text-[9px] sm:text-[10px]" /> : <FaPlay className="text-[9px] sm:text-[10px]" />}
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-1 sm:p-1.5 rounded-md bg-white/10 hover:text-white hover:bg-white/20 transition"
                      title="Next Category"
                    >
                      <FaStepForward className="text-[9px] sm:text-[10px]" />
                    </button>
                  </div>

                  <div className="text-[10px] sm:text-[11px] font-mono text-cyan-200">
                    Category {currentCategoryIndex + 1} of 3
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Inner Bezel with subtle branding */}
            <div className="flex justify-center items-center py-1">
              <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                BY-WORKSTATION PRO
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* 2. PROPORTIONATE REALISTIC 3D LAPTOP KEYBOARD BASE */}
          {/* Seamless flush hinge mounting directly under the screen */}
          {/* ------------------------------------------------------ */}
          <LaptopKeyboard />
        </div>

        {/* Realistic Asymmetric 3D Cast Shadow onto Desk */}
        <div 
          className="w-[92%] mx-auto h-7 sm:h-12 rounded-[50%] blur-2xl opacity-60 dark:opacity-85 transition-all duration-700 -mt-2 -z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 40% 50%, rgba(0, 0, 0, 0.75) 0%, rgba(15, 23, 42, 0.45) 55%, transparent 80%)',
            transform: 'rotate(-1deg) scaleX(1.02)'
          }}
        />

        {/* Ambient Desk Reflection */}
        <div 
          className="w-[85%] mx-auto h-6 sm:h-10 rounded-full blur-3xl opacity-35 dark:opacity-60 transition-all duration-1000 -mt-5 -z-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 45% 50%, ${activeCategory.glowColor} 0%, transparent 75%)`
          }}
        />
        </div>
      </div>
    </section>
  );
};

export default Skills;
