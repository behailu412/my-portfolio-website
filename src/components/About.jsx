import React, { useState } from 'react';
import { personalInfo, contactInfo, heroTaglines } from '../data/data';
import Typewriter from './Typewriter';
import QuickStats from './QuickStats';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGraduationCap, 
  FaPaperPlane, 
  FaFileAlt, 
  FaCopy, 
  FaCheck
} from 'react-icons/fa';

const About = ({ onCopySuccess }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    if (onCopySuccess) {
      onCopySuccess(`Email copied: ${contactInfo.email}`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Availability Status Badge */}
        <div className="flex justify-center lg:justify-start mb-6 animate-fade-down">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>4th-Year CS Senior · Open to Full-Stack & AI Roles</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Profile Image & Visual Showcase */}
          <div className="lg:w-1/3 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Animated Glowing Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse-glow"></div>
              
              <div className="relative">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-cyan-400/50 dark:border-cyan-400/60 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Image failed to load:', personalInfo.profileImage);
                    e.target.src = '/images/myprofile.png';
                  }}
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-2 right-2 sm:bottom-0 sm:right-0 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white border border-cyan-500/50 shadow-xl backdrop-blur-md text-xs font-bold flex items-center space-x-1.5 animate-float-slow">
                  <FaGraduationCap className="text-cyan-400 text-sm" />
                  <span>4th Year Senior</span>
                </div>
              </div>
            </div>

            {/* University Tag */}
            <div className="mt-5 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1.5">
                <FaMapMarkerAlt className="text-cyan-500" />
                Debre Berhan University, Ethiopia
              </span>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typewriter Heading */}
              <div className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-gray-200 min-h-[38px] flex items-center justify-center lg:justify-start">
                <Typewriter words={heroTaglines} />
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Education Highlight Card */}
            <div className="glass-card p-5 sm:p-6 space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Academic Status</h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Debre Berhan University</p>
                </div>
              </div>
              <div className="space-y-1 pl-1 border-l-2 border-cyan-500/30 ml-3">
                <p className="text-slate-900 dark:text-white font-semibold text-sm sm:text-base pl-3">
                  {personalInfo.education.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm pl-3 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/25">
                    {personalInfo.education.year}
                  </span>
                  <span className="text-slate-500 dark:text-gray-400">
                    Graduation: <span className="font-semibold text-slate-800 dark:text-gray-200">{personalInfo.education.expectedGraduation}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base border-blue-500/30 hover:border-blue-500"
              >
                <FaLinkedin className="text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <FaPaperPlane className="text-sky-500" />
                <span>Telegram</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck className="text-emerald-500" /> : <FaCopy className="text-cyan-500" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Resume Callout */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={`${contactInfo.resume}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaFileAlt />
                <span>View Full Resume</span>
              </a>
              <span className="text-xs text-slate-500 dark:text-gray-400">
                PDF hosted on Google Drive
              </span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <QuickStats />
      </div>
    </section>
  );
};

export default About;
