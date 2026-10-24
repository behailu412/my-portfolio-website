import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import DeveloperTerminal from './components/DeveloperTerminal';
import Toast from './components/Toast';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'journey', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 text-slate-900 dark:text-white selection:bg-cyan-500/25 dark:selection:bg-cyan-500/35 relative overflow-x-hidden bg-grid-pattern">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive 60fps Constellation Canvas */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <section id="home">
          <About onCopySuccess={showToast} />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="journey">
          <Journey />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications onNotify={showToast} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Interactive Developer Terminal Widget */}
      <DeveloperTerminal />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />

      {/* Footer */}
      <footer className="relative z-10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-t border-slate-200/90 dark:border-gray-800 py-10 mt-20">
        <div className="container mx-auto px-6 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xs">BY</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight">
              Behailu Yifru
            </span>
          </div>

          <p className="text-slate-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Behailu Yifru (2018 E.C.). All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-gray-500 text-xs">
            4th-Year Computer Science Scholar · Debre Berhan University · Engineered with React, Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;