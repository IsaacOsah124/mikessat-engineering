import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [preselectedService, setPreselectedService] = useState('');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const PAGE_TITLES: Record<string, string> = {
    home: 'Mikessat Engineering | Electrical, CCTV, Satellite & Security Services in Ghana',
    about: 'About Us | Mikessat Engineering – Ghana\'s Trusted Engineering Team',
    services: 'Our Services | Electrical, CCTV, DSTV, Gate Automation & More – Mikessat Engineering',
    projects: 'Our Projects | Completed Engineering Works – Mikessat Engineering Ghana',
    contact: 'Contact Us | Get a Free Quote – Mikessat Engineering Ghana',
  };

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about' || hash.includes('team')) {
        setCurrentPage('about');
        if (hash.includes('team')) {
          setTimeout(() => {
            const teamEl = document.getElementById('team');
            if (teamEl) {
              const yOffset = -80;
              const yPosition = teamEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: yPosition, behavior: 'smooth' });
            }
          }, 350);
          return;
        }
      } else if (hash === '#/services' || hash === '#services') {
        setCurrentPage('services');
      } else if (hash === '#/projects' || hash === '#projects') {
        setCurrentPage('projects');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
      // Scroll to top on navigation to emulate actual page changes
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // trigger initially

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleQuoteSelect = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    window.location.hash = '#/contact';
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-[#0A5C9E]/20 dark:selection:bg-[#0A5C9E]/30 selection:text-slate-900 dark:selection:text-slate-100 transition-colors duration-300">
      {/* Dynamic Nav Menu */}
      <Navbar currentPage={currentPage} theme={theme} onThemeToggle={toggleTheme} />
      
      {/* Route Views Wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <Hero />
              <WhyChooseUs />
              <Process />
              <Team />
              <Testimonials />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="pt-20"
            >
              <About />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="pt-20"
            >
              <Services onQuoteSelect={handleQuoteSelect} />
            </motion.div>
          )}

          {currentPage === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="pt-20"
            >
              <Projects />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="pt-20"
            >
              <Contact preselectedService={preselectedService} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <Footer />
    </div>
  );
}
