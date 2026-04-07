import React, { useState } from 'react';
import { certifications } from '../data/data';
import { FaDownload, FaCertificate, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [downloading, setDownloading] = useState(null);
  const [viewing, setViewing] = useState(null);

  const handleDownload = (cert, index) => {
    setDownloading(index);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cert.pdfPath;
    link.download = `${cert.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after 1 second
    setTimeout(() => {
      setDownloading(null);
    }, 1000);
  };

  const handleView = (cert, index) => {
    setViewing(index);
    window.open(cert.certificateLink, '_blank');
    
    // Reset viewing state after 1 second
    setTimeout(() => {
      setViewing(null);
    }, 1000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-sky-50/60 dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            <span className="gradient-text">Certifications</span> & <span className="text-cyan-600 dark:text-cyan-400">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications from <span className="font-semibold text-cyan-600 dark:text-cyan-400">Udacity</span> and other recognized institutions
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card p-4 sm:p-6 lg:p-8 hover:transform hover:scale-105 transition-all duration-300 animate-fade-up shadow-lg hover:shadow-xl border border-slate-200/50 dark:border-gray-700/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                {/* Certificate Icon */}
                <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl"></div>
                    <div className="relative w-16 h-16 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FaCertificate className="text-white text-2xl sm:text-xl drop-shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="flex-1 space-y-4 sm:space-y-3 text-center sm:text-left">
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center sm:items-center space-x-0 sm:space-x-3 text-sm">
                      <span className="inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300 rounded-full font-semibold">
                        <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 text-xs" />
                        {cert.issuer}
                      </span>
                      <span className="text-slate-400 dark:text-gray-500 mx-2">•</span>
                      <span className="text-slate-500 dark:text-gray-400 font-medium">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-slate-700 dark:text-gray-300 text-xs rounded-lg border border-slate-200/80 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                      >
                        <FaCheckCircle className="text-cyan-600 dark:text-cyan-400 text-xs" />
                        <span className="font-medium">{skill}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 sm:gap-4 mt-6">
                    <button
                      onClick={() => handleView(cert, index)}
                      disabled={viewing === index}
                      className="group relative inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                      <FaExternalLinkAlt className={`${viewing === index ? 'animate-pulse' : ''} text-lg`} />
                      <span>{viewing === index ? 'Opening...' : 'View Certificate'}</span>
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button
                      onClick={() => handleDownload(cert, index)}
                      disabled={downloading === index}
                      className="group relative inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white text-sm font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                      <FaDownload className={`${downloading === index ? 'animate-bounce' : ''} text-lg`} />
                      <span>{downloading === index ? 'Downloading...' : 'Download Certificate'}</span>
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-slate-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-slate-200/50 dark:border-gray-600">
            <FaCertificate className="text-cyan-600 dark:text-cyan-400 text-lg" />
            <p className="text-slate-600 dark:text-gray-300 text-sm font-medium">
              <span className="font-semibold">Click "View Certificate"</span> to verify authenticity online or <span className="font-semibold">"Download Certificate"</span> to save PDF version
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;