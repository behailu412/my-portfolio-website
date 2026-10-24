import React, { useState } from 'react';
import { skills } from '../data/data';
import { FaCode, FaTools, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPython, 
  SiJavascript, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiGit, 
  SiLaravel,
  SiCplusplus,
  SiPhp,
  SiHtml5
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Map technology to professional SVG / Brand icons
const TECH_ICONS = {
  'Next.js': <SiNextdotjs className="text-black dark:text-white text-lg" />,
  'React': <SiReact className="text-cyan-400 text-lg" />,
  'Node.js': <SiNodedotjs className="text-emerald-500 text-lg" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400 text-lg" />,
  'Python': <SiPython className="text-amber-400 text-lg" />,
  'JavaScript': <SiJavascript className="text-yellow-400 text-lg" />,
  'Java': <FaJava className="text-red-500 text-lg" />,
  'C++': <SiCplusplus className="text-blue-500 text-lg" />,
  'PHP': <SiPhp className="text-indigo-400 text-lg" />,
  'HTML/CSS': <SiHtml5 className="text-orange-500 text-lg" />,
  'Git': <SiGit className="text-orange-600 text-lg" />,
  'Laravel': <SiLaravel className="text-red-500 text-lg" />,
  'MySQL': <SiMysql className="text-blue-500 text-lg" />,
  'MongoDB': <SiMongodb className="text-emerald-500 text-lg" />,
  'PostgreSQL': <SiPostgresql className="text-sky-600 text-lg" />
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      title: "Programming Languages",
      icon: <FaCode className="text-cyan-600 dark:text-cyan-400 text-2xl" />,
      data: skills.programmingLanguages,
      color: "from-cyan-500 to-blue-500",
      accent: "border-cyan-500/30"
    },
    {
      id: 'frameworks',
      title: "Frameworks & Tools",
      icon: <FaTools className="text-blue-600 dark:text-blue-400 text-2xl" />,
      data: skills.frameworksTools,
      color: "from-blue-500 to-indigo-500",
      accent: "border-blue-500/30"
    },
    {
      id: 'databases',
      title: "Databases & Storage",
      icon: <FaDatabase className="text-purple-600 dark:text-purple-400 text-2xl" />,
      data: skills.databases,
      color: "from-indigo-500 to-purple-500",
      accent: "border-purple-500/30"
    }
  ];

  const visibleCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedFilter);

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical stack, featuring Next.js, modern web frameworks, Python, and databases
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Disciplines', icon: <FaLayerGroup className="text-xs" /> },
            { id: 'languages', label: 'Languages', icon: <FaCode className="text-xs" /> },
            { id: 'frameworks', label: 'Frameworks & Tools', icon: <FaTools className="text-xs" /> },
            { id: 'databases', label: 'Databases', icon: <FaDatabase className="text-xs" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                  : 'bg-white/80 dark:bg-gray-800/60 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700 hover:border-cyan-400/50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCategories.map((category, index) => (
            <div
              key={category.id}
              className={`glass-card p-6 sm:p-7 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${category.accent}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-slate-200/60 dark:border-gray-800">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-gray-400">
                    {category.data.length} technologies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.data.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1.5 group/skill">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2.5">
                        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
                          {TECH_ICONS[skill.name] || <span className="text-sm">{skill.icon}</span>}
                        </span>
                        <span className="text-slate-800 dark:text-gray-200 font-semibold text-sm group-hover/skill:text-cyan-500 transition-colors">
                          {skill.name}
                        </span>
                        {skill.name === 'Next.js' && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                            NEW
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="relative h-2 w-full bg-slate-200/80 dark:bg-gray-700/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 animate-shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;