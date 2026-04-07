import React from 'react';
import { skills } from '../data/data';
import { FaCode, FaTools, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-cyan-600 dark:text-cyan-400 text-3xl" />,
      data: skills.programmingLanguages,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frameworks & Tools",
      icon: <FaTools className="text-blue-600 dark:text-blue-400 text-3xl" />,
      data: skills.frameworksTools,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-purple-600 dark:text-purple-400 text-3xl" />,
      data: skills.databases,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50/90 to-slate-100/80 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.data.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-slate-800 dark:text-gray-200 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
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