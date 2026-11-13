import React, { useState, useEffect, useRef } from 'react';
import { 
  FaJava, 
  FaPlay, 
  FaPause, 
  FaStepForward, 
  FaStepBackward, 
  FaTerminal, 
  FaCode, 
  FaLaptopCode,
  FaTv,
  FaCheckCircle
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

// Rich scene definitions for the dynamic video tech reel
const SCENES = [
  {
    id: 'languages',
    sceneNumber: '01',
    title: 'Programming Languages',
    subtitle: 'Core Computational Foundations, Algorithms & High-Performance Logic',
    accentColor: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    skills: [
      {
        name: 'Python',
        icon: <SiPython className="text-amber-400" />,
        level: '90%',
        tag: 'AI & Backend',
        description: 'Intelligent AI agents, data modeling, automated scripting & system logic.',
        codeSnippet: 'def generate_solution(data):\n    agent = AIAgent(model="gemini")\n    return agent.analyze(data)',
        features: ['AI Fundamentals', 'Pandas & NumPy', 'Automation Scripts']
      },
      {
        name: 'Java',
        icon: <FaJava className="text-red-500" />,
        level: '85%',
        tag: 'Core & Android',
        description: 'Enterprise Object-Oriented patterns, multithreading, and native Android applications.',
        codeSnippet: 'public class ByApp extends AppCompatActivity {\n    @Override\n    protected void onCreate(Bundle saved) {\n        super.onCreate(saved);\n    }\n}',
        features: ['OOP Architecture', 'Android Native', 'Data Structures']
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400" />,
        level: '88%',
        tag: 'ES6+ & Async',
        description: 'Full-stack reactive web applications, modern ES6+ paradigms, and DOM engines.',
        codeSnippet: 'const fetchEcosystem = async () => {\n  const res = await fetch("/api/v1/stack");\n  return res.json();\n};',
        features: ['Async/Await', 'Event Loops', 'Modern ES6+']
      },
      {
        name: 'C++',
        icon: <SiCplusplus className="text-blue-400" />,
        level: '80%',
        tag: 'Algorithms & Systems',
        description: 'Memory optimization, low-level data structures, and algorithmic complexity.',
        codeSnippet: 'template <typename T>\nclass Node {\npublic:\n    T data;\n    Node* next;\n};',
        features: ['Memory Management', 'Algorithms', 'High Efficiency']
      },
      {
        name: 'PHP',
        icon: <SiPhp className="text-indigo-400" />,
        level: '75%',
        tag: 'Backend Services',
        description: 'Server-side data routing, relational API endpoints, and web backend services.',
        codeSnippet: 'public function handleRequest(Request $req) {\n    return response()->json(["status" => 200]);\n}',
        features: ['REST API Endpoints', 'Session Management', 'Web Systems']
      },
      {
        name: 'HTML5 & CSS3',
        icon: <SiHtml5 className="text-orange-500" />,
        level: '92%',
        tag: 'Semantic & Layouts',
        description: 'Modern semantic accessibility, cross-browser responsive layouts, and CSS grids.',
        codeSnippet: '<main className="hero-grid">\n  <header className="brand-header">\n    <nav className="nav-container" />\n  </header>\n</main>',
        features: ['Semantic Markup', 'Flexbox & CSS Grid', 'WCAG Accessibility']
      }
    ]
  },
  {
    id: 'frameworks',
    sceneNumber: '02',
    title: 'Modern Frameworks',
    subtitle: 'Production-Grade Scalable Web, Reactive UI & Full-Stack Architectures',
    accentColor: 'from-blue-500 via-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.45)',
    badgeColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    skills: [
      {
        name: 'React',
        icon: <SiReact className="text-cyan-400 animate-spin-slow" />,
        level: '88%',
        tag: 'Frontend Engine',
        description: 'Modern declarative UI components, custom hooks, and high-performance state architecture.',
        codeSnippet: 'export function TechReel() {\n  const [state, setState] = useState(true);\n  return <div className="reel-active" />;\n}',
        features: ['Component Driven', 'Custom Hooks', 'Virtual DOM']
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-white" />,
        level: '85%',
        tag: 'Full-Stack SSR',
        description: 'Server-side rendering, App Router, hybrid static generation, and Vercel edge deployment.',
        codeSnippet: '// app/page.jsx\nexport default async function Page() {\n  const data = await getLiveProjects();\n  return <Feed projects={data} />;\n}',
        features: ['App Router', 'Server Actions', 'Vercel Deployment']
      },
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="text-emerald-500" />,
        level: '82%',
        tag: 'Backend Runtime',
        description: 'Event-driven, asynchronous I/O architectures and scalable backend microservices.',
        codeSnippet: 'import express from "express";\nconst app = express();\napp.get("/api/tech", (req, res) => res.json(stack));',
        features: ['Express REST APIs', 'Event Loop', 'JSON Microservices']
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400" />,
        level: '90%',
        tag: 'Design Systems',
        description: 'Utility-first rapid prototyping, responsive layouts, custom design tokens, and dark theme support.',
        codeSnippet: 'className="backdrop-blur-md bg-white/10\n  border border-cyan-500/30\n  hover:shadow-cyan-500/50"',
        features: ['Dark Mode Native', 'Responsive Tokens', 'Micro-Interactions']
      },
      {
        name: 'Laravel',
        icon: <SiLaravel className="text-rose-500" />,
        level: '78%',
        tag: 'MVC Architecture',
        description: 'Structured web application development with Eloquent ORM, authentication, and migrations.',
        codeSnippet: 'Route::get("/portfolio", [ProjectController::class,\n  "index"]);',
        features: ['Eloquent ORM', 'Routing & Middleware', 'Database Migrations']
      },
      {
        name: 'Vite',
        icon: <SiVite className="text-purple-400" />,
        level: '88%',
        tag: 'Build Tooling',
        description: 'Blazing fast instant server start, lightning HMR, and roll-up production bundling.',
        codeSnippet: 'export default defineConfig({\n  plugins: [react()],\n  server: { port: 3000 }\n});',
        features: ['Instant HMR', 'Optimized Rollup', 'Next-Gen ESM']
      }
    ]
  },
  {
    id: 'tools',
    sceneNumber: '03',
    title: 'Tools & Databases',
    subtitle: 'Persistent Data Modeling, Version Control, Mobile SDK & DevOps Workflows',
    accentColor: 'from-emerald-500 via-teal-500 to-cyan-500',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    badgeColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
    skills: [
      {
        name: 'MySQL',
        icon: <SiMysql className="text-blue-400" />,
        level: '85%',
        tag: 'Relational Database',
        description: 'Complex multi-table relational schema designs, query indexing, and stored procedures.',
        codeSnippet: 'SELECT u.name, p.title, p.live_url\nFROM users u\nJOIN projects p ON u.id = p.author_id\nWHERE p.status = "production";',
        features: ['ACID Compliance', 'Index Optimization', 'Foreign Key Schemas']
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-emerald-400" />,
        level: '80%',
        tag: 'NoSQL Document',
        description: 'Flexible JSON-like document modeling, aggregation pipelines, and high-read collections.',
        codeSnippet: 'await db.collection("tech").find({\n  category: "production"\n}).toArray();',
        features: ['Document Schema', 'Aggregation Pipelines', 'Dynamic Queries']
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-sky-400" />,
        level: '75%',
        tag: 'Enterprise SQL',
        description: 'Robust SQL standards, transactional integrity, and scalable relational data storage.',
        codeSnippet: 'CREATE TABLE portfolio_skills (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    verified BOOLEAN DEFAULT TRUE\n);',
        features: ['Enterprise SQL', 'Relational Constraints', 'High Reliability']
      },
      {
        name: 'Git & GitHub',
        icon: <SiGit className="text-orange-500" />,
        level: '85%',
        tag: 'Version Control',
        description: 'Branch management, pull-request code reviews, git actions, and distributed teamwork.',
        codeSnippet: 'git checkout -b feature/dynamic-skills\ngit commit -m "feat: laptop video reel"\ngit push origin main',
        features: ['Branching Strategies', 'GitHub Actions', 'Code Reviews']
      },
      {
        name: 'Android SDK',
        icon: <SiAndroid className="text-emerald-400" />,
        level: '82%',
        tag: 'Mobile Development',
        description: 'Native Android application packages, XML layouts, and APK distribution on Telegram.',
        codeSnippet: '<activity android:name=".MainActivity"\n    android:exported="true">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n    </intent-filter>\n</activity>',
        features: ['Native APK Build', 'Material Layouts', 'Intent Handling']
      },
      {
        name: 'Docker',
        icon: <SiDocker className="text-sky-400" />,
        level: '75%',
        tag: 'Containerization',
        description: 'Isolated runtime environments, Dockerfiles, and reproducible development containers.',
        codeSnippet: 'FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCMD ["npm", "run", "dev"]',
        features: ['Isolated Images', 'Multi-Stage Builds', 'Reproducible Envs']
      }
    ]
  },
  {
    id: 'ecosystem',
    sceneNumber: '04',
    title: 'Complete Tech Ecosystem',
    subtitle: 'Unified End-to-End System Engineering: From Database to Cloud Client',
    accentColor: 'from-cyan-400 via-blue-500 to-indigo-500',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    badgeColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    skills: [
      {
        name: 'Next.js + React',
        icon: <SiNextdotjs className="text-white" />,
        level: '90%',
        tag: 'Full-Stack Web',
        description: 'Architecting dynamic platforms like By-poems and modern client systems on Vercel.',
        codeSnippet: '// Unified Full-Stack Architecture\nexport async function GET() {\n  return Response.json({ success: true, stack: "Next.js" });\n}',
        features: ['SSR & SSG', 'Full-Stack APIs', 'High Scalability']
      },
      {
        name: 'Python + AI',
        icon: <SiPython className="text-amber-400" />,
        level: '90%',
        tag: 'Intelligent Systems',
        description: 'Developing custom automation agents, data pipelines, and machine learning models.',
        codeSnippet: '# Intelligent Agent Dispatcher\nclass SystemAgent:\n    def execute(self, prompt):\n        return self.llm.invoke(prompt)',
        features: ['Data Science', 'Automated Agents', 'Udacity Verified']
      },
      {
        name: 'Java + Android',
        icon: <FaJava className="text-red-500" />,
        level: '85%',
        tag: 'Mobile Solutions',
        description: 'Delivering native Android mobile client apps distributed to hundreds of users.',
        codeSnippet: '// Native Mobile Client\npublic void syncOfflineCache() {\n    AppDatabase.getInstance(context).sync();\n}',
        features: ['Native Android', 'Telegram Release', 'Local Persistence']
      },
      {
        name: 'Relational DBs',
        icon: <SiPostgresql className="text-sky-400" />,
        level: '82%',
        tag: 'Data Architecture',
        description: 'High-availability relational design with MySQL and PostgreSQL.',
        codeSnippet: '-- Production Relational Setup\nCREATE INDEX idx_user_activity ON users(created_at DESC);',
        features: ['ACID Workflows', 'Optimized Queries', 'Reliable Backup']
      }
    ]
  }
];

const Skills = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0 to 100 within current scene
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCodeMode, setActiveCodeMode] = useState(false);

  const currentScene = SCENES[currentSceneIndex];
  const activeSpotlight = hoveredSkill || currentScene.skills[0];

  // Base duration per scene in ms (e.g. 7000ms at 1x speed)
  const baseSceneDuration = 7000;
  const actualDuration = baseSceneDuration / playbackSpeed;

  // Scene transition timer and progress scrub engine
  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50; // update progress every 50ms for buttery smooth bar
    const progressIncrement = (intervalStep / actualDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Advance to next scene
          setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % SCENES.length);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, intervalStep);

    return () => clearInterval(interval);
  }, [isPlaying, actualDuration, currentSceneIndex]);

  // Jump to specific scene
  const handleSelectScene = (index) => {
    setCurrentSceneIndex(index);
    setProgress(0);
    setHoveredSkill(null);
  };

  const handlePrevScene = () => {
    setCurrentSceneIndex((prev) => (prev === 0 ? SCENES.length - 1 : prev - 1));
    setProgress(0);
    setHoveredSkill(null);
  };

  const handleNextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % SCENES.length);
    setProgress(0);
    setHoveredSkill(null);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const cycleSpeed = () => {
    setPlaybackSpeed((prev) => {
      if (prev === 1) return 1.5;
      if (prev === 1.5) return 2;
      return 1;
    });
  };

  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeItemsRow1 = [...currentScene.skills, ...currentScene.skills, ...currentScene.skills];
  const marqueeItemsRow2 = [...currentScene.skills].reverse().concat([...currentScene.skills].reverse(), [...currentScene.skills].reverse());

  // Calculated fake video timecode
  const totalReelSeconds = 28;
  const currentElapsedSeconds = Math.floor(
    (currentSceneIndex * (totalReelSeconds / SCENES.length)) + 
    ((progress / 100) * (totalReelSeconds / SCENES.length))
  );
  const formattedCurrentTime = `00:${String(currentElapsedSeconds).padStart(2, '0')}`;
  const formattedTotalTime = `00:${totalReelSeconds}`;

  return (
    <section className="py-20 px-3 sm:px-6 relative overflow-hidden select-none">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <FaTv className="text-cyan-500 text-sm animate-pulse" />
            <span>Interactive Tech Reel · Live Mockup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Experience my technical stack dynamically playing across a sleek workstation display — complete with animated tech streams, code architecture, and live controls.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SLEEK LAPTOP HARDWARE MOCKUP */}
        {/* ======================================================== */}
        <div className="relative mx-auto max-w-5xl">
          {/* Dynamic Ambient Glow Behind Laptop */}
          <div
            className="absolute -inset-4 sm:-inset-6 rounded-3xl blur-3xl opacity-40 dark:opacity-60 transition-colors duration-1000 -z-10"
            style={{
              background: `radial-gradient(ellipse at center, ${currentScene.glowColor} 0%, transparent 70%)`
            }}
          />

          {/* LAPTOP LID / SCREEN ENCLOSURE */}
          <div className="relative rounded-t-[24px] sm:rounded-t-[32px] bg-slate-900 p-2 sm:p-4 pb-3 border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-md">
            
            {/* Top Display Bezel: Camera Notch & Live Status LED */}
            <div className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-400">
              {/* Studio Window Controls */}
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                <span className="ml-2 hidden sm:inline-block text-[11px] font-mono text-slate-400">
                  tech-stack-reel.mp4 · 1080p 60fps
                </span>
              </div>

              {/* Centered Camera Lens & Live Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-cyan-900" />
                </div>
                <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/50">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-amber-400'}`} />
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-200">
                    {isPlaying ? 'LIVE STREAM' : 'PAUSED'}
                  </span>
                </div>
              </div>

              {/* Right Resolution Badge */}
              <div className="hidden sm:flex items-center space-x-2 font-mono text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                  4K 60FPS
                </span>
                <span>{formattedCurrentTime}</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* THE LAPTOP SCREEN DISPLAY (THEATER STAGE) */}
            {/* ======================================================== */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#090d16] via-[#0d1424] to-[#070a11] border border-slate-800 text-white min-h-[460px] sm:min-h-[520px] flex flex-col justify-between shadow-inner">
              
              {/* Subtle Screen Scanline Effect */}
              <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-40 z-20" />
              
              {/* Ambient Radial Spotlight */}
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-1000 z-0 opacity-30"
                style={{
                  background: `radial-gradient(circle at 50% 25%, ${currentScene.glowColor} 0%, transparent 65%)`
                }}
              />

              {/* ---------------------------------------------------- */}
              {/* SCREEN TOP: SCENE HEADER & DYNAMIC CATEGORY TITLE */}
              {/* ---------------------------------------------------- */}
              <div className="relative z-10 px-4 sm:px-8 pt-5 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    {/* Scene Tag */}
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider border ${currentScene.badgeColor}`}>
                        SCENE {currentScene.sceneNumber} OF 04
                      </span>
                      <span className="text-xs text-slate-400 font-mono hidden md:inline">
                        ● STACK REEL ENGINE
                      </span>
                    </div>

                    {/* Dynamic Scene Title (Big & Sleek) */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent flex items-center gap-3">
                      <span>{currentScene.title}</span>
                      <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-md bg-white/10 text-cyan-300 border border-white/10">
                        {currentScene.skills.length} Core Techs
                      </span>
                    </h3>

                    {/* Category Tagline */}
                    <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1 line-clamp-1">
                      {currentScene.subtitle}
                    </p>
                  </div>

                  {/* Toggle Mode: Visual Stream vs Code Inspector */}
                  <div className="flex items-center space-x-1.5 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={() => setActiveCodeMode(false)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                        !activeCodeMode
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <FaLaptopCode className="text-xs" />
                      <span>Stream Reel</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCodeMode(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                        activeCodeMode
                          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                          : 'bg-slate-800/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      <FaTerminal className="text-xs" />
                      <span>Code Inspector</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ---------------------------------------------------- */}
              {/* SCREEN MIDDLE: DYNAMIC MOVING LOGOS & SPOTLIGHT DECK */}
              {/* ---------------------------------------------------- */}
              <div className="relative z-10 px-4 sm:px-8 py-3 my-auto space-y-4">
                
                {/* Visual Video Stream View */}
                {!activeCodeMode ? (
                  <div className="space-y-3.5 pause-on-hover">
                    {/* INSTRUCTION PILL */}
                    <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 px-1">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        Continuous dynamic motion stream · Hover any card to inspect
                      </span>
                      <span className="hidden sm:inline text-slate-400">
                        Smooth 60FPS Marquee Engine
                      </span>
                    </div>

                    {/* TRACK 1: Moving Smoothly Across Screen (Leftwards) */}
                    <div className="relative overflow-hidden py-1">
                      {/* Gradient Mask on edges for seamless fading */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#090d16] to-transparent z-10 pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#090d16] to-transparent z-10 pointer-events-none" />

                      <div className="animate-marquee-left gap-3 sm:gap-4">
                        {marqueeItemsRow1.map((skill, idx) => (
                          <div
                            key={`row1-${skill.name}-${idx}`}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border transition-all duration-300 cursor-pointer shadow-md transform hover:scale-105 ${
                              activeSpotlight.name === skill.name
                                ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400'
                                : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                            }`}
                          >
                            <span className="text-2xl sm:text-3xl flex items-center justify-center p-1.5 rounded-lg bg-black/40 border border-white/5">
                              {skill.icon}
                            </span>
                            <div className="flex flex-col">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-semibold">
                                  {skill.level}
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {skill.tag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* TRACK 2: Moving Smoothly Across Screen in Reverse (Rightwards) */}
                    <div className="relative overflow-hidden py-1">
                      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#090d16] to-transparent z-10 pointer-events-none" />
                      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#090d16] to-transparent z-10 pointer-events-none" />

                      <div className="animate-marquee-right gap-3 sm:gap-4">
                        {marqueeItemsRow2.map((skill, idx) => (
                          <div
                            key={`row2-${skill.name}-${idx}`}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border transition-all duration-300 cursor-pointer shadow-md transform hover:scale-105 ${
                              activeSpotlight.name === skill.name
                                ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/25 ring-1 ring-cyan-400'
                                : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                            }`}
                          >
                            <span className="text-2xl sm:text-3xl flex items-center justify-center p-1.5 rounded-lg bg-black/40 border border-white/5">
                              {skill.icon}
                            </span>
                            <div className="flex flex-col">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
                                  {skill.level}
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {skill.tag}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ACTIVE SPOTLIGHT SUMMARY CARD */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-slate-800/90 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-2xl sm:text-3xl">
                          {activeSpotlight.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-extrabold text-base sm:text-lg text-white">
                              {activeSpotlight.name}
                            </h4>
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              Active Spotlight · {activeSpotlight.level}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 mt-0.5 line-clamp-1 sm:line-clamp-none">
                            {activeSpotlight.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 self-start md:self-center">
                        {activeSpotlight.features.map((feat, fidx) => (
                          <span
                            key={fidx}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-medium border border-slate-700/60 flex items-center gap-1"
                          >
                            <FaCheckCircle className="text-cyan-400 text-[10px]" />
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Code Inspector View */
                  <div className="rounded-xl bg-black/70 border border-slate-800 p-4 font-mono text-xs sm:text-sm space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400 text-xs">
                      <span className="flex items-center space-x-2 text-cyan-400">
                        <FaTerminal />
                        <span>snippet_{activeSpotlight.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.ts</span>
                      </span>
                      <span>UTF-8 · TypeScript/Next Runtime</span>
                    </div>

                    <pre className="text-emerald-400 overflow-x-auto p-2 bg-slate-950/70 rounded-lg border border-slate-800/60 leading-relaxed font-mono">
                      <code>{activeSpotlight.codeSnippet}</code>
                    </pre>

                    <div className="flex flex-wrap gap-2 text-xs text-slate-300 pt-1">
                      <span className="text-slate-400">Highlights:</span>
                      {activeSpotlight.features.map((feat, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ---------------------------------------------------- */}
              {/* SCREEN BOTTOM: REAL INTERACTIVE VIDEO PLAYER CONTROLS */}
              {/* ---------------------------------------------------- */}
              <div className="relative z-10 bg-slate-950/90 border-t border-slate-800/90 px-4 sm:px-6 py-3 backdrop-blur-md">
                
                {/* Scrub Progress Bar */}
                <div 
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                    setProgress(newProgress);
                  }}
                  className="relative w-full h-2 bg-slate-800 hover:h-2.5 rounded-full overflow-hidden cursor-pointer group transition-all mb-3"
                  title="Click to scrub scene timeline"
                >
                  <div
                    className={`h-full bg-gradient-to-r ${currentScene.accentColor} transition-all duration-75 relative`}
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing Playhead Handle */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md shadow-cyan-500" />
                  </div>
                </div>

                {/* Video Controls Deck */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  {/* Playback Buttons & Timecode */}
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <button
                      type="button"
                      onClick={handlePrevScene}
                      className="p-2 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                      title="Previous Category"
                    >
                      <FaStepBackward />
                    </button>

                    <button
                      type="button"
                      onClick={togglePlayPause}
                      className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:scale-105 transition shadow-md shadow-cyan-500/30"
                      title={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs pl-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={handleNextScene}
                      className="p-2 rounded-lg bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                      title="Next Category"
                    >
                      <FaStepForward />
                    </button>

                    {/* Timecode */}
                    <span className="font-mono text-slate-400 text-[11px] sm:text-xs">
                      <span className="text-white font-bold">{formattedCurrentTime}</span> / {formattedTotalTime}
                    </span>
                  </div>

                  {/* Scene Tabs (Languages, Frameworks, Tools, All) */}
                  <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
                    {SCENES.map((scene, index) => (
                      <button
                        key={scene.id}
                        type="button"
                        onClick={() => handleSelectScene(index)}
                        className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                          currentSceneIndex === index
                            ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/40 font-bold'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                        }`}
                      >
                        {scene.sceneNumber}. {scene.id === 'languages' ? 'Languages' : scene.id === 'frameworks' ? 'Frameworks' : scene.id === 'tools' ? 'Tools' : 'Matrix'}
                      </button>
                    ))}
                  </div>

                  {/* Speed Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={cycleSpeed}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 font-mono text-[11px] font-bold border border-slate-700 hover:border-cyan-500/50 transition"
                      title="Playback Speed"
                    >
                      {playbackSpeed}x
                    </button>
                    <span className="text-[11px] font-mono text-emerald-400 hidden lg:inline">
                      ● REEL LOOP ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* LAPTOP HINGE & BOTTOM BASE CHASSIS */}
          {/* ======================================================== */}
          {/* Central Hinge */}
          <div className="h-2.5 sm:h-3.5 bg-slate-800 border-t border-slate-700/60 mx-auto w-40 sm:w-64 rounded-b-sm shadow-inner" />

          {/* Lower Aluminum Wedge Deck */}
          <div className="relative rounded-b-2xl h-5 sm:h-6 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-700 dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 border-t border-slate-300/40 dark:border-slate-600/40 shadow-2xl w-full sm:w-[103%] sm:-mx-[1.5%]">
            {/* Centered Ergonomic Thumb Cutout */}
            <div className="w-24 sm:w-36 h-1.5 bg-slate-600 dark:bg-slate-950 mx-auto rounded-b-md shadow-inner" />
          </div>

          {/* Desk Ambient Cast Shadow & Underglow */}
          <div 
            className="w-4/5 mx-auto h-4 sm:h-6 rounded-full blur-xl opacity-50 dark:opacity-75 transition-all duration-1000 -mt-2 -z-10"
            style={{
              background: `radial-gradient(ellipse at center, ${currentScene.glowColor} 0%, transparent 75%)`
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
