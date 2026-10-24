import React, { useState } from 'react';
import { projects } from '../data/data';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes, FaLayerGroup, FaInfoCircle } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'tool', name: 'Tools' }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Handcrafted Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Real-world software engineered with modern web frameworks, intelligent AI algorithms, and cross-platform tools
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <FaTimes className="text-xs" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105'
                    : 'bg-white/80 dark:bg-gray-800/60 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700 hover:border-cyan-400/40'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-card p-12 text-center max-w-md mx-auto my-8">
            <FaSearch className="text-4xl text-slate-400 dark:text-gray-500 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No Projects Found</h3>
            <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
              No matching projects for "{searchQuery}". Try searching for Python, Java, or React.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilter('all');
              }}
              className="btn-primary text-xs px-4 py-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group flex flex-col hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-slate-100 dark:bg-gray-900">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 text-cyan-400 backdrop-blur-md border border-cyan-500/30 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Quick Inspect Trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 text-white/90 hover:text-cyan-400 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                    title="Quick inspect"
                  >
                    <FaInfoCircle className="text-sm" />
                  </button>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs rounded-md border border-cyan-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-gray-800">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        <FaGithub className="text-lg" />
                        <span>Source Code</span>
                      </a>
                      
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub Footnote */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/behailu412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-secondary text-sm"
          >
            <FaGithub />
            <span>Discover More Repositories on GitHub</span>
            <FaExternalLinkAlt className="text-xs ml-1" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="relative h-48 bg-slate-900">
              <img
                src={encodeURI(selectedProject.image)}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-cyan-400 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 dark:text-gray-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-1">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-gray-800">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2 text-xs sm:text-sm"
                >
                  <FaGithub />
                  <span>Inspect on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;