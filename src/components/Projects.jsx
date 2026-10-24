import React, { useState } from 'react';
import { projects } from '../data/data';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch, 
  FaTimes, 
  FaInfoCircle, 
  FaPaperPlane, 
  FaPlay, 
  FaLock, 
  FaCheckCircle, 
  FaLaptopCode,
  FaMobileAlt,
  FaGlobe
} from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work (9)' },
    { id: 'production', name: 'Live Production & Client' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile (Android)' },
    { id: 'ai', name: 'AI & Tools' }
  ];

  const filteredProjects = projects.filter((project) => {
    let matchesCategory = true;
    if (filter === 'production') {
      matchesCategory = project.isPrivate === true || project.liveDemo !== null;
    } else if (filter === 'web') {
      matchesCategory = project.category === 'web';
    } else if (filter === 'mobile') {
      matchesCategory = project.category === 'mobile';
    } else if (filter === 'ai') {
      matchesCategory = project.category === 'ai' || project.category === 'tool';
    }

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      (project.searchKeywords && project.searchKeywords.toLowerCase().includes(q)) ||
      project.technologies.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Extensive Engineering Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            A diverse showcase of live production platforms, native Android applications, client systems, and open-source architectures
          </p>
        </div>

        {/* Professional Scope Statement Banner */}
        <div className="glass-card p-5 sm:p-6 mb-10 border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 flex-shrink-0 mt-0.5">
                <FaLaptopCode className="text-xl" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Full-Lifecycle Engineering: Production & Private Systems
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                  In addition to open-source GitHub repositories, my portfolio includes deployed production web platforms (Vercel), native Android mobile apps distributed on Telegram (<span className="text-cyan-600 dark:text-cyan-400 font-semibold">t.me/bytech21</span>), and commercial client solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Releases
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
                <FaMobileAlt className="text-xs" />
                Android Native
              </span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Live Search */}
          <div className="relative w-full md:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search by tech, name, or 'የግጥም መድረክ'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                aria-label="Clear search"
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
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
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
              No matching projects for "{searchQuery}". Try searching for Next.js, Java, Python, or 'የግጥም መድረክ'.
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group flex flex-col hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Project Image Banner */}
                <div className="relative overflow-hidden h-48 bg-slate-950">
                  <img
                    src={encodeURI(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 text-cyan-300 backdrop-blur-md border border-cyan-500/30 truncate max-w-[200px]">
                      {project.badge || project.category}
                    </span>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 rounded-lg bg-slate-900/80 text-white/90 hover:text-cyan-400 backdrop-blur-md border border-white/10"
                      title="Inspect details"
                    >
                      <FaInfoCircle className="text-xs" />
                    </button>
                  </div>

                  {/* Private vs Public Pill */}
                  <div className="absolute bottom-3 left-3">
                    {project.isPrivate ? (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/25 text-purple-200 border border-purple-500/40 backdrop-blur-md">
                        <FaLock className="text-[9px]" />
                        <span>Private Production</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/25 text-cyan-200 border border-cyan-500/40 backdrop-blur-md">
                        <FaGithub className="text-[10px]" />
                        <span>Open Source</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-2">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-[11px] font-medium rounded-md border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-200/60 dark:border-gray-800 text-xs font-semibold">
                      <div className="flex items-center gap-3">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                          >
                            <FaGlobe className="text-xs" />
                            <span>Live App</span>
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}

                        {project.telegramApp && (
                          <a
                            href={project.telegramApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                          >
                            <FaPaperPlane className="text-xs" />
                            <span>Get APK</span>
                          </a>
                        )}

                        {project.videoDemo && (
                          <a
                            href={project.videoDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300"
                          >
                            <FaPlay className="text-[10px]" />
                            <span>TikTok Demo</span>
                          </a>
                        )}

                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-slate-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                          >
                            <FaGithub className="text-sm" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-slate-500 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-300"
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
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl glass-card">
            <span className="text-xs sm:text-sm text-slate-600 dark:text-gray-300">
              Looking for raw open-source repositories and utility scripts?
            </span>
            <a
              href="https://github.com/behailu412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary text-xs py-2 px-4"
            >
              <FaGithub />
              <span>Explore GitHub Repos</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="relative h-48 bg-slate-950">
              <img
                src={encodeURI(selectedProject.image)}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-cyan-400 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.badge || selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-slate-700 dark:text-gray-300 text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-1">
                  Architecture &amp; Features
                </h4>
                <p className="leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm">
                        <FaCheckCircle className="text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.searchKeywords && (
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 text-xs">
                  <span className="font-semibold text-slate-900 dark:text-white">Discoverability: </span>
                  <span className="text-slate-600 dark:text-gray-300">
                    Searchable on Chrome/Edge or Google via keywords: <code className="text-cyan-600 dark:text-cyan-400 font-mono">{selectedProject.searchKeywords.split(' ').slice(0, 4).join(' ')}</code>
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 dark:border-gray-800">
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-xs sm:text-sm py-2 px-4"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Open Live Platform</span>
                  </a>
                )}

                {selectedProject.telegramApp && (
                  <a
                    href={selectedProject.telegramApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center space-x-2 text-xs sm:text-sm py-2 px-4 border-sky-500/30 text-sky-600 dark:text-sky-400"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Download on Telegram</span>
                  </a>
                )}

                {selectedProject.videoDemo && (
                  <a
                    href={selectedProject.videoDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center space-x-2 text-xs sm:text-sm py-2 px-4 border-rose-500/30 text-rose-600 dark:text-rose-400"
                  >
                    <FaPlay className="text-xs" />
                    <span>Watch Video Demo</span>
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2 text-xs sm:text-sm py-2 px-4"
                  >
                    <FaGithub />
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;