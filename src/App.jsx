import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 text-slate-900 dark:text-white selection:bg-cyan-500/25 dark:selection:bg-cyan-500/35">
      <Navbar activeSection={activeSection} />
      <main>
        <section id="home">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-md border-t border-slate-200/90 dark:border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            © 2018 Behailu Yifru. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-gray-500 text-xs mt-2">
            Built with React & Tailwind CSS | Computer Science Student at Debre Berhan University
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;