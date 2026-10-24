import React from 'react';
import { careerJourney } from '../data/data';
import { FaGraduationCap, FaAward, FaLaptopCode, FaRocket } from 'react-icons/fa';

const ICONS = [
  <FaLaptopCode className="text-cyan-500" />,
  <FaAward className="text-blue-500" />,
  <FaRocket className="text-indigo-500" />,
  <FaGraduationCap className="text-cyan-400" />
];

const Journey = () => {
  return (
    <section id="journey" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academic & Tech Progression
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            From foundational computer science concepts to full-stack engineering and 4th-year senior achievements
          </p>
        </div>

        <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-4 md:ml-32 space-y-12">
          {careerJourney.map((step, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-cyan-500 flex items-center justify-center text-sm shadow-md group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                {ICONS[index % ICONS.length]}
              </div>

              {/* Year indicator desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28 text-sm font-bold text-cyan-600 dark:text-cyan-400">
                {step.period.split(' - ')[0]}
              </div>

              {/* Content Card */}
              <div className="glass-card p-6 rounded-2xl group-hover:border-cyan-400/50 transition-all duration-300 transform group-hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25">
                      {step.badge}
                    </span>
                    <span className="md:hidden text-xs font-bold text-cyan-600 dark:text-cyan-400">
                      {step.period}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                    {step.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
