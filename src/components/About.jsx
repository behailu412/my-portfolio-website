import React from 'react';
import { personalInfo, contactInfo } from '../data/data';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaPaperPlane, FaFileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-8 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-cyan-500/40 dark:border-cyan-500/50 shadow-2xl shadow-slate-900/10 dark:shadow-none group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.error('Image failed to load:', personalInfo.profileImage);
                  e.target.src = '/images/myprofile.png'; // Fallback
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="gradient-text">Behailu Yifru</span>
              </h1>
              <p className="text-lg sm:text-xl text-cyan-600 dark:text-cyan-400 font-semibold">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Education */}
            <div className="glass-card p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="text-cyan-600 dark:text-cyan-400 text-2xl" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-slate-900 dark:text-white font-medium">{personalInfo.education.university}</p>
                <p className="text-slate-600 dark:text-gray-300">{personalInfo.education.degree}</p>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm">
                  {personalInfo.education.year} Year · Expected Graduation: {personalInfo.education.expectedGraduation}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaPaperPlane />
                <span>Telegram</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="btn-secondary inline-flex items-center justify-center space-x-2 w-full sm:w-auto text-sm sm:text-base"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>

            {/* Resume Section */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <FaFileAlt className="text-cyan-600 dark:text-cyan-400 text-2xl" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Resume</h3>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                View my complete professional resume to learn more about my skills, experience, and qualifications.
              </p>
              <a
                href={`${contactInfo.resume}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                <FaFileAlt className="text-lg" />
                <span>View Resume</span>
              </a>
            </div>

            <div className="flex items-center space-x-2 text-slate-500 dark:text-gray-400">
              <FaMapMarkerAlt />
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
