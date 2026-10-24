import React, { useState } from 'react';
import { certifications } from '../data/data';
import { FaDownload, FaCertificate, FaCheckCircle, FaExternalLinkAlt, FaAward, FaShieldAlt } from 'react-icons/fa';

const Certifications = ({ onNotify }) => {
  const [downloading, setDownloading] = useState(null);
  const [viewing, setViewing] = useState(null);

  const handleDownload = (cert, index) => {
    setDownloading(index);
    const newWindow = window.open(cert.pdfPath, '_blank');
    if (!newWindow) {
      const link = document.createElement('a');
      link.href = cert.pdfPath;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setTimeout(() => {
      setDownloading(null);
    }, 1000);
  };

  const handleView = (cert, index) => {
    setViewing(index);
    window.open(cert.certificateLink, '_blank');
    if (onNotify) {
      onNotify(`Verifying ${cert.title} on Udacity...`);
    }
    setTimeout(() => {
      setViewing(null);
    }, 1000);
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Accredited Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            <span className="gradient-text">Certifications</span> & Accreditations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Verified industry qualifications from <span className="font-semibold text-cyan-600 dark:text-cyan-400">Udacity</span> in Artificial Intelligence, Data Analysis, and Modern Development
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card p-6 sm:p-7 hover:shadow-2xl transition-all duration-300 border border-slate-200/80 dark:border-gray-800 hover:border-cyan-400/50 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                        <FaAward className="text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold border border-cyan-500/20">
                          <FaShieldAlt className="text-[10px] mr-1" />
                          {cert.issuer}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-gray-500">·</span>
                        <span className="text-xs text-slate-500 dark:text-gray-400 font-medium">Issued {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 text-xs font-medium border border-slate-200/80 dark:border-gray-700/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-200/60 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => handleView(cert, index)}
                  disabled={viewing === index}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>{viewing === index ? 'Validating...' : 'Verify Online'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(cert, index)}
                  disabled={downloading === index}
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 text-slate-800 dark:text-gray-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  <FaDownload className="text-xs" />
                  <span>{downloading === index ? 'Opening...' : 'View PDF'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
